---
title: 'KEBA'
slug: '/ocpp-ladestationen/keba'
description: 'Backend Integrationsanleitung'
sidebar_label: 'KEBA'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-keba/01.png" bildtext="Keba P30" titel="Keba P30" href="https://www.keba.com/de/emobility/elektromobilitaet" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-keba/02.png" bildtext="Keba P40" titel="Keba P40" href="https://www.keba.com/de/emobility/elektromobilitaet" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

KEBA Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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

3.wss mit Basic Auth: Getestet und funktioniert

6.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung der Keba Wallbox P40

- getestete Firmware Version: 1.3.0 

Integriere die Station in ein Netzwerk, auf das du über die IP-Adresse zugreifen kannst. 

<Embed src="https://demo.arcade.software/IYNbI7tB2YAuuK25c3KR?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.660" title="Wiki - KEBA" />

1.  Gehe im Browser auf die IP Adresse der Station

2.  Logge dich ein:

Default Password: wird in der Anleitung mitgeliefert.

3.  Nimm nun unter OCPP folgende Einstellungen vor:

Chargepoint Identity: "Stationsnamen"

Achtung: der Stationsname (Chargepoint Identity) darf keine Leer- oder Sonderzeichen enthalten - mit Ausnahme vom Unterstrich "\_". Die Station kann nach erfolgreicher Integration auf der eCarUp Plattform ohne Probleme unbenannt werden.

OCPP Communication Type: "OCPP 1.6 JSON"

Central System Hostname: "www.ecarup.com"

Central System Port: "80"

Central System Path: "api/Ocpp16/xxxxxxxx

4.  Klicke auf "Apply".

![KEBA – Abbildung 3](/img/ocpp-ladestationen-keba/03.png)

5\. Die Authorization auf "ON"

6\. Online Authorization Mode "FirstOnline".

7\. Klicke auf "Apply"

![KEBA – Abbildung 4](/img/ocpp-ladestationen-keba/04.png)

<div className="row">
<div className="col col--8">

Wenn du die Station mit WSS und Basic Auth verbinden möchtest, musst du in der Keba-App folgende Einstellungen vornehmen:

- Sichere Zentralsystemverbindung für WSS

- Zenrale Systemauthentifizierung für Basic Auth.

Der Authorization Key muss beim eCarUp Account entnommen werden und im Webportal noch zusätzlich eingefügt werden.

</div>
<div className="col col--4 text--center">

![KEBA – Abbildung 5](/img/ocpp-ladestationen-keba/05.png)

</div>
</div>

Kontrolle

![KEBA – Abbildung 6](/img/ocpp-ladestationen-keba/06.png)

![KEBA – Abbildung 7](/img/ocpp-ladestationen-keba/07.png)

## Einbindung der Keba Wallbox P30 X Serie

<Video src="db3zpnosgv8" title="YouTube Video, KEBA Station ins eCarUp Backend integrieren" />

### KEBA Mess- & Eichrecht in Deutschland

Mit der KEBA ME Ladestationen können mittels eCarUp halböffentliche und öffentliche Ladevorgänge gemäss den geltenden Mess- und Eichrechtsvorschriften einfach per Kreditkarte abgerechnet werden. Mehr dazu: [Eichrecht in Deutschland](/sonstige-informationen/eichrecht-in-deutschland).

### Wichtig: Keba Rundschreiben beachten

![KEBA – Abbildung 8](/img/ocpp-ladestationen-keba/08.png)

![KEBA – Abbildung 9](/img/ocpp-ladestationen-keba/09.png)

### Wichtig: Firmware Version !

Damit du deine KEBA x-series Ladestation (Auch M&E / Firmware Version: 1.9.1 oder neuer / neuste Software immer bei den [KEBA Downloads](https://www.keba.com/de/emobility/service-support/downloads/downloads)) in einen eCarUp Account installieren kannst, muss die folgenden Vorbereitungen getroffen werden:

### Integration der x-series

1.  Verbinden Sie Ihren Computer auf die IP-Adresse der Station. Die IP Adresse wird auf dem Display der Station angezeigt.

2.  Logge dich ein:

Default Benutzername: admin

Default Password: Keba\_xxxx( Seriennummer der Station)

3.  Nimm nun unter OCPP folgende Einstellungen vor:

Chargepoint Identity: "Stationsnamen"

Achtung: der Stationsname (Chargepoint Identity) darf keine Leer- oder Sonderzeichen enthalten - mit Ausnahme vom Unterstrich "\_". Die Station kann nach erfolgreicher Integration auf der eCarUp Plattform ohne Probleme unbenannt werden.

OCPP Communication Type: "OCPP 1.6 JSON"

Central System Hostname: "www.ecarup.com"

Central System Port: "80"

Central System Path: "api/Ocpp16/&#123;code von der eCarUp Webseite&#125;". Du hast diesen bei Schritt drei in der Vorbereitung (siehe oben) gespeichert.

![KEBA – Abbildung 10](/img/ocpp-ladestationen-keba/10.png)

4\. Geräte Konfiguration

Menu: Konfiguration --> Geräte (Seitenaufbau dauert etwas lang)

Authorisierung: AN

Online Authorization Mode: First Online

![KEBA – Abbildung 11](/img/ocpp-ladestationen-keba/11.png)

Hinweis: Falls deine Firma einen Proxy im System unterstützt, kannst du diese Settings direkt auf der KEBA Station vornehmen. 

Die KEBA x-series Ladestation ist nun in deinem eCarUp Account erfasst. Jetzt kannst du die Nutzungsbedingungen der Ladestation im eCarUp Webportal festlegen.

### Integration der c-series

KEBA c-series Ladestationen können als Slaves der KEBA x-series Ladestationen installiert werden. Genau wie bei der x-series kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren, sobald sie in deinem Account installiert ist. Du entscheidest, wer, wann und zu welchem Preis laden kann.

1.  Stelle in der Slave Station den DIP Switch "DSW2.5" auf "On"

![KEBA – Abbildung 12](/img/ocpp-ladestationen-keba/12.png)

<div className="row">
<div className="col col--6">

2\. Verbind deinen Computer auf die IP-Adresse des Masters - die x-series KEBA Ladestation.

Default Benutzername: admin

Default Password: Seriennummer der KEBA x-Series Ladestation

3. Nimm nun unter OCPP folgende Einstellungen vor:

1.  Wechsele unter Operation Mode auf Charging Network

2.  Gib die Anzahl an Slaves an

3.  Trage die Seriennummer der Slaves ein

</div>
<div className="col col--6 text--center">

![KEBA – Abbildung 13](/img/ocpp-ladestationen-keba/13.png)

</div>
</div>

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![KEBA – Abbildung 14](/img/ocpp-ladestationen-keba/14.png)

![KEBA – Abbildung 15](/img/ocpp-ladestationen-keba/15.png)
