---
title: 'Hager'
slug: '/ocpp-ladestationen/hager'
description: 'Backend integration guide'
sidebar_label: 'Hager'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-hager/01.png" bildtext="Hager witty plus & pro" titel="Hager witty plus & pro" href="https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-hager/02.png" bildtext="Hager witty park 2" titel="Hager witty park 2" href="https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-hager/03.png" bildtext="Hager witty share" titel="Hager witty share" href="https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Hager stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen)

### Integrating OCPP stations

1.  Make sure your charging stations are installed and that your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" tab ("Stationen").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

    1.  ws link without Basic Auth: tested and works

    2.  wss without Basic Auth: tested and works

    3.  wss with Basic Auth: tested and works

6.  Go to the web interface of the desired station and paste the copied URL.

## Integrating the Hager witty park 2

- Tested firmware version: V1.1.0.11

1.  Connect to the Hager station via LAN or Wi-Fi (details on the connection can be found in the installation guide).

2.  Login screen (the required login details can also be found in the installation guide).

3.  Analogous to integrating the Hager witty pro, you can enter your eCarUp URL in the same way. [Link](/ocpp-ladestationen/hager#integrating-the-hager-witty-pro)

4\. If you would also like to personalize the screen, you can do this under "Charging stations" ("Ladestationen"), then under Screen ("Bildschirm").

![Hager – Figure 4](/img/ocpp-ladestationen-hager/04.png)

5. Tip: You can have the QR codes projected directly onto the station's display via OCPP. 

- Using ChangeConfiguration via the maintenance tool, you can send the following command:

\[2, "b1a70001-6e37-b9a9-d242-a5f2e0ab6860", "ChangeConfiguration", &#123;"key":"HagerQrCodeURL1","value":"[https://admin.ecarup.com/instant-payment?serial=I3M264mupkyqFp4fu21QTqZeY](https://admin.ecarup.com/instant-payment?serial=I3M264mupkyqFp4fu21QTqZeY)"&#125;\]

- You can find out how to get the URL here: [Link](/stationsbetreiber/qr-code)

- Everything about the maintenance tool here: [Link](/funktionen/wartung)

Example:

![Hager – Figure 5](/img/ocpp-ladestationen-hager/05.jpg)

![Hager – Figure 6](/img/ocpp-ladestationen-hager/06.png)

## Integrating the Hager witty pro

- XVL122SCH and XVL122CCH

- Tested firmware version: V1.1.5.3

1.  Connect to the Hager station via LAN or Wi-Fi (details on the connection can be found in the installation guide).

2.  Login screen (the required login details can also be found in the installation guide.).

3.  The desired connection can be set under the menu item Charging Station. 

4\. Under Access Management, the Charge Point Operator can be added. 

5\. OCPP server: the URL from your account, e.g. wss://www.ecarup.com/api/Ocpp16/D037xxxxxxxxxx

6\. The ChargePoint ID can be left at the default settings.

 7\. Set the authentication type to None.

8\. Save and restart

![Hager – Figure 7](/img/ocpp-ladestationen-hager/07.png)

![Hager – Figure 8](/img/ocpp-ladestationen-hager/08.png)

Optional: wss + Basic Auth. 

![Hager – Figure 9](/img/ocpp-ladestationen-hager/09.png)

## Hager load manager

XEM 520

Important: Firmware version LLM\_2023\_098 must be installed. 

1.  Connect to the load manager

2.  Click on the menu item Charging stations

3.  Find the charging station and configure the phase assignment

4.  Go to Charging station, activate Charging station operator CPO, and then click on Settings.

![Hager – Figure 10](/img/ocpp-ladestationen-hager/10.png)

5\. Select eCarUp from the list and add your eCarUp ID (not the whole URL)

e.g. (ws://www.ecarup.com/api/Ocpp16/) D037xxxxxxxxxx

then click Next as well. 

![Hager – Figure 11](/img/ocpp-ladestationen-hager/11.png)

6. Add the serial number of the charging station in the OCPP ID field. 

7\. Now click on Connect to CPO server.

8\. The station restarts. 

![Hager – Figure 12](/img/ocpp-ladestationen-hager/12.png)

Final check

![Hager – Figure 13](/img/ocpp-ladestationen-hager/13.png)

## Integrating the Hager witty plus

<div className="row">
<div className="col col--6">

- XVL122S and XVL122C

- Tested firmware version: V1.1.1.6

- To do this, install the Hager Charge app

</div>
<div className="col col--6 text--center">

![Hager – Figure 14](/img/ocpp-ladestationen-hager/14.png)

</div>
</div>

1.  ### Activate pairing

![Hager – Figure 15](/img/ocpp-ladestationen-hager/15.png)

### 2\. Add station

![Hager – Figure 16](/img/ocpp-ladestationen-hager/16.png)

Add a network to the charging station

### 3.

![Hager – Figure 17](/img/ocpp-ladestationen-hager/17.png)

### 4.

![Hager – Figure 18](/img/ocpp-ladestationen-hager/18.png)

### 5.

![Hager – Figure 19](/img/ocpp-ladestationen-hager/19.png)

### 6.

![Hager – Figure 20](/img/ocpp-ladestationen-hager/20.png)

### 7.

![Hager – Figure 21](/img/ocpp-ladestationen-hager/21.png)

- Enter your eCarUp URL in the address field. 

- OCPP ID: enter the serial number of the station here. 

- Save. 

## Integrating the Hager witty share

- XEV1R22T2

- Discontinued by Hager. 

<Video src="g2omgn1jWo0" title="YouTube video, Hager integration guide in the eCarUp backend" />

Quick guide: integrating a Hager station into the eCarUp backend

1.  Connect to the Hager station via LAN or Wi-Fi (details on the connection can be found in the installation guide)

2.  Login screen (the required login details can also be found in the installation guide.).

- Username: admin

- PW:1234

3.  Under Configuration, you can adjust the LAN and/or Wi-Fi settings.

4.  Under Protocol, set the type to OCPP and the authorization mode to OCPP Full. 

5.  OCPP server: the URL from your account, e.g. ws://www.ecarup.com/api/Ocpp16/D037xxxxxxxxxx

6.  The ChargePoint ID can be left at the default settings. 

7.  Set the authentication type to None.

8.  Save and restart

### 2\. Step: Log in

![Hager – Figure 22](/img/ocpp-ladestationen-hager/22.png)

### 3\. Step: Configure Wi-Fi & LAN settings

![Hager – Figure 23](/img/ocpp-ladestationen-hager/23.png)

### 4.-7. Step: Enter and adjust the inputs

![Hager – Figure 24](/img/ocpp-ladestationen-hager/24.png)

### 8\. Step: Save and restart.

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Hager – Figure 25](/img/ocpp-ladestationen-hager/25.png)

![Hager – Figure 26](/img/ocpp-ladestationen-hager/26.png)
