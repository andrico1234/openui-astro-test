import React from "react";
import _ from "lodash";
import { openUIConceptsByComponent } from "../sources";

const Concepts = ({ component }) => {
  const [showDescriptions, setShowDescriptions] = React.useState(false);
  const [collapseAll, toggleCollapseAll] = React.useState(true);

  const conceptsForComponent = _.sortBy(
    _.toPairs(openUIConceptsByComponent[component]),
    ([_, concepts]) => -concepts.length
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          htmlFor="descriptions"
        >
          <input
            type="checkbox"
            id="descriptions"
            checked={showDescriptions}
            aria-checked={showDescriptions}
            onChange={() => setShowDescriptions((isDescShown) => !isDescShown)}
            style={{
              marginRight: "8px",
              verticalAlign: "middle",
            }}
          />
          Show descriptions
        </label>
        <label
          style={{
            cursor: "pointer",
          }}
          htmlFor="collapse"
        >
          <input
            type="checkbox"
            id="collapse"
            checked={collapseAll}
            aria-checked={collapseAll}
            onChange={() => toggleCollapseAll((isCollapsed) => !isCollapsed)}
            style={{
              marginRight: "8px",
              verticalAlign: "middle",
              width: "0px",
              height: "0px",
            }}
          />
          {collapseAll ? "Collapse all" : "Expand all"}
        </label>
      </div>
      {_.map(conceptsForComponent, ([conceptOpenUIName, concepts]) => {
        const uniqueNames = _.uniq(_.map(concepts, "name"));
        // const hasOtherNames = uniqueNames.length > 1;

        return <div key={conceptOpenUIName}>{uniqueNames.toString()}</div>;
      })}
    </>
  );
};

export default Concepts;
