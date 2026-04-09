export default function NotFound() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-gray-900">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Seite nicht gefunden
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
        >
          Zur Startseite
        </a>
      </div>
    </main>
  );
}
