---
title: 'Partino'
slug: '/ocpp-ladestationen/partino'
description: 'Backend integration guide'
sidebar_label: 'Partino'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-partino/01.jpg" bildtext="Partino Vool" titel="Partino Vool" href="https://www.partino.ch/de/angebot/e-ladestationen/vool/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-partino/02.png" bildtext="Partino DC30" titel="Partino DC30" href="https://www.partino.ch/de/angebot/e-ladestationen/partino-x-ecotap/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-partino/03.png" bildtext="Partino Ecotap" titel="Partino Ecotap" href="https://www.partino.ch/de/angebot/e-ladestationen/partino-x-ecotap/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Partino and Ecotap stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal) 

- Learn more about our [premium functions](/funktionen)


### Integration of OCPP stations

1.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

2.  In the menu on the left, click the "Stationen" tab ("Stations").

3.  Select the "OCPP" tab.

4.  Copy the URL to the clipboard.

5.  Paste the URL into the application form mentioned below. 


## Partino Vool

- tested firmware version v1.9.16 


<Video src="pRN2F2iiNzk" title="YouTube video, integration guide for Partino /Vool charging station into the eCarUp backend" />

### Video integration guide for Partino Vool charging stations into the eCarUp backend

- To do this, install the Vool app


![Partino – Figure 4](/img/ocpp-ladestationen-partino/04.png)

1.  Connect the station via Bluetooth


![Partino – Figure 5](/img/ocpp-ladestationen-partino/05.png)

2.



![Partino – Figure 6](/img/ocpp-ladestationen-partino/06.png)

3.. Set up the charger



![Partino – Figure 7](/img/ocpp-ladestationen-partino/07.png)

4\. Set up the basic configuration

![Partino – Figure 8](/img/ocpp-ladestationen-partino/08.png)

5\. Click "Erweiterte Einstellungen anzeigen" ("Show advanced settings")

![Partino – Figure 9](/img/ocpp-ladestationen-partino/09.png)

6\. Add your eCarUp URL and save

![Partino – Figure 10](/img/ocpp-ladestationen-partino/10.png)

### Send the eCarUp URL to Partino (when using the Floatbridge)

To integrate the Partino stations (when using the Floatbridge) into our backend, you currently still need support from the company [Partino](https://www.partino.ch/de/). Partino takes care of the last configuration step and assigns your charge points to the correct eCarUp account (via OCPP URL), which you received during preparation. To do this, send the URL and the serial numbers of the charging station to Partino using the form below. 

[Partino application form](https://www.partino.ch/wp-content/uploads/Partino_Anmeldeformular_eCarUp.pdf).

![Partino – Figure 11](/img/ocpp-ladestationen-partino/11.png)

## Ecotap

- tested firmware version 506.32R.33


### Send the OCPP URL to Partino

To integrate the Ecotap stations into our backend, you currently still need support from the company [Partino](https://www.partino.ch/de/). Partino takes care of the last configuration step and assigns your charge points to the correct eCarUp account (via OCPP URL), which you received during preparation. To do this, send the URL and the serial numbers of the charging station to Partino using the form below. 

[Partino application form](https://www.partino.ch/wp-content/uploads/Partino_Anmeldeformular_eCarUp.pdf).

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60 s. This is the only way we can better calculate and display the current charging power in the app. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Partino – Figure 12](/img/ocpp-ladestationen-partino/12.png)

![Partino – Figure 13](/img/ocpp-ladestationen-partino/13.png)
