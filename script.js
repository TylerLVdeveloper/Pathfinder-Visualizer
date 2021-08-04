// Create Board
const board = document.getElementById("board");

const boardSpaces = [
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ],
];

boardSpaces.forEach(function (row, rowIndex) {
  for(let i = row.length; i--; i>=0){
    const spaceHTML = `<div class="space" id="${rowIndex + 1}-${row[i]}"></div>`;
board.insertAdjacentHTML("afterbegin", spaceHTML);
  }
});

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
class NodeCl {
  constructor(coord, gCost, hCost, prevNode){
    this.gCost = gCost;
    this.hCost = hCost;
    this.fCost = this.gCost + this.hCost;

    this.coord = coord;
    this.prevNode = prevNode;
  }

  recalcCosts(gCost, hCost){
    this.gCost = gCost;
    this.hCost = hCost;
    this.fCost = this.gCost + this.hCost;
}
}

const endNodeClass = 'end_node_class';
const startNodeClass = 'start_node_class';
const openNodeClass = 'open_node_class';
const closedNodeClass = 'closed_node_class';

let endNode = "20-12";
const startNode = new NodeCl("3-8", 0, 0, 'none');
let lowestCostNode;


document.getElementById(endNode).classList.add(endNodeClass);
document.getElementById(startNode.coord).classList.add(startNodeClass);

let openNodes = [];
let closedNodes = [];

const calcHCost = function(node){
   const splitCoordsEndNode = endNode.slice().split('-');
   const yCoordEndNode = +splitCoordsEndNode[0];
   const xCoordEndNode = +splitCoordsEndNode[1];

   const splitCoordsCurrNode = node.slice().split('-');
   const yCoordCurrNode = +splitCoordsCurrNode[0];
   const xCoordCurrNode = +splitCoordsCurrNode[1];
   
   const hCost = (Math.abs(yCoordEndNode - yCoordCurrNode) * 10) + (Math.abs(xCoordEndNode - xCoordCurrNode) * 10);
   return hCost;  
}



const calcNeighborNodes = function(currentNode){


   const splitCoords = currentNode.coord.slice().split('-');
   const yCoord = splitCoords[0];
   const xCoord = splitCoords[1];
   
   /////////////////////////////////////////////////////////////////// NORTH NEIGHBOR NODE
   // calculate north neighbor coordinates
   const northCoord = ((+yCoord + 1).toString() + '-' + xCoord);
   
  // closedNodes.forEach((node)=> console.log(node));

   if(!(closedNodes.some((node)=>node.coord === northCoord)) && !(openNodes.some((node)=>node.coord === northCoord))){
        // calculate north neighbor H cost
      const northHCost = calcHCost(northCoord);
      // create north neighbor object 
      const northNeighbor = new NodeCl(northCoord, (currentNode.gCost + 10), northHCost, currentNode.coord);
      // Mark node green
      document.getElementById(`${northNeighbor.coord}`).classList.add(openNodeClass);

      openNodes.push(northNeighbor);

   }
   /////////////////////////////////////////////////////////////////// NORTH-EAST NEIGHBOR NODE
   const northEastCoord = (+yCoord + 1).toString() + '-' + (+xCoord + 1).toString();
   if(!(closedNodes.some((node)=>node.coord === northEastCoord)) && !(openNodes.some((node)=>node.coord === northEastCoord))){
      const northEastHCost = calcHCost(northEastCoord);
      const northEastNeighbor = new NodeCl(northEastCoord, (currentNode.gCost + 14), northEastHCost, currentNode.coord);
      document.getElementById(`${northEastNeighbor.coord}`).classList.add(openNodeClass);
      openNodes.push(northEastNeighbor);
   }
   /////////////////////////////////////////////////////////////////// EAST NEIGHBOR NODE
   const eastCoord = yCoord + '-' + (+xCoord + 1).toString();
   if(!(closedNodes.some((node)=>node.coord === eastCoord)) && !(openNodes.some((node)=>node.coord === eastCoord))){
      const eastHCost = calcHCost(eastCoord);
      const eastNeighbor = new NodeCl(eastCoord, (currentNode.gCost + 10), eastHCost, currentNode.coord);
      document.getElementById(`${eastNeighbor.coord}`).classList.add(openNodeClass);
      openNodes.push(eastNeighbor);
   }
   /////////////////////////////////////////////////////////////////// SOUTH-EAST NEIGHBOR NODE
   const southEastCoord = (+yCoord - 1).toString() + '-' + (+xCoord + 1).toString();
   if(!(closedNodes.some((node)=>node.coord === southEastCoord)) && !(openNodes.some((node)=>node.coord === southEastCoord))){
      const southEastHCost = calcHCost(southEastCoord);
      const southEastNeighbor = new NodeCl(southEastCoord, (currentNode.gCost + 14), southEastHCost, currentNode.coord);
      document.getElementById(`${southEastNeighbor.coord}`).classList.add(openNodeClass);
      openNodes.push(southEastNeighbor);
   }
   /////////////////////////////////////////////////////////////////// SOUTH NEIGHBOR NODE
   const southCoord = (+yCoord - 1).toString() + '-' + +xCoord;
   if(!(closedNodes.some((node)=>node.coord === southCoord)) && !(openNodes.some((node)=>node.coord === southCoord))){
      const southHCost = calcHCost(southCoord);
      const southNeighbor = new NodeCl(southCoord, (currentNode.gCost + 10), southHCost, currentNode.coord);
      document.getElementById(`${southNeighbor.coord}`).classList.add(openNodeClass);
      openNodes.push(southNeighbor);
   }
   /////////////////////////////////////////////////////////////////// SOUTH-WEST NEIGHBOR NODE
   const southWestCoord = (+yCoord - 1).toString() + '-' + (+xCoord - 1).toString();
   if(!(closedNodes.some((node)=>node.coord === southWestCoord)) && !(openNodes.some((node)=>node.coord === southWestCoord))){
      const southWestHCost = calcHCost(southWestCoord);
      const southWestNeighbor = new NodeCl(southWestCoord, (currentNode.gCost + 14), southWestHCost, currentNode.coord);
      document.getElementById(`${southWestNeighbor.coord}`).classList.add(openNodeClass);
      openNodes.push(southWestNeighbor); 
   }
   /////////////////////////////////////////////////////////////////// WEST NEIGHBOR NODE
   const westCoord = yCoord + '-' + (+xCoord - 1).toString();
   if(!(closedNodes.some((node)=>node.coord === westCoord)) && !(openNodes.some((node)=>node.coord === westCoord))){
      const westHCost = calcHCost(westCoord);
      const westNeighbor = new NodeCl(westCoord, (currentNode.gCost + 10), westHCost, currentNode.coord);
      document.getElementById(`${westNeighbor.coord}`).classList.add(openNodeClass);
      openNodes.push(westNeighbor);
   }
   /////////////////////////////////////////////////////////////////// NORTH-WEST NEIGHBOR NODE
   const northWestCoord = (+yCoord + 1).toString() + '-' + (+xCoord - 1).toString();
   if(!(closedNodes.some((node)=>node.coord === northWestCoord)) && !(openNodes.some((node)=>node.coord === northWestCoord))){
      const northWestHCost = calcHCost(northWestCoord);
      const northWestNeighbor = new NodeCl(northWestCoord, (currentNode.gCost + 14), northWestHCost, currentNode.coord);
      document.getElementById(`${northWestNeighbor.coord}`).classList.add(openNodeClass);  
      openNodes.push(northWestNeighbor);  
   }

   lowestCostNode = openNodes[0];
   openNodes.forEach((node)=> {if(node.fCost < lowestCostNode.fCost) lowestCostNode = node});

   console.log(lowestCostNode.coord);
   openNodes = openNodes.filter(node=>node.coord !== lowestCostNode.coord);
   document.getElementById(lowestCostNode.coord).classList.remove(openNodeClass);

   closedNodes.push(currentNode);
   document.getElementById(currentNode.coord).classList.add(closedNodeClass);

  

   
}

calcNeighborNodes(startNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);
calcNeighborNodes(lowestCostNode);


