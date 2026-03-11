import { useScrollPosition } from './hooks/useScrollPosition';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ProblemSolution } from './components/sections/ProblemSolution';
import { DeployWizard } from './components/sections/DeployWizard';
import { FeaturesGrid } from './components/sections/FeaturesGrid';
import { ChannelMarquee } from './components/sections/ChannelMarquee';
import { TemplateShowcase } from './components/sections/TemplateShowcase';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { CallToAction } from './components/sections/CallToAction';
import { noiseSvg } from './theme';

export default function App() {
  const scrolled = useScrollPosition();

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: '#08090c',
        color: '#fff',
        minHeight: '100vh',
        overflowX: 'hidden',
        backgroundImage: noiseSvg,
        backgroundRepeat: 'repeat',
      }}
    >
      <Navbar scrolled={scrolled} />
      <Hero />
      <ProblemSolution />
      <DeployWizard />
      <FeaturesGrid />
      <ChannelMarquee />
      <TemplateShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
