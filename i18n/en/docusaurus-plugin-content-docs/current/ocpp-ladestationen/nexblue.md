---
title: 'NEXBLUE'
slug: '/ocpp-ladestationen/nexblue'
description: 'Backend integration guide'
sidebar_label: 'NEXBLUE'
---
## Backend integration guide

NEXBLUE stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen)


<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-nexblue/01.png" bildtext="NEXBLUE" titel="NEXBLUE" href="https://nexblue.com/de" bildhoehe="10rem" mittig />

</Kacheln>

### Integration of OCPP stations

1.  Make sure your charging stations are installed and your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" tab ("Stationen").

4.  Select the "OCPP" tab ("OCPP").


 1. ws link without Basic Auth: Tested and works

2\. wss without Basic Auth: Tested and works

3\. wss with Basic Auth: Tested and works

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.


## Integrating the NEXBLUE

- tested "firmwareVersion":"03.07.36" 


Integration via the web portal

<Embed src="https://demo.arcade.software/ZMABeR5jjEkvl6uWrWsV?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.705" title="Wiki - NEXBLUE" />

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. Only then can we better calculate and display the current charging power in the app.



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![NEXBLUE – Figure 2](/img/ocpp-ladestationen-nexblue/02.png)

![NEXBLUE – Figure 3](/img/ocpp-ladestationen-nexblue/03.png)
