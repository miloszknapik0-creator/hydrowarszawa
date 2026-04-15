import { Button } from "@/components/ui/button";
import { Phone, Droplets } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Droplets className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground font-heading">HydroWarszawa</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#uslugi" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Usługi</a>
          <a href="#kontakt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Kontakt</a>
        </div>
        <Button size="sm" asChild>
          <a href="tel:+48500123456">
            <Phone className="mr-2 h-4 w-4" />
            500 123 456
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
