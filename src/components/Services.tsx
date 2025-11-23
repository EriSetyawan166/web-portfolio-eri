import { BrainCircuit, Server, Mic } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Mic size={32} />,
            title: 'Real-Time AI Voicebots',
            description: 'Building voice assistants that sound human. Integration with LiveKit, Deepgram, and Google TTS for seamless conversational experiences.',
            tags: ['LiveKit', 'Deepgram', 'WebRTC', 'Google Gemini', "Google TTS"],
            highlight: false
        },
        {
            icon: <BrainCircuit size={32} />,
            title: 'LLM & AI Solutions',
            description: 'Custom AI agents tailored for your business. From Document AI that "reads" your files to intelligent chatbots using RAG (Retrieval-Augmented Generation).',
            tags: ['RAG', 'Pinecone', 'Gemini', 'Document AI', "Chat Bot"],
            highlight: false
        },
        {
            icon: <Server size={32} />,
            title: 'Scalable Backend Systems',
            description: 'Architecting robust, high-performance backend infrastructure. Specializing in NestJS and microservices to handle heavy loads and complex logic.',
            tags: ['NestJS', 'Docker', 'Kubernetes', 'MySql'],
            highlight: false
        },
    ];

    return (
        <section id="services" className="py-32 bg-[#0F0F0F] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#FF7A00] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <span className="text-[#FF7A00] font-bold tracking-widest uppercase text-sm mb-4 block">What I Do</span>
                    <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Specialized <br /> <span className="text-gradient">Engineering Services</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        I don't just build websites; I engineer intelligent systems.
                        Focusing on cutting-edge AI integration and robust backend architecture.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2
                                ${service.highlight
                                    ? 'bg-[#1a1a1a] border-[#FF7A00]/50 shadow-[0_0_50px_rgba(255,122,0,0.1)]'
                                    : 'bg-[#161616] border-white/5 hover:border-[#FF7A00]/30'
                                }
                            `}
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#FF7A00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>

                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300
                                    ${service.highlight
                                        ? 'bg-[#FF7A00] text-white shadow-lg shadow-[#FF7A00]/20'
                                        : 'bg-white/5 text-[#FF7A00] group-hover:bg-[#FF7A00] group-hover:text-white'
                                    }
                                `}>
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-8 min-h-[80px]">
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/10 transition-colors"
                                        >
                                            {tag}
                                        </span>
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

export default Services;
