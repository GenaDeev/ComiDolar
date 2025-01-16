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

export async function fetchMonitors(): Promise<Statuses> {
  const url = "https://uptime.betterstack.com/api/v2/monitors";
  const token = BETTERSTACK_API_KEY;

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
      (monitor) => monitor.attributes.url === "https://dolarapi.com/v1/dolares"
    );

    const backendMonitor = data.data.find(
      (monitor) =>
        monitor.attributes.url === "https://filehost.comidolar.com.ar/"
    );

    const databaseMonitor = data.data.find(
      (monitor) =>
        monitor.attributes.url === "https://mndgyahtssypdtwwusoj.supabase.co/"
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
        new Date().toLocaleTimeString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
      );
    } else {
      throw new Error("Missing monitors in response");
    }
  } catch (error) {
    console.error("Error fetching monitors:", error);
    return new Statuses(
      undefined,
      undefined,
      undefined,
      undefined,
      "Error fetching monitor status",
      new Date().toLocaleTimeString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
    );
  }
}
