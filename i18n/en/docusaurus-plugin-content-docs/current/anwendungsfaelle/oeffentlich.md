---
title: 'Public Charging'
slug: '/anwendungsfaelle/oeffentlich'
description: '1\. General information'
sidebar_label: 'Public'
---

## 1\. General information

This article describes a standard configuration for setting up and operating a public charging station with eCarUp. Drivers pay by credit card, and the funds are automatically transferred from the driver to the station owner. If your station is semi-public (e.g. within an SME), we have documented this in a separate [wiki article](/anwendungsfaelle/laden-im-kmu).

The advantage of this variant is that the money is automatically transferred from the driver's credit card to the station owner's account.

This has two decisive advantages:

1.  The entire collection process is fully automated. eCarUp transfers the money from the transactions to the station owner's account immediately after they end.

2.  As a result, the funds are never in the possession of eCarUp AG, and all transactions (including, for example, those by guests in visitor parking spaces) are within the applicable legal provisions.

You can find all further details in our wiki on [billing by credit card](/stationsbetreiber/abrechnen-auszahlen) and on the [legal provisions regarding transferred funds](/stationsbetreiber/account-verifizieren).

Billing by credit card always results in a 10% commission, regardless of whether an [eCarUp Premium license](https://web.ecarup.com/preise-ladestationen-backend/) is active or not.

An [eCarUp Premium license](https://web.ecarup.com/preise-ladestationen-backend/) is strongly recommended for this use case (as otherwise some important features such as the maintenance tool, the reports or roaming are missing).

## 2\. Connecting charging stations to the eCarUp backend

First, the stations must be connected to the eCarUp backend:

- You can find a current list of all [supported charging station models](/ocpp-ladestationen) in our wiki.

- A [step-by-step guide to integrating the stations](/stationsbetreiber/inbetriebnahme-ocpp-station) is also available.

- So that money can be transferred to the account, the account must be verified. You can find the information on this here: [Verifying your account in eCarUp](/sonstige-informationen/stripe). We recommend doing this step before or during the installation of the charging stations. Without verification, eCarUp cannot transfer money to the account for legal reasons, and no paid charging sessions are possible.

    The transferred money is continuously transferred to your station owner account and can be paid out to any IBAN at any time under the menu item "Account".

![Public Charging – Figure 1](/img/anwendungsfaelle-oeffentlich/01.png)

## 3\. Setting up charging stations

Once the charging stations have been connected to eCarUp, they appear in the eCarUp account in the dashboard and in the station management.

With eCarUp, charging stations can easily be billed publicly and thus to anonymous drivers. To do this, the stations must be assigned the status "public" ("öffentlich") during setup, and a location must be set.

![Public Charging – Figure 2](/img/anwendungsfaelle-oeffentlich/02.png)

### Basic settings

The stations can then be set up by clicking "Stations" ("Stationen") and then "Station management" ("Stationsverwaltung"):

- Change the name and description of the station

- Delete stations

- Set locations

- Edit connectors (if there are several)

- Define connector types (e.g. Typ 2, CSS or Chademo)

- Define max. energy (e.g. 22 kW)

- Define access (Public, Limited and Private)

Public = all users / Limited = station owner and special users / Private = ONLY the station owner or the account in which the stations are installed

- Set prices for energy and time

- Define reserved times

- Activate the station from the web portal

All [settings for station owners](/stationsbetreiber/webportal) are summarized in one wiki article.

Fully configured, it can look like this:

![Public Charging – Figure 3](/img/anwendungsfaelle-oeffentlich/03.png)

## 4\. Labeling stations

For publicly accessible charging stations, labeling the stations is very important so that drivers know how to unlock the charging station. With clear labeling, you can also communicate important information to drivers, such as additional rules (max. parking duration, parking fees, etc.).

There are two options for unlocking directly via eCarUp:

### Charging via the eCarUp app

- -   The driver downloads the free eCarUp app (Android/Apple)

    - They create an account and store a valid credit card as a payment method

    - They can unlock the station either by scanning the QR code in the app or via the map function at the push of a button ([guide to charging via web story](https://web.ecarup.com/web-stories/laden-mit-der-ecarup-app/))

    - After the charging session ends, the amount due is automatically charged to the stored credit card

    - We have described a [detailed description for drivers](/fahrer) in the wiki or in this [FAQ](/faq)

### Ad-hoc charging via QR code

<div className="row">
<div className="col col--6">

- The driver scans the QR code on the station with a phone camera or a QR code scanner app

- They land on a mobile homepage and can trigger a one-time payment there by entering their credit card details

- By email, they receive a permalink to end the charging session (this can also be done by unplugging the charging cable) as well as a receipt after the charging session ends

- We have a detailed description of accessible charging in our wiki

- ATTENTION: To protect station owners, a temporary reservation of CHF 60.- is made on the credit card used with this variant. It is automatically released again at the end of the charging session.

You can find some [examples of labeling](/stationsbetreiber/qr-code) directly on the wiki page.

</div>
<div className="col col--6 text--center">

![Public Charging – Figure 4](/img/anwendungsfaelle-oeffentlich/04.png)

</div>
</div>

## 5\. Roaming

Optionally, the stations can also be published in the charging networks of third-party providers via the [roaming function](/funktionen/roaming). However, this is only possible if the station is publicly available 24 hours a day, 7 days a week. You must also be aware that the station will then be found very widely (in a wide variety of apps and car navigation systems) and will therefore attract outside users.

In addition, you must define a separate price for roaming. This is transmitted by eCarUp to the roaming network and serves as the basis for the pricing of the other connected charging networks. However, you as the station operator, as well as eCarUp as the platform, have no influence on the tariff structure of the other platforms.

You can find detailed information in the [wiki article on roaming](/funktionen/roaming).

![Public Charging – Figure 5](/img/anwendungsfaelle-oeffentlich/05.png)

## 6\. Error analysis and troubleshooting

With the eCarUp portal, simple faults can be detected and the appropriate measures initiated. If stations are shown in grey in the dashboard or in the station management and are thus marked as "inactive" ("inaktiv"), they have lost the connection to the backend (for longer than 10 minutes) and therefore cannot be used via eCarUp. There are two possible reasons for this:

- Internet outage: Restore the internet connection. As soon as the stations can reach eCarUp again, the status changes to "available" ("verfügbar") or blue, and they can be used normally again.

- Power outage: Restore the power supply. As soon as the stations can reach eCarUp again, the status changes to "available" ("verfügbar") or blue, and they can be used normally again.

With the maintenance tool included in [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/), [the communication between charging station and backend](/funktionen/wartung) can be traced and an in-depth error analysis can be carried out.

If the fault lies deeper, you must contact the person responsible for the project (e.g. the electrician who carried out the installation).

![Public Charging – Figure 6](/img/anwendungsfaelle-oeffentlich/06.png)

Practical tip: To test or check the functionality of stations on site, an account can be created for the technical service or another responsible person on site. This account can be stored at the stations as a special user with a price of 0 per kWh and 0 per h, and can thus carry out tests at no cost.

## 7\. Optional: Creating charging station groups and defining special users

Even with public charging stations, special users (e.g. employees, neighbors, etc.) can be defined at any time, who can then charge at the stations at a special tariff.

### Creating station groups

For managing the charging stations, organization into station groups (e.g. by location) is important:

![Public Charging – Figure 7](/img/anwendungsfaelle-oeffentlich/07.png)

### Creating special users

So that the stations can only be unlocked by authorized drivers/end customers, the permissions must be set accordingly. There are two options for this:

1. Maintaining user groups

In this variant, a user group is created and assigned to the stations. This makes it easy to add or remove a member in the user group when tenants change or when there are new drivers. This reduces the administrative effort.

- The stations are set to the status "limited" ("limitiert")

- A user group with all authorized drivers is created

- The user group is assigned to the station group

![Public Charging – Figure 8](/img/anwendungsfaelle-oeffentlich/08.png)

![Public Charging – Figure 9](/img/anwendungsfaelle-oeffentlich/09.png)

2. Assigning individual users to the stations

In this variant, the individual drivers/end customers are assigned to their respective stations, and only the respective special user can unlock their own charging station. This means that the accounts must be assigned to the stations each time tenants change or there are new drivers, which means that the account must be actively managed on an ongoing basis.

- The stations are set to the status "limited" ("limitiert")

- The correct driver account is enabled with the correct price for the station

- A location is stored for the station

![Public Charging – Figure 10](/img/anwendungsfaelle-oeffentlich/10.png)

![Public Charging – Figure 11](/img/anwendungsfaelle-oeffentlich/11.png)
