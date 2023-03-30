const form = document.querySelector("form");
const APP_ID = `627ac528`;
const APP_KEY = `aa52691efb068fc3ce0149b1f3cb341c`;

// const API_URL = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

const file = form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = event.target["input"].value;
  const API_URL = `https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const allResults = document.querySelector(".all-results");

  fetch(API_URL)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data.count);
      const introCard = document.querySelector(".intro-card");
      allResults.innerHTML = "";

      if (input) {
        introCard.setAttribute("hidden", "");
      }

      for (let i = 0; i < data.hits.length; i++) {
        let imageUrl = data.hits[i].recipe["image"];
        let title = data.hits[i].recipe["label"];
        let siteUrl = data.hits[i].recipe["url"];
        let calories = data.hits[i].recipe["calories"].toFixed(0);

        const searchResult = document.createElement("div");
        searchResult.classList.add("search-result");
        searchResult.innerHTML = `<div class="item">
    <img
      src="${imageUrl}"
    />
    <div class="container">
      <h1 class="title">${title}</h1>
      <a href="${siteUrl}" target="_blank">View Recipe</a>
    </div>
    <p class="item-data">Calories: ${calories}</p>
  </div>`;

        allResults.append(searchResult);
      }
    });

  form.reset();
});
