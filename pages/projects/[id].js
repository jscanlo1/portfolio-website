import PageTitle from "@/components/page-title";
import SubHeadingSM from "@/components/sub-heading-sm";
import Date from "@/components/date";
import { getProjectData, getAllProjectIds } from "@/lib/project-helper";
import Head from "next/head";
import Link from "next/link";
import {FaGithub} from 'react-icons/fa';

export default function Project({ projectData }){
    return (
      <>
        <Head>
          <title>{ projectData.title }</title>
        </Head>
        <article>

            
            
            
            <div className='mx-auto font-sans prose-blockquote:border-l-zinc-400 prose lg:prose-l'>
              <h1 className="font-serif">
                {projectData.title }
              </h1>

              <p>
                <Date dateString={projectData.date} /> 
              </p>

              <Link  href={projectData.github} target="_blank" className="text-zinc-950 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                <FaGithub className='inline-block mb-1'/> GitHub Repo
              </Link>

              

              {/* Works but maybe come up with a more elegeant solution */}
              <div className="" dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />

            </div>

        </article>
        
      </>
    )
}

export async function getStaticPaths() {
    const paths = getAllProjectIds();
    return {
      paths,
      fallback: false,
    };
  }


export async function getStaticProps({ params }) {
    const projectData = await getProjectData( params.id);
    
    return {
        props: {
          projectData,
        },
      };
}