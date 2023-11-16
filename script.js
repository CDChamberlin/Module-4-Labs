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
