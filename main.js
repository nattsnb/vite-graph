import "./style.css";
import { Graph } from "./Graph.js";
import { GraphNode } from "./GraphNode.js";

console.log("Script is working");

const firstNode = new GraphNode(1);

const graph = new Graph(firstNode);

const secondNode = graph.add(12, firstNode, null);
const thirdNode = graph.add(31, secondNode, firstNode);
const fourthNode = graph.add(666, thirdNode, null);
console.log(graph.getEdgesOfGraph());
graph.askNodeToDeleteEdge(thirdNode, firstNode);
console.log(graph.getEdgesOfGraph());
const fifthNode = graph.add(243, secondNode, fourthNode);
console.log(graph.getEdgesOfGraph());
console.log(graph.nodes);
console.log(graph.getEdgesOfGraph());
graph.deleteNode(thirdNode);
console.log(graph.getEdgesOfGraph());
graph.deleteNode("dadaa");
