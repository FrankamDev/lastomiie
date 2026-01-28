// import { Link } from "@inertiajs/react";
// import { FaTools, FaHourglass, FaCode } from "react-icons/fa6";
// import "./work.module.css";
// export default function ComingSoon() {
//     return (
//         <>
//             {/* Bannière d'inscription très visible */}
//             <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 py-3 text-center text-white shadow-lg">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4 flex-wrap">
//                     <p className="font-medium text-base sm:text-lg">
//                         Inscrivez-vous maintenant et soyez les premiers informés du lancement
//                     </p>
//                     <Link
//                         prefetch
//                         href="/register"
//                         className={`
//               inline-flex items-center px-6 py-2.5
//               bg-white text-indigo-700 font-semibold
//               rounded-full shadow-lg hover:bg-indigo-50
//               focus:outline-none focus:ring-2 focus:ring-indigo-400
//               transition-all duration-300 transform hover:scale-105
//             `}
//                     >
//                         S'enregistrer → OMIIE
//                     </Link>
//                 </div>
//             </div>

//             {/* Contenu principal */}
//             <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-cyan-950 flex items-center justify-center px-5 py-16">
//                 <div
//                     className={`
//             relative w-full max-w-2xl
//             bg-white/10 backdrop-blur-2xl border border-white/10
//             rounded-3xl shadow-2xl overflow-hidden
//             transition-all duration-500 hover:shadow-[0_0_60px_-15px] hover:shadow-indigo-500/30
//           `}
//                 >
//                     {/* Effet de brillance subtil */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none" />

//                     <div className="px-8 py-14 sm:px-14 sm:py-16 text-center relative z-10">
//                         <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-8 border border-indigo-400/30">
//                             <FaCode className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-300" />
//                         </div>

//                         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
//                             En construction
//                         </h1>

//                         <p className="text-lg sm:text-xl text-indigo-200/90 mb-10 max-w-xl mx-auto leading-relaxed">
//                             Nous travaillons activement sur une nouvelle expérience OMIIE.
//                             <br className="hidden sm:block" />
//                             Quelque chose de grand arrive très bientôt...
//                         </p>

//                         <div className="flex items-center justify-center gap-10 sm:gap-14 text-4xl sm:text-5xl text-indigo-300/70 mb-10">
//                             {/* <FaTools className="hover:text-white hover:scale-110 transition-all duration-300" title="En maintenance" /> */}
//                             <FaHourglass className="hover:text-white hover:scale-110 transition-all duration-300 animate-pulse-slow" title="Bientôt prêt" />
//                             <FaCode className="hover:text-white hover:scale-110 transition-all duration-300" title="En développement" />
//                         </div>

//                         <p className="text-indigo-200/70 text-base sm:text-lg">
//                             Suivez-nous sur les réseaux pour ne rien manquer du lancement !
//                         </p>

//                         {/* Optionnel : petites étoiles / particules décoratives */}
//                         <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-radial from-indigo-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />
//                         <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />
//                     </div>
//                 </div>
//             </main>
//         </>
//     );
// }



import { Link } from "@inertiajs/react";
import { FaTools, FaHourglass, FaCode, FaWhatsapp, FaLinkedin } from "react-icons/fa6";

export default function ComingSoon() {
    return (
        <>
            {/* Bannière d'inscription */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-3 text-center text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4 flex-wrap">
                    <p className="font-medium text-base sm:text-lg">
                        Inscrivez-vous maintenant et soyez les premiers informés du lancement
                    </p>
                    <Link
                        prefetch
                        href="/register"
                        className={`
              inline-flex items-center px-6 py-2.5
              bg-white text-indigo-700 font-semibold
              rounded-full shadow-lg hover:bg-indigo-50
              focus:outline-none focus:ring-2 focus:ring-indigo-400
              transition-all duration-300 transform hover:scale-105
            `}
                    >
                        S'enregistrer → OMIIE
                    </Link>
                </div>
            </div>

            {/* Contenu principal */}
            <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 flex items-center justify-center px-5 py-16">
                <div
                    className={`
            relative w-full max-w-2xl
            bg-white/10 backdrop-blur-2xl border border-white/10
            rounded-3xl shadow-2xl overflow-hidden
            transition-all duration-500 hover:shadow-[0_0_60px_-15px] hover:shadow-indigo-500/30
          `}
                >
                    {/* Effet shimmer subtil */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none" />

                    <div className="px-8 py-14 sm:px-14 sm:py-16 text-center relative z-10">
                        <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-8 border border-indigo-400/30">
                            <FaCode className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-300" />
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                            En construction
                        </h1>

                        <p className="text-lg sm:text-xl text-indigo-200/90 mb-10 max-w-xl mx-auto leading-relaxed">
                            Nous travaillons activement sur une nouvelle expérience OMIIE.
                            <br className="hidden sm:block" />
                            Quelque chose de grand arrive très bientôt...
                        </p>

                        <div className="flex items-center justify-center gap-10 sm:gap-14 text-4xl sm:text-5xl text-indigo-300/70 mb-10">
                            {/* <FaTools className="hover:text-white hover:scale-110 transition-all duration-300" title="En maintenance" /> */}
                            <FaHourglass className="hover:text-white hover:scale-110 transition-all duration-300 animate-pulse-slow" title="Bientôt prêt" />
                            <FaCode className="hover:text-white hover:scale-110 transition-all duration-300" title="En développement" />
                        </div>

                        {/* Section Réseaux sociaux & Contact */}
                        <div className="mt-10 pt-8 border-t border-indigo-400/20">
                            <p className="text-indigo-200/80 text-base sm:text-lg mb-6">
                                Suivez-nous ou contactez-nous directement pour les mises à jour :
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/237690461830"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                    group flex items-center gap-3 px-6 py-3
                    bg-green-600/20 hover:bg-green-600/40
                    border border-green-400/30 rounded-full
                    text-green-300 hover:text-white font-medium
                    transition-all duration-300 transform hover:scale-105
                  `}
                                >
                                    <FaWhatsapp className="text-3xl" />
                                    <span>WhatsApp : +237 690 461 830</span>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/frank-kamgang/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                    group flex items-center gap-3 px-6 py-3
                    bg-blue-600/20 hover:bg-blue-600/40
                    border border-blue-400/30 rounded-full
                    text-blue-300 hover:text-white font-medium
                    transition-all duration-300 transform hover:scale-105
                  `}
                                >
                                    <FaLinkedin className="text-3xl" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        {/* Effets décoratifs */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-radial from-indigo-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />
                    </div>
                </div>
            </main>
        </>
    );
}
