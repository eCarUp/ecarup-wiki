---
title: 'Juice Technology'
slug: '/ocpp-ladestationen/juice-technology'
description: 'Backend integration guide'
sidebar_label: 'Juice Technology'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-juice-technology/01.jpg" bildtext="Juice Technology Charger me 3" titel="Charger me 3" href="https://juice.world/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-juice-technology/02.jpg" bildtext="Juice Technology Charger 2" titel="Charger 2" href="https://juice.world/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Juice stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen)


### Integration of OCPP stations

1.  Make sure your charging stations are installed and that your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stationen" tab ("Stations").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.


## Integrating the Juice charging stations

<Video src="nj_x0WNQhNk" title="YouTube video, integration guide „Juice Technology in the eCarUp backend“" />

Video guide: integrating Juice Technology in the eCarUp backend

## Juice Charger me 3

### Installation

Accessing the station (static):

1\. As soon as you are connected to the station (note: the PC must be in the same IP range), open the browser of your choice and enter the following IP address: 192.168.123.123/

2\. Log in: You will find the login details in the supplied manual.

Default: 

Username: operator

PW: JuiCeMeUP!

3\. Then configure the Juice Charger me 3 as you wish. 



Accessing the station (dynamic):

1.  Plug the network cable into the router and find the IP address in the router's directory. 

2.   Log in: You will find the login details in the supplied manual.


Default: 

Username: operator

PW: JuiCeMeUP!

3.   Then configure the Juice Charger me 3 as you wish. 




### OCPP settings:

![Juice Technology – Figure 3](/img/ocpp-ladestationen-juice-technology/03.png)

1.  Select the connection type (Wi-Fi, LAN, etc.)

2.  Add the eCarUp URL from your account. 


Example: ws://www.ecarup.com/api/OCPP16/wgwepog4980h4ho

![Juice Technology – Figure 4](/img/ocpp-ladestationen-juice-technology/04.png)

\+ Set the Meter Value Sample Interval to a maximum of 60 seconds. 

### Authorization settings

![Juice Technology – Figure 5](/img/ocpp-ladestationen-juice-technology/05.png)

- Switch off free charging

- Disable local whitelist


Save all settings and restart the station. 

## Juice Charger 2

### Installation

Accessing the station:

1\. As soon as you are connected to the station, open the browser of your choice and enter the following IP address: 192.168.4.1:1234

2\. Log in: On this page, enter the default password 1234567890.

3\. Then configure the Juice Charger 2 as you wish. 

![Juice Technology – Figure 6](/img/ocpp-ladestationen-juice-technology/06.png)

### OCPP integration

⚠️ Important: The URL generated from the eCarUp account must be broken down as shown in the following example. 

1.  Omit ws://; the host path and domain must be entered separately, separated by /.

2.  (\*\*\*\* must be replaced with, e.g., F749E....)

3.  The Chargebox ID must not contain any spaces

4.  Save the configuration

5.  The station restarts.


![Juice Technology – Figure 7](/img/ocpp-ladestationen-juice-technology/07.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. Only then can we better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Juice Technology – Figure 8](/img/ocpp-ladestationen-juice-technology/08.png)

![Juice Technology – Figure 9](/img/ocpp-ladestationen-juice-technology/09.png)
