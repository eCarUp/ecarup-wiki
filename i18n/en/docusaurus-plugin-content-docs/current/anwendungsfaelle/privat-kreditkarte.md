---
title: 'Charging at home with a credit card'
slug: '/anwendungsfaelle/privat-kreditkarte'
description: '1\. General information'
sidebar_label: 'Private credit card'
---

## 1\. General information

This article describes a standard configuration for charging at home with eCarUp (for example for multi-family buildings, condominium owner associations, or shared-ownership communities). Drivers pay by credit card, and the funds are transferred automatically from the driver to the station owner.

The advantage of this option is that the money is automatically transferred from the driver's credit card to the station owner's account. This has two key advantages:

1.  The entire collection process is fully automated. eCarUp transfers the money from the transactions to the station owner's account directly after they end.

2.  As a result, the funds are never held by eCarUp AG, and all transactions (including, for example, those of guests on visitor parking spaces) comply with the applicable legal provisions.


In our wiki, you will find all further details on [billing by credit card](/stationsbetreiber/abrechnen-auszahlen) and on the [legal provisions for transferred funds](/stationsbetreiber/account-verifizieren).

Billing by credit card always results in a 10% commission, regardless of whether an [eCarUp Premium license](https://web.ecarup.com/preise-ladestationen-backend/) is active or not.

With the settings described below, the use case "charging at home by credit card" can be configured on eCarUp. The target state/benefits are as follows:

- Stations are not publicly visible (only for invited special users)

- Drivers can charge directly via the app or RFID card (chargeable)

- Simple "onboarding" for drivers

- Prices only need to be adjusted once a year (mass update)

- As an extra, an account for free charging can also be created (e.g. for the caretaker)


An [eCarUp Premium license](https://web.ecarup.com/preise-ladestationen-backend/) is strongly recommended for this use case (otherwise some important features such as the maintenance tool, the reports, or the extended user management with user groups are missing).

## 2\. Connecting charging stations to the eCarUp backend

First, the stations must be connected to the eCarUp backend:

- You will find a current list of all [supported charging station models](/ocpp-ladestationen) in our wiki.

- A [step-by-step guide to integrating the stations](/stationsbetreiber/inbetriebnahme-ocpp-station) is also available.

- So that money can be transferred to the account, it must be verified. You will find the information on this here: [Verifying your account in eCarUp](/sonstige-informationen/stripe). We recommend doing this step before or during the installation of the charging stations. Without verification, eCarUp cannot transfer money to the account for legal reasons, and no chargeable charging sessions are possible.



The transferred money is continuously transferred to your station owner account and can be paid out to any IBAN at any time under the menu item "Account" (Account).

![Charging at home with a credit card – Figure 1](/img/anwendungsfaelle-privat-kreditkarte/01.png)

## 3\. Setting up charging stations

Once the charging stations have been connected to eCarUp, they appear in the eCarUp account in the dashboard and in the station management (Stationsverwaltung).

![Charging at home with a credit card – Figure 2](/img/anwendungsfaelle-privat-kreditkarte/02.png)

### Basic settings

You can then set up the stations by clicking "Stations" (Stationen) and then "Station management" (Stationsverwaltung):

- Change the name and description of the station

- Delete stations

- Set locations

- Edit connectors (if there are several)

- Define connector types (e.g. Typ 2, CSS or Chademo)

- Define max. energy (e.g. 22 kW)

- Define access (Public, Limited, and Private) ("Öffentlich", "Limitiert" and "Privat")


Public = all users / Limited = station owner and special users / Private = ONLY the station owner or the account in which the stations are installed

- Set prices for energy and time

- Define reserved times

- Activate the station from the web portal

 
All [settings for station owners](/stationsbetreiber/webportal) are summarized in this wiki article.



### Creating station groups

Organizing the charging stations into station groups (e.g. by location or by apartment block) is important for management:

![Charging at home with a credit card – Figure 3](/img/anwendungsfaelle-privat-kreditkarte/03.png)



Fully configured, it can look like this:

![Charging at home with a credit card – Figure 4](/img/anwendungsfaelle-privat-kreditkarte/04.png)

## 4\. Easy access for drivers

To give drivers uncomplicated access without a great deal of administrative effort, the charge point is created as public and without location information. As a result, the charge point does not appear on the eCarUp map, and no special user management is required. Even so, every driver who has access to the underground garage can charge.

![Charging at home with a credit card – Figure 5](/img/anwendungsfaelle-privat-kreditkarte/05.png)

### Driver access with user groups

Maintaining user groups

In this option, a user group is created and assigned to the stations. This makes it easy to add or remove a member of the user group when tenants change or when there are new drivers. This reduces the administrative effort.

- The stations are set to the status "limited" ("limitiert")

- A user group with all authorized drivers is created

- The user group is assigned to the station group


![Charging at home with a credit card – Figure 6](/img/anwendungsfaelle-privat-kreditkarte/06.png)

![Charging at home with a credit card – Figure 7](/img/anwendungsfaelle-privat-kreditkarte/07.png)

### Assigning drivers individually

Assigning individual users to the stations

In this option, the individual drivers/end customers are assigned to their respective stations, and only the respective special user can unlock their own charging station. This means that when tenants change or when there are new drivers, the accounts must be assigned to the stations each time, which means the account must be actively managed on an ongoing basis.

- The stations are set to the status "limited" ("limitiert")

- The correct driver account is enabled with the correct price for the station

- A location is stored for the station


![Charging at home with a credit card – Figure 8](/img/anwendungsfaelle-privat-kreditkarte/08.png)

![Charging at home with a credit card – Figure 9](/img/anwendungsfaelle-privat-kreditkarte/09.png)

## 5\. Informing drivers / end customers

We recommend informing the drivers/end customers about the release of the station. For payment, drivers must create their own eCarUp account and store their own valid credit card as a payment method:

- You will find a possible guide / template to send to the drivers in this [document](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit).

- [All functions for drivers](/fahrer) are summarized on a separate wiki page.

- There is also an [FAQ for drivers](/faq) with the most important questions and answers.

- Drivers can [add RFID / NFC tags to their account](/fahrer/rfid-nfc-tags-carid) themselves and then use them to unlock the charging station.


With eCarUp's flexible system, the administrative effort is minimized. The drivers/end customers can create and manage their accounts themselves.

## 6\. Labeling the stations

So that drivers can also unlock the stations without an RFID card and with the app, we recommend labeling the stations with a QR code and a short instruction text. This helps, for example, if a driver loses their RFID card or does not have it with them.
You will find some [examples of labeling](/stationsbetreiber/qr-code) directly on this wiki page.

## 7\. Visitor parking spaces

With eCarUp, charging stations can also be billed publicly and thus to anonymous drivers. To do this, the status "public" ("öffentlich") must be assigned to the stations during setup and a location must be set. Labeling the charging stations is also very important here, since the QR code also allows ad-hoc and thus barrier-free charging.

Different prices can also easily be assigned to the visitor parking spaces (see below).

Optionally, the stations can also be [published in third-party charging networks via the roaming function](/funktionen/roaming). However, this is only possible if the station is publicly available 24 hours a day, 7 days a week. You should also be aware that the station will then be found very widely (in a wide variety of apps and car navigation systems) and will therefore attract outside users.

![Charging at home with a credit card – Figure 10](/img/anwendungsfaelle-privat-kreditkarte/10.png)

![Charging at home with a credit card – Figure 11](/img/anwendungsfaelle-privat-kreditkarte/11.png)

## 8\. Error analysis and troubleshooting

With the eCarUp portal, simple faults can be detected and the appropriate measures initiated. If stations are shown in grey and thus as "inactive" in the dashboard or in the station management, they have lost the connection to the backend (for more than 10 minutes) and can therefore not be used via eCarUp. There are two possible reasons for this:

- Internet outage: Restore the internet connection. As soon as the stations can reach eCarUp again, the status changes to "available" ("verfügbar"), shown in blue, and they can be used normally again.

- Power outage: Restore the power supply. As soon as the stations can reach eCarUp again, the status changes to "available" ("verfügbar"), shown in blue, and they can be used normally again.


With the maintenance tool included in [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/), [the communication between charging station and backend](/funktionen/wartung) can be tracked and a more in-depth error analysis can be carried out.

If the fault lies deeper, you must contact the person responsible for the project (e.g. the electrical installer who carried out the work).

![Charging at home with a credit card – Figure 12](/img/anwendungsfaelle-privat-kreditkarte/12.png)

Practical tip: To test or check the functionality of stations on site, an account can be created for the technical service or another person responsible on site (e.g. hauswart\[at\]musterhaus.ch). This account can be stored at the stations as a special user with a price of 0.- per kWh and 0.- per h, and can thus carry out tests free of charge.
