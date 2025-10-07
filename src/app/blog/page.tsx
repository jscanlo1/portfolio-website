import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Typewriter from '@/components/Typewriter';


type BlogMetadata = {
  title: string;
  slug: string;
  description?: string;
  github?: string;
  date?: string;
};

export default function BlogPage() {
  const projects = getBlogs();

  return (
    <main className="min-h-screen flex bg-parchment-light bg-[url('/noise.png')]">
      {/* Left fixed panel */}
      <aside className="hidden md:flex md:w-1/3 lg:w-1/4 fixed left-0 top-0 bottom-0 flex-col justify-center p-12 bg-parchment-light/90 backdrop-blur-sm border-r border-[#e5d9c5] shadow-md">
        <h1 className="text-5xl font-title text-[#4A1D12] mb-4">
          <Typewriter text='Blog' />
        </h1>
        <p className="text-gray-700 font-sans leading-relaxed">
          A collection of my recent work — exploring NLP, data-driven
          systems, and intelligent interfaces. Each project blends
          experimentation, design, and machine learning in its own way.
        </p>
      </aside>

      {/* Right scrollable panel */}
      <section className="w-full md:ml-[33%] lg:ml-[25%] px-6 md:px-12 py-20 md:py-24 overflow-y-auto">
        <div className="max-w-4xl mx-auto divide-y divide-dashed divide-[#d5c9b6]">
          {projects.map((project) => (
            <div key={project.slug} className="py-8 first:pt-0 last:pb-0">
              <div className="group block">
                <Link href={`/projects/${project.slug}`}>
                  <h2 className="text-2xl md:text-3xl font-title text-[#4A1D12] mb-2 group-hover:underline">
                    {project.title}
                  </h2>

                  {project.date && (
                    <p className="text-sm text-gray-500 mb-3">{project.date}</p>
                  )}

                  {project.description && (
                    <p className="text-gray-700 font-sans">
                      {project.description}
                    </p>
                  )}
                </Link>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-[#4A1D12] font-medium hover:text-[#5b2a18] transition"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            </div>

          ))}
        </div>
      </section>
    </main>
  );
}

// Helper to read markdown files from /projects
function getBlogs(): BlogMetadata[] {
  const blogDir = path.join(process.cwd(), 'blogPosts');
  const files = fs.readdirSync(blogDir);

  return files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      title: data.title,
      slug: data.slug,
      description: data.description,
      github: data.github,
      date: data.date,
    };
  });
}
