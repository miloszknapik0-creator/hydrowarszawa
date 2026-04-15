import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anna Kowalska",
    location: "Mokotów",
    text: "Fantastyczna obsługa! Hydraulik przyjechał w 20 minut i naprawił wyciek w łazience. Profesjonalizm na najwyższym poziomie.",
    rating: 5,
  },
  {
    name: "Marek Wiśniewski",
    location: "Wola",
    text: "Korzystam z ich usług od 3 lat. Zawsze punktualnie, czysto po sobie zostawiają i ceny uczciwe. Polecam każdemu!",
    rating: 5,
  },
  {
    name: "Katarzyna Nowak",
    location: "Ursynów",
    text: "Montaż całej łazienki przebiegł sprawnie i bez niespodzianek. Efekt końcowy przeszedł moje oczekiwania. Dziękuję!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 font-heading">Opinie klientów</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
            Zaufali nam mieszkańcy Warszawy
          </h2>
          <p className="text-muted-foreground text-lg">
            Ponad 2000 zadowolonych klientów — sprawdź, co o nas mówią.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground font-heading">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}, Warszawa</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
