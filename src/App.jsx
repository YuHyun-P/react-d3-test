import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { mockData, newMockData, deletedData } from "./data.js";

function renderD3(svgRef, data) {
  let additionalLinks = [];

  // Stratify the data
  const stratify = d3
    .stratify()
    .parentId((d) => d.parentId)
    .id((d) => d.id);
  const rootNode = stratify(data);

  // Create a tree layout
  const treeLayout = d3.tree().size([400, 300]);

  // Apply the tree layout to the hierarchical data
  const treeData = treeLayout(rootNode);

  // Select the root of the tree and bind the data
  const svg = d3.select(svgRef.current);

  // Draw nodes
  // console.log(treeData.descendants());

  svg
    .selectAll("circle")
    .data(treeData.descendants())
    .join(
      (enter) => enter.append("circle"),
      (update) => update,
      (exit) => exit.transition().duration(1000).style("opacity", 0).remove()
    )
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", 10)
    .transition()
    .duration(1000)
    .style("opacity", 1);
  // Add text next to each node

  svg
    .selectAll("text")
    .data(treeData.descendants())
    .join(
      (enter) =>
        enter
          .append("text")
          .style("opacity", 0)
          .text((d) => d.data.message),
      (update) => update.attr("x", (d) => d.x + 15).attr("y", (d) => d.y),
      (exit) => exit.transition().duration(1000).style("opacity", 0).remove()
    )
    .attr("x", (d) => d.x + 15)
    .attr("y", (d) => d.y)
    .transition()
    .duration(1000)
    .style("opacity", 1);

  // source
  let pairNode1 = treeData.descendants().filter(function (d) {
    return d["id"] === "33333";
  })[0];
  // target
  let pairNode2 = treeData.descendants().filter(function (d) {
    return d["id"] === "75c4aca42bfedcb90bcd9f65be28bd9e013ad971";
  })[0];

  console.log(pairNode1, pairNode2);
  let link = new Object();
  link.source = pairNode1;
  link.target = pairNode2;
  additionalLinks.push(link);
  console.log(additionalLinks);

  // Draw edges (links) between nodes
  svg
    .selectAll("line")
    .data([...treeData.links(), ...additionalLinks])
    .join(
      (enter) => enter.append("line").style("opacity", 0),
      (update) => update,
      (exit) => exit.transition().duration(1000).style("opacity", 0).remove()
    )
    .attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y)
    .attr("stroke", "black")
    .transition()
    .duration(1000)
    .style("opacity", 0.75);
}

function App() {
  const [data, setData] = useState(newMockData);
  const gRef = useRef(null);

  useEffect(() => {
    renderD3(gRef, data);
  }, [data]);

  const handleNewData = () => {
    setData(newMockData);
  };

  const handleDelete = () => {
    setData(deletedData);
  };

  return (
    <>
      <svg width={800} height={700}>
        <g ref={gRef} transform={"translate(50,50)"} />
      </svg>
      <button onClick={handleNewData}>click</button>
      <button onClick={handleDelete}>delete</button>
    </>
  ); // Replace with your actual JSX
}

export default App;
