//https://pkjbphmcnorwfmrlmfci.supabase.co

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBramJwaG1jbm9yd2ZtcmxtZmNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MjUyNzQsImV4cCI6MjAyMzMwMTI3NH0.nLeOP6ZBdwY2RvoWnk5x8a-WlwRSbbsoQKcrRkSCBHI

fetch("https://pkjbphmcnorwfmrlmfci.supabase.co/rest/v1/VildMadData?", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBramJwaG1jbm9yd2ZtcmxtZmNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MjUyNzQsImV4cCI6MjAyMzMwMTI3NH0.nLeOP6ZBdwY2RvoWnk5x8a-WlwRSbbsoQKcrRkSCBHI",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(data) {
  // We have the data
  console.log(data);
  console.log("heeey");
  data.forEach(listMushroom);
}

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

  myClone.querySelector(".mushroom-card").setAttribute("href", `produkt.html?id=${oneMushroom.id}`);

  //if (((oneMushroom.season_0 = 0), 1, 2, 3)) {
  //  console.log(oneMushroom.season_0);
  // }

  function fetchTest() {
    console.log("test");
    //const test = ``;

    //document.querySelector(".test-button").setAttribute("href", `produkt.html?id=${oneMushroom.id}`);
    document.querySelector(".test-button").setAttribute("href", `$produktliste.html?id=103`);
  }

  // Append
  console.log("paste");
  const parentElement = document.querySelector(".produktliste");
  parentElement.appendChild(myClone);
}

// function test() {
//   console.log("test");
//   //const test = ``;

//   //document.querySelector(".test-button").setAttribute("href", `produkt.html?id=${oneMushroom.id}`);
//   document.querySelector.setAttribute("href", `${oneMushroom.id}`);
// }
