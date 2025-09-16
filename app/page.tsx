import { HeroSection } from "@/components/hero-section"
import { ProductFeatures } from "@/components/product-features"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTA } from "@/components/final-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductFeatures />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </main>
  )
}
