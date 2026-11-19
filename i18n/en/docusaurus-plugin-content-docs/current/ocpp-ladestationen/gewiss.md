---
title: 'Gewiss'
slug: '/ocpp-ladestationen/gewiss'
description: 'Backend integration guide'
sidebar_label: 'Gewiss'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-gewiss/01.jpg" bildtext="Gewiss JOINON EVO" titel="JOINON EVO" href="https://www.gewiss.com/ch/de/mobility" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-gewiss/02.jpg" bildtext="Gewiss JOINON-FAST" titel="JOINON-FAST" href="https://www.gewiss.com/ch/de/mobility" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Gewiss JOINON stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal) 

- Learn more about our [premium features](/funktionen)


### Integration of OCPP stations

1.  Make sure your charging stations are installed and that your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stationen" (Stations) tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.


1.ws link without Basic Auth: tested and works

2.wss without Basic Auth: tested and works

3.wss with Basic Auth: not tested

6.  Go to the web interface of the desired station and paste the copied URL.


## JOINON EVO Wallbox

- "firmwareVersion":"12.3.0" 


1.  Connect to the Gewiss JOINON Evo station via LAN or Wi-Fi (details on the connection can be found in the installation guide).

2.  Login screen (the required login details can also be found in the installation guide).

3.  Under the menu item Charging Station, you can set the desired connection. 


4\. Authorisation Type must be set to "Autorisation" (Autorisation).



![Gewiss – Figure 3](/img/ocpp-ladestationen-gewiss/03.png)

5\. Set OCPP Protocol to "ON"

6\. Add the eCarUp URL

Example: wss://[www.ecarup.com/api/Ocpp16/D8xxxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8xxxxxxxxx)

7\. Chargebox identity = serial number of the station

8\. Save.



![Gewiss – Figure 4](/img/ocpp-ladestationen-gewiss/04.png)

## JOINON I-Fast DC charging station

- "firmwareVersion":"V4.13.M0 " 


1.  Connect to the Gewiss i-Fast DC charging station via LAN or Wi-Fi (details on the connection can be found in the installation guide).

2.  Login screen (the required login details can also be found in the installation guide).


3. Click "Set"

4\. Select "Backend"

5\. Add your eCarUp URL under Central System URL. 

Example: wss://[www.ecarup.com/api/Ocpp16/D8xxxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8xxxxxxxxx)

6. Charge Box ID\= serial number of the station

7. OCPP Security Profile can optionally be selected. 

8\. Save. 




![Gewiss – Figure 5](/img/ocpp-ladestationen-gewiss/05.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. Only then can we better calculate and display the current charging power in the app. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Gewiss – Figure 6](/img/ocpp-ladestationen-gewiss/06.png)

![Gewiss – Figure 7](/img/ocpp-ladestationen-gewiss/07.png)
