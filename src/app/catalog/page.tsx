import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';

export default function CatalogPage() {
  return (
    <div className="bg-background font-body text-on-surface">
      <SiteNav />

      <main className="pt-20">
        {/* Hero Section */}
        <header className="relative h-[614px] flex items-center overflow-hidden bg-primary">
          <div className="absolute inset-0 opacity-40">
            <img
              className="w-full h-full object-cover"
              alt="aerial perspective of high-tech grain silos and industrial shipping containers at a modern agricultural export port"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAryvqaDBU9VPxg-YoaLNYaUc3fC3S83Y0dBzh8imYkUJrCsH6_y5DgF--laulg1sc3FC4h6uxrFMRJ9l41xpstjIXMlRuUza5HdsqQWVL2kygGD2dHxUfAJqkWd8yHyXgR6cjHfRnAYBqRp9yiW1C1OMzk7yxoXp3Oaxhiyzoo6gEPRZtsBRAQPBkQQlhauwagCuSo7MAl1ZbnrWkC3ZKqM7Piz5B5EVJGC0DyxUCGry0yaOTqmCrDnZ20MUVRUyJZdkmnHUW7R4rF"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
            <div className="max-w-3xl">
              <span className="text-secondary-fixed text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
                Institutional Grade Portfolio
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-on-primary tracking-tighter leading-none mb-6">
                PRODUCE <br />
                <span className="text-secondary-fixed">CATALOG</span>
              </h1>
              <p className="text-on-primary-container text-lg max-w-xl leading-relaxed font-light">
                Premium agro-commodities sourced through direct-origin partnerships. Engineered for high-volume international trade with rigorous grading standards and end-to-end logistics.
              </p>
            </div>
          </div>
        </header>

        {/* Catalog Grid */}
        <section className="py-24 px-8 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-primary tracking-tight mb-4">
                Export Standards Specification
              </h2>
              <div className="h-1 w-24 bg-secondary-container"></div>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-surface-container-high text-primary font-bold text-xs uppercase tracking-widest border-b-2 border-secondary">
                All Commodities
              </button>
              <button className="px-6 py-2 text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors">
                Oilseeds
              </button>
              <button className="px-6 py-2 text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors">
                Spices
              </button>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Soybean - Large Featured */}
            <div className="md:col-span-8 bg-surface-container-low group overflow-hidden flex flex-col md:flex-row min-h-[500px]">
              <div className="w-full md:w-1/2 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="extreme close-up of high-quality organic soybeans showcasing smooth texture and uniform golden color in natural light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_3N3m9IztdtAsNPqkwkdQ0z0XwNMdB-XCkkQ_r7iJm3vZvAHSnQ75Xfi7kjKCayz5a1vymvdlwd8IeBrRyGIwzBwBSZAYqPAXzb4zhdMEicQzLeANPtiY2s8vUp91NeEDnFxgnkBkGH5dlBYXoPVb-xJXkTp3ESovtt9uHalfjCpbdCQVce12j9tIhW_5IqahkLSa7qHfy39cRDr-6zXyv_olBX_LitLy4m2B6U0NCtVfTjYMAElKQ2XFCMhk_Iu5SGnsRjnRzXh_"
                />
                <div className="absolute top-6 left-6 bg-primary text-on-primary px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                  Grade A1 Certified
                </div>
              </div>
              <div className="w-full md:w-1/2 p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl font-black text-primary mb-2 uppercase tracking-tighter">Soybean</h3>
                  <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                    High-protein non-GMO variety selected for premium oil extraction and soy-milk production chains.
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-outline">Moisture</span>
                      <span className="text-sm font-bold text-primary">Max 13.5%</span>
                    </div>
                    <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-outline">Purity</span>
                      <span className="text-sm font-bold text-primary">Min 99.0%</span>
                    </div>
                    <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-outline">Origin</span>
                      <span className="text-sm font-bold text-primary">Brazil / West Africa</span>
                    </div>
                    <div className="flex justify-between border-b border-outline-variant/30 pb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-outline">Volume</span>
                      <span className="text-sm font-bold text-primary">5,000 MT+ / Month</span>
                    </div>
                  </div>
                </div>
                <button className="mt-8 flex items-center justify-between group/btn text-primary font-black text-xs uppercase tracking-widest">
                  <span>Inquire for Bulk Trade</span>
                  <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Cocoa - Tall Sidebar */}
            <div className="md:col-span-4 bg-primary text-on-primary p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 -mr-16 -mt-16 rounded-full blur-3xl"></div>
              <div>
                <span className="text-secondary-fixed text-[10px] font-black tracking-widest uppercase mb-4 block">
                  Premium Confectionery
                </span>
                <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">Cocoa</h3>
                <p className="text-on-primary-container text-sm font-light mb-10">
                  Superior fermented beans with high fat content for global chocolatiers.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="block text-[10px] text-on-primary-container/60 uppercase mb-1">Fat Content</span>
                    <span className="text-xl font-bold">52% - 54%</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-on-primary-container/60 uppercase mb-1">Mold</span>
                    <span className="text-xl font-bold">Max 3%</span>
                  </div>
                </div>
              </div>
              <img
                className="w-full aspect-square object-cover mt-12 grayscale brightness-75 contrast-125"
                alt="dark raw fermented cocoa beans pile with intense detail on the shell texture and rich brown tones"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-kVitSQmj3-jH3wwVTDpl4rAidAZIo2qujgcWn-QSs1GrbLHJE6sZ2JKwllMA2oZlIg3HMq4zj81ILUB8JVaFAHtE-25mG2UKFmtcvXFjukpQB-Sre34g3Z8oWpqec5bmC1odixCcR7eYpjPbwSLXxdw6KWALo89Soy4_xEehSFdX4VyQLRZukFj-dB164PjBp3HnRpa3EnymtU4CM16O2wNS5s2i7YxIU7QLUWioL_X9-VkzEyDe7jx2s4nwEYnIE1vRs8fOOokU"
              />
            </div>

            {/* Cashew - Square */}
            <div className="md:col-span-4 bg-surface-container-highest p-8 flex flex-col group">
              <div className="h-48 mb-6 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="raw cashew nuts in their shells being sorted at an industrial facility with warm directional lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcF-uLrJWmaquDR9KpzmtIHhbkO6wZuq1Xs_5qdzdkAU-LMzpZrxydK-O5dKB7lJZi-l2-XzwgLVdz0CJT7IU5PVNReGXP61OJr4e0dBiOTGZTp7hsmRzGKCN9rMVGXv7diKOnvsJl6xdusQ9h0S2xXhT5S66xEYXifeAdCBPHqRvb_zlUoKMxVf2eUMa_hmHftNLckMWhp9iUJBzZxME5Izgad_ab8q1XmMQ705G5iEVQMFv2dl0J1j9cFYv-RkOgol44Vr_qrEW1"
                />
              </div>
              <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tighter">Cashew</h3>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between">
                  <span className="text-[10px] text-outline uppercase font-bold">Nut Count</span>
                  <span className="text-xs font-bold">180 - 200/kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] text-outline uppercase font-bold">Outturn</span>
                  <span className="text-xs font-bold">48 - 52 lbs</span>
                </div>
              </div>
              <button className="bg-primary text-on-primary w-full py-3 text-[10px] font-bold uppercase tracking-widest">
                Inquire
              </button>
            </div>

            {/* Ginger */}
            <div className="md:col-span-4 bg-surface-container-low p-8 flex flex-col group">
              <div className="h-48 mb-6 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="heaps of fresh split ginger roots drying in a clean modern agricultural warehouse facility"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpl_6FIUaI2SRj1pdsHiTU4mlXSjsXlMoyuRcLCkfQQnTCXZLRLXQicxHQ0-iz8o12i0gs1gys4S0uLeFtn4B4GGPcrL_REukY89skuzVSTIzfoiBk6iX2R9tQxEhtriVq0qAjLVb0u6I0BSJwZATd9hL4CWUryEhgck3yx1u61xF1u8nkmLJCL-ib7l_zB1bODVnGV7i2cunpS0pGqkeABQJC7OB1ClMoGtuQe6It8gqBjQi6SZJZUSSvbpq8gOhwdGdivYka1e4F"
                />
              </div>
              <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tighter">Ginger</h3>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between">
                  <span className="text-[10px] text-outline uppercase font-bold">Format</span>
                  <span className="text-xs font-bold">Dried / Split</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] text-outline uppercase font-bold">Curcumin</span>
                  <span className="text-xs font-bold">High Potency</span>
                </div>
              </div>
              <button className="bg-surface-container-highest text-primary border border-primary/10 w-full py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors">
                Inquire
              </button>
            </div>

            {/* Sesame */}
            <div className="md:col-span-4 bg-surface-container-highest p-8 flex flex-col group">
              <div className="h-48 mb-6 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="macro photograph of white sesame seeds with uniform size and pearl-like sheen under studio lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyaW-eoIQqsNlg4fRQY1QTxmL6l7zVJpzDpb6ykMhZWVrUWTFXgKaayIRj0CGjZkJofsKY1O_fJcJ6J4Hxidv6ZDhnAsU26t65wmbM4lPDiEw_R6kDgm_tCBoInlbU1xM7zEUgXkt1uA0t8o9TAHPjtwwygHJL9mVz4xc5VkfvGH3alqLexn8ZurHOJaucb9D8QhZwqSXteC4r3xE-jvJlchK11NLi_94OfXVOJ8JguuUbyS8lH2327ur1pyj-2PVSOQK_WFN0j-ob"
                />
              </div>
              <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tighter">Sesame</h3>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between">
                  <span className="text-[10px] text-outline uppercase font-bold">Oil Content</span>
                  <span className="text-xs font-bold">Min 50%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] text-outline uppercase font-bold">Admixture</span>
                  <span className="text-xs font-bold">Max 2%</span>
                </div>
              </div>
              <button className="bg-primary text-on-primary w-full py-3 text-[10px] font-bold uppercase tracking-widest">
                Inquire
              </button>
            </div>

            {/* Soycake - Full Width */}
            <div className="md:col-span-12 bg-white flex flex-col md:flex-row shadow-sm border border-outline-variant/20">
              <div className="md:w-1/3 p-12 bg-surface-container-low">
                <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tighter">Soycake</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                  Essential high-protein livestock feed component, processed under strict temperature controls to maintain nutritional integrity.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                    <span className="text-xs font-bold uppercase tracking-widest">Protein: 48% Min</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                    <span className="text-xs font-bold uppercase tracking-widest">Fiber: 3.5% Max</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                    <span className="text-xs font-bold uppercase tracking-widest">Urease: 0.05 - 0.20</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-2/3 relative h-64 md:h-auto">
                <img
                  className="w-full h-full object-cover"
                  alt="industrial feed production line with high quality soy cake pellets being processed for international export"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNv-PMwX6lwoQkkHHDzIK1aRNNxi2zf-AOdf_ukoJAz6giqDwEV6dag71X3jA6heRYldeaty1wW36nINrWsdNkITj42eC0F_joXUCBh1iKayDinaFhYiMxgZW2hLu5W7FYYOgl34QgazP8qPpsrhuE_YzfticcUfmM4G0K0pS6IN1o5Hn62ugBOxGqPsgm5X-dhsefbzG1IaLcEHm2_LqGVunGOvtzH2xcPn_1F9Lbn-p-TlLfuIjW0y2dQ-ducnOxLs0KOmzy_pLZ"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <button className="bg-white text-primary px-10 py-4 font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:scale-105 transition-transform">
                    Inquire for Bulk Trade
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Technical Excellence Section */}
        <section className="bg-surface-container-low py-32 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-8 editorial-grid gap-12">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-5xl font-black text-primary leading-tight uppercase tracking-tighter mb-8">
                Rigorous <br />
                <span className="text-secondary">Validation</span> Systems
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-10 text-lg font-light">
                Every ton of produce we handle undergoes a 3-tier verification process—at source, at collection, and prior to vessel loading—to ensure compliance with International Grains Council (IGC) and FOSFA standards.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-4xl text-secondary">verified</span>
                  <div>
                    <h4 className="font-bold text-primary uppercase tracking-widest text-sm mb-2">
                      Independent Inspection
                    </h4>
                    <p className="text-xs text-on-surface-variant">
                      SGS / Bureau Veritas certification provided for all bulk shipments to verify quantity and quality parameters.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-4xl text-secondary">analytics</span>
                  <div>
                    <h4 className="font-bold text-primary uppercase tracking-widest text-sm mb-2">
                      Moisture Control
                    </h4>
                    <p className="text-xs text-on-surface-variant">
                      Precision monitoring using digital hydrometers to prevent degradation during long-haul maritime transport.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-white p-8 border-l-4 border-secondary shadow-sm">
                <h5 className="font-black text-primary text-4xl mb-2">99.8%</h5>
                <p className="text-[10px] text-outline font-bold uppercase tracking-[0.2em]">Historical Purity Avg.</p>
              </div>
              <div className="flex-1 bg-white p-8 border-l-4 border-secondary shadow-sm">
                <h5 className="font-black text-primary text-4xl mb-2">1.2M</h5>
                <p className="text-[10px] text-outline font-bold uppercase tracking-[0.2em]">MT Annual Capacity</p>
              </div>
              <div className="flex-1 bg-white p-8 border-l-4 border-secondary shadow-sm">
                <h5 className="font-black text-primary text-4xl mb-2">45+</h5>
                <p className="text-[10px] text-outline font-bold uppercase tracking-[0.2em]">Global Trade Ports</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              className="w-full h-full object-cover"
              alt="monochrome silhouette of a large container cargo ship at sea at dawn with calm waters"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQbQG8hY5hpTSqqrjvsChr_VU7OF4aCcRZuZyChE-lmYiUVbBLglXOjAGfcMUEk2HJKjB4zurPp4LVqR2mLO5YuO0GXYouoHVhb_efv6KfCNIcR7pCkcaXby_4YfIv1ArLmkceXotXefqm6kK7I3oxV-sudEi8WvOkHQl1ZXj6zZn8Y6DWxrEtXTEIQmohcNZ9KYMTerznhVCPVDjXjkISr8mF0gCq4V-9RevXfpo04u-8Y5jgM27wieKlMcIwvKXedkm_rsP8nV_p"
            />
          </div>
          <div className="relative z-10 max-w-screen-xl mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-on-primary uppercase tracking-tighter mb-8">
              Ready for Institutional Trade?
            </h2>
            <p className="text-on-primary-container max-w-2xl mx-auto mb-12 text-lg font-light">
              Our trade desk operates 24/7 to facilitate high-volume inquiries, Letter of Credit arrangements, and logistical deployments across five continents.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-secondary text-primary px-12 py-4 font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform">
                Inquire for Bulk Trade
              </button>
              <button className="border border-on-primary text-on-primary px-12 py-4 font-black uppercase text-sm tracking-widest hover:bg-on-primary hover:text-primary transition-all">
                Download Specs PDF
              </button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
