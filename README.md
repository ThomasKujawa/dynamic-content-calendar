# Dynamischer Inhaltskalender

Eine interaktive, adventkalender-ähnliche Website, die dynamisch zugeordnete Inhalte (Autor, Text, Link, Bild) hinter zufällig platzierten, gepaarten Zahlenschaltflächen (Hell-/Dunkel-Varianten) anzeigt.

## 📋 Überblick

Der Dynamische Inhaltskalender ist eine moderne Web-Anwendung, die Inhalte in einem interaktiven Kartenformat präsentiert. Benutzer können Zahlenschaltflächen anklicken, um Inhalte aufzudecken, ähnlich wie bei einem Adventskalender. Das Projekt unterstützt zwei Design-Varianten (Hell und Dunkel) und mischt die Inhalte bei jedem Seitenaufruf neu.

## ✨ Hauptfunktionen

- **Interaktive Zahlenschaltflächen**: Gepaarte Schaltflächen mit Hell- und Dunkel-Varianten
- **Dynamische Inhaltsanzeige**: Zeigt Autor, Text, Link und Bild für jeden Inhaltselement
- **Zufälliges Mischen**: Die Reihenfolge der Inhalte wird bei jedem Neuladen randomisiert
- **Responsive Design**: Funktioniert auf Desktop-, Tablet- und Mobilgeräten
- **Hell/Dunkel-Modus**: Umschaltbare Design-Varianten für bessere Benutzererfahrung
- **Einfache Konfiguration**: Inhalte können leicht in der JavaScript-Datei konfiguriert werden

## 📁 Projektstruktur

```
dynamic-content-calendar/
├── index.html       # HTML-Struktur der Anwendung
├── style.css        # CSS-Styling für beide Design-Varianten
├── app.js           # Hauptlogik und Inhaltsmanagement
└── README.md        # Diese Datei
```

## 🚀 Installation & Verwendung

### Schnellstart

1. **Repository klonen:**
   ```bash
git clone https://github.com/ThomasKujawa/dynamic-content-calendar.git
cd dynamic-content-calendar
```

2. **Datei öffnen:**
   - Öffnen Sie `index.html` direkt in Ihrem Browser, oder
   - Verwenden Sie einen lokalen Web-Server (z.B. Live Server in VS Code)

### Abhängigkeiten

Dieses Projekt benötigt keine externen npm-Pakete. Es verwendet nur:
- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## 🔧 Inhalte hinzufügen/konfigurieren

Die Inhalte werden in der `app.js` Datei definiert. Öffnen Sie diese Datei und suchen Sie nach dem `items`-Array:

```javascript
const items = [
    {
        author: 'Autor 1',
        text: 'Inhalt hier...',
        link: 'https://beispiel.de',
        image: 'https://beispiel.de/bild.jpg'
    },
    {
        author: 'Autor 2',
        text: 'Mehr Inhalt...',
        link: 'https://beispiel2.de',
        image: 'https://beispiel2.de/bild2.jpg'
    }
    // Weitere Items hinzufügen...
];
```

Fügen Sie neue Objekte zum Array hinzu, um neue Inhalte zu erstellen. Jedes Objekt sollte folgende Eigenschaften haben:
- `author`: Name des Autors/Erstellers
- `text`: Der Haupttext/Beschreibung
- `link`: URL zu einer externen Ressource (optional)
- `image`: URL zum Bild (optional)

## 🎨 Design-Varianten

Das Projekt unterstützt zwei CSS-Varianten:

### Hell-Modus
- Helle Hintergrundfarben
- Dunkler Text
- Sanfte Farbpalette

### Dunkel-Modus
- Dunkle Hintergrundfarben
- Heller Text
- Kräftige Farbakzente

Die Umschaltung erfolgt über entsprechende CSS-Klassen in der `style.css`.

## 🔀 Zufälliges Mischen

Bei jedem Seitenaufruf werden die Inhalte automatisch in zufälliger Reihenfolge angeordnet. Dies wird durch eine Fisher-Yates-Shuffle-Implementierung erreicht:

```javascript
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
```

## 📱 Browser-Unterstützung

- Chrome/Edge (neueste Versionen)
- Firefox (neueste Versionen)
- Safari (neueste Versionen)
- Mobile Browser (iOS Safari, Chrome Mobile)

## 🤝 Beiträge

Beiträge sind willkommen! Wenn Sie Verbesserungen oder neue Features vorschlagen möchten:

1. Forken Sie das Repository
2. Erstellen Sie einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Commiten Sie Ihre Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Pushen Sie zum Branch (`git push origin feature/AmazingFeature`)
5. Öffnen Sie einen Pull Request

## 📝 Lizenz

Dieses Projekt ist unter der GPL 3.0-Lizenz lizenziert. Weitere Informationen finden Sie in der [LICENSE](LICENSE)-Datei.

## 👤 Autor

**Thomas Kujawa**
- GitHub: [@ThomasKujawa](https://github.com/ThomasKujawa)

## 💬 Support & Feedback

Wenn Sie Fragen haben oder Feedback geben möchten, eröffnen Sie bitte ein [Issue](https://github.com/ThomasKujawa/dynamic-content-calendar/issues) im Repository.

---

**Zuletzt aktualisiert**: 14.03.2026