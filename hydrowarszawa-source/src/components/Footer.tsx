import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-background font-heading">HydroWarszawa</span>
          </div>
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} HydroWarszawa. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
