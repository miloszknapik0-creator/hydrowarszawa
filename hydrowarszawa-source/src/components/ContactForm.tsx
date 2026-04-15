import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Wiadomość wysłana!",
        description: "Odezwiemy się do Ciebie w ciągu 30 minut.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 font-heading">Kontakt</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
                Potrzebujesz hydraulika?
              </h2>
              <p className="text-muted-foreground text-lg">
                Skontaktuj się z nami — wycenimy usługę bezpłatnie i przyjedziemy najszybciej jak to możliwe.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="text-lg font-semibold text-foreground font-heading">+48 500 123 456</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-lg font-semibold text-foreground font-heading">kontakt@hydraulik-warszawa.pl</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Obszar działania</p>
                  <p className="text-lg font-semibold text-foreground font-heading">Cała Warszawa i okolice</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-card border border-border">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Imię i nazwisko</label>
                <Input placeholder="Jan Kowalski" required maxLength={100} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Telefon</label>
                <Input placeholder="+48 500 000 000" required type="tel" maxLength={20} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input placeholder="jan@example.com" type="email" maxLength={255} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Opis problemu</label>
              <Textarea placeholder="Opisz krótko, w czym możemy pomóc..." rows={5} required maxLength={1000} />
            </div>
            <Button type="submit" size="lg" className="w-full py-6 text-base" disabled={loading}>
              <Send className="mr-2 h-5 w-5" />
              {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
