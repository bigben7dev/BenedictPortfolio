import ProjectCard from "./ProjectCard";
export default function ProjectGrid({ projects }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
