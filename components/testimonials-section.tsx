import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Adebayo Ogundimu",
    location: "Lagos, Nigeria",
    rating: 5,
    text: "Best investment I've made! No more NEPA bills and my family enjoys 24/7 electricity. The installation was professional and the system works perfectly.",
    savings: "Saves ₦180,000 monthly",
  },
  {
    name: "Mrs. Chioma Okeke",
    location: "Abuja, FCT",
    rating: 5,
    text: "The 6-month payment plan made it affordable for us. Now we power everything - AC, fridge, washing machine. Our neighbors are amazed!",
    savings: "Eliminated all power costs",
  },
  {
    name: "Engineer Musa Ibrahim",
    location: "Kano, Nigeria",
    rating: 5,
    text: "As an engineer, I was impressed by the quality of components. The system has been running flawlessly for 8 months. Excellent ROI!",
    savings: "₦2.1M saved annually",
  },
  {
    name: "Dr. Funmi Adeyemi",
    location: "Ibadan, Oyo",
    rating: 5,
    text: "My clinic now runs 24/7 without interruption. The backup power is incredible and my patients are happier. Worth every naira!",
    savings: "Business growth 40%",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            What Our Customers
            <span className="text-primary block">Are Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Join thousands of satisfied customers who have achieved energy independence with our premium solar systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-primary/20 mb-4" />

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{testimonial.savings}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
              <p className="text-muted-foreground">System Uptime</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5 Years</div>
              <p className="text-muted-foreground">Warranty Coverage</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Technical Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
