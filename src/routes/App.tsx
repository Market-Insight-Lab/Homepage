import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import main2140 from "../asset/main2140.jpg";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <section
                className="h-screen w-full"
                style={{
                    backgroundImage: `url(${main2140})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >

                <header className="relative z-10">
                    <nav className="flex items-center justify-between p-6">
                        <div className="text-white text-2xl font-bold">
                            <a href="/"> Market Insight Lab</a>
                        </div>
                        <div className="hidden md:flex font-bold">
                            <a
                                href="/"
                                className="text-white mx-4 hover:underline"
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                className="text-white mx-4 hover:underline"
                            >
                                About
                            </a>
                            <a
                                href="https://github.com/Market-Insight-Lab"
                                className="text-white mx-4 hover:underline"
                            >
                                GITHUB
                            </a>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </nav>
                    {isMenuOpen && (
                        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center">
                            <a
                                href="/"
                                className="text-white text-2xl my-4 hover:underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                className="text-white text-2xl my-4 hover:underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="https://github.com/Market-Insight-Lab"
                                className="text-white text-2xl my-4 hover:underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                GITHUB
                            </a>
                        </div>
                    )}
                </header>
                {/* 어두운 오버레이 */}
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                />
                <div
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="grid grid-cols-1 text-white text-center p-4">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-medium">“Where integrity meets innovation.”</p>
                        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-4">원칙이 혁신과 만나는 곳.</p>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-medium">Market Insight Lab 이 함께합니다.</p>
                    </div>
                </div>

            </section>
        </>
    );
}
