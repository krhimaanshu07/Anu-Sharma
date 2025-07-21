import { motion } from "framer-motion";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  category: "manufacturing" | "infrastructure" | "dredging";
  budget: string;
  description: string;
  status: "Ongoing" | "Completed";
  details: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Blast Furnace & Sinter Plant",
    category: "manufacturing",
    budget: "INR 110 Cr.",
    description: "Complete setup of blast furnace of 680 m³ and sinter plant of 140m² capacity spanning 50 acres",
    status: "Ongoing",
    details: "50 acres",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "2", 
    title: "Ductile Iron Pipe Plant",
    category: "manufacturing",
    budget: "INR 100 Cr.",
    description: "Manufacturing unit with annual capacity of 500,000 MT spanning 36 acres",
    status: "Ongoing",
    details: "36 acres",
    image: "https://images.unsplash.com/photo-1558618666-fbcd25c0cd7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "3",
    title: "Corporate Office & Residential",
    category: "infrastructure", 
    budget: "INR 80 Cr.",
    description: "150,000 sqft corporate office and 300,000 sqft residential complexes with amenities",
    status: "Completed",
    details: "450,000 sqft",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "4",
    title: "Dredging & Mining Operations", 
    category: "dredging",
    budget: "INR 425 Cr.",
    description: "Earth dredging in J&K and Manipur (INR 225 Cr.) + Sand dredging in West Bengal (INR 200 Cr.)",
    status: "Ongoing",
    details: "Multi-state",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "5",
    title: "Township Development",
    category: "infrastructure",
    budget: "INR 100 Cr.",
    description: "60-acre township at Kharagpur and corporate office at Kolkata totaling 150,000 sqft",
    status: "Ongoing", 
    details: "60 acres",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "6",
    title: "Seamless Steel Pipes Plant",
    category: "manufacturing",
    budget: "INR 80 Cr.",
    description: "Complete structural setup with 120,000 MT annual capacity including quality and storage units",
    status: "Completed",
    details: "120,000 MT/year",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  }
];

const categories = [
  { key: "all", label: "All Projects" },
  { key: "manufacturing", label: "Manufacturing" },
  { key: "infrastructure", label: "Infrastructure" },
  { key: "dredging", label: "Dredging & Mining" }
];

export function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "manufacturing": return "bg-blue-500/20 text-blue-400";
      case "infrastructure": return "bg-violet-500/20 text-violet-400";
      case "dredging": return "bg-cyan-500/20 text-cyan-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "text-green-400" : "text-orange-400";
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50/30 to-indigo-50/40 dark:bg-card/30" ref={ref}>
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
            Major Projects
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Leading transformational industrial projects across multiple sectors
          </motion.p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.div key={category.key} variants={fadeInUp} transition={{ delay: index * 0.1 }}>
              <Button
                onClick={() => setActiveFilter(category.key)}
                variant={activeFilter === category.key ? "default" : "outline"}
                className={`px-6 py-2 font-semibold transition-all ${
                  activeFilter === category.key
                    ? "bg-gradient-to-r from-primary to-violet-500"
                    : "glass-morphism hover:bg-white/20 dark:hover:bg-black/20"
                }`}
              >
                {category.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-morphism rounded-2xl p-6 neumorphism group cursor-pointer shadow-lg border border-white/20 dark:border-white/10"
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover="hover"
            >
              <motion.div variants={scaleOnHover}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-lg w-full h-48 object-cover mb-4"
                />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={getCategoryColor(project.category)}>
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </Badge>
                    <span className="text-green-400 font-bold">{project.budget}</span>
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Status: <span className={getStatusColor(project.status)}>{project.status}</span>
                    </span>
                    <span className="text-muted-foreground">{project.details}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
