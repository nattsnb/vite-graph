import './style.css'
import {Graph} from "./Graph.js";
import {GraphNode} from "./GraphNode.js";

console.log("Script is working")

const firstNode = new GraphNode(1);

const graph = new Graph(firstNode);

const secondNode = graph.add(12, firstNode, null);
const thirdNode = graph.add(31, secondNode, firstNode);
const lastNode = graph.add(666, thirdNode, null);
console.log(graph);
console.log(graph.nodes[2].adjecentNodes)