/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit"
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender"
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place"
];

function chooseRandomGenre() {
  // Deliverable 1: Your code here 👇
  let show = getRandomNumber(1, 3);
  switch (show){
    case 1:
      return "drama";
    case 2:
      return "fantasy";
    default:
      return "comedy";
  }
}

function displayRandomShow(genre) {
  // Deliverable 2: Your code here 👇
  if (genre === "random"){
    genre = chooseRandomGenre();
  }
  
  switch (genre) {
    case "drama":
      displayShow(dramaShows[getRandomNumber(0, dramaShows.length - 1)]);
      break;
    case "fantasy":
      displayShow(fantasyShows[getRandomNumber(0, fantasyShows.length - 1)]);
      break;
    case "comedy":
      displayShow(comedyShows[getRandomNumber(0, comedyShows.length - 1)]);
      break;
  }
  
}

