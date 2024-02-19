const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("seasons");
const landscapes = urlParams.get("harvesting_landscapes");
const alphabet = urlParams.get("title");

let urlmodifier = "";
let title = "";

if (query) {
  urlmodifier = `?seasons=cs.["${query}"]`;
  title = query;
} else if (landscapes) {
  urlmodifier = `?harvesting_landscapes=eq.${landscapes}`;
  title = landscapes;
} else if (alphabet) {
  urlmodifier = `?title=desc.${alphabet}`;
  title = alphabet;
}

const url = `https://pkjbphmcnorwfmrlmfci.supabase.co/rest/v1/VildMadData${urlmodifier}`;
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBramJwaG1jbm9yd2ZtcmxtZmNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MjUyNzQsImV4cCI6MjAyMzMwMTI3NH0.nLeOP6ZBdwY2RvoWnk5x8a-WlwRSbbsoQKcrRkSCBHI";

fetch(url, {
  headers: {
    apikey: apiKey,
  },
})
  .then((response) => response.json())
  .then(showMushrooms);

function showMushrooms(data) {
  document.querySelector(".subCategory").textContent = title;

  data.forEach((element) => {
    //Fra YT tutorial
    // const link = document.createElement("a");
    //link.href = `produkt.html?id=${element.id}`;
    //link.textContent = element.title;

    const product = document.querySelector("template").content;

    // Make a copy
    const myClone = product.cloneNode(true);

    // Change content
    myClone.querySelector(".title").textContent = element.title;
    //myClone.querySelector(".card-content").textContent = oneMushroom.season_0;

    myClone.querySelector(".mush-img").src = `${element.mush_img}`;
    console.log(element.id);

    const urlParamsCat = new URLSearchParams(window.location.search);
    const id = urlParamsCat.get("id");

    myClone.querySelector(".mushroom-card").setAttribute("href", `produkt.html?id=${element.id}`);

    // Append
    console.log("append");
    const parentElement = document.querySelector(".produktliste");
    parentElement.appendChild(myClone);

    //fra yt tutorial
    // document.body.appendChild(link);
  });
}

function goBack() {
  console.log("back");
  window.history.back();
}
