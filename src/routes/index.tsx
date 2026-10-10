import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  HeartPulse,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";
import { useState } from "react";
import consultationImage from "@/assets/clinic-consultation.jpg";
import { Button } from "@/components/ui/button";
import {
  appointmentUrl,
  clinicConfig,
  isPlaceholder,
} from "@/lib/clinic-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "[CLINIC NAME] | Care and appointments" },
      {
        name: "description",
        content:
          "Find clinic information, care services, opening hours, and appointment requests for [CLINIC NAME].",
      },
      { property: "og:title", content: "[CLINIC NAME] | Care and appointments" },
      {
        property: "og:description",
        content:
          "Clinic information, services, opening hours, and appointment requests.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClinicHome,
});

function AppointmentButton({ label = "Book appointment" }: { label?: string }) {
  return (
    <Button asChild size="lg" className="h-12 gap-2 px-5 text-sm font-semibold">
      <a href={appointmentUrl()} target="_blank" rel="noreferrer">
        {label}
        <ArrowUpRight aria-hidden="true" />
      </a>
    </Button>
  );
}

const navigation = [
  { label: "Our clinic", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Opening hours", href: "#hours" },
  { label: "Find us", href: "#contact" },
];

function ClinicHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const phoneIsConfigured = !isPlaceholder(clinicConfig.phone);
  const mapIsConfigured = !isPlaceholder(clinicConfig.mapUrl);

  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <header className="sticky top-0 z-30 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="mx-auto grid min-h-[76px] w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 sm:flex sm:justify-between sm:px-8 lg:px-12">
          <a
            href="#home"
            className="flex min-w-0 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`${clinicConfig.name} home`}
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
              <span className="relative grid size-[18px] place-items-center" aria-hidden="true">
                <span className="absolute h-[18px] w-[5px] rounded-sm bg-current" />
                <span className="absolute h-[5px] w-[18px] rounded-sm bg-current" />
              </span>
            </span>
            <span className="min-w-0 truncate font-display text-base font-semibold text-foreground sm:text-lg">
              {clinicConfig.name}
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden sm:block">
              <AppointmentButton />
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-border bg-background px-5 py-4 sm:px-8 lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-sm py-3 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 sm:hidden">
                <AppointmentButton />
              </div>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section
          id="home"
          className="relative mx-auto grid min-h-[650px] max-w-7xl content-center items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:min-h-[700px] lg:grid-cols-[minmax(0,0.94fr)_minmax(420px,1.06fr)] lg:gap-14 lg:px-12 lg:py-20"
        >
          <div className="animate-rise relative z-10 max-w-xl">
            <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">
              <span className="grid size-7 place-items-center rounded-full bg-clinic-sage text-primary">
                <Sparkles aria-hidden="true" className="size-3.5" />
              </span>
              Your local clinic
            </p>
            <h1 className="max-w-[13ch] font-display text-5xl font-semibold leading-[1.06] text-foreground sm:text-6xl lg:text-[4.25rem]">
              Care that starts with a conversation.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Explore {clinicConfig.name}, learn about {clinicConfig.specialization}, and find the
              details you need before your visit.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <AppointmentButton />
              <a
                href="#about"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                Get to know us
                <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            </div>
            <div className="mt-7 flex max-w-lg items-start gap-2.5 border-l-2 border-clinic-sage pl-3 text-xs leading-5 text-muted-foreground">
              <ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
              <p>
                An appointment request is not a confirmed booking. Clinic staff will check
                availability and confirm with you.
              </p>
            </div>
            <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-5 text-sm text-muted-foreground">
              <span className="flex min-w-0 items-center gap-2">
                <MapPin aria-hidden="true" className="size-4 shrink-0 text-primary" />
                <span className="truncate">{clinicConfig.address}</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock3 aria-hidden="true" className="size-4 shrink-0 text-primary" />
                <span>{clinicConfig.hours}</span>
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:ml-auto lg:max-w-none">
            <div className="absolute -left-4 -top-4 size-28 rounded-full bg-clinic-sage sm:-left-6 sm:-top-6 sm:size-36" />
            <div className="absolute -bottom-5 -right-3 h-28 w-32 rounded-tl-[5rem] bg-clinic-warm sm:-bottom-7 sm:-right-5 sm:h-36 sm:w-40" />
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={consultationImage}
                alt="A doctor speaking with a patient in a bright consultation room"
                width={1536}
                height={1024}
                fetchPriority="high"
                className="aspect-[1.28/1] w-full object-cover sm:aspect-[1.42/1] lg:aspect-[1.12/1]"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-background/95 p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[280px] sm:p-5">
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-clinic-sage text-primary">
                  <HeartPulse aria-hidden="true" className="size-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">Here for your next step</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Information, at your pace</p>
                </div>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute -right-3 top-10 grid size-9 place-items-center rounded-full bg-background text-primary shadow-sm sm:-right-5 sm:top-14 sm:size-11"
            >
              <span className="relative grid size-4 place-items-center">
                <span className="absolute h-4 w-1 rounded-sm bg-current" />
                <span className="absolute h-1 w-4 rounded-sm bg-current" />
              </span>
            </span>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-y border-border bg-clinic-pale">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12 lg:py-24">
            <div>
              <p className="section-kicker">A little about us</p>
              <h2 className="section-heading mt-4 max-w-md">Care, with a human connection.</h2>
            </div>
            <div className="grid gap-8">
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Welcome to {clinicConfig.name}. Find clinic information, learn about the doctor,
                and review the services and practical details for your visit.
              </p>
              <div className="flex items-start gap-5 border-t border-border pt-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-background text-primary">
                  <Stethoscope aria-hidden="true" className="size-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {clinicConfig.doctorName}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {clinicConfig.qualifications}
                  </p>
                  <p className="mt-2 text-sm font-medium text-primary">
                    {clinicConfig.specialization}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div className="min-w-0">
                <p className="section-kicker">Care and services</p>
                <h2 className="section-heading mt-4 max-w-xl">How we can help.</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-right">
                Service information is provided by the clinic. Contact the clinic if you have a
                question about a service.
              </p>
            </div>
            <div className="mt-10 grid border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-border">
              {clinicConfig.services.map((service, index) => (
                <article
                  key={service.name}
                  className="group border-b border-border py-7 last:border-b-0 sm:border-b-0 sm:px-6 sm:py-8 sm:first:pl-0 sm:last:pr-0"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-clinic-sage text-primary transition-transform duration-300 group-hover:scale-105">
                    {index === 0 ? (
                      <HeartPulse aria-hidden="true" className="size-5" />
                    ) : index === 1 ? (
                      <Stethoscope aria-hidden="true" className="size-5" />
                    ) : (
                      <ShieldCheck aria-hidden="true" className="size-5" />
                    )}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{service.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>
                  <a
                    href="#appointment"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Request a visit
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="hours" className="scroll-mt-24 bg-clinic-pale">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-12 lg:py-24">
            <div>
              <p className="section-kicker">Plan your visit</p>
              <h2 className="section-heading mt-4 max-w-sm">A little planning goes a long way.</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
                Check the opening hours and clinic address before you make your appointment request.
              </p>
            </div>
            <div className="grid gap-0 border-y border-border sm:grid-cols-2 sm:divide-x sm:divide-border">
              <div className="flex items-start gap-4 border-b border-border py-6 sm:border-b-0 sm:py-8 sm:pr-7">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-background text-primary">
                  <Clock3 aria-hidden="true" className="size-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">Opening hours</h3>
                  <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">
                    {clinicConfig.hours}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-6 sm:py-8 sm:pl-7">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-background text-primary">
                  <MapPin aria-hidden="true" className="size-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">Clinic address</h3>
                  <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">
                    {clinicConfig.address}
                  </p>
                  <a
                    href={mapIsConfigured ? clinicConfig.mapUrl : "https://maps.google.com/"}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Open map
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                  {!mapIsConfigured && (
                    <p className="mt-1 text-xs text-muted-foreground">Map link placeholder</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="appointment" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="relative overflow-hidden bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <div className="absolute -right-12 -top-16 size-48 rounded-full border border-primary-foreground/15 sm:-right-6 sm:-top-24 sm:size-64" />
              <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-14">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground/75">
                    Take the next step
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                    Request an appointment.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-primary-foreground/85 sm:text-base sm:leading-7">
                    Use the clinic appointment request form to share your preferred date and time.
                    Time slots are preferences, not guaranteed availability.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4 lg:items-end">
                  <div className="[&>a]:bg-background [&>a]:text-primary [&>a]:hover:bg-background/90">
                    <AppointmentButton label="Book appointment" />
                  </div>
                  <p className="max-w-[260px] text-xs leading-5 text-primary-foreground/80 lg:text-right">
                    Submitting the form does not confirm an appointment. Clinic staff will check
                    availability and confirm your booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-border bg-clinic-pale">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-24">
            <div>
              <p className="section-kicker">Get in touch</p>
              <h2 className="section-heading mt-4 max-w-sm">We’re here to help you find us.</h2>
            </div>
            <div className="grid content-start gap-0 divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="flex gap-4 py-5 sm:pr-6 sm:py-7">
                <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">Visit</h3>
                  <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">
                    {clinicConfig.address}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 py-5 sm:pl-6 sm:py-7">
                <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">Call the clinic</h3>
                  {phoneIsConfigured ? (
                    <a
                      href={`tel:${clinicConfig.phone.replace(/[^+\d]/g, "")}`}
                      className="mt-2 inline-block break-words text-sm leading-6 text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {clinicConfig.phone}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {clinicConfig.phone}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-4 py-5 sm:col-span-2 sm:border-t sm:border-border sm:py-7">
                <Clock3 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">Opening hours</h3>
                  <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">
                    {clinicConfig.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:px-8 lg:px-12">
          <div>
            <a
              href="#home"
              className="inline-flex max-w-full items-center gap-3 font-display text-base font-semibold"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-background/10">
                <span aria-hidden="true" className="relative grid size-3.5 place-items-center">
                  <span className="absolute h-3.5 w-1 rounded-sm bg-current" />
                  <span className="absolute h-1 w-3.5 rounded-sm bg-current" />
                </span>
              </span>
              <span className="truncate">{clinicConfig.name}</span>
            </a>
            <p className="mt-3 max-w-2xl text-xs leading-5 text-background/70">
              Privacy: only submit information requested by the appointment form. The clinic should
              limit access to authorized staff and handle personal information according to its
              privacy practices and applicable requirements.
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-1 text-xs text-background/70 sm:items-end sm:text-right">
            <span>{clinicConfig.address}</span>
            <span>{clinicConfig.phone}</span>
            <span className="mt-2">© {new Date().getFullYear()} {clinicConfig.name}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}