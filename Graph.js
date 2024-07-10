import {GraphNode} from "./GraphNode.js";

export class Graph {
    nodes = [];
    let adjacencyMatrix = [[]]
    constructor(firstNode) {
        this.nodes.push(firstNode);
    }

    add(value, neighbourA, neighbourB) {
        if(this.nodes.find(node => node === neighbourA) || this.nodes.find(node => node === neighbourB)) {
            const newMember = new GraphNode(value, neighbourA, neighbourB);
            this.nodes.push(newMember);
            return newMember;
        } else {
            throw new Error('No such members.');
        }
    }


}

