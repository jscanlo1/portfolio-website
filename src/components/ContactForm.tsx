'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);

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
                setFormData({ name: "", email: "", message: "" });
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
            className="w-full mx-auto p-8 space-y-6  bg-transparent"
        >
            <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-md border border-[#8C3B2A] focus:ring-2 focus:ring-[#4A1D12] bg-white/80"
            />
            <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md border border-[#8C3B2A] focus:ring-2 focus:ring-[#4A1D12] bg-white/80"
            />
            <textarea
                placeholder="Your message"
                rows={5}
                className="w-full px-4 py-2 rounded-md border border-[#8C3B2A] focus:ring-2 focus:ring-[#4A1D12] bg-white/80"
            />

            <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-3 bg-[#4A1D12] text-white rounded-lg font-medium hover:bg-[#61261A] transitiondisabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
            >
                {submitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
