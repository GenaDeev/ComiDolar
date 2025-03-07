import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
export default function DonationGrid() {
    const [donationTable, setDonationTable] = useState([]);
    const [visibleCount, setVisibleCount] = useState(7);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState({
        key: "total",
        direction: "descending",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDonations = async () => {
            setLoading(true);
            const { data, error } = await supabase.from("donors").select("*");
            if (error) {
                console.error("Error fetching data:", error);
            } else {
                const uniqueDonors = data.filter(
                    (donor, index, self) =>
                        index === self.findIndex((d) => d.name === donor.name)
                );
                setDonationTable(uniqueDonors);
                setLoading(false);
            }
        };

        fetchDonations();
    }, []);

    const handleSort = (key) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    const sortedDonations = [...donationTable]
        .filter((donor) =>
            donor.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortConfig.key === "name") {
                return sortConfig.direction === "ascending"
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name);
            } else {
                return sortConfig.direction === "ascending"
                    ? a.total - b.total
                    : b.total - a.total;
            }
        });

    const isExpanded = visibleCount === sortedDonations.length;
    const toggleExpand = () => {
        setVisibleCount(isExpanded ? 7 : sortedDonations.length);
    };
    if (loading) {
        return (
            <div className="w-full h-[500px] flex items-center justify-center text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="256px" height="256px" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="0" fill="currentColor">
                        <animate id="svgSpinnersPulse30" fill="freeze" attributeName="r" begin="0;svgSpinnersPulse32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11" />
                        <animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersPulse32.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0" />
                    </circle>
                    <circle cx="12" cy="12" r="0" fill="currentColor">
                        <animate id="svgSpinnersPulse31" fill="freeze" attributeName="r" begin="svgSpinnersPulse30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11" />
                        <animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse30.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0" />
                    </circle>
                    <circle cx="12" cy="12" r="0" fill="currentColor">
                        <animate id="svgSpinnersPulse32" fill="freeze" attributeName="r" begin="svgSpinnersPulse30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11" />
                        <animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse30.begin+0.8s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0" />
                    </circle>
                </svg>
            </div>
        );
    }
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Tabla de Donaciones</h2>
            <h3 className="text-lg font-semibold mb-4">
                Total:
                <span className="text-green-500">
                    {donationTable
                        .reduce((acc, donor) => acc + donor.total, 0)
                        .toLocaleString("es-AR", { style: "currency", currency: "ARS" })}
                </span>
            </h3>
            <input
                type="text"
                placeholder="Buscar donante..."
                className="mb-4 w-full p-2 ring-0 rounded border ring-green-500 border-zinc-300 dark:border-zinc-600 bg-zinc-100 dark:bg-darkless text-zinc-800 dark:text-white dark:placeholder-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex flex-col bg-zinc-300 dark:bg-backgroundDark text-zinc-800 dark:text-zinc-200 uppercase text-sm mb-2">
                <div className="flex items-center px-3 gap-7">
                    <img
                        src="/assets/img/favicon.webp"
                        className="h-8 w-8 mr-2"
                        alt="Logo de Mercado Pago"
                    />
                    <span
                        className="flex-grow text-left cursor-pointer"
                        onClick={() => handleSort("name")}
                    >
                        Nombre{" "}
                        <span className="text-green-500">
                            {sortConfig.key === "name"
                                ? sortConfig.direction === "ascending"
                                    ? "▲"
                                    : "▼"
                                : ""}
                        </span>
                    </span>
                    <span
                        className="flex flex-wrap items-center justify-center text-right cursor-pointer"
                        onClick={() => handleSort("total")}
                    >
                        Total Donaciones
                        <span className="text-green-500 block">
                            {sortConfig.key === "total"
                                ? sortConfig.direction === "ascending"
                                    ? "▲"
                                    : "▼"
                                : ""}
                        </span>
                    </span>
                </div>
            </div>
            <div className="flex flex-col">
                {sortedDonations.slice(0, visibleCount).map((donor) => (
                    <div
                        key={donor.name}
                        className="flex items-center border-b border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-darkless p-2"
                    >
                        <span className="flex items-center justify-center bg-zinc-300 dark:bg-black min-w-12 min-h-12 rounded-full text-lg font-semibold text-center">
                            {donor.name.split(" ")[0][0] +
                                (donor.name.split(" ")[1] ? donor.name.split(" ")[1][0] : "")}
                        </span>
                        <span className="flex-grow py-2 px-4">{donor.name}</span>
                        <span className="flex-none py-2 px-4 text-right">
                            {donor.total.toLocaleString("es-AR", {
                                style: "currency",
                                currency: "ARS",
                            })}
                        </span>
                    </div>
                ))}
            </div>
            <button
                onClick={toggleExpand}
                className="mt-4 bg-green-500 dark:bg-green-600 text-white py-2 px-4 rounded hover:bg-green-600 dark:hover:bg-green-700 transition duration-300"
            >
                {isExpanded ? "Ver menos" : "Ver todos"}
            </button>
        </>
    );
}
