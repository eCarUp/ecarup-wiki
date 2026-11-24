---
title: 'Kreditkartenterminal'
slug: '/drittsysteme/kreditkartenterminal'
description: 'Ein Verifone UX700 mit dem eCarUp Konto verknüpfen, damit Fahrer an der Ladestation mit Kredit- oder Debitkarte bezahlen.'
sidebar_label: 'Kreditkartenterminal'
---
In vier Schritten verknüpfst du ein Verifone UX700 mit deinem eCarUp Konto und gibst ihm Ladepunkte frei. Danach bezahlen Fahrer direkt an der Ladestation mit Kredit- oder Debitkarte, ohne App und ohne Konto.

:::info Nur Schweiz
Kartenterminals sind aktuell nur in der Schweiz verfügbar und brauchen die eCarUp Premium Lizenz.
:::

![Einsatzvarianten: Standalone-Terminal für mehrere Ladepunkte oder in eine DC-Ladestation integriert](/img/drittsysteme-kreditkartenterminal/01.png)

## Vorbereitung

<div className="row">
<div className="col col--8">

- Ein Verifone UX700, eingeschaltet und über LAN oder WLAN mit dem Internet verbunden. Eine Verbindung über SIM-Karte ist aktuell noch nicht möglich.
- Zugang zum eCarUp Portal mit dem Konto, dem das Terminal gehören soll
- eCarUp Premium für die Ladepunkte, die das Terminal anbieten soll
- Eine Stationsgruppe oder Station mit öffentlichen Ladepunkten
- Einen Standort in der Schweiz

Die Transaktionsgebühren bleiben wie gehabt: Du als Stationsbetreiber erhältst 90 %.

</div>
<div className="col col--4 text--center">

![Kartenterminal Verifone UX700](/img/drittsysteme-kreditkartenterminal/02.png)

</div>
</div>

## Einbau in DC-Ladestationen

Das Terminal lässt sich auch direkt in eine DC-Ladestation einbauen. Geprüft wurde das mit DC-Ladestationen dieser Hersteller:

- EVTEC
- Alpitronic
- Siemens

Der Einbau erfolgt bauseits. Kläre ihn vorab mit dem Hersteller oder deinem Installationspartner. Die Verknüpfung mit eCarUp läuft danach genau wie unten beschrieben.

## Vorgehen

### 1. Terminal starten und Code ablesen

Schalte das Terminal ein und verbinde es per LAN oder WLAN mit dem Internet. Mobilfunk über SIM-Karte geht aktuell noch nicht. Das Terminal zeigt dann einen Registrierungscode aus drei Wörtern, zum Beispiel „ganz-folgen-schick".

Der Code ist nur kurze Zeit gültig und funktioniert nur einmal. Einen neuen Code bekommst du im Admin-Menü des Terminals: vom linken Bildschirmrand nach rechts wischen und **Einstellungen** öffnen.

![Dialog Terminal registrieren im eCarUp Portal](/img/drittsysteme-kreditkartenterminal/03.png)

### 2. Terminal im Portal registrieren

Öffne im eCarUp Portal **Stationen › Kartenterminals** und klicke auf **Terminal registrieren**. Gib im Dialog diese Angaben ein:

| Feld | Inhalt |
| --- | --- |
| Registrierungscode | Der Code vom Terminal, mit Bindestrichen |
| Bezeichnung | Ein Name, den du wiedererkennst, zum Beispiel „Parkplatz Nord" |
| Strasse und Nummer, PLZ, Ort | Der Standort des Terminals, nur Schweiz |
| Sprache am Terminal | In dieser Sprache führt das Terminal die Fahrer durch Auswahl und Zahlung |

Klicke danach auf **Registrieren**.

![Ausgefüllter Dialog mit Registrierungscode, Bezeichnung, Standort und Sprache](/img/drittsysteme-kreditkartenterminal/04.png)

### 3. Angebot zuordnen

Das Terminal erscheint in der Liste mit Status **Online**. In der Spalte **Angebot** steht noch „Nichts zugeordnet". Klicke unter **Bearbeiten** auf die drei Punkte und wähle **Angebot zuordnen**.

![Liste der Kartenterminals mit geöffnetem Menü: Angebot zuordnen, Admin-PIN anzeigen, Terminal entfernen](/img/drittsysteme-kreditkartenterminal/05.png)

Wähle, welche Ladepunkte das Terminal anbieten soll:

- **Stationsgruppe:** alle öffentlichen Ladepunkte einer Gruppe, zum Beispiel ein ganzer Parkplatz
- **Einzelne Station:** nur eine Station, zum Beispiel bei einem Terminal in einer DC-Ladestation
- **Nichts:** Das Terminal bietet vorübergehend nichts an

Wähle die Gruppe oder Station aus der Liste und klicke auf **Speichern**.

![Dialog Angebot zuordnen mit ausgewählter Stationsgruppe](/img/drittsysteme-kreditkartenterminal/06.png)

### 4. Was Fahrer am Terminal sehen

- Das Terminal bietet nur öffentliche Ladepunkte an. Fahrer, die am Terminal bezahlen, haben kein eCarUp Konto und können eingeschränkte oder private Ladepunkte nicht freischalten.
- Pro Seite zeigt das Terminal 3 Ladepunkte. Gibt es mehr, tippen Fahrer auf „Weitere Ladepunkte".
- Ladepunkte mit angestecktem Auto stehen zuerst, dann besetzte, dann freie.

## Kontrolle

Die Verknüpfung hat geklappt, wenn das Terminal in der Liste mit Status **Online** steht und in der Spalte **Angebot** deine Gruppe oder Station zeigt. Daneben siehst du Seriennummer, Software-Version und wann das Terminal zuletzt gesehen wurde.

![Terminal online mit zugeordneter Stationsgruppe](/img/drittsysteme-kreditkartenterminal/07.png)

Über die drei Punkte unter **Bearbeiten** erreichst du später auch:

- **Admin-PIN anzeigen:** die PIN für das Admin-Menü am Terminal
- **Terminal entfernen:** löst die Verknüpfung. Die PIN eines entfernten Terminals bekommst du beim eCarUp Support.
