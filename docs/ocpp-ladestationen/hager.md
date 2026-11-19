---
title: 'Hager'
slug: '/ocpp-ladestationen/hager'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Hager'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-hager/01.png" bildtext="Hager witty plus & pro" titel="Hager witty plus & pro" href="https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-hager/02.png" bildtext="Hager witty park 2" titel="Hager witty park 2" href="https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-hager/03.png" bildtext="Hager witty share" titel="Hager witty share" href="https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Hager Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

    1.  ws Link ohne Basic Auth: Getestet und funktioniert

    2.  wss ohne Basic Auth: Getestet und funktioniert

    3.  wss mit Basic Auth: Getestet und funktioniert

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Hager witty park 2

- getestete Firmware Version: V1.1.0.11

1.  Verbinde dich mit der Hager Station via LAN oder WLAN (Detail für die Verbindung findest du in der Installationsanleitung)

2.  Login Maske (Die erforderlichen Login-Daten findest du ebenfalls in der Installationsanleitung.)

3.  Analog zur Einbindung der Hager witty pro, kannst du deine eCarUp URL gleichermasse eingeben. [Link](/ocpp-ladestationen/hager#einbindung-der-hager-witty-pro)

4\. Falls du den Bildschirm noch personalisieren möchtest, kannst du dies unter "Ladestationen", danach unter Bildschirm veranlassen. 

![Hager – Abbildung 4](/img/ocpp-ladestationen-hager/04.png)

5. Tipp: Du kannst die QR-Codes direkt über das OCPP auf das Display der Station projizieren lassen. 

- Mittels der ChangeConfiguration über das Wartungstool, kannst du folgenden Befehl Absetzen:

\[2, "b1a70001-6e37-b9a9-d242-a5f2e0ab6860", "ChangeConfiguration", &#123;"key":"HagerQrCodeURL1","value":"[https://admin.ecarup.com/instant-payment?serial=I3M264mupkyqFp4fu21QTqZeY](https://admin.ecarup.com/instant-payment?serial=I3M264mupkyqFp4fu21QTqZeY)"&#125;\]

- Wie du an die URL kommst findest du hier: [Link](/stationsbetreiber/qr-code)

- Alles über das Wartungstool hier: [Link](/funktionen/wartung)

Beispiel:

![Hager – Abbildung 5](/img/ocpp-ladestationen-hager/05.jpg)

![Hager – Abbildung 6](/img/ocpp-ladestationen-hager/06.png)

## Einbindung der Hager witty pro

- XVL122SCH und XVL122CCH

- getestete Firmware Version: V1.1.5.3

1.  Verbinde dich mit der Hager Station via LAN oder WLAN (Detail für die Verbindung findest du in der Installationsanleitung)

2.  Login Maske (Die erforderlichen Login-Daten findest du ebenfalls in der Installationsanleitung.).

3.  Unter dem Menü Punkt Charging Station kann die gewünschte Verbindung eingestellt werden. 

4\. Bei Access Management kann der Charge Point Operator hinzugefügt werden. 

5\. OCPP-Server die URL aus deinem Account, z.B.    wss://www.ecarup.com/api/Ocpp16/D037xxxxxxxxxx

6\. ChargePoint-ID kann mit den Voreinstellungen belassen werden.

 7\. Authentifizierungstyp auf Keine.

8\. Speichern und Neustarten

![Hager – Abbildung 7](/img/ocpp-ladestationen-hager/07.png)

![Hager – Abbildung 8](/img/ocpp-ladestationen-hager/08.png)

Optional: wss + Basic Auth. 

![Hager – Abbildung 9](/img/ocpp-ladestationen-hager/09.png)

## Hager Lastmanager

XEM 520

Wichtig: Firmware Version LLM\_2023\_098 muss vorhanden sein. 

1.  Verbinden dich mit dem Lastmanager

2.  Klicke auf den Menü-Punkt Ladestationen

3.  Suche die Ladestation und konfiguriere die Phasenzugehörigkeit

4.  Gehe zu Ladestation und aktiviere Ladestationsbetreiber CPO und danach auf Einstellungen klicken.

![Hager – Abbildung 10](/img/ocpp-ladestationen-hager/10.png)

5\. Wähle eCarUp in der Liste aus und füge deine eCarUp ID hinzu. (nicht die ganze URL)

z.B. (ws://www.ecarup.com/api/Ocpp16/) D037xxxxxxxxxx

danach auch weiter klicken. 

![Hager – Abbildung 11](/img/ocpp-ladestationen-hager/11.png)

6. Füge die Seriennummer der Ladestation im Feld OCPP ID hinzu. 

7\. Klicke nun auf Verbinden zum CPO Server.

8\. Die Station startet sich neu. 

![Hager – Abbildung 12](/img/ocpp-ladestationen-hager/12.png)

Schlusskontrolle

![Hager – Abbildung 13](/img/ocpp-ladestationen-hager/13.png)

## Einbindung der Hager witty plus

<div className="row">
<div className="col col--6">

- XVL122S und XVL122C

- getestete Firmware Version: V1.1.1.6

- Installiere hierfür die Hager Charge App

</div>
<div className="col col--6 text--center">

![Hager – Abbildung 14](/img/ocpp-ladestationen-hager/14.png)

</div>
</div>

1.  ### Kopplung aktivieren

![Hager – Abbildung 15](/img/ocpp-ladestationen-hager/15.png)

### 2\. Station hinzufügen

![Hager – Abbildung 16](/img/ocpp-ladestationen-hager/16.png)

Füge der Ladestation ein Netzwerk hinzu

### 3.

![Hager – Abbildung 17](/img/ocpp-ladestationen-hager/17.png)

### 4.

![Hager – Abbildung 18](/img/ocpp-ladestationen-hager/18.png)

### 5.

![Hager – Abbildung 19](/img/ocpp-ladestationen-hager/19.png)

### 6.

![Hager – Abbildung 20](/img/ocpp-ladestationen-hager/20.png)

### 7.

![Hager – Abbildung 21](/img/ocpp-ladestationen-hager/21.png)

- Füge deine eCarUp URL in das Adressen Feld. 

- OCPP ID, füge hier die Seriennummer der Station ein. 

- Speichern. 

## Einbindung der Hager witty share

- XEV1R22T2

- wurde von Hager abgekündigt. 

<Video src="g2omgn1jWo0" title="YouTube Video, Integrationsanleitung Hager im eCarUp Backend" />

Kurzanleitung Integration Hager Station in eCarUp Backend

1.  Verbinde Dich mit der Hager Station via LAN oder WLAN (Detail für die Verbindung findest du in der Installationsanleitung)

2.  Login Maske (Die erforderlichen Login-Daten findest du ebenfalls in der Installationsanleitung.).

- Nutzername: admin

- PW:1234

3.  Unter Konfiguration kannst du die LAN und oder Wlan einstellungen vornehmen.

4.  Unter Protokoll den Typ auf OCPP und Autorisierungsmodus auf OCPP Voll stellen. 

5.  OCPP-Server die URL aus deinem Account, z.B. ws://www.ecarup.com/api/Ocpp16/D037xxxxxxxxxx

6.  ChargePoint-ID kann mit den Voreinstellungen belassen werden. 

7.  Authentifizierungstyp auf Keine.

8.  Speichern und Neustarten

### 2\. Schritt: Einloggen

![Hager – Abbildung 22](/img/ocpp-ladestationen-hager/22.png)

### 3\. Schritt: WLAN & LAN Einstellungen konfigurieren

![Hager – Abbildung 23](/img/ocpp-ladestationen-hager/23.png)

### 4.-7. Schritt: Eingaben einfügen & anpassen

![Hager – Abbildung 24](/img/ocpp-ladestationen-hager/24.png)

### 8\. Schritt: Speichern und Neustarten.

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Hager – Abbildung 25](/img/ocpp-ladestationen-hager/25.png)

![Hager – Abbildung 26](/img/ocpp-ladestationen-hager/26.png)
