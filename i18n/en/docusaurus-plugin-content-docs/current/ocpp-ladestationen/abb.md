---
title: 'ABB'
slug: '/ocpp-ladestationen/abb'
description: 'All ABB stations with backend functionality can be integrated into the eCarUp backend.'
sidebar_label: 'ABB'
---
All ABB stations with backend functionality can be integrated into the eCarUp backend.
ABB charging stations that are already installed can also be migrated to eCarUp. 

<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-abb/01.jpg" bildtext="ABB AC Terra Wallbox" titel="AC Terra Wallbox" href="https://e-mobility.abb.com/en" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-abb/02.jpg" bildtext="ABB AC EV Lunic Pro M / Pro S" titel="AC EV Lunic Pro M / Pro S" href="https://e-mobility.abb.com/en" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-abb/03.jpg" bildtext="ABB DC Terra 24 / 54 / 54 HV" titel="DC Terra 24 / 54 / 54 HV" href="https://e-mobility.abb.com/en" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-abb/04.jpg" bildtext="ABB DC Terra Wallbox" titel="DC Terra Wallbox" href="https://e-mobility.abb.com/en" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

ABB stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium functions](/funktionen)

### Integrating OCPP stations

1.  Make sure your charging stations are installed and your PC or mobile phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" tab ("Stationen").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Integrating ABB AC charging stations

<Video src="UxKCeK8RGSA" title="YouTube video, integration guide for ABB in the eCarUp backend" />

### ABB Terra AC Wallbox

To integrate the ABB Terra AC Wallbox, the following steps must be carried out (once) on the ABB side:

- Create a TerraConfig Portal account. Apply via [https://forms.abb.com/form-39881/Antrag-Connected-Services-AC-Terra](https://forms.abb.com/form-39881/Antrag-Connected-Services-AC-Terra))

- Create an app account in the portal

- Add the eCarUp URL via the ABB portal

- Note: Do not use special characters or spaces in the Third Party Name!

- Without password

 TerraConfig Portal 

![ABB – Figure 5](/img/ocpp-ladestationen-abb/05.png)

![ABB – Figure 6](/img/ocpp-ladestationen-abb/06.png)

### Then proceed as follows in the ABB TerraConfig app:

- Log in to the TerraConfig app with the app (ABB) account

- Connect to the station via Bluetooth (requires the supplied key)

- Tested with software version 1.6.9

![ABB – Figure 7](/img/ocpp-ladestationen-abb/07.png)

1.  New configuration

![ABB – Figure 8](/img/ocpp-ladestationen-abb/08.png)

2\. Work through steps 1-5

![ABB – Figure 9](/img/ocpp-ladestationen-abb/09.png)

<div className="row">
<div className="col col--6">

2.1 Select the desired connection type

2.2 Deactivate free charging

2.3 OCPP configuration (explained in more detail below)

2.4 Activate external RFID cards

2.5 Always confirm the configuration

2.3 OCPP configuration

</div>
<div className="col col--6 text--center">

![ABB – Figure 10](/img/ocpp-ladestationen-abb/10.png)

</div>
</div>

<div className="row">
<div className="col col--6">

2.3.1 Activate external server

The URL that was added in the web portal can be selected here.

2.3.2 Add custom URL; the OCPP URL can be entered manually here.

Select and configure the OCPP server

</div>
<div className="col col--6 text--center">

![ABB – Figure 11](/img/ocpp-ladestationen-abb/11.png)

</div>
</div>

Confirm the OCPP server configuration

![ABB – Figure 12](/img/ocpp-ladestationen-abb/12.png)

Save the entire configuration and restart. 

![ABB – Figure 13](/img/ocpp-ladestationen-abb/13.png)

## Integrating ABB DC charging stations

### ABB Terra DC (wallbox and fast charging stations)

DC charging stations must be provisioned by ABB with the eCarUp backend. To do so, contact the following address directly, providing the station details and your OCPP URL (from the web portal):

-  [emobility@ch.abb.com](mailto:emobility@ch.abb.com)

The migration will be confirmed to you by email.

After that, the station is created in your eCarUp account and you can configure the settings according to your use case. You will find more information in the [Backend](/funktionen) section.

## Old version

### Then proceed as follows in the ABB TerraConfig app (old version):

- Log in to the TerraConfig app with the app (ABB) account

- Connect to the station via Bluetooth (requires the supplied key)

<Video src="6aw4vxHiWwU" title="YouTube video, setting up the OCPP backend for the ABB Terra AC wall-mounted charging station" />

1.  OCPP Server

![ABB – Figure 14](/img/ocpp-ladestationen-abb/14.jpg)

2\. Select "+"

![ABB – Figure 15](/img/ocpp-ladestationen-abb/15.jpg)

3\. A predefined URL link appears

![ABB – Figure 16](/img/ocpp-ladestationen-abb/16.jpg)

4\. Click "Next"

![ABB – Figure 17](/img/ocpp-ladestationen-abb/17.png)

5\. Activate external access and click "Configure"

![ABB – Figure 18](/img/ocpp-ladestationen-abb/18.png)

6\. Finish with OK

![ABB – Figure 19](/img/ocpp-ladestationen-abb/19.png)

⚠️ If the RFID cards do not work, you must activate "external cards" in the Terra Config app.

## Important:

If the RFID cards do not work, you must make the following setting on the station via the Terra Config app:

![ABB – Figure 20](/img/ocpp-ladestationen-abb/20.png)

Information:

Since the ABB software release (SW V1.6.5), for security reasons the UID is no longer transmitted via OCPP with the supplied ABB badge (RFID card No.xxxxxxxxx).  

### Possible obstacles to unsuccessful activation via the RFID card

1.  If the station sends us an authorization request with the serial number, this means the station is still in Free Vending mode. Please deactivate this mode under Device Mode in the TerraConfig app. 

![ABB – Figure 21](/img/ocpp-ladestationen-abb/21.png)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![ABB – Figure 22](/img/ocpp-ladestationen-abb/22.png)

![ABB – Figure 23](/img/ocpp-ladestationen-abb/23.png)
