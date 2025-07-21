import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy, ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  status: "current" | "previous";
  responsibilities: string[];
  achievements: string[];
  description?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "1",
    title: "President",
    company: "Rashmi Metaliks Ltd.",
    location: "Kharagpur, West Bengal",
    period: "August 2021 - Present",
    status: "current",
    responsibilities: [
      "Strategic leadership across administration and business relations",
      "Project initiation and dredging operations oversight", 
      "Stakeholder engagement and land acquisition",
      "Precast plant setup and management"
    ],
    achievements: [
      "Setup of Ductile Iron Pipes Plant (5 Lac MTPA)",
      "Complete development of 400 acres RML6 Plant",
      "Multiple INR 100+ Cr. project completions",
      "Successful regulatory compliance and environmental standards"
    ]
  },
  {
    id: "2", 
    title: "Vice President - Building Material",
    company: "Inventaa Industries Pvt. Ltd.",
    location: "Multi-location (AP, Telangana, Odisha)",
    period: "May 2016 - July 2021",
    status: "previous",
    description: "Led the expansion of Inventaa from chemical operations into building materials and construction, establishing three strategic plants across key Indian markets.",
    responsibilities: [
      "Business development and customer relationships",
      "End-to-end plant setup and operational excellence", 
      "Team leadership and performance management",
      "Precast element production and dispatch coordination"
    ],
    achievements: [
      "Successfully established 3 manufacturing plants",
      "Expanded company into new business vertical",
      "Built strategic partnerships across multiple states",
      "Achieved operational excellence in precast manufacturing"
    ]
  },
  {
    id: "3",
    title: "General Manager - Plant", 
    company: "Jindal Realty Pvt. Ltd.",
    location: "Sonipat (Jindal Group - US$ 12 billion)",
    period: "August 2012 - May 2016",
    status: "previous",
    description: "Managed operations across 700 acres dedicated to township development, commercial buildings, and Jindal University infrastructure projects.",
    responsibilities: [
      "Complete plant operations supervision",
      "Production planning and quality management",
      "Infrastructure development for university projects",
      "Precast element manufacturing for internal consumption"
    ],
    achievements: [
      "Managed 700-acre development project",
      "Delivered infrastructure for Jindal University",
      "Optimized precast manufacturing processes",
      "Maintained high quality standards across operations"
    ]
  }
];

export function Experience() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="experience" className="py-20" ref={ref}>
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
            Professional Journey
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            A track record of executive excellence across leading industrial organizations
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="glass-morphism rounded-2xl p-8 neumorphism shadow-xl border border-white/20 dark:border-white/10"
              variants={fadeInLeft}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{experience.title}</h3>
                  <h4 className="text-xl text-foreground">{experience.company}</h4>
                  <p className="text-muted-foreground flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {experience.location}
                  </p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <Badge
                    className={`px-4 py-2 text-sm font-semibold ${
                      experience.status === "current"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-muted/50 text-muted-foreground"
                    }`}
                  >
                    <Calendar className="h-4 w-4 mr-1" />
                    {experience.period}
                  </Badge>
                </div>
              </div>

              {experience.description && (
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {experience.description}
                </p>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-lg font-semibold mb-3 text-violet-400">Key Responsibilities</h5>
                  <ul className="space-y-2 text-foreground">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                      >
                        <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-3 text-cyan-400">Major Achievements</h5>
                  <ul className="space-y-2 text-foreground">
                    {experience.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: (index * 0.2) + (idx * 0.1) + 0.3 }}
                      >
                        <Trophy className="h-4 w-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
