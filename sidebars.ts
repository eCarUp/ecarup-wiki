import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Die Navigation des eCarUp Wikis.
 *
 * Struktur und Reihenfolge stammen aus dem alten Google-Sites-Wiki
 * (ecarupwiki.smart-me.com), erzeugt von scripts/migration/convert.ts.
 *
 * Zwei Filter hängen an den Einträgen, beide in `customProps`:
 *
 *   laender: ['de']      – eine Menge. Ohne Angabe gilt ein Eintrag überall.
 *   rolle: 'verwalter'   – eine Schwelle: die niedrigste Rolle, die ihn sehen
 *                          darf (fahrer < verwalter < abrechnung <
 *                          installateur). Ohne Angabe gehört er dem
 *                          Installateur, der ohnehin alles sieht.
 *
 * Die Rolle vererbt sich nach unten, und ein Oberpunkt erscheint, sobald ein
 * Eintrag darunter für die gewählte Rolle sichtbar ist — die Angabe steht
 * deshalb nur dort, wo sie etwas öffnet. Ausgewertet wird beides in
 * `src/theme/DocSidebarItem`; die Hintergründe stehen in `src/rollen` und
 * `src/laender`.
 *
 * Die Startseite ('index') steht bewusst nicht in dieser Liste: Sie fragt nur
 * nach dem Land und führt dann auf eine der beiden Einstiegsseiten.
 */
const sidebars: SidebarsConfig = {
  wikiSidebar: [
    // Die beiden Einstiegsseiten. Wer „Alle Länder" gewählt hat, sieht beide.
    {type: 'doc', id: 'schweiz', customProps: {laender: ['ch'], rolle: 'fahrer'}},
    {type: 'doc', id: 'deutschland', customProps: {laender: ['de'], rolle: 'fahrer'}},
    {type: 'doc', id: 'support-ki-agent', customProps: {rolle: 'fahrer'}},
    {type: 'doc', id: 'faq', customProps: {rolle: 'fahrer'}},
    {
      type: 'category',
      label: 'Fahrer',
      // Alles, was ein Fahrer braucht — App, Bezahlen, Tags.
      customProps: {rolle: 'fahrer'},
      link: {type: 'doc', id: 'fahrer/index'},
      items: [
        'fahrer/abrechnen-mit-debit-kreditkarte',
        'fahrer/fahrerstatistik',
        'fahrer/ecarup-app',
        'fahrer/fehlgeschlagene-zahlung',
        'fahrer/rfid-nfc-tags-carid',
        'fahrer/sofort-bezahl-funktion',
      ],
    },
    {
      type: 'category',
      label: 'Stationsbetreiber',
      // Der Betrieb einer Station: das tägliche Geschäft der Verwaltung.
      customProps: {rolle: 'verwalter'},
      link: {type: 'doc', id: 'stationsbetreiber/index'},
      items: [
        'stationsbetreiber/allgemeine-informationen',
        'stationsbetreiber/abrechnen-auszahlen',
        'stationsbetreiber/account-verifizieren',
        {type: 'doc', id: 'stationsbetreiber/inbetriebnahme-ocpp-station',
         customProps: {rolle: 'installateur'}},
        'stationsbetreiber/lizenzen',
        'stationsbetreiber/qr-code',
        'stationsbetreiber/webportal',
      ],
    },
    {
      type: 'category',
      label: 'Funktionen',
      customProps: {rolle: 'verwalter'},
      link: {type: 'doc', id: 'funktionen/index'},
      items: [
        'funktionen/automatische-auszahlung',
        'funktionen/auto-export-user',
        'funktionen/ecarup-api',
        'funktionen/erw-nutzerverwaltung',
        'funktionen/dashboard',
        'funktionen/Passwort-reset',
        'funktionen/preisplaene',
        'funktionen/qr-codes',
        'funktionen/reports',
        'funktionen/roaming',
        'funktionen/rollen-rechte',
        'funktionen/stations-verwaltung',
        'funktionen/statistiken',
        {
          type: 'category',
          label: 'Wartung',
          customProps: {rolle: 'installateur'},
          link: {type: 'doc', id: 'funktionen/wartung/index'},
          items: [
            'funktionen/wartung/alarme',
            'funktionen/wartung/ocpp-logs',
          ],
        },
        'funktionen/15-minuten-datenimport',
      ],
    },
    {
      type: 'category',
      label: 'Anwendungsfälle',
      customProps: {rolle: 'verwalter'},
      link: {type: 'doc', id: 'anwendungsfaelle/index'},
      items: [
        'anwendungsfaelle/privat-billing',
        'anwendungsfaelle/privat-kreditkarte',
        'anwendungsfaelle/laden-im-kmu',
        'anwendungsfaelle/oeffentlich',
        'anwendungsfaelle/fahrer-flotten-onboarding',
      ],
    },
    'smart-me-pico',
    {
      type: 'category',
      label: 'OCPP Ladestationen',
      link: {type: 'doc', id: 'ocpp-ladestationen/index'},
      items: [
        'ocpp-ladestationen/abb',
        'ocpp-ladestationen/abl',
        'ocpp-ladestationen/alfen',
        'ocpp-ladestationen/alpitronic',
        'ocpp-ladestationen/autel',
        'ocpp-ladestationen/bibus',
        'ocpp-ladestationen/charge-amps',
        'ocpp-ladestationen/circontrol',
        'ocpp-ladestationen/compleo',
        'ocpp-ladestationen/ctek',
        'ocpp-ladestationen/daze',
        'ocpp-ladestationen/easee',
        'ocpp-ladestationen/eaton',
        'ocpp-ladestationen/ebee',
        'ocpp-ladestationen/eco-flow',
        'ocpp-ladestationen/enelion',
        'ocpp-ladestationen/ensto',
        'ocpp-ladestationen/etrel',
        'ocpp-ladestationen/evtec',
        'ocpp-ladestationen/fischer-sohn',
        'ocpp-ladestationen/garo',
        'ocpp-ladestationen/gewiss',
        'ocpp-ladestationen/gl-charge',
        'ocpp-ladestationen/go-e',
        'ocpp-ladestationen/gresgying',
        'ocpp-ladestationen/hager',
        'ocpp-ladestationen/heidelberg-amperfied',
        'ocpp-ladestationen/hesotec',
        'ocpp-ladestationen/huawei',
        'ocpp-ladestationen/juice-technology',
        'ocpp-ladestationen/keba',
        'ocpp-ladestationen/kempower',
        'ocpp-ladestationen/kostad',
        'ocpp-ladestationen/kreisel-electric',
        'ocpp-ladestationen/loxone',
        'ocpp-ladestationen/mennekes',
        'ocpp-ladestationen/mybox',
        'ocpp-ladestationen/neoom',
        'ocpp-ladestationen/nexblue',
        'ocpp-ladestationen/partino',
        'ocpp-ladestationen/powerjames',
        'ocpp-ladestationen/ratio-electric',
        'ocpp-ladestationen/scapo',
        'ocpp-ladestationen/schneider-electric',
        'ocpp-ladestationen/setec-power',
        'ocpp-ladestationen/siemens',
        'ocpp-ladestationen/spelsberg',
        'ocpp-ladestationen/sun2wheel',
        'ocpp-ladestationen/sungrow',
        'ocpp-ladestationen/teltonika',
        'ocpp-ladestationen/ventisei-swiss',
        'ocpp-ladestationen/webasto',
        'ocpp-ladestationen/weidmueller',
        'ocpp-ladestationen/zaptec',
      ],
    },
    {
      type: 'category',
      label: 'Drittsysteme',
      link: {type: 'doc', id: 'drittsysteme/index'},
      items: [
        {type: 'doc', id: 'drittsysteme/abrechnungsdienstleister',
         customProps: {rolle: 'verwalter'}},
        'drittsysteme/api-visualisierung',
        {
          type: 'category',
          label: 'Box-Proxy Green Motion',
          link: {type: 'doc', id: 'drittsysteme/box-proxy-green-motion/index'},
          items: [
            'drittsysteme/box-proxy-green-motion/webinar-ecarup-backend-basic-eaton',
          ],
        },
        {type: 'doc', id: 'drittsysteme/export-energieversorger',
         customProps: {rolle: 'abrechnung'}},
        {type: 'doc', id: 'drittsysteme/kreditkartenterminal',
         customProps: {laender: ['ch'], rolle: 'verwalter'}},
        {
          type: 'category',
          label: 'Lastmanagement',
          link: {type: 'doc', id: 'drittsysteme/lastmanagement/index'},
          items: [
            'drittsysteme/lastmanagement/solar-manager',
            'drittsysteme/lastmanagement/flexecharge',
            'drittsysteme/lastmanagement/clemap',
          ],
        },
        'drittsysteme/smart-me-api',
        'drittsysteme/provider-sim-karte',
      ],
    },
    'drittprodukte',
    {
      type: 'category',
      label: 'Störungsbehebung',
      // Ohne Kennzeichnung bliebe der Oberpunkt beim Installateur; die
      // betrieblichen Störungen betreffen aber zuerst den Betreiber.
      customProps: {rolle: 'verwalter'},
      link: {type: 'doc', id: 'stoerungsbehebung/index'},
      items: [
        'stoerungsbehebung/ladeleistung-falsch-angezeigt',
        'stoerungsbehebung/auto-export',
        {type: 'doc', id: 'stoerungsbehebung/ocpp-fehleranalyse',
         customProps: {rolle: 'installateur'}},
        'stoerungsbehebung/roaming-probleme',
        'stoerungsbehebung/registrierungs-probleme',
        'stoerungsbehebung/report-fehler',
        {type: 'doc', id: 'stoerungsbehebung/kontrolle-erstkonfiguration',
         customProps: {rolle: 'installateur'}},
        {type: 'doc', id: 'stoerungsbehebung/pico-fehler',
         customProps: {rolle: 'installateur'}},
        'stoerungsbehebung/report-mit-auszahlungsverlauf-vergleichen',
        'stoerungsbehebung/mwst-nummer-ist-nicht-im-auszahlungsbeleg-enthalten',
      ],
    },
    {
      type: 'category',
      label: 'Sonstige Informationen',
      customProps: {rolle: 'verwalter'},
      link: {type: 'doc', id: 'sonstige-informationen/index'},
      items: [
        {type: 'doc', id: 'sonstige-informationen/eichrecht-in-deutschland',
         customProps: {laender: ['de']}},
        // AFIR ist EU-Recht und gilt in der Schweiz nicht.
        {type: 'doc', id: 'sonstige-informationen/afir', customProps: {laender: ['de']}},
        'sonstige-informationen/stripe',
        'sonstige-informationen/boxproxy-releases',
      ],
    },
    {type: 'doc', id: 'downloads', customProps: {rolle: 'verwalter'}},
    {type: 'doc', id: 'kontakt-schweiz', customProps: {laender: ['ch'], rolle: 'fahrer'}},
    {type: 'doc', id: 'kontakt-deutschland', customProps: {laender: ['de'], rolle: 'fahrer'}},
  ],
};

export default sidebars;
