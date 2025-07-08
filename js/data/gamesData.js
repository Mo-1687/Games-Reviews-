import { displayLoading } from "../display/loading.js";
export class Display {
  constructor(gamesContainer, category) {
    this.gamesContainer = gamesContainer;
    this.category = category;
    this.gamesData = [];
  }

  async receiveGamesData() {
    try {
      displayLoading(true);
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "8a1bee3cd3mshd0c6493381342d9p187140jsn5574c23069bc",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );

      displayLoading(false);

      if (!response.ok) {
        throw new Error("Invalid Category");
      }

      const data = await response.json();
      this.gamesData = data;
    } catch (error) {
      displayLoading(false);
      console.log(error);
    }
  }

  async displayGames() {
    await this.receiveGamesData();
    let box = "";
    this.gamesData.forEach((game) => {
      let short_description = game.short_description.slice(0, 100);
      box += `
            <div class="col card bg-transparent h-100" id="${game.id}">
            <figure class="position-relative">
              <img
                src="${game.thumbnail}"
                alt="game"
                class="card-img-top h-100 object-fit-cover"
              />
            </figure>
            <div class="card-body px-0 ">
              <div class="d-flex align-items-center justify-content-between">
                <span>${game.title}</span>
                <span class="badge bg-primary p-2">Free</span>
              </div>
              <p class="text-center opacity-50 card-text small mt-2">
                ${short_description}
              </p>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between px-0"
            >
              <span class="badge">${game.genre}</span>
              <span class="badge">${game.platform}</span>
            </div>
          </div>
        `;
    });
    this.gamesContainer.innerHTML = box;
  }
}
