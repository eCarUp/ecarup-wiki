---
title: 'ABL'
slug: '/ocpp-ladestationen/abl'
description: 'Backend Integrationsanleitung'
sidebar_label: 'ABL'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-abl/01.jpg" bildtext="ABL Wallbox" titel="ABL Wallbox" href="https://www.ablmobility.de/de/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-abl/02.png" bildtext="ABL Supernova" titel="ABL Supernova" href="https://www.ablmobility.de/de/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

ABL Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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


## Einbindung der ABL Wallbox

### ⚠️ Wichtige Bemerkungen für die Integration von ABL Ladestationen

- Für den Start des Ladevorganges muss zwingend zuerst ein Fahrzeug verbunden werden. Anderenfalls wird kein Ladevorgang initiiert.

- Wenn die Ladung mit der RFID-Karte gestartet wird, kann man die Ladung nur über das Auto (z.B. Kabel entriegeln) oder über die eCarUp App beenden. Ein erneutes hinhalten der RFID Karte beendet den Ladevorgang nicht.


### Auf die Station zugreifen

- Sobald du dich mit der Station verbunden hast. wähle im Browser folgende IP: [http://169.254](/).1.1:8300/

- Prüfe in den Systemdaten, ob die aktuelle Software Version vorhanden ist


### Konfiguration

- OCPP-Version auf 1.6 umstellen

- Ganze URL aus eCarUp Account einfügen

- ChargeBox ID umbenennen. Achtung keine Leerschläge. 

- Speichern und Station neu starten.


![ABL – Abbildung 3](/img/ocpp-ladestationen-abl/03.png)

### Wichtig

Die Chargebox ID darf nicht mehr als 20 Zeichen enthalten. 

![ABL – Abbildung 4](/img/ocpp-ladestationen-abl/04.png)

### Wichtig

Bitte Auto-Charge Funktion deaktivieren

![ABL – Abbildung 5](/img/ocpp-ladestationen-abl/05.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 



Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben) 




![ABL – Abbildung 6](/img/ocpp-ladestationen-abl/06.png)

![ABL – Abbildung 7](/img/ocpp-ladestationen-abl/07.png)
