import Typewriter from "@/components/Typewriter";
import Image from "next/image";
import Link from "next/link";

// &#8217;

export default function Home() {
  return (
    <div>

      <main className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 pb-12 px-6 md:px-16 lg:px-32 2xl:px-64 bg-parchment-light bg-[url('/noise.png')]">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl text-gray-900 font-title">
            <Typewriter text="Hi, I'm Johnny" />
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 font-sans">
            Software Engineer — NLP & Machine Learning
          </h2>

          <p className="text-gray-600 max-w-md font-sans">
            I build intelligent systems that understand and generate human language, turning complex data into actionable insights and real-world solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/projects"
              className="px-6 py-3 bg-[#4A1D12] text-white rounded-lg font-medium hover:bg-[#61261A] transition"
            >
              View My Projects
            </Link>
            {/*<Link
              href="/blog"
              className="px-6 py-3 border border-[#4A1D12] text-[#4A1D12] rounded-lg font-medium hover:bg-[#FAF3E0] transition"
            >
              Read My Blog
            </Link>*/}
            <Link
              href="/contact"
              className="px-6 py-3 border border-[#8C3B2A] text-[#4A1D12] rounded-lg font-medium hover:bg-[#FAF3E0] transition"
            >
              Contact Me
            </Link>
          </div>

        </div>

        {/* Photo Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/profile-photo.jpg" // replace with your photo path
              alt="johnny-portrait"
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
          </div>
        </div>
      </main>
    </div>
  );
}


/*
<main className="px-6 pt-24 pb-12  bg-parchment-light bg-[url('/noise.png')]r">
        <p>Hello</p>
      </main>
*/