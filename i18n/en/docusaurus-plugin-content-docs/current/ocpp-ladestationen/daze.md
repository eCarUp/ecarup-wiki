---
title: 'Daze'
slug: '/ocpp-ladestationen/daze'
description: 'Backend integration guide'
sidebar_label: 'Daze'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-daze/01.png" bildtext="Daze Home" titel="Home" href="https://daze.eu/en-ch/store/dazebox-home-s/?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA.." bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-daze/02.png" bildtext="Daze Duo" titel="Duo" href="https://www.daze.eu/en/store?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA.." bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-daze/03.png" bildtext="Daze Urban" titel="Urban" href="https://www.daze.eu/en/store?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA.." bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Daze stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen)

### Integration of OCPP stations

1.  Make sure your charging stations are installed and that your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stationen" tab ("Stations" – Stationen).

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Integrating the Dazebox Home, Share and Duo

Important: tested firmware version of the Dazebox Home, 16.0.6.0

Important: tested firmware version of the Share and Duo, 2.1.4.1.1.4

<Video src="BLvGWpLkiiY" title="YouTube video, integration guide for DAZE in the eCarUp backend" />

<div className="row">
<div className="col col--8">

Quick guide for integrating the DAZE box into the eCarUp backend

- Install the Daze app.

- Tested app version: V. 6.1.0(97)

</div>
<div className="col col--4 text--center">

![Daze – Figure 4](/img/ocpp-ladestationen-daze/04.png)

</div>
</div>

### Step 1

Add a network.

![Daze – Figure 5](/img/ocpp-ladestationen-daze/05.png)

### Step 2

<div className="row">
<div className="col col--6">

At this point, configure your charging station and add the Wi-Fi network.

</div>
<div className="col col--6 text--center">

![Daze – Figure 6](/img/ocpp-ladestationen-daze/06.png)

</div>
</div>

### Step 3

<div className="row">
<div className="col col--6">

Once you have added the charging station, you will see the following overview.

</div>
<div className="col col--6 text--center">

![Daze – Figure 7](/img/ocpp-ladestationen-daze/07.png)

</div>
</div>

### Step 4

<div className="row">
<div className="col col--6">

For the OCPP integration, click the 3 bars at the top right (settings).

</div>
<div className="col col--6 text--center">

![Daze – Figure 8](/img/ocpp-ladestationen-daze/08.png)

</div>
</div>

### Step 5

Activate OCPP and select eCarUp as the provider.

![Daze – Figure 9](/img/ocpp-ladestationen-daze/09.png)

### Step 6

<div className="row">
<div className="col col--6">

Now paste your URL from the web portal of the desired eCarUp account into the URL field.

</div>
<div className="col col--6 text--center">

![Daze – Figure 10](/img/ocpp-ladestationen-daze/10.png)

</div>
</div>

### Step 7

The charging station ID is filled in automatically.

Then click "Ende" ("Finish" – Ende).

After the station restarts, it should now appear in your account.

Important: the station must be connected to your phone via Bluetooth throughout the entire process.

## Important for the Urban station with 2 connectors:

- For identification, the left and right connectors must be supplemented with the last three digits of the serial number.

![Daze – Figure 11](/img/ocpp-ladestationen-daze/11.png)

![Daze – Figure 12](/img/ocpp-ladestationen-daze/12.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. Only this way can we better calculate and display the current charging power in the app.

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Daze – Figure 13](/img/ocpp-ladestationen-daze/13.png)

![Daze – Figure 14](/img/ocpp-ladestationen-daze/14.png)
