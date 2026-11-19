---
title: 'Hesotec'
slug: '/ocpp-ladestationen/hesotec'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Hesotec'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-hesotec/01.jpg" bildtext="Hesotec eBox wr30" titel="eBox wr30" href="https://electrify.hesotec.de/produkte/ebox-wr30" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-hesotec/02.jpg" bildtext="Hesotec eBox sr10" titel="eBox sr10" href="https://electrify.hesotec.de/produkte/ebox-wr30" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-hesotec/03.jpg" bildtext="Hesotec eSat r10/r20" titel="eSat r10/r20" href="https://electrify.hesotec.de/produkte/ebox-wr30" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Hesotec Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

- Vorraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Hesotec Ladestation

- Lade die App "electrify charge control" der Firma Hesotec in deinem App Store herunter

- Klicke in der App auf das + um deine gewünschte Station zu verbinden

- Verbindung kann über den Hotspot oder via dem eLMS von Hesotec eingerichtet werden

- Wähle dein Modell aus und benenne die Station

- Danach das Handy mit dem Hotspot der Ladestation verbinden

- Alle Informationen zum Hotspot (SSID\_EBOX\_XXX inkl. Passwort) findest du im mitgeliefertem Briefumschlag. 

- Wenn die Station erfolgreich verbunden hat, erscheint sie in der App. 

## Play Store

![Hesotec – Abbildung 4](/img/ocpp-ladestationen-hesotec/04.png)

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Abbildung 5](/img/ocpp-ladestationen-hesotec/05.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Abbildung 6](/img/ocpp-ladestationen-hesotec/06.jpg)

</div>
</div>

- In der App oben rechts auf die 3 Punkte klicken

- Erweiterte Einstellungen und Techniker muss aktiviert werden

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Abbildung 7](/img/ocpp-ladestationen-hesotec/07.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Abbildung 8](/img/ocpp-ladestationen-hesotec/08.jpg)

</div>
</div>

- Allgemeine Einstellungen anwählen

- Autorisierung auf RFID/App stellen und 

- Beenden mit RFID aktivieren

- Speichern und zurück zu den Einstellungen

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Abbildung 9](/img/ocpp-ladestationen-hesotec/09.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Abbildung 10](/img/ocpp-ladestationen-hesotec/10.jpg)

</div>
</div>

<div className="row">
<div className="col col--6">

- Erweiterte Einstellungen aufrufen

- Bei Backend OCPP den eCarUp URL aus ihrem Webportal eintippen

- Beispiel: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxx/15023910 (Seriennummer der Station)

- Modus auf OCPP

</div>
<div className="col col--6 text--center">

![Hesotec – Abbildung 11](/img/ocpp-ladestationen-hesotec/11.png)

</div>
</div>

- Wichtig bei der URL nach dem / die Seriennummer Ihrer Station !

- Danach die Station neustarten

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Hesotec – Abbildung 12](/img/ocpp-ladestationen-hesotec/12.png)

![Hesotec – Abbildung 13](/img/ocpp-ladestationen-hesotec/13.png)
