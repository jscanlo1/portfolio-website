import Head from 'next/head';
import PageTitle from '@/components/page-title';
import SubHeadingSM from '@/components/sub-heading-sm';
import { getFavouriteProjects } from '@/lib/project-helper';
import Link from 'next/link';
import Image from 'next/image'



export default function Home( {favouriteProjects} ) {
  return (

      <>
        <Head>
          <title>Portfolio Homepage</title>
        </Head>

        <div className='mt-4'>
          <PageTitle >
            Portfolio Website
          </PageTitle>
        </div>

        <SubHeadingSM>
          by Johnny Scanlon
        </SubHeadingSM>

        <div className='mx-auto rounded-full hidden md:block pt-8'>
          <Image src='/profile-photo.jpg' width={250} height={250} alt='Profile Picture of Author' className='rounded-full' />
        </div>

        <div className='w-4/5 md:w-3/5 mx-auto'>

          <div className='flex flex-1 justify-evenly pt-12'>
            <div className='text-zinc-950 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                <Link target='_blank' href='https://github.com/jscanlo1' ><strong> GitHub </strong></Link>
            </div>

            <div className='text-zinc-950 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                <Link target='_blank' href='https://www.linkedin.com/in/johnny-scanlon-302419276/' ><strong> LinkedIn </strong></Link>
            </div>

            <div className='text-zinc-950 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                <Link href='mailto:johnnyscanlon22@gmail.com' ><strong> Email </strong></Link>
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


/*
<div className='pt-4'>
            <p className='underline'><em>Highlights</em></p>
            
            <div className='mt-2 border-dotted border-y-2 border-zinc-400 flex flex-1 space-x-4 justify-start min-h-32 overflow-x-auto'>
              {favouriteProjects.map(({id, title, date, description, github, favourite}) => {
                return(
                  <div key={id} className='min-h-32 basis-2/5 shrink-0 grow-0 p-4'> 
                    <Link className='font-bold' href={`/projects/${id}`}>{title}</Link>
                    <p className='text-sm text-zinc-700'>{date}</p>
                  </div>
                )
              })}
            </div>
          </div>
*/