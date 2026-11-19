---
title: 'NEXBLUE'
slug: '/ocpp-ladestationen/nexblue'
description: 'Backend Integrationsanleitung'
sidebar_label: 'NEXBLUE'
---
## Backend Integrationsanleitung

NEXBLUE Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal) 

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)


<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-nexblue/01.png" bildtext="NEXBLUE" titel="NEXBLUE" href="https://nexblue.com/de" bildhoehe="10rem" mittig />

</Kacheln>

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.


 1. ws Link ohne Basic Auth: Getestet und funktioniert

2\. wss ohne Basic Auth: Getestet und funktioniert

3\. wss mit Basic Auth: Getestet und funktioniert

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.


## Einbindung der NEXBLUE

- getestete"firmwareVersion":"03.07.36" 


Integration über das Webportal

<Embed src="https://demo.arcade.software/ZMABeR5jjEkvl6uWrWsV?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.705" title="Wiki - NEXBLUE" />

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 



Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)


![NEXBLUE – Abbildung 2](/img/ocpp-ladestationen-nexblue/02.png)

![NEXBLUE – Abbildung 3](/img/ocpp-ladestationen-nexblue/03.png)
