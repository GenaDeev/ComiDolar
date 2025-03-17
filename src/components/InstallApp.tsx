import { useState, useEffect } from "react";

export default function InstallApp() {
    const [isAppInstalled, setIsAppInstalled] = useState(true);
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showPopover, setShowPopover] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        if (!window.matchMedia("(display-mode: standalone)").matches) {
            setIsAppInstalled(false);
        }
        if (!localStorage.getItem("pwaOptIn")) {
            setShowPopover(true);
        }

        // Retraso para animación del botón
        setTimeout(() => setShowButton(true), 200);
    }, []);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event) => {
            event.preventDefault();
            setDeferredPrompt(event);
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        };
    }, []);

    const installPWA = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome !== "accepted") {
                setIsAppInstalled(false);
            }
            setDeferredPrompt(null);
            setIsAppInstalled(true);
        }
    };

    const closePopover = () => {
        localStorage.setItem("pwaOptIn", "false");
        setShowPopover(false);
    };

    return (
        <div className="relative">
            {!isAppInstalled && showButton && (
                <button 
                    className="flex w-8 h-8 md:w-auto items-center gap-2 p-2 dark:border-zinc-300 dark:hover:border-white dark:focus:border-white 
                    border-zinc-900 cursor-pointer hover:border-zinc-300 focus:border-zinc-300 border text-zinc-900 dark:text-zinc-300 dark:hover:text-white 
                    hover:text-zinc-100 bg-zinc-300 rounded-full transition duration-200 hover:scale-105 hover:bg-zinc-500 focus:ring-4 focus:bg-zinc-700 
                    focus:ring-zinc-300 dark:bg-darkless dark:hover:bg-zinc-800 dark:focus:ring-zinc-600 
                    opacity-0 animate-fade-in"
                    onClick={installPWA}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span className="hidden md:inline">Instalar app</span>
                </button>
            )}

            {showPopover && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-green-500 text-white p-2 rounded-lg shadow-lg w-42 text-center text-xs 
                    opacity-0 translate-y-[-10px] animate-slide-in">
                    <span>¡Instalá la APP de ComiDólar para acelerar tus consultas!</span>
                    <button onClick={closePopover} className="absolute top-1 cursor-pointer right-2 text-white text-lg">✕</button>
                    <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-green-500"></div>
                </div>
            )}
        </div>
    );
}
