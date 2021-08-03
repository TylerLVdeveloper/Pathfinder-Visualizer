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

let endNode = "20-12";
const startNode = new NodeCl("3-8", 0, 0, 'none');


document.getElementById(endNode).classList.add(endNodeClass);
document.getElementById(startNode.coord).classList.add(startNodeClass);

const openNodes = [];
const closedNodes = [];

const calcHCost = function(node){
   const splitCoordsEndNode = endNode.slice().split('-');
   const yCoordEndNode = +splitCoordsEndNode[0];
   const xCoordEndNode = +splitCoordsEndNode[1];

   const splitCoordsCurrNode = node.slice().split('-');
   const yCoordCurrNode = +splitCoordsCurrNode[0];
   const xCoordCurrNode = +splitCoordsCurrNode[1];
   
   const hCost = ((yCoordEndNode - yCoordCurrNode) * 10) + ((xCoordEndNode - xCoordCurrNode) * 10);
   return hCost;
   
}



const calcNeighborNodes = function(currentNode){
   const splitCoords = currentNode.coord.slice().split('-');
   const yCoord = splitCoords[0];
   const xCoord = splitCoords[1];
   
   /////////////////////////////////////////////////////////////////// NORTH NEIGHBOR NODE
   // calculate north neighbor coordinates
   const northCoord = ((+yCoord + 1).toString() + '-' + xCoord);

   // calculate north neighbor H cost
   const northHCost = calcHCost(northCoord);

   // create north neighbor object 
   const northNeighbor = new NodeCl(northCoord, (currentNode.gCost + 10), northHCost, currentNode.coord);
   console.log(northNeighbor);


   /////////////////////////////////////////////////////////////////// NORTH-EAST NEIGHBOR NODE
   const northEastCoord = (+yCoord + 1).toString() + '-' + (+xCoord + 1).toString();

   const northEastHCost = calcHCost(northEastCoord);

   const northEastNeighbor = new NodeCl(northEastCoord, (currentNode.gCost + 14), northEastHCost, currentNode.coord);
   console.log(northEastNeighbor);



   const eastNeighbor = yCoord + '-' + (+xCoord + 1).toString();
   const southEastNeighbor = (+yCoord - 1).toString() + '-' + (+xCoord + 1).toString();
   const southNeighbor = (+yCoord - 1).toString() + '-' + +xCoord;
   const southWestNeighbor = (+yCoord - 1).toString() + '-' + (+xCoord - 1).toString();
   const westNeighbor = yCoord + '-' + (+xCoord - 1).toString();
   const northWestNeighbor = (+yCoord + 1).toString() + '-' + (+xCoord - 1).toString();
   
   document.getElementById(`${northNeighbor.coord}`).classList.add(openNodeClass);
   document.getElementById(`${northNeighbor.coord}`).textContent = 'N';

   document.getElementById(`${northEastNeighbor.coord}`).classList.add(openNodeClass);
   document.getElementById(`${northEastNeighbor.coord}`).textContent = 'NE';
   
   document.getElementById(eastNeighbor).textContent = 'E';
   document.getElementById(southEastNeighbor).textContent = 'SE';
   document.getElementById(southNeighbor).textContent = 'S';
   document.getElementById(southWestNeighbor).textContent = 'SW';
   document.getElementById(westNeighbor).textContent = 'W';
   document.getElementById(northWestNeighbor).textContent = 'NW';
}

calcNeighborNodes(startNode);