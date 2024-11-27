"use client"
import Hero from '@/app/components/Hero';
import Contact from './contact/page';
import About from './about/page';

const Home: React.FC = () => {
  return (
    <div>
        
      <Hero/>
       <About/>
      <Contact/> 


    </div>
  );
};

export default Home;
