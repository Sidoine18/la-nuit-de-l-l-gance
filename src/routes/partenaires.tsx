import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Pending, Reveal, luxButton } from "@/components/lux/primitives";
import { partners, partnerCategories } from "@/content/partners";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/partenaires")({
  head: () => seo({ title: "Partenaires", description: "Les partenaires et sponsors qui accompagnent La Nuit de l'Élégance, gala de prestige organisé par mcEvents au Bénin.", path: "/partenaires" }),
  component: Partenaires,
});

function Partenaires() {
  const groups = (Object.keys(partnerCategories) as (keyof typeof partnerCategories)[])
    .map((k) => ({ k, label: partnerCategories[k], list: partners.filter((p) => p.category === k) }))
    .filter((g) => g.list.length);
  return (
    <main id="contenu">
      <PageHeader eyebrow="Partenaires" title={<>Ils font <span className="italic text-gold">rayonner</span> la soirée</>} intro="Marques, institutions et médias qui accompagnent La Nuit de l'Élégance." />
      <section className="container-lux space-y-16 py-20">
        {groups.length === 0 && <Pending label="Bientôt annoncés">Les partenaires de la 6ème édition seront présentés ici.</Pending>}
        {groups.map((g) => (
          <div key={g.k}>
            <p className="eyebrow mb-6">{g.label}</p>
            <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-4">
              {g.list.map((p) => {
                const inner = p.logo ? <img src={p.logo} alt={p.name} loading="lazy" className="max-h-16 w-auto object-contain" /> : <span className="font-display text-xl text-ivory">{p.name}</span>;
                return (
                  <Reveal key={p.id} className="grid h-36 place-items-center bg-background p-6">
                    {p.url ? <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={p.name}>{inner}</a> : inner}
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
        <div className="border border-gold/30 p-10 text-center">
          <p className="font-display text-3xl text-ivory">Associez votre image au prestige</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/devenir-partenaire" className={luxButton({ variant: "gold" })}>Devenir partenaire</Link>
            <Link to="/sponsoring" className={luxButton({ variant: "outline" })}>Le sponsoring</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
