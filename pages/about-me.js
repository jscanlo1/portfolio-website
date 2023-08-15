import Content from '@/components/content';
import PageTitle from '@/components/page-title';
import Head from 'next/head';
import Link from 'next/link';

const socials = [
    {name: 'GitHub', link: 'https://github.com/jscanlo1'},
    {name: 'LinkedIn', link: 'https://www.linkedin.com/in/johnny-scanlon-302419276/'},
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

            <div className='w-4/5 md:w-3/5 mx-auto'>
                <p className='my-4'>My name is Johnny Scanlon. I am a Computer Engineering graduate from Trinity College Dublin.</p>
                <p className='my-4'>I graduated in October 2022, and awarded an MAI in computer engineering with distinction. 
                I am also the recipient of the prestigious <em>Trinity Foundation Scholarship</em>, which is awarded based on perofrmance in a special set of examinations.</p>
                
                <p className='my-4'>
                    My Master's Thesis focused on Natural Language Processing and Deep Learning. 
                    Specifically, I looked at how emotion detection could be used to leverage performance of existing transformer methods. 
                    Details can be found on the <strong>projects</strong> page, along with a pdf of my Thesis. 
                    I also include this pdf at the bottom of this page, in the "additional resources" section 
                </p>

                <div className='my-4'>
                    <p className='underline'><strong>Socials</strong></p>
                    <div className='flex flex-1 space-x-8 my-4'>

                        {socials.map(({name, link}) => {
                            return (
                                <Link key={name} target='_blank' href={link} ><strong>&bull; {name}</strong></Link>
                            )
                        })}

                    </div>
                </div>
                

                <div className='my-8'>
                    <p className='underline '><strong>Additional Resources</strong></p>
                </div>
            </div>
        </>
    );
}