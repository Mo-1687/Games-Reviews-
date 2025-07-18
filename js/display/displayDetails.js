import { Details } from "../data/gamesDetails.js";
export function displayDetails(
  gameDetails,
  detailsSection,
  gamesSection,
  closeBtn,
  cards
) {
  const detailsData = new Details(gameDetails);
  //   Get ID

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("id");
      detailsData.id = id;
      detailsData.displayDetailsData(gameDetails);
      detailsSection.classList.remove("d-none");
      gamesSection.classList.add("d-none");
    });
  });

  //   Close Button
  closeBtn.addEventListener("click", () => {
    detailsSection.classList.add("d-none");
    gamesSection.classList.remove("d-none");
  });
}
