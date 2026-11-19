---
title: 'Weidmüller'
slug: '/ocpp-ladestationen/weidmueller'
description: 'Backend integration guide'
sidebar_label: 'Weidmüller'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-weidmueller/01.jpg" bildtext="Weidmüller AC-Smart Advance" titel="AC-Smart Advance" href="https://www.weidmueller.de/de/produkte/elektronik/wallbox/index.jsp?gclid=CjwKCAjw2K6lBhBXEiwA5RjtCbAmZOvWrCNlfC8cwdbzRLt3y6OgvMq4_sHL43wfaHOBy_34iB-q9BoC7WUQAvD_BwE" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-weidmueller/02.jpg" bildtext="Weidmüller Wallbox" titel="Wallbox" href="https://www.weidmueller.de/de/produkte/elektronik/wallbox/index.jsp?gclid=CjwKCAjw2K6lBhBXEiwA5RjtCbAmZOvWrCNlfC8cwdbzRLt3y6OgvMq4_sHL43wfaHOBy_34iB-q9BoC7WUQAvD_BwE" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Weidmüller stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium functions](/funktionen)


### Integration of OCPP stations

1.  Make sure your charging stations are installed and your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" tab ("Stationen").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.


## Integrating the Weidmüller charging stations

### AC-Smart Advance

- Weidmüller's discontinuation process for this hardware has been in effect since 01/2025


- Open the network and internet settings of your PC

- Here you must assign a static IP address, e.g. 192.168.0.72

- Then connect your PC to the wallbox and open the following "default" IP in the browser: 192.168.0.8 

- Please refer to the supplied guide for the login details

- The software version must be at least 01.08.01

- Important: with the current version, no active charging power can be displayed in the app!


![Weidmüller – Figure 3](/img/ocpp-ladestationen-weidmueller/03.png)

1.  Activate Enable OCPP

2.  Interface: any communication medium can be selected here

3.  Portal address = [www.ecarup.com](http://www.ecarup.com)

4.  Portal port = 80 (standard outgoing port)

5.  Portal path = api/Ocpp16/xxxxxxxxxx/serial number of the station


Example: api/Ocpp16/we2eb484wrgwoir/0123456789

6.  Heartbeat interval 60s

7.  MeterValue sample interval 60s


![Weidmüller – Figure 4](/img/ocpp-ladestationen-weidmueller/04.png)

8\. Enable charging = Disabled

9\. Freemode = not active

10\. RFID = active

11\. Website, Modbus RTU/TCP and APP = active

Restart the station. 

### Weidmüller (predecessor with Wallbe controller)

- Open the network and internet settings of your PC

- Here you must assign a static IP address, e.g. 192.168.0.72

- Then connect your PC to the wallbox and open the following "default" IP in the browser: 192.168.0.8 & PW: wallbe7213

- The firmware must be at least version: BF-01.04.20


### Web interface

### Backend

- Go to the "Network" menu

- Select OCPP-J 1.6

- Desired medium for communication

- OCPP Vendor must not contain any spaces

- The websocket must be split up


### eCarUp websocket

- Enter it as shown in the screenshot

- Please note the end of the path, api/Ocpp16/weoih48zlkuhr9/00000010638




- Important: do not forget the / (slash) + 00000010638 (serial number of the station) at the end!


![Weidmüller – Figure 5](/img/ocpp-ladestationen-weidmueller/05.png)

You can find the serial number of your wallbox as follows:

![Weidmüller – Figure 6](/img/ocpp-ladestationen-weidmueller/06.png)

If RFID cards are used, please also set the following parameter:

![Weidmüller – Figure 7](/img/ocpp-ladestationen-weidmueller/07.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Weidmüller – Figure 8](/img/ocpp-ladestationen-weidmueller/08.png)

![Weidmüller – Figure 9](/img/ocpp-ladestationen-weidmueller/09.png)
