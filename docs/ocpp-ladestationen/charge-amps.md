---
title: 'Charge Amps'
slug: '/ocpp-ladestationen/charge-amps'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Charge Amps'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-charge-amps/01.jpg" bildtext="Charge Amps Aura" titel="Charge Amps Aura" href="https://www.chargeamps.com/de/product/charge-amps-aura/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-charge-amps/02.jpg" bildtext="Charge Amps Dawn" titel="Charge Amps Dawn" href="https://www.chargeamps.com/de/product/charge-amps-aura/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-charge-amps/03.jpg" bildtext="Charge Amps Halo" titel="Charge Amps Halo" href="https://www.chargeamps.com/de/product/charge-amps-aura/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Charge Amps Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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

## Einbindung der Charge Amps Stationen

### HALO (1 x 11 kW)

⚠️ Wichtig: Die Firmware der Station muss mindestens die Version 158 enthalten 

### Vorbereitende Schritte für die Integration der HALO Wallbox

1.  Rufe folgende Seite auf und registriere dich dort: [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Wenn du eingeloggt bist, kannst du deine HALO Wallbox über das Profil hinzufügen.

3.  Dann zum Menüpunkt "Fernsteuerung" gehen und die RFID-Sperre aktivieren. 

⚠️ ACHTUNG: Diese Sperre muss VOR der OCPP-Implementierung geschehen!

![Charge Amps – Abbildung 4](/img/ocpp-ladestationen-charge-amps/04.png)

### OCPP-Integration

1.  Schalte deine HALO an

2.  Nutze dazu ein Smartphone und gehe zu deinen WLAN\-Einstellungen

3.  Wähle den Hotspot der HALO-Wallbox aus (HALO\_Seriennummer)

4.  Öffnen den Browser auf dem Smartphone und gib folgende IP-Adresse ein: 192.168.250.1

5.  Die HALO Setup\-Seite öffnet sich

6.  Gib das geforderte Passwort ein. Das Passwort findest du auf dem mitgeliefertem Schreiben von Charge Amps 

7.  Bei den Einstellungen auf den Menü-Pfeil (oben rechts) klicken

- Unter dem Menüpunkt Wi-Fi kann die Station in das gewünschte WLAN verbunden werden 

-  Menüpunkt "OCPP" anwählen

8.  Die eCarUp URL muss nun  eingetragen werden. Danach "Aktualisieren" klicken und die Wallbox neu starten.

    Beispiel einer URL: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

![Charge Amps – Abbildung 5](/img/ocpp-ladestationen-charge-amps/05.png)

![Charge Amps – Abbildung 6](/img/ocpp-ladestationen-charge-amps/06.png)

## AURA (2 x 22 kW)

### Vorbereitende Schritte für die Integration der AURA Wallbox

1.  Rufe folgende Seite auf und registriere dich dort: [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Wenn du eingeloggt bist, kannst du deine Aura Wallbox über das Profil hinzufügen.

3.  Dann zum Menüpunkt "Fernsteuerung" gehen und die RIFD-Sperre aktivieren. Dies bitte bei beiden Connectoren!

⚠️ ACHTUNG: Diese Sperre muss VOR der OCPP-Implementierung geschehen!

![Charge Amps – Abbildung 7](/img/ocpp-ladestationen-charge-amps/07.png)

### OCPP-Integration

1.  Schalte deine AURA an

2.  Nutze dazu ein Smartphone und gehe zu deinen WLAN-Einstellungen

3.  Wähle den Hotspot der AURA\-Wallbox aus (AURA\_Seriennummer)

4.  Öffne deinen  Browser auf dem Smartphone und gib folgende IP-Adresse ein: 192.168.250.1

5.  Die AURA Setup-Seite öffnet sich

6.  Gib das geforderte Passwort ein. Das Passwort findest du auf dem mitgeliefertem Schreiben von Charge Amps 

7.  Bei den Einstellungen auf den Menü-Pfeil (oben rechts) klicken

- Unter dem Menüpunkt Wi-Fi kann die Station in das gewünschte WLAN verbunden werden 

-  Menüpunkt "OCPP" anwählen

8.  Die eCarUp URL muss nun  eingetragen werden. Danach "Aktualisieren" klicken und die Wallbox neu starten.

    Beispiel einer URL: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

![Charge Amps – Abbildung 8](/img/ocpp-ladestationen-charge-amps/05.png)

![Charge Amps – Abbildung 9](/img/ocpp-ladestationen-charge-amps/06.png)

### Wichtige Informationen über die AURA

- Standardmäßig ist die AURA so konfiguriert, dass sie erst nach Beendigung des Ladevorgangs mittels RFID-Karte wieder freigegeben werden kann. (Entkopplung des Steckers) 

- Das heißt, wenn Sie den Ladevorgang auf der Autoseite beenden, wird der Mechanismus der Station für den Stecker nicht automatisch freigegeben. 

- Dies kann mit Hilfe unseres Wartungstools (eCarUp Premium) behoben werden, gehen Sie dazu wie folgt vor:

1.  Parameter Get Configuration und der Schlüssel ist UnlockConnectorOnEVSideDisconnect (default zu false).

2.  Parameter für die Änderung Change Configuration und wieder mit dem Schlüssel UnlockConnectorOn EVSideDisconnect + Value auf true setzen und mit Set speichern.

1.

![Charge Amps – Abbildung 10](/img/ocpp-ladestationen-charge-amps/10.png)

2.

![Charge Amps – Abbildung 11](/img/ocpp-ladestationen-charge-amps/11.png)

## Dawn (1 x 22 kW)

Wichtig: getesteter Firmware Stand, 1.3.5

### Vorbereitende Schritte für die Integration der Dawn Wallbox

1.  Rufe folgende Seite auf und registriere dich dort: [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Wenn du eingeloggt bist, kannst du deine Dawn Wallbox über das Profil hinzufügen.

3.  Dann zum Menüpunkt "Fernsteuerung" gehen und die RIFD-Sperre aktivieren. 

⚠️ ACHTUNG: Diese Sperre muss VOR der OCPP-Implementierung geschehen!

![Charge Amps – Abbildung 12](/img/ocpp-ladestationen-charge-amps/12.png)

### OCPP-Integration

1.  Schalte deine Dawn ein.

2.  Nutze für die Integration dein Smartphone und installiere die Installer App von Charge Amps

3.  Öffne die App und starte einen Suchlauf (via Bluetooth). Wichtig, dies kann immer nur in den ersten 10min bei Stromzufuhr der Station gemacht werden.

![Charge Amps – Abbildung 13](/img/ocpp-ladestationen-charge-amps/13.png)

<div className="row">
<div className="col col--6">

4\. Verbinde die Ladestation mit dem gewünschten Medium (Wlan,LAN oder mittels eSim )

5\. Gehe auf CPMS und klicke auf editieren

</div>
<div className="col col--6 text--center">

![Charge Amps – Abbildung 14](/img/ocpp-ladestationen-charge-amps/14.png)

</div>
</div>

<div className="row">
<div className="col col--6">

6\. Klicke auf Connect to ohter CPMS um die eCarUp URL zu platzieren

</div>
<div className="col col--6 text--center">

![Charge Amps – Abbildung 15](/img/ocpp-ladestationen-charge-amps/15.png)

</div>
</div>

<div className="row">
<div className="col col--6">

7\. Die eCarUp URL aus deinem Account manuell eintippen.

Beispiel: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

8\. Auf Connect klicken

</div>
<div className="col col--6 text--center">

![Charge Amps – Abbildung 16](/img/ocpp-ladestationen-charge-amps/16.png)

</div>
</div>

8. Eine Bestätigung erscheint

![Charge Amps – Abbildung 17](/img/ocpp-ladestationen-charge-amps/17.png)

<div className="row">
<div className="col col--6">

9\. Überprüfung auf der Übersicht inkl. Status der Verbindung.

10\. Konfiguration bestätigen und abschliessen.

</div>
<div className="col col--6 text--center">

![Charge Amps – Abbildung 18](/img/ocpp-ladestationen-charge-amps/18.png)

</div>
</div>

11\. Die Station tauch nun bei deine eCarUp Account auf. 

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Charge Amps – Abbildung 19](/img/ocpp-ladestationen-charge-amps/19.png)

![Charge Amps – Abbildung 20](/img/ocpp-ladestationen-charge-amps/20.png)
