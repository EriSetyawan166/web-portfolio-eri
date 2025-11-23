import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0F0F0F] py-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <a href="#" className="text-2xl font-bold text-white tracking-tight block mb-2">
                            Eri<span className="text-[#FF7A00]">.</span>
                        </a>
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Muhammad Eri Setyawan. All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://www.github.com/EriSetyawan166" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#161616] flex items-center justify-center text-gray-400 hover:bg-[#FF7A00] hover:text-white transition-all duration-300 border border-white/5 hover:-translate-y-1">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/erisetyawan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#161616] flex items-center justify-center text-gray-400 hover:bg-[#FF7A00] hover:text-white transition-all duration-300 border border-white/5 hover:-translate-y-1">
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
