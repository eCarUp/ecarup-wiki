---
title: 'Weidmüller'
slug: '/ocpp-ladestationen/weidmueller'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Weidmüller'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-weidmueller/01.jpg" bildtext="Weidmüller AC-Smart Advance" titel="AC-Smart Advance" href="https://www.weidmueller.de/de/produkte/elektronik/wallbox/index.jsp?gclid=CjwKCAjw2K6lBhBXEiwA5RjtCbAmZOvWrCNlfC8cwdbzRLt3y6OgvMq4_sHL43wfaHOBy_34iB-q9BoC7WUQAvD_BwE" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-weidmueller/02.jpg" bildtext="Weidmüller Wallbox" titel="Wallbox" href="https://www.weidmueller.de/de/produkte/elektronik/wallbox/index.jsp?gclid=CjwKCAjw2K6lBhBXEiwA5RjtCbAmZOvWrCNlfC8cwdbzRLt3y6OgvMq4_sHL43wfaHOBy_34iB-q9BoC7WUQAvD_BwE" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Weidmüller Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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


## Einbindung der Weidmüller Ladestationen

### AC-Smart Advance

- Abkündigungsprozess von Weidmüller per 01/2025 für diese Hardware


- Öffne die Netzwerk und Internet Einstellungen ihres PC\`S

- Hier musst du eine statische IP-Adresse vergeben, z.B. 192.168.0.72

- Danach verbindest du deinen PC mit der Wallbox und öffnest im Browser folgende "Default"  IP: 192.168.0.8 

- Login-Daten bitte der mitgelieferten Anleitung entnehmen

- Software-Version muss mindestens 01.08.01 enthalten

- Wichtig: mit der aktuellen Version, kann keine aktive Ladeleistung in der App angezeigt werden !


![Weidmüller – Abbildung 3](/img/ocpp-ladestationen-weidmueller/03.png)

1.  Enable OCPP aktivieren

2.  Interface, hier kann ein beliebiges Kommunikations-Medium gewählt werden

3.  Portal address = [www.ecarup.com](http://www.ecarup.com)

4.  Portal port = 80 (Standard Port ausgehend)

5.  Portal path = api/Ocpp16/xxxxxxxxxx/Seriennumer der Station


Beispiel: api/Ocpp16/we2eb484wrgwoir/0123456789

6.  Heartbeat Intervall 60s

7.  MeterValue sample Interval 60s


![Weidmüller – Abbildung 4](/img/ocpp-ladestationen-weidmueller/04.png)

8\. Enable charging = Disabled

9\. Freemode = nicht aktiv

10\. RFID = aktiv

11\. Website, Modbus RTU/TCP and APP = aktiv

Station neu Starten. 

### Weidmüller (Vorgänger mit Wallbe Kontroller)

- Öffne die Netzwerk und Internet Einstellungen ihres PC\`S

- Hier musst du eine statische IP-Adresse vergeben, z.B. 192.168.0.72

- Danach verbindest du deinen PC mit der Wallbox und öffnen im Browser folgende "Default"  IP: 192.168.0.8 & PW: wallbe7213

- Firmware muss mindestens Version : BF-01.04.20 enthalten


### Weboberfläche

### Backend

- Gehe zum Menü "Network"

- OCPP-J 1.6 anwählen

- Gewünschte Medium für die Kommunikation

- OCPP Vendor darf kein Leerschlag enthalten

- Der Websocket muss auseinander genommen werden


### Websocket von eCarUp

- Anhand des Printscreens hinterlegen

- Bitte am Schluss beachten, api/Ocpp16/weoih48zlkuhr9/00000010638




- Wichtig am Schluss / (slash) + 00000010638 (Seriennummer der Station) nicht vergessen!


![Weidmüller – Abbildung 5](/img/ocpp-ladestationen-weidmueller/05.png)

Die Seriennummer deiner Wallbox findest du wie folgt:

![Weidmüller – Abbildung 6](/img/ocpp-ladestationen-weidmueller/06.png)

Wenn RFID-Karten verwendet werden, bitte folgender Parameter noch setzen:

![Weidmüller – Abbildung 7](/img/ocpp-ladestationen-weidmueller/07.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 



Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)


![Weidmüller – Abbildung 8](/img/ocpp-ladestationen-weidmueller/08.png)

![Weidmüller – Abbildung 9](/img/ocpp-ladestationen-weidmueller/09.png)
