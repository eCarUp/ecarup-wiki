---
title: 'Partino'
slug: '/ocpp-ladestationen/partino'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Partino'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-partino/01.jpg" bildtext="Partino Vool" titel="Partino Vool" href="https://www.partino.ch/de/angebot/e-ladestationen/vool/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-partino/02.png" bildtext="Partino DC30" titel="Partino DC30" href="https://www.partino.ch/de/angebot/e-ladestationen/partino-x-ecotap/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-partino/03.png" bildtext="Partino Ecotap" titel="Partino Ecotap" href="https://www.partino.ch/de/angebot/e-ladestationen/partino-x-ecotap/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Partino und Ecotap Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal) 

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)


### Integration von OCPP Stationen

1.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

2.  Klicke im Menü, links auf den Reiter "Stationen".

3.  Wähle den Reiter "OCPP" aus.

4.  Kopiere die URL in die Zwischenablage.

5.  Füge die URL im unten erwähnten Antragsformular ein. 


## Partino Vool

- getestete Firmware Version v1.9.16 


<Video src="pRN2F2iiNzk" title="YouTube Video, Integrationsanleitung Partino /Vool Ladestation ins eCarUp Backend" />

### Video Integrationsanleitung für Partino Vool Ladestationen ins eCarUp Backend

- Installiere hierfür die Vool App


![Partino – Abbildung 4](/img/ocpp-ladestationen-partino/04.png)

1.  Station über Bluetooth verbinden


![Partino – Abbildung 5](/img/ocpp-ladestationen-partino/05.png)

2.



![Partino – Abbildung 6](/img/ocpp-ladestationen-partino/06.png)

3.. Ladegerät einrichten



![Partino – Abbildung 7](/img/ocpp-ladestationen-partino/07.png)

4\. Grundkonfiguration einrichten

![Partino – Abbildung 8](/img/ocpp-ladestationen-partino/08.png)

5\. Klicke auf "Erweiterte Einstellungen anzeigen"

![Partino – Abbildung 9](/img/ocpp-ladestationen-partino/09.png)

6\. Deine eCarUp URL hinzfügen und speichern

![Partino – Abbildung 10](/img/ocpp-ladestationen-partino/10.png)

### eCarUp URL an Partino übermitteln (bei gebrauch der Floatbrige)

Für die Integration der Partino Stationen (in gebrauch der Floatbrige) in unser Backend brauchst du im Moment noch den Support durch die Firma [Partino](https://www.partino.ch/de/). Partino übernimmt den letzten Konfigurationsschritt und ordnet deine Ladepunkte dem richtigen eCarUp Account zu (per OCPP URL), welche du in der Vorbereitung erhalten hast. Übermittel dazu die URL sowie die Seriennummern der Ladestation Station mittels untenstehendem Formular an Partino zu. 

[Antragsformular Partino](https://www.partino.ch/wp-content/uploads/Partino_Anmeldeformular_eCarUp.pdf).

![Partino – Abbildung 11](/img/ocpp-ladestationen-partino/11.png)

## Ecotap

- getestete Firmware Version 506.32R.33


### OCPP URL an Partino übermitteln

Für die Integration der Ecotap Stationen in unser Backend brauchst du im Moment noch den Support durch die Firma [Partino](https://www.partino.ch/de/). Partino übernimmt den letzten Konfigurationsschritt und ordnet deine Ladepunkte dem richtigen eCarUp Account zu (per OCPP URL), welche du in der Vorbereitung erhalten hast. Übermittel dazu die URL sowie die Seriennummern der Ladestation Station mittels untenstehendem Formular an Partino zu. 

[Antragsformular Partino](https://www.partino.ch/wp-content/uploads/Partino_Anmeldeformular_eCarUp.pdf).

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 



Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)


![Partino – Abbildung 12](/img/ocpp-ladestationen-partino/12.png)

![Partino – Abbildung 13](/img/ocpp-ladestationen-partino/13.png)
