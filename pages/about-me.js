import PageTitle from '@/components/page-title';
import Head from 'next/head';
import Link from 'next/link';
import {FaGithub, FaLinkedin, FaEnvelope, FaFilePdf} from 'react-icons/fa';



const resources = [
    {name: 'GitHub', src: 'https://github.com/jscanlo1', target: '_blank' , icon: <FaGithub className='inline-block mb-1'/>},
    {name: 'LinkedIn', src: 'https://www.linkedin.com/in/johnny-scanlon-302419276/', target: '_blank' , icon: <FaLinkedin className='inline-block mb-1'/>},
    {name: 'Email', src: 'mailto:johnnyscanlon22@gmail.com', target: '_self',  icon: <FaEnvelope className='inline-block mb-1'/>},
    {name: 'Thesis', src: '/thesis', target: '_self', icon: <FaFilePdf className='inline-block mb-1'/>},
    {name: 'CV', src: '/cv', target: '_self', icon: <FaFilePdf className='inline-block mb-1'/>},
]


export default function aboutMe() {
    return(
        <>
            <Head>
                <title>
                    About Me
                </title>
            </Head>
            <PageTitle>About Me</PageTitle>

            <div className='w-4/5 md:w-3/5 mx-auto font-sans'>
                <section className='pb-8 mb-8 border-b-2 border-dotted border-zinc-400'>
                    <p className='my-4 text-xl '>
                        Hello, my name is Johnny Scanlon.
                    </p>

                    <p className='my-4 text-xl'>
                        I am currently a <strong>Full-Stack Developer</strong> at Carbon27.
                    </p>

                    <p className='my-4 text-xl'>
                        Carbon27 is a start-up looking at applying blockchain technology to the issue of carbon credits. 
                    </p>

                </section>

                <section className='pb-8 mb-8 border-b-2 border-dotted border-zinc-400'>
                    <p className='my-4 text-xl'>
                        I graduated with a Master's degree in Computer Engineering from Trinity College Dublin. 
                        I maintained a First Class Honours across all five years of the programme and was awarded my degree with <strong>distinction</strong>.
                    </p>

                    <p className='my-4 text-xl'>
                        I am also the recipient of the prestigious <strong>Trinity Foundation Scholarship</strong>.
                    </p>

                    <p className='my-4 text-xl'>
                        My Thesis focused on <strong>Machine Learning</strong> and <strong>Natural Language Processing</strong>.
                    </p>

                </section>
                
                
                
                


                <div className=''>
                    <div className='flex flex-1 justify-evenly'>

                        {resources.map(({name, src, target, icon}) => {
                            return (
                                <Link key={name}  href={src} target={target} className='text-zinc-950 hover:bg-zinc-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium   '>
                                    {icon} <strong> {name}</strong>
                                </Link>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    );
}

/**
 * <p className='my-4 text-xl'>
                        Carbon27 is a start-up looking at applying blockchain technology to the issue of carbon credits. 
                        I started off building an IOT smart meter, 
                        and have since gone on to design the cloud backend as well as the solidity contracts to generate the carbon credits.
                    </p>
 */