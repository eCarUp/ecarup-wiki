---
title: 'POWERJames'
slug: '/ocpp-ladestationen/powerjames'
description: 'Backend Integrationsanleitung'
sidebar_label: 'POWERJames'
---
## Backend Integrationsanleitung

POWERJames Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal) 

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-powerjames/01.png" bildtext="POWERJames Wallbox POWERJames Charges" titel="Wallbox POWERJames Charges" href="https://powerjames.com/#funktionen" bildhoehe="10rem" mittig />

</Kacheln>

### Integration von OCPP Stationen

1.  Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

2.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

3.  Klicke im Menü, links auf den Reiter "Stationen".

4.  Wähle den Reiter "OCPP" aus.

5.  Kopiere die URL in die Zwischenablage.

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## POWERJames Charge S

- "firmwareVersion":"22.0.35" 

### Schritt 1

- Verbinde die Ladestation mit dem lokalen Wlan.

- Tipp: Siehe mitgelieferten Quick Guide.

### Schritt 2

- Kontaktiere danach den Support von PowerJames unter [support@powerjames.com](mailto:support@powerjames.com), dass du die Station mit eCarUp verbinden möchtest.

### Schritt 3

- Sobald du das Okay von Ihnen hast, kannst du loslegen. 

- Verbinde dich nochmals über das Handy mit der Wallbox und tippe erneut die IP-Adresse 192.168.4.1 im Browser ein. 

### Schritt 4

- Klicke auf "OCPP Configuration"

![POWERJames – Abbildung 2](/img/ocpp-ladestationen-powerjames/02.png)

### Schritt 5

<div className="row">
<div className="col col--6">

- Aktiviere die OCPP Schnittstelle

- ChargeBox ID wird automatisch gesetzt.

- Füge die OCPP URL aus deinem eCarUp Account hinzu.

- Am Schluss speichern und die Station neu starten.

</div>
<div className="col col--6 text--center">

![POWERJames – Abbildung 3](/img/ocpp-ladestationen-powerjames/03.png)

</div>
</div>

### Beispiel:

- OCPP URL aus ihrem Account: ws://www.ecarup.com/api/Ocpp16/D0xxxxxxxxxx

### Schritt 6

<div className="row">
<div className="col col--6">

- Schlusskontrolle, bei OCPP muss "Active" stehen.

- Somit ist die Konfiguration bei PowerJames beendet und der Messpunkt kann bei eCarUp bearbeitet werden.

</div>
<div className="col col--6 text--center">

![POWERJames – Abbildung 4](/img/ocpp-ladestationen-powerjames/04.png)

</div>
</div>

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![POWERJames – Abbildung 5](/img/ocpp-ladestationen-powerjames/05.png)

![POWERJames – Abbildung 6](/img/ocpp-ladestationen-powerjames/06.png)
