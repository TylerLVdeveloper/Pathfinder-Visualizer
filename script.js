// Create Board
const board = document.getElementById("board");
const buttonsWrapper = document.getElementById("buttons_wrapper");

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
  for (let i = row.length; i--; i >= 0) {
    const spaceHTML = `<div class="space" id="${rowIndex + 1}-${
      row[i]
    }"></div>`;
    board.insertAdjacentHTML("afterbegin", spaceHTML);
  }
});

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
class NodeCl {
  constructor(coord, gCost, hCost, prevNode) {
    this.gCost = gCost;
    this.hCost = hCost;
    this.fCost = this.gCost + this.hCost;

    this.coord = coord;
    this.prevNode = prevNode;
  }

  recalcCosts(gCost, hCost) {
    this.gCost = gCost;
    this.hCost = hCost;
    this.fCost = this.gCost + this.hCost;
  }
}

// Node Classes
const spaceClass = "space";
const endNodeClass = "end_node_class";
const startNodeClass = "start_node_class";
const openNodeClass = "open_node_class";
const closedNodeClass = "closed_node_class";
const wallNodeClass = "wall_node_class";
const finalPathNodeClass = "final_path_node_class";

// Menu Buttons
const runBtn = document.getElementById("run_btn");
const clearBtn = document.getElementById("clear_btn");
const startBtn = document.getElementById("start_point_btn");
const endBtn = document.getElementById("end_point_btn");
const wallBtn = document.getElementById("wall_point_btn");

// Menu Button Classes
const selectedBtnClass = "selected_btn";
const unselectedBtnClass = "unselected_btn";
const disabledBtnClass = "disabled_btn";

let endNode = "21-14";
const startNode = new NodeCl("3-8", 0, 0, "none");
let lowestCostNode;

let finalPathNodes = [];
let openNodes = [];
let closedNodes = [];
let wallNodes = [];

document.getElementById(endNode).classList.add(endNodeClass);
document.getElementById(startNode.coord).classList.add(startNodeClass);
wallNodes.forEach((node) =>
  document.getElementById(node).classList.add(wallNodeClass)
);

const calcHCost = function (node) {
  const splitCoordsEndNode = endNode.slice().split("-");
  const yCoordEndNode = +splitCoordsEndNode[0];
  const xCoordEndNode = +splitCoordsEndNode[1];

  const splitCoordsCurrNode = node.slice().split("-");
  const yCoordCurrNode = +splitCoordsCurrNode[0];
  const xCoordCurrNode = +splitCoordsCurrNode[1];

  const hCost =
    Math.abs(yCoordEndNode - yCoordCurrNode) * 10 +
    Math.abs(xCoordEndNode - xCoordCurrNode) * 10;
  return hCost;
};
/////////////////////////////////////////
const chooseStartPoint = function (e) {
  if (
    !e.target.classList.contains(startNodeClass) &&
    !e.target.classList.contains(endNodeClass) &&
    !e.target.classList.contains(wallNodeClass) &&
    e.target.classList.contains(spaceClass)
  ) {
    document
      .querySelector(`.${startNodeClass}`)
      .classList.remove(startNodeClass);
    e.target.classList.add(startNodeClass);
    startNode.coord = e.target.id;
  }
};

const startPointBegin = function () {
  endBtn.classList.remove(selectedBtnClass);
  endBtn.classList.add(unselectedBtnClass);
  board.removeEventListener("click", chooseEndPoint);
  wallBtn.classList.remove(selectedBtnClass);
  wallBtn.classList.add(unselectedBtnClass);
  board.removeEventListener("click", chooseWallPoint);
  clearPathValues();
  startBtn.classList.remove(unselectedBtnClass);
  startBtn.classList.add(selectedBtnClass);
  board.addEventListener("click", chooseStartPoint);
};

const chooseEndPoint = function (e) {
  if (
    !e.target.classList.contains(startNodeClass) &&
    !e.target.classList.contains(endNodeClass) &&
    !e.target.classList.contains(wallNodeClass) &&
    e.target.classList.contains(spaceClass)
  ) {
    document.querySelector(`.${endNodeClass}`).classList.remove(endNodeClass);
    e.target.classList.add(endNodeClass);
    endNode = e.target.id;
  }
};

const endPointBegin = function () {
  startBtn.classList.remove(selectedBtnClass);
  startBtn.classList.add(unselectedBtnClass);
  board.removeEventListener("click", chooseStartPoint);
  wallBtn.classList.remove(selectedBtnClass);
  wallBtn.classList.add(unselectedBtnClass);
  board.removeEventListener("click", chooseWallPoint);
  clearPathValues();
  endBtn.classList.remove(unselectedBtnClass);
  endBtn.classList.add(selectedBtnClass);
  board.addEventListener("click", chooseEndPoint);
};

const chooseWallPoint = function (e) {
  if (
    !e.target.classList.contains(startNodeClass) &&
    !e.target.classList.contains(endNodeClass) &&
    !e.target.classList.contains(wallNodeClass) &&
    e.target.classList.contains(spaceClass)
  ) {
    e.target.classList.add(wallNodeClass);
    wallNodes.push(e.target.id);
  }
};

const chooseWallPointDrag = function (e) {
  if (
    e.buttons == 1 &&
    !e.target.classList.contains(startNodeClass) &&
    !e.target.classList.contains(endNodeClass) &&
    !e.target.classList.contains(wallNodeClass) &&
    e.target.classList.contains(spaceClass)
  ) {
    e.target.classList.add(wallNodeClass);
    wallNodes.push(e.target.id);
  }
};

const wallPointBegin = function () {
  endBtn.classList.remove(selectedBtnClass);
  endBtn.classList.add(unselectedBtnClass);
  board.removeEventListener("click", chooseEndPoint);
  startBtn.classList.remove(selectedBtnClass);
  startBtn.classList.add(unselectedBtnClass);
  board.removeEventListener("click", chooseStartPoint);
  clearPathValues();
  wallBtn.classList.remove(unselectedBtnClass);
  wallBtn.classList.add(selectedBtnClass);
  board.addEventListener("click", chooseWallPoint);
  board.addEventListener("mouseover", chooseWallPointDrag);
  board.addEventListener("touchmove", chooseWallPoint);
};

const clearPathValues = function () {
  openNodes.forEach((node) =>
    document.getElementById(`${node.coord}`).classList.remove(openNodeClass)
  );
  openNodes = [];
  closedNodes.forEach((node) =>
    document.getElementById(`${node.coord}`).classList.remove(closedNodeClass)
  );
  closedNodes = [];
  finalPathNodes.forEach((node) =>
    document
      .getElementById(`${node.coord}`)
      .classList.remove(finalPathNodeClass)
  );
  finalPathNodes = [];
};

const clearAllValues = function () {
  clearPathValues();
  wallNodes.forEach((coord) =>
    document.getElementById(`${coord}`).classList.remove(wallNodeClass)
  );
  wallNodes = [];
};
const initialCalcNodes = function () {
  //Disable menu buttons while path finder is running
  buttonsWrapper.classList.add(disabledBtnClass);
  endBtn.classList.remove(selectedBtnClass);
  startBtn.classList.remove(selectedBtnClass);
  wallBtn.classList.remove(selectedBtnClass);
  endBtn.classList.add(unselectedBtnClass);
  startBtn.classList.add(unselectedBtnClass);
  wallBtn.classList.add(unselectedBtnClass);
  runBtn.removeEventListener("click", initialCalcNodes);
  clearBtn.removeEventListener("click", clearAllValues);
  startBtn.removeEventListener("click", startPointBegin);
  board.removeEventListener("click", chooseStartPoint);
  endBtn.removeEventListener("click", endPointBegin);
  board.removeEventListener("click", chooseEndPoint);
  wallBtn.removeEventListener("click", wallPointBegin);
  board.removeEventListener("click", chooseWallPoint);
  board.removeEventListener("mouseover", chooseWallPointDrag);
  board.removeEventListener("touchmove", chooseWallPoint);

  clearPathValues();
  calcNeighborNodes(startNode);
};

const calcNodes = function () {
  calcNeighborNodes(lowestCostNode);
};

const retraceSteps = function () {
  drawPath();
};
/////////////////////////////////////////
const drawPath = function () {
  while (lowestCostNode.coord !== startNode.coord) {
    if (lowestCostNode.coord !== endNode) {
      document
        .getElementById(lowestCostNode.coord)
        .classList.remove(closedNodeClass);
      document
        .getElementById(lowestCostNode.coord)
        .classList.add(finalPathNodeClass);
      finalPathNodes.push(lowestCostNode);
    }
    lowestCostNode = closedNodes.find(
      (node) => node.coord === lowestCostNode.prevNode
    );
  }
  // Re-Enable menu buttons
  buttonsWrapper.classList.remove(disabledBtnClass);
  runBtn.addEventListener("click", initialCalcNodes);
  clearBtn.addEventListener("click", clearAllValues);
  startBtn.addEventListener("click", startPointBegin);
  endBtn.addEventListener("click", endPointBegin);
  wallBtn.addEventListener("click", wallPointBegin);
};

const storeNode = function (nodeChosen) {
  openNodes.forEach((node, i) => {
    if (node.coord === nodeChosen.coord && node.fCost > nodeChosen.fCost) {
      openNodes = openNodes.filter((n, index) => index !== i);
      openNodes.push(nodeChosen);
    }
  });
  if (!openNodes.some((node) => node.coord === nodeChosen.coord)) {
    openNodes.push(nodeChosen);
    // Mark node green
    document.getElementById(`${nodeChosen.coord}`).classList.add(openNodeClass);
  }
};
const calcNeighborNodes = function (currentNode) {
  try {
    const splitCoords = currentNode.coord.slice().split("-");
    const yCoord = splitCoords[0];
    const xCoord = splitCoords[1];

    /////////////////////////////////////////////////////////////////// NORTH NEIGHBOR NODE
    // calculate north neighbor coordinates
    const northCoord = (+yCoord + 1).toString() + "-" + xCoord;
    if (
      !closedNodes.some((node) => node.coord === northCoord) &&
      !wallNodes.some((node) => node === northCoord) &&
      document.getElementById(northCoord)
    ) {
      const northHCost = calcHCost(northCoord);
      const northNeighbor = new NodeCl(
        northCoord,
        currentNode.gCost + 10,
        northHCost,
        currentNode.coord
      );
      storeNode(northNeighbor);
    }
    /////////////////////////////////////////////////////////////////// NORTH-EAST NEIGHBOR NODE
    const northEastCoord =
      (+yCoord + 1).toString() + "-" + (+xCoord + 1).toString();
    if (
      !closedNodes.some((node) => node.coord === northEastCoord) &&
      !wallNodes.some((node) => node === northEastCoord) &&
      document.getElementById(northEastCoord)
    ) {
      const northEastHCost = calcHCost(northEastCoord);
      const northEastNeighbor = new NodeCl(
        northEastCoord,
        currentNode.gCost + 14,
        northEastHCost,
        currentNode.coord
      );
      storeNode(northEastNeighbor);
    }
    /////////////////////////////////////////////////////////////////// EAST NEIGHBOR NODE
    const eastCoord = yCoord + "-" + (+xCoord + 1).toString();
    if (
      !closedNodes.some((node) => node.coord === eastCoord) &&
      !wallNodes.some((node) => node === eastCoord) &&
      document.getElementById(eastCoord)
    ) {
      const eastHCost = calcHCost(eastCoord);
      const eastNeighbor = new NodeCl(
        eastCoord,
        currentNode.gCost + 10,
        eastHCost,
        currentNode.coord
      );
      storeNode(eastNeighbor);
    }
    /////////////////////////////////////////////////////////////////// SOUTH-EAST NEIGHBOR NODE
    const southEastCoord =
      (+yCoord - 1).toString() + "-" + (+xCoord + 1).toString();
    if (
      !closedNodes.some((node) => node.coord === southEastCoord) &&
      !wallNodes.some((node) => node === southEastCoord) &&
      document.getElementById(southEastCoord)
    ) {
      const southEastHCost = calcHCost(southEastCoord);
      const southEastNeighbor = new NodeCl(
        southEastCoord,
        currentNode.gCost + 14,
        southEastHCost,
        currentNode.coord
      );
      storeNode(southEastNeighbor);
    }
    /////////////////////////////////////////////////////////////////// SOUTH NEIGHBOR NODE
    const southCoord = (+yCoord - 1).toString() + "-" + +xCoord;
    if (
      !closedNodes.some((node) => node.coord === southCoord) &&
      !wallNodes.some((node) => node === southCoord) &&
      document.getElementById(southCoord)
    ) {
      const southHCost = calcHCost(southCoord);
      const southNeighbor = new NodeCl(
        southCoord,
        currentNode.gCost + 10,
        southHCost,
        currentNode.coord
      );
      storeNode(southNeighbor);
    }
    /////////////////////////////////////////////////////////////////// SOUTH-WEST NEIGHBOR NODE
    const southWestCoord =
      (+yCoord - 1).toString() + "-" + (+xCoord - 1).toString();
    if (
      !closedNodes.some((node) => node.coord === southWestCoord) &&
      !wallNodes.some((node) => node === southWestCoord) &&
      document.getElementById(southWestCoord)
    ) {
      const southWestHCost = calcHCost(southWestCoord);
      const southWestNeighbor = new NodeCl(
        southWestCoord,
        currentNode.gCost + 14,
        southWestHCost,
        currentNode.coord
      );
      storeNode(southWestNeighbor);
    }
    /////////////////////////////////////////////////////////////////// WEST NEIGHBOR NODE
    const westCoord = yCoord + "-" + (+xCoord - 1).toString();
    if (
      !closedNodes.some((node) => node.coord === westCoord) &&
      !wallNodes.some((node) => node === westCoord) &&
      document.getElementById(westCoord)
    ) {
      const westHCost = calcHCost(westCoord);
      const westNeighbor = new NodeCl(
        westCoord,
        currentNode.gCost + 10,
        westHCost,
        currentNode.coord
      );
      storeNode(westNeighbor);
    }
    /////////////////////////////////////////////////////////////////// NORTH-WEST NEIGHBOR NODE
    const northWestCoord =
      (+yCoord + 1).toString() + "-" + (+xCoord - 1).toString();
    if (
      !closedNodes.some((node) => node.coord === northWestCoord) &&
      !wallNodes.some((node) => node === northWestCoord) &&
      document.getElementById(northWestCoord)
    ) {
      const northWestHCost = calcHCost(northWestCoord);
      const northWestNeighbor = new NodeCl(
        northWestCoord,
        currentNode.gCost + 14,
        northWestHCost,
        currentNode.coord
      );
      storeNode(northWestNeighbor);
    }

    lowestCostNode = openNodes[0];
    openNodes.forEach((node) => {
      if (node.fCost < lowestCostNode.fCost) lowestCostNode = node;
    });

    openNodes = openNodes.filter((node) => node.coord !== lowestCostNode.coord);
    document
      .getElementById(lowestCostNode.coord)
      .classList.remove(openNodeClass);

    closedNodes.push(currentNode);
    if (currentNode !== startNode) {
      document.getElementById(currentNode.coord).classList.add(closedNodeClass);
    }

    if (lowestCostNode.hCost !== 0) setTimeout(calcNodes, 30);

    if (lowestCostNode.hCost === 0) setTimeout(retraceSteps, 100);
  } catch (error) {
    console.log("no path found");
    // Re-Enable menu buttons
    buttonsWrapper.classList.remove(disabledBtnClass);
    runBtn.addEventListener("click", initialCalcNodes);
    clearBtn.addEventListener("click", clearAllValues);
    startBtn.addEventListener("click", startPointBegin);
    endBtn.addEventListener("click", endPointBegin);
    wallBtn.addEventListener("click", wallPointBegin);
  }
};

runBtn.addEventListener("click", initialCalcNodes);
clearBtn.addEventListener("click", clearAllValues);
startBtn.addEventListener("click", startPointBegin);
endBtn.addEventListener("click", endPointBegin);
wallBtn.addEventListener("click", wallPointBegin);
