---
title: 'Enelion'
slug: '/ocpp-ladestationen/enelion'
description: 'Backend Integrationsanleitung'
sidebar_label: 'Enelion'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-enelion/01.jpg" bildtext="Enelion Lumina" titel="Lumina" href="https://enelion.com/product/lumina/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-enelion/02.png" bildtext="Enelion Vertica" titel="Vertica" href="https://enelion.com/product/vertica/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

Enelion Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Station installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Enelion Lumina

### Vorbereitende Schritte für die Integration der Lumina

1.  Schalte deine Lumina an

2.  Nutze dazu ein Smartphone und gehe zu deinen WLAN-Einstellungen

3.  Wähle den Hotspot der Lumina\-Wallbox aus (Enelion-xxxx-xxx)

4.  Öffne deinen Browser auf dem Smartphone und gib folgende IP-Adresse ein: 192.168.8.8

5.  Die Enelion Setup-Seite öffnet sich

6.  Gib das geforderte Passwort ein. Das Passwort findest du auf dem mitgeliefertem Schreiben von Enelion 

### Schritt 1

<div className="row">
<div className="col col--6">

- Unter Network kann die Station mit WLAN oder GSM verbunden werden.

</div>
<div className="col col--6 text--center">

![Enelion – Abbildung 3](/img/ocpp-ladestationen-enelion/03.png)

</div>
</div>

### Schritt 2

- Unter Charger "Authorization" anwählen

![Enelion – Abbildung 4](/img/ocpp-ladestationen-enelion/04.png)

### Schritt 3

- FreeCharge Modus herausnehmen und speichern

![Enelion – Abbildung 5](/img/ocpp-ladestationen-enelion/05.png)

### Schritt 4

- Bei OCPP "Connection" anwählen

![Enelion – Abbildung 6](/img/ocpp-ladestationen-enelion/06.png)

### Schritt 5

- OCPP Connection aktivieren

- Unter Connection settings:

1.  Device auf Master setzen

2.  Connector ID 1

3.  Freecharge idTAg darf nicht leer sein. Hier kann ein Master-Badge hinterlegt werden (Whitelist) oder wenn es keine Bedeutung hat analog Beispiel Printscreen

4.  Deine eCarUp URL aus dem Account hinterlegen

5.  Charge Point ID darf ebenfalls nicht leer sein und kann individuell beschriftet werden. (Achtung max. 20 Zeichen und kein Leerschlag)

\+ Speichern und Neustarten

Kontrolle im Dashboard über den Verbindungsstatus der Station. 

<div className="row">
<div className="col col--6 text--center">

![Enelion – Abbildung 7](/img/ocpp-ladestationen-enelion/07.png)

</div>
<div className="col col--6 text--center">

![Enelion – Abbildung 8](/img/ocpp-ladestationen-enelion/08.png)

</div>
</div>

### Enelion Vertica und Wallbox Duo

- firmwareVersion":"4.4.4

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![Enelion – Abbildung 9](/img/ocpp-ladestationen-enelion/09.png)

![Enelion – Abbildung 10](/img/ocpp-ladestationen-enelion/10.png)
