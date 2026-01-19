'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        company: '',
    });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                alert("Message sent!");
                setFormData({ name: "", email: "", message: "", company: "" });
            } else {
                alert(data.error || "Something went wrong.");
            }
        } catch (err) {
            alert("Failed to send. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full mx-auto p-8 space-y-6 bg-transparent"
        >
            <input
                type="text"
                name="name"                    // <-- add name
                value={formData.name}          // <-- bind to state
                onChange={handleChange}        // <-- call handler
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-md border border-[#8C3B2A] focus:ring-2 focus:ring-[#4A1D12] bg-white/80"
            />

            <input
                type="email"
                name="email"                   // <-- add name
                value={formData.email}         // <-- bind to state
                onChange={handleChange}        // <-- call handler
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md border border-[#8C3B2A] focus:ring-2 focus:ring-[#4A1D12] bg-white/80"
            />

            <input
                type="text"
                name="company"                   // <-- add name
                value={formData.company}         // <-- bind to state
                onChange={handleChange}        // <-- call handler
                placeholder=""
                tabIndex={-1}
                className="w-full px-4 py-2 rounded-md border border-[#8C3B2A] focus:ring-2 focus:ring-[#4A1D12] bg-white/80 hidden"
                autoComplete="off"
            />

            <textarea
                name="message"                 // <-- add name
                value={formData.message}       // <-- bind to state
                onChange={handleChange}        // <-- call handler
                placeholder="Your message"
                rows={5}
                className="w-full px-4 py-2 rounded-md border border-[#8C3B2A] focus:ring-2 focus:ring-[#4A1D12] bg-white/80"
            />

            <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-3 bg-[#4A1D12] text-white rounded-lg font-medium hover:bg-[#61261A] transition disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed shadow-sm"
            >
                {submitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
