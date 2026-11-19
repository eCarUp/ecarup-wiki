---
title: 'GL Charge'
slug: '/ocpp-ladestationen/gl-charge'
description: 'Backend Integrationsanleitung'
sidebar_label: 'GL Charge'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-gl-charge/01.png" bildtext="GL Charge LiteBox" titel="LiteBox" href="https://iskraemeco-emobility.com/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-gl-charge/02.png" bildtext="GL Charge Public Box" titel="Public Box" href="https://iskraemeco-emobility.com/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-gl-charge/03.png" bildtext="GL Charge Platinum" titel="Platinum" href="https://iskraemeco-emobility.com/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

GL Charge Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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

## LiteBox

Firmware Version: A0-GL-V2.0.5-b4 

- Installiere die App CP Tool

- getestete Version der App V. 1.12.2

![GL Charge – Abbildung 4](/img/ocpp-ladestationen-gl-charge/04.png)

### Schritt 1

<div className="row">
<div className="col col--6">

- Im CP Tool nach der Ladestation suchen und anwählen.

- Passwort eingeben (default: 12345678)

- Enter klicken

</div>
<div className="col col--6 text--center">

![GL Charge – Abbildung 5](/img/ocpp-ladestationen-gl-charge/05.png)

</div>
</div>

### Schritt 2

- gewünschte Verbindung zum Internet herstellen

![GL Charge – Abbildung 6](/img/ocpp-ladestationen-gl-charge/06.png)

### Schritt 3

<div className="row">
<div className="col col--6">

- Server URL: Manual Entry

- URL aus deinem eCarUp Account

- Charger ID: kann frei definiert werden

</div>
<div className="col col--6 text--center">

![GL Charge – Abbildung 7](/img/ocpp-ladestationen-gl-charge/07.png)

</div>
</div>

### Schritt 4

<div className="row">
<div className="col col--6">

- Am Schluss auf Set klicken.

- Station neu starten.

- Nun sollte die Station in dein Account kommunizieren.

</div>
<div className="col col--6 text--center">

![GL Charge – Abbildung 8](/img/ocpp-ladestationen-gl-charge/08.png)

</div>
</div>

## PublicBox & GlowBox Platinum

Firmware Version: 0.20/6,1.8,2.8  

### Integration

Befor du die Ladestation konfigurieren kannst, musst du Zugriff auf die Weboberfläche haben. 

1.  Verbinde ein PC mit der Station über das Ethernet. 

2.  Stelle folgende Adresse lokal bei deiner Schnittstelle ein:

- IP Address: 192.168.1.3

- Subnet Mask: 255.255.255.0

3.  Gehe in den Browser und gib folgende URL ein: http://192.168.1.2. 

4.  Loge dich im Web-Interface wie folgt ein:

- Username: installer

- Passwort: installer

![GL Charge – Abbildung 9](/img/ocpp-ladestationen-gl-charge/09.png)

### OCPP Configuration

1.  Navigiere zu den OCPP Settings

2.  Gib beim OCPP Host dein eCarUp URL ein:

Beispiel: ws://[www.ecarup.com/api/Ocpp16/xxxxxxxxxx](http://www.ecarup.com/api/Ocpp16/xxxxxxxxxx)/Seriennummer

⚠️Wichtig, nach der URL / + Seriennummer nicht vergessen. 

3.  Klicke auf Apply und die Station startet sich neu. 

![GL Charge – Abbildung 10](/img/ocpp-ladestationen-gl-charge/10.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![GL Charge – Abbildung 11](/img/ocpp-ladestationen-gl-charge/11.png)

![GL Charge – Abbildung 12](/img/ocpp-ladestationen-gl-charge/12.png)
