import {GraphNode} from "./GraphNode.js";

export class Graph {
    nodes = [];
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
    getEdgesOfGraph(){
        let edges = []
        for (const element of this.nodes) {
            const edgesOfNode = element.getEdgesOfNode()
            for (const element of edgesOfNode) {
                edges.push(element)
            }
        }
        return edges
    }

}

