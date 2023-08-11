import Banner from '../components/Banner';;
import Header from '../components/Header';
import Info from '../components/Info';
import ProjectShowcase from '../components/ProjectShowcase';
import Services from '../components/Services';
import FreeBees from '../components/FreeBees';
import AskedQuestions from '../components/AskedQuestions';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className=''>
      <Header />

      <section id='home'>
        <Banner />

      </section>
      <section id='info'>
        <Info />
      </section>

      <section id='work'>
        <ProjectShowcase />
      </section>

      <section id='services'>
        <Services />
      </section>

      <section id='freebees'>
        <FreeBees />
      </section>

      <AskedQuestions />

      <Footer />
    </div>
  )
}
