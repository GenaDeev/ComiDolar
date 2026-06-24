const { BETTERSTACK_API_KEY } = import.meta.env;

type Status = "up" | "mid" | "down" | undefined;

class Statuses {
  api: Status;
  backend: Status;
  database: Status;
  final: Status;
  lore: string;
  ts: string;
  constructor(api, backend, database, final, lore, ts) {
    this.api = api;
    this.backend = backend;
    this.database = database;
    this.final = final;
    this.lore = lore;
    this.ts = ts;
  }
}

let cachedPromise: Promise<Statuses> | null = null;
let lastFetched: number = 0;
const CACHE_TTL_MS = 60000; // 1 minute cache TTL

export async function fetchMonitors(): Promise<Statuses> {
  const now = Date.now();
  if (cachedPromise && now - lastFetched < CACHE_TTL_MS) {
    return cachedPromise;
  }

  const url = "https://uptime.betterstack.com/api/v2/monitors";
  const token = BETTERSTACK_API_KEY;

  lastFetched = now;
  cachedPromise = (async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const apiMonitor = data.data.find(
        (monitor) => monitor.attributes.pronounceable_name === "dolarapi.com",
      );

      const backendMonitor = data.data.find(
        (monitor) =>
          monitor.attributes.pronounceable_name === "api.comidolar.com.ar",
      );

      const databaseMonitor = data.data.find(
        (monitor) =>
          monitor.attributes.pronounceable_name === "db.comidolar.com.ar",
      );

      if (apiMonitor && backendMonitor && databaseMonitor) {
        const apiStatus: Status = apiMonitor.attributes.status;
        const backendStatus: Status = backendMonitor.attributes.status;
        const databaseStatus: Status = databaseMonitor.attributes.status;

        const final: Status =
          apiStatus === "down" &&
          backendStatus === "down" &&
          databaseStatus === "down"
            ? "down"
            : apiStatus === "up" &&
                backendStatus === "up" &&
                databaseStatus === "up"
              ? "up"
              : "mid";

        const lore: string =
          final === "up"
            ? "Todos los servicios están en línea"
            : final === "mid"
              ? "Algunos servicios están caídos"
              : "Todos los servicios están caídos";

        return new Statuses(
          apiStatus,
          backendStatus,
          databaseStatus,
          final,
          lore,
          new Date().toLocaleTimeString("es-AR", {
            timeZone: "America/Argentina/Buenos_Aires",
            hour12: false,
          }),
        );
      } else {
        throw new Error("Missing monitors in response");
      }
    } catch (error) {
      console.error("Error fetching monitors:", error);
      // Reset the cache on failure so next request can retry immediately
      cachedPromise = null;
      lastFetched = 0;
      return new Statuses(
        undefined,
        undefined,
        undefined,
        undefined,
        "Error fetching monitor status",
        new Date().toLocaleTimeString("es-AR", {
          timeZone: "America/Argentina/Buenos_Aires",
          hour12: false,
        }),
      );
    }
  })();

  return cachedPromise;
}
