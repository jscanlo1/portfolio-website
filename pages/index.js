import Head from 'next/head';
import PageTitle from '@/components/page-title';
import SubHeadingSM from '@/components/sub-heading-sm';
import Content from '@/components/content';
import { getFavouriteProjects } from '@/lib/project-helper';
import Link from 'next/link';



export default function Home( {favouriteProjects} ) {
  return (

      <>
        <Head>
          <title>Portfolio Homepage</title>
        </Head>

        <div className='mt-20'>
          <PageTitle >
            Welcome!
          </PageTitle>
        </div>

        <SubHeadingSM>
          Maintained by Johnny Scanlon
        </SubHeadingSM>

        <div className='w-4/5 md:w-3/5 mx-auto'>
          <p className='py-2'>
            This is a personal website that mostly works as a portfolio for some hobby projects.
          </p>

          <p className='py-2'>
            I also sometimes use this site as a testing ground for some of my web dev hobby projects, so please feel free to have a look around!
          </p>

          <div className='pt-4'>
            <p className='underline'><em>Highlights</em></p>
            
            <div className='mt-2 border-dotted border-y-2 border-zinc-400 flex flex-1 space-x-4 justify-start min-h-32 overflow-x-auto'>
              {favouriteProjects.map(({id, title, date, description, github, favourite}) => {
                return(
                  <div className='min-h-32 basis-1/2 shrink-0 grow-0 p-4'> 
                    <Link className='font-bold' href={`/projects/${id}`}>{title}</Link>
                    <p className='text-sm text-zinc-700'>{date}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </>
      
  )
}

export async function getStaticProps(){
  const favouriteProjects = getFavouriteProjects();
  return{
    props:{
      favouriteProjects,
    }
  }
}

