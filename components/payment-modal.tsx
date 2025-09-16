"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Calendar, MapPin, Phone, Mail, User, Building } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  paymentType: "full" | "installment"
}

const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
]

export function PaymentModal({ isOpen, onClose, paymentType }: PaymentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    workplace: "",
    placeOfWork: "",
    salaryRange: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (paymentType === "full") {
      // Redirect to Paystack payment
      const paystackUrl = `https://paystack.com/pay/solar-system-4kva`
      window.open(paystackUrl, "_blank")
    } else {
      // Submit installment application
      try {
        const response = await fetch("https://stroom-interest-form.onrender.com/api/forms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            system: "4KVA Inverter System",
            systemPrice: "₦3,972,000",
            payment: "6 months",
          }),
        })

        if (response.ok) {
          alert("Application submitted successfully! We will contact you within 24 hours.")
          onClose()
        } else {
          alert("Error submitting application. Please try again.")
        }
      } catch (error) {
        alert("Error submitting application. Please try again.")
      }
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            {paymentType === "full" ? (
              <>
                <CreditCard className="w-6 h-6 text-primary" />
                Complete Your Purchase
              </>
            ) : (
              <>
                <Calendar className="w-6 h-6 text-primary" />
                Apply for Installment Plan
              </>
            )}
          </DialogTitle>
        </DialogHeader>

        <Card className="border-primary/20">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">4KVA/48V Solar Inverter System</CardTitle>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary">
                {paymentType === "full" ? "₦3,972,000" : "₦662,000/month"}
              </span>
              {paymentType === "installment" && (
                <span className="text-sm text-muted-foreground">6 months, 0% interest</span>
              )}
            </div>
          </CardHeader>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Emmanuel Odion Jafaru"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="emmyjaff22@gmail.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+2340933838340"
                required
              />
            </div>
            <div>
              <Label htmlFor="state" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                State *
              </Label>
              <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  {nigerianStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="address" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Installation Address *
            </Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="Enter your complete address"
              required
            />
          </div>

          {paymentType === "installment" && (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="workplace" className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Employment Type *
                  </Label>
                  <Select value={formData.workplace} onValueChange={(value) => handleInputChange("workplace", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select employment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Government">Government</SelectItem>
                      <SelectItem value="Private">Private</SelectItem>
                      <SelectItem value="Self-Employed">Self-Employed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="placeOfWork">Place of Work *</Label>
                  <Input
                    id="placeOfWork"
                    value={formData.placeOfWork}
                    onChange={(e) => handleInputChange("placeOfWork", e.target.value)}
                    placeholder="Company/Organization name"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="salaryRange">Monthly Income Range *</Label>
                <Select value={formData.salaryRange} onValueChange={(value) => handleInputChange("salaryRange", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="₦50,000 - ₦100,000">₦50,000 - ₦100,000</SelectItem>
                    <SelectItem value="₦100,000 - ₦200,000">₦100,000 - ₦200,000</SelectItem>
                    <SelectItem value="₦200,000 - ₦500,000">₦200,000 - ₦500,000</SelectItem>
                    <SelectItem value="₦500,000 - ₦1,000,000">₦500,000 - ₦1,000,000</SelectItem>
                    <SelectItem value="Above ₦1,000,000">Above ₦1,000,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          <div className="flex gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
              {paymentType === "full" ? "Proceed to Payment" : "Submit Application"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
