---
title: 'Zaptec'
slug: '/ocpp-ladestationen/zaptec'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Zaptec'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-zaptec/01.jpg" bildtext="Zaptec Go" titel="Zaptec Go" href="https://www.zaptec.com/de-ch" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-zaptec/02.jpg" bildtext="Zaptec Pro" titel="Zaptec Pro" href="https://www.zaptec.com/de-ch" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Zaptec Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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


## Einbindung der Zaptec Ladestationen

Die Zaptec Station kann zudem die 15-Minuten Werte an smart-me übermitteln. Erfahre hierzu mehr unter [15 Minuten Datenimport](/funktionen/15-minuten-datenimport).

[![Zaptec – Abbildung 3](/img/ocpp-ladestationen-zaptec/03.jpg)](https://youtu.be/jK-UypywXZU)

Videoanleitung Integration Zaptec in eCarUp Backend

## Zaptec Go und Pro

### Installation Zaptec Portal

1.  Navigiere zum [Zaptec Webportal](https://portal.zaptec.com/) und logge dich ein

2.  Wähle im Menü\-Band oben "Installationen" und die gewünschte Gruppe von Zaptec Stationen für die Integration in das eCarUp Abrechnungssystem

3.  Wähle nun "Einstellungen" und dann im Untermenü "Authentifizierung"

4.  Du siehst die folgende Menü-Oberfläche:


5\. Aktiviere das Feld "OCPP 1.6 Authentifizierung"

6\. Hinterlege unter "URL" die OCPP-URL, welche du bei den Vorbereitungen im eCarUp Portal erhalten hast. 

Achtung: URL muss noch ergänzt werden mit / & &#123;deviceid&#125;

- Beispiel: ws://www.ecarup.com/api/Ocpp16/wei948gfhwe/&#123;deviceid&#125;


7\. Aktiviere das Feld "Authorization required" und klicke abschliessend auf "Speichern"

⚠️ Wichtig:  Die Station muss neu gestartet werden. 

Die Zaptec-Charger der gewählten Gruppe sind nun in Ihrem eCarUp Account als Ladestationen erfasst und können entlang Ihrer individuellen Benutzungsbedingungen konfiguriert werden.

![Zaptec – Abbildung 4](/img/ocpp-ladestationen-zaptec/04.png)

### Zaptec Charger in einem Mehrtarifsystem abrechnen

Die 15-Minuten Werte der Zaptec station können exportiert werden. Dies ermöglicht erweiterte Tarifstrukturen wie beispielsweise ZEV-Abrechnungen oder Mehrtarifsysteme. Mehr dazu erfährst du auf der Seite [15-Minuten Datenimport](/funktionen/15-minuten-datenimport).

## Ohne Authentifizierung + Offline Laden

Verbinde deine Zaptec Stationen wie gwohnt über die Installation mit eCarUp. ( Schritt 5. bis 7. )

1.  Wenn nicht schon erfasst bitte ein Fahrer

2.  Navigiere danach zur Ladestation

3.  Deaktiviere die Authentifizierung

4.  Füge ein Standard-ID-Tag von deinem Fahrer hinzu. 


Wichtig: der RFID-Token muss bei eCarUp unter dem Fahrer ebenfalls registriert sein. Hier findest du mehr Infos dazu: [LINK](/fahrer/rfid-nfc-tags-carid)

![Zaptec – Abbildung 5](/img/ocpp-ladestationen-zaptec/05.png)

Was passiert:

Wenn kein Token hinterlegt ist, sendet eCarUp eine „Invalid“-Meldung, da der ID-Tag leer ist. Wir als Backend müssen jederzeit validieren können, wer sich autorisiert. 

![Zaptec – Abbildung 6](/img/ocpp-ladestationen-zaptec/06.png)

Wenn ein Token bei Zaptec hinterlegt ist, sendet eCarUp ein „Accepted“-Meldung, da der ID-Tag nun mitgesendet wird. Die Ladung wird bei eCarUp trotzdem registriert. 

![Zaptec – Abbildung 7](/img/ocpp-ladestationen-zaptec/07.png)

Die Ladung kann nun auch im Offline-Modus durchgeführt werden. Die Station sendet uns die Offline-Transaktion nach, sobald sie wieder online ist. 

![Zaptec – Abbildung 8](/img/ocpp-ladestationen-zaptec/08.png)

Der Vorteil ist, dass der Fahrer im Nachhinein ebenfalls belastet werden kann. (sofern so konfiguriert)

## Mehrere eCarup Stationsbesitzter auf einer Zaptec Installation ?

### Ja, dies funktioniert!

Gehe dazu wie folgt vor:

1.  Auf der Installation wie gehabt die Authentifizierung auf OCPP 1.6J

2.  Das Feld mit der URL leer lassen

3.  Checkbox für die Authentifizierung erforderlich anwählen.

4.  Nun gehst du zur Station, dort kannst du bei den Einstellungen den individuellen URL mit der Seriennummer der Zaptec Station hinterlegen. 

5.  Speichern.


![Zaptec – Abbildung 9](/img/ocpp-ladestationen-zaptec/09.png)

![Zaptec – Abbildung 10](/img/ocpp-ladestationen-zaptec/10.png)

### Links

[Webinaraufzeichnung Zaptec Ladestationen im eCarUp Backend](https://web.ecarup.com/webinar-zaptec-stationen-mit-ecarup-backend/)

[15 Minuten Datenimport](/funktionen/15-minuten-datenimport)

[Funktionen der Zaaptec Wallbox im eCarUp Backend](https://web.ecarup.com/backend/novavolt-zaptec-charger-abrechnen/)

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 



Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)


![Zaptec – Abbildung 11](/img/ocpp-ladestationen-zaptec/11.png)

![Zaptec – Abbildung 12](/img/ocpp-ladestationen-zaptec/12.png)
