import { displayLoading } from "../display/loading.js";

export class Details {
  constructor(gameDetails) {
    this.gameDetails = gameDetails;
    this.id = "";
    this.data = {};
  }

  async receiveData() {
    try {
      displayLoading(true);

      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`,
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
        throw new Error("Invalid ID");
      }

      this.data = await response.json();
    } catch (error) {
      displayLoading(false);
      console.log(error);
    }
  }

  async displayDetailsData() {
    await this.receiveData();

    this.gameDetails.innerHTML = `
      <div class="img-container col-md-4">
            <img src="${this.data.thumbnail}" alt="" class="w-100" />
          </div>
          <div class="col-md-8 description">
            <h2>Title: ${this.data.title}</h2>
            <ul class="list-unstyled d-flex gap-2 flex-column">
              <li>Genre: <span class="badge bg-primary ms-2">${this.data.genre}</span></li>
              <li>Platform: <span class="badge bg-primary ms-2">${this.data.platform}</span></li>
              <li>Status: <span class="badge bg-primary ms-2">${this.data.status}</span></li>
            </ul>
            <p class="small">
              ${this.data.description}
            </p>
            <a href="${this.data.game_url}" target="_blank" class="btn">Show Game</a>
          </div>
      `;
  }
}
