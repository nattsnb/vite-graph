import { GraphNode } from "./GraphNode.js";

export class Graph {
  nodes = [];
  constructor(firstNode) {
    this.nodes.push(firstNode);
  }

  add(value, neighbourA, neighbourB) {
    if (
      this.nodes.find((node) => node === neighbourA) ||
      this.nodes.find((node) => node === neighbourB)
    ) {
      const newMember = new GraphNode(value, neighbourA, neighbourB);
      this.nodes.push(newMember);
      return newMember;
    } else {
      throw new Error("No such members.");
    }
  }
  getEdgesOfGraph() {
    let edges = [];
    for (const element of this.nodes) {
      const edgesOfNode = element.getEdgesOfNode();
      for (const element of edgesOfNode) {
        edges.push(element);
      }
    }
    return edges;
  }
  createAdjacenceMatrix() {
    let adjacenceMatrix = [[""]];
    for (const element of this.nodes) {
      adjacenceMatrix[0].push(element);
      const edgesOfNode = element.getEdgesOfNode();
      let arrayOfNeighbours = [];
      for (const element of edgesOfNode) {
        arrayOfNeighbours.push(element.BNode);
      }
      let matrixVerse = [];
      matrixVerse.push(element);
      for (let i = 0; i <= this.nodes.length; i++) {
        if (arrayOfNeighbours.includes(this.nodes[i])) {
          matrixVerse.push("1");
        } else {
          matrixVerse.push("0");
        }
      }
      adjacenceMatrix.push(matrixVerse);
    }
    return adjacenceMatrix
  }

  askNodeToDeleteEdge(sourceNode, targetNode) {
    sourceNode.askNodeToDeleteEdge(targetNode);
  }

  deleteNode(nodeToDelete) {
    this.nodes.splice(this.nodes.indexOf(nodeToDelete), 1);
    let edgesWithNodeToDelete = this.getEdgesOfGraph().filter(
      function getEdgesWithTheNode(node) {
        return node.BNode === nodeToDelete;
      },
    );
    for (const element of edgesWithNodeToDelete) {
      element.ANode.edges.splice(element.ANode.edges.indexOf(element));
    }
  }
}
