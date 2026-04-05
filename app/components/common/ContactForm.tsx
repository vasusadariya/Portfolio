'use client';

import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { usePortalStore } from '@stores';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const isActive = usePortalStore((state) => !!state.activePortalId);
  const [loaded, setLoaded] = useState(false);

  // Show the button after a delay (matches canvas load timing)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 1,
          duration: 1,
        });
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Hide when a portal is active
  useEffect(() => {
    if (containerRef.current && loaded) {
      gsap.to(containerRef.current, {
        opacity: isActive ? 0 : 1,
        pointerEvents: isActive ? 'none' : 'auto',
        duration: 0.5,
      });
    }
  }, [isActive, loaded]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current || sending) return;

    setSending(true);
    setStatus('idle');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      // Send the main email to you
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      // Send auto-reply to the sender
      const formData = new FormData(formRef.current);
      const senderEmail = formData.get('from_email') as string;
      const senderName = formData.get('from_name') as string;

      await emailjs.send(serviceId, autoReplyTemplateId, {
        to_email: senderEmail,
        to_name: senderName,
        from_name: 'Vasu Sadariya',
      }, publicKey);

      setStatus('success');
      formRef.current.reset();

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-20 right-4 md:right-8 z-40"
      style={{ opacity: 0 }}
    >
      {/* Toggle Button */}
      <details className="group">
        <summary className="list-none cursor-pointer select-none">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
        </summary>

        {/* Contact Form Card */}
        <div className="absolute bottom-16 right-0 w-[320px] md:w-[360px] bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl animate-in">
          <h3 className="text-white font-medium text-lg tracking-wide mb-1" style={{ fontFamily: 'var(--font-soria)' }}>
            Get in Touch
          </h3>
          <p className="text-white/50 text-xs mb-5 tracking-wide">
            Drop me a message and I&apos;ll get back to you.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={3}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm font-medium tracking-wider uppercase hover:bg-white/20 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-emerald-400/90 text-xs text-center tracking-wide">
                ✓ Message sent! Check your email for a reply.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400/90 text-xs text-center tracking-wide">
                ✗ Failed to send. Please try again.
              </p>
            )}
          </form>
        </div>
      </details>
    </div>
  );
};

export default ContactForm;
