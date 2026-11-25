---
title: 'Schneider Electric'
slug: '/ocpp-ladestationen/schneider-electric'
description: 'Backend integration guide'
sidebar_label: 'Schneider Electric'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-schneider-electric/01.jpg" bildtext="Schneider Electric EVlink Pro AC" titel="EVlink Pro AC" href="/ocpp-ladestationen/schneider-electric" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-schneider-electric/02.jpg" bildtext="Schneider Electric EVlink Pro DC" titel="EVlink Pro DC" href="/ocpp-ladestationen/schneider-electric" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Schneider Electric stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen)

### Integrating OCPP stations

1.  Make sure your charging stations are installed and your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stationen" tab ("Stations").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Integrating the Schneider Electric charging stations

### EVlink Pro AC

### Integrating the EVlink AC Pro

To access the station via smartphone, the following steps are required:

- Install the "eSetup" app from Schneider Electric on your phone;

- Create a user account there.

![Schneider Electric – Figure 3](/img/ocpp-ladestationen-schneider-electric/03.png)

### Step 1

- Select EVlink Pro AC

![Schneider Electric – Figure 4](/img/ocpp-ladestationen-schneider-electric/04.jpg)

### Step 2

- The search is started

![Schneider Electric – Figure 5](/img/ocpp-ladestationen-schneider-electric/05.jpg)

### Step 3

- Select the charging station

![Schneider Electric – Figure 6](/img/ocpp-ladestationen-schneider-electric/06.jpg)

### Step 4

<div className="row">
<div className="col col--6">

- Enter the PIN code (this was assigned during registration)

</div>
<div className="col col--6 text--center">

![Schneider Electric – Figure 7](/img/ocpp-ladestationen-schneider-electric/07.jpg)

</div>
</div>

### Step 5

- Select Configuration

![Schneider Electric – Figure 8](/img/ocpp-ladestationen-schneider-electric/08.jpg)

### Step 6

- Select the supervision view for the OCPP setting

![Schneider Electric – Figure 9](/img/ocpp-ladestationen-schneider-electric/09.png)

### Step 7

![Schneider Electric – Figure 10](/img/ocpp-ladestationen-schneider-electric/10.jpg)

- Supervision ON

- Paste the OCPP URL as usual from your account

Example: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

- Select Authentication required (Public)

### Step 8

- Make the network settings

![Schneider Electric – Figure 11](/img/ocpp-ladestationen-schneider-electric/11.png)

### Step 9 (optional)

- Define the offline mode

![Schneider Electric – Figure 12](/img/ocpp-ladestationen-schneider-electric/12.jpg)

### Step 10

- Save the settings and restart the station. 

## EVlink Pro DC

Would you like to integrate the Schneider DC charging station with eCarUp?

- Send your OCPP URL to the following Schneider email address: [services@ch.schneider-electric.com](mailto:services@ch.schneider-electric.com)

- Schneider Electric will get back to you promptly. 

## EVlink Smart Wallbox & EVlink Parking

### Integrating the EVlink Smart Wallbox

Connect to the station via Ethernet

1.  Assign the following static IP address on your PC: 192.168.0.x (x is an integer between 241 and 249)

2.  Subnet mask: 255.255.255.0 + no default gateway, no DNS and no proxy

3.  Open your web browser and enter http://192.168.0.102 in the URL address bar.

4.  User name ( admin ), password ( ADMIN ) 

## Web interface

### General Settings

1.  Charging Station Name: remove all spaces

2.  Set Station type to Supervised

3.  Authentication done by Supervision 

![Schneider Electric – Figure 13](/img/ocpp-ladestationen-schneider-electric/13.png)

### Supervision

1.  Set OCPP Version to 1.6

2.  Supervision URL: paste the complete URL from your account

3.  Rename the Charging station ID + without spaces. 

Finally, restart the station!

![Schneider Electric – Figure 14](/img/ocpp-ladestationen-schneider-electric/14.png)

### EVlink load management system

Connect to the LMS via Ethernet ETH1

1.  Assign the following static IP address on your PC: 192.168.0.x (x is an integer between 241 and 249)

2.  Subnet mask: 255.255.255.0 + no default gateway, no DNS and no proxy

3.  Open your web browser and enter http://192.168.0.128 in the URL address bar.

4.  User name ( admin ), password ( ADMIN ) 

### Remote Supervision

1.  Set Enable to "ON"

2.  Remote supervision URL address: paste the complete eCarUp URL from your account.

![Schneider Electric – Figure 15](/img/ocpp-ladestationen-schneider-electric/15.png)

### Advanced settings

- Admin --> Erweitert\--> Erweiterte Einstellungen  --> Ladepunktnummerierung aktivieren \--> ON

⚠️ Note: only activate this function for stations with 2 connectors. 

![Schneider Electric – Figure 16](/img/ocpp-ladestationen-schneider-electric/16.png)

### Charging Stations

1.  A zone must be created to which the station can be added. 

2.  The Identity box must be relabeled

![Schneider Electric – Figure 17](/img/ocpp-ladestationen-schneider-electric/17.png)

### Final check

1.  The station should now receive the supervision URL from the LMS 

2.  The ID of the charging station should be identical

![Schneider Electric – Figure 18](/img/ocpp-ladestationen-schneider-electric/18.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. Only then can we better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Schneider Electric – Figure 19](/img/ocpp-ladestationen-schneider-electric/19.png)

![Schneider Electric – Figure 20](/img/ocpp-ladestationen-schneider-electric/20.png)
