---
title: 'GL Charge'
slug: '/ocpp-ladestationen/gl-charge'
description: 'Backend integration guide'
sidebar_label: 'GL Charge'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-gl-charge/01.png" bildtext="GL Charge LiteBox" titel="LiteBox" href="https://iskraemeco-emobility.com/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-gl-charge/02.png" bildtext="GL Charge Public Box" titel="Public Box" href="https://iskraemeco-emobility.com/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-gl-charge/03.png" bildtext="GL Charge Platinum" titel="Platinum" href="https://iskraemeco-emobility.com/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

GL Charge stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal) 

- Learn more about our [premium functions](/funktionen) here

### Integration of OCPP stations

1.  Make sure your charging stations are installed and your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stationen" tab ("Stations" in the German original).

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## LiteBox

Firmware version: A0-GL-V2.0.5-b4 

- Install the CP Tool app

- Tested app version: V. 1.12.2

![GL Charge – Figure 4](/img/ocpp-ladestationen-gl-charge/04.png)

### Step 1

<div className="row">
<div className="col col--6">

- In the CP Tool, search for the charging station and select it.

- Enter the password (default: 12345678)

- Click Enter

</div>
<div className="col col--6 text--center">

![GL Charge – Figure 5](/img/ocpp-ladestationen-gl-charge/05.png)

</div>
</div>

### Step 2

- Establish the desired connection to the internet

![GL Charge – Figure 6](/img/ocpp-ladestationen-gl-charge/06.png)

### Step 3

<div className="row">
<div className="col col--6">

- Server URL: Manual Entry

- URL from your eCarUp account

- Charger ID: can be freely defined

</div>
<div className="col col--6 text--center">

![GL Charge – Figure 7](/img/ocpp-ladestationen-gl-charge/07.png)

</div>
</div>

### Step 4

<div className="row">
<div className="col col--6">

- Finally, click Set.

- Restart the station.

- The station should now communicate with your account.

</div>
<div className="col col--6 text--center">

![GL Charge – Figure 8](/img/ocpp-ladestationen-gl-charge/08.png)

</div>
</div>

## PublicBox & GlowBox Platinum

Firmware version: 0.20/6,1.8,2.8  

### Integration

Before you can configure the charging station, you need access to the web interface. 

1.  Connect a PC to the station via Ethernet. 

2.  Set the following address locally on your interface:

- IP Address: 192.168.1.3

- Subnet Mask: 255.255.255.0

3.  Open your browser and enter the following URL: http://192.168.1.2. 

4.  Log in to the web interface as follows:

- Username: installer

- Password: installer

![GL Charge – Figure 9](/img/ocpp-ladestationen-gl-charge/09.png)

### OCPP Configuration

1.  Navigate to the OCPP Settings

2.  For the OCPP Host, enter your eCarUp URL:

Example: ws://[www.ecarup.com/api/Ocpp16/xxxxxxxxxx](http://www.ecarup.com/api/Ocpp16/xxxxxxxxxx)/serial number

⚠️Important: don't forget to add / + serial number after the URL. 

3.  Click Apply and the station will restart. 

![GL Charge – Figure 10](/img/ocpp-ladestationen-gl-charge/10.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![GL Charge – Figure 11](/img/ocpp-ladestationen-gl-charge/11.png)

![GL Charge – Figure 12](/img/ocpp-ladestationen-gl-charge/12.png)
