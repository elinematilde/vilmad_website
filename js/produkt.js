const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = `https://pkjbphmcnorwfmrlmfci.supabase.co/rest/v1/VildMadData?id=eq.${id}`;

const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBramJwaG1jbm9yd2ZtcmxtZmNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MjUyNzQsImV4cCI6MjAyMzMwMTI3NH0.nLeOP6ZBdwY2RvoWnk5x8a-WlwRSbbsoQKcrRkSCBHI"; // Replace "YOUR_API_KEY" with your actual API key

fetch(url, {
  headers: {
    apikey: apiKey,
  },
})
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(data) {
  console.log(data);

  const oneMushroom = data[0];

  document.querySelector(".produkth1").textContent = oneMushroom.title;
  document.querySelector(".title").textContent = oneMushroom.title;
  document.querySelector(".showId").textContent = oneMushroom.id;
  document.querySelector(".mushSeason").textContent = oneMushroom.seasons;
  document.querySelector(".mush-img").src = `${oneMushroom.mush_img}`;
  document.querySelector(".description").textContent = oneMushroom.description;
  document.querySelector(".harvestingLandscape1").textContent = oneMushroom.harvesting_landscapes;
  document.querySelector(".harvestingLandscape2").textContent = oneMushroom.harvesting_landscapes;
  document.querySelector(".headCatagory").textContent = oneMushroom.head_category;
  document.querySelector(".card .img2").src = `${oneMushroom.landscape_img}`;

  if ((oneMushroom.season_1 = 5)) {
    console.log("June");
  }
}
