import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Battery, Sun, Zap, Shield, Wrench, TrendingDown } from "lucide-react"

const features = [
  {
    icon: Sun,
    title: "Premium Solar Panels",
    description: "8 pieces of 550W high-efficiency solar panels that capture maximum sunlight even on cloudy days.",
    specs: "550W × 8 = 4.4KW Total Capacity",
  },
  {
    icon: Battery,
    title: "Long-Lasting Batteries",
    description: "4 pieces of 12V 200Ah tubular batteries providing reliable energy storage for days.",
    specs: "200Ah × 4 = 800Ah Total Storage",
  },
  {
    icon: Zap,
    title: "4KVA Pure Sine Wave Inverter",
    description: "Clean, stable power output that's safe for all your sensitive electronics and appliances.",
    specs: "4000W Continuous Power Output",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Our certified technicians handle complete installation with proper wiring and safety measures.",
    specs: "Free Installation & Setup",
  },
  {
    icon: Shield,
    title: "5-Year Comprehensive Warranty",
    description: "Full warranty coverage on all components with free maintenance and technical support.",
    specs: "5 Years Full Coverage",
  },
  {
    icon: TrendingDown,
    title: "Massive Cost Savings",
    description: "Eliminate electricity bills completely and save over ₦2M annually on power costs.",
    specs: "ROI in 18-24 Months",
  },
]

export function ProductFeatures() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Everything You Need for
            <span className="text-primary block">Complete Energy Freedom</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Our 4KVA system includes premium components designed to power your entire home with clean, reliable solar
            energy for decades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="bg-primary/5 rounded-lg p-3">
                  <p className="text-sm font-semibold text-primary">{feature.specs}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What It Powers Section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Powers Everything in Your Home</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              "All Room Lighting",
              "Refrigerator & Freezer",
              "Air Conditioner (Small)",
              "Washing Machine",
              "TV & Entertainment",
              "Phone & Laptop Charging",
              "Kitchen Appliances",
              "Security Systems",
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
