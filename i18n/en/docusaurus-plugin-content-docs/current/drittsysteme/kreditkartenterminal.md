---
title: 'Credit card terminal'
slug: '/drittsysteme/kreditkartenterminal'
description: 'Link a Verifone UX700 to your eCarUp account so that drivers can pay by credit or debit card at the charging station.'
sidebar_label: 'Credit card terminal'
---
In four steps, you link a Verifone UX700 to your eCarUp account and assign charge points to it. Drivers can then pay directly at the charging station with a credit or debit card, without an app and without an account.

:::info Switzerland only
Card terminals are currently only available in Switzerland and require the eCarUp Premium licence.
:::

![Deployment options: standalone terminal for several charge points or integrated into a DC charging station](/img/drittsysteme-kreditkartenterminal/01.png)

## Preparation

<div className="row">
<div className="col col--8">

- A Verifone UX700, switched on and connected to the internet via LAN or Wi-Fi. A connection via SIM card is currently not yet possible.
- Access to the eCarUp portal with the account that is to own the terminal
- eCarUp Premium for the charge points that the terminal is to offer
- A station group or station with public charge points
- A location in Switzerland

Transaction fees remain as before: as the station operator, you receive 90%.

</div>
<div className="col col--4 text--center">

![Card terminal Verifone UX700](/img/drittsysteme-kreditkartenterminal/02.png)

</div>
</div>

## Installation in DC charging stations

The terminal can also be installed directly in a DC charging station. This has been tested with DC charging stations from these manufacturers:

- EVTEC
- Alpitronic
- Siemens

Installation is carried out on site. Clarify it in advance with the manufacturer or your installation partner. Linking to eCarUp then works exactly as described below.

## Procedure

### 1. Start the terminal and read the code

Switch on the terminal and connect it to the internet via LAN or Wi-Fi. Mobile data via SIM card is currently not possible. The terminal then displays a registration code made up of three words, for example "ganz-folgen-schick".

The code is valid only for a short time and works only once. You can get a new code in the terminal's admin menu: swipe from the left edge of the screen to the right and open **Settings** (**Einstellungen**).

![Terminal registration dialog in the eCarUp portal](/img/drittsysteme-kreditkartenterminal/03.png)

### 2. Register the terminal in the portal

In the eCarUp portal, open **Stationen › Kartenterminals** (**Stationen › Kartenterminals**) and click **Register terminal** (**Terminal registrieren**). Enter the following details in the dialog:

| Field | Content |
| --- | --- |
| Registration code (Registrierungscode) | The code from the terminal, with hyphens |
| Name (Bezeichnung) | A name you will recognise, for example "Parkplatz Nord" |
| Street and number, postcode, city (Strasse und Nummer, PLZ, Ort) | The location of the terminal, Switzerland only |
| Language on the terminal (Sprache am Terminal) | The terminal guides drivers through selection and payment in this language |

Then click **Register** (**Registrieren**).

![Completed dialog with registration code, name, location and language](/img/drittsysteme-kreditkartenterminal/04.png)

### 3. Assign an offer

The terminal appears in the list with the status **Online**. The **Offer** (**Angebot**) column still shows "Nothing assigned" ("Nichts zugeordnet"). Under **Edit** (**Bearbeiten**), click the three dots and select **Assign offer** (**Angebot zuordnen**).

![List of card terminals with open menu: assign offer, show admin PIN, remove terminal](/img/drittsysteme-kreditkartenterminal/05.png)

Choose which charge points the terminal is to offer:

- **Station group** (**Stationsgruppe**): all public charge points of a group, for example an entire car park
- **Single station** (**Einzelne Station**): just one station, for example for a terminal in a DC charging station
- **Nothing** (**Nichts**): the terminal temporarily offers nothing

Select the group or station from the list and click **Save** (**Speichern**).

![Assign offer dialog with a selected station group](/img/drittsysteme-kreditkartenterminal/06.png)

### 4. What drivers see on the terminal

- The terminal offers only public charge points. Drivers who pay at the terminal do not have an eCarUp account and cannot unlock restricted or private charge points.
- The terminal shows 3 charge points per page. If there are more, drivers tap "More charge points" ("Weitere Ladepunkte").
- Charge points with a connected car come first, then occupied ones, then free ones.

## Verification

The link has worked if the terminal appears in the list with the status **Online** and the **Offer** (**Angebot**) column shows your group or station. Next to it you can see the serial number, software version and when the terminal was last seen.

![Terminal online with assigned station group](/img/drittsysteme-kreditkartenterminal/07.png)

Via the three dots under **Edit** (**Bearbeiten**), you can later also access:

- **Show admin PIN** (**Admin-PIN anzeigen**): the PIN for the admin menu on the terminal
- **Remove terminal** (**Terminal entfernen**): cancels the link. You can get the PIN of a removed terminal from eCarUp Support.
