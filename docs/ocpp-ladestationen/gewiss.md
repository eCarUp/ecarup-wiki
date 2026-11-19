---
title: 'Gewiss'
slug: '/ocpp-ladestationen/gewiss'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Gewiss'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-gewiss/01.jpg" bildtext="Gewiss JOINON EVO" titel="JOINON EVO" href="https://www.gewiss.com/ch/de/mobility" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-gewiss/02.jpg" bildtext="Gewiss JOINON-FAST" titel="JOINON-FAST" href="https://www.gewiss.com/ch/de/mobility" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Gewiss JOINON Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal) 

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)


### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.


1.ws Link ohne Basic Auth: Getestet und funktioniert

2.wss ohne Basic Auth: Getestet und funktioniert

3.wss mit Basic Auth: nicht getestet

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.


## JOINON EVO Wallbox

- "firmwareVersion":"12.3.0" 


1.  Verbinde dich mit der Gewiss JOINON Evo Station via LAN oder WLAN (Detail für die Verbindung findest du in der Installationsanleitung)

2.  Login Maske (Die erforderlichen Login-Daten findest du ebenfalls in der Installationsanleitung.

3.  Unter dem Menü Punkt Charging Station kann die gewünschte Verbindung eingestellt werden. 


4\. Authorisation Type muss auf "Autorisation" eingestellt sein. 



![Gewiss – Abbildung 3](/img/ocpp-ladestationen-gewiss/03.png)

5\. OCPP Protocol auf "ON"

6\. eCarUp URL hinzufügen

Beispiel: wss://[www.ecarup.com/api/Ocpp16/D8xxxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8xxxxxxxxx)

7\. Chargebox identity = Seriennummer der Station

8\. Speichern.



![Gewiss – Abbildung 4](/img/ocpp-ladestationen-gewiss/04.png)

## JOINON I-Fast DC Ladestation

- "firmwareVersion":"V4.13.M0 " 


1.  Verbinde dich mit der Gewiss i-Fast DC Ladestation Station via LAN oder WLAN (Detail für die Verbindung findest du in der Installationsanleitung)

2.  Login Maske (Die erforderlichen Login-Daten findest du ebenfalls in der Installationsanleitung.


3. Klicke auf "Set"

4\. Wähle "Backend" aus

5\. Füge deine eCarUp URL hinzu bei Central System URL. 

Beispiel: wss://[www.ecarup.com/api/Ocpp16/D8xxxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8xxxxxxxxx)

6. Charge Box ID\= Seriennummer der Station

7. OCPP Security Profile kann optional gewählt werden. 

8\. Speichern. 




![Gewiss – Abbildung 5](/img/ocpp-ladestationen-gewiss/05.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 



Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)


![Gewiss – Abbildung 6](/img/ocpp-ladestationen-gewiss/06.png)

![Gewiss – Abbildung 7](/img/ocpp-ladestationen-gewiss/07.png)
