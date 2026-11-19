---
title: 'Laden zuhause mit Kreditkarte'
slug: '/anwendungsfaelle/privat-kreditkarte'
description: '1\. Allgemeine Informationen'
sidebar_label: 'Privat Kreditkarte'
---

## 1\. Allgemeine Informationen

Im folgenden Artikel wird eine Standardkonfiguration für das Laden zuhause mit eCarUp beschrieben (zum Beispiel für das MFH/STEWG/MEG).  Dabei bezahlen die Fahrer per Kreditkarte und das Guthaben wird automatisch vom Fahrer zum Stationsbesitzer transferiert.

Der Vorteil dieser Variante liegt darin, dass das Geld automatisiert von der Kreditkarte des Fahrers auf das Konto des Stationsbesitzers übertragen wird. Dies hat zwei entscheidende Vorteile:

1.  Der ganze Inkassoprozess ist vollständig automatisiert, eCarUp überträgt das Geld der Transaktionen direkt nach deren Ende auf das Konto des Stationsbesitzers. 

2.  Dadurch ist das Guthaben nie im Besitz der eCarUp AG und alle Transaktionen (auch z.B. von Gästen auf den Besucherparkplätzen) sind innerhalb der geltenden gesetzlichen Bestimmungen.


Du findest bei uns im Wiki alle weiteren Angaben zum [Abrechnen per Kreditkarte](/stationsbetreiber/abrechnen-auszahlen) und zu den [gesetzlichen Bestimmungen zum übertragenen Guthaben](/stationsbetreiber/account-verifizieren).

Das Abrechnen per Kreditkarte hat immer eine 10%ige Kommission zur Folge, unabhängig davon ob eine [eCarUp Premiumlizenz](https://web.ecarup.com/preise-ladestationen-backend/) aktiv ist oder nicht.

Mit den unten beschriebenen Einstellungen kann der Anwendungsfall "laden zuhause per Kreditkarte" auf eCarUp konfiguriert werden. Der Zielzustand/die Vorteile sind folgendermassen:

- Stationen sind nicht öffentlich ersichtlich (nur für eingeladene Spezialuser)

- Fahrer können direkt über die App oder RFID-Karte laden (kostenpflichtig)

- Einfaches "Onboarding" für die Fahrer

- Preise müssen nur 1x im Jahr angepasst werden (Massenmutation)

- Als extra kann auch ein Account für kostenloses Laden erstellt werden (z.B. für den Hauswart)


Eine [eCarUp Premium-Lizenz](https://web.ecarup.com/preise-ladestationen-backend/) wird für diesen Anwendungsfall dringend empfohlen (da sonst einige wichtige Features wie das Wartungstool, die Reports oder die erweiterte Nutzerverwaltung mit den Nutzergruppen fehlen).

## 2\. Ladestationen mit dem eCarUp Backend verbinden

Zuerst müssen die Stationen mit dem eCarUp Backend verbunden werden:

- Du findest eine aktuelle Liste mit allen [unterstützen Ladestationsmodellen](/ocpp-ladestationen) in unserem Wiki.

- Eine [Schritt für Schritt Anleitung zur Einbindung der Stationen](/stationsbetreiber/inbetriebnahme-ocpp-station) ist ebenfalls aufgeschaltet.

- Damit Geld auf den Account übertragen werden kann, muss dieser verifiziert werden. Die Informationen dazu findest du hier: [Account in eCarUp verifizieren](/sonstige-informationen/stripe). Wir empfehlen, diesen Schritt vor oder während der Installation der Ladestationen vorzunehmen. Ohne Verifizierung kann eCarUp aus rechtlichen Gründen kein Geld auf den Account übertragen und es sind keine kostenpflichtige Ladungen möglich.



Das übertragene Geld wird laufend auf Ihren Stationsinhaberaccount übertragen und kann unter dem Menüpunkt "Account" jederzeit auf eine beliebige IBAN ausbezahlt werden.

![Laden zuhause mit Kreditkarte – Abbildung 1](/img/anwendungsfaelle-privat-kreditkarte/01.png)

## 3\. Ladestationen einrichten

Wenn die Ladestationen mit eCarUp verbunden wurden, erscheinen diese im eCarUp Account im Dashboard und in der Stationsverwaltung.

![Laden zuhause mit Kreditkarte – Abbildung 2](/img/anwendungsfaelle-privat-kreditkarte/02.png)

### Grundlegende Einstellungen

Danach können die Stationen mit Click auf "Stationen" und dann "Stationsverwaltung" eingerichtet werden:

- Name und Beschreibung der Station ändern

- Stationen löschen

- Standorte setzen

- Anschlüsse bearbeiten (falls mehrere)

- Anschlusstypen definieren (z.B. Typ 2,CSS oder Chademo)

- Max.  Energie definieren (z.B. 22 kW)

- Zugriff definieren (Öffentlich, Limitiert und Privat)


Öffentlich = alle User/Limitiert = Stationsbesitzer und Spezial-User/Privat = NUR Stationsbesitzer bzw. Account in welchem die Stationen installiert sind

- Preise für Energie und Zeit setzen

- Reservierte Zeiten definieren

- Station aus dem Webportal aktivieren


Alle [Einstellungen für Stationsbesitzer](/stationsbetreiber/webportal) sind in diesem Wiki Artikel zusammengefasst.



### Stationsgruppen erstellen

Wichtig für die Verwaltung von der Ladestationen, ist die Organisation in Stationsgruppen (z.B. nach Standorten oder nach Wohnblöcken):

![Laden zuhause mit Kreditkarte – Abbildung 3](/img/anwendungsfaelle-privat-kreditkarte/03.png)



Fertig konfiguriert, kann das so aussehen:

![Laden zuhause mit Kreditkarte – Abbildung 4](/img/anwendungsfaelle-privat-kreditkarte/04.png)

## 4\. Einfacher Zugang für Fahrer

Um dem Fahrer einen unkomplizierten Zugang ohne grossen administrativen Aufwand zu ermöglichen, wird der Ladepunkt öffentlich und ohne Standortangabe erstellt. Dadurch erscheint der Ladepunkt nicht auf der eCarUp-Karte, und es ist keine spezielle Nutzerverwaltung erforderlich. Trotzdem kann jeder Fahrer der Zugang zur Tiefgarage hat, laden. 

![Laden zuhause mit Kreditkarte – Abbildung 5](/img/anwendungsfaelle-privat-kreditkarte/05.png)

### Fahrer Zugang mit Nutzergruppen

Nutzergruppen pflegen

In dieser Variante wird eine Nutzergruppe erstellt und auf die Stationen zugordnet. Damit kann bei Mieterwechseln oder bei neuen Fahrer unkompliziert ein neues Mitglied in der Nutzergruppen hinzugefügt oder entfernt werden. Dies macht den administrativen Aufwand kleiner.

- Die Stationen werden auf den Status "limitiert" gestellt

- Es wird eine Nutzergruppe mit allen berechtigten Fahrern erstellt

- Die Nutzergruppe wird auf die Stationsgruppe zugeordnet


![Laden zuhause mit Kreditkarte – Abbildung 6](/img/anwendungsfaelle-privat-kreditkarte/06.png)

![Laden zuhause mit Kreditkarte – Abbildung 7](/img/anwendungsfaelle-privat-kreditkarte/07.png)

### Fahrer einzeln zuordnen

Zuordnen von einzelnen Nutzern auf die Stationen

In dieser Variante werden die einzelnen Fahrer/Endkunden auf ihre jeweiligen Stationen zugeordnet, nur der jeweilige Spezialnutzer kann seine eigene Ladestation freischalten. Das bedeutet, dass die Accounts bei Mieterwechseln oder bei neuen Fahrern jeweils auf die Stationen zugeordnet werden müssen, was bedeutet, dass der Account laufend aktiv bewirtschaftet werden muss.

- Die Stationen werden auf den Status "limitiert" gestellt

- Der richtige  Fahreraccount wird mit dem richtigen Preis für die Station freigeschaltet

- Es wird ein Standort für die Station hinterlegt


![Laden zuhause mit Kreditkarte – Abbildung 8](/img/anwendungsfaelle-privat-kreditkarte/08.png)

![Laden zuhause mit Kreditkarte – Abbildung 9](/img/anwendungsfaelle-privat-kreditkarte/09.png)

## 5\. Fahrer / Endkunden informieren

Es empfiehlt sich, die Fahrer/Endkunden über die Freigabe der Station zu informieren. Die Fahrer müssen für die Bezahlung einen eigenen eCarUp Account erstellen und eigne gültige Kreditkarte als Bezahlmittel hinterlegen:

- Eine  mögliche Anleitung / Vorlage zum Versand an die Fahrer finden Sie auf diesem [Dokument](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit).

- [Alle Funktionen für Fahrer](/fahrer) sind auf einer eigenen Wiki Seite zusammengefasst

- Zudem gibt es auch ein [FAQ für die Fahrer](/faq) mit den wichtigsten Fragen und Antworten.

- Die Fahrer können selbstständig [RFID / NFC Tags zu ihrem Account hinzufügen](/fahrer/rfid-nfc-tags-carid) und diesen dann zum Freischalten der Ladestation nutzen.


Mit dem flexiblen System von eCarUp ist der Veraltungsaufwand minimiert. Die Fahrer/Endkunden können die Accounts selbstständig erstellen und verwalten.

## 6\. Stationen beschriften

Damit die Fahrer die Stationen auch ohne RFID Karte und mit der App freischalten können, empfehlen wir die Stationen mit einem QR-Code und einem kurzen Instruktionstext zu beschriften. Das hilft z.B., wenn ein Fahrer seine RFID Karte verliert oder nicht bei sich hat.
Du findest einige [Beispiele für die Beschriftung](/stationsbetreiber/qr-code) direkt auf dieser Wiki Seite.

## 7\. Besucherparkplätze

Ladestationen können mit eCarUp auch öffentlich und damit gegenüber anonymen Fahrern abgerechnet werden. Dafür muss den Stationen in der Einrichtung der Status "öffentlich" zugeteilt werden und ein Standort gesetzt werden. Zudem ist hier die Beschriftung der Ladestationen sehr wichtig, da über den QR-Cod auch ad-hoc und damit barrierefrei geladen werden kann.

Den Besucherparkplätzen können auch problemlos andere Preise zugeordnet werden (siehe unten).

Optional können die Stationen auch über [die Roaming Funktion in den Ladenetzwerken von Drittanbietern veröffentlicht werden](/funktionen/roaming). Das geht aber nur, wenn die Station 24 Stunden 7 Tage in der Woche öffentlich zur Verfügung steht. Du musst dich zudem bewusst sein, dass die Station danach sehr breit gefunden wird (in verschiedensten Apps und Navigationsgeräten von Autos) und damit fremde Nutzer angezogen werden.

![Laden zuhause mit Kreditkarte – Abbildung 10](/img/anwendungsfaelle-privat-kreditkarte/10.png)

![Laden zuhause mit Kreditkarte – Abbildung 11](/img/anwendungsfaelle-privat-kreditkarte/11.png)

## 8\. Fehleranalyse und -behebung

Mithilfe vom eCarUp Portal können einfache Störungen erkannt und die entsprechenden Massnahmen eingeleitet werden. Falls Stationen im Dashboard oder in der Stationsverwaltung grau und damit als "inaktiv" hinterlegt sind, haben diese die Verbindung mit dem Backend verloren (länger als 10  Minuten) und können darum nicht über eCarUp verwendet werden. Dafür gibt es zwei mögliche Gründe:

- Internetausfall: Stelle das Internet wieder her. Sobald die Stationen eCarUp wieder erreichen, wechselt der Satus auf "verfügbar" bzw. blau und können wieder normal verwendet werden.

- Stromausfall: Stelle die Stromversorgung wieder her. Sobald die Stationen eCarUp wieder erreichen, wechselt der Satus auf "verfügbar" bzw. blau und können wieder normal verwendet werden.


Mit dem in [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) inbegriffenen Wartungstool kann [die Kommunikation zwischen Ladestation und Backend](/funktionen/wartung) nachverfolgt werden und eine vertiefte Fehleranalyse getätigt werden.

Sollte der Fehler tiefer liegen, musst du mit dem Projektverantwortlichen (z.B. ausführender Elektroinstallateur) Kontakt aufnehmen.

![Laden zuhause mit Kreditkarte – Abbildung 12](/img/anwendungsfaelle-privat-kreditkarte/12.png)

Praxistipp: Um die Funktionalität von Stationen vor Ort zu testen oder zu überprüfen, kann ein Account für den technischen Dienst oder sonst eine verantwortliche Person vor Ort erstellt werden (z.B. hauswart\[at\]musterhaus.ch). Dieser Account kann bei den Stationen als Spezialnutzer mit Preis 0.- pro kWh und 0.- pro h hinterlegt werden und kann somit kostenfrei Tests durchführen.
