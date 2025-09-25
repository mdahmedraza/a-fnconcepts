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
import Footer from '@/components/footer/Footer';

function HomePage(){
  return(
    <>
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
      <Footer />
    </>
  )
}
export default HomePage;



// next_portfolio_website\portfolio-front-end\my-portfolio   
