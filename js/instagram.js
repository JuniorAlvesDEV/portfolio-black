export default function instagramImages() {}

const token =
  "IGQVJXaVdBa3FISzBPNGJ5bGY3S1dldXN6WENGRUNCRzJBazg5QmpLTzFhaUJvRW1wdTdxSk1zT01xZA1pjYWE0bXRLSHFkc21JQmlaSlVyeEs0QjE3NUlLZAURfVG52Y0wxYlh3N0twbXVCWEVNcW1tVgZDZD";

const link =
  "https://graph.instagram.com/me/media?access_token=" +
  token +
  "&fields=media_url,media_type,caption,permalink";

async function getData() {
  const instagramFetch = await fetch(link);
  const instagramJson = await instagramFetch.json();
  const instagramData = await instagramJson.data;

  instagramData.forEach((item) => {
    const newImg = document.querySelector("[data-new-image]");
    const createLi = createImages(item.media_url);

    newImg.appendChild(createLi);
  });
}

function createImages(img) {
  const createLi = document.createElement("li");
  createLi.classList.add("img-instagram");
  createLi.innerHTML = `<img src="${img}" alt="">`;

  return createLi;
}

getData();
