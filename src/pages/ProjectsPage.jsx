import DetailTabsPage from "./DetailTabsPage";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <DetailTabsPage
      id="projects"
      title="Projects"
      subtitle="Things I've built on my own or in small teams. Click any of them for the longer story."
      items={projects}
      emptyMessage="No projects added yet. Add your first entry in src/data/projects.js."
    />
  );
}