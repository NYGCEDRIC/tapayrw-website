export default function ClientSection() {
  return (
    <section
      id="clients"
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="py-20">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-base uppercase tracking-wider font-bold text-primary-600">
            Be Part of Our Journey
          </h2>
          <p className="mt-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Join Our Growing Community
          </p>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re building something special and looking for visionary partners to join us. 
            Be among the first to shape the future of digital payments in Rwanda.
          </p>
          <div className="mt-10">
            <a
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAYFIAnRUMTAwNlY1SU1DMUFFWjRDSkVDNVRQWUZDRi4u"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md transition duration-150 ease-in-out"
            >
              Apply to Partner With Us &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}