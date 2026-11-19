---
title: 'Eaton OCPP'
slug: '/ocpp-ladestationen/eaton'
description: 'Older Green Motion charging stations (Box Proxy)'
sidebar_label: 'Eaton OCPP'
---
## Box Proxy charging stations

## Older Green Motion charging stations (Box Proxy)

The Box Proxy is now available for integrating older Green Motion stations. This means the charging stations can already be connected to the eCarUp platform and tested using the guide below. However, extensions and/or improvements may still follow.

The following charging station models are currently supported:

[Private-One with one connector](/drittsysteme/box-proxy-green-motion)

[xChargeLN xCIM Client with one connector](/drittsysteme/box-proxy-green-motion)

[Master One](/drittsysteme/box-proxy-green-motion)

[Network TWO](/drittsysteme/box-proxy-green-motion)

[Smart One](/drittsysteme/box-proxy-green-motion)

## OCPP charging stations

<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-eaton/01.jpg" bildtext="Eaton Green Motion Duo" titel="Green Motion Duo" href="https://www.eaton.com/ch/de-de.html" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-eaton/02.jpg" bildtext="Eaton Green Motion DC 22&66" titel="Green Motion DC 22&66" href="https://www.eaton.com/ch/de-de.html" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-eaton/03.jpg" bildtext="Eaton Green Motion Building" titel="Green Motion Building" href="https://www.eaton.com/ch/de-de.html" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Eaton stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen)

### Integrating OCPP stations

1.  Make sure your charging stations are installed and your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" tab ("Stationen").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Integrating the Eaton charging stations

### Green Motion DC 22 & 66

Tested firmware version: 2003

### Integrating the charging station

Info: The configuration page is active for 30 minutes; after that, the station must be restarted.

- Switch on the station using the circuit breaker

- Connect your PC via Ethernet to one of the three LAN ports on the Teltonika router in the station

- Go to the following IP in your browser: 192.168.52.11

- Click "Open page" and enter the login details supplied with the station in the browser. (The default may be admin/admin)

![Eaton OCPP – Figure 4](/img/ocpp-ladestationen-eaton/04.png)

![Eaton OCPP – Figure 5](/img/ocpp-ladestationen-eaton/05.png)

### Step 1

- Check the software version. Bienne 2003 is the tested firmware.

![Eaton OCPP – Figure 6](/img/ocpp-ladestationen-eaton/06.png)

### Step 2

- Select OCPP Server

- Set Backend to Custom

- Add the eCarUp URL from your account

Example:

wss://[www.ecarup.com/api/Ocpp16/D037091EE3xxxxxx/](http://www.ecarup.com/api/Ocpp16/D037091EE3026BE0/HL68P28001)

- Set Security Profile to None

- Save

![Eaton OCPP – Figure 7](/img/ocpp-ladestationen-eaton/07.png)

### Step 3

- Restart the station

## Green Motion Building

- Tested firmware v.1807

### Integrating the charging station

<div className="row">
<div className="col col--8">

Info: The configuration page is active for 30 minutes; after that, the station must be restarted.

- Switch on the station

- Activate Wi-Fi on your PC or phone

- The station creates a hotspot named with the last 4 digits of the serial number, e.g. GM\_Mxxxxx

- The password is provided on a sticker with the charger documentation. Older models have a default password (GreenMotion!1052).

- Connect your PC or phone to the hotspot and go to the following IP in your browser: 192.168.53.1

- Configure the network and continue with the steps below.

- You may receive a warning message before you open the configuration page. Click "Continue".

</div>
<div className="col col--4 text--center">

![Eaton OCPP – Figure 8](/img/ocpp-ladestationen-eaton/08.png)

</div>
</div>

![Eaton OCPP – Figure 9](/img/ocpp-ladestationen-eaton/09.png)

### Step 1

- Select OCPP Server

- Set Backend to Custom

- Add the eCarUp URL from your account

Example:

wss://[www.ecarup.com/api/Ocpp16/D037091EE3026BE0/](http://www.ecarup.com/api/Ocpp16/D037091EE3026BE0/HL68P28001)

- Set Security Profile to None

- Save

![Eaton OCPP – Figure 10](/img/ocpp-ladestationen-eaton/10.png)

### Step 2

- Restart the station

## Check authorization

![Eaton OCPP – Figure 11](/img/ocpp-ladestationen-eaton/11.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval for meter values can vary from station to station. We recommend an interval of 30–60 s. This is the only way we can better calculate and display the current charging power in the app.

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Eaton OCPP – Figure 12](/img/ocpp-ladestationen-eaton/12.png)

![Eaton OCPP – Figure 13](/img/ocpp-ladestationen-eaton/13.png)

### Download Logs

If the station does not appear in our system and Eaton support cannot find a solution to the problem either, please provide us with the log files for review.

Maintenance --> System Log --> Get the Logs
