---
title: 'Ratio Electric'
slug: '/ocpp-ladestationen/ratio-electric'
description: 'Backend integration guide'
sidebar_label: 'Ratio Electric'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-ratio-electric/01.jpg" bildtext="Ratio Electric IO7" titel="IO7" href="https://elektroscout.ch/produkt/doppellader-fuer-den-oeffentlichen-bereich-mit-ocpp/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-ratio-electric/02.jpg" bildtext="Ratio Electric IO6 MID Pro" titel="IO6 MID Pro" href="https://elektroscout.ch/produkt/io6/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Ratio Electric stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when and at what price. 

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen) here


### Integration of OCPP stations

1.  Make sure your charging stations are installed and your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stationen" tab ("Stations").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.


## Integration of the IO7 & IO6 pro MID

Important: tested firmware version, 1.5.4  (IO7)

Important: tested firmware version, 3.13.1  (IO6)



- To integrate your IO7, please contact the company [Elektroscout](https://elektroscout.ch/)

- info@elektroscout.ch


## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval of 30-60s. Only then can we better calculate and display the current charging power in the app. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Ratio Electric – Figure 3](/img/ocpp-ladestationen-ratio-electric/03.png)

![Ratio Electric – Figure 4](/img/ocpp-ladestationen-ratio-electric/04.png)
