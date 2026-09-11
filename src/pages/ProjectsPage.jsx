import DetailTabsPage from "./DetailTabsPage";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <DetailTabsPage
      id="projects"
      title="Projects"
      subtitle="Pick a project name from the list to expand the complete write-up, with longer context, approach details, and images."
      items={projects}
      emptyMessage="No projects added yet. Add your first entry in src/data/projects.js."
    />
  );
}
