"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react"

export function FinalCTA() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Ready to Achieve
            <span className="text-primary block">Energy Independence?</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto">
            Join thousands of Nigerians who have eliminated their electricity bills and enjoy 24/7 uninterrupted power
            with our premium solar systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" onClick={scrollToPricing}>
              Get Your Solar System Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent"
              onClick={() => window.open("tel:+2341234567890", "_self")}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call for Consultation
            </Button>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold mb-1">Call Us</p>
                <p className="text-sm text-muted-foreground">+234 123 456 7890</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold mb-1">Email Us</p>
                <p className="text-sm text-muted-foreground">info@solarsystem.ng</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold mb-1">Visit Us</p>
                <p className="text-sm text-muted-foreground">Lagos, Abuja, PH</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold mb-1">Support</p>
                <p className="text-sm text-muted-foreground">24/7 Available</p>
              </CardContent>
            </Card>
          </div>

          {/* Final Guarantee */}
          <Card className="bg-primary/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Our Promise to You</h3>
              <p className="text-muted-foreground leading-relaxed">
                We guarantee professional installation, premium components, and 5-year comprehensive warranty. If you're
                not completely satisfied within the first 30 days, we'll make it right or provide a full refund.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
