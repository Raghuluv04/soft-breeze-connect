import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Utensils, Users, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Bridging Food Surplus with Those in Need
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Food Bridge connects restaurants and events with surplus food to people experiencing food insecurity, 
              creating a sustainable solution to reduce waste and fight hunger.
            </p>
            <div className="space-x-4">
              <Button
                asChild
                className="bg-[#BACBBE] hover:bg-[#a8bcb0] text-black"
              >
                <Link to="/contact">Get Involved <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button
                variant="outline"
                asChild
              >
                <Link to="/faq">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-up">
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <Utensils className="h-12 w-12 text-[#BACBBE] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Food Recovery</h3>
              <p className="text-muted-foreground">
                We collect surplus food from restaurants, catering services, and events 
                to prevent food waste.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-[#BACBBE] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
              <p className="text-muted-foreground">
                Working with local organizations to distribute food to those who need 
                it most in our community.
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm">
              <Clock className="h-12 w-12 text-[#BACBBE] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
              <p className="text-muted-foreground">
                Our efficient network ensures food is distributed within hours of 
                collection, maintaining freshness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center fade-in">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our mission to reduce food waste and fight hunger in our community. 
            Every contribution counts.
          </p>
          <Button
            asChild
            className="bg-[#BACBBE] hover:bg-[#a8bcb0] text-black"
          >
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;