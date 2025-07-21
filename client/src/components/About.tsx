import { motion } from "framer-motion";
import { Check, MapPin, Mail, Phone } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50/50 to-blue-50/30 dark:bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            variants={fadeInUp}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Results-driven executive leader with a demonstrated history of driving business growth and enhancing profitability
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Professional workspace image */}
          <motion.div
            className="glass-morphism rounded-2xl p-8 neumorphism shadow-xl border border-white/20 dark:border-white/10"
            variants={fadeInLeft}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Modern executive workspace with industrial planning"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
          >
            <motion.div
              className="glass-morphism rounded-2xl p-6 neumorphism shadow-lg border border-white/20 dark:border-white/10"
              variants={fadeInRight}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Professional Excellence</h3>
              <p className="text-muted-foreground/90 dark:text-muted-foreground leading-relaxed">
                Currently serving as President at Rashmi Metaliks, I steer corporate strategy, operations, and overall performance. 
                Known for visionary leadership, strategic acumen, and commitment to achieving outstanding outcomes across multiple industrial sectors.
              </p>
            </motion.div>

            <motion.div
              className="glass-morphism rounded-2xl p-6 neumorphism shadow-lg border border-white/20 dark:border-white/10"
              variants={fadeInRight}
            >
              <h3 className="text-2xl font-bold mb-4 text-violet-500 dark:text-violet-400">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  "Strategic Planning",
                  "Business Development", 
                  "Project Management",
                  "Operations Leadership",
                  "Team Building",
                  "Stakeholder Relations"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center text-foreground/90 dark:text-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Check className="h-4 w-4 text-green-500 dark:text-green-400 mr-2" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-morphism rounded-2xl p-6 neumorphism shadow-lg border border-white/20 dark:border-white/10"
              variants={fadeInRight}
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-400">Location & Contact</h3>
              <div className="space-y-2 text-muted-foreground/90 dark:text-muted-foreground">
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 text-primary mr-2" />
                  Kharagpur, West Bengal, India
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 text-primary mr-2" />
                  anu.sharma716@gmail.com
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 text-primary mr-2" />
                  +91 74777 58777
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
