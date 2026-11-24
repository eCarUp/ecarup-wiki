/**
 * Weiterleitungen von den alten Wiki-Adressen.
 *
 * Die Pfade des alten Google-Sites-Wikis (ecarupwiki.smart-me.com) wurden 1:1
 * als Slug übernommen — ein Link auf /fahrer/ecarup-app führt also weiterhin
 * auf dieselbe Seite. Nur die Startseite liegt neu auf `/`, und ein Umlaut im
 * Pfad ist beim Umzug verschwunden.
 *
 * Zieht später eine Seite um, gehört ihre alte Adresse hier hinein:
 *
 *     {from: '/alte/adresse', to: '/neue/adresse'},
 *
 * Eingehängt ist die Liste in `docusaurus.config.ts` über
 * `@docusaurus/plugin-client-redirects`.
 */
export type Redirect = {from: string | string[]; to: string};

export const redirects: Redirect[] = [
  {from: ['/startseite', '/home'], to: '/'},
  {from: '/ocpp-ladestationen/weidm%C3%BCller', to: '/ocpp-ladestationen/weidmueller'},

  // Beim Umzug zusammengelegt: Die alten Fahrer-Seiten unter /funktionen
  // waren Dubletten der Seiten im Bereich Fahrer.
  {from: '/funktionen/fahrer-alt', to: '/fahrer'},
  {from: '/funktionen/rfid-nfc-tags-alt', to: '/fahrer/rfid-nfc-tags-carid'},

  // Aus einer Kontaktseite wurden zwei, je Land eine.
  {from: '/kontakt', to: '/kontakt-schweiz'},

  // Im alten Wiki mit Tippfehler angelegt.
  {from: '/drittsysteme/kredtikartenterminal', to: '/drittsysteme/kreditkartenterminal'},
];
