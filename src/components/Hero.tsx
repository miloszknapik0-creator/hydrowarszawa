import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-plumber.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/90">
              <span className="h-2 w-2 rounded-full bg-trust animate-pulse" />
              Dostępni 24/7 w Warszawie
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight font-heading">
              Profesjonalne usługi
              <br />
              <span className="text-accent">hydrauliczne</span>
              <br />
              w Warszawie
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-lg font-body">
              Szybko, rzetelnie i w dobrej cenie. Naprawiamy awarie, montujemy
              instalacje i dbamy o komfort Twojego domu od ponad 15 lat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-base px-8 py-6" asChild>
                <a href="tel:+48500123456">
                  <Phone className="mr-2 h-5 w-5" />
                  Zadzwoń teraz
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="text-base px-8 py-6 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/10">
                Wyceń usługę
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground font-heading">15+</div>
                <div className="text-sm text-primary-foreground/60">lat doświadczenia</div>
              </div>
              <div className="h-10 w-px bg-primary-foreground/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground font-heading">2000+</div>
                <div className="text-sm text-primary-foreground/60">zadowolonych klientów</div>
              </div>
              <div className="h-10 w-px bg-primary-foreground/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground font-heading">30 min</div>
                <div className="text-sm text-primary-foreground/60">czas dojazdu</div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="Profesjonalny hydraulik podczas pracy w nowoczesnej łazience"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
