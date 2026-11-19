---
title: 'Compleo'
slug: '/ocpp-ladestationen/compleo'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Compleo'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-compleo/01.png" bildtext="Compleo SOLO" titel="SOLO" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-compleo/02.jpg" bildtext="Compleo eBOX" titel="eBOX" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-compleo/03.jpg" bildtext="Compleo DUO" titel="DUO" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-compleo/04.jpg" bildtext="Compleo CITO 500" titel="CITO 500" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-compleo/05.jpg" bildtext="Compleo CITO 240" titel="CITO 240" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Compleo Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)


### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.


## Einbindung der Compleo Ladestationen

### Hinweis

- Ein Kreditkartenterminal kann parallel zu eCarUp betrieben werden, um maximale Flexibilität zu gewährleisten. Für weitere Informationen steht dir Compleo gerne zur Verfügung. Hier betrifft es nur die DC Hardware !


### Compleo SOLO

Video Anleitung: [https://www.youtube.com/watch?v=Aa3artQXC6w](https://www.youtube.com/watch?v=Aa3artQXC6w)

### Compleo eBOX

Für die Einbindung der Compleo eBOX brauchst du die Compleo eConfig App. 

Ebenfalls Wichtig, dass die Firmware-Version 1.1 auf der Box installiert ist für die OCPP-Anbindung. 

## Übersicht:

![Compleo – Abbildung 6](/img/ocpp-ladestationen-compleo/06.png)

## Schritt 1:

![Compleo – Abbildung 7](/img/ocpp-ladestationen-compleo/07.png)

## Schritt 2:

![Compleo – Abbildung 8](/img/ocpp-ladestationen-compleo/08.png)

## Schritt 3:

![Compleo – Abbildung 9](/img/ocpp-ladestationen-compleo/09.png)

## Schritt 4:

![Compleo – Abbildung 10](/img/ocpp-ladestationen-compleo/10.png)

## Schritt 5 inkl. Neustart:

![Compleo – Abbildung 11](/img/ocpp-ladestationen-compleo/11.png)

Wichtig, wenn die Station nach erfolgreicher Implementierung mit eCarUp nicht richtig funktioniert, bitte folgendes über die Weboberfläche der Wallbox prüfen:

- Authentifizierung auf MIT

- Remote muss aktiviert sein


Wie du auf die Weboberfläche gelangst, sollte in der mitgelieferten Anleitung umschrieben sein. 

![Compleo – Abbildung 12](/img/ocpp-ladestationen-compleo/12.png)

### Compleo DUO, CITO 500 & CITO 240

Für die Integration anderer Compleo Stationen zu eCarUp brauchst du den Support der Firma [Compleo Charging Solutions AG Schweiz](https://www.compleo-charging.ch/kontakt) . Sie übernimmt die Konfiguration und ordnet deinen Ladepunkt per OCPP URL dem eCarUp Account zu, welche du in der Vorbereitung erhalten hast.

![Compleo – Abbildung 13](/img/ocpp-ladestationen-compleo/13.png)

### Wichtig

Bei jeder Compleo Ladestation muss folgender Parameter auf "true" gesetzt werden.

![Compleo – Abbildung 14](/img/ocpp-ladestationen-compleo/14.png)

Dies kann mittels unserem Wartungstool (eCarUp Premium) gemacht werden oder aber die Einstellung erfolgt stationsseitig. 

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 



Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)


![Compleo – Abbildung 15](/img/ocpp-ladestationen-compleo/15.png)

![Compleo – Abbildung 16](/img/ocpp-ladestationen-compleo/16.png)
