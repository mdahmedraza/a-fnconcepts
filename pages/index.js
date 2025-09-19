import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '@/components/Main';
import About from '../components/About';
import Feature from '@/components/Feature';
import Achievment from '@/components/Achievment';
import Team from '@/components/Team';//
import Client from '@/components/Client';//
import Services from '@/components/Services';
import Partners from '@/components/Partners';//
import Projects from '../components/Projects';
import Contact from '@/components/Contact';

function HomePage(){
  return(
    <div>
      <Head>
        <title>ahmed | full-stack developer</title>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Feature />
      <Achievment />
      <Team />
      <Client />
      <Services />
      <Partners />
      <Projects />
      <Contact />
    </div>
  )
}
export default HomePage;



// next_portfolio_website\portfolio-front-end\my-portfolio   
