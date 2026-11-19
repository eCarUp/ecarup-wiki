---
title: 'Mennekes'
slug: '/ocpp-ladestationen/mennekes'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Mennekes'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-mennekes/01.jpg" bildtext="Mennekes Professional" titel="Professional" href="https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-mennekes/02.jpg" bildtext="Mennekes Wallbox Premium" titel="Wallbox Premium" href="https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-mennekes/03.jpg" bildtext="Mennekes Amtron Professional" titel="Amtron Professional" href="https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-mennekes/04.png" bildtext="Mennekes Amtron 4Business/4You" titel="Amtron 4Business/4You" href="https://www.mennekes.ch/emobility/produkt-details/1347012405BK/#" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Mennekes Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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

## Amtron 4Business/4You

- getestete Firmware Version 1.2.15

Integriere die Station in ein Netzwerk, auf das du über die IP-Adresse zugreifen kannst.  

<Embed src="https://demo.arcade.software/pn64vzJQpOAvqVOZLRlT?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.570" title="Wiki - Mennekes" />

1.  Expertenmodus aktivieren

2.  Klicke bei den Einstellungen auf Backend.

![Mennekes – Abbildung 5](/img/ocpp-ladestationen-mennekes/05.png)

3\. Füge deine eCarUp URL hinzu und starte die Ladestation neu. 

URL Beispiel:

![Mennekes – Abbildung 6](/img/ocpp-ladestationen-mennekes/06.png)

## Einbindung der Ladesäule Amedio Professional & Wallbox Amtron Professional

### 1\. Notebook über USB Kabel mit Bender Controller verbinden:

⚠️ Wichtig: Die Micro-USB Schnittstelle verwenden

![Mennekes – Abbildung 7](/img/ocpp-ladestationen-mennekes/07.png)

### 2\. Auf dem Notebook den Browser öffnen

Gib folgende URL ein: http://192.168.123.123/operator/

- Default Benutzername: operator

- Default Password: yellow\_zone

### 3\. Firmware Version prüfen:

<div className="row">
<div className="col col--8">

Es muss mindestes die Version 4.00-2139 installiert sein.

Unter State -> Firmware Version findet man die aktuellste Version.

Firmware Update durchführen:

a) Firmware Datei auf einen USB Stick kopieren. USB Stick einstecken.

b) Bender Controller neu starten

</div>
<div className="col col--4 text--center">

![Mennekes – Abbildung 8](/img/ocpp-ladestationen-mennekes/08.png)

</div>
</div>

### 4\. Bender konfigurieren

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Beispiel: ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

⚠️ Wichtig: Nach der eCarUp OCPP URL muss ein "/" hinzugefügt werden (wie im Beispiel gezeigt). Zudem darf in der "ChargePoint ID (OCPP)" kein Sonderzeichen vorkommen.

![Mennekes – Abbildung 9](/img/ocpp-ladestationen-mennekes/09.png)

## Einbindung der ACU V3 &V4

### Einbindung der ACU-Controller

Auf die Station mit Ethernet verbinden

1.  Laptop muss folgende IP 192.168.0.21 und Subnetmaske: 255.255.255.0 haben.

2.  Öffne den Browser deines Laptops und gib folgende URL in die Adressleiste ein 192.168.0.10

3.  Benutzername sowie Passwort sind "admin"

![Mennekes – Abbildung 10](/img/ocpp-ladestationen-mennekes/10.png)

### Software Updates und Anleitung Mennekes:

Die Software inklusive Anleitung kann unter der Seite [Software Updates von Mennekes](https://www.chargeupyourday.de/services/software-updates/) abgerufen werden.

## Weboberfläche von Mennekes

1.  Überprüfung der aktuellen Firmware

2.  Wenn nicht aktuell, ACU bitte aktualisieren. Die aktuelle Software Version inklusive Anleitung findest du auf der [Software Update Seite von Mennekes](https://www.chargeupyourday.de/services/software-updates/).

3.  Übertragungsprotokoll v1.6J anwählen

4.  OCPP URL von deinem Account einfügen und OCPP 1.6 

ws://www.ecarup.com/api/Ocpp16/(Ihre ID)/

Slash am Schluss nicht vergessen. ! 

Einstellungen beachten

![Mennekes – Abbildung 11](/img/ocpp-ladestationen-mennekes/11.png)

![Mennekes – Abbildung 12](/img/ocpp-ladestationen-mennekes/12.png)

![Mennekes – Abbildung 13](/img/ocpp-ladestationen-mennekes/13.png)

![Mennekes – Abbildung 14](/img/ocpp-ladestationen-mennekes/14.png)

## Downloads

Softwareupdate-ACU-v3-v4\_v03\_30-09-2019\_de.pdf

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Mennekes – Abbildung 15](/img/ocpp-ladestationen-mennekes/15.png)

![Mennekes – Abbildung 16](/img/ocpp-ladestationen-mennekes/16.png)
