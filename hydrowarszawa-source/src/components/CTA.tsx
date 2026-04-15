import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading mb-4">
          Awaria? Zadzwoń teraz!
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
          Działamy szybko i skutecznie. Bezpłatna wycena i dojazd w 30 minut na terenie Warszawy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-base px-8 py-6" asChild>
            <a href="tel:+48500123456">
              <Phone className="mr-2 h-5 w-5" />
              +48 500 123 456
            </a>
          </Button>
          <Button size="lg" variant="ghost" className="text-base px-8 py-6 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/10">
            Formularz kontaktowy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
