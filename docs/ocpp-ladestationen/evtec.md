---
title: 'EVTEC'
slug: '/ocpp-ladestationen/evtec'
description: 'Backend Integrationsanleitung'
sidebar_label: 'EVTEC'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-evtec/01.jpg" bildtext="EVTEC Cappuccino & Charge" titel="Cappuccino & Charge" href="https://www.evtec.ch/geraete" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-evtec/02.jpg" bildtext="EVTEC Coffee & Charge" titel="Coffee & Charge" href="https://www.evtec.ch/geraete" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-evtec/03.png" bildtext="EVTEC Espresso & Charge" titel="Espresso & Charge" href="https://www.evtec.ch/geraete" bildhoehe="10rem" mittig />

</Kacheln>

## Backend Integrationsanleitung

EVTEC Stationen können in wenigen Schritten in das eCarUp Abrechnungssystem integriert werden. Einmal in deinem Account installiert, kannst du die Benutzungsbedingungen deiner Stationen unkompliziert selber definieren (Preise, Nutzer, verfügbare Zeiten etc.). Du entscheidest wer, wann und zu welchem Preis laden kann. 

- Voraussetzung für die [Integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Konfiguration im [Webportal für Stationsbetreiber](/stationsbetreiber/webportal)

- Lerne hier mehr, über unsere [Premium Funktionen](/funktionen)

### Integration von OCPP Stationen

Allgemeine Information zur [Inbetriebnahme OCPP-Station](/stationsbetreiber/inbetriebnahme-ocpp-station) 

Stelle sicher, dass deine Ladestationen installiert sind und dein PC oder Handy mit dem gleichen Netzwerk wie die Ladestation verbunden ist.

1.  Öffne das [Webportal von eCarUp](https://admin.ecarup.com/authentication/login) und logge dich mit deinen Accountdaten ein.

2.  Klicke im Menü, links auf den Reiter "Stationen".

3.  Wähle den Reiter "OCPP" aus.

4.  Kopiere die URL in die Zwischenablage. 

    1.  ws Link ohne Basic Auth: Getestet und funktioniert

    2.  wss ohne Basic Auth: nicht getestet

    3.  wss mit basic Auth: nicht getestet

5.  Gehe zum Webinterface der gewünschten Station und füge die kopierte URL ein.

## Einbindung ins eCarUp Portal

## Hinweis

<div className="row">
<div className="col col--8">

- Ein Kreditkartenterminal kann parallel zu eCarUp betrieben werden, um maximale Flexibilität zu gewährleisten. Für weitere Informationen steht dir EVTEC gerne zur Verfügung.

1.  IP-Einstellungen der EVTEC Station auf das IP-Netzwerk des Stations-Verwalters anpassen (am Gerät).

2.  Mit einem PC aus demselben Netzwerk auf die EVTEC-Station verbinden (via der oben definierten IP-Adresse). Siehe Screenshot mit Beispiel 192.168.10.20. Danach «Config» Button betätigen.

Bei Fragen zur Verbindung der Station (welche IP hat meine Station, Benutzername & PW) wende dich an eCarUp oder EVTEC direkt.

</div>
<div className="col col--4 text--center">

![EVTEC – Abbildung 4](/img/ocpp-ladestationen-evtec/04.png)

</div>
</div>

3\. Menüpunkt OCPP anwählen.

![EVTEC – Abbildung 5](/img/ocpp-ladestationen-evtec/05.png)

4\. Einstellungen wie im Screenshot unten vornehmen. Dann Connection Parameters anwählen.

Wichtig: idTagConversion auf HexZero... umstellen

![EVTEC – Abbildung 6](/img/ocpp-ladestationen-evtec/06.jpg)

5\. Einstellungen wie im Screenshot unten vornehmen.

⚠️ WICHTIG: Beim Feld «CsAddress» den richtigen Pfad für den gewünschten eCarUp Account hinterlegen.

![EVTEC – Abbildung 7](/img/ocpp-ladestationen-evtec/07.png)

<div className="row">
<div className="col col--8">

6\. Der Pfad für den eCarUp Account kann folgendermassen ermittelt werden.

a) Auf www.ecarup.com mit dem gewünschten Account einloggen.

b) Reiter «OCPP URL» anwählen.

c) Link kopieren und im Feld «CsAddress» beim EVTEC Interface hinterlegen.

7\. Am Schluss per Button «back» zum Menü von Punkt 4 dieser Anleitung zurückkehren. Dann «ConfigurationParameters» anwählen.

8\. Nach dem Anwählen von «ConfigurationParameters» die Einstellungen für die EVTEC Station gemäss den eigenen Bedürfnissen vornehmen (Beispiel im Screenshot)

</div>
<div className="col col--4 text--center">

![EVTEC – Abbildung 8](/img/ocpp-ladestationen-evtec/08.png)

</div>
</div>

9. MeterValuesSampledData mit dem Wert Energy.Active.Import.Register,Power.Active.Import versehen, damit die Live Ladeleistung angezeigt wird.

10. Am Schluss via den Button «back» zum Menü von Punkt 4 und dann noch einmal über den Button «back» zum Menü von Punkt 3 dieser Anleitung zurückkehren. Dann «Authentication» anwählen.

![EVTEC – Abbildung 9](/img/ocpp-ladestationen-evtec/09.png)

<div className="row">
<div className="col col--8">

11\. Nach dem Anwählen von «Authentification» den Menüpunkt «ChargeAuthentification» auf OCPP festlegen. Andere Menüpunkte unberührt lassen.

</div>
<div className="col col--4 text--center">

![EVTEC – Abbildung 10](/img/ocpp-ladestationen-evtec/10.png)

</div>
</div>

12\. Die EVTEC-Station ist nun im durch die URL festgelegten eCarUp Account erstellt worden. Nun kann die Station via Standardprozess im eCarUp App und Web-Login anhand der individuellen Bedürfnisse konfiguriert werden (Standort, Preise, Bilder etc.).

⚠️ ACHTUNG: Mehrere Connectoren beachten!

## Erweiterte Einstellung via Wartungstool (eCarUp Premium)

Der Upload-Intervall der Meter Values kann von Station zu Station variieren. Wir empfehlen einen Intervall zwischen 30-60s. Nur so können wir die aktuelle Ladeleistung auf der App besser errechnen und anzeigen. 

Dies kannst du wie folgt ändern:

1.  Get Configuration (um auszulesen, was programmiert ist)

2.  Change Configuration (um den Wert zu überschreiben)

![EVTEC – Abbildung 11](/img/ocpp-ladestationen-evtec/11.png)

![EVTEC – Abbildung 12](/img/ocpp-ladestationen-evtec/12.png)
