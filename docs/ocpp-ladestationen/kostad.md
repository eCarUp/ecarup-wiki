---
title: 'Kostad'
slug: '/ocpp-ladestationen/kostad'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Kostad'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-kostad/01.png" bildtext="Kostad Unnity20 - DC Wallbox" titel="Unnity20 - DC Wallbox" href="https://www.kostad.at/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kostad/02.jpg" bildtext="Kostad Unity50" titel="Unity50" href="https://www.kostad.at/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kostad/03.jpg" bildtext="Kostad Unity20 - Mobile Charger" titel="Unity20 - Mobile Charger" href="https://www.kostad.at/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Kostad Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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

## Einbindung der Kostad DC-Wallbox (CPC20)

1.  Logge dich ins Service Menü ein. Benutzername und Passwort entnimmst du bitte aus der Bedienungsanleitung. 

2.  ⚠️ Wichtig: die Station muss ins Internet kommunizieren (LAN,WLAN etc.)

![Kostad – Abbildung 4](/img/ocpp-ladestationen-kostad/04.png)

### Station Konfiguration

3\. OCPP anwählen:

4\. Hostname: www.ecarup.com/ 

5\. HTTPString: api/OCPP/................/

6. Bitte nochmal überprüfen: nirgends Leerschläge und am Ende ein / 

7\. Verbindungsdaten übernehmen, bei erfolgreicher Verbindung ist der Status "Grün".

![Kostad – Abbildung 5](/img/ocpp-ladestationen-kostad/05.png)

<div className="row">
<div className="col col--8">

Bitte beachte noch folgende Einstellung: "Betreibereinstellungen 1"

- Falls die Authentifizierung über eCarUp (App oder RFID-Karte)  geschehen soll, musst du  bei
    Authentifikation auf OCPP umschalten.

</div>
<div className="col col--4 text--center">

![Kostad – Abbildung 6](/img/ocpp-ladestationen-kostad/06.png)

</div>
</div>

## Kostad DC Unity 50, 90, 120, 150, 180, 300 & 360 kW

![Kostad – Abbildung 7](/img/ocpp-ladestationen-kostad/07.png)

Integration dieser Anlagen erfolgt durch:

 Kostad Schweiz AG. 

+41(0) 52 625 50 50

[www.kostad.ch](https://kostad.ch/)

## office@kostad.ch

![Kostad – Abbildung 8](/img/ocpp-ladestationen-kostad/08.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Kostad – Abbildung 9](/img/ocpp-ladestationen-kostad/09.png)

![Kostad – Abbildung 10](/img/ocpp-ladestationen-kostad/10.png)
