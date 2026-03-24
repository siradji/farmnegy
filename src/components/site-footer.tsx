export function SiteFooter() {
  return (
    <footer className="bg-emerald-900 dark:bg-black text-emerald-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 w-full max-w-screen-2xl mx-auto">
        <div className="md:col-span-1">
          <span className="text-xl font-black text-emerald-50 block mb-6 uppercase tracking-tighter">
            Farmnegy International LTD
          </span>
          <p className="text-emerald-200/60 text-xs uppercase tracking-widest leading-loose">
            Institutional-grade agro-commodity procurement and logistics platform based in West Africa.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h5 className="font-black text-xs uppercase tracking-widest mb-4">Operations</h5>
          <a className="text-emerald-200/60 hover:text-emerald-50 transition-colors text-xs uppercase tracking-widest hover:underline decoration-lime-400 decoration-2 underline-offset-4" href="#">
            Logistics Network
          </a>
          <a className="text-emerald-200/60 hover:text-emerald-50 transition-colors text-xs uppercase tracking-widest hover:underline decoration-lime-400 decoration-2 underline-offset-4" href="#">
            Sustainability Reports
          </a>
          <a className="text-emerald-200/60 hover:text-emerald-50 transition-colors text-xs uppercase tracking-widest hover:underline decoration-lime-400 decoration-2 underline-offset-4" href="#">
            Export Standards
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <h5 className="font-black text-xs uppercase tracking-widest mb-4">Governance</h5>
          <a className="text-emerald-200/60 hover:text-emerald-50 transition-colors text-xs uppercase tracking-widest hover:underline decoration-lime-400 decoration-2 underline-offset-4" href="#">
            Privacy Policy
          </a>
          <a className="text-emerald-200/60 hover:text-emerald-50 transition-colors text-xs uppercase tracking-widest hover:underline decoration-lime-400 decoration-2 underline-offset-4" href="#">
            Terms of Trade
          </a>
          <a className="text-emerald-200/60 hover:text-emerald-50 transition-colors text-xs uppercase tracking-widest hover:underline decoration-lime-400 decoration-2 underline-offset-4" href="#">
            Trade Dispute Policy
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <h5 className="font-black text-xs uppercase tracking-widest mb-4">Contact</h5>
          <p className="text-emerald-200/60 text-xs uppercase tracking-widest leading-loose">
            Suite 60 Myca7 Plaza, Zoo road,<br />
            Kano, NG
          </p>
          <div className="flex space-x-4 mt-4">
            <span className="material-symbols-outlined cursor-pointer hover:text-secondary transition-colors">public</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-secondary transition-colors">mail</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-secondary transition-colors">link</span>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-800/30 px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs uppercase tracking-widest text-emerald-200/40">
          © 2026 Farmnegy International LTD. All rights reserved. Institutional Grade Logistics.
        </span>
        <div className="flex gap-8">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-200/40">Sourcing</span>
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-200/40">Processing</span>
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-200/40">Global Logistics</span>
        </div>
      </div>
    </footer>
  );
}
