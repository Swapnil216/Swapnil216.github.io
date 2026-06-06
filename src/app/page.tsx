'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Linkedin, FileText } from 'lucide-react';

export default function Home() {
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            {['About', 'Experience', 'Skills', 'Projects', 'Life', 'Education'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">{item}</a>
            ))}
          </div>
          <div className="flex gap-4">
             <a href="/Swapnil_Agarwal_Resume.pdf" className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
               <FileText size={14} /> Resume
             </a>
          </div>
        </div>
      </nav>

      <motion.div initial="hidden" animate="visible" variants={container} className="max-w-6xl mx-auto px-6 pt-32">

        {/* Hero Section */}
        <section id="about" className="mb-32">
          <motion.h1 variants={item} className="text-7xl font-black mb-6 tracking-tight">HEY, I'M SWAPNIL AGARWAL</motion.h1>
          <motion.h2 variants={item} className="text-4xl font-bold text-blue-400 mb-6">BUILDING THE FUTURE OF SEARCH, ONE SYSTEM AT A TIME</motion.h2>
          <motion.p variants={item} className="text-slate-400 text-xl max-w-2xl leading-relaxed mb-8">
            Seasoned software engineer leading projects that generated over $540M in annual revenue[cite: 13]. Skilled in RESTful APIs, Elastic Search, Spring Boot, and large-scale system design[cite: 14].
          </motion.p>
          <motion.div variants={item} className="flex gap-4">
            <a href="#projects" className="bg-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition">View My Work →</a>
            <a href="mailto:swapnilagarwal216@gmail.com" className="border border-slate-700 px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition">Let's Talk</a>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <motion.h2 variants={item} className="text-4xl font-black mb-16">WHERE I'VE MADE IMPACT</motion.h2>
          <div className="space-y-16 border-l border-slate-800 ml-4 pl-8">
            <motion.div variants={item} className="relative">
              <h3 className="text-2xl font-bold">Software Engineer II | Delivery Hero [cite: 16]</h3>
              <p className="text-slate-500 font-medium mb-4">Apr 2025 - Present [cite: 16]</p>
              <ul className="list-disc ml-5 text-slate-300 space-y-2">
                <li>Designed and architected a pluggable and scalable solution for dynamic filters, enabling seamless adoption by multiple brands' codebases[cite: 16].</li>
                <li>Achieved a 30% reduction in p99 latency, driving an incremental revenue uplift of EUR 7M[cite: 16].</li>
              </ul>
            </motion.div>

            <motion.div variants={item} className="relative">
              <h3 className="text-2xl font-bold">Software Development Engineer II | Flipkart [cite: 16]</h3>
              <p className="text-slate-500 font-medium mb-4">Aug 2024 - Mar 2025 [cite: 16]</p>
              <ul className="list-disc ml-5 text-slate-300 space-y-2">
                <li>Developed a Spark job to process daily analytics and identify top-selling products[cite: 16].</li>
                <li>Designed and implemented search system changes to support token-based pricing for seamless integration[cite: 16].</li>
              </ul>
            </motion.div>

            <motion.div variants={item} className="relative">
              <h3 className="text-2xl font-bold">Software Development Engineer I | Flipkart [cite: 16]</h3>
              <p className="text-slate-500 font-medium mb-4">Jul 2022 - Jul 2024 [cite: 16]</p>
              <ul className="list-disc ml-5 text-slate-300 space-y-2">
                <li>Designed a novel feature allowing users to refine searches exclusively for premium brands, resulting in a monthly revenue surge of USD 1.5 million[cite: 16].</li>
                <li>Eliminated null searches, elevating CTR by 2.85% and revenue growth by USD 44.12 million[cite: 16].</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Placeholder Sections */}
        <section id="skills" className="mb-32">
            <motion.h2 variants={item} className="text-4xl font-black mb-16">MY SUPERPOWERS</motion.h2>
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                <p className="text-slate-300">Java, Python, Elastic Search, Solr, Spring Boot, Kafka, Kubernetes, AWS, GCP [cite: 16]</p>
            </div>
        </section>
      </motion.div>
    </main>
  );
}