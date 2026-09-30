import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-3xl border border-border-warm bg-white/50"
    >
      <div className="aspect-[16/9] overflow-hidden bg-navy">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold text-blue">{project.category}</p>
        <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">
          {project.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold">
          View case study <ArrowUpRight size={13} />
        </span>
      </div>
    </Link>
  );
}
