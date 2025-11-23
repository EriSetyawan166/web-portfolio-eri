import { ArrowRight, Download } from 'lucide-react';
import image from '../assets/muhammad_eri.jpeg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden bg-[#0F0F0F]">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#FF7A00] opacity-[0.08] blur-[140px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF7A00] opacity-[0.05] blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-10">
                    <div className="space-y-4">
                        <span className="text-[#FF7A00] font-bold text-2xl tracking-wide block animate-fade-in">
                            Hello, I'm
                        </span>
                        <h1 className="text-6xl md:text-7xl lg:text-[6rem] xl:text-[6rem] font-extrabold leading-[0.95] text-white tracking-tighter">
                            Muhammad Eri Setyawan
                        </h1>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                            <span className="text-gradient">Full Stack Engineer</span>
                        </h2>
                    </div>

                    <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
                        Experienced Full-Stack Engineer with a proven track record of implementing production-ready AI systems and scalable web applications.
                    </p>

                    <div className="flex flex-wrap gap-6 pt-4">
                        <a
                            href="#portfolio"
                            className="px-10 py-4 bg-[#FF7A00] hover:bg-[#e06b00] text-white font-bold rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(255,122,0,0.3)] hover:shadow-[0_12px_40px_rgba(255,122,0,0.4)] hover:-translate-y-1 flex items-center gap-3 text-lg"
                        >
                            My Work <ArrowRight size={22} />
                        </a>
                        <a
                            href="https://drive.google.com/file/d/19Z8W4Zvs2hJSMt--YsN4lB9pJioca7dj/view?usp=drive_link"
                            className="px-10 py-4 border-2 border-white/10 hover:border-[#FF7A00] text-white hover:text-[#FF7A00] font-bold rounded-full transition-all duration-300 flex items-center gap-3 bg-white/5 hover:bg-white/10 text-lg"
                        >
                            Download CV <Download size={22} />
                        </a>
                    </div>

                    <div className="pt-12 flex gap-20 border-t border-white/10 mt-12">
                        <div className="flex flex-col">
                            <span className="text-5xl font-extrabold text-white tracking-tight">1+</span>
                            <span className="text-gray-500 text-sm uppercase tracking-widest mt-2 font-semibold">Years Experience</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-5xl font-extrabold text-white tracking-tight">7+</span>
                            <span className="text-gray-500 text-sm uppercase tracking-widest mt-2 font-semibold">Project Completed</span>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    {/* Glow behind image */}
                    <div className="absolute inset-0 bg-[#FF7A00] opacity-10 blur-[80px] rounded-full scale-90"></div>


                    <div className="relative z-10 w-full max-w-lg aspect-[4/5] rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#161616] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.5)] group">
                        <img
                            src={image}
                            alt="Muhammad Eri Setyawan"
                            className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-all duration-700 scale-[1.02] group-hover:scale-100"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/60 via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
