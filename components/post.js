import Link from "next/link";
import Date from "./date";
import {FaGithub} from 'react-icons/fa';
import Default from './project-svg/Default/Default';


export default function Post({ id, title, date, github, description, index }){
    const contentFirst = (index % 2 === 0) ? true : false;

    let contentClasses;
    let pictureClasses;
    if(contentFirst){
        contentClasses = 'pr-8 md:border-r-2 order-first text-right'
        pictureClasses = 'pl-8'

    } else {
        contentClasses = 'pl-8 md:border-l-2 order-last text-left'
        pictureClasses = 'pr-8'
    }

    return (
        <li  className='pb-16 mb-16 border-dotted border-b-2 border-zinc-400 last-of-type:border-b-0'>
            <div className='grid grid-cos-1 md:grid-cols-2'>
                <div className={`h-fill ${contentClasses}  border-dotted  border-zinc-400`}>
                    <ProjectPostContent id={id} title={title} date={date} github={github} description={description} />
                </div>
                <div className={`hidden sm:block h-fill  ${pictureClasses}`}>
                    <ProjectPostImage />
                </div>
            </div>
        </li>
    )
}


function ProjectPostContent({id, title, date, github, description}){
    return(
        <>
            <p className='text-md text-center text-zinc-700 pb-8'><Date dateString={date}/></p>

            <Link className=' block font-bold text-5xl pb-8' href={ `/projects/${id}` }>{title}</Link>
            
            <p className="text-xl pb-8">{description}</p>

            <Link target='_blank' href={github} className='block text-zinc-950 hover:bg-zinc-700 hover:text-white rounded-md  pb-8 text-md font-medium' >
                <FaGithub className='inline-block mb-1'/> <strong>GitHub </strong>
            </Link>

            <Link className=' block font-bold text-md  text-zinc-700' href={`/projects/${id}`}> Read More -&gt; </Link>
        </> 
    )
    
}

function ProjectPostImage(){
    return(
        <>
            <Default />

            
        </>
    )

}


