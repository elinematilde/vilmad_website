const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("seasons");

const url = `https://pkjbphmcnorwfmrlmfci.supabase.co/rest/v1/VildMadData?seasons=cs.["${query}"]`;
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBramJwaG1jbm9yd2ZtcmxtZmNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MjUyNzQsImV4cCI6MjAyMzMwMTI3NH0.nLeOP6ZBdwY2RvoWnk5x8a-WlwRSbbsoQKcrRkSCBHI";

fetch(url, {
  headers: {
    apikey: apiKey,
  },
})
  .then((response) => response.json())
  .then(showMushrooms);

function showMushrooms(data) {
  data.forEach((element) => {
    const link = document.createElement("a");
    link.href = `produkt.html?id=${element.id}`;
    link.textContent = element.title;

    document.body.appendChild(link);
  });
}

function goBack() {
  console.log("back");
  window.history.back();
}

// copy paste, skal lave cards ligesom produktliste
function listMushroom(oneMushroom) {
  console.log("listMushroom");
  const product = document.querySelector("template").content;

  // Make a copy
  const myClone = product.cloneNode(true);

  // Change content
  myClone.querySelector(".title").textContent = oneMushroom.title;
  //myClone.querySelector(".card-content").textContent = oneMushroom.season_0;

  myClone.querySelector(".mush-img").src = `${oneMushroom.mush_img}`;
  console.log(oneMushroom.id);

  const urlParamsCat = new URLSearchParams(window.location.search);
  const id = urlParamsCat.get("id");

  myClone.querySelector(".mushroom-card").setAttribute("href", `produkt.html?id=${oneMushroom.id}`);

  //if (((oneMushroom.season_0 = 0), 1, 2, 3)) {
  //  console.log(oneMushroom.season_0);
  // }

  // Append
  console.log("paste");
  const parentElement = document.querySelector(".produktliste");
  parentElement.appendChild(myClone);
}
