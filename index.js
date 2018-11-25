function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function deepestChild() {
  const grandNode = document.getElementById("grand-node");
  const grandNodeChildren = grandNode.querySelectorAll("*");
  return grandNodeChildren[grandNodeChildren.length-1]
}

function increaseRankBy(n)  {
  const FirstRankedList = document.querySelector('ul.ranked-list')
  for (i = 0; i < n+FirstRankedList.childElementCount; i++) {
    if
  }
}
