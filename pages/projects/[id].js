import PageTitle from "@/components/page-title";
import SubHeadingSM from "@/components/sub-heading-sm";
import Date from "@/components/date";
import { getProjectData, getAllProjectIds } from "@/lib/project-helper";
import Head from "next/head";

export default function Project({ projectData }){
    return (
      <>
        <Head>
          <title>{ projectData.title }</title>
        </Head>
        <article>

            <PageTitle> { projectData.title } </PageTitle>
            <SubHeadingSM> <Date dateString={projectData.date} /> </SubHeadingSM>
            <div className=" flex justify-center justify-items-center ">
              <div>
                <a className='block font-bold' href={projectData.github} target="_blank"> - GitHub Repo -</a>
              </div>
              
            </div>
            
            <div className='w-4/5 md:w-3/5 mx-auto'>

              {/* Works but maybe come up with a more elegeant solution */}
              <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />

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