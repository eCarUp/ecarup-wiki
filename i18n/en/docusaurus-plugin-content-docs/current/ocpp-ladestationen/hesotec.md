---
title: 'Hesotec'
slug: '/ocpp-ladestationen/hesotec'
description: 'Backend integration guide'
sidebar_label: 'Hesotec'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-hesotec/01.jpg" bildtext="Hesotec eBox wr30" titel="eBox wr30" href="https://electrify.hesotec.de/produkte/ebox-wr30" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-hesotec/02.jpg" bildtext="Hesotec eBox sr10" titel="eBox sr10" href="https://electrify.hesotec.de/produkte/ebox-wr30" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-hesotec/03.jpg" bildtext="Hesotec eSat r10/r20" titel="eSat r10/r20" href="https://electrify.hesotec.de/produkte/ebox-wr30" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Hesotec stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium functions](/funktionen) here

### Integration of OCPP stations

1.  Make sure your charging stations are installed and that your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" tab ("Stationen").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Integrating the Hesotec charging station

- Download the "electrify charge control" app from Hesotec from your app store

- In the app, click the + to connect your desired station

- The connection can be set up via the hotspot or via the Hesotec eLMS

- Select your model and name the station

- Then connect the phone to the charging station's hotspot

- You will find all information about the hotspot (SSID\_EBOX\_XXX incl. password) in the enclosed envelope. 

- Once the station has connected successfully, it appears in the app. 

## Play Store

![Hesotec – Figure 4](/img/ocpp-ladestationen-hesotec/04.png)

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Figure 5](/img/ocpp-ladestationen-hesotec/05.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Figure 6](/img/ocpp-ladestationen-hesotec/06.jpg)

</div>
</div>

- In the app, click the 3 dots at the top right

- "Advanced settings" and "Technician" must be activated

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Figure 7](/img/ocpp-ladestationen-hesotec/07.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Figure 8](/img/ocpp-ladestationen-hesotec/08.jpg)

</div>
</div>

- Select general settings

- Set authorization to RFID/App and 

- Activate stop with RFID

- Save and return to the settings

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Figure 9](/img/ocpp-ladestationen-hesotec/09.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Figure 10](/img/ocpp-ladestationen-hesotec/10.jpg)

</div>
</div>

<div className="row">
<div className="col col--6">

- Open the advanced settings

- Under Backend OCPP, enter the eCarUp URL from your web portal

- Example: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxx/15023910 (serial number of the station)

- Set the mode to OCPP

</div>
<div className="col col--6 text--center">

![Hesotec – Figure 11](/img/ocpp-ladestationen-hesotec/11.png)

</div>
</div>

- Important: after the / in the URL, enter the serial number of your station!

- Then restart the station

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values may vary from station to station. We recommend an interval of 30–60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Hesotec – Figure 12](/img/ocpp-ladestationen-hesotec/12.png)

![Hesotec – Figure 13](/img/ocpp-ladestationen-hesotec/13.png)
