//@ts-nocheck
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import about2140 from "../asset/about2140.jpg";
import { BarChart2, Shield, Search, Users } from 'lucide-react';
import logo from "../asset/logo.png";

export default function About() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <section
                className="h-screen w-full"
                style={{
                    backgroundImage: `url(${about2140})`,
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
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                />
                <div
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="grid grid-cols-1 text-white text-left p-4">
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">어려운 주식과 투자을 보다 쉽게</p>
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">접근하기 위한 서비스를 개발합니다.</p>
                    </div>
                </div>

            </section>

            {/* Vision Section */}
            <section className="py-20 sm:py-28 bg-[#0b0d11] text-white">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Vision</h2>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl">
                        금융 데이터는 방대하고, 시장은 빠르게 변화합니다. 우리는 이러한 복잡함 속에서 투자자가 더 쉽게 의사결정을 내릴 수 있도록 돕는 기술을 만들고 있습니다.
                        정교한 데이터 분석, 직관적인 시각화, 그리고 빠른 팩트 추출을 통해 금융 시장을 누구나 이해할 수 있는 환경으로 바꾸는 것이 우리의 목표입니다.
                    </p>
                </div>
            </section>

            {/* Company Identity */}
            <section className="py-20 sm:py-24 bg-[#0f1115]">
                <div className="container flex justify-center items-center p-10 mx-auto gap-10 flex-col md:flex-row">
                    <img src={logo} alt="Company Logo" className="rounded-2xl w-48 h-48 sm:w-60 sm:h-60" />
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Market Insight Lab</h2>
                        <p className="text-gray-400 max-w-lg leading-relaxed">
                            Market Insight Lab은 IT 기술과 금융 데이터를 결합해 누구나 사용할 수 있는 고도화된 투자 도구를 만드는 스타트업입니다.
                            우리는 뉴스 분석, 정량데이터 시각화, AI 기반 시장 심리 분석 등 다양한 기능을 통해
                            투자자의 시장 접근성을 획기적으로 개선하는 제품을 개발하고 있습니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 sm:py-24 bg-[#0f1115] text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Core Values</h2>
                        <p className="text-gray-400">우리가 추구하는 기술적 가치입니다.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard
                            icon={<BarChart2 size={36} />}
                            title="Advanced Visualization"
                            desc="시장 데이터를 고도화된 시각적 UI/UX로 제공합니다."
                            color="text-blue-400"
                        />
                        <ValueCard
                            icon={<Search size={36} />}
                            title="AI Insight Engine"
                            desc="뉴스와 데이터를 기반으로 핵심 정보를 자동 추출합니다."
                            color="text-cyan-400"
                        />
                        <ValueCard
                            icon={<Users size={36} />}
                            title="Market Sentiment"
                            desc="시장의 여론과 심리를 분석해 더 깊은 통찰을 제공합니다."
                            color="text-purple-400"
                        />
                        <ValueCard
                            icon={<Shield size={36} />}
                            title="Trusted Data"
                            desc="전문가들이 사용하는 수준의 검증된 데이터만을 사용합니다."
                            color="text-emerald-400"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

function ValueCard({ icon, title, desc, color }) {
    return (
        <div className="bg-[#161b22] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 group shadow-xl">
            <div className={`mb-6 p-4 rounded-lg bg-white/5 w-fit group-hover:bg-white/10 transition-colors ${color}`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-100">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}