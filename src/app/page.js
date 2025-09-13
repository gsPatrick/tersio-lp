import TopBar from '@/components/TopBar/TopBar';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import PracticeAreas from '@/components/PracticeAreas/PracticeAreas';
import Differentials from '@/components/Differentials/Differentials';
import Team from '@/components/Team/Team';
import Contact from '@/components/Contact/Contact'; // 1. Importe o Contato
import Footer from '@/components/Footer/Footer'; // 2. Importe o Rodapé

export default function Home() {
  return (
    <main>
      <TopBar />
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <Differentials />
      <Team />
      <Contact /> {/* 3. Adicione o Contato */}
      <Footer /> {/* 4. Adicione o Rodapé */}
    </main>
  );
}