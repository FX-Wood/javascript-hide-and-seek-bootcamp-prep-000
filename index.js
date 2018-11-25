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
  const FirstRankedListInitLength = FirstRankedList.childElementCount
  for (i = FirstRankedListInitLength; i < n+FirstRankedListInitLength; i++) {
    const newLi = document.createElement("li");
    const newLiText = document.createTextNode(`${i}`)
    newLi.appendChild(newLiText);
    FirstRankedList.appendChild(newLi)
    
  }
}
