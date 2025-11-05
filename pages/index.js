


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
import Partner from '@/components/Partner';
import Contact from '@/components/Contact';
import Footer from '@/components/footer/Footer';
import ChatWidget from '@/components/ChatWidget';

function HomePage(){
  return(
    <div className="relative">
      <Head>
        <title>Future Navi Concepts | Digital Marketing & IT Solutions</title>
        <meta name="description" content="Founded in 2025, Future Navi Concepts is a Digital Marketing & IT Solutions Agency, dedicated to providing advanced technology solutions that empower businesses to thrive in the digital age." />
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
      <Partner />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  )
}
export default HomePage;



// next_portfolio_website\portfolio-front-end\my-portfolio   
