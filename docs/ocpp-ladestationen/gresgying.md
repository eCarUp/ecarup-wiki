---
title: 'Gresgying'
slug: '/ocpp-ladestationen/gresgying'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Gresgying'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-gresgying/01.png" bildtext="Gresgying Turbo Wallbox" titel="Turbo Wallbox" href="https://www.gresgying.global/product/turbo-wallbox.html" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-gresgying/02.png" bildtext="Gresgying 120kW & 180kW DC Charging Station" titel="120kW & 180kW DC Charging Station" href="https://www.gresgying.global/product/120kw-180kw-dc-charging-station.html" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Gresgying Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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

## Gresgying AC Wallbox

- "firmwareVersion":"C-V1.01.24 P-V1.01.21" 

- Installiere die Gresgying App

- getestete Version der App V1.0.10

![Gresgying – Abbildung 3](/img/ocpp-ladestationen-gresgying/03.png)

### Schritt 1

<div className="row">
<div className="col col--6">

- Verbinde die Station über die App mit deinem Gresgying Account.

</div>
<div className="col col--6 text--center">

![Gresgying – Abbildung 4](/img/ocpp-ladestationen-gresgying/04.png)

</div>
</div>

### Schritt 2

<div className="row">
<div className="col col--6">

- Sobald die Station erfolgreich verbunden wurde, sieht das in der App so aus

</div>
<div className="col col--6 text--center">

![Gresgying – Abbildung 5](/img/ocpp-ladestationen-gresgying/05.png)

</div>
</div>

### Schritt 3

<div className="row">
<div className="col col--6">

- Unter der Network Configuration kannst du die Verbindungsart auswählen.

- Unter OCPP Server kannst du die URL hinzufügen.

</div>
<div className="col col--6 text--center">

![Gresgying – Abbildung 6](/img/ocpp-ladestationen-gresgying/06.png)

</div>
</div>

### Schritt 4

<div className="row">
<div className="col col--6">

- Füge unter Path die ganze URL aus deinem eCarUp Account hinzu.

- Bitte beachte, nach der URL muss die Seriennummer der Station hinzugefügt werden.

- Klicke auf Connect.

</div>
<div className="col col--6 text--center">

![Gresgying – Abbildung 7](/img/ocpp-ladestationen-gresgying/07.png)

</div>
</div>

### Beispiel für die URL:

- ws://www.ecarup.com/api/Ocpp16/D0xxxxxxxxxx/Seriennummer

### Bitte prüfe zum Schluss folgende Einstellung:

- Charging Mode muss auf "Online" stehen. 

![Gresgying – Abbildung 8](/img/ocpp-ladestationen-gresgying/08.png)

## Gresgying F3-EU 180 kW

- "firmwareVersion":"C2032\_V2.8.2" 

### Die Station kann lokal sowie auch von der Ferne konfiguriert werden.

Lokal über den Bildschirm:

- Bitte prüfen Sie dafür die mitgelieferte Bedienungsanleitung. 

Von fern über das Device Management System:

- Klicke auf "Device Manage" und suche die gewünschte Station

- Wähle "Set Parameters"

- "Operation Platfrom address"

- Füge die OCPP URL aus deinem Account hinzu und speichere die Einstellung.

- Danach die Station neustarten.

![Gresgying – Abbildung 9](/img/ocpp-ladestationen-gresgying/09.png)

![Gresgying – Abbildung 10](/img/ocpp-ladestationen-gresgying/10.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Gresgying – Abbildung 11](/img/ocpp-ladestationen-gresgying/11.png)

![Gresgying – Abbildung 12](/img/ocpp-ladestationen-gresgying/12.png)
