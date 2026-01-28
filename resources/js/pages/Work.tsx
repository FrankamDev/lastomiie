import { FaTools, FaHourglassHalf, FaLaptopCode } from "react-icons/fa";

export default function Work() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-4">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-16 max-w-xl text-center transition-transform transform hover:scale-105 hover:shadow-3xl motion-safe:animate-fadeIn">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 animate-pulse">
                    🚧 En développement
                </h2>
                <p className="text-gray-600 md:text-lg mb-8">
                    Notre site est en cours de construction. Patience ! Nous préparons quelque chose de superbe pour vous.
                </p>

                <div className="flex justify-center gap-8 text-gray-700 dark:text-gray-200 text-3xl md:text-4xl animate-bounce">
                    <FaTools title="Maintenance" className="hover:text-blue-500 transition-colors duration-300" />
                    <FaHourglassHalf title="Patience" className="hover:text-purple-500 transition-colors duration-300" />
                    <FaLaptopCode title="Développement" className="hover:text-pink-500 transition-colors duration-300" />
                </div>

                <p className="mt-8 text-gray-500 text-sm md:text-base">
                    Suivez-nous pour les mises à jour et soyez prêts pour le lancement !
                </p>
            </div>
        </div>
    );
}
