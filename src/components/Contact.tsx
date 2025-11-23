import { useState, useRef, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        // Create template parameters object matching the user's EmailJS template
        const templateParams = {
            name: formRef.current?.user_name.value,
            email: formRef.current?.user_email.value,
            title: formRef.current?.subject.value,
            message: formRef.current?.message.value,
            time: new Date().toLocaleString(), // Added time as seen in the screenshot
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                    formRef.current?.reset();
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
                },
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-32 bg-[#0F0F0F]">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div className="space-y-8">
                        <div>
                            <span className="text-[#FF7A00] font-bold tracking-widest uppercase text-sm mb-4 block">Contact</span>
                            <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">Let's Work <br />Together!</h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                Feel free to contact me.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-[#161616] border border-white/5 hover:border-[#FF7A00]/30 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-[#FF7A00] group-hover:bg-[#FF7A00] group-hover:text-white transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm font-semibold mb-1">Email Me</p>
                                    <a href="mailto:erisetyawan1@gmail.com" className="text-xl font-bold text-white hover:text-[#FF7A00] transition-colors">erisetyawan1@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-[#161616] border border-white/5 hover:border-[#FF7A00]/30 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-[#FF7A00] group-hover:bg-[#FF7A00] group-hover:text-white transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm font-semibold mb-1">Call Me</p>
                                    <a href="tel:+6289635758226" className="text-xl font-bold text-white hover:text-[#FF7A00] transition-colors">+62 896 3575 8226</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-[#161616] border border-white/5 hover:border-[#FF7A00]/30 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-[#FF7A00] group-hover:bg-[#FF7A00] group-hover:text-white transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm font-semibold mb-1">Location</p>
                                    <p className="text-xl font-bold text-white">Jakarta Selatan, Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#161616] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-[#0F0F0F] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all placeholder:text-gray-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Your Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-[#0F0F0F] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all placeholder:text-gray-600"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-400 ml-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="Project Inquiry"
                                    className="w-full bg-[#0F0F0F] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all placeholder:text-gray-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-400 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell me what you need"
                                    className="w-full bg-[#0F0F0F] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] transition-all placeholder:text-gray-600 resize-none"
                                ></textarea>
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#FF7A00] hover:bg-[#e06b00] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_8px_30px_rgba(255,122,0,0.3)] hover:shadow-[0_12px_40px_rgba(255,122,0,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                            >
                                {isSubmitting ? (
                                    <>
                                        Sending... <Loader2 size={20} className="animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
