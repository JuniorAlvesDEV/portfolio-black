import Slide from "./Slide.js";

export default function instagramImages() {
  const token =
    "IGQVJYY29RQkw5Uzg2TkJnYkkwQThpVTJtdTJoY3FFUzBvODh2SzdjU05lb2U5RXRpT2lXdjEtMlFMWFNyOEVrQ2lTU0YybWdwSzNZAX003U1l6ejNlMm90SGpXejB1Q3RvYXhBcGF2MlFjTjQ4U0djOAZDZD";

  const link =
    "https://graph.instagram.com/me/media?access_token=" +
    token +
    "&fields=media_url,media_type";

  async function startFetch() {
    const instagramFetch = await fetch(link);
    const instagramJson = await instagramFetch.json();
    const instagramData = await instagramJson.data;

    instagramData.forEach((item) => {
      const newImg = document.querySelector("[data-new-image]");
      const createLi = createImages(item.media_url);
      newImg.appendChild(createLi);
    });

    const initSlideSobre = new Slide(
      '[data-slide-sobre="wrapper"]',
      '[data-slide-sobre="slide"]'
    );

    initSlideSobre.init();
    initSlideSobre.slideCenter(3);
  }

  function createImages(img) {
    const createLi = document.createElement("li");
    createLi.classList.add("img-instagram");
    createLi.innerHTML = `<img src="${img}" alt="">`;
    return createLi;
  }

  startFetch();
}
