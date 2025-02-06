import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

const Guidelines = () => {
  const guidelines = [
    {
      category: "Food Safety",
      items: [
        "All food must be properly sealed and packaged",
        "Temperature-sensitive items must be stored appropriately",
        "Food must be within its expiration date",
        "Packaging must be intact and undamaged"
      ]
    },
    {
      category: "Donation Process",
      items: [
        "Contact us at least 2 hours before food pickup",
        "Provide accurate details about food quantity and type",
        "Ensure easy access to pickup location",
        "Have documentation ready if required"
      ]
    },
    {
      category: "Acceptable Items",
      items: [
        "Prepared but unserved food from events",
        "Unopened packaged foods",
        "Fresh produce and vegetables",
        "Properly stored frozen items"
      ]
    },
    {
      category: "Food Transportation",
      items: [
        "Use appropriate containers for different food types",
        "Maintain proper temperature during transit",
        "Handle containers with care",
        "Follow food safety protocols"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center fade-in">
          <h1 className="text-4xl font-bold mb-4">Donation Guidelines</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Follow these guidelines to ensure safe and effective food donation
          </p>
        </div>

        <div className="space-y-8 slide-up">
          {guidelines.map((section, index) => (
            <Card key={index} className="border-[#BACBBE]">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
                <Separator className="my-4" />
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-[#BACBBE] mt-1 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center fade-in">
          <p className="text-muted-foreground">
            Have questions about our guidelines? Visit our{" "}
            <a href="/faq" className="text-[#BACBBE] hover:underline">
              FAQ page
            </a>{" "}
            or{" "}
            <a href="/contact" className="text-[#BACBBE] hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;