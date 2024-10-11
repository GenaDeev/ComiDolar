import { useState } from 'react';

export default function DonationGrid({ donationTable }) {
    const [visibleCount, setVisibleCount] = useState(7);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'total', direction: 'descending' }); // Orden por defecto

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedDonations = [...donationTable]
        .filter((donor) => donor.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortConfig.key === 'name') {
                return sortConfig.direction === 'ascending' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            } else {
                return sortConfig.direction === 'ascending' ? a.total - b.total : b.total - a.total;
            }
        });

    const isExpanded = visibleCount === sortedDonations.length;
    const toggleExpand = () => {
        setVisibleCount(isExpanded ? 7 : sortedDonations.length);
    };

    return (
        <aside className="w-full mt-5 lg:w-1/3 xl:w-1/2 p-4 bg-neutral-200 dark:bg-neutral-900 text-neutral-800 dark:text-white rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Tabla de Donaciones</h2>
            <input
                type="text"
                placeholder="Buscar donante..."
                className="mb-4 w-full p-2 ring-0 rounded border ring-green-500 border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-white dark:placeholder-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex flex-col bg-neutral-300 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 uppercase text-sm mb-2">
                <div className='flex items-center px-3 gap-7'>
                    <img src="/assets/img/favicon.webp" className="h-8 w-8 mr-2" alt="Logo de Mercado Pago" />
                    <span className="flex-grow text-left cursor-pointer" onClick={() => handleSort('name')}>
                        Nombre <span className='text-green-500'>{sortConfig.key === 'name' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}</span>
                    </span>
                    <span className="flex flex-wrap items-center justify-center text-right cursor-pointer" onClick={() => handleSort('total')}>
                        Total Donaciones 
                        <span className='text-green-500 block'>{sortConfig.key === 'total' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}</span>
                    </span>
                </div>
            </div>
            <div className="flex flex-col">
                {sortedDonations.slice(0, visibleCount).map((donor) => (
                    <div key={donor.name} className="flex items-center border-b border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 p-2">
                        <span className='p-2 bg-neutral-300 mx-3 dark:bg-black rounded-full'>
                            {donor.name.split(' ')[0][0] + donor.name.split(' ')[1][0]}
                        </span>
                        <span className="flex-grow py-2 px-4">
                            {donor.name}
                        </span>
                        <span className="flex-none py-2 px-4 text-right">
                            {donor.total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
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
        </aside>
    );
}
