import {Edge} from "./Edge.js";

export class GraphNode {
    edges = [];
    constructor(value, leftMember, rightMember) {
        this.value = value;
        this.id = GraphNode.uuidv4();
        this.createEdges(leftMember, rightMember)
    }

    static uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    createEdges (leftMember, rightMember) {
        if(leftMember){
            const edge = new Edge (this, leftMember)
            this.edges.push(edge)
        }
        if(rightMember){
            const edge = new Edge (this, rightMember)
            this.edges.push(edge)
        }
    }

    getEdgesOfNode(){
        return this.edges
    }
}