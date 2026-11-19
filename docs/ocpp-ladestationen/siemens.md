---
title: 'Siemens'
slug: '/ocpp-ladestationen/siemens'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Siemens'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-siemens/01.jpg" bildtext="Siemens SiCharge CC" titel="SiCharge CC" href="/ocpp-ladestationen/siemens#sicharge-cc-ac22" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-siemens/02.png" bildtext="Siemens VersiCharge" titel="Siemens VersiCharge" href="/ocpp-ladestationen/siemens#versiecharge-ac-22kw" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-siemens/03.png" bildtext="Siemens SICHARGE D" titel="Siemens SICHARGE D" href="/ocpp-ladestationen/siemens#sicharge-d" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Siemens Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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

## Einbindung der Siemens Ladestationen

<Video src="zB1Yqo63b6I" title="YouTube Video, Siemens Integration ins eCarUp Backend" />

## SiCharge CC AC22

### Einbindung des SICharge

Auf die Station mit Ethernet verbinden

1.  Laptop muss folgende IP 192.168.32.10 und Subnetmaske: 255.255.255.0 haben.

2.  Öffne den Browser deines Laptops und gib folgende URL in die Adressleiste ein 192.168.32.1

3.  Benutzername ist "admin" & Passwort ist die Seriennummer der Anlage

### Weboberfläche

1.  Server Profile auf Production

2.  Protocol Version OCPP 1.6J

3.  URL vom Account einfügen

4.  Bei User Management unter Authentication bei der Whitelist der Punkt bei OCPP (managed) gesetzt sein.

5.  Speichern und Neustarten

![Siemens – Abbildung 4](/img/ocpp-ladestationen-siemens/04.png)

![Siemens – Abbildung 5](/img/ocpp-ladestationen-siemens/05.png)

### Verbindung über SIM-Karte

Siemens liefert mit der Ladesäule zugleich eine M2M SIM-Karte mit. 

Folgende Einstellung muss noch gemacht werden:

- Authentication Method auf PAP

- Service Mode auf Auto

![Siemens – Abbildung 6](/img/ocpp-ladestationen-siemens/06.png)

## VersieCharge AC 22kW

### Vorbereitende Schritte für die Integration der VersieCharge

1.  Installiere auf deinem Handy die App Sifinity Go

2.  Verbinde nun deine Ladestation mit der App (Einrichtung über Bluetooth)

Getestete Firmware-Version: V2.132.29

[App Store](https://apps.apple.com/us/app/sifinity-go/id989742892?l=de)

[Google Play](https://play.google.com/store/apps/details?id=com.siemens.VersiChargeSG&hl=de&gl=US)

![Siemens – Abbildung 7](/img/ocpp-ladestationen-siemens/07.png)

<div className="row">
<div className="col col--6 text--center">

![Siemens – Abbildung 8](/img/ocpp-ladestationen-siemens/08.png)

</div>
<div className="col col--6 text--center">

![Siemens – Abbildung 9](/img/ocpp-ladestationen-siemens/09.png)

</div>
</div>

3\. Danach muss der Stationsbetreiber die URL inkl. der Seriennummer der Station an folgende E-Mail für die Integration senden:

[si.emobility.ch@siemens.com](mailto:si.emobility.ch@siemens.com). 

Siemens wird sich zeitnahe bei Ihnen melden für eine erfolgreiche Integration. 

## SiCharge D

Für die Integration der SiCharge D muss die URL + Seriennummer der Station an folgende E-Mail gesendet werden: 

[si.emobility.ch@siemens.com](mailto:si.emobility.ch@siemens.com)

Siemens wird sich zeitnahe bei Ihnen melden für eine erfolgreiche Integration. 

![Siemens – Abbildung 10](/img/ocpp-ladestationen-siemens/10.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Siemens – Abbildung 11](/img/ocpp-ladestationen-siemens/11.png)

![Siemens – Abbildung 12](/img/ocpp-ladestationen-siemens/12.png)
