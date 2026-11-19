---
title: 'Daze'
slug: '/ocpp-ladestationen/daze'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Daze'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-daze/01.png" bildtext="Daze Home" titel="Home" href="https://daze.eu/en-ch/store/dazebox-home-s/?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA.." bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-daze/02.png" bildtext="Daze Duo" titel="Duo" href="https://www.daze.eu/en/store?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA.." bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-daze/03.png" bildtext="Daze Urban" titel="Urban" href="https://www.daze.eu/en/store?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA.." bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Daze Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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

## Einbindung der Dazebox Home, Share und Duo

Wichtig: getesteter Firmware Stand der Dazebox Home, 16.0.6.0

Wichtig: getesteter Firmware Stand der Share und Duo, 2.1.4.1.1.4

<Video src="BLvGWpLkiiY" title="YouTube Video, Integrationsanleitung DAZE im eCarUp backend" />

<div className="row">
<div className="col col--8">

Kurzanleitung Integration DAZE Box ins eCarUp Backend

- Installiere die Daze App.

- getestete Version der App V. 6.1.0(97)

</div>
<div className="col col--4 text--center">

![Daze – Abbildung 4](/img/ocpp-ladestationen-daze/04.png)

</div>
</div>

### Schritt 1

Füge ein Netzwerk hinzu.

![Daze – Abbildung 5](/img/ocpp-ladestationen-daze/05.png)

### Schritt 2

<div className="row">
<div className="col col--6">

Konfiguriere bei diesem Punkt deine Ladestation und füge das WLAN hinzu.

</div>
<div className="col col--6 text--center">

![Daze – Abbildung 6](/img/ocpp-ladestationen-daze/06.png)

</div>
</div>

### Schritt 3

<div className="row">
<div className="col col--6">

Sobald du die Ladestation hinzugefügt hast findest du folgende Übersicht

</div>
<div className="col col--6 text--center">

![Daze – Abbildung 7](/img/ocpp-ladestationen-daze/07.png)

</div>
</div>

### Schritt 4

<div className="row">
<div className="col col--6">

Für die OCPP Integration klicke oben rechts auf die 3 Striche (Einstellungen)

</div>
<div className="col col--6 text--center">

![Daze – Abbildung 8](/img/ocpp-ladestationen-daze/08.png)

</div>
</div>

### Schritt 5

Aktiviere OCPP und wähle eCarUp als Provider aus.

![Daze – Abbildung 9](/img/ocpp-ladestationen-daze/09.png)

### Schritt 6

<div className="row">
<div className="col col--6">

Füge nun deine URL aus dem Webportal des gewünschten eCarUp Accounts bei URL ein.

</div>
<div className="col col--6 text--center">

![Daze – Abbildung 10](/img/ocpp-ladestationen-daze/10.png)

</div>
</div>

### Schritt 7

Die Ladestation-ID wird automatisch ausgefüllt. 

Danach auf Ende klicken. 

Nach dem Neustart der Station sollte Sie nun in deinem Account erscheinen. 

Wichtig, die Station muss während dem ganzen Prozess via Bluetooth mit deinem Handy verbunden sein.

## Wichtig bei der Urban Station mit 2 Connectoren:

- Für die Identifikation muss der linke und rechte Anschluss mit den letzten drei Ziffern der Seriennummer ergänzt werden. 

![Daze – Abbildung 11](/img/ocpp-ladestationen-daze/11.png)

![Daze – Abbildung 12](/img/ocpp-ladestationen-daze/12.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Daze – Abbildung 13](/img/ocpp-ladestationen-daze/13.png)

![Daze – Abbildung 14](/img/ocpp-ladestationen-daze/14.png)
