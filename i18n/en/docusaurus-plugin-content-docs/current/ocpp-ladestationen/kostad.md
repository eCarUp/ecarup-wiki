---
title: 'Kostad'
slug: '/ocpp-ladestationen/kostad'
description: 'Backend integration guide'
sidebar_label: 'Kostad'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-kostad/01.png" bildtext="Kostad Unnity20 - DC Wallbox" titel="Unnity20 - DC Wallbox" href="https://www.kostad.at/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kostad/02.jpg" bildtext="Kostad Unity50" titel="Unity50" href="https://www.kostad.at/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kostad/03.jpg" bildtext="Kostad Unity20 - Mobile Charger" titel="Unity20 - Mobile Charger" href="https://www.kostad.at/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Kostad stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium functions](/funktionen) here

### Integration of OCPP stations

1.  Make sure your charging stations are installed and your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stationen" tab ("Stations").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Integration of the Kostad DC wallbox (CPC20)

1.  Log in to the service menu. Please take the user name and password from the operating manual. 

2.  ⚠️ Important: the station must communicate with the internet (LAN, WLAN, etc.)

![Kostad – Figure 4](/img/ocpp-ladestationen-kostad/04.png)

### Station configuration

3\. Select OCPP:

4\. Hostname: www.ecarup.com/ 

5\. HTTPString: api/OCPP/................/

6. Please check again: no spaces anywhere and a / at the end 

7\. Apply the connection data; if the connection is successful, the status is "green".

![Kostad – Figure 5](/img/ocpp-ladestationen-kostad/05.png)

<div className="row">
<div className="col col--8">

Please also note the following setting: "Betreibereinstellungen 1" ("Operator settings 1")

- If authentication is to take place via eCarUp (app or RFID card), you must switch 
    Authentifikation ("Authentication") to OCPP.

</div>
<div className="col col--4 text--center">

![Kostad – Figure 6](/img/ocpp-ladestationen-kostad/06.png)

</div>
</div>

## Kostad DC Unity 50, 90, 120, 150, 180, 300 & 360 kW

![Kostad – Figure 7](/img/ocpp-ladestationen-kostad/07.png)

Integration of these systems is carried out by:

 Kostad Schweiz AG. 

+41(0) 52 625 50 50

[www.kostad.ch](https://kostad.ch/)

## office@kostad.ch

![Kostad – Figure 8](/img/ocpp-ladestationen-kostad/08.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. Only then can we better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Kostad – Figure 10](/img/ocpp-ladestationen-kostad/10.png)
