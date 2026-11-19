---
title: 'Garo'
slug: '/ocpp-ladestationen/garo'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Garo'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-garo/01.jpg" bildtext="Garo Wallbox GLB+" titel="Wallbox GLB+" href="https://www.garo.se/en/products/wallbox" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-garo/02.png" bildtext="Garo Entity Pro" titel="Entity Pro" href="https://www.garo.se/en/products/wallbox" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-garo/03.jpg" bildtext="Garo LS4 Compact" titel="LS4 Compact" href="https://www.garo.se/en/products/wallbox" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Garo Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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

## Einbindung der Garo Ladestationen

<Video src="Jj_6G8k8nus" title="YouTube Video, Integrationsanleitung GARO ins eCarUp Backend" />

## Einbindung der Garo Entity Pro

Installiere hier für die Garo Connect App.  

### Getestete Version

- Firmware Version 1.8.8

![Garo – Abbildung 4](/img/ocpp-ladestationen-garo/04.png)

### Schritt 1

Folge der mitgelieferten Anleitung Schritt für Schritt und scanne den QR-Code auf der Rückplatte. 

⚠️ Wichtig: Du musst mit deinem Handy und der Ladestation im gleichen Netzwerk sein. (LAN oder WLAN)

### Schritt 2

<div className="row">
<div className="col col--6">

Bitte in den Allgemeinen Einstellungen sicherstellen, dass kein Plan für das Aufladen des Autos und Kostenlose Nutzung aktiviert ist.

</div>
<div className="col col--6 text--center">

![Garo – Abbildung 5](/img/ocpp-ladestationen-garo/05.png)

</div>
</div>

### Schritt 3

<div className="row">
<div className="col col--6">

Auf der Installationsübersicht bitte das Feld "Drittanbieter" anwählen.

</div>
<div className="col col--6 text--center">

![Garo – Abbildung 6](/img/ocpp-ladestationen-garo/06.png)

</div>
</div>

### Schritt 4

<div className="row">
<div className="col col--6">

Unsere Empfehlung: StopTransactionPnEVSideDisconnecet + UnlockConnectorOnEVSideDisconnect anzuwählen.

</div>
<div className="col col--6 text--center">

![Garo – Abbildung 7](/img/ocpp-ladestationen-garo/07.png)

</div>
</div>

### Schritt 5

<div className="row">
<div className="col col--6">

Bei OCPP-Verbindung kann die DeviceId frei gewählt werden.

Beim der CsmsUrl kannst du deine URL aus dem eCarUp Account hinzufügen.

</div>
<div className="col col--6 text--center">

![Garo – Abbildung 8](/img/ocpp-ladestationen-garo/08.png)

</div>
</div>

### Schritt 5.1

<div className="row">
<div className="col col--6">

Die URL kann ganz eins zu eins einkopiert werden.

Speichern & Neustart nicht vergessen!

</div>
<div className="col col--6 text--center">

![Garo – Abbildung 9](/img/ocpp-ladestationen-garo/09.png)

</div>
</div>

### Hinweis

<div className="row">
<div className="col col--6">

Bei der Ladestation kann der Nutzer noch definieren, was Sie beim Status "Nicht verbunden" machen soll. Wir empfehlen nichts zu aktivieren.

</div>
<div className="col col--6 text--center">

![Garo – Abbildung 10](/img/ocpp-ladestationen-garo/10.png)

</div>
</div>

## Einbindung der Garo GLB+ und der LS4 Compact

### 1\. Notebook über USB Kabel mit Bender Controller verbinden:

⚠️ Wichtig: Die Micro-USB Schnittstelle verwenden

![Garo – Abbildung 11](/img/ocpp-ladestationen-garo/11.png)

### 2\. Auf dem Notebook den Browser öffnen

Gib folgende URL ein: http://192.168.123.123/operator/

- Default Benutzername: operator

- Default Password: yellow\_zone

### 3\. Firmware Version prüfen:

<div className="row">
<div className="col col--8">

Es muss mindestes die Version 4.00-2139 installiert sein.

Unter State →  Firmware Version findet man die aktuellste Version.

Firmware Update durchführen:

a) Firmware Datei auf einen USB Stick kopieren. USB Stick einstecken.

b) Bender Controller neu starten

</div>
<div className="col col--4 text--center">

![Garo – Abbildung 12](/img/ocpp-ladestationen-garo/12.png)

</div>
</div>

### 4\. Bender konfigurieren

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Beispiel: ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

Wichtig: Nach der eCarUp OCPP URL muss ein "/" hinzugefügt werden (wie im Beispiel gezeigt). Zudem darf in der "ChargePoint ID (OCPP)" kein Sonderzeichen vorkommen.

![Garo – Abbildung 13](/img/ocpp-ladestationen-garo/13.png)

### Neue Bender Oberfläche

Hast du folgendes Web-Interface, dann findest du die Anleitung unter folgendem Artikel 

- [Anleitung](/ocpp-ladestationen/webasto)

![Garo – Abbildung 14](/img/ocpp-ladestationen-garo/14.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Garo – Abbildung 15](/img/ocpp-ladestationen-garo/15.png)

![Garo – Abbildung 16](/img/ocpp-ladestationen-garo/16.png)
