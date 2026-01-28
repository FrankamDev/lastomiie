import { Link } from "@inertiajs/react";
import { FaTools, FaHourglass, FaCode, FaWhatsapp, FaLinkedin } from "react-icons/fa6";

export default function ComingSoon() {
    return (
        <>
            {/* Bannière inscription – reste visible mais plus compacte sur mobile */}
            <div className="sticky top-0 z-50 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 py-3 text-center text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                    <p className="text-sm sm:text-base font-medium">
                        Inscrivez-vous pour être averti du lancement
                    </p>
                    <Link
                        prefetch
                        href="/register"
                        className={`
              inline-flex items-center justify-center
              px-5 py-2.5 sm:px-6 sm:py-3
              bg-white text-indigo-700 font-semibold text-sm sm:text-base
              rounded-full shadow-md
              hover:bg-indigo-50 active:bg-indigo-100
              focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
              transition-all duration-200 transform active:scale-95 sm:hover:scale-105
            `}
                    >
                        S'inscrire → OMIIE
                    </Link>
                </div>
            </div>

            {/* Contenu principal */}
            <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 flex items-center justify-center px-4 py-10 sm:py-16">
                <div
                    className={`
            w-full max-w-lg sm:max-w-2xl
            bg-white/8 backdrop-blur-xl border border-white/10
            rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl
            transition-all duration-400
          `}
                >
                    <div className="px-6 py-10 sm:px-12 sm:py-14 text-center">
                        {/* Icône principale */}
                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-indigo-500/25 to-purple-500/25 mb-6 border border-indigo-400/30">
                            <FaCode className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-300" />
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 sm:mb-6">
                            En construction
                        </h1>

                        <p className="text-base sm:text-lg text-indigo-200/90 mb-8 sm:mb-10 leading-relaxed">
                            OMIIE prépare quelque chose de grand.<br className="hidden sm:inline" />
                            Revenez très bientôt !
                        </p>

                        {/* Icônes animées – plus espacées et plus grandes sur mobile */}
                        <div className="flex items-center justify-center gap-10 sm:gap-14 text-4xl sm:text-5xl text-indigo-300/70 mb-8 sm:mb-10">
                            {/* <FaTools className="hover:text-white transition-transform duration-300 hover:scale-110" /> */}
                            <FaHourglass className="hover:text-white transition-transform duration-300 hover:scale-110 animate-pulse-slow" />
                            <FaCode className="hover:text-white transition-transform duration-300 hover:scale-110" />
                        </div>

                        {/* Réseaux sociaux – stack vertical sur mobile */}
                        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-indigo-400/20">
                            <p className="text-indigo-200/80 text-sm sm:text-base mb-5 sm:mb-6">
                                Contactez-nous ou suivez-nous :
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/237690461830"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                    flex items-center justify-center gap-3 w-full sm:w-auto
                    px-5 py-3.5 sm:px-6 sm:py-3
                    bg-green-600/25 hover:bg-green-600/40
                    border border-green-400/30 rounded-xl sm:rounded-full
                    text-green-200 hover:text-white font-medium text-sm sm:text-base
                    transition-all duration-300 active:scale-98 sm:hover:scale-105
                  `}
                                >
                                    <FaWhatsapp className="text-2xl sm:text-3xl" />
                                    <span>WhatsApp +237 690 461 830</span>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/frank-kamgang/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                    flex items-center justify-center gap-3 w-full sm:w-auto
                    px-5 py-3.5 sm:px-6 sm:py-3
                    bg-blue-600/25 hover:bg-blue-600/40
                    border border-blue-400/30 rounded-xl sm:rounded-full
                    text-blue-200 hover:text-white font-medium text-sm sm:text-base
                    transition-all duration-300 active:scale-98 sm:hover:scale-105
                  `}
                                >
                                    <FaLinkedin className="text-2xl sm:text-3xl" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
