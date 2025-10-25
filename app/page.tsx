import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { AboutSection } from '@/components/about-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { ScrollProgress } from '@/components/scroll-progress'

export default function Home() {
  return (
    <main className="relative pb-8">
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
