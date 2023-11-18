function isValidHttpUrl(string) {
  try {
    const newUrl = new URL(string);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch (err) {
    return false;
  }
}

function addCard(
  title = "My Card Title",
  text = "lorem ipsum ble bla",
  url = null
) {
  // clone the template
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  // populate the template
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = text;
  if (isValidHttpUrl(url)) {
    const node = document.createElement("img");
    node.src = url;
    node.alt = title + "'s " + text;
    template.querySelector('.card-body').appendChild(node);
  }
  // include the populated template into the page
  document.querySelector("#card-list").appendChild(template);
}
//addCard();
//addCard("Test Dynamic", "inserts random text")

// Exercise 2 test data
const data = [
  { name: "bob", age: 23 },
  { name: "alice", age: 39 },
];

//data.forEach((obj) => addCard(obj.name, obj.age))

// For exercise 3 use the following:
const artist = [
  {
    name: "Van Gogh",
    portfolio: [
      {
        title: "Portrait",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
      },
      {
        title: "Sky",
        url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
      },
    ],
  },
  {
    name: "Michelangelo",
    portfolio: [
      {
        title: "Sistine Chapel Ceiling",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Sistine_Chapel_ceiling_02_%28brightened%29.jpg/220px-Sistine_Chapel_ceiling_02_%28brightened%29.jpg",
      },
      {
        title: "The Creation of Adam",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/270px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
      },
    ],
  },
  {
    name: "Rembrandt",
    portfolio: [
      {
        title: "Storm on the Sea of Galilee",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg/800px-Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg",
      },
      {
        title: "Abduction of Europa",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rembrandt_Harmensz._van_Rijn_-_The_Abduction_of_Europa_-_Google_Art_Project.jpg/1280px-Rembrandt_Harmensz._van_Rijn_-_The_Abduction_of_Europa_-_Google_Art_Project.jpg",
      },
    ],
  },
  {
    name: "Leonardo",
    portfolio: [
      {
        title: "The Last Supper",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/350px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg"
      }
    ]
  }
];

// Append child to add image.
artist.forEach((art) => {
  for (i = 0; i < art.portfolio.length; i++) {
    addCard(art.name, art.portfolio[i].title, art.portfolio[i].url);
  }
});

