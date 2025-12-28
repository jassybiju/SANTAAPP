import {
  LogIn,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
  Gift,
  MousePointer2,
  Lock,
  MessageSquare,
  Network,
  Cpu,
} from "lucide-react";
import { StatsGrid } from "../../components/status-grid";
import React, { useEffect } from "react";
import GlobeDisplay from "../../Globe";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray(".panel");

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel, 
        start: "top bottom",
        end: "bottom bottom",
        markers : true,
        snap: {
          snapTo: 1,
          duration: 0.5,
          delay: 0.1,
          ease: "power2.inOut",
        },
      });
    });
   
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return (
    <main className="min-h-screen relative overflow-hidden cyber-grid scroll-smooth">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-primary/5 blur-[120px] rounded-full -z-10" />

      {/* Header */}

      {/* Hero Section */}
      <section
        id="mission-control "
        className=" container mx-auto px-6 pt-3 pb-24 text-center relative z-10"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-primary/5 blur-[120px] rounded-full -z-10" />

        {/* Header */}
        <nav className="container mx-auto px-6 py-8 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center neon-glow-red">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                WishSphere
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                Santakku Oru Letter
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Global Registry
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Artifacts
            </a>
          </div>
          <button
            variant="outline"
            className="glass border-white/10 hover:bg-white/5 rounded-full px-6 bg-transparent"
          >
            System Status: Optimal
          </button>
        </nav>

        {/* Hero Section */}
        <section className=" container mx-auto px-6 pt-12 pb-24 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-xs font-medium text-secondary mb-8 neon-glow-green/20">
              <Zap size={14} className="fill-secondary" />
              <span>NP-OS v4.25 Deployment Finalized</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              The North Pole’s First <br />
              <span className="text-secondary drop-shadow-[0_0_15px_oklch(0.72_0.22_150_/_0.4)]">
                {" "}
                Geospatial Wish-Sync Interface.
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
              Bridge the gap between your home and the Sleigh-One Command
              Center. Send your wishes through the encrypted North Pole network
              and track Santa’s real-time trajectory across the 3D globe
            </p>

            {/* 3D Placeholder Area */}
            <div className="relative -top-20 w-full aspect-square  mx-auto mb-16 group">
              <div className="absolute inset-0 bg-secondary/5 rounded-full min-w-1/2 blur-[80px] group-hover:bg-secondary/10 transition-all duration-700" />
              {/* <GlobeHologram /> */}
              <GlobeDisplay />
            </div>

            {/* CTAs */}

            {/* Stats Section */}
            <div className="">
              <StatsGrid />
            </div>
          </div>
        </section>
      </section>

      <section
        id="how-it-works"
        className="panel container mx-auto px-6 py-24 relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Uplink Protocol
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            From Earth's surface to the orbital North Pole Hub, follow the
            data's journey.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

          {[
            {
              icon: MousePointer2,
              title: "Draft Wish",
              desc: "Initialize your seasonal request through our neural-interface terminal.",
              color: "text-primary",
            },
            {
              icon: Network,
              title: "Quantum Relay",
              desc: "Data is fragmented and sent via redundant global satellite constellations.",
              color: "text-secondary",
            },
            {
              icon: Cpu,
              title: "AI Analysis",
              desc: "Head Elves use predictive modeling to optimize gift procurement logistics.",
              color: "text-white",
            },
            {
              icon: Gift,
              title: "Final Payload",
              desc: "The wish is materialized into reality at the North Pole fabrication plant.",
              color: "text-primary",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="glass p-8 rounded-3xl border-white/5 text-center relative"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full glass flex items-center justify-center font-bold border-white/10">
                {i + 1}
              </div>
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>
              <h4 className="font-bold mb-2">{step.title}</h4>
              <p className="text-sm text-white/40 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section: Why WishSphere? */}
      <section
        id="features"
        className="panel container mx-auto px-6 py-24 border-t border-white/5 relative z-10"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl border-white/5 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:neon-glow-red transition-all">
              <ShieldCheck className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Quantum Encryption</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Every wish is sealed with military-grade 2048-bit encryption,
              ensuring only Santa and the Head Elves can access the data uplink.
            </p>
          </div>
          <div className="glass p-8 rounded-3xl border-white/5 hover:border-secondary/30 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:neon-glow-green transition-all">
              <Zap className="text-secondary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Real-time Sleigh Tracking
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Integrated with North Pole GPS constellations. Monitor Mach 12
              transit speeds and reindeer biometric data in real-time.
            </p>
          </div>
          <div className="glass p-8 rounded-3xl border-white/5 hover:border-white/20 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 transition-all">
              <Sparkles className="text-white/60 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Wish Optimization</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Our neural network helps children refine their requests to ensure
              maximum joy-coefficient and logistical feasibility for the elves.
            </p>
          </div>
          {/* Added more feature cards for depth */}
          <div className="glass p-8 rounded-3xl border-white/5 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:neon-glow-red transition-all">
              <MessageSquare className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Elf Communication</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Direct low-latency bridge to the workshop floor. Get updates on
              your wish's manufacturing status instantly.
            </p>
          </div>
          <div className="glass p-8 rounded-3xl border-white/5 hover:border-secondary/30 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:neon-glow-green transition-all">
              <Lock className="text-secondary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Privacy First</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Zero-knowledge architecture. Not even the Reindeer can see your
              data without your biometric authorization.
            </p>
          </div>
        </div>
      </section>

      <section
        id="security"
        className="panel container mx-auto px-6 py-24 border-t border-white/5 relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              <ShieldCheck size={12} />
              Security Protocol: Alpha-X
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Protected by North Pole Intelligence
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              The North Pole isn't just a workshop; it's the world's most secure
              data sanctuary. We utilize cold-storage servers buried beneath 2km
              of Arctic ice, shielding your dreams from interference.
            </p>
            <ul className="space-y-4">
              {[
                "Multi-sig Biometric Verification",
                "Sub-zero Hardware Firewalls",
                "Reindeer-based Physical Security",
                "Encrypted Polar Star Uplinks",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary neon-glow-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="glass aspect-video rounded-3xl border-white/5 overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 opacity-50" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full glass flex items-center justify-center mx-auto mb-4 border-white/20 group-hover:scale-110 transition-transform">
                  <Lock className="text-white w-10 h-10" />
                </div>
                <p className="text-xs uppercase tracking-[0.3em] font-bold">
                  Secure Zone
                </p>
              </div>
              {/* Decorative HUD scanning lines */}
              <div className="absolute inset-x-0 h-px bg-white/20 animate-[scan_3s_linear_infinite]" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/5 text-center text-white/30 text-xs uppercase tracking-[0.2em]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 WishSphere Industrial. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Protocol
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Security Audit
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Legal
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
