import Link from 'next/link';
import PageTitle from '@/components/page-title';
import SubHeading from '@/components/sub-heading';
import SubHeadingSM from '@/components/sub-heading-sm';
import { getSortedProjectData } from '@/lib/project-helper';
import Date from '@/components/date';
import Content from '@/components/content';
import Head from 'next/head';


export default function projects({ allProjectData }) {
    return(
        <>
            <Head>
                <title>My Projects</title>
            </Head>
            <PageTitle>My Projects</PageTitle>
            <SubHeading>A non-exhaustive list of some my personal projects!</SubHeading>

            <Content>
                <section className='content-center mx-auto'>
                    <ul className='mx-auto'>
                        {allProjectData.map(({id, title, date, description, github, favourite}) => (
                            <li  key={id} className=''>
                                <div className='grid grid-cols-1 md:grid-cols-2 p-4 border-dotted border-b-2 border-zinc-400'>
                                    <div className='h-fill p-2 border-dotted md:border-r-2 border-zinc-400'>
                                        <Link className='font-bold' href={`/projects/${id}`}>{title}</Link>
                                        <br/>
                                        <p className='text-sm text-zinc-700'><Date dateString={date}/></p>
                                        <a className='font-bold text-sm' href={github} target="_blank"> - GitHub Repo -</a>
                                    </div>
                                    <div className=' h-fill p-2'>
                                        <p>{description}</p>
                                        <Link className='font-bold text-sm ' href={`/projects/${id}`}>- Read More -</Link>
                                    </div>
                                </div>
                                
                                
                            </li>
                        ))}
                    </ul>
                </section>
            </Content>
            

        </>
    )
}

export async function getStaticProps() {
    const allProjectData = getSortedProjectData();
    return {
        props: {
            allProjectData,
        },
    };
}