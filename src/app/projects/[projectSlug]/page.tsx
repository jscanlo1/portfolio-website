import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type ProjectMetadata = {
    title: string;
    slug: string;
    description?: string;
    github?: string;
    date?: string;
    image?: string;
    content: string;
};

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ projectSlug: string }>;
}) {
    const { projectSlug } = await params;

    const project = await getProject(projectSlug);

    if (!project) return notFound();

    return (
        <main className="min-h-screen px-6 pt-24 pb-12 w-full mx-auto bg-parchment-light bg-[url('/noise.png')] text-black">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Hero image */}
                {project.image && (
                    <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden shadow-md">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Header */}
                <header className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-title text-[#4A1D12]">
                        {project.title}
                    </h1>
                    {project.date && (
                        <div className="text-gray-700 font-sans">
                            {new Date(project.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </div>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-[#4A1D12] font-medium hover:text-[#5b2a18] transition"
                        >
                            View on GitHub →
                        </a>
                    )}
                </header>

                {/* Markdown content */}
                <article className="prose prose-lg max-w-none text-gray-800">
                    <ReactMarkdown>
                        {project.content}
                    </ReactMarkdown>
                </article>


                {/* Back link */}
                <div className="mt-12">
                    <Link
                        href="/projects"
                        className="inline-block text-[#4A1D12] font-medium hover:underline"
                    >
                        ← Back to Projects
                    </Link>
                </div>
            </div>
        </main>
    );
}

// Helper to read a single project markdown file including content
async function getProject(slug: string): Promise<ProjectMetadata | null> {
    try {
        const filePath = path.join(process.cwd(), 'projects', `${slug}.md`);
        const fileContent = await fs.promises.readFile(filePath, 'utf-8');
        const { data, content } = matter(fileContent);

        return {
            title: data.title || slug.replace(/-/g, ' '),
            description: data.description || '',
            github: data.github || '',
            date: data.date || '',
            image: data.image || '',
            slug,
            content, // include the markdown body
        };
    } catch (err) {
        console.error('Failed to load project:', err);
        return null;
    }
}
