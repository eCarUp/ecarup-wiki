# eCarUp Support-Wiki

Das Support-Wiki von eCarUp als [Docusaurus](https://docusaurus.io/)-Site.
Es dient zugleich als Datenquelle für AI-Tools (Markdown im Repo + `llms.txt`).

Das Repo ist aus dem smart-me Wiki hervorgegangen: dieselbe Technik, derselbe
Arbeitsablauf. Der Inhalt stammt aus dem alten Wiki auf Google Sites
(`ecarupwiki.smart-me.com`) und wurde mit den Skripten unter
`scripts/migration/` übernommen.

## Sprachen

Deutsch ist die **Master-Sprache**. Alle Inhalte werden ausschliesslich unter
`docs/` auf Deutsch gepflegt. Englisch, Französisch und Italienisch entstehen
automatisch über die Übersetzungs-Pipeline (`npm run translate`).

> Die Ordner unter `i18n/` werden **nie von Hand bearbeitet** – siehe
> [CONTRIBUTING.md](./CONTRIBUTING.md).

## Loslegen

Richtest du den Rechner zum ersten Mal ein, geh nach
[LOKALINSTALLATION.md](./LOKALINSTALLATION.md) — Schritt für Schritt von der
Installation von Git und Node.js bis zur laufenden Vorschau. Arbeitet ihr zu
mehreren, steht der Ablauf mit Branches, Pull Requests und Merge-Konflikten in
[ZUSAMMENARBEIT.md](./ZUSAMMENARBEIT.md).

```bash
npm ci
npm start          # Vorschau auf http://localhost:3000
npm run build      # baut alle vier Sprachen, bricht bei defekten Links ab
```

Eine neue Seite legst du am bequemsten mit `npm run neue-seite` an; die
Vorlage dafür steht in `vorlagen/seite.md`.

## Was drin ist

| | |
| --- | --- |
| `docs/` | die Inhalte, auf Deutsch |
| `sidebars.ts` | die Navigation, dazu die Länder- und Rollenfilter |
| `src/components/` | die eigenen Bausteine: Kacheln, Ablauf, Menüweg, Embed, Video, Knopf, Unterseiten, NurFuer |
| `src/laender/`, `src/rollen/` | Länderwahl (Schweiz/Deutschland) und Rollenwahl (Installateur, Abrechnungsdienstleister, Verwalter, Fahrer) |
| `src/theme/` | die Stellen, an denen Docusaurus angepasst ist |
| `plugins/` | `llms-txt` (llms.txt für AI-Tools) und `schrittkette` (Wegweiser am Seitenfuss) |
| `scripts/` | Übersetzung, Prüfung, Ankerreparatur, Bildvarianten |
| `.github/workflows/` | Veröffentlichen auf GitHub Pages, automatische Übersetzung |

## Die beiden Workflows

Der Ordner `workflows-vorlage/` enthält `deploy.yml` und `translate.yml`.
**Verschiebe sie von Hand nach `.github/workflows/`** und lösche den Ordner —
Dateien unter `.github/` lassen sich nicht aus einer Cowork-Sitzung heraus
schreiben, deshalb liegen sie vorerst daneben.

## Aussehen

Farben, Schrift, Radien und Abstände kommen aus dem **eCarUp Design System**.
`src/css/tokens.css` ist eine unveränderte Kopie von dessen `tokens.css` und
wird nicht von Hand angepasst; die Zuordnung auf Docusaurus steht daneben in
`src/css/custom.css`, zusammen mit den vier begründeten Abweichungen (Linkfarbe,
H1-Grösse, Farben der Hinweiskästen, Farbe des Fliesstexts).

Poppins liegt als `src/css/fonts/*.woff2` im Repo und wird mitgebaut — die
Seite fragt nichts bei Google Fonts an. Das Logo steht in drei Zuschnitten in
`static/img/`: `ecarup-logo.png` für die Kopfzeile, `ecarup-icon.png` als
Symbol im Browser-Tab, `ecarup-social-card.png` für geteilte Links.

## Noch zu erledigen

- [ ] **Adresse**: Der Deploy-Workflow veröffentlicht nach
      `https://ecarup.github.io/ecarup-wiki/`. Kommt eine eigene Domain dazu,
      `SITE_URL`/`BASE_URL` in `.github/workflows/deploy.yml` und die Vorgaben
      in `docusaurus.config.ts` ändern.
- [ ] **Repository**: `organizationName`/`projectName` in der Konfiguration
      zeigen auf `ecarup/ecarup-wiki` — anpassen, falls es anders heisst.
- [ ] **Secret** `CLAUDE_CODE_OAUTH_TOKEN` für den Übersetzungs-Workflow
      hinterlegen (siehe CONTRIBUTING.md).
- [ ] **Glossar** `glossary.md` mit den eCarUp-Begriffen füllen.
- [ ] **Kontaktseiten** mit echten Ansprechpartnern füllen.
