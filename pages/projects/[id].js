import PageTitle from "@/components/page-title";
import SubHeadingSM from "@/components/sub-heading-sm";
import Date from "@/components/date";
import { getProjectData, getAllProjectIds } from "@/lib/project-helper";

export default function Project({ projectData }){
    return (
        <article>
            <PageTitle> { projectData.title } </PageTitle>
            <SubHeadingSM> <Date dateString={projectData.date} /> </SubHeadingSM>

            {/* Works but maybe come up with a more elegeant solution */}
            <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />

        </article>
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