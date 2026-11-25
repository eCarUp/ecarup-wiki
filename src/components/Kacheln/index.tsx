/**
 * Kacheln für Partner, Lieferanten und Dienstleister.
 *
 * Im alten Wiki standen solche Einträge — Logo, Adresse, Telefon, Mail — zu
 * dritt oder viert nebeneinander. Bei der Migration ist daraus eine einzige
 * lange Spalte geworden: 18 Dienstleister, jeder sieben Zeilen hoch, macht
 * eine Seite, durch die man minutenlang scrollt, ohne etwas zu finden.
 *
 * `<Kacheln>` stellt sie wieder nebeneinander und bricht auf schmalen Fenstern
 * von selbst um. Wie viele in eine Reihe passen, entscheidet die Breite des
 * Fensters, nicht eine feste Zahl — sonst stünden auf dem Telefon vier
 * briefmarkengrosse Kästchen.
 *
 *     <Kacheln>
 *       <Kachel bild="/img/drittsysteme-nebenkosten/07.png" titel="Blockstrom AG">
 *
 *     Morillonstrasse 77, CH-3007 Bern
 *
 *     [info@blockstrom.com](mailto:info@blockstrom.com)
 *
 *       </Kachel>
 *     </Kacheln>
 *
 * Zwischen Markdown und den Klammern gehören Leerzeilen, sonst behandelt MDX
 * den Inhalt als reinen Text und die Links bleiben Text.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type KachelnProps = {
  /**
   * Mindestbreite einer Kachel. Daraus ergibt sich, wie viele nebeneinander
   * passen: bei `14rem` sind es in der Textspalte vier, bei `20rem` drei.
   */
  min?: string;
  children: React.ReactNode;
};

export function Kacheln({min = '14rem', children}: KachelnProps): React.ReactElement {
  return (
    <div
      className={styles.raster}
      style={{gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}, 100%), 1fr))`}}>
      {children}
    </div>
  );
}

type KachelProps = {
  /** Pfad zum Bild, z.B. `/img/drittsysteme-nebenkosten/07.png`. */
  bild?: string;
  /** Name des Partners oder Produkts. Steht fett über dem Text. */
  titel?: string;
  /** Ziel, auf das die ganze Kachel verweist. */
  href?: string;
  /**
   * Höhe des Bildfeldes. Voreingestellt ist `3.5rem` – passend für ein Logo
   * neben Adresse und Telefon. Für Produktfotos, die selbst die Aussage sind,
   * z.B. `10rem`.
   *
   * Angegeben wird das Feld auch dann freigehalten, wenn gar kein `bild`
   * gesetzt ist. Das ist der Fall, wenn von einer Reihe gleichartiger Kacheln
   * nur einige ein Logo haben: ohne das Freihalten rutschten deren Titel nach
   * oben und die Reihe stünde auf zwei verschiedenen Linien.
   */
  bildhoehe?: string;
  /** Bild und Text mittig statt linksbündig. Für Produktkacheln. */
  mittig?: boolean;
  /**
   * Titel als Überschrift statt als fettes Wort. Für die wenigen Kacheln, die
   * nicht einer von vielen in einer Reihe sind, sondern selbst die Aussage —
   * zwei Lizenzen nebeneinander etwa. Bei einer Reihe aus zwölf Logos wäre das
   * zu laut, deshalb ist es nicht die Voreinstellung.
   */
  gross?: boolean;
  /**
   * Hebt eine `gross`-Kachel mit der Primärfarbe hervor – etwa die
   * umfangreichere von zwei Lizenzen. Sparsam einsetzen: Ist alles
   * hervorgehoben, ist es nichts mehr.
   */
  hervorgehoben?: boolean;
  /** Beschreibender Text für das Bild. Ohne Angabe: `Logo <titel>`. */
  bildtext?: string;
  children?: React.ReactNode;
};

export function Kachel({
  bild,
  titel,
  href,
  bildhoehe,
  mittig,
  gross,
  hervorgehoben,
  bildtext,
  children,
}: KachelProps): React.ReactElement {
  // In Markdown löst Docusaurus `/img/…` selbst gegen den baseUrl auf, in JSX
  // nicht. Unter wiki.smart-me.com (baseUrl `/`) fällt das nicht auf; läuft
  // die Site aber unter einem Unterpfad – wie früher /smart-me-wiki/ –, zeigte
  // ohne das hier jedes Logo ins Leere.
  const bildUrl = useBaseUrl(bild ?? '');

  const beschriftung = titel && (
    <strong className={clsx(styles.titel, gross && styles.titelGross)}>{titel}</strong>
  );

  return (
    <div
      className={clsx(
        styles.kachel,
        href && styles.verlinkt,
        gross && styles.kachelGross,
        gross && hervorgehoben && styles.hervorgehoben,
      )}>
      {(bild || bildhoehe) && (
        <div
          className={clsx(styles.logo, mittig && styles.logoMittig)}
          style={bildhoehe ? {height: bildhoehe} : undefined}>
          {/* Bilder sind unterschiedlich breit und hoch; `contain` lässt sie
              unverzerrt in einem gleich hohen Feld stehen, damit die Kacheln
              eine gemeinsame Oberkante behalten. */}
          {bild && (
            <img
              src={bildUrl}
              alt={bildtext ?? (titel ? `Logo ${titel}` : '')}
              loading="lazy"
            />
          )}
        </div>
      )}
      <div className={clsx(styles.inhalt, mittig && styles.mittig, gross && styles.inhaltGross)}>
        {/*
          Verlinkt wird der Titel, nicht die ganze Kachel. Anklickbar ist
          trotzdem die ganze Fläche: `.ziel` legt sich unsichtbar darüber
          (siehe styles.module.css). Umschlösse stattdessen ein <a> die ganze
          Kachel, dürften im Text darin keine weiteren Links stehen – genau die
          braucht aber z.B. "Nachfolger: …".

          `Link` statt `<a>`: es setzt den baseUrl davor und wechselt die Seite
          ohne Neuladen. Externe Adressen (https://…) erkennt es selbst.
        */}
        {href ? (
          <Link className={styles.ziel} to={href}>
            {beschriftung}
          </Link>
        ) : (
          beschriftung
        )}
        {children}
      </div>
    </div>
  );
}

export default Kacheln;
