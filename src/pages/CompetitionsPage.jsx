import DetailTabsPage from "./DetailTabsPage";
import { competitions } from "../data/competitions";

export default function CompetitionsPage() {
  return (
    <DetailTabsPage
      id="competitions"
      title="Competitions"
      subtitle="Select a competition to expand the full timeline, contribution details, outcomes, and image moments from the event."
      items={competitions}
      emptyMessage="No competitions added yet. Add your first entry in src/data/competitions.js."
    />
  );
}
