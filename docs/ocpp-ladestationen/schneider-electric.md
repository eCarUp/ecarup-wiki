---
title: 'Schneider Electric'
slug: '/ocpp-ladestationen/schneider-electric'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Schneider Electric'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-schneider-electric/01.jpg" bildtext="Schneider Electric EVlink Pro AC" titel="EVlink Pro AC" href="/ocpp-ladestationen/schneider-electric" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-schneider-electric/02.jpg" bildtext="Schneider Electric EVlink Pro DC" titel="EVlink Pro DC" href="/ocpp-ladestationen/schneider-electric" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Schneider Electric Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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

## Einbindung der Schneider Electric Ladestationen

### EVlink Pro AC

### Einbindung der EVlink AC Pro

Damit du auf die Station via Smartphone zugreifen kannst, sind folgende Schritte nötig:

- Installiere auf deinem Handy die "eSetup" App von Schneider Electric;

- Eröffne dort ein Benutzer-Konto.

![Schneider Electric – Abbildung 3](/img/ocpp-ladestationen-schneider-electric/03.png)

### Schritt 1

- EVlink Pro AC anwählen

![Schneider Electric – Abbildung 4](/img/ocpp-ladestationen-schneider-electric/04.jpg)

### Schritt 2

- Suchlauf wird gestartet

![Schneider Electric – Abbildung 5](/img/ocpp-ladestationen-schneider-electric/05.jpg)

### Schritt 3

- Ladestation anwählen

![Schneider Electric – Abbildung 6](/img/ocpp-ladestationen-schneider-electric/06.jpg)

### Schritt 4

<div className="row">
<div className="col col--6">

- PIN-Code eingeben (dieser wurde bei der Registrierung vergeben)

</div>
<div className="col col--6 text--center">

![Schneider Electric – Abbildung 7](/img/ocpp-ladestationen-schneider-electric/07.jpg)

</div>
</div>

### Schritt 5

- Konfiguration anwählen

![Schneider Electric – Abbildung 8](/img/ocpp-ladestationen-schneider-electric/08.jpg)

### Schritt 6

- Aufsicht für die OCPP Einstellung anwählen

![Schneider Electric – Abbildung 9](/img/ocpp-ladestationen-schneider-electric/09.png)

### Schritt 7

![Schneider Electric – Abbildung 10](/img/ocpp-ladestationen-schneider-electric/10.jpg)

- Aufsicht EIN

- OCPP URL normal aus ihrem Account einfügen

Beispiel: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

- Authentifizierung erforderlich (Öffentlich) auswählen

### Schritt 8

- Netzwerkeinstellungen vornehmen

![Schneider Electric – Abbildung 11](/img/ocpp-ladestationen-schneider-electric/11.png)

### Schritt 9 (optional)

- Offline-Modus definieren

![Schneider Electric – Abbildung 12](/img/ocpp-ladestationen-schneider-electric/12.jpg)

### Schritt 10

- Einstellungen Speichern und die Station neu Starten. 

## EVlink Pro DC

Möchtest du die DC Ladestation von Schneider mit eCarUp Integrieren ?

- Sende deine OCPP URL an folgende E-Mail von Schneider: [services@ch.schneider-electric.com](mailto:services@ch.schneider-electric.com)

- Schneider Electric wird sich zeitnahe bei Ihnen melden. 

## EVlink Smart Wallbox & EVlink Parking

### Einbindung der EVlink Smart Wallbox

Auf die Station mit Ethernet verbinden

1.  Folgende IP-Adresse bei deinem PC statisch vergeben: 192.168.0.x (x ist eine Ganzzahl zwischen 241 und 249)

2.  Subnetzmaske: 255.255.255.0 + kein Standard-Gateway, kein DNS und kein Proxy

3.  Öffne deinen Webbrowser und gib http://192.168.0.102 in die URL-Adressleiste ein.

4.  Benutzername ( admin ) , Kennwort ( ADMIN ) 

## Weboberfläche

### General Settings

1.  Charging Station Name alle Leerschläge herausgenommen

2.  Station type auf Supervised

3.  Authentication done by Supervision 

![Schneider Electric – Abbildung 13](/img/ocpp-ladestationen-schneider-electric/13.png)

### Supervision

1.  OCPP Version auf 1.6 setzten

2.  Supervision URL, URL aus Ihrem Account vollständig einfügen

3.  Charging station ID umbenennen + ohne Leerschläge. 

Zum Schluss die Station neu starten !

![Schneider Electric – Abbildung 14](/img/ocpp-ladestationen-schneider-electric/14.png)

### EVlink Lastmanagement System

Auf das LMS mit Ethernet ETH1 verbinden

1.  Folgende IP-Adresse bei deinem PC statisch vergeben: 192.168.0.x (x ist eine Ganzzahl zwischen 241 und 249)

2.  Subnetzmaske: 255.255.255.0 + kein Standard-Gateway, kein DNS und kein Proxy

3.  Öffne deinen Webbrowser und gib http://192.168.0.128 in die URL-Adressleiste ein.

4.  Benutzername ( admin ) , Kennwort ( ADMIN ) 

### Remote Supervision

1.  Enable auf "ON"

2.  Remote supervision URL address: eCarUp URL aus dem Account vollständig einfügen.

![Schneider Electric – Abbildung 15](/img/ocpp-ladestationen-schneider-electric/15.png)

### Erweiterte Einstellungen

- Admin --> Erweitert\--> Erweiterte Einstellungen  --> Ladepunktnummerierung aktivieren \--> ON

⚠️ Achtung: diese Funktion auch nur bei Stationen mit 2 Anschlüssen aktivieren. 

![Schneider Electric – Abbildung 16](/img/ocpp-ladestationen-schneider-electric/16.png)

### Charging Stations

1.  Es muss zwingend eine Zone gebildet werden, in welche die Station hinzugefügt werden kann. 

2.  Zwingend die Box Identity neu beschriften

![Schneider Electric – Abbildung 17](/img/ocpp-ladestationen-schneider-electric/17.png)

### Schlusskontrolle

1.  Die Station sollte nun die Überwachungs URL vom LMS erhalten 

2.  ID der Ladestation sollte identisch sein

![Schneider Electric – Abbildung 18](/img/ocpp-ladestationen-schneider-electric/18.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du  wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Schneider Electric – Abbildung 19](/img/ocpp-ladestationen-schneider-electric/19.png)

![Schneider Electric – Abbildung 20](/img/ocpp-ladestationen-schneider-electric/20.png)
