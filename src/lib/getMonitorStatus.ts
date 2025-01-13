const { BETTERSTACK_API_KEY } = process.env;

export async function fetchMonitors() {
  const url = "https://uptime.betterstack.com/api/v2/monitors";
  const token = "efPLAho5Cf2sF4RhSfGeActo";

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

    const apiStatus = apiMonitor.attributes.status;
    const backendStatus = backendMonitor.attributes.status;
    const databaseStatus = databaseMonitor.attributes.status;

    const final =
      apiStatus === "down" &&
      backendStatus === "down" &&
      databaseStatus === "down"
        ? "down"
        : apiStatus === "up" &&
          backendStatus === "up" &&
          databaseStatus === "up"
        ? "up"
        : "mid";

    const lore = final === "up" ? "Todos los servicios están en línea" : final === "mid" ? "Algunos servicios estan caídos" : "Todos los servicios están caídos";
    return {
      api: apiStatus,
      backend: backendStatus,
      database: databaseStatus,
      final,
      lore,
    };
  } catch (error) {
    console.error("Error fetching monitors:", error);
  }
}