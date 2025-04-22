// components/ContactCTA.tsx
'use client';

export default function ContactCTA() {
  return (
    <section className="bg-[#1a365d] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Bereit für den nächsten Schritt?</h2>
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
          Lassen Sie uns gemeinsam Ihr Autohaus mit professioneller Fotografie und digitalen Lösungen voranbringen.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#b8860b] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#a67808] transition-colors duration-200"
        >
          Kontaktieren Sie uns jetzt
        </button>
      </div>
    </section>
  );
}