import Link from "next/link";

export function SiteBanner() {
  return (
    <div className="relative top-0 bg-gradient-to-r from-[var(--color-three)] via-[var(--color-two)] to-[var(--color-one)] text-white py-3 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAYFIAnRUMTAwNlY1SU1DMUFFWjRDSkVDNVRQWUZDRi4u"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm font-medium leading-loose text-white hover:text-white/90 transition-colors"
        >
          ✨{" "}
          <span className="font-bold">Now accepting partners in Rwanda —</span>{" "}
          Apply to join Tapay&apos;s early partner program ✨
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-white/20" />
    </div>
  );
}
