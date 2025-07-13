import { renderGames } from "./display/renderGames.js";
import { displayDetails } from "./display/displayDetails.js";

// Global Variables
const gamesContainer = document.querySelector(".games-container");
const naveLinks = document.querySelectorAll(".nav-link");
const detailsSection = document.querySelector(".details");
const gameDetails = document.querySelector(".game-details");
const gamesSection = document.querySelector(".games");
const closeBtn = document.querySelector("#closeBtn");
// Global Variables
renderGames(
  gamesContainer,
  naveLinks,
  gameDetails,
  detailsSection,
  gamesSection,
  closeBtn
);
