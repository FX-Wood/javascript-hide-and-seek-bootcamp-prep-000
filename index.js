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
  const domLists = document.querySelectorAll('ul.ranked-list');
  for (let listIndex = 0; listIndex < domLists.length; listIndex++) {
    let childItems = domLists[listIndex].children
    for (let childIndex = 0; childIndex < childItems.length; childIndex++) {
      let current = childItems[childIndex].innertext;
      current = tString(parseInt(current) + n)
    }
  }
}
