import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-2xl font-bold text-white tracking-tight">
                    Eri<span className="text-[#FF7A00]">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white font-medium text-[15px] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-[#FF7A00] hover:bg-[#e06b00] text-white font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(255,122,0,0.25)] hover:shadow-[0_6px_25px_rgba(255,122,0,0.35)] hover:-translate-y-0.5 text-[15px]"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-[#FF7A00] transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#0F0F0F] border-t border-white/5 p-6 md:hidden flex flex-col gap-6 shadow-2xl">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-[#FF7A00] font-medium text-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-6 py-3 bg-[#FF7A00] text-white font-semibold rounded-full text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Me
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
