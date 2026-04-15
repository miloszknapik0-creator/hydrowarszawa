import { Wrench, Droplets, Flame, ShowerHead, Pipette, Settings } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Naprawy awaryjne",
    description: "Szybka interwencja przy awariach hydraulicznych. Działamy 24/7 na terenie całej Warszawy.",
  },
  {
    icon: Droplets,
    title: "Udrażnianie rur",
    description: "Profesjonalne czyszczenie i udrażnianie kanalizacji. Nowoczesny sprzęt i skuteczne metody.",
  },
  {
    icon: Flame,
    title: "Instalacje grzewcze",
    description: "Montaż i naprawa ogrzewania. Piece, kotły, grzejniki — kompleksowa obsługa.",
  },
  {
    icon: ShowerHead,
    title: "Montaż łazienek",
    description: "Pełna instalacja armatury łazienkowej. Kabiny, wanny, umywalki, bidety.",
  },
  {
    icon: Pipette,
    title: "Instalacje wodne",
    description: "Projektowanie i montaż instalacji wodno-kanalizacyjnych w nowych budynkach.",
  },
  {
    icon: Settings,
    title: "Przeglądy i konserwacja",
    description: "Regularne przeglądy techniczne zapobiegające kosztownym awariom.",
  },
];

const Services = () => {
  return (
    <section id="uslugi" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 font-heading">Nasze usługi</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
            Kompleksowe usługi hydrauliczne
          </h2>
          <p className="text-muted-foreground text-lg">
            Od drobnych napraw po duże instalacje — zajmiemy się wszystkim.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3 font-heading">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
