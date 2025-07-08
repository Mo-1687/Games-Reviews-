export function displayLoading(show) {
  const loading = document.querySelector(".loading");
  show
    ? loading.classList.replace("d-none", "d-flex")
    : loading.classList.replace("d-flex", "d-none");
}
