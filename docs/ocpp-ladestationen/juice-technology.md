---
title: 'Juice Technology'
slug: '/ocpp-ladestationen/juice-technology'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Juice Technology'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-juice-technology/01.jpg" bildtext="Juice Technology Charger me 3" titel="Charger me 3" href="https://juice.world/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-juice-technology/02.jpg" bildtext="Juice Technology Charger 2" titel="Charger 2" href="https://juice.world/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Juice Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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


## Einbindung der Juice Ladestationen

<Video src="nj_x0WNQhNk" title="YouTube Video, Integrationanleitung „Juice Technology im eCarUp Backend“" />

Videoanleitung Integration Juice Technology in eCarUp Backend

## Juice Charger me 3

### Installation

Auf Station zugreifen (statisch):

1\. Sobald du mit der Station verbunden bist (Achtung, PC muss im gleichen IP-Range sein), öffne den Browser deines Vertrauens und gib folgende IP-Adresse ein: 192.168.123.123/

2\. Einloggen: Die Login Daten findest du in der mitgelieferten Anleitung.

Standard: 

Username: operator

PW: JuiCeMeUP!

3\. Konfiguriere anschließend den Juice Charger me 3 nach deinen Wünschen. 



Auf Station zugreifen (dynamisch):

1.  Netzwerkkabel beim Router einstecken und die IP Adresse im Verzeichnis des Routers ausfindig machen. 

2.   Einloggen: Die Login Daten findest du in der mitgelieferten Anleitung.


Standard: 

Username: operator

PW: JuiCeMeUP!

3.   Konfiguriere anschließend den Juice Charger me 3 nach deinen Wünschen. 




### OCPP-Einstellungen:

![Juice Technology – Abbildung 3](/img/ocpp-ladestationen-juice-technology/03.png)

1.  Verbindungsart auswählen (WLAN, LAN etc.)

2.  eCarUp URL aus deinem Account hinzufügen. 


Beispiel: ws://www.ecarup.com/api/OCPP16/wgwepog4980h4ho

![Juice Technology – Abbildung 4](/img/ocpp-ladestationen-juice-technology/04.png)

\+ bei Meter Value Sample Interval auf max. 60 Sekunden einstellen. 

### Autorisierungs-Einstellungen

![Juice Technology – Abbildung 5](/img/ocpp-ladestationen-juice-technology/05.png)

- Kostenloses Laden ausschalten

- Lokale-Whitelist deaktivieren


alle Einstellungen speichern und die Station neu starten. 

## Juice Charger 2

### Installation

Auf Station zugreifen:

1\. Sobald du mit der Station verbunden bist, öffne den Browser deines Vertrauens und gib folgende IP-Adresse ein: 192.168.4.1:1234

2\. Einloggen: Gib auf dieser Seite das Standard-Passwort 1234567890 ein.

3\. Konfiguriere anschließend den Juice Charger 2 nach deinen Wünschen. 

![Juice Technology – Abbildung 6](/img/ocpp-ladestationen-juice-technology/06.png)

### OCPP-Integration

⚠️ Wichtig: Die URL, welche aus dem eCarUp Account generiert wird, muss nach folgendem Beispiel auseinander genommen werden. 

1.  ws:// ist wegzulassen, Hostpath und Domain müssen einzeln / getrennt eingegeben werden.

2.  (\*\*\*\* muss ersetzt werden durch z.B F749E....)

3.  Chargebox ID darf keine Leerschläge enthalten

4.  Konfiguration speichern

5.  Die Station startet neu.


![Juice Technology – Abbildung 7](/img/ocpp-ladestationen-juice-technology/07.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)


![Juice Technology – Abbildung 8](/img/ocpp-ladestationen-juice-technology/08.png)

![Juice Technology – Abbildung 9](/img/ocpp-ladestationen-juice-technology/09.png)
