import ContactForm from "@/components/ContactForm";
import Typewriter from "@/components/Typewriter";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/contact",
  },
  title: "Contact",
  description: "Get in touch with Johnny Scanlon",
};



// app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 pb-12 px-6 md:px-16 bg-parchment-light bg-[url('/noise.png')]">

      <section className="max-w-2xl text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-title ">
          <Typewriter text="Get in Touch" />
        </h1>

        <p className="text-gray-700 text-lg">
          I’d love to hear from you — whether you’re interested in a project,
          collaboration, or just want to chat about machine learning and NLP.
          
          You can reach me directly at{" "}
          <a
            href="mailto:contact@johnnyscanlon.com"
            className="text-[#4A1D12] font-medium hover:underline"
          >
            contact@johnnyscanlon.com
            
          </a>.
          
        </p>



        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/johnny-scanlon-302419276/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4A1D12] hover:text-[#8C3B2A] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jscanlo1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4A1D12] hover:text-[#8C3B2A] transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Optional form */}
        <ContactForm />

        <p className="text-sm text-gray-500">
          Based in London • Available for remote work • Let’s build something smart.
        </p>
      </section>
    </main>
  );
}
