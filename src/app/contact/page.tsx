import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact | Global Steward Agro-Commodities",
};

export default function ContactPage() {
  return (
    <div className="bg-background font-body text-on-surface selection:bg-secondary-container">

      <SiteNav />

      <main className="pt-20">

        {/* Hero Section */}
        <section className="relative h-[409px] min-h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover grayscale brightness-50"
              alt="expansive cargo port at dusk with deep green and blue tones representing global logistics"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPtEtxeK0CEhA7KSQ4ROZE0TgiWPD0KZMT6dXyXN4MzheUUk49OOY5CCnyrx1JOff9M-7Rw4O61BQLa3tS60sDAhlnO9WRWupxdw8w72_ekw_GRKLIqUDvH2dJq11tDaV6ivAKhmSAXTfrfZtqZ53DC7lMg69R7fdvhkkBR4ADco5LiDsoSP5ZbkwjgXe2_JRQytq_TCVLIhob7iUQV1fYfwgEsiC5eFTaN_Xgh6uDPUUkicB-wuIdVx7YfgUW47JRYEdGsT1utsXg"
            />
          </div>
          <div className="relative z-10 px-8 md:px-12 w-full max-w-screen-2xl mx-auto">
            <div className="max-w-2xl">
              <span className="text-secondary-fixed-dim font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                Institutional Inquiries
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 leading-none">
                Global Trade Gateway.
              </h1>
              <p className="text-emerald-50/80 text-lg md:text-xl font-light leading-relaxed">
                Secure, certified, and efficient agro-commodity pipelines for sovereign and private enterprises.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="px-8 md:px-12 py-24 w-full max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left: Trade Inquiry Form */}
            <div className="lg:col-span-7 bg-surface-container-low p-10 md:p-14 border-l-4 border-secondary">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary tracking-tight mb-2">
                  Trade Specification
                </h2>
                <p className="text-on-surface-variant font-medium">
                  Please provide detailed requirements for institutional vetting.
                </p>
              </div>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block">
                      Full Name / Representative
                    </label>
                    <input
                      className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-secondary focus:outline-none transition-colors px-0 py-3 text-on-surface placeholder:text-outline"
                      placeholder="Enter full name"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block">
                      Institutional Email
                    </label>
                    <input
                      className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-secondary focus:outline-none transition-colors px-0 py-3 text-on-surface placeholder:text-outline"
                      placeholder="email@company.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block">
                      Commodity Type
                    </label>
                    <select className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-secondary focus:outline-none transition-colors px-0 py-3 text-on-surface">
                      <option>Select Commodity</option>
                      <option>Cashew Nuts (Raw/Processed)</option>
                      <option>Cocoa Beans</option>
                      <option>Soybeans</option>
                      <option>Sesame Seeds</option>
                      <option>Hardwood Charcoal</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block">
                      Target Volume (Metric Tons)
                    </label>
                    <input
                      className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-secondary focus:outline-none transition-colors px-0 py-3 text-on-surface"
                      placeholder="e.g., 5000"
                      type="number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block">
                      Incoterms 2020
                    </label>
                    <select className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-secondary focus:outline-none transition-colors px-0 py-3 text-on-surface">
                      <option>Select Term</option>
                      <option>FOB (Free on Board)</option>
                      <option>CIF (Cost, Insurance, Freight)</option>
                      <option>CFR (Cost and Freight)</option>
                      <option>EXW (Ex Works)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block">
                      Certification Required
                    </label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <label className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest text-[10px] font-bold uppercase tracking-tighter cursor-pointer hover:bg-secondary-container transition-colors">
                        <input className="hidden" type="checkbox" /> SGS
                      </label>
                      <label className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest text-[10px] font-bold uppercase tracking-tighter cursor-pointer hover:bg-secondary-container transition-colors">
                        <input className="hidden" type="checkbox" /> ISO 9001
                      </label>
                      <label className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest text-[10px] font-bold uppercase tracking-tighter cursor-pointer hover:bg-secondary-container transition-colors">
                        <input className="hidden" type="checkbox" /> FAIRTRADE
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant block">
                    Letter of Intent / Additional Specifications
                  </label>
                  <textarea
                    className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-secondary focus:outline-none transition-colors px-0 py-3 text-on-surface placeholder:text-outline resize-none"
                    placeholder="Provide any specific quality parameters or contractual nuances..."
                    rows={4}
                  />
                </div>

                <button
                  className="w-full md:w-auto px-12 py-4 hero-gradient text-on-primary font-bold tracking-widest uppercase text-xs shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
                  type="submit"
                >
                  Submit Formal Inquiry
                </button>
              </form>
            </div>

            {/* Right: Hubs & Compliance */}
            <div className="lg:col-span-5 space-y-16">

              {/* Strategic Hubs */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-8">
                  Strategic Hubs
                </h3>
                <div className="space-y-8">
                  <div className="group border-b border-outline-variant pb-6 transition-all hover:border-secondary">
                    <p className="text-[10px] font-bold text-on-surface-variant mb-1 uppercase">
                      West Africa Head Office
                    </p>
                    <h4 className="text-2xl font-bold text-primary mb-2">Lagos, Nigeria</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Suite. 60 Myca7 Plaza, Zoo road, Kano, NG. Strategic export coordination for Sub-Saharan commodities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Compliance Standards */}
              <div className="bg-primary p-10 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-fixed mb-6">
                    Compliance Standards
                  </h3>
                  <p className="text-emerald-50/70 text-sm mb-8 leading-relaxed">
                    We adhere to rigorous international inspection protocols to ensure institutional-grade quality assurance.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 flex flex-col items-center justify-center">
                      <span className="text-xl font-black text-white">SGS</span>
                      <span className="text-[8px] uppercase font-bold tracking-widest text-emerald-200">
                        Certified Inspection
                      </span>
                    </div>
                    <div className="bg-white/10 p-4 flex flex-col items-center justify-center">
                      <span className="text-xl font-black text-white">ISO</span>
                      <span className="text-[8px] uppercase font-bold tracking-widest text-emerald-200">
                        9001:2015 Standards
                      </span>
                    </div>
                  </div>
                </div>
                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[120px] opacity-10 text-emerald-50">
                  verified_user
                </span>
              </div>

              {/* Global Support */}
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-secondary">
                  Global Support
                </h3>
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 bg-surface-container-highest flex items-center justify-center group-hover:bg-secondary-container transition-colors">
                    <span className="material-symbols-outlined text-primary">public</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-on-surface-variant">24/7 Trade Desk</p>
                    <p className="text-sm font-semibold text-primary">business@farmnegy.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 bg-surface-container-highest flex items-center justify-center group-hover:bg-secondary-container transition-colors">
                    <span className="material-symbols-outlined text-primary">call</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-on-surface-variant">HQ Phone</p>
                    <p className="text-sm font-semibold text-primary">+234 810 764 1933</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Global Presence Map */}
        <section className="h-[500px] w-full bg-surface-container-low grayscale relative overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-20"
            alt="minimalist world map background with subtle trade route lines overlaying a clean topographic texture"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB75PKTBQ2Tra7zfGvRfNAyjDgHFcP-V1XMoNTFT_Tj_B3CB9MQHyDxqNy9h1X51COxjnkwOWTbsF0kneA7aVAbnnP_0m0NviDEM1q7TBj7N13mmP3eLmss37e6An_BCnhX8NyfZyDymVsSSsxKlpptRxYTKiajAFFxbRQKx869JgPQeVybpy6Gn-rwUK9ape1rk6d5qGQrwde_ixRbwNwBjkOfm2VIBJyip8Tvd5LNes0TZ32ajZmgEAitO6syBwHG_QOQnUwDinkr"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-primary/40 tracking-tighter mb-4">
                Integrated Global Logistics
              </h2>
              <div className="flex gap-2 justify-center">
                <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                <span className="h-2 w-2 rounded-full bg-secondary/60" />
                <span className="h-2 w-2 rounded-full bg-secondary/30" />
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />

    </div>
  );
}
