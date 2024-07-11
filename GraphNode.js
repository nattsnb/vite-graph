import { Edge } from "./Edge.js";

export class GraphNode {
  edges = [];
  constructor(value, leftMember, rightMember) {
    this.value = value;
    this.id = GraphNode.uuidv4();
    this.createEdgesOfNode(leftMember, rightMember);
  }

  static uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16),
    );
  }

  createEdgesOfNode(leftMember, rightMember) {
    if (leftMember) {
      this.createEdge(leftMember);
    }
    if (rightMember) {
      this.createEdge(rightMember);
    }
  }

  createEdge(member) {
    const edge = new Edge(this, member);
    this.edges.push(edge);
  }

  getEdgesOfNode() {
    return this.edges;
  }

  askNodeToDeleteEdge(targetNode) {
    const edgeToDelete = this.edges.filter(function findEdgeToDelete(edge) {
      return edge.BNode === targetNode;
    });
    this.edges.splice(this.edges.indexOf(edgeToDelete), 1);
  }
}
