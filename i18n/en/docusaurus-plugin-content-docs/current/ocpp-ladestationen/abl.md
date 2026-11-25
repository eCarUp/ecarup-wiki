---
title: 'ABL'
slug: '/ocpp-ladestationen/abl'
description: 'Backend integration guide'
sidebar_label: 'ABL'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-abl/01.jpg" bildtext="ABL Wallbox" titel="ABL Wallbox" href="https://www.ablmobility.de/de/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-abl/02.png" bildtext="ABL Supernova" titel="ABL Supernova" href="https://www.ablmobility.de/de/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

ABL stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen)


### Integrating OCPP stations

1.  Make sure your charging stations are installed and that your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" tab ("Stationen").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.


## Integrating the ABL Wallbox

### ⚠️ Important notes for integrating ABL charging stations

- To start the charging session, a vehicle must first be connected. Otherwise, no charging session will be initiated.

- If charging is started with the RFID card, you can only end charging via the car (e.g. unlocking the cable) or via the eCarUp app. Holding the RFID card against the reader again does not end the charging session.


### Accessing the station

- Once you have connected to the station, enter the following IP in your browser: [http://169.254](/).1.1:8300/

- Check in the system data whether the current software version is installed


### Configuration

- Switch the OCPP version to 1.6

- Paste the entire URL from your eCarUp account

- Rename the ChargeBox ID. Note: no spaces.

- Save and restart the station.


![ABL – Figure 3](/img/ocpp-ladestationen-abl/03.png)

### Important

The Chargebox ID must not contain more than 20 characters.

![ABL – Figure 4](/img/ocpp-ladestationen-abl/04.png)

### Important

Please deactivate the Auto-Charge function.

![ABL – Figure 5](/img/ocpp-ladestationen-abl/05.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app.



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)




![ABL – Figure 6](/img/ocpp-ladestationen-abl/06.png)

![ABL – Figure 7](/img/ocpp-ladestationen-abl/07.png)
