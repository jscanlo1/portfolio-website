import Content from '@/components/content';
import PageTitle from '@/components/page-title';
import Head from 'next/head';

export default function aboutMe() {
    return(
        <div>
            <Head>
                <title>
                    About Me
                </title>
            </Head>
            <PageTitle>About Me</PageTitle>

            <Content> 
                <p>My name is Johnny Scanlon. I am a computer engineering graduate from Trinity College Dublin.</p>

                <p>My Master's Thesis focused on Natural Language Processing and Deep Learning</p>
                
            </Content>
        </div>
    );
}