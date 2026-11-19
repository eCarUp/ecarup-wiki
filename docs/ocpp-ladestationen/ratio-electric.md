---
title: 'Ratio Electric'
slug: '/ocpp-ladestationen/ratio-electric'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Ratio Electric'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-ratio-electric/01.jpg" bildtext="Ratio Electric IO7" titel="IO7" href="https://elektroscout.ch/produkt/doppellader-fuer-den-oeffentlichen-bereich-mit-ocpp/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-ratio-electric/02.jpg" bildtext="Ratio Electric IO6 MID Pro" titel="IO6 MID Pro" href="https://elektroscout.ch/produkt/io6/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Ratio Electric Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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


## Einbindung der IO7 & IO6 pro MID

Wichtig: getesteter Firmware Stand , 1.5.4  (IO7)

Wichtig: getesteter Firmware Stand , 3.13.1  (IO6)



- Für die Integration deiner IO7 wende dich bitte an die Firma [Elektroscout](https://elektroscout.ch/)

- info@elektroscout.ch


## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 



Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)


![Ratio Electric – Abbildung 3](/img/ocpp-ladestationen-ratio-electric/03.png)

![Ratio Electric – Abbildung 4](/img/ocpp-ladestationen-ratio-electric/04.png)
