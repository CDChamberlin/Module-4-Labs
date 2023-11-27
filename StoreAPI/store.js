function addCard(img, title, price, description) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  // populate the template
  if (isValidHttpUrl(img)) {
    template.querySelector(".card-img-top").src = img;
    template.querySelector(".card-img-top").alt = description;
  }
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-subtitle").innerText = `$ ${price.toFixed(2)}`;
  template.querySelector(".card-text").innerText = description;
  document.querySelector("#card-list").appendChild(template);
}

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    json.forEach((element) => {
      addCard(element.image, element.title, element.price, element.description);
    });
  });

function isValidHttpUrl(string) {
  try {
    const newUrl = new URL(string);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch (err) {
    return false;
  }
}
