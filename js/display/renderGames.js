import { displayDetails } from "./displayDetails.js";
import { Display } from "../data/gamesData.js";
export async function renderGames(
  gamesContainer,
  naveLinks,
  gameDetails,
  detailsSection,
  gamesSection,
  closeBtn
) {
  // Default Category
  let category = "mmorpg";

  const displayGamesData = new Display(gamesContainer, category);

  // Handle Category and Active class
  naveLinks.forEach((link) => {
    link.addEventListener("click", async () => {
      // Remove Active Class
      naveLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add Active Class
      link.classList.add("active");
      category = link.getAttribute("data-category");
      displayGamesData.category = category;
      await displayGamesData.displayGames();
    });
  });

  await displayGamesData.displayGames();

  // Call Cards Elements
  const updatedCards = document.querySelectorAll(".card");

  displayDetails(
    gameDetails,
    updatedCards,
    detailsSection,
    gamesSection,
    closeBtn
  );
}
