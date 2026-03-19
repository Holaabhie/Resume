"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Globe,
  Database,
  Search,
  CheckCircle2,
  Calendar,
  GraduationCap,
  Award,
  ChevronRight,
  ArrowUpRight,
  Monitor,
  Zap,
  Fingerprint
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ResumePage() {
  const { scrollYProgress } = useScroll();

  // Hero Compression Sequence
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.1], [0, 10]);

  // Parallax Drifts for Glows
  const glow1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const glow2Y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden scroll-smooth">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          style={{ y: glow1Y }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#9333EA]/15 blur-[160px] rounded-full animate-pulse-glow" />

        <motion.div
          style={{ y: glow2Y }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#3B82F6]/15 blur-[160px] rounded-full animate-pulse-glow" />

        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-2xl">
        <div className="mx-auto px-6 flex items-center justify-between !w-full !h-[82px] !max-w-full">
          <div className="hidden md:flex items-center gap-10 text-[11px] font-mono uppercase tracking-widest text-zinc-500">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Matrix</NavLink>
            <NavLink href="#projects">Showcase</NavLink>
            <NavLink href="#education">Journey</NavLink>
          </div>

          <MagnetButton>
            <Button
              variant="outline"
              className="rounded-full border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all group px-6 h-11"
              onClick={() => {
                try {
                  // Try iframe-based navigation first (for embedded contexts like Orchids)
                  if (window !== window.parent) {
                    window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "tel:9175188539" } }, "*");
                  } else {
                    // Standalone: initiate phone call directly
                    window.location.href = "tel:+919175188539";
                  }
                } catch {
                  // Fallback: scroll to the contact section
                  document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}>

              <div className="flex items-center gap-2 font-bold uppercase tracking-tighter text-sm">
                Initiate Contact <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Button>
          </MagnetButton>
        </div>
      </nav>

      <main className="relative z-10 pb-32 w-full">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-60 min-h-[calc(100vh-82px)] flex items-center justify-center">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity, filter: `blur(${heroBlur}px)` }}
            initial="initial"
            animate="animate"
            variants={stagger}
            className="flex flex-col items-center text-center gap-10 w-full py-20">

            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full animate-pulse opacity-50" />
              <Badge variant="secondary" className="relative glass-card text-white px-4 py-1.5 rounded-full border-white/20 text-[10px] font-mono uppercase tracking-[0.2em]">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Available for Work
                </span>
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-[clamp(3rem,14vw,10rem)] overflow-hidden break-words font-heading font-black tracking-tighter leading-[0.85] text-white italic uppercase mix-blend-difference w-full max-w-4xl">

              Abhishek<br />Singh
            </motion.h1>

            <motion.div variants={fadeInUp} className="max-w-2xl">
              <p className="text-zinc-500 font-mono text-sm uppercase tracking-[0.3em] mb-6 animate-text-flicker">
                Software Developer & Visual Architect
              </p>
              <h2 className="text-2xl md:text-3xl font-medium text-zinc-400 leading-tight">
                Seeking opportunities to <span className="text-white">engineer the future</span> through lean code and immersive digital experiences.
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
              <MagnetButton>
                <Button
                  className="rounded-full bg-white text-black hover:bg-zinc-200 h-14 px-10 text-base font-black uppercase tracking-tighter italic"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>

                  Explore Work
                </Button>
              </MagnetButton>
              <div className="flex gap-3">
                <SocialButton icon={<Linkedin />} href="https://www.linkedin.com/in/abhishek-singh-809910260" />
                <SocialButton icon={<Github />} href="https://github.com/Holaabhie" />
                <SocialButton icon={<Mail />} href="mailto:inabbys.17@gmail.com" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Profile Summary - Mission Statement */}
        <section id="about" className="max-w-7xl mx-auto px-6 mb-60">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4">

              <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-4 block animate-text-flicker">
                / Mission Statement
              </label>
              <div className="w-12 h-[1px] bg-white/20" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8">

              <p className="text-3xl md:text-5xl font-light leading-[1.2] text-zinc-300 tracking-tight">
                Aspiring developer focused on the intersection of <span className="text-white relative inline-block group cursor-none">
                  emerging tech
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-blue-500 origin-left" />

                </span> and user-centric design. Driven by the challenge of turning complex logic into <span className="text-white">seamless human interactions.</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skill Matrix - Orthogonal Grid */}
        <section id="skills" className="max-w-7xl mx-auto px-6 mb-60">
          <div className="mb-20">
            <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-4 block text-center animate-text-flicker">
              / Tech Stack Matrix
            </label>
            <h3 className="text-5xl md:text-7xl font-heading font-black text-white italic text-center uppercase tracking-tighter">Core Competencies</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/5 bg-white/[0.02]">
            <MatrixCell
              icon={<Code2 className="w-6 h-6" />}
              label="Languages"
              skills={["CPP", "C", "Python", "Java", "JavaScript"]} />

            <MatrixCell
              icon={<Layers className="w-6 h-6" />}
              label="Frameworks"
              skills={["React", "Express", "Angular", "Node.js", "Next.js"]} />

            <MatrixCell
              icon={<Cpu className="w-6 h-6" />}
              label="Core Systems"
              skills={["OS", "API Arch", "System Design", "Cloud Basics"]} />

            <MatrixCell
              icon={<Zap className="w-6 h-6" />}
              label="Methodology"
              skills={["CI/CD", "Testing", "SDLC", "Agile", "Git"]} />

          </div>
        </section>

        {/* Project Showcase - Cinematic Cards */}
        <section id="projects" className="max-w-7xl mx-auto px-6 mb-60">
          <div className="mb-20">
            <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
              <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-4 block animate-text-flicker !whitespace-pre-line">/ RECENT DEPLOYMENT

              </label>
              <h3 className="text-5xl md:text-7xl font-heading font-black text-white italic uppercase tracking-tighter !whitespace-pre-line">SELECTED WORK</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            <FeaturedProject
              index=""
              title="IND Manager"
              description="A robust industrial management suite optimizing order workflows, real-time inventory synchronization, and secure enterprise payment gateways."
              tags={["React", "Node.js", "SQL", "Stripe", "Logistics"]}
              images={[
                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/e6498e14-b48b-42f2-807a-daaa23431273/Screenshot-2026-01-11-142850-1768121968235.png",
                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/e6498e14-b48b-42f2-807a-daaa23431273/Screenshot-2026-01-11-142746-1768121968045.png",
                "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/e6498e14-b48b-42f2-807a-daaa23431273/Screenshot-2026-01-11-142830-1768121968236.png"]
              }
              link="https://ind-manager-s.vercel.app/dashboard" />
          </div>
        </section>

        {/* Journey & Data */}
        <section id="education" className="max-w-7xl mx-auto px-6 mb-60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {/* Timeline */}
            <div>
              <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-12 block animate-text-flicker !whitespace-pre-line">/ ACADEMIC

              </label>
              <div className="space-y-16">
                <TimelineItem
                  year="2022 / 2025"
                  title="Bachelor's in Computer Application"
                  institution="Amity University, Panvel"
                  details="Focused on Software Engineering and AI concepts. Graduated with 7.02 CGPA."
                  active />

                <TimelineItem
                  year=""
                  title="Higher Secondary Education"
                  institution="Science Stream"
                  details="Foundation in Physics, Chemistry, and\xA0 Mathematics." />

              </div>

              <div className="mt-32">
                <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-8 block animate-text-flicker">
                  / Strategic Highlights
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  <Highlight icon={<CheckCircle2 />} text="Full SDLC lifecycle proficiency" />
                  <Highlight icon={<Award />} text="Google AI & Udemy Certified" />
                  <Highlight icon={<Zap />} text="Workshop & Seminar Attendee" />
                  <Highlight icon={<Code2 />} text="Team-Oriented Architecture" />
                </div>
              </div>
            </div>

            {/* High-density Contact Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative glass-card border-white/10 rounded-[3rem] p-12 specular-highlight !w-full !h-full">
                <h3 className="text-4xl font-heading font-black text-white italic mb-12 uppercase tracking-tighter">Identity & Reach</h3>

                <div className="space-y-8 mb-12">
                  <ContactRow label="Email Protocol" value="inabbys.17@gmail.com" />
                  <ContactRow label="Mobile Uplink" value="+91 9175188539" />
                  <ContactRow label="Geographic Hub" value="Mumbai , Vasai" />
                  <ContactRow label="AGE" value="22" />
                  <ContactRow label="Communication" value="English / Hindi" />
                </div>

                <Separator className="bg-white/5 mb-12" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="font-heading font-black text-4xl italic tracking-tighter text-white uppercase block mb-2">ABHISHEK SINGH</span>
              <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em] animate-text-flicker">Next-Gen Interface & Code Architect</p>
            </div>
            <div className="flex gap-10 text-[11px] font-mono uppercase tracking-widest text-zinc-500">
              <a
                href="https://www.linkedin.com/in/abhishek-singh-809910260"
                className="hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://www.linkedin.com/in/abhishek-singh-809910260" } }, "*");
                }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Holaabhie"
                className="hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://github.com/Holaabhie" } }, "*");
                }}
              >
                GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5">
            <div className="flex items-center gap-4 text-zinc-700 text-[10px] font-mono uppercase tracking-widest mt-4 md:mt-0">
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-blue-500" /> STABLE v2.1.0</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-purple-500" /> SECURE LINK</span>
            </div>
          </div>
        </div>
      </footer>
    </div>);

}

function NavLink({ href, children }: { href: string; children: React.ReactNode; }) {
  return (
    <a href={href} className="hover:text-white transition-all hover:tracking-[0.2em] relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
    </a>);

}

function MagnetButton({ children }: { children: React.ReactNode; }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const xCenter = left + width / 2;
    const yCenter = top + height / 2;
    x.set((clientX - xCenter) * 0.3);
    y.set((clientY - yCenter) * 0.3);
  };

  const mouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springConfig = { damping: 15, stiffness: 150 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      style={{ x: sx, y: sy }}>

      {children}
    </motion.div>);

}

function MatrixCell({ icon, label, skills }: { icon: React.ReactNode; label: string; skills: string[]; }) {
  return (
    <motion.div
      whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
      className="p-10 border border-white/5 flex flex-col gap-8 transition-colors group relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-600 mb-6 group-hover:text-zinc-400 transition-colors">{label}</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) =>
            <Badge key={skill} variant="outline" className="border-white/5 bg-transparent text-zinc-500 text-[10px] group-hover:border-white/20 group-hover:text-zinc-200 uppercase tracking-widest py-0.5 px-2">
              {skill}
            </Badge>
          )}
        </div>
      </div>
    </motion.div>);

}

function FeaturedProject({ index, title, description, tags, images, link }: { index: string; title: string; description: string; tags: string[]; images: string[]; link?: string; }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

      <div className="lg:col-span-7 relative aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-8 flex gap-2 z-10">
          {images.map((_, i) =>
            <div
              key={i}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                i === currentIndex ? "w-8 bg-white" : "w-2 bg-white/20"
              )} />

          )}
        </div>
      </div>

      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="text-4xl font-heading font-black italic text-zinc-800 tracking-tighter group-hover:text-blue-500/40 transition-colors !whitespace-pre-line">{index}</span>
          <div className="h-[1px] w-12 bg-white/10" />
          <div className="flex gap-2">
            {tags.slice(0, 2).map((tag) =>
              <span key={tag} className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">#{tag}</span>
            )}
          </div>
        </div>

        <h4 className="text-4xl font-heading font-black text-white italic uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500">{title}</h4>
        <h5 className="text-zinc-400 text-lg leading-relaxed">{description}</h5>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) =>
            <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-zinc-500 text-[9px] uppercase tracking-widest">
              {tag}
            </Badge>
          )}
        </div>

        <MagnetButton>
          <Button
            variant="outline"
            className="rounded-full border-white/10 group h-12 px-8 self-start"
            onClick={() => {
              if (link) {
                window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: link } }, "*");
              }
            }}>

            View Deployment <ArrowUpRight className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Button>
        </MagnetButton>
      </div>
    </motion.div>);

}

function TimelineItem({ year, title, institution, details, active }: { year: string; title: string; institution: string; details: string; active?: boolean; }) {
  return (
    <div className="relative pl-12 group">
      <div className="absolute left-0 top-1 w-[1px] h-full bg-white/5" />
      <div className={cn(
        "absolute left-[-4px] top-1 w-2 h-2 rounded-full transition-all duration-500",
        active ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" : "bg-white/10 group-hover:bg-white/30"
      )} />
      {active &&
        <div className="absolute left-[-12px] top-[-7px] w-6 h-6 rounded-full border border-blue-500/20 animate-ping opacity-20" />
      }

      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4 block animate-text-flicker !whitespace-pre-line !whitespace-pre-line">{year}</span>
      <h4 className="text-2xl font-bold text-white italic mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{title}</h4>
      <p className="text-zinc-400 font-medium mb-4">{institution}</p>
      <p className="text-zinc-500 text-sm leading-relaxed max-w-md !whitespace-pre-line">{details}</p>
    </div>);

}

function Highlight({ icon, text }: { icon: React.ReactNode; text: string; }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-zinc-600 group-hover:text-white group-hover:border-white/20 transition-all">
        {React.cloneElement(icon as React.ReactElement, { size: 14 })}
      </div>
      <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">{text}</span>
    </div>);

}

function ContactRow({ label, value }: { label: string; value: string; }) {
  return (
    <div className="flex flex-col gap-1 group cursor-default">
      <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-zinc-700 animate-text-flicker !whitespace-pre-line">{label}</span>
      <span className="text-white font-medium tracking-tight group-hover:translate-x-1 transition-transform !whitespace-pre-line">{value}</span>
    </div>);

}

function SocialButton({ icon, href }: { icon: React.ReactNode; href: string; }) {
  return (
    <MagnetButton>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-white/10 hover:text-white text-zinc-500 transition-all border border-transparent hover:border-white/10"
        onClick={() => {
          if (href.startsWith('mailto:')) {
            window.location.href = href;
          } else if (href && href !== "#") {
            window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: href } }, "*");
          }
        }}>

        {React.cloneElement(icon as React.ReactElement, { size: 20 })}
      </Button>
    </MagnetButton>);

}

function AcademicWork() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-20">

      <div className="lg:col-span-7 relative aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 p-12 flex flex-col justify-center gap-8 group-hover:border-blue-500/30 transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        <CryptoBox />
        <div className="flex justify-end">
          <Signature />
        </div>
      </div>

      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="text-4xl font-heading font-black italic text-zinc-800 tracking-tighter group-hover:text-purple-500/40 transition-colors">02</span>
          <div className="h-[1px] w-12 bg-white/10" />
          <div className="flex gap-2">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">#Academic</span>
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">#Research</span>
          </div>
        </div>

        <h4 className="text-4xl font-heading font-black text-white italic uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500">CryptoTransfer & Verification</h4>
        <h5 className="text-zinc-400 text-lg leading-relaxed">Experimental research into peer-to-peer asset transfer protocols and cryptographic identity verification systems. Focus on high-security signature validation and decentralized node architecture.</h5>

        <div className="flex flex-wrap gap-2 mb-4">
          {["Cryptography", "Security", "P2P", "Protocols", "Hashing"].map((tag) =>
            <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-zinc-500 text-[9px] uppercase tracking-widest">
              {tag}
            </Badge>
          )}
        </div>
      </div>
    </motion.div>);

}

function CryptoBox() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 p-6 group hover:border-blue-500/20 transition-colors duration-500">
      <div className="absolute top-0 right-0 p-3">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Fingerprint className="w-4 h-4 text-blue-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Digital Identity Verified</span>
        </div>
        <div className="font-mono text-[9px] text-zinc-600 break-all leading-relaxed">
          PUB_KEY: 0x7E9A...F2B4<br />
          SIG_HASH: 8f92b3a1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5a6b7c8d9
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-[9px] font-mono text-zinc-800">ENCRYPTION: AES-256</span>
          <Badge variant="outline" className="text-[8px] border-blue-500/20 text-blue-400/60 h-5 px-2">SECURE_NODE</Badge>
        </div>
      </div>
    </div>);

}

function Signature() {
  return (
    <div className="flex flex-col items-end opacity-40 hover:opacity-100 transition-opacity duration-700 group">
      <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-700 mb-2">Authenticated by</span>
      <span className="text-3xl font-heading italic text-white/80 group-hover:text-white transition-colors">Abhishek Singh</span>
      <div className="w-16 h-[1px] bg-white/10 mt-2 group-hover:w-24 transition-all duration-700" />
    </div>);

}