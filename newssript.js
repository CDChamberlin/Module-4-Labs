let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];


function addCard(title, context) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  // populate the template
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = context;
  document.querySelector("#card-list").appendChild(template);
}
function postNews() {
  const list = document.getElementById("card-list");
  while (list.hasChildNodes()) list.removeChild(list.firstChild);
  console.log(list)
  news.push({
    id: news.length,
    title: document.getElementById("newsTitle").value,
    content: document.getElementById("newsContent").value,
  });
  //console.log(news);
  document.getElementById("postNews").reset();
  update();
  return false;
}
function update(){
  news.forEach((item) => addCard(item.title, item.content));
}
