---
title: 'Bibus'
slug: '/ocpp-ladestationen/bibus'
description: 'Backend integration guide'
sidebar_label: 'Bibus'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-bibus/01.jpg" bildtext="Bibus eVolve" titel="Bibus eVolve" href="https://technology.bibus.com/ch-de/produkte/e-mobility-and-energy/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-bibus/02.jpg" bildtext="Bibus eNext" titel="Bibus eNext" href="https://technology.bibus.com/ch-de/produkte/e-mobility-and-energy/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Bibus stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium functions](/funktionen)


### Integration of OCPP stations

1.  Make sure your charging stations are installed and your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" tab ("Stationen").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.


## Integrating the Bibus charging station

For the version with Kempower stations, click [here](/ocpp-ladestationen/kempower).

## Version with Circontrol

The first steps must be carried out directly on the display of your station:

1.   Connect your laptop to the station.

2.   Take the current IP address of the station from the enclosed manual.

3.  Then enter the IP address in the web browser.

4.  The Circontrol dashboard appears.

5.  Select the connection type (GSM, LAN ...).


⚠️ Please note:

The default setting of the Bibus station may be Plug & Charge. This must be deactivated in the Charge Point Manager. 

Please contact BIBUS to obtain the Charge Point Manager.

There, the status must be set to "Activated" ("Aktiviert") in the settings.

![Bibus – Figure 3](/img/ocpp-ladestationen-bibus/03.png)

### Circontrol web interface settings

1.  Click on Integration ("Integration") in the navigation on the left-hand side.

2.  Select OCPP 1.6J under "Available integrations" ("Verfügbare Integrationen").

3.  Click the link.

4.  Enter username and password (see manual).


![Bibus – Figure 4](/img/ocpp-ladestationen-bibus/04.png)

5\. Give the Bibus Charge Box a name. ⚠️ Note: The name must not contain spaces.

![Bibus – Figure 5](/img/ocpp-ladestationen-bibus/05.png)

6\. Enter the OCPP URL from your account under Central System ("Zentrales System").

![Bibus – Figure 6](/img/ocpp-ladestationen-bibus/06.png)

⚠️ Important: You must set the measurement interval for the measured values (e.g. to 60).

![Bibus – Figure 7](/img/ocpp-ladestationen-bibus/07.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60 s. Only then can we better calculate and display the current charging power in the app. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Bibus – Figure 8](/img/ocpp-ladestationen-bibus/08.png)

![Bibus – Figure 9](/img/ocpp-ladestationen-bibus/09.png)
