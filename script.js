function addCard(title = "My Card Title", text = "lorem ipsum ble bla") {
  // clone the template
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  // populate the template
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = text;
  // include the populated template into the page
  document.querySelector("#card-list").appendChild(template);
}
addCard();
addCard("Test Dynamic", "inserts random text")

// Exercise 2 test data
const data = [{name: 'bob', age: 23},
{name: 'alice', age: 39}]

// For exercise 3 use the following:
const artist = {
name: "Van Gogh",
portfolio:[
{title: "portrait", url:
"https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"},
{title: "sky", url:
"https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg" },
]
}