import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <div className="bg-background font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">

      <SiteNav />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10"></div>
          <img
            className="w-full h-full object-cover"
            alt="vast industrial scale soybean plantation at sunrise with golden light reflecting off dew"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm24q2lfzck69csQYnyLGPpHSt_QEjStdKdkOv9yUj0CelzOs036lg1hNXBoxpTZRsD2rgWoKRHuBDytYO7eC6G-AmOKDs76lLSttNg-pQ9U5z6pQpTE9TNL8mxhNjuSlu4Dc9cpctqcV6N6EfKW2IvbbmB_Leje1kLM117e9XIF4LWpZ-iNidBilJl8btyhpFrPdDK4obKb0WuzXvBpZjrONibprAWw3pXm_qd0VGtrAr-gaerfbr-P2tgtwedc4L7pUI3fczpeUa"
          />
        </div>
        <div className="relative z-20 max-w-screen-2xl mx-auto px-8 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-8 bg-secondary-container/20 backdrop-blur-md px-4 py-2 border-l-4 border-secondary">
              <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">Institutional Procurement</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-[0.95] tracking-tighter mb-8 font-headline">
              Empowering Global Trade with West African Excellence
            </h1>
            <p className="text-xl text-emerald-50/80 max-w-2xl font-light leading-relaxed mb-12">
              Architecting a resilient, transparent, and high-velocity supply chain connecting Africa&apos;s fertile lands to the world&apos;s most demanding industrial hubs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary-fixed text-on-secondary-fixed font-bold px-10 py-5 uppercase tracking-widest text-sm hover:bg-secondary-fixed-dim transition-all duration-300">
                Institutional Solutions
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold px-10 py-5 uppercase tracking-widest text-sm hover:bg-white/20 transition-all">
                Market Insights
              </button>
            </div>
          </div>
        </div>
        {/* Bottom Hero Badge */}
        <div className="absolute bottom-0 right-0 z-30 bg-surface-container-lowest p-12 hidden lg:block max-w-md">
          <div className="flex items-start gap-4 mb-4">
            <span className="material-symbols-outlined text-primary text-4xl">verified</span>
            <div>
              <h3 className="text-primary font-bold uppercase text-sm tracking-widest">Global Export Standard</h3>
              <p className="text-on-surface-variant text-xs mt-2 leading-relaxed">Compliance with EU, US, and Asian market grade specifications through rigorous lab verification and real-time logistics tracking.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Global Impact Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-4">Magnitude &amp; Reach</span>
              <h2 className="text-5xl font-extrabold text-primary tracking-tighter leading-none mb-8 font-headline">The Scale of Our Presence</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-xl">
                Global Steward is more than a commodity trader; we are the connective tissue for over 500 cooperatives, managing a throughput that secures raw materials for Fortune 500 food and industrial manufacturers.
              </p>
              <div className="grid grid-cols-2 gap-px bg-outline-variant/30">
                <div className="bg-surface py-12 pr-12 border-r border-b border-outline-variant/20">
                  <span className="text-5xl font-black text-primary block mb-2">420K+</span>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant">MT Annual Tonnage</span>
                </div>
                <div className="bg-surface py-12 px-12 border-b border-outline-variant/20">
                  <span className="text-5xl font-black text-primary block mb-2">24+</span>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant">Global Hub Markets</span>
                </div>
                <div className="bg-surface py-12 pr-12 border-r border-outline-variant/20">
                  <span className="text-5xl font-black text-primary block mb-2">15k</span>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant">Sustained Smallholders</span>
                </div>
                <div className="bg-surface py-12 px-12">
                  <span className="text-5xl font-black text-primary block mb-2">100%</span>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant">Traceability Score</span>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                className="w-full aspect-square object-cover"
                alt="massive international shipping container port at dusk with giant crane silhouettes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcPQIcejPgCbaXZyAjAOYY4-sJFLK74x9ZTMWGsMH5znsvvJxX_yxw_y2V2GQLjRQIuYE1AWzEq8o1GHkc2usUxSQtoNUkdnpMlb3Lad43tMAwsqKTj6g3HBLujel4INevqSH-AGdYlTxSAZgS8DzNRFxK4Zd3EPAIohjG9FIg4Skai07IyQvTtNewGjBJaVnSpk0qMUQUXhnGdst11dTBKNKANJiVRw2yRYbsAB6XbgR_NJn12qBNoXuSKH2hENX2xYuiC0ybh-eB"
              />
              <div className="absolute -bottom-10 -left-10 bg-primary p-12 max-w-xs stats-gradient">
                <span className="text-secondary-fixed text-4xl font-black block mb-4 italic">0.2%</span>
                <p className="text-emerald-50 text-sm font-medium leading-relaxed">Global trade friction reduction through our integrated port logistics and customs clearing software.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement Excellence */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-4">Vertical Integration</span>
              <h2 className="text-5xl font-extrabold text-primary tracking-tighter leading-tight font-headline">From Field to Port: A Seamless Continuum</h2>
            </div>
            <div className="flex gap-4">
              <button className="p-4 bg-surface-container-highest text-primary">
                <span className="material-symbols-outlined">west</span>
              </button>
              <button className="p-4 bg-primary text-on-primary">
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="group">
              <div className="relative mb-8 overflow-hidden">
                <img
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="raw agricultural produce being inspected with technical measuring equipment in a lab"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZfhY_SJkAPMn4WhVNufrXfy7ZK6ZMVEKckSWC9LYq_iUUJy1Pjwxfi_k8VlTvBxF4GJE97k9LjfX2gmZQpxS_8BenrBUrVDhpxY_cbFQHV--Zxhxlrsp7aLnOVflIpdh39uMaT-J5DiEsegRgvumDuUurq50Y2byfcJiEoW3cmRpVPRRJ6iH3oEY5Avrk0jv-UPwhf4QUtS-Y2IEGTR5VPfvO2QpjruV62bOEx94f8MO9Wd9Cig7Elgiyk0IHRIDFApBUchP2Jh4i"
                />
                <div className="absolute top-0 left-0 bg-primary text-white p-4 font-black text-xl">01</div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">Regenerative Sourcing</h3>
              <p className="text-on-surface-variant leading-relaxed">We partner with over 500 regional cooperatives, providing tech-enabled agronomy support and guaranteed off-take at institutional rates.</p>
            </div>
            {/* Step 2 */}
            <div className="group">
              <div className="relative mb-8 overflow-hidden">
                <img
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="modern logistics warehouse with high-tech automated sorting lines and export pallets"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIf3tabngkN1Fsn9rhwiuy0aa-aVZjtQXRbb-ve8yeS7zzxM9Z6lJOnT3xzSmviEjYK5Enrxgh8Fsr22qSKVIM4ShrRnb3X5YntIiGHvZtgjBu9iJ4_O4YK24_z114Ezx95Zt8ijyRt6I0p1Mnrk9o3b6-Dx08gUIddtBXtLEMEhIiWkyJpeaDCniWrKrlgij529UMVKdg6w3uby7DUG6lSMV_SE210y-C6tNB3EYzTXoH0vrKSXvuw8cRX9ojOf8Z9cgmuhRYic1C"
                />
                <div className="absolute top-0 left-0 bg-primary text-white p-4 font-black text-xl">02</div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">Institutional Processing</h3>
              <p className="text-on-surface-variant leading-relaxed">Our state-of-the-art cleaning, sorting, and bagging facilities in Lagos and Port Harcourt ensure 99.9% purity for every shipment.</p>
            </div>
            {/* Step 3 */}
            <div className="group">
              <div className="relative mb-8 overflow-hidden">
                <img
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="aerial perspective of a bulk carrier cargo ship leaving a port on open water"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIZmxSYw5YcmTMXNA7sNL9DCjeLAtwbJcSzM9_YC5Y5R-eKvf674tviCThQ2IiFH6L86XqcP9VGPA2wWmM9MFcM-jfW74Iq95YWJ-pvubWqYFWWtrVEVyUL3M0K8pzkyrcSsue8fQwOyx147FPqN9uvXfDDN0rmLxaAhcCj8jVUJ3gnkfQ90z-a5f2JF5F8cHQQpw3WmIZ_F2wKqOqOsT7Zl9iZ4AuSaeZhCcWPSHwtWe04UGVXAiUfmeEffmsHZbvkiebXSM-oBgh"
                />
                <div className="absolute top-0 left-0 bg-primary text-white p-4 font-black text-xl">03</div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">Global Dispatch</h3>
              <p className="text-on-surface-variant leading-relaxed">Strategic deep-sea port access and a dedicated fleet of haulage logistics minimize downtime and optimize market arrival times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Produce Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="max-w-3xl mb-24">
            <span className="text-secondary font-bold text-xs uppercase tracking-widest block mb-4">The Portfolio</span>
            <h2 className="text-5xl font-extrabold text-primary tracking-tighter leading-tight font-headline">Precision-Grade Commodities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 - Soybean */}
            <div className="bg-surface-container-low p-8 group hover:bg-primary transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary-fixed transition-colors">Grade A / 10% Moisture</span>
                <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors">spa</span>
              </div>
              <h4 className="text-3xl font-black text-primary mb-6 group-hover:text-white transition-colors">Soybean</h4>
              <img
                className="w-full aspect-video object-cover mb-8 grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="high quality yellow soybeans on a wooden surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYZ630YkJ43uRXMv0UEgprjYQiynXlN-io6GgIdBxhHifpcddCh1--FXepyq_fbemuHvggTqGDX86mECVXh7scFoCzfeJmkhNcwoBkPcaVOYsu9SIvxC1xKqrUrFhculW1nxKCVlFBOleGRbDiVKKuVOGlRNUjeRkQ6HChR84y6M2vIN8ika7ozGdz-40DZsxWzXDJWAd78g-NyP3Gs_jNeDpZW2JJ2yKzOLdO6C7qxwjDMpCwwbTdaFXrxBY89HDbCO82owtjkb47"
              />
              <button className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2 group-hover:text-white">
                Specifications <span className="material-symbols-outlined text-sm">north_east</span>
              </button>
            </div>
            {/* Product 2 - Cashew */}
            <div className="bg-surface-container-low p-8 group hover:bg-primary transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary-fixed transition-colors">W180 - W320 Sizing</span>
                <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors">eco</span>
              </div>
              <h4 className="text-3xl font-black text-primary mb-6 group-hover:text-white transition-colors">Cashew</h4>
              <img
                className="w-full aspect-video object-cover mb-8 grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="raw cashew nuts in their shell piled in a rustic woven basket"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAtmJzdaLkBAeuFAJENmSSZ3WWnaVSDvJF3GLQL3qVYPQTYCSBXPNK388ieMYavU-KJhOCUiNa8TQejRXZ0MNTw4oWlh7jq6R26BY-C7D43fn1YTG32L5eMzKR_Uur3Aahe95rGiqo_e3g4JL9QlH0OCCyblrXtT687_es9wRnLJc8sPUpvFsWVpi_4sj_vxkbCJ5WslGLwU30_l_G3HytvYsQSOjk5oGRxpb0T8h9ldwlPP-jbSbuSZ2TYH0NoQBw01jxibXg2j4J"
              />
              <button className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2 group-hover:text-white">
                Specifications <span className="material-symbols-outlined text-sm">north_east</span>
              </button>
            </div>
            {/* Product 3 - Soycake */}
            <div className="bg-surface-container-low p-8 group hover:bg-primary transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary-fixed transition-colors">High Protein Meal</span>
                <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors">grain</span>
              </div>
              <h4 className="text-3xl font-black text-primary mb-6 group-hover:text-white transition-colors">Soycake</h4>
              <img
                className="w-full aspect-video object-cover mb-8 grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="processed soy meal cake flakes being poured into a storage container"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCApc_vvaqXwRz9BdNwENlUlbvNlbKN7SUvR901HD83973a5OckeijrjY4l8Dv_wq9ADIsoYaIX7hiNQoVLjTZFGjJCtOi9Iht7FfepkXaX-70y_ZWJeh7_eg_pdGqU0VQMBR5Ci7wIaWupHWCIw7ImGEw02T5b9a9sck-m5umtL6syMr_e6haONRqc51Qteg_ilCOaRPWX3XsvIVTq1H"
              />
              <button className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2 group-hover:text-white">
                Specifications <span className="material-symbols-outlined text-sm">north_east</span>
              </button>
            </div>
            {/* Product 4 - Ginger */}
            <div className="bg-surface-container-low p-8 group hover:bg-primary transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary-fixed transition-colors">Premium Dried</span>
                <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors">nutrition</span>
              </div>
              <h4 className="text-3xl font-black text-primary mb-6 group-hover:text-white transition-colors">Ginger</h4>
              <img
                className="w-full aspect-video object-cover mb-8 grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="fresh organic ginger root on a clean white background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4ewf1cCMloDZ8CyYlJn-I7nVC5Q4y2a6zjlZ5Ru5FQIF_Hi2_AYmUE6Q-ipqwAt1WELfnpZUvseiTd-ILD2huzfidC4y47LHx6Ne-1Ggscjzzwb76Rb3g0oXadaocoe_XM6Tm2rb5rn7E4bavXQHgDMs4kbTlAJLHjNHrga3mtDRx0BI2SIJE2ZBNUwq2oueuQX2wpCgWVDnlDN9d5OEyry7tYqgaRvOiWOs_FtJ68k8EpHd8XSnmLSQW0KJi45zmxe7gFVtrA_8C"
              />
              <button className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2 group-hover:text-white">
                Specifications <span className="material-symbols-outlined text-sm">north_east</span>
              </button>
            </div>
            {/* Product 5 - Sesame */}
            <div className="bg-surface-container-low p-8 group hover:bg-primary transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary-fixed transition-colors">99% Purity White</span>
                <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors">scatter_plot</span>
              </div>
              <h4 className="text-3xl font-black text-primary mb-6 group-hover:text-white transition-colors">Sesame</h4>
              <img
                className="w-full aspect-video object-cover mb-8 grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="white sesame seeds dropped onto a black surface creating a textured scatter"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQA5anHJ_-XaqOczToKkUM9PLMpanBajFH4iLkOaS_JjTr33dHuFaLQCtSqQiWEkQnQwVheyHpLW5Lid54gkJbxtsDJFG8PMu2kqIt-MO1887WDRe6F_4L8JUTforWEPHU4dFN3cwXhPqfIjRMJLSirDaIqq8xvp7YK7jQUv4KGm1n1C9IVtBJ0TdieHUt4etORiAZvabE0xoU7F4sqbdimnRy9ik2OE0OuACxtcBxFlS9Tw0zKUlCvySxeNh5SuT9da-kpZGv7_W9"
              />
              <button className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2 group-hover:text-white">
                Specifications <span className="material-symbols-outlined text-sm">north_east</span>
              </button>
            </div>
            {/* Product 6 - Cocoa */}
            <div className="bg-surface-container-low p-8 group hover:bg-primary transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary-fixed transition-colors">High Oil Content</span>
                <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors">podcasts</span>
              </div>
              <h4 className="text-3xl font-black text-primary mb-6 group-hover:text-white transition-colors">Cocoa</h4>
              <img
                className="w-full aspect-video object-cover mb-8 grayscale group-hover:grayscale-0 transition-all duration-500"
                alt="dried cocoa beans in a wooden scoop showing deep brown color and natural textures"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2mJl9iHl5LRk51ZqJDv_w265qJEjrvKr1zibQ0_d33WrvRNQ43dkNuz7EQHBc7-hIPBYQgevYRhr0O78-D61wCpOjDieVo5DNSpASQCy7wYAF9w4sgrohtVIULXO9rDIQTLcRCoOibHq8aA9WpncinQmiXgGfsQsLDEQw2_lze5M_ZpfnwYTJZpnPiy9RYa62kllonnQcWZ0bryIdpcUnKSwHozJ9n5RoV6RZM1nO9Iy9krtoMZezpaGDBrUYcFAi6HY0sKLOoun"
              />
              <button className="text-primary font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2 group-hover:text-white">
                Specifications <span className="material-symbols-outlined text-sm">north_east</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Investor/Trade CTA */}
      <section className="relative py-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            alt="fountain pen on a legal trade document with blurred city office lights"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAwKAVkhIIswGlz74QJCTTw63uuMOL7DGpX0siuYlD-DX4GNXyeJSDWVu64QIVfQGOuK8m9Iz-yQwd0a4SCz8xfkzImQtS6BrAqIwPCrjpwMqYQ69zQZr9qQEIqBaOBBHc9ViYAejTA-JQVkLd15ci89HZ28E3eXvPIloXvgc_XvVSCGvABgyvUCMSgonC0ec1guVIG25SbNKO6JlxcZWmB25rPjs3rMPGldIZiSIPm67BHorVXFV_CEc8kSBziyDILV6h2UrwUCF2"
          />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-12 font-headline">Secure Your Institutional Supply Chain</h2>
            <p className="text-xl text-emerald-50/70 mb-16 leading-relaxed">Join the network of global manufacturers who rely on Global Steward for consistent, verified, and ethically sourced agro-commodities at scale.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-secondary-fixed text-on-secondary-fixed px-12 py-6 font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-secondary-fixed-dim transition-all">
                Inquire Trade Contract
              </button>
              <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-12 py-6 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-all">
                Investor Relations
              </button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

    </div>
  );
}
