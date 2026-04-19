import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "NFC Payments", href: "#features" },
    { label: "Analytics", href: "#features" },
  ],
  Company: [
    { label: "About Us", href: "mailto:hello@tapayrw.io" },
    { label: "Partner With Us", href: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAYFIAnRUMTAwNlY1SU1DMUFFWjRDSkVDNVRQWUZDRi4u" },
    { label: "Contact", href: "mailto:hello@tapayrw.io" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "mailto:hello@tapayrw.io" },
    { label: "Terms of Service", href: "mailto:hello@tapayrw.io" },
  ],
};

const footerSocials = [
  {
    href: "https://www.instagram.com/tapayrw/",
    name: "Instagram",
    icon: <InstagramLogoIcon className="h-5 w-5" />,
  },
  {
    href: "https://www.linkedin.com/company/tapayrw/",
    name: "LinkedIn",
    icon: <LinkedInLogoIcon className="h-5 w-5" />,
  },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 w-fit group">
              <Image
                src="/tapayicon.png"
                alt="Tapay Logo"
                width={36}
                height={36}
                className="h-9 w-9 transition-transform duration-200 group-hover:scale-110"
              />
              <span className="text-xl font-bold dark:text-white">Tapay</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Rwanda&apos;s leading NFC payment platform — enabling seamless, secure, and smart payments for schools, canteens, and businesses.
            </p>
            <div className="flex items-center gap-3">
              {footerSocials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-muted-foreground hover:text-foreground"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold dark:text-white text-black">{category}</h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tapay Ltd. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with <span className="animate-pulse inline-block">❤️</span> in Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
}
