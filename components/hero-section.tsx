"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Home, Shield } from "lucide-react"

export function HeroSection() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-primary/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/solar-panels-on-modern-nigerian-home-roof-with-blu.jpg')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Nigeria's #1 Solar Solution
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
            Achieve Complete
            <span className="text-primary block">Energy Independence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto">
            Power your entire home with our premium 4KVA solar system. Say goodbye to NEPA bills and enjoy 24/7
            uninterrupted electricity.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-foreground">
              <Home className="w-5 h-5 text-primary" />
              <span className="font-medium">Powers Medium Homes</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-medium">5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-medium">24/7 Power Supply</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" onClick={scrollToPricing}>
              Get Your Solar System
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" onClick={scrollToPricing}>
              View Pricing Options
            </Button>
          </div>

          {/* Price Highlight */}
          <div className="mt-8 p-4 bg-card rounded-lg border inline-block">
            <p className="text-sm text-muted-foreground">Complete System Starting From</p>
            <p className="text-3xl font-bold text-primary">₦3,972,000</p>
            <p className="text-sm text-muted-foreground">Or ₦662,000/month for 6 months</p>
          </div>
        </div>
      </div>
    </section>
  )
}
