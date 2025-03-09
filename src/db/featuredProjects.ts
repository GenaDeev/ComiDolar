type Project = {
    url: string;
    title: string;
    description: string;
    favicon: {
        url: string;
        scheme: "light" | "dark"
    }
}

export const featuredProjects: Project[] = [
    {
        url: "https://blackmaps.com.ar",
        title: "BlackMaps Web Oficial",
        description: "Sitio web oficial de Black Maps, una cuenta de X (antes Twitter) que se dedica a publicar mapas sobre todo tipo de temas.",
        favicon: { url: "https://blackmaps.com.ar/image/blackmaps_transparent.webp", scheme: "light" }
    },
    {
        url: "https://yourprofiles.vercel.app",
        title: "YourProfiles",
        description: "Una aplicación para crear perfiles de usuarios y compartirlos con tus amigos.",
        favicon: { url: "https://i.ibb.co/1GcTTzHr/ypfles.webp", scheme: "light" }
    },
    {
        url: "https://comibuenasnoches.vercel.app",
        title: "Comi Buenas Noches",
        description: "Sitio para anotarse como candidato romantico a alguno de los admins de la Comi Buenas Noches.",
        favicon: { url: "https://comibuenasnoches.vercel.app/favicon.webp", scheme: "dark" }
    }
]