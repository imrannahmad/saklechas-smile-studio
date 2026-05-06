import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCTA } from "@/components/site/MobileCTA";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Saklecha's Dental & Implant Centre — Best Dentist in Indore" },
      { name: "description", content: "Top-rated dental, braces & implant clinic in Indore. Painless treatment, modern equipment, 4.9★ Google rating. Book your appointment today." },
      { property: "og:title", content: "Saklecha's Dental & Implant Centre — Best Dentist in Indore" },
      { property: "og:description", content: "Top-rated dental, braces & implant clinic in Indore. Painless treatment, modern equipment, 4.9★ Google rating. Book your appointment today." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Saklecha's Dental & Implant Centre — Best Dentist in Indore" },
      { name: "twitter:description", content: "Top-rated dental, braces & implant clinic in Indore. Painless treatment, modern equipment, 4.9★ Google rating. Book your appointment today." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8dd5e10d-542d-4dfc-bb77-866b47c4c992/id-preview-46f88438--bd7d19f1-7b2a-4134-8271-f37f4ca94f72.lovable.app-1777957686099.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8dd5e10d-542d-4dfc-bb77-866b47c4c992/id-preview-46f88438--bd7d19f1-7b2a-4134-8271-f37f4ca94f72.lovable.app-1777957686099.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
