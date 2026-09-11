import ShowcaseGrid from "./ShowcaseGrid";
import { competitions } from "../data/competitions";

export default function Competitions() {
  return (
    <ShowcaseGrid
      id="competitions"
      keyPrefix="competition"
      heading="Competitions"
      subheading="Robotics competitions and events I've represented a team in."
      items={competitions}
    />
  );
}
