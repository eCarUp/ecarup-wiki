---
title: 'Bibus'
slug: '/ocpp-ladestationen/bibus'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Bibus'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-bibus/01.jpg" bildtext="Bibus eVolve" titel="Bibus eVolve" href="https://technology.bibus.com/ch-de/produkte/e-mobility-and-energy/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-bibus/02.jpg" bildtext="Bibus eNext" titel="Bibus eNext" href="https://technology.bibus.com/ch-de/produkte/e-mobility-and-energy/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Bibus Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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


## Einbindung der Bibus Ladestation

Version mit Kempower Stationen, klicke [hier](/ocpp-ladestationen/kempower).

## Version mit Circontrol

Die ersten Schritte müssen direkt am Display Ihrer Station durchgeführt werden:

1.   Verbinde deinen Laptop mit der Station

2.   Entnehme die aktuelle IP-Adresse der Station aus der beiliegenden Anleitung

3.  Gib anschließend die IP-Adresse in den Webbrowser ein

4.  Das Dashboard von Circontrol erscheint

5.  Wähle die Verbindungsart (GSM, LAN ...)


⚠️ Bitte beachte:

Die Standardeinstellung der Bibus-Station kann Plug & Charge sein. Dies muss im Charge Point Manager deaktiviert werden. 

Bitte kontaktiere BIBUS, um den Charge Point Manager zu erhalten.

Dort muss in den Einstellungen der Status auf "Aktiviert" gesetzt werden.

![Bibus – Abbildung 3](/img/ocpp-ladestationen-bibus/03.png)

### Einstellungen Web-Interface Circontrol

1.  Klicke auf Integration in der Navigation auf der linken Seite

2.  Wähle OCPP 1.6J unter "Verfügbare Integrationen".

3.  Link anklicken

4.  Benutzernamen und Passwort eingeben (siehe Handbuch)


![Bibus – Abbildung 4](/img/ocpp-ladestationen-bibus/04.png)

5\. Gib der Bibus Charge Box einen Namen. ⚠️ Hinweis: Der Name darf keine Leerzeichen enthalten.

![Bibus – Abbildung 5](/img/ocpp-ladestationen-bibus/05.png)

6\. Gib die OCPP-URL aus Ihrem Konto unter Zentrales System

![Bibus – Abbildung 6](/img/ocpp-ladestationen-bibus/06.png)

⚠️ Wichtig: Du musst das Messintervall der Messwerte einstellen (z.B. auf 60 )

![Bibus – Abbildung 7](/img/ocpp-ladestationen-bibus/07.png)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 



Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)


![Bibus – Abbildung 8](/img/ocpp-ladestationen-bibus/08.png)

![Bibus – Abbildung 9](/img/ocpp-ladestationen-bibus/09.png)
