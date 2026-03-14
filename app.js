/*
  Grundidee:
  - contentItems enthält die Inhalte, jeweils mit zwei Varianten.
  - Für jedes Item wird eine Zahl vergeben.
  - Zu jeder Zahl werden zwei Buttons erzeugt (hell/dunkel) und zufällig im Spielfeld verteilt.
  - Klick auf einen Button öffnet das Modal mit einer Variante.
  - Zusätzlich wird bei jedem Öffnen ein zufälliges Icon aus dem Sprite gewählt.
*/

const contentItems = [
  {
    id: 1,
    sprite: "fall1",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Dies ist eine Beispielvariante eines medizinischen Textes. Ersetze diesen Text durch deine echten Inhalte.",
        link: "case/fall1_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Dies ist die alternative Variante desselben Inhalts, z. B. mit anderer Tonalität oder Detailtiefe.",
        link: "case/fall1_lang.pdf"
      }
    ]
  },
  {
    id: 2,
    sprite: "fall2",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall2_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall2_lang.pdf"
      }
    ]
  },
  {
    id: 3,
    sprite: "fall3",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall3_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall3_lang.pdf"
      }
    ]
  },
  {
    id: 4,
    sprite: "fall4",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall4_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall4_lang.pdf"
      }
    ]
  },
  {
    id: 5,
    sprite: "fall5",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall5_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall5_lang.pdf"
      }
    ]
  },
  {
    id: 6,
    sprite: "fall6",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall6_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall6_lang.pdf"
      }
    ]
  },
  {
    id: 7,
    sprite: "fall7",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall7_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall7_lang.pdf"
      }
    ]
  },
  {
    id: 8,
    sprite: "fall8",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall8_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall8_lang.pdf"
      }
    ]
  },
  {
    id: 9,
    sprite: "fall9",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall9_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall9_lang.pdf"
      }
    ]
  },
  {
    id: 10,
    sprite: "fall10",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall10_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall10_lang.pdf"
      }
    ]
  },
  {
    id: 11,
    sprite: "fall11",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall11_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall11_lang.pdf"
      }
    ]
  },
  {
    id: 12,
    sprite: "fall12",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall12_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall12_lang.pdf"
      }
    ]
  },
  {
    id: 13,
    sprite: "fall13",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall13_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall13_lang.pdf"
      }
    ]
  },
  {
    id: 14,
    sprite: "fall14",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall14_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall14_lang.pdf"
      }
    ]
  },
  {
    id: 15,
    sprite: "fall15",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall15_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall15_lang.pdf"
      }
    ]
  },
  {
    id: 16,
    sprite: "fall16",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall16_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall16_lang.pdf"
      }
    ]
  },
  {
    id: 17,
    sprite: "fall17",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall17_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall17_lang.pdf"
      }
    ]
  },
  {
    id: 18,
    sprite: "fall18",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall18_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall18_lang.pdf"
      }
    ]
  },
  {
    id: 19,
    sprite: "fall19",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall19_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall19_lang.pdf"
      }
    ]
  },
  {
    id: 20,
    sprite: "fall20",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall20_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall20_lang.pdf"
      }
    ]
  },
  {
    id: 21,
    sprite: "fall21",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall21_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall21_lang.pdf"
      }
    ]
  },
  {
    id: 22,
    sprite: "fall22",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall22_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall22_lang.pdf"
      }
    ]
  },
  {
    id: 23,
    sprite: "fall23",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall23_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall23_lang.pdf"
      }
    ]
  },
  {
    id: 24,
    sprite: "fall24",
    variants: [
      {
        label: "Kurzversion",
        author: "Autor: unbekannt",
        text:
            "Kurzer Hinweistext zur richtigen Einnahme von Arzneimitteln. Diese Daten kannst du dynamisch ersetzen.",
        link: "case/fall24_kurz.pdf"
      },
      {
        label: "Langversion",
        author: "Autor: unbekannt",
        text:
            "Alternative Formulierung desselben Hinweises, z. B. für ein anderes Medium oder eine andere Zielgruppe.",
        link: "case/fall24_lang.pdf"
      }
    ]
  }
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

// NEU – mit Collision Detection
const GAP = 20; // px Mindestabstand zwischen Buttons

function overlaps(a, b) {
  return !(
      a.x + a.w + GAP < b.x ||
      b.x + b.w + GAP < a.x ||
      a.y + a.h + GAP < b.y ||
      b.y + b.h + GAP < a.y
  );
}

function placeButtonRandomly(button, container, placedButtons) {
  const btnSize = 56; // px – Größe deiner Buttons (aus style.css anpassen)
  const pad = 20;     // px Rand zum Spielfeldrand

  const maxX = container.clientWidth  - btnSize - pad;
  const maxY = container.clientHeight - btnSize - pad;

  let pos, tries = 0;
  do {
    pos = {
      x: pad + Math.random() * (maxX - pad),
      y: pad + Math.random() * (maxY - pad),
      w: btnSize,
      h: btnSize,
    };
    tries++;
  } while (placedButtons.some(p => overlaps(pos, p)) && tries < 300);

  placedButtons.push(pos);                      // merken für nächste Buttons
  button.style.left      = `${pos.x}px`;
  button.style.top       = `${pos.y}px`;
  button.style.transform = 'none';              // kein translate mehr nötig
}

function openModal({ number, variantLabel, author, text, link, iconIndex, spriteKey }) {
  const modal = document.getElementById("content-modal");
  const numberEl = document.getElementById("modal-number");
  const variantEl = document.getElementById("modal-variant");
  const authorEl = document.getElementById("modal-author");
  const textEl = document.getElementById("modal-text");
  const linkEl = document.getElementById("modal-link");
  const iconEl = document.getElementById("modal-icon");

  numberEl.textContent = number;
  variantEl.textContent = variantLabel;
  authorEl.textContent = author;
  textEl.textContent = text;
  linkEl.href = link;

  // Basis-Klassen setzen
  iconEl.className = "modal-icon icon-sprite";

  // Sprite nach Fall wählen, z. B. icon-sprite-fall1 oder icon-sprite-fall2
  if (spriteKey) {
    iconEl.classList.add(`icon-sprite-${spriteKey}`);
  }

  // Konkretes Icon im Sprite wählen
  if (typeof iconIndex === "number") {
    iconEl.classList.add(`icon-${iconIndex}`);
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}


function closeModal() {
  const modal = document.getElementById("content-modal");
  const iconEl = document.getElementById("modal-icon");

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");

  if (iconEl) {
    iconEl.className = "modal-icon icon-sprite";
  }
}


function initPlayfield() {
  const placedButtons = [];
  const playfield = document.getElementById("playfield");
  if (!playfield) return;

  // Items mischen, NICHT nur die Nummern
  const shuffledItems = shuffle(contentItems);

  shuffledItems.forEach((item, idx) => {
    const number = idx + 1; // 1, 2, 3, ... entsprechend der zufälligen Reihenfolge

    [0, 1].forEach((variantIndex) => {
      const button = createButton(number, variantIndex, item);
      placeButtonRandomly(button, playfield, placedButtons);

      button.addEventListener("click", () => {
        const variant = item.variants[variantIndex];
        const randomIconIndex = Math.floor(Math.random() * 8);
        const spriteKey = item.sprite; // "fall1", "fall2", ...

        openModal({
          number,
          variantLabel: variant.label,
          author: variant.author,
          text: variant.text,
          link: variant.link,
          iconIndex: randomIconIndex,
          spriteKey
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
