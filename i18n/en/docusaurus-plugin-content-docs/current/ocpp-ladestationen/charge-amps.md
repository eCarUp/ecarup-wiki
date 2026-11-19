---
title: 'Charge Amps'
slug: '/ocpp-ladestationen/charge-amps'
description: 'Backend integration guide'
sidebar_label: 'Charge Amps'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-charge-amps/01.jpg" bildtext="Charge Amps Aura" titel="Charge Amps Aura" href="https://www.chargeamps.com/de/product/charge-amps-aura/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-charge-amps/02.jpg" bildtext="Charge Amps Dawn" titel="Charge Amps Dawn" href="https://www.chargeamps.com/de/product/charge-amps-aura/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-charge-amps/03.jpg" bildtext="Charge Amps Halo" titel="Charge Amps Halo" href="https://www.chargeamps.com/de/product/charge-amps-aura/" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Charge Amps stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen)

### Integration of OCPP stations

1.  Make sure your charging stations are installed and your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" tab.

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Integrating the Charge Amps stations

### HALO (1 x 11 kW)

⚠️ Important: The station's firmware must be at least version 158 

### Preparatory steps for integrating the HALO wallbox

1.  Open the following page and register there: [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Once you are logged in, you can add your HALO wallbox via the profile.

3.  Then go to the menu item "Remote control" and activate the RFID lock. 

⚠️ ATTENTION: This lock must be activated BEFORE the OCPP implementation!

![Charge Amps – Figure 4](/img/ocpp-ladestationen-charge-amps/04.png)

### OCPP integration

1.  Switch on your HALO

2.  Use a smartphone for this and go to your Wi-Fi settings

3.  Select the hotspot of the HALO wallbox (HALO\_serial number)

4.  Open the browser on the smartphone and enter the following IP address: 192.168.250.1

5.  The HALO setup page opens

6.  Enter the requested password. You can find the password on the letter from Charge Amps included in the delivery 

7.  In the settings, click the menu arrow (top right)

- Under the Wi-Fi menu item, the station can be connected to the desired Wi-Fi network 

-  Select the menu item "OCPP"

8.  The eCarUp URL must now be entered. Then click "Update" and restart the wallbox.

    Example of a URL: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

![Charge Amps – Figure 5](/img/ocpp-ladestationen-charge-amps/05.png)

![Charge Amps – Figure 6](/img/ocpp-ladestationen-charge-amps/06.png)

## AURA (2 x 22 kW)

### Preparatory steps for integrating the AURA wallbox

1.  Open the following page and register there: [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Once you are logged in, you can add your Aura wallbox via the profile.

3.  Then go to the menu item "Remote control" and activate the RFID lock. Please do this for both connectors!

⚠️ ATTENTION: This lock must be activated BEFORE the OCPP implementation!

![Charge Amps – Figure 7](/img/ocpp-ladestationen-charge-amps/07.png)

### OCPP integration

1.  Switch on your AURA

2.  Use a smartphone for this and go to your Wi-Fi settings

3.  Select the hotspot of the AURA wallbox (AURA\_serial number)

4.  Open your browser on the smartphone and enter the following IP address: 192.168.250.1

5.  The AURA setup page opens

6.  Enter the requested password. You can find the password on the letter from Charge Amps included in the delivery 

7.  In the settings, click the menu arrow (top right)

- Under the Wi-Fi menu item, the station can be connected to the desired Wi-Fi network 

-  Select the menu item "OCPP"

8.  The eCarUp URL must now be entered. Then click "Update" and restart the wallbox.

    Example of a URL: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

![Charge Amps – Figure 8](/img/ocpp-ladestationen-charge-amps/05.png)

![Charge Amps – Figure 9](/img/ocpp-ladestationen-charge-amps/06.png)

### Important information about the AURA

- By default, the AURA is configured so that, after a charging session has ended, it can only be released again using an RFID card. (Uncoupling of the plug) 

- This means that if you end the charging session on the vehicle side, the station's plug mechanism is not released automatically. 

- This can be fixed using our maintenance tool (eCarUp Premium); proceed as follows:

1.  Parameter Get Configuration and the key is UnlockConnectorOnEVSideDisconnect (defaults to false).

2.  Parameter for the change Change Configuration and again with the key UnlockConnectorOn EVSideDisconnect + Value set to true and save with Set.

1.

![Charge Amps – Figure 10](/img/ocpp-ladestationen-charge-amps/10.png)

2.

![Charge Amps – Figure 11](/img/ocpp-ladestationen-charge-amps/11.png)

## Dawn (1 x 22 kW)

Important: tested firmware version, 1.3.5

### Preparatory steps for integrating the Dawn wallbox

1.  Open the following page and register there: [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Once you are logged in, you can add your Dawn wallbox via the profile.

3.  Then go to the menu item "Remote control" and activate the RFID lock. 

⚠️ ATTENTION: This lock must be activated BEFORE the OCPP implementation!

![Charge Amps – Figure 12](/img/ocpp-ladestationen-charge-amps/12.png)

### OCPP integration

1.  Switch on your Dawn.

2.  Use your smartphone for the integration and install the Installer app from Charge Amps

3.  Open the app and start a search (via Bluetooth). Important: this can only be done within the first 10 minutes after the station is supplied with power.

![Charge Amps – Figure 13](/img/ocpp-ladestationen-charge-amps/13.png)

<div className="row">
<div className="col col--6">

4\. Connect the charging station to the desired medium (Wi-Fi, LAN or via eSIM)

5\. Go to CPMS and click on edit

</div>
<div className="col col--6 text--center">

![Charge Amps – Figure 14](/img/ocpp-ladestationen-charge-amps/14.png)

</div>
</div>

<div className="row">
<div className="col col--6">

6\. Click on Connect to ohter CPMS to enter the eCarUp URL

</div>
<div className="col col--6 text--center">

![Charge Amps – Figure 15](/img/ocpp-ladestationen-charge-amps/15.png)

</div>
</div>

<div className="row">
<div className="col col--6">

7\. Manually type in the eCarUp URL from your account.

Example: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

8\. Click on Connect

</div>
<div className="col col--6 text--center">

![Charge Amps – Figure 16](/img/ocpp-ladestationen-charge-amps/16.png)

</div>
</div>

8. A confirmation appears

![Charge Amps – Figure 17](/img/ocpp-ladestationen-charge-amps/17.png)

<div className="row">
<div className="col col--6">

9\. Check the overview, including the connection status.

10\. Confirm the configuration and finish.

</div>
<div className="col col--6 text--center">

![Charge Amps – Figure 18](/img/ocpp-ladestationen-charge-amps/18.png)

</div>
</div>

11\. The station now appears in your eCarUp account. 

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Charge Amps – Figure 19](/img/ocpp-ladestationen-charge-amps/19.png)

![Charge Amps – Figure 20](/img/ocpp-ladestationen-charge-amps/20.png)
