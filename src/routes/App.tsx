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
                <div
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="grid grid-cols-1 text-white text-center">
                        <p className="text-[1.6em]">“Where integrity meets innovation.”</p>
                        <p className="text-[3.5em] font-bold">원칙이 혁신과 만나는 곳.</p>
                        <p className="text-[2em] font-medium">Market Insight Lab 이 함께합니다.</p>
                    </div>
                </div>

            </section>
        </>
    );
}
