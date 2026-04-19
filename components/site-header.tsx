"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, XIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const menuItem = [
  { id: 1, label: "Students", href: "#students" },
  { id: 2, label: "Partners", href: "#partnerships" },
  { id: 3, label: "Testimonials", href: "#testimonials" },
  { id: 4, label: "Pricing", href: "#pricing" },
  { id: 5, label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const mobilenavbarVariant = {
    initial: { opacity: 0, scale: 1 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.2, delay: 0.2, ease: "easeOut" } },
  };

  const mobileLinkVar = {
    initial: { y: "-20px", opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const containerVariants = {
    open: { transition: { staggerChildren: 0.06 } },
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const close = () => setHamburgerMenuIsOpen(false);
    window.addEventListener("orientationchange", close);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("orientationchange", close);
      window.removeEventListener("resize", close);
    };
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header
        className={cn(
          "fixed left-0 top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-transparent"
        )}
      >
        <div className="container flex h-[3.5rem] items-center justify-between max-w-7xl mx-auto px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/tapayicon.png"
              alt="Tapay Logo"
              width={32}
              height={32}
              className="h-8 w-8 transition-transform duration-200 group-hover:scale-110"
            />
            <span className="font-bold text-lg tracking-tight dark:text-white">Tapay</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItem.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAYFIAnRUOTBJSkdIUzA3UkEyNFhCN0RHRUVVRlpLRS4u"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-all duration-200"
            >
              Join the Journey â
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="ml-auto md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setHamburgerMenuIsOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            {hamburgerMenuIsOpen ? <XIcon className="h-5 w-5" /> : <AlignJustify className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {hamburgerMenuIsOpen && (
          <motion.nav
            initial="initial"
            animate="animate"
            exit="exit"
            variants={mobilenavbarVariant}
            className="fixed left-0 top-0 z-40 h-screen w-full bg-background/95 backdrop-blur-xl pt-[3.5rem]"
          >
            <div className="container px-6 py-8">
              <motion.ul
                className="flex flex-col gap-4"
                variants={containerVariants}
                initial="initial"
                animate="open"
              >
                {menuItem.map((item) => (
                  <motion.li variants={mobileLinkVar} key={item.id}>
                    <Link
                      href={item.href}
                      onClick={() => setHamburgerMenuIsOpen(false)}
                      className="flex items-center text-2xl font-semibold py-2 border-b border-white/10 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li variants={mobileLinkVar} className="pt-4">
                  <Link
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAYFIAnRUOTBJSkdIUzA3UkEyNFhCN0RHRUVVRlpLRS4u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-6 bg-foreground text-background rounded-xl font-semibold"
                  >
                    Join the Journey
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
