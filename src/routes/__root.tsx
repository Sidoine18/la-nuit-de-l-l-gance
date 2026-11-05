import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/lux/Header";
import { Footer } from "@/components/lux/Footer";
import { WhatsAppFloat } from "@/components/lux/WhatsAppFloat";
import { luxButton } from "@/components/lux/primitives";
import { site } from "@/config/site";

function NotFoundComponent() {
  return (
    <main id="contenu" className="grain flex min-h-[80vh] items-center justify-center px-4 pt-20">
      <div className="max-w-md text-center">
        <p className="font-numeral text-8xl text-gold">404</p>
        <h1 className="mt-4 text-4xl text-ivory">Cette page n'existe pas</h1>
        <p className="mt-3 text-sm text-muted-foreground">La page demandée a peut-être été déplacée ou n'est plus disponible.</p>
        <Link to="/" className={luxButton({ variant: "gold" }) + " mt-8"}>Retour à l'accueil</Link>
      </div>
    </main>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl text-ivory">Cette page n'a pas pu s'afficher</h1>
        <p className="mt-2 text-sm text-muted-foreground">Une erreur est survenue. Vous pouvez réessayer ou revenir à l'accueil.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className={luxButton({ variant: "gold" })}>Réessayer</button>
          <a href="/" className={luxButton({ variant: "outline" })}>Accueil</a>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: site.name },
      { name: "description", content: site.description },
      { name: "author", content: "KONFORTECH BÉNIN" },
      { name: "theme-color", content: "#0b0a09" },
      { property: "og:site_name", content: site.name },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@300;400;500;600&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: site.organizer, description: "Agence événementielle organisatrice de La Nuit de l'Élégance", areaServed: "Bénin" }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}
