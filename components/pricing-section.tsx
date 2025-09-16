"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Calendar, ArrowRight } from "lucide-react"
import { PaymentModal } from "@/components/payment-modal"

const benefits = [
  "4KVA/48V Pure Sine Wave Inverter",
  "8 × 550W High-Efficiency Solar Panels",
  "4 × 12V 200Ah Tubular Batteries",
  "100A MPPT Charge Controller",
  "Professional Installation & Setup",
  "5-Year Comprehensive Warranty",
  "Free Maintenance (First Year)",
  "24/7 Technical Support",
]

export function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState<"full" | "installment">("full")

  const handlePaymentSelect = (type: "full" | "installment") => {
    setSelectedPayment(type)
    setIsModalOpen(true)
  }

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Choose Your
            <span className="text-primary block">Payment Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Get your complete solar system with flexible payment options designed for your budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Full Payment Option */}
          <Card className="border-2 hover:border-primary/50 transition-colors relative">
            <CardHeader className="text-center pb-8">
              <Badge className="w-fit mx-auto mb-4 bg-secondary text-secondary-foreground">Best Value</Badge>
              <CardTitle className="text-2xl mb-2">Full Payment</CardTitle>
              <div className="text-4xl font-bold text-primary mb-2">₦3,972,000</div>
              <p className="text-muted-foreground">One-time payment via Paystack</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
                onClick={() => handlePaymentSelect("full")}
              >
                <CreditCard className="mr-2 w-5 h-5" />
                Pay Full Amount
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">Secure payment powered by Paystack</p>
            </CardContent>
          </Card>

          {/* Installment Payment Option */}
          <Card className="border-2 border-primary hover:border-primary/70 transition-colors relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground px-6 py-2">Most Popular</Badge>
            </div>
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-2xl mb-2">6-Month Installment</CardTitle>
              <div className="text-4xl font-bold text-primary mb-2">₦662,000</div>
              <p className="text-muted-foreground">Per month for 6 months</p>
              <p className="text-sm text-muted-foreground mt-2">Total: ₦3,972,000 (No interest!)</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3 text-primary font-medium">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>0% Interest Rate</span>
                </li>
              </ul>
              <Button
                className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
                onClick={() => handlePaymentSelect("installment")}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Apply for Installment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">Powered by Creditcorp & Fidelity Bank</p>
            </CardContent>
          </Card>
        </div>

        {/* Savings Calculator */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Your Savings Breakdown</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">₦200,000</div>
                  <p className="text-muted-foreground">Average Monthly NEPA Bill</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">₦2.4M</div>
                  <p className="text-muted-foreground">Annual Electricity Savings</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">18 Months</div>
                  <p className="text-muted-foreground">Complete ROI Period</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} paymentType={selectedPayment} />
    </section>
  )
}
