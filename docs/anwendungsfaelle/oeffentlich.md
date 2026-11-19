---
title: 'Öffentliches Laden'
slug: '/anwendungsfaelle/oeffentlich'
description: '1\. Allgemeine Informationen'
sidebar_label: 'Öffentlich'
---

## 1\. Allgemeine Informationen

Im folgenden Artikel wird eine Standardkonfiguration für das Aufsetzen und Betreiben einer öffentlichen Ladestation mit eCarUp beschrieben. Dabei bezahlen die Fahrer per Kreditkarte und das Guthaben wird automatisch vom Fahrer zum Stationsbesitzer transferiert. Falls Ihre Station (z.B. innerhalb eines KMU) halböffentlich zur Verfügung steht, haben wir dies in einem separaten [Wiki-Artikel](/anwendungsfaelle/laden-im-kmu) dokumentiert.

Der Vorteil dieser Variante liegt darin, dass das Geld automatisiert von der Kreditkarte des Fahrers auf das Konto des Stationsbesitzers übertragen wird. 

Dies hat zwei entscheidende Vorteile:

1.  Der ganze Inkassoprozess ist vollständig automatisiert, eCarUp überträgt das Geld der Transaktionen direkt nach deren Ende auf das Konto des Stationsbesitzers. 

2.  Dadurch ist das Guthaben nie im Besitz der eCarUp AG und alle Transaktionen (auch z.B. von Gästen auf den Besucherparkplätzen) sind innerhalb der geltenden gesetzlichen Bestimmungen.

Du findest bei uns im Wiki alle weiteren Angaben zum [Abrechnen per Kreditkarte](/stationsbetreiber/abrechnen-auszahlen) und zu den [gesetzlichen Bestimmungen zum übertragenen Guthaben](/stationsbetreiber/account-verifizieren).

Das Abrechnen per Kreditkarte hat immer eine 10%ige Kommission zur Folge, unabhängig davon ob eine [eCarUp Premiumlizenz](https://web.ecarup.com/preise-ladestationen-backend/) aktiv ist oder nicht.

Eine [eCarUp Premium-Lizenz](https://web.ecarup.com/preise-ladestationen-backend/) wird für diesen Anwendungsfall dringend empfohlen (da sonst einige wichtige Features wie das Wartungstool, die Reports oder das Roaming fehlen).

## 2\. Ladestationen mit dem eCarUp Backend verbinden

Zuerst müssen die Stationen mit dem eCarUp Backend verbunden werden:

- Du findest eine aktuelle Liste mit allen [unterstützen Ladestationsmodellen](/ocpp-ladestationen) auf unserem Wiki.

- Eine [Schritt für Schritt Anleitung zur Einbindung der Stationen](/stationsbetreiber/inbetriebnahme-ocpp-station) ist ebenfalls aufgeschaltet.

- Damit Geld auf den Account übertragen werden kann, muss dieser verifiziert werden. Die Informationen dazu findest du hier: [Account in eCarUp verifizieren](/sonstige-informationen/stripe). Wir empfehlen, diesen Schritt vor oder während der Installation der Ladestationen vorzunehmen. Ohne Verifizierung kann eCarUp aus rechtlichen Gründen kein Geld auf den Account übertragen und es sind keine kostenpflichtige Ladungen möglich.

    Das übertragene Geld wird laufend auf Ihren Stationsinhaberaccount übertragen und kann unter dem Menüpunkt "Account" jederzeit auf eine beliebige IBAN ausbezahlt werden.

![Öffentliches Laden – Abbildung 1](/img/anwendungsfaelle-oeffentlich/01.png)

## 3\. Ladestationen einrichten

Wenn die Ladestationen mit eCarUp verbunden wurden, erscheinen diese im eCarUp Account im Dashboard und in der Stationsverwaltung.

Ladestationen können mit eCarUp problemlos öffentlich und damit gegenüber anonymen Fahrern abgerechnet werden. Dafür muss den Stationen in der Einrichtung der Status "öffentlich" zugeteilt werden und ein Standort gesetzt werden. 

![Öffentliches Laden – Abbildung 2](/img/anwendungsfaelle-oeffentlich/02.png)

### Grundlegende Einstellungen

Danach können die Stationen mit Klick auf "Stationen" und dann "Stationsverwaltung" eingerichtet werden:

- Name und Beschreibung der Station ändern

- Stationen löschen

- Standorte setzen

- Anschlüsse bearbeiten (falls mehrere)

- Anschlusstypen definieren (z.B. Typ 2,CSS oder Chademo)

- Max.  Energie definieren (z.B. 22 kW)

- Zugriff definieren (Öffentlich, Limitiert und Privat)

Öffentlich = alle User / Limitiert = Stationsbesitzer und SpezialUser / Privat = NUR Stationsbesitzer bzw. Account in welchem die Stationen installiert sind

- Preise für Energie und Zeit setzen

- Reservierte Zeiten definieren

- Station aus dem Webportal aktivieren

Alle [Einstellungen für Stationsbesitzer](/stationsbetreiber/webportal) sind in einem Wiki Artikel zusammengefasst.

Fertig konfiguriert, kann das so aussehen:

![Öffentliches Laden – Abbildung 3](/img/anwendungsfaelle-oeffentlich/03.png)

## 4\. Stationen beschriften

Bei öffentlich zugänglichen Lade Beschriftung der Ladestationen sehr wichtig, damit die Fahrer wissen, wie sie die Ladestation freischalten können. Du kannst durch eine klare Beschriftung auch wichtige Informationen wie z.B. zusätzliche Regeln (max. Parkdauer, Parkgebühren etc.) an die Fahrer zu kommunizieren.

Für das Freischalten direkt über eCarUp gibt es dafür zwei Möglichkeiten:

### Laden per eCarUp App

- -   Der Fahrer lädt das kostenfreie eCarUp (Android/Apple) herunter

    - Er erstellt einen Account und hinterlegt eine gültige Kreditkarte als Bezahlmittel

    - Er kann die Station entweder über Scannen des QR-Codes im App oder über die Kartenfunktion per Knopfdruck frei ([Anleitung zum Laden per Webstory](https://web.ecarup.com/web-stories/laden-mit-der-ecarup-app/))

    - Nach dem Ende des Ladevorgangs wird der fällige Betrag automatisch der hinterlegten Kreditkarte belastet

    - Eine [ausführliche Beschreibung für Fahrer](/fahrer) haben wir im Wiki  oder in diesem [FAQ](/faq) beschrieben

### Ad-hoc Laden per QR-Code

<div className="row">
<div className="col col--6">

- Der Fahrer scannt den QR-Code auf der Station per Handy-Kamera oder einem QR-Code Scanner-App

- Er landet auf einer mobilen Homepage und kann dort unter Angabe der Kreditkarteninformationen einen Einmalzahlung auslösen

- Per Mail erhält er einen Permalink zum Beenden der Ladung (kann auch per Abziehen des Ladekabels geschehen) sowie eine Quittung nach dem Ende des Ladevorgangs

- Eine ausführliche Beschreibung für das barrierefreie Laden haben wir auf unserem Wiki

- ACHTUNG: Zum Schutz der Stationsinhaber wird bei dieser Variante auf der verwendeten Kreditkarte eine temporäre Reservierung von CHF 60.- vorgenommen. Diese wird am Ende des Ladevorgangs automatisch wieder aufgehoben.

Du findest einige [Beispiele für die Beschriftung](/stationsbetreiber/qr-code) direkt auf der Wiki Seite.

</div>
<div className="col col--6 text--center">

![Öffentliches Laden – Abbildung 4](/img/anwendungsfaelle-oeffentlich/04.png)

</div>
</div>

## 5\. Roaming

Optional können die Stationen auch über die [Roaming Funktion](/funktionen/roaming) in den Ladenetzwerken von Drittanbietern veröffentlicht werden. Das geht aber nur, wenn die Station 24 Stunden 7 Tage in der Woche öffentlich zur Verfügung steht. Du musst dich zudem bewusst sein, dass die Station danach sehr breit gefunden wird (in verschiedensten Apps und Navigationsgeräten von Autos) und damit fremde Nutzer angezogen werden. 

Zudem musst du für das Roaming einen separaten Preis definieren. Dieser wird von eCarUp in das Roaming-Netzwerk übermittelt und dient als Grundlage für die Preisgestaltung der anderen angeschlossenen Ladenetzwerke. Du als Stationsbetreiber sowie eCarUp als Plattform hast aber keinen Einfluss auf die Tarifgestaltung der anderen Plattformen.

Detaillierte Informationen findest du im [Wiki Artikel zum Roaming](/funktionen/roaming).

![Öffentliches Laden – Abbildung 5](/img/anwendungsfaelle-oeffentlich/05.png)

## 6\. Fehleranalyse und -behebung

Mithilfe vom eCarUp Portal können einfache Störungen erkannt und die entsprechenden Massnahmen eingeleitet werden. Falls Stationen im Dashboard oder in der Stationsverwaltung grau und damit als "inaktiv" hinterlegt sind, haben diese die Verbindung mit dem Backend verloren (länger als 10  Minuten) und können darum nicht über eCarUp verwendet werden. Dafür gibt es zwei mögliche Gründe:

- Internetausfall: Stelle das Internet wieder her. Sobald die Stationen eCarUp wieder erreichen, wechselt der Satus auf "verfügbar" bzw. blau und können wieder normal verwendet werden.

- Stromausfall: Stelle Stromversorgung wieder her. Sobald die Stationen eCarUp wieder erreichen, wechselt der Satus auf "verfügbar" bzw. blau und können wieder normal verwendet werden.

Mit dem in [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) inbegriffenen Wartungstool kann [die Kommunikation zwischen Ladestation und Backend](/funktionen/wartung) nachverfolgt werden und eine vertiefte Fehleranalyse getätigt werden.

Sollte der Fehler tiefer liegen, musst du mit dem Projektverantwortlichen (z.B. ausführender Elektroinstallateur) Kontakt aufnehmen.

![Öffentliches Laden – Abbildung 6](/img/anwendungsfaelle-oeffentlich/06.png)

Praxistipp: Um die Funktionalität von Stationen vor Ort zu testen oder zu überprüfen, kann ein Account für den technischen Dienst oder sonst eine verantwortliche Person vor Ort erstellt werden. Dieser Account kann bei den Stationen als Spezialnutzer mit Preis 0 pro kWh und 0 pro h hinterlegt werden und kann somit ohne kostenfolge Tests durchführen.

## 7\. Optional: Ladestationsgruppen erstellen und Spezialuser definieren

Auch bei öffentlichen Ladestationen können zusätzlich jederzeit Spezialuser (z.B. Mitarbeitende, Nachbarn etc.) definiert werden, welche danach zu einem  Sondertarif an den Stationen laden können.

### Stationsgruppen erstellen

Wichtig für die Verwaltung von der Ladestationen, ist die Organisation in Stationsgruppen (z.B. nach Standorten):

![Öffentliches Laden – Abbildung 7](/img/anwendungsfaelle-oeffentlich/07.png)

### Spezial User erstellen

Damit die Stationen  nur von den berechtigten Fahrern/Endkunden freigeschaltet werden können, müssen die Berechtigungen entsprechend vorgenommen werden. Dafür gibt es zwei Möglichkeiten:

1. Nutzergruppen pflegen

In dieser Variante wird eine Nutzergruppe erstellt und auf die Stationen zugordnet. Damit kann bei Mieterwechseln oder bei neuen Fahrer unkompliziert ein neues Mitglied in der Nutzergruppen hinzugefügt oder entfernt werden. Dies macht den administrativen Aufwand kleiner.

- Die Stationen werden auf den Status "limitiert" gestellt

- Es wird eine Nutzergruppe mit allen berechtigten Fahrern erstellt

- Die Nutzergruppe wird auf die Stationsgruppe zugeordnet

![Öffentliches Laden – Abbildung 8](/img/anwendungsfaelle-oeffentlich/08.png)

![Öffentliches Laden – Abbildung 9](/img/anwendungsfaelle-oeffentlich/09.png)

2. Zuordnen von einzelnen Nutzern auf die Stationen

In dieser Variante werden die einzelnen Fahrer/Endkunden auf ihre jeweiligen Stationen zugeordnet, nur der jeweilige Spezialnutzer kann seine eigene Ladestation freischalten. Das bedeutet, dass die Accounts bei Mieterwechseln oder bei neuen Fahrern jeweils auf die Stationen zugeordnet werden müssen, was bedeutet, dass der Account laufend  aktiv bewirtschaftet werden muss.

- Die Stationen werden auf den Status "limitiert" gestellt

- Der richtige Fahreraccount wird mit dem richtigen Preis für die Station freigeschaltet

- Es wird ein Standort für die Station hinterlegt

![Öffentliches Laden – Abbildung 10](/img/anwendungsfaelle-oeffentlich/10.png)

![Öffentliches Laden – Abbildung 11](/img/anwendungsfaelle-oeffentlich/11.png)