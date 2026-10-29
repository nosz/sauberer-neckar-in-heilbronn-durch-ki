# Sauberer Neckar in Heilbronn durch KI

**Heilbronn badet im Neckar.** Eine Vision für eine ganze Stadt: ein Fluss, so sauber, dass man wieder hineinspringt, ermöglicht durch Künstliche Intelligenz.

**Live:** https://nosz.github.io/sauberer-neckar-in-heilbronn-durch-ki/

---

## Worum geht es?

Der Neckar fließt mitten durch Heilbronn, doch Schwimmen ist heute nicht empfehlenswert. Das Projekt schlägt vor:

> Eine KI-gesteuerte Reinigungs- und Kläranlage mit biologischer Unterstützung an der Neckar-Zweigung macht den Neckar in Heilbronn wieder **sauber und badefähig**.

### So funktioniert es

| Schritt | Inhalt |
|---|---|
| **Messen** | Sensoren erfassen laufend Temperatur, pH-Wert, Trübung, Sauerstoff und weitere Indikatoren der Wasserqualität. |
| **Verstehen** | KI erkennt Muster, sagt Belastungsspitzen (etwa nach Starkregen) voraus und warnt frühzeitig. |
| **Steuern** | Reinigungsprozesse laufen intelligent gesteuert, ressourcenschonend und im Zusammenspiel mit natürlicher, biologischer Reinigung. |
| **Informieren** | Eine offene Badewasser-Ampel zeigt jederzeit, ob der Neckar freigegeben ist. |

Gebadet wird erst bei verlässlicher Qualitätssicherung nach den Maßstäben der EU-Badegewässerrichtlinie.

### Der Nutzen

- **Für die Menschen:** ein neuer Lieblingsort am Wasser, KI zum Anfassen, offene Daten, Lern- und Forschungsmöglichkeiten für Schulen und Hochschulen.
- **Für die Stadt:** mehr Lebensqualität in der Innenstadt, mehr Besucher für Gastronomie, Handel und Hotels.
- **Für die Welt:** internationale Aufmerksamkeit für Heilbronn als KI-Standort und ein Modell, das andere Städte übernehmen können.

### Der Weg

1. **Verstehen:** Messstellen am Neckar, belastbare Datenbasis, Beteiligung der Bürgerschaft
2. **Erproben:** Pilotanlage an der Neckar-Zweigung
3. **Freigeben:** Prüfung und Zulassung einer ersten Badestelle
4. **Wachsen:** Ausbau entlang des Neckarufers

## Mitmachen

- Umfrage: [Zur Umfrage](https://docs.google.com/forms/d/e/1FAIpQLSdGeMQPkdIlTJhfWTDP3NKPpAP-zxvvIoLLeRS0m8hyKoIf8Q/viewform)
- Ergebnisse: [Umfrageergebnisse ansehen](https://docs.google.com/forms/d/e/1FAIpQLSdGeMQPkdIlTJhfWTDP3NKPpAP-zxvvIoLLeRS0m8hyKoIf8Q/viewanalytics)
- Kontakt: siehe [Impressum](impressum.html)

---

## Technik

Statische Webseite ohne Build-Schritt. Alle Dateien liegen auf einer Ebene, ohne Unterordner, und alle Bibliotheken sind lokal eingebunden (kein CDN, keine Fremdserver beim Aufruf, keine Cookies).

| Datei | Zweck |
|---|---|
| `index.html` | Projektseite |
| `impressum.html` | Impressum und Kontakt |
| `custom.css` | Gestaltung (Farben, Layout, Animationen) |
| `site.js` | Menü, Einblenden beim Scrollen, QR-Code |
| `neckar-heilbronn.jpg` | Foto für Kopfbereich und Vision |
| `ideenskizze-neckar-zweigung.jpg` | Ideenskizze mit Standort der Anlage |
| `bootstrap.min.css` | Bootstrap 5.3 |
| `bootstrap-icons.min.css`, `bootstrap-icons.woff2`, `bootstrap-icons.woff` | Bootstrap Icons 1.11 |
| `qrcode.js` | qrcode-generator 1.4 |

**Eigenschaften:** responsiv (Handy bis Desktop), Tastaturbedienung und sichtbarer Fokus, Sprunglink zum Inhalt, Bildbeschreibungen, reduzierte Bewegung bei entsprechender Systemeinstellung, Open-Graph-Angaben für das Teilen.

### Lokal ansehen

Im Ordner einen kleinen Webserver starten und die Adresse öffnen:

```bash
python -m http.server 8000
```

Danach `http://localhost:8000/` aufrufen.

### Veröffentlichen (GitHub Pages)

Den Inhalt dieses Ordners in das Repository kopieren, dessen Pages-Quelle auf den Hauptzweig zeigt. Ein Build ist nicht nötig.

## Datenschutz

Die Seite setzt keine Cookies und lädt beim Aufruf nichts von Fremdservern nach. Die Links zu Umfrage und Ergebnissen führen erst nach einem Klick zu Google Forms. Das Hosting über GitHub Pages verarbeitet technisch bedingt Zugriffsdaten (z. B. IP-Adresse).

## Initiative und Unterstützung

Initiiert im Rahmen des [KI-Festivals](https://ki-festival.de), mit Unterstützung von [Civic Coding – Innovationsnetz KI für das Gemeinwohl](https://www.civic-coding.de).

## Lizenzen und Nachweise

- Bootstrap 5.3, Bootstrap Icons 1.11 und qrcode-generator 1.4 (Kazuhiko Arase): jeweils MIT-Lizenz.
- Texte und Gestaltung: © 2026 Projekt „Sauberer Neckar in Heilbronn durch KI“, alle Rechte vorbehalten.
- Bilder: Foto des Neckars (Bildnachweis folgt). Ideenskizze auf einem Foto der Mobility Map der Wissensstadt Heilbronn (Konzept: Natalis Lorenz, Umsetzung: Folionheld Werbetechnik).
