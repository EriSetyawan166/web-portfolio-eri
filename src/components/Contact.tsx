import { useRef, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { profile } from '../data';

type Status = { type: 'success' | 'error' | null; message: string };

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ type: null, message: '' });

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    // Parameters match the existing EmailJS template
    const templateParams = {
      name: formRef.current?.user_name.value,
      email: formRef.current?.user_email.value,
      title: formRef.current?.subject.value,
      message: formRef.current?.message.value,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setStatus({ type: 'success', message: "Thanks, your message was sent. I'll reply by email." });
          formRef.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus({ type: 'error', message: `Sending failed. You can email me directly at ${profile.email}.` });
        },
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section className="stack" id="contact">
      <div className="contact-grid">
        <div className="panel contact-info">
          <div>
            <h2 data-reveal>Get in<br />touch</h2>
            <p className="small muted" style={{ marginTop: 16, maxWidth: 360 }}>Questions about my work, a role, or a project. Send a message here or use the details below.</p>
          </div>
          <div className="caps small" style={{ display: 'grid', gap: 16 }}>
            <div><div className="muted">Email</div><a className="val" href={`mailto:${profile.email}`}>{profile.email}</a></div>
            <div><div className="muted">Phone</div><a className="val" href={profile.phoneHref}>{profile.phone}</a></div>
            <div><div className="muted">Based in</div><div className="val">{profile.location}</div></div>
          </div>
        </div>
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <label className="field"><span className="caps small muted">Name</span><input name="user_name" required autoComplete="name" /></label>
            <label className="field"><span className="caps small muted">Email</span><input name="user_email" type="email" required autoComplete="email" /></label>
          </div>
          <label className="field"><span className="caps small muted">Subject</span><input name="subject" required /></label>
          <label className="field"><span className="caps small muted">Message</span><textarea name="message" required /></label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <button type="submit" className="btn caps" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send message'} <span className="arrow">→</span>
            </button>
            {status.type && <span className={`form-status ${status.type}`} role="status">{status.message}</span>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
