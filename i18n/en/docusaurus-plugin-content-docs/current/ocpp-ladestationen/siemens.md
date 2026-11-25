---
title: 'Siemens'
slug: '/ocpp-ladestationen/siemens'
description: 'Backend integration guide'
sidebar_label: 'Siemens'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-siemens/01.jpg" bildtext="Siemens SiCharge CC" titel="SiCharge CC" href="/ocpp-ladestationen/siemens#sicharge-cc-ac22" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-siemens/02.png" bildtext="Siemens VersiCharge" titel="Siemens VersiCharge" href="/ocpp-ladestationen/siemens#versiecharge-ac-22kw" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-siemens/03.png" bildtext="Siemens SICHARGE D" titel="Siemens SICHARGE D" href="/ocpp-ladestationen/siemens#sicharge-d" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Siemens stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

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

## Integration of Siemens charging stations

<Video src="zB1Yqo63b6I" title="YouTube video, Siemens integration into the eCarUp backend" />

## SiCharge CC AC22

### Integration of the SICharge

Connect to the station via Ethernet

1.  Your laptop must have the following IP 192.168.32.10 and subnet mask: 255.255.255.0.

2.  Open your laptop's browser and enter the following URL in the address bar: 192.168.32.1

3.  The user name is "admin" and the password is the serial number of the system.

### Web interface

1.  Set Server Profile to Production

2.  Protocol Version OCPP 1.6J

3.  Paste the URL from the account

4.  Under User Management, in the Authentication section, the dot for OCPP (managed) must be set in the whitelist.

5.  Save and restart

![Siemens – Figure 4](/img/ocpp-ladestationen-siemens/04.png)

![Siemens – Figure 5](/img/ocpp-ladestationen-siemens/05.png)

### Connection via SIM card

Siemens supplies an M2M SIM card together with the charging station. 

The following setting must still be made:

- Authentication Method set to PAP

- Service Mode set to Auto

![Siemens – Figure 6](/img/ocpp-ladestationen-siemens/06.png)

## VersieCharge AC 22kW

### Preparatory steps for integrating the VersieCharge

1.  Install the Sifinity Go app on your phone

2.  Now connect your charging station to the app (setup via Bluetooth)

Tested firmware version: V2.132.29

[App Store](https://apps.apple.com/us/app/sifinity-go/id989742892?l=de)

[Google Play](https://play.google.com/store/apps/details?id=com.siemens.VersiChargeSG&hl=de&gl=US)

![Siemens – Figure 7](/img/ocpp-ladestationen-siemens/07.png)

<div className="row">
<div className="col col--6 text--center">

![Siemens – Figure 8](/img/ocpp-ladestationen-siemens/08.png)

</div>
<div className="col col--6 text--center">

![Siemens – Figure 9](/img/ocpp-ladestationen-siemens/09.png)

</div>
</div>

3\. Afterwards, the station operator must send the URL including the serial number of the station to the following email address for integration:

[si.emobility.ch@siemens.com](mailto:si.emobility.ch@siemens.com). 

Siemens will contact you promptly for a successful integration. 

## SiCharge D

To integrate the SiCharge D, the URL + serial number of the station must be sent to the following email address: 

[si.emobility.ch@siemens.com](mailto:si.emobility.ch@siemens.com)

Siemens will contact you promptly for a successful integration. 

![Siemens – Figure 10](/img/ocpp-ladestationen-siemens/10.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60 s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Siemens – Figure 11](/img/ocpp-ladestationen-siemens/11.png)

![Siemens – Figure 12](/img/ocpp-ladestationen-siemens/12.png)
