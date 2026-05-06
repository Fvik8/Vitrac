/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  HeartPulse, 
  BrainCircuit, 
  Zap, 
  ArrowRight, 
  ChevronRight, 
  Activity, 
  ShieldCheck, 
  LayoutPanelLeft,
  Search,
  PenTool,
  CheckCircle2,
  Mail
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2 }
};

export default function App() {
  return (
    <div className="min-h-screen bg-vitarc-black font-sans selection:bg-vitarc-teal/30 selection:text-vitarc-teal">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-vitarc-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-vitarc-teal to-vitarc-blue flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold tracking-tighter text-xl">VITARC / Portfolio</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#concept" className="hover:text-vitarc-teal transition-colors">Concept</a>
            <a href="#work" className="hover:text-vitarc-teal transition-colors">Work</a>
            <a href="#process" className="hover:text-vitarc-teal transition-colors">Process</a>
            <a href="#contact" className="px-5 py-2 rounded-full glass-morphism text-white hover:bg-white/10 transition-all border-white/20">Let's Talk</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-vitarc-teal/10 blur-[120px] rounded-full opacity-50" />
          <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-vitarc-blue/10 blur-[100px] rounded-full opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-vitarc-teal/30 bg-vitarc-teal/5 text-vitarc-teal text-xs font-bold uppercase tracking-widest mb-8">
              <Activity className="w-4 h-4" /> Final Submission for Ahmed
            </div>
            <h1 className="font-display text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8">
              Vitarc: Redefining the <br />
              <span className="text-gradient">Visual Pulse</span> of <br />
              Chronic Care.
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-white/50 font-light leading-relaxed mb-12">
              Bridging the cold precision of AI predictive models with the warmth of human empathy. 
              A vision to transform Vitarc from an app into an iconic life-saving companion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#concept" className="px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center gap-2 hover:bg-vitarc-teal transition-all group">
                Explore The Vision <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#work" className="px-8 py-4 glass-morphism rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                Recent Projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vitarc Concept Section */}
      <section id="concept" className="py-24 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">The "Vitarc Eye" Strategy</h2>
              <div className="space-y-6 text-white/60 leading-relaxed text-lg">
                <p>
                  Ahmed, your vision for a move away from generic "V" logos is critical. 
                  My conceptual approach for Vitarc centers on <span className="text-white font-medium">"Digital Vitality."</span>
                </p>
                <div className="p-6 rounded-2xl glass-morphism border-vitarc-teal/20">
                  <h3 className="text-vitarc-teal font-bold mb-3 flex items-center gap-2 uppercase text-sm tracking-widest">
                    <BrainCircuit className="w-5 h-5" /> Symbolic Rationale
                  </h3>
                  <p className="text-white/80">
                    The mark should blend an organic heartbeat ripple with the infinity loop of ongoing care. 
                    It's not just a logo; it's a signature of reliability. I propose a variable brand system that breathes with the patient's data.
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Depth over Surface: Multi-layered translucency.",
                    "Predictive Aesthetic: UI that anticipates user fatigue.",
                    "The Health Trust: Colors that signal medical authority."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <ChevronRight className="w-4 h-4 text-vitarc-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              className="relative aspect-square rounded-3xl overflow-hidden glass-morphism p-8 border-vitarc-teal/20 flex flex-col justify-center items-center group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-vitarc-teal/5 to-transparent pointer-events-none" />
              <div className="relative z-10 w-full h-full border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center group-hover:border-vitarc-teal/30 transition-all">
                <HeartPulse className="w-32 h-32 text-vitarc-teal/50 mb-6 group-hover:scale-110 transition-transform duration-500" />
                <span className="text-sm font-bold tracking-widest uppercase opacity-40">Concept Sketched: Vitality Mark v1.0</span>
                <div className="mt-8 grid grid-cols-3 gap-4 w-full px-12">
                   <div className="h-1 bg-vitarc-teal/30 rounded" />
                   <div className="h-1 bg-vitarc-teal/10 rounded" />
                   <div className="h-1 bg-vitarc-teal/10 rounded" />
                </div>
              </div>
              <div className="absolute bottom-12 right-12 font-mono text-[10px] opacity-30 text-right">
                COORD-82.91 // VITARC_CONCEPT <br />
                PRECISION_SCALE_1:1
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div {...fadeIn}>
              <span className="text-vitarc-teal font-bold uppercase tracking-widest text-xs mb-4 block">Proven Experience</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold">Selected Case Studies</h2>
            </motion.div>
            <motion.p {...fadeIn} className="max-w-md text-white/50 text-right">
              Designing interfaces that handle mission-critical data with elegance and clarity.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "NeuroFlow Dashboard",
                category: "AI Behavioral Analysis",
                image: "https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=1000",
                accent: "from-purple-500/20 to-vitarc-blue/20"
              },
              {
                title: "BioPulse Wearable App",
                category: "Real-time Patient Monitoring",
                image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
                accent: "from-vitarc-teal/20 to-vitarc-blue/20"
              },
              {
                title: "Predictive Health Engine",
                category: "Complex Data Visualization",
                image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1000",
                accent: "from-vitarc-blue/20 to-emerald-500/20"
              },
              {
                title: "TeleDoc Premium UI",
                category: "Human-Centric Healthcare",
                image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=1000",
                accent: "from-orange-500/20 to-red-500/20"
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="group relative h-[400px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-vitarc-teal/50 transition-all duration-500"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.accent} group-hover:opacity-80 transition-opacity`} />
                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-vitarc-black via-vitarc-black/80 to-transparent">
                  <span className="text-vitarc-teal text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <button className="flex items-center gap-2 text-sm font-medium hover:text-vitarc-teal transition-colors">
                    View Case Study <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Methodology of Precision</h2>
            <p className="text-white/50">My 3-step surgical approach to product design.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "01. Discovery",
                description: "Deep dive into patient behavioral patterns and predictive AI capabilities."
              },
              {
                icon: <PenTool className="w-8 h-8" />,
                title: "02. Conceptualization",
                description: "Iterative testing of branding marks that convey trust and authority."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "03. Precision Refinement",
                description: "Final pixel-perfect execution focused on accessibility and WCAG standards."
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl glass-morphism flex items-center justify-center text-vitarc-teal mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-transparent to-vitarc-teal/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">
              Let's build the future of <br />
              <span className="text-vitarc-teal">Health Tech.</span>
            </h2>
            <p className="text-white/60 mb-12 text-lg">
              Ahmed, I am ready to bring symbolic depth and iconic branding to Vitarc. 
              Let's define the visual standards for chronic care together.
            </p>
            <div className="p-8 rounded-3xl glass-morphism border-vitarc-teal/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <HeartPulse className="w-24 h-24" />
              </div>
              <p className="text-sm uppercase tracking-widest text-vitarc-teal font-bold mb-6">Immediate Action</p>
              <button className="w-full sm:w-auto px-12 py-5 bg-vitarc-teal text-vitarc-black font-black rounded-2xl uppercase tracking-tighter hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,242,234,0.3)]">
                Connect on Contra
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-white/30 text-xs font-medium uppercase tracking-[0.2em]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Crafted for Ahmed // Vitarc Pitch</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
