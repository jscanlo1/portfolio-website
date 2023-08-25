import Link from 'next/link';
import PageTitle from '@/components/page-title';
import SubHeading from '@/components/sub-heading';
import { getSortedProjectData } from '@/lib/project-helper';
import Date from '@/components/date';
import Head from 'next/head';
import Post from '@/components/post';

export default function projects({ allProjectData }) {
    return(
        <>
            <Head>
                <title>My Projects</title>
            </Head>
            <div className='pb-8'>
                <PageTitle>My Projects</PageTitle>
                <SubHeading>A non-exhaustive list of some my personal projects!</SubHeading>
            </div>
            
            <div className='w-4/5 md:w-2/3 mx-auto'>
                <Posts >
                    {allProjectData.map(({id, title, date, description, github, favourite}, index) => (
                        <Post key={id} id={id} title={title} date={date} github={github} description={description} index={index} />
                    ))}
                </Posts>
               
            </div>
            

        </>
    )
}

export function Posts({children}){
    return(
            <ul>
                {children}
            </ul>
        )

};
    



export async function getStaticProps() {
    const allProjectData = getSortedProjectData();
    return {
        props: {
            allProjectData,
        },
    };
}