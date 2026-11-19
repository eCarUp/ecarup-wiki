---
title: 'Enelion'
slug: '/ocpp-ladestationen/enelion'
description: 'Backend integration guide'
sidebar_label: 'Enelion'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-enelion/01.jpg" bildtext="Enelion Lumina" titel="Lumina" href="https://enelion.com/product/lumina/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-enelion/02.png" bildtext="Enelion Vertica" titel="Vertica" href="https://enelion.com/product/vertica/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Enelion stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium functions](/funktionen) here

### Integration of OCPP stations

1.  Make sure that your station is installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" tab ("Stationen").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Enelion Lumina

### Preparatory steps for integrating the Lumina

1.  Switch on your Lumina

2.  Use a smartphone for this and go to your Wi-Fi settings

3.  Select the hotspot of the Lumina wallbox (Enelion-xxxx-xxx)

4.  Open the browser on your smartphone and enter the following IP address: 192.168.8.8

5.  The Enelion setup page opens

6.  Enter the required password. You will find the password in the letter supplied by Enelion

### Step 1

<div className="row">
<div className="col col--6">

- Under Network, the station can be connected via Wi-Fi or GSM.

</div>
<div className="col col--6 text--center">

![Enelion – Figure 3](/img/ocpp-ladestationen-enelion/03.png)

</div>
</div>

### Step 2

- Under Charger, select "Authorization"

![Enelion – Figure 4](/img/ocpp-ladestationen-enelion/04.png)

### Step 3

- Remove FreeCharge mode and save

![Enelion – Figure 5](/img/ocpp-ladestationen-enelion/05.png)

### Step 4

- Under OCPP, select "Connection"

![Enelion – Figure 6](/img/ocpp-ladestationen-enelion/06.png)

### Step 5

- Activate OCPP Connection

- Under Connection settings:

1.  Set Device to Master

2.  Connector ID 1

3.  Freecharge idTAg must not be empty. A master badge can be stored here (whitelist), or, if it has no significance, enter a value as in the example screenshot

4.  Enter your eCarUp URL from your account

5.  Charge Point ID must also not be empty and can be labelled individually. (Note: max. 20 characters and no spaces)

\+ Save and restart

Check the connection status of the station in the dashboard.

<div className="row">
<div className="col col--6 text--center">

![Enelion – Figure 7](/img/ocpp-ladestationen-enelion/07.png)

</div>
<div className="col col--6 text--center">

![Enelion – Figure 8](/img/ocpp-ladestationen-enelion/08.png)

</div>
</div>

### Enelion Vertica and Wallbox Duo

- firmwareVersion":"4.4.4

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app.

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Enelion – Figure 9](/img/ocpp-ladestationen-enelion/09.png)

![Enelion – Figure 10](/img/ocpp-ladestationen-enelion/10.png)
