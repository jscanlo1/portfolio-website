import Head from 'next/head';
import PageTitle from '@/components/page-title';
import SubHeadingSM from '@/components/sub-heading-sm';
import Content from '@/components/content';


export default function Home() {
  return (

      <div >
        <Head>
          <title>Portfolio Homepage</title>
        </Head>
        <PageTitle >
          My Portfolio
        </PageTitle>

        <SubHeadingSM>
          by Johnny Scanlon
        </SubHeadingSM>

        <Content>
          This website serves as a portfolio for some of the work I've done, along with some hobby projects. 
          As well, I often use it as a testing ground of sorts for any web dev projects I have. Feel free to have a look around!
        </Content>

        <Content>
          If you'd like to read about myself in more detail please consult the about me section. 
          A brief personal description is writen there, along with links to LinkedIn etc....
        </Content>

        <Content>
          If you'd like to explore some of the projects I've done, please check out the porjects section! 
          Please keep in mind this may not be an exhaustive list and others may be present on my GitHub (link in about me section).
        </Content>
      </div>
      
  )
}
