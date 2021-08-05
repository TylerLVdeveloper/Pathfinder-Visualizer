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
const wallNodeClass = 'wall_node_class';
const finalPathNodeClass = 'final_path_node_class';

let endNode = "25-1";
const startNode = new NodeCl("3-8", 0, 0, 'none');
let lowestCostNode;

let openNodes = [];
let closedNodes = [];
let wallNodes = ["10-1", "10-2","10-3", "10-4", "10-5", "10-6", "10-7", "10-8", "10-9", "10-10", "10-11", "10-12", "12-5", "12-6", "12-7", "12-8", "12-9", "12-10", "12-11", "12-12", "12-13", "12-14", "12-15", "15-3", "15-4", "15-5", "15-6", "15-7","20-2", "20-3", "20-4", "20-5", "20-6", "20-7", "20-8"];

document.getElementById(endNode).classList.add(endNodeClass);
document.getElementById(startNode.coord).classList.add(startNodeClass);
wallNodes.forEach(node=>document.getElementById(node).classList.add(wallNodeClass));

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
/////////////////////////////////////////
const startFunction = function(){
  calcNeighborNodes(lowestCostNode);
}

const retraceSteps = function(){
  drawPath();
}
/////////////////////////////////////////
const drawPath = function(){
  while(lowestCostNode.coord !== startNode.coord){
    if(lowestCostNode.coord !== endNode){
    document.getElementById(lowestCostNode.coord).classList.remove(closedNodeClass);
    document.getElementById(lowestCostNode.coord).classList.add(finalPathNodeClass);
    }
    lowestCostNode = closedNodes.find(node=>node.coord === lowestCostNode.prevNode);
  } 
}

const testFunction = function(nodeChosen){
  openNodes.forEach((node, i)=>{
    if(node.coord === nodeChosen.coord && node.fCost > nodeChosen.fCost){
      openNodes = openNodes.filter((n, index)=>index !== i)
      openNodes.push(nodeChosen);
      // Mark node green
      document.getElementById(`${nodeChosen.coord}`).classList.add(openNodeClass);
    }})
    if(!(openNodes.some((node)=>node.coord === nodeChosen.coord))){
      openNodes.push(nodeChosen);
      // Mark node green
      document.getElementById(`${nodeChosen.coord}`).classList.add(openNodeClass);
    }
}
const calcNeighborNodes = function(currentNode){


   const splitCoords = currentNode.coord.slice().split('-');
   const yCoord = splitCoords[0];
   const xCoord = splitCoords[1];
   
   /////////////////////////////////////////////////////////////////// NORTH NEIGHBOR NODE
   // calculate north neighbor coordinates
   const northCoord = ((+yCoord + 1).toString() + '-' + xCoord);
   if(!(closedNodes.some((node)=>node.coord === northCoord)) && !(wallNodes.some((node)=>node === northCoord)) && (document.getElementById(northCoord))){     
      const northHCost = calcHCost(northCoord);
      const northNeighbor = new NodeCl(northCoord, (currentNode.gCost + 10), northHCost, currentNode.coord);
      testFunction(northNeighbor);
   }
   /////////////////////////////////////////////////////////////////// NORTH-EAST NEIGHBOR NODE
   const northEastCoord = (+yCoord + 1).toString() + '-' + (+xCoord + 1).toString();
   if(!(closedNodes.some((node)=>node.coord === northEastCoord)) && !(wallNodes.some((node)=>node === northEastCoord)) && (document.getElementById(northEastCoord))){
      const northEastHCost = calcHCost(northEastCoord);
      const northEastNeighbor = new NodeCl(northEastCoord, (currentNode.gCost + 14), northEastHCost, currentNode.coord);
      testFunction(northEastNeighbor);
   }
   /////////////////////////////////////////////////////////////////// EAST NEIGHBOR NODE
   const eastCoord = yCoord + '-' + (+xCoord + 1).toString();
   if(!(closedNodes.some((node)=>node.coord === eastCoord)) && !(wallNodes.some((node)=>node === eastCoord)) && (document.getElementById(eastCoord))){
      const eastHCost = calcHCost(eastCoord);
      const eastNeighbor = new NodeCl(eastCoord, (currentNode.gCost + 10), eastHCost, currentNode.coord);
      testFunction(eastNeighbor);
   }
   /////////////////////////////////////////////////////////////////// SOUTH-EAST NEIGHBOR NODE
   const southEastCoord = (+yCoord - 1).toString() + '-' + (+xCoord + 1).toString();
   if(!(closedNodes.some((node)=>node.coord === southEastCoord)) && !(wallNodes.some((node)=>node === southEastCoord)) && (document.getElementById(southEastCoord))){
      const southEastHCost = calcHCost(southEastCoord);
      const southEastNeighbor = new NodeCl(southEastCoord, (currentNode.gCost + 14), southEastHCost, currentNode.coord);
      testFunction(southEastNeighbor);
   }
   /////////////////////////////////////////////////////////////////// SOUTH NEIGHBOR NODE
   const southCoord = (+yCoord - 1).toString() + '-' + +xCoord;
   if(!(closedNodes.some((node)=>node.coord === southCoord)) && !(wallNodes.some((node)=>node === southCoord)) && (document.getElementById(southCoord))){
      const southHCost = calcHCost(southCoord);
      const southNeighbor = new NodeCl(southCoord, (currentNode.gCost + 10), southHCost, currentNode.coord);
      testFunction(southNeighbor);
   }
   /////////////////////////////////////////////////////////////////// SOUTH-WEST NEIGHBOR NODE
   const southWestCoord = (+yCoord - 1).toString() + '-' + (+xCoord - 1).toString();
   if(!(closedNodes.some((node)=>node.coord === southWestCoord)) && !(wallNodes.some((node)=>node === southWestCoord)) && (document.getElementById(southWestCoord))){
      const southWestHCost = calcHCost(southWestCoord);
      const southWestNeighbor = new NodeCl(southWestCoord, (currentNode.gCost + 14), southWestHCost, currentNode.coord);
      testFunction(southWestNeighbor);
   }
   /////////////////////////////////////////////////////////////////// WEST NEIGHBOR NODE
   const westCoord = yCoord + '-' + (+xCoord - 1).toString();
   if(!(closedNodes.some((node)=>node.coord === westCoord)) && !(wallNodes.some((node)=>node === westCoord)) && (document.getElementById(westCoord))){
      const westHCost = calcHCost(westCoord);
      const westNeighbor = new NodeCl(westCoord, (currentNode.gCost + 10), westHCost, currentNode.coord);
      testFunction(westNeighbor);
   }
   /////////////////////////////////////////////////////////////////// NORTH-WEST NEIGHBOR NODE
   const northWestCoord = (+yCoord + 1).toString() + '-' + (+xCoord - 1).toString();
   if(!(closedNodes.some((node)=>node.coord === northWestCoord)) && !(wallNodes.some((node)=>node === northWestCoord)) && (document.getElementById(northWestCoord))){
      const northWestHCost = calcHCost(northWestCoord);
      const northWestNeighbor = new NodeCl(northWestCoord, (currentNode.gCost + 14), northWestHCost, currentNode.coord);
      testFunction(northWestNeighbor);
   }

   lowestCostNode = openNodes[0];
   openNodes.forEach((node)=> {if(node.fCost < lowestCostNode.fCost) lowestCostNode = node});

   openNodes = openNodes.filter(node=>node.coord !== lowestCostNode.coord);
   document.getElementById(lowestCostNode.coord).classList.remove(openNodeClass);

   closedNodes.push(currentNode);
   if(currentNode !== startNode){
   document.getElementById(currentNode.coord).classList.add(closedNodeClass);
   }

  if(lowestCostNode.hCost !== 0) setTimeout(startFunction, 40);

  if(lowestCostNode.hCost === 0) setTimeout(retraceSteps, 100);

   
}

calcNeighborNodes(startNode);



