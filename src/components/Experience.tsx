const Experience = () => {
    const experiences = [
        {
            year: 'Nov 2024 - Present',
            role: 'Full-Stack Engineer',
            company: 'PT Infomedia Nusantara',
            description: 'Reengineered AIHub Reborn with React & NestJS. Designed a new AI voicebot engine boosting engagement by ~45%. Built modular backend architecture for AI AgentSpace.',
        },
        {
            year: 'Mar 2024 - Aug 2024',
            role: 'Front End Developer',
            company: 'Rayspeed Asia',
            description: 'Rebuilt 10+ pages and 5+ features, modernizing the website design. Collaborated with UI/UX team to remove redundancies and improve consistency.',
        },
        {
            year: 'Dec 2023 - Feb 2024',
            role: 'Shopify Apps Developer',
            company: 'Rayspeed Asia',
            description: 'Developed and deployed a Shopify app automating shipping rate calculations, reducing manual effort by ~65%. Utilized Remix framework for efficient components.',
        },
        {
            year: 'Aug 2023 - Sep 2023',
            role: 'Android Developer',
            company: 'Mafindo',
            description: 'Developed HoaxBusterTools Android app using Kotlin. Implemented real-time synchronization with Firebase, improving responsiveness by ~35%.',
        },
        {
            year: 'Sep 2022 - Jul 2023',
            role: 'Lab Administrator',
            company: 'Lab ICT Universitas Budi Luhur',
            description: 'Managed daily operations of the computer lab. Supervised lab assistants and conducted regular maintenance of computer systems.',
        },
    ];

    const stats = [
        { value: '1+', label: 'Years Exp.' },
        { value: '4+', label: 'Companies' },
        { value: '5+', label: 'Roles' },
    ];

    return (
        <section id="about" className="py-32 bg-[#0F0F0F]">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Left Column - Sticky */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <span className="text-[#FF7A00] font-bold tracking-widest uppercase text-sm mb-4 block">Experience</span>
                        <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">My Work <br />Experience</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12">
                            I've had the privilege of working with some amazing companies and clients.
                            Here's a glimpse of my professional journey.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                                    <p className="text-gray-500 text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Scrollable Timeline */}
                    <div className="relative space-y-12">
                        {/* Vertical Line */}
                        <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-white/10"></div>

                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-16 group">
                                {/* Dot */}
                                <div className="absolute left-0 top-2 w-10 h-10 bg-[#161616] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:border-[#FF7A00] transition-colors duration-300">
                                    <div className="w-3 h-3 bg-[#FF7A00] rounded-full"></div>
                                </div>

                                <div className="p-8 rounded-3xl bg-[#161616] border border-white/5 hover:border-[#FF7A00]/30 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_30px_rgba(255,122,0,0.15)]">
                                    <span className="text-[#FF7A00] font-bold text-sm tracking-wider mb-2 block">{exp.year}</span>
                                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                    <p className="text-gray-400 font-semibold mb-4">{exp.company}</p>
                                    <p className="text-gray-500 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
