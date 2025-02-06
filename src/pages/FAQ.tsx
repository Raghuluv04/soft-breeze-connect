import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is Food Bridge?",
        answer: "Food Bridge is a non-profit organization that connects surplus food from restaurants and events with people in need, reducing food waste and fighting hunger in our communities."
      },
      {
        question: "How can I get involved?",
        answer: "You can get involved by volunteering, donating food, or contributing financially to our cause. Visit our Get Involved page to learn more."
      }
    ]
  },
  {
    category: "Donations",
    questions: [
      {
        question: "What types of food can I donate?",
        answer: "We accept unopened, unexpired packaged foods and fresh produce. For prepared foods, we have specific guidelines to ensure food safety."
      },
      {
        question: "How is the food distributed?",
        answer: "We work with local community centers, shelters, and food banks to distribute donated food to those in need within hours of collection."
      }
    ]
  },
  {
    category: "Volunteering",
    questions: [
      {
        question: "What volunteer opportunities are available?",
        answer: "We need volunteers for food collection, sorting, distribution, and administrative tasks. Training is provided for all positions."
      },
      {
        question: "How much time do I need to commit?",
        answer: "We have flexible volunteering options, from one-time events to regular weekly commitments. You can choose what works best for your schedule."
      }
    ]
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center fade-in">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Find answers to common questions about Food Bridge
          </p>
        </div>

        <div className="mb-8 slide-up">
          <Input
            type="search"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="space-y-8 slide-up">
          {filteredFaqs.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;