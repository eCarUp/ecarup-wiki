---
title: 'Eaton OCPP'
slug: '/ocpp-ladestationen/eaton'
description: 'Ältere Green Motion Ladestationen (Box Proxy)'
sidebar_label: 'Eaton OCPP'
---
## Box Proxy Ladestationen

## Ältere Green Motion Ladestationen (Box Proxy)

Das Box Proxy ist für die Integration von älteren Green Motions Stationen ab sofort verfügbar. Das heisst, die Ladestationen können bereits mittels der untenstehenden Anleitung auf die eCarUp Plattform verbunden und gestestet werden. Es finden aber ggf. noch Erweiterungen und/oder Verbesserungen statt.

Aktuell werden die folgenden Ladestationsmodelle unterstützt:

[Private-One mit einem Connector](/drittsysteme/box-proxy-green-motion)

[xChargeLN xCIM Client mit einem Connector](/drittsysteme/box-proxy-green-motion)

[Master One](/drittsysteme/box-proxy-green-motion)

[Network TWO](/drittsysteme/box-proxy-green-motion)

[Smart One](/drittsysteme/box-proxy-green-motion)

## OCPP Ladestationen

<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-eaton/01.jpg" bildtext="Eaton Green Motion Duo" titel="Green Motion Duo" href="https://www.eaton.com/ch/de-de.html" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-eaton/02.jpg" bildtext="Eaton Green Motion DC 22&66" titel="Green Motion DC 22&66" href="https://www.eaton.com/ch/de-de.html" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-eaton/03.jpg" bildtext="Eaton Green Motion Building" titel="Green Motion Building" href="https://www.eaton.com/ch/de-de.html" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Eaton Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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

## Einbindung der Eaton Ladestationen

### Green Motion DC 22 & 66

getestete Firmware Version: 2003

### Einbindung der Ladestation

Info: Die Konfigurationsseite ist 30 Minuten aktiv, danach muss die Station neu gestartet werden. 

- Schalte die Station mittels dem Schutzschalter ein

- Verbinde dich mit dem PC über das Ethernet mit einem der drei LAN-Anschlüssen am Teltronika-Router in der Station

- Gehe in den Browser auf folgende IP: 192.168.52.11

- Klicke auf Seite öffnen und gibt im Browser die Login-Daten ein, die Mitgeliefert werden. (default kann admin/admin sein)

![Eaton OCPP – Abbildung 4](/img/ocpp-ladestationen-eaton/04.png)

![Eaton OCPP – Abbildung 5](/img/ocpp-ladestationen-eaton/05.png)

### Schritt 1

- Software Stand prüfen, Bienne 2003 ist die getestete Firmware. 

![Eaton OCPP – Abbildung 6](/img/ocpp-ladestationen-eaton/06.png)

### Schritt 2

- OCPP Server anwählen

- bei Backend auf Custom stellen

- eCarUp URL aus ihrem Account hinzufügen

Beispiel: 

wss://[www.ecarup.com/api/Ocpp16/D037091EE3xxxxxx/](http://www.ecarup.com/api/Ocpp16/D037091EE3026BE0/HL68P28001)

- Security Profile auf None

- Speichern

![Eaton OCPP – Abbildung 7](/img/ocpp-ladestationen-eaton/07.png)

### Schritt 3

- Station neu starten

## Green Motion Building

- getestete Firmware v.1807

### Einbindung der Ladestation

<div className="row">
<div className="col col--8">

Info: Die Konfigurationsseite ist 30 Minuten aktiv, danach muss die Station neu gestartet werden.

- Schalte die Station ein

- Aktiviere das WLAN auf deinem PC oder Handy

- Die Station macht ein Hotspot mit der letzten 4 Ziffern der Seriennummer. Z.b. GM\_Mxxxxx

- Das Passwort wird auf einem Aufkleber mit der Ladegerätdokumentation bereitgestellt. Ältere Modelle haben ein Standardpasswort (GreenMotion!1052).

- Verbinde dein PC oder Handy mit dem Hotspot und gehe im Browser auf folgende IP: 192.168.53.1

- Netzwerk konfigurieren und mit den unten stehenden Schritten weiterfahren.

- Möglicherweise erhälst du eine Warnmeldung, bevor du die Konfigurationsseite aufrufst. Klicke auf weiter.

</div>
<div className="col col--4 text--center">

![Eaton OCPP – Abbildung 8](/img/ocpp-ladestationen-eaton/08.png)

</div>
</div>

![Eaton OCPP – Abbildung 9](/img/ocpp-ladestationen-eaton/09.png)

### Schritt 1

- OCPP Server anwählen

- bei Backend auf Custom stellen

- eCarUp URL aus ihrem Account hinzufügen

Beispiel: 

wss://[www.ecarup.com/api/Ocpp16/D037091EE3026BE0/](http://www.ecarup.com/api/Ocpp16/D037091EE3026BE0/HL68P28001)

- Security Profile auf None

- Speichern

![Eaton OCPP – Abbildung 10](/img/ocpp-ladestationen-eaton/10.png)

### Schritt 2

- Station neu starten

## Autorisierung prüfen

![Eaton OCPP – Abbildung 11](/img/ocpp-ladestationen-eaton/11.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Eaton OCPP – Abbildung 12](/img/ocpp-ladestationen-eaton/12.png)

![Eaton OCPP – Abbildung 13](/img/ocpp-ladestationen-eaton/13.png)

### Download Logs

Sollte die Station nicht auf unserem System erscheinen und auch der Eaton Support keine Lösung für das Problem finden, bitten wir Sie, uns die Logdateien zur Überprüfung zur Verfügung zu stellen.

Maintenance --> System Log --> Get the Logs
