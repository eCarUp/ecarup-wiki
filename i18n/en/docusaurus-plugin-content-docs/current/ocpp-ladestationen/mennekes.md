---
title: 'Mennekes'
slug: '/ocpp-ladestationen/mennekes'
description: 'Backend integration guide'
sidebar_label: 'Mennekes'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-mennekes/01.jpg" bildtext="Mennekes Professional" titel="Professional" href="https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-mennekes/02.jpg" bildtext="Mennekes Wallbox Premium" titel="Wallbox Premium" href="https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-mennekes/03.jpg" bildtext="Mennekes Amtron Professional" titel="Amtron Professional" href="https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-mennekes/04.png" bildtext="Mennekes Amtron 4Business/4You" titel="Amtron 4Business/4You" href="https://www.mennekes.ch/emobility/produkt-details/1347012405BK/#" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Mennekes stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen)

### Integration of OCPP stations

1.  Make sure your charging stations are installed and your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" tab ("Stationen").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Amtron 4Business/4You

- tested firmware version 1.2.15

Integrate the station into a network that you can access via the IP address.  

<Embed src="https://demo.arcade.software/pn64vzJQpOAvqVOZLRlT?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.570" title="Wiki - Mennekes" />

1.  Activate expert mode ("Expertenmodus")

2.  In the settings, click on Backend.

![Mennekes – Figure 5](/img/ocpp-ladestationen-mennekes/05.png)

3\. Add your eCarUp URL and restart the charging station. 

URL example:

![Mennekes – Figure 6](/img/ocpp-ladestationen-mennekes/06.png)

## Integration of the Amedio Professional charging column & Amtron Professional wallbox

### 1\. Connect the notebook to the Bender controller via USB cable:

⚠️ Important: Use the micro-USB port

![Mennekes – Figure 7](/img/ocpp-ladestationen-mennekes/07.png)

### 2\. Open the browser on the notebook

Enter the following URL: http://192.168.123.123/operator/

- Default user name: operator

- Default password: yellow\_zone

### 3\. Check the firmware version:

<div className="row">
<div className="col col--8">

At least version 4.00-2139 must be installed.

The latest version can be found under State -> Firmware Version.

Perform a firmware update:

a) Copy the firmware file to a USB stick. Insert the USB stick.

b) Restart the Bender controller

</div>
<div className="col col--4 text--center">

![Mennekes – Figure 8](/img/ocpp-ladestationen-mennekes/08.png)

</div>
</div>

### 4\. Configure the Bender

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Example: ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

⚠️ Important: A "/" must be added after the eCarUp OCPP URL (as shown in the example). In addition, the "ChargePoint ID (OCPP)" must not contain any special characters.

![Mennekes – Figure 9](/img/ocpp-ladestationen-mennekes/09.png)

## Integration of the ACU V3 &V4

### Integration of the ACU controllers

Connect to the station via Ethernet

1.  The laptop must have the following IP 192.168.0.21 and subnet mask: 255.255.255.0.

2.  Open your laptop's browser and enter the following URL in the address bar: 192.168.0.10

3.  The user name and password are both "admin"

![Mennekes – Figure 10](/img/ocpp-ladestationen-mennekes/10.png)

### Software updates and Mennekes guide:

The software, including the guide, can be downloaded from the page [Software Updates from Mennekes](https://www.chargeupyourday.de/services/software-updates/).

## Mennekes web interface

1.  Check the current firmware

2.  If it is not up to date, please update the ACU. You can find the current software version, including the guide, on the [Mennekes software update page](https://www.chargeupyourday.de/services/software-updates/).

3.  Select transmission protocol v1.6J

4.  Insert the OCPP URL from your account and OCPP 1.6 

ws://www.ecarup.com/api/Ocpp16/(Your ID)/

Don't forget the slash at the end. ! 

Note the settings

![Mennekes – Figure 11](/img/ocpp-ladestationen-mennekes/11.png)

![Mennekes – Figure 12](/img/ocpp-ladestationen-mennekes/12.png)

![Mennekes – Figure 13](/img/ocpp-ladestationen-mennekes/13.png)

![Mennekes – Figure 14](/img/ocpp-ladestationen-mennekes/14.png)

## Downloads

Softwareupdate-ACU-v3-v4\_v03\_30-09-2019\_de.pdf

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Mennekes – Figure 15](/img/ocpp-ladestationen-mennekes/15.png)

![Mennekes – Figure 16](/img/ocpp-ladestationen-mennekes/16.png)
