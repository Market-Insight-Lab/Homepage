import main2140 from "../asset/main2140.jpg";

export default function App() {
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
                            Market Insight Lab
                        </div>
                        <div className="font-bold">
                            <a
                                href="/"
                                className="text-white mx-4 hover:underline"
                            >
                                Home
                            </a>
                            <a
                                href="#"
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
                    </nav>
                </header>
                {/* 어두운 오버레이 */}
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                />

            </section>
        </>
    );
}
