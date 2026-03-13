/*
  Grundidee:
  - contentItems enthält die Inhalte, jeweils mit zwei Varianten.
  - Für jedes Item wird eine Zahl vergeben.
  - Zu jeder Zahl werden zwei Buttons erzeugt (hell/dunkel) und zufällig im Spielfeld verteilt.
  - Klick auf einen Button öffnet die zugehörige Variante im Modal.
*/

const contentItems = [
  {
    id: 1,
    variants: [
      {
        label: "Variante hell",
        author: "Dr. med. Beispiel",
        text:
          "Dies ist eine Beispielvariante eines medizinischen Textes. Ersetze diesen Text durch deine echten Inhalte.",
        link: "https://www.aponet.de/",
        image:
          "https://picsum.photos/seed/medizin-hell/800/600",
      },
      {
        label: "Variante dunkel",
        author: "Dr. med. Beispiel",
        text:
          "Dies ist die alternative Variante desselben Inhalts, z. B. mit anderer Tonalität oder Detailtiefe.",
        link: "https://www.abda.de/",
        image:
          "https://picsum.photos/seed/medizin-dunkel/800/600",
      },
    ],
  },
  {
    id: 2,
    variants: [
      {
        label: "Variante hell",
        author: "Apothekerin Musterfrau",
        text:
          "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "https://www.aponet.de/artikel",
        image:
          "https://picsum.photos/seed/apotheke-hell/800/600",
      },
      {
        label: "Variante dunkel",
        author: "Apothekerin Musterfrau",
        text:
          "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "https://www.deutsche-apotheker-zeitung.de/",
        image:
          "https://picsum.photos/seed/apotheke-dunkel/800/600",
      },
    ],
  },
];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createButton(number, variantIndex, item) {
  const button = document.createElement("button");
  button.className = "number-button";
  const isLight = variantIndex === 0;
  button.classList.add(isLight ? "number-button--light" : "number-button--dark");
  button.type = "button";
  button.textContent = String(number);

  button.dataset.number = String(number);
  button.dataset.variantIndex = String(variantIndex);
  button.dataset.itemId = String(item.id);

  return button;
}

function placeButtonRandomly(button, containerRect) {
  // Wir arbeiten mit Prozentwerten und zentrieren via translate(-50%, -50%),
  // damit die Buttons innerhalb des Feldes bleiben.
  const marginPercent = 8; // kleiner Rand zum Spielfeldrand
  const top =
    marginPercent + Math.random() * (100 - marginPercent * 2);
  const left =
    marginPercent + Math.random() * (100 - marginPercent * 2);

  button.style.top = `${top}%`;
  button.style.left = `${left}%`;
  button.style.transform = "translate(-50%, -50%)";
}

function openModal({ number, variantLabel, author, text, link, image }) {
  const modal = document.getElementById("content-modal");
  const numberEl = document.getElementById("modal-number");
  const variantEl = document.getElementById("modal-variant");
  const authorEl = document.getElementById("modal-author");
  const textEl = document.getElementById("modal-text");
  const linkEl = document.getElementById("modal-link");
  const imageEl = document.getElementById("modal-image");

  numberEl.textContent = number;
  variantEl.textContent = variantLabel;
  authorEl.textContent = author;
  textEl.textContent = text;
  linkEl.href = link;
  imageEl.src = image;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("content-modal");
  const imageEl = document.getElementById("modal-image");

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  imageEl.removeAttribute("src");
}

function findItemById(id) {
  return contentItems.find((item) => item.id === id) || null;
}

function initPlayfield() {
  const playfield = document.getElementById("playfield");
  if (!playfield) return;

  const numbers = shuffle(
    contentItems.map((_, index) => index + 1)
  );

  const rect = playfield.getBoundingClientRect();

  numbers.forEach((number, idx) => {
    const item = contentItems[idx];
    if (!item) return;

    [0, 1].forEach((variantIndex) => {
      const button = createButton(number, variantIndex, item);
      placeButtonRandomly(button, rect);

      button.addEventListener("click", () => {
        const variant = item.variants[variantIndex];
        openModal({
          number,
          variantLabel: variant.label,
          author: variant.author,
          text: variant.text,
          link: variant.link,
          image: variant.image,
        });
      });

      playfield.appendChild(button);
    });
  });
}

function initModal() {
  const modal = document.getElementById("content-modal");
  if (!modal) return;

  modal.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.hasAttribute("data-close-modal")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initPlayfield();
  initModal();
});
