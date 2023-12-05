import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

const mockData = [
  {
    id: "4402a0857d0d8744b628497629fdab0321409b0b",
    parentId: "21143936ef1d1b350c3694dc8af0530b8434b39b",
    message: "브랜치 성공",
  },
  {
    id: "21143936ef1d1b350c3694dc8af0530b8434b39b",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "test",
  },
  {
    id: "75c4aca42bfedcb90bcd9f65be28bd9e013ad971",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "config: gitignore에 zero-install 추가",
  },
  {
    id: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    parentId: "",
    message: "config: 기본 개발 환경 세팅",
  },
];

const newMockData = [
  {
    id: "4402a0857d0d8744b628497629fdab0321409b0b",
    parentId: "21143936ef1d1b350c3694dc8af0530b8434b39b",
    message: "브랜치 성공",
  },
  {
    id: "21143936ef1d1b350c3694dc8af0530b8434b39b",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "test",
  },
  {
    id: "75c4aca42bfedcb90bcd9f65be28bd9e013ad971",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "config: gitignore에 zero-install 추가",
  },
  {
    id: "33333",
    parentId: "44444",
    message: "추가1",
  },
  {
    id: "44444",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "추가2",
  },
  {
    id: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    parentId: "",
    message: "config: 기본 개발 환경 세팅",
  },
];

const deletedData = [
  {
    id: "4402a0857d0d8744b628497629fdab0321409b0b",
    parentId: "21143936ef1d1b350c3694dc8af0530b8434b39b",
    message: "브랜치 성공",
  },
  {
    id: "21143936ef1d1b350c3694dc8af0530b8434b39b",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "test",
  },
  {
    id: "75c4aca42bfedcb90bcd9f65be28bd9e013ad971",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "config: gitignore에 zero-install 추가",
  },
  {
    id: "44444",
    parentId: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    message: "추가2",
  },
  {
    id: "f6cfd82dfea8ac87b3150d441f1ca71aff418df2",
    parentId: "",
    message: "config: 기본 개발 환경 세팅",
  },
];

function renderD3(svgRef, data) {
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

  // Draw edges (links) between nodes
  svg
    .selectAll("line")
    .data(treeData.links())
    .join(
      (enter) =>
        enter
          .append("line")
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y)
          .attr("stroke", "black")
          .style("opacity", 0),
      (update) =>
        update
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y)
          .attr("stroke", "black"),
      (exit) => exit.transition().duration(1000).style("opacity", 0).remove()
    )
    .transition()
    .duration(1000)
    .style("opacity", 0.75);

  // Draw nodes
  console.log(treeData.descendants());

  svg
    .selectAll("circle")
    .data(treeData.descendants())
    .join(
      (enter) =>
        enter
          .append("circle")
          .attr("cx", (d) => d.x)
          .attr("cy", (d) => d.y)
          .attr("r", 10),
      (update) =>
        update
          .attr("cx", (d) => d.x)
          .attr("cy", (d) => d.y)
          .attr("r", 10),
      (exit) => exit.transition().duration(1000).style("opacity", 0).remove()
    )
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
          .attr("x", (d) => d.x + 15)
          .attr("y", (d) => d.y)
          .style("opacity", 0)
          .text((d) => d.data.message),
      (update) => update.attr("x", (d) => d.x + 15).attr("y", (d) => d.y),
      (exit) => exit.transition().duration(1000).style("opacity", 0).remove()
    )
    .transition()
    .duration(1000)
    .style("opacity", 1);
}

function App() {
  const [data, setData] = useState(mockData);
  const svgRef = useRef(null);

  useEffect(() => {
    renderD3(svgRef, data);
  }, [data]);

  const handleNewData = () => {
    setData(newMockData);
  };

  const handleDelete = () => {
    setData(deletedData);
  };

  return (
    <>
      <svg ref={svgRef} width={500} height={500} />
      <button onClick={handleNewData}>click</button>
      <button onClick={handleDelete}>delete</button>
    </>
  ); // Replace with your actual JSX
}

export default App;
