import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does the installation take?",
    answer:
      "Professional installation typically takes 1-2 days depending on your roof structure and electrical setup. Our certified technicians handle everything from mounting panels to connecting the inverter system.",
  },
  {
    question: "What happens during power outages or cloudy days?",
    answer:
      "Your system includes 4 high-capacity batteries (800Ah total) that store energy for use during outages or cloudy periods. You can typically run your home for 2-3 days without any sunlight.",
  },
  {
    question: "Is the 6-month installment plan really 0% interest?",
    answer:
      "Yes! Our partnership with Creditcorp and Fidelity Bank allows us to offer genuine 0% interest installments. You pay exactly ₦3,972,000 total - just spread over 6 months.",
  },
  {
    question: "What's included in the 5-year warranty?",
    answer:
      "Complete coverage on all components: solar panels, inverter, batteries, and charge controller. We also provide free maintenance for the first year and 24/7 technical support throughout the warranty period.",
  },
  {
    question: "How much can I really save on electricity bills?",
    answer:
      "Most customers eliminate their NEPA bills completely, saving ₦150,000-₦250,000 monthly. With an average saving of ₦200,000/month, you'll recover your investment in 18-20 months.",
  },
  {
    question: "Can the system power air conditioning?",
    answer:
      "Yes! The 4KVA system can power small to medium air conditioners, along with all your other appliances like refrigerators, washing machines, lighting, and electronics simultaneously.",
  },
  {
    question: "What if I need technical support after installation?",
    answer:
      "We provide 24/7 technical support via phone and WhatsApp. Our technicians can also visit for on-site support if needed. Most issues can be resolved remotely within minutes.",
  },
  {
    question: "How do I qualify for the installment plan?",
    answer:
      "You need steady monthly income of at least ₦50,000, valid employment verification, and Nigerian residency. Our partners Creditcorp and Fidelity Bank handle the quick approval process.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Frequently Asked
            <span className="text-primary block">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Get answers to common questions about our solar systems, installation process, and payment options.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold py-6">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
