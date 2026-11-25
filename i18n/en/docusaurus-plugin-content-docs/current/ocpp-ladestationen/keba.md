---
title: 'KEBA'
slug: '/ocpp-ladestationen/keba'
description: 'Backend integration guide'
sidebar_label: 'KEBA'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-keba/01.png" bildtext="Keba P30" titel="Keba P30" href="https://www.keba.com/de/emobility/elektromobilitaet" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-keba/02.png" bildtext="Keba P40" titel="Keba P40" href="https://www.keba.com/de/emobility/elektromobilitaet" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

KEBA stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price.

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen)

### Integrating OCPP stations

1.  Make sure your charging stations are installed and your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" tab ("Stationen").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

1.ws link without Basic Auth: Tested and works

2.wss without Basic Auth: Tested and works

3.wss with Basic Auth: Tested and works

6.  Go to the web interface of the desired station and paste the copied URL.

## Integrating the Keba Wallbox P40

- Tested firmware version: 1.3.0

Integrate the station into a network that you can access via its IP address.

<Embed src="https://demo.arcade.software/IYNbI7tB2YAuuK25c3KR?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.660" title="Wiki - KEBA" />

1.  In your browser, go to the IP address of the station.

2.  Log in:

Default password: provided in the manual.

3.  Now make the following settings under OCPP:

Chargepoint Identity: "station name" ("Stationsnamen")

Caution: the station name (Chargepoint Identity) must not contain spaces or special characters, except for the underscore "\_". After successful integration, the station can be renamed on the eCarUp platform without any problems.

OCPP Communication Type: "OCPP 1.6 JSON"

Central System Hostname: "www.ecarup.com"

Central System Port: "80"

Central System Path: "api/Ocpp16/xxxxxxxx

4.  Click "Apply".

![KEBA – Figure 3](/img/ocpp-ladestationen-keba/03.png)

5\. Set Authorization to "ON"

6\. Set Online Authorization Mode to "FirstOnline".

7\. Click "Apply"

![KEBA – Figure 4](/img/ocpp-ladestationen-keba/04.png)

<div className="row">
<div className="col col--8">

If you want to connect the station using WSS and Basic Auth, you must make the following settings in the Keba app:

- Secure central system connection for WSS

- Central system authentication for Basic Auth.

The Authorization Key must be taken from the eCarUp account and additionally entered in the web portal.

</div>
<div className="col col--4 text--center">

![KEBA – Figure 5](/img/ocpp-ladestationen-keba/05.png)

</div>
</div>

Check

![KEBA – Figure 6](/img/ocpp-ladestationen-keba/06.png)

![KEBA – Figure 7](/img/ocpp-ladestationen-keba/07.png)

## Integrating the Keba Wallbox P30 X series

<Video src="db3zpnosgv8" title="YouTube video, integrating a KEBA station into the eCarUp backend" />

### KEBA measurement and calibration law in Germany

With KEBA ME charging stations, semi-public and public charging sessions can be billed easily by credit card via eCarUp in accordance with the applicable measurement and calibration law regulations. Learn more: [Calibration law in Germany](/sonstige-informationen/eichrecht-in-deutschland).

### Important: observe the Keba circular

![KEBA – Figure 8](/img/ocpp-ladestationen-keba/08.png)

![KEBA – Figure 9](/img/ocpp-ladestationen-keba/09.png)

### Important: firmware version!

To install your KEBA x-series charging station (also M&E / firmware version: 1.9.1 or newer / always get the latest software from the [KEBA downloads](https://www.keba.com/de/emobility/service-support/downloads/downloads)) in an eCarUp account, the following preparations must be made:

### Integrating the x-series

1.  Connect your computer to the IP address of the station. The IP address is shown on the station's display.

2.  Log in:

Default username: admin

Default password: Keba\_xxxx (serial number of the station)

3.  Now make the following settings under OCPP:

Chargepoint Identity: "station name" ("Stationsnamen")

Caution: the station name (Chargepoint Identity) must not contain spaces or special characters, except for the underscore "\_". After successful integration, the station can be renamed on the eCarUp platform without any problems.

OCPP Communication Type: "OCPP 1.6 JSON"

Central System Hostname: "www.ecarup.com"

Central System Port: "80"

Central System Path: "api/Ocpp16/&#123;code from the eCarUp website&#125;". You saved this in step three of the preparation (see above).

![KEBA – Figure 10](/img/ocpp-ladestationen-keba/10.png)

4\. Device configuration

Menu: Configuration (Konfiguration) --> Devices (Geräte) (the page takes a while to load)

Authorization (Authorisierung): ON (AN)

Online Authorization Mode: First Online

![KEBA – Figure 11](/img/ocpp-ladestationen-keba/11.png)

Note: If your company supports a proxy in the system, you can make these settings directly on the KEBA station.

The KEBA x-series charging station is now registered in your eCarUp account. You can now define the terms of use of the charging station in the eCarUp web portal.

### Integrating the c-series

KEBA c-series charging stations can be installed as slaves of the KEBA x-series charging stations. Just as with the x-series, you can easily define the terms of use of your stations yourself once they are installed in your account. You decide who can charge, when, and at what price.

1.  On the slave station, set the DIP switch "DSW2.5" to "On"

![KEBA – Figure 12](/img/ocpp-ladestationen-keba/12.png)

<div className="row">
<div className="col col--6">

2\. Connect your computer to the IP address of the master, the x-series KEBA charging station.

Default username: admin

Default password: serial number of the KEBA x-series charging station

3. Now make the following settings under OCPP:

1.  Under Operation Mode, switch to Charging Network

2.  Enter the number of slaves

3.  Enter the serial numbers of the slaves

</div>
<div className="col col--6 text--center">

![KEBA – Figure 13](/img/ocpp-ladestationen-keba/13.png)

</div>
</div>

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. Only then can we better calculate and display the current charging power in the app.

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![KEBA – Figure 14](/img/ocpp-ladestationen-keba/14.png)

![KEBA – Figure 15](/img/ocpp-ladestationen-keba/15.png)
