---
title: 'ABB'
slug: '/ocpp-ladestationen/abb'
description: 'Alle ABB Stationen mit Backendfunktionalität können ins eCarUp Backend eingebunden werden.'
sidebar_label: 'ABB'
---
Alle ABB Stationen mit Backendfunktionalität können ins eCarUp Backend eingebunden werden.
Auch bereits installierte ABB Ladestationen können zu  eCarUp migriert werden. 

<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-abb/01.jpg" bildtext="ABB AC Terra Wallbox" titel="AC Terra Wallbox" href="https://e-mobility.abb.com/en" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-abb/02.jpg" bildtext="ABB AC EV Lunic Pro M / Pro S" titel="AC EV Lunic Pro M / Pro S" href="https://e-mobility.abb.com/en" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-abb/03.jpg" bildtext="ABB DC Terra 24 / 54 / 54 HV" titel="DC Terra 24 / 54 / 54 HV" href="https://e-mobility.abb.com/en" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-abb/04.jpg" bildtext="ABB DC Terra Wallbox" titel="DC Terra Wallbox" href="https://e-mobility.abb.com/en" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

ABB Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

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

## Einbindung der ABB AC Ladestationen

<Video src="UxKCeK8RGSA" title="YouTube Video, Integrationsanleitung ABB im eCarUp Backend" />

### ABB Terra AC Wallbox

Um die ABB Terra AC Wallbox zu integrieren müssen folgende Schritte (einmalig) seitens ABB gemacht werden :

- TerraConfig Portal Account erstellen. Beantragung über  [https://forms.abb.com/form-39881/Antrag-Connected-Services-AC-Terra](https://forms.abb.com/form-39881/Antrag-Connected-Services-AC-Terra))

- App Account im Portal erstellen

- eCarUp URL über das ABB Portal hinzufügen

- Achtung: Im Third Party Name keine Sonderzeichen und Leerschläge!

- Ohne Passwort

 TerraConfig Portal 

![ABB – Abbildung 5](/img/ocpp-ladestationen-abb/05.png)

![ABB – Abbildung 6](/img/ocpp-ladestationen-abb/06.png)

### Danach auf der ABB TerraConfig App wie folgt vorgehen:

- Mit dem App (ABB) Account auf der TerraConfig App sich anmelden

- Per Bluetooth sich mit der Station verbinden (braucht mitgelieferten Key)

- Geprüft mit Software-Stand 1.6.9

![ABB – Abbildung 7](/img/ocpp-ladestationen-abb/07.png)

1.  Neue Konfiguration

![ABB – Abbildung 8](/img/ocpp-ladestationen-abb/08.png)

2\. Die Schritte von 1-5 ab arbeiten

![ABB – Abbildung 9](/img/ocpp-ladestationen-abb/09.png)

<div className="row">
<div className="col col--6">

2.1 Gewünschte Verbindungsart auswählen

2.2 Freies Laden deaktivieren

2.3 OCPP-Konfiguration (wird noch detaillierter erklärt)

2.4 Externe RFID-Karten aktivieren

2.5 Konfiguration immer Bestätigen

2.3 OCPP-Konfiguration

</div>
<div className="col col--6 text--center">

![ABB – Abbildung 10](/img/ocpp-ladestationen-abb/10.png)

</div>
</div>

<div className="row">
<div className="col col--6">

2.3.1Externen Server aktivieren

Die URL die im Webportal hinzugefügt wurde kann hier ausgewählt werden.

2.3.2 Benutzerdefinierten URL hinzufügen, hier kann die OCPP URL manuell eingefügt werden.

OCPP-Server anwählen und konfigurieren

</div>
<div className="col col--6 text--center">

![ABB – Abbildung 11](/img/ocpp-ladestationen-abb/11.png)

</div>
</div>

OCPP-Server Konfiguration bestätigen

![ABB – Abbildung 12](/img/ocpp-ladestationen-abb/12.png)

Ganze Konfiguration speichern und neustarten. 

![ABB – Abbildung 13](/img/ocpp-ladestationen-abb/13.png)

## Einbindung der ABB DC Ladestationen

### ABB Terra DC (Wallbox und Schnellladestationen)

DC Ladestationen müssen von ABB mit dem eCarUp Backend bespielt werden. Wende dich dazu mit Angaben der Station und deiner OCPP URL (aus dem Webportal) direkt an:

-  [emobility@ch.abb.com](mailto:emobility@ch.abb.com)

Die Migration wird dir per E-Mail bestätigt.

Danach ist die Station in deinem eCarUp Account erstellt und du kannst die Einstellungen gemäss deinem Anwendungsfall vornehmen. Du findest dazu in der Rubrik [Backend](/funktionen) mehr Informationen.

## Alte Version

### Danach auf der ABB TerraConfig App (alte Version) wie folgt vorgehen:

- Mit dem App (ABB) Account auf der TerraConfig App sich anmelden

- Per Bluetooth sich mit der Station verbinden (braucht mitgelieferten Key)

<Video src="6aw4vxHiWwU" title="YouTube Video, OCPP-Backend für ABB-Wandladestation Terra AC einstellen" />

1.  OCPP Server

![ABB – Abbildung 14](/img/ocpp-ladestationen-abb/14.jpg)

2\. "+" Anwählen

![ABB – Abbildung 15](/img/ocpp-ladestationen-abb/15.jpg)

3\. Vordefinierter URL Link erscheint

![ABB – Abbildung 16](/img/ocpp-ladestationen-abb/16.jpg)

4\. "Next" klicken

![ABB – Abbildung 17](/img/ocpp-ladestationen-abb/17.png)

5\. Externen Zugriff aktivieren und "Configure" klicken

![ABB – Abbildung 18](/img/ocpp-ladestationen-abb/18.png)

6\. Mit OK abschliessen

![ABB – Abbildung 19](/img/ocpp-ladestationen-abb/19.png)

⚠️ Wenn die RFID-Karten nicht funktionieren, musst du in der Terra Config App "externe Karten aktivieren".

## Wichtig:

Wenn die RFID-Karten nicht funktionieren, musst du bei der Station über die Terra Config App noch folgende Einstellung tätigen:

![ABB – Abbildung 20](/img/ocpp-ladestationen-abb/20.png)

Information:

Seit dem Software Release von ABB (SW V1.6.5) wird mit dem mitgeliefertem ABB Badge (RFID-Karte No.xxxxxxxxx) die UID aus Sicherheitsgründen nicht mehr über das OCPP mitgeliefert.  

### Mögliche Hürden für eine erfolglose Aktivierung über die RFID-Karte

1.  Wenn die Station uns eine Autorisierungsanfrage mit der Seriennummer sendet, bedeutet das, dass die Station noch im Free Vending Modus ist. Diesen Modus bitte deaktivieren unter dem Device Mode in der TerraConfig App. 

![ABB – Abbildung 21](/img/ocpp-ladestationen-abb/21.png)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben) 

![ABB – Abbildung 22](/img/ocpp-ladestationen-abb/22.png)

![ABB – Abbildung 23](/img/ocpp-ladestationen-abb/23.png)
