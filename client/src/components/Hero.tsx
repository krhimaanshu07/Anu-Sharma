import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, float, glow } from "@/lib/animations";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Dynamic Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-full blur-sm"
          variants={float}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-violet-500/10 dark:bg-violet-500/20 rounded-full blur-sm"
          variants={float}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-sm"
          variants={float}
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="glass-morphism rounded-3xl p-8 md:p-16 neumorphism shadow-2xl border border-white/20 dark:border-white/10">
          {/* Professional executive portrait */}
          <motion.div className="mb-8" variants={fadeInUp}>
            <motion.img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
              alt="Anu Sharma - Professional Executive"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary/30 dark:border-primary/50 shadow-2xl ring-4 ring-primary/20 dark:ring-primary/30"
              variants={glow}
              animate="animate"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
            variants={fadeInUp}
          >
            Anu Sharma
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-muted-foreground mb-6"
            variants={fadeInUp}
          >
            President & Executive Leader
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground/80 dark:text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Driving business growth and operational excellence across manufacturing, construction, and industrial sectors with strategic vision and proven leadership.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-gradient-to-r from-primary to-violet-500 hover:from-primary/80 hover:to-violet-500/80 transition-all duration-300"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="px-8 py-3 glass-morphism hover:bg-white/30 dark:hover:bg-white/20 border-primary/20 dark:border-primary/30 text-foreground transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mt-8"
            variants={fadeInUp}
          >
            <motion.a
              href="https://bit.ly/3ui2SKF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            <motion.a
              href="mailto:anu.sharma716@gmail.com"
              className="text-2xl text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>
            <motion.a
              href="tel:+917477758777"
              className="text-2xl text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
