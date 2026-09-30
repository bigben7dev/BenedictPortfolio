import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import SectionWrapper from "../layout/SectionWrapper";
import SectionLabel from "../ui/SectionLabel";
import TechBadge from "../ui/TechBadge";

export default function FeaturedProjects() {
  return (
    <SectionWrapper id="work" className="bg-ivory pt-4 md:pt-8">
      <div className="container-shell">
        <div className="flex items-end justify-between gap-4">
          <div>
            <SectionLabel>Featured work</SectionLabel>
            <h2 className="display-font mt-2 text-4xl font-semibold leading-none sm:text-5xl">
              Real Solutions for Real Businesses.
            </h2>
            <p className="mt-4 text-sm text-muted">
              Selected projects I've designed and built.
            </p>
          </div>
          <Link
            to="/work"
            className="hidden items-center gap-1 text-xs font-semibold text-blue md:flex"
          >
            View all work <ArrowUpRight size={13} />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="group overflow-hidden rounded-2xl border border-border-warm bg-white/55"
            >
              <div className="aspect-[16/9] overflow-hidden bg-navy">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-blue">
                  {project.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </div>
                <Link
                  to={`/work/${project.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-dark-text transition group-hover:text-blue"
                >
                  View Case Study <ArrowUpRight size={13} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
