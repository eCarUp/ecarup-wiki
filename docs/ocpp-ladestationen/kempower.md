---
title: 'Kempower'
slug: '/ocpp-ladestationen/kempower'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Kempower'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-kempower/01.jpg" bildtext="Kempower Station Charger" titel="Kempower Station Charger" href="https://kempower.com/de/solution/kempower-station-charger/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kempower/02.jpg" bildtext="Kempower Satellite" titel="Kempower Satellite" href="https://kempower.com/de/solution/kempower-satellite/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kempower/03.jpg" bildtext="Kempower Movable Charger" titel="Kempower Movable Charger" href="https://kempower.com/de/solution/kempower-movable-charger/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Kempower Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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


## Einbindung der Kempower Ladestation

Wichtig: getesteter Firmware Stand, 3.2.6

### Schritt 1

Vergewissere dich, dass deine Station online ist und mit dem Kempower Portal kommuniziert. 

- [https://kempower.io/](https://kempower.io/)


### Schritt 2

1.  Prüfe, dass die Station auch eine aktive Internetverbindung hat

2.  Klicke oben rechts auf das Zahnrad.


![Kempower – Abbildung 4](/img/ocpp-ladestationen-kempower/04.png)

### Schritt 3

1.  Klicke auf Connectivity und aktiviere OCPP

2.  Füge deine eCarUp URL hinzu und klicke auf speichern. 


![Kempower – Abbildung 5](/img/ocpp-ladestationen-kempower/05.png)

### Schritt 4

1.  Überprüfe zum Schluss die Autorisationseinstellungen und klicke auf speichern.


![Kempower – Abbildung 6](/img/ocpp-ladestationen-kempower/06.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 



Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)


![Kempower – Abbildung 7](/img/ocpp-ladestationen-kempower/07.png)

![Kempower – Abbildung 8](/img/ocpp-ladestationen-kempower/08.png)
