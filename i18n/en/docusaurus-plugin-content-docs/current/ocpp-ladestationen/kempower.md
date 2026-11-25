---
title: 'Kempower'
slug: '/ocpp-ladestationen/kempower'
description: 'Backend integration guide'
sidebar_label: 'Kempower'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-kempower/01.jpg" bildtext="Kempower Station Charger" titel="Kempower Station Charger" href="https://kempower.com/de/solution/kempower-station-charger/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kempower/02.jpg" bildtext="Kempower Satellite" titel="Kempower Satellite" href="https://kempower.com/de/solution/kempower-satellite/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kempower/03.jpg" bildtext="Kempower Movable Charger" titel="Kempower Movable Charger" href="https://kempower.com/de/solution/kempower-movable-charger/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Kempower stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen) here


### Integration of OCPP stations

1.  Make sure your charging stations are installed and your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stationen" tab ("Stations").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.


## Integrating the Kempower charging station

Important: tested firmware version, 3.2.6

### Step 1

Make sure your station is online and communicating with the Kempower portal.

- [https://kempower.io/](https://kempower.io/)


### Step 2

1.  Check that the station also has an active internet connection.

2.  Click the gear icon at the top right.


![Kempower – Figure 4](/img/ocpp-ladestationen-kempower/04.png)

### Step 3

1.  Click Connectivity and enable OCPP.

2.  Add your eCarUp URL and click Save.


![Kempower – Figure 5](/img/ocpp-ladestationen-kempower/05.png)

### Step 4

1.  Finally, check the authorization settings and click Save.


![Kempower – Figure 6](/img/ocpp-ladestationen-kempower/06.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30–60 s. This is the only way we can better calculate and display the current charging power in the app.



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Kempower – Figure 7](/img/ocpp-ladestationen-kempower/07.png)

![Kempower – Figure 8](/img/ocpp-ladestationen-kempower/08.png)
