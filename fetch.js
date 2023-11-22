const limit = 10;

axios
  .get("https://jsonplaceholder.typicode.com/posts?_limit=" + limit)
  .then((response) =>
    response.data.forEach((element) => {
      addCard(element.title, element.body);
    })
  );

function addCard(title, context) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  // populate the template
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = context;
  document.querySelector("#card-list").appendChild(template);
}
