import { ExternalLink } from 'lucide-react';
import patunganajaImage from '../assets/patunganaja.jpeg'
import rayspeedImage from '../assets/rayspeed.jpeg'

const Projects = () => {
    const projects = [
        {
            title: 'PatunganAja',
            category: 'Online Platform Market',
            image: patunganajaImage,
            tech: ['React', 'NestJS', 'Python', 'Mysql'],
            url: "https://patunganaja.my.id/"
        },
        {
            title: 'Intelligent Voice Assistant',
            category: 'Conversational AI',
            image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            tech: ['LiveKit', 'Python', 'Deepgram', 'Gemini', 'Google TTS'],
        },
        {
            title: 'Rayspeed Website Revamp',
            category: 'Web Modernization',
            image: rayspeedImage,
            tech: ['Laravel', 'PHP'],
            url: "https://rayspeed.com/"
        },
    ];

    return (
        <section id="portfolio" className="py-32 bg-[#0F0F0F]">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                    <div>
                        <span className="text-[#FF7A00] font-bold tracking-widest uppercase text-sm mb-4 block">what i've done</span>
                        <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">Selected Works</h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative rounded-3xl bg-[#161616] border border-white/5 hover:border-[#FF7A00]/30 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[0_12px_40px_rgba(255,122,0,0.15)] overflow-hidden">
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                                    <a href={project.url} className="p-4 bg-white text-black rounded-full hover:bg-[#FF7A00] hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75 shadow-lg">
                                        <ExternalLink size={22} />
                                    </a>
                                </div>
                            </div>
                            <div className="p-8">
                                <span className="text-[#FF7A00] text-xs font-bold tracking-wider uppercase mb-3 block">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF7A00] transition-colors">{project.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs font-semibold bg-white/5 text-gray-400 px-3 py-1.5 rounded-full border border-white/5 group-hover:border-white/10 transition-colors">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

