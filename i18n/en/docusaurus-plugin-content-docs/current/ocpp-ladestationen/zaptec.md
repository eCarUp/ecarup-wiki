---
title: 'Zaptec'
slug: '/ocpp-ladestationen/zaptec'
description: 'Backend integration guide'
sidebar_label: 'Zaptec'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-zaptec/01.jpg" bildtext="Zaptec Go" titel="Zaptec Go" href="https://www.zaptec.com/de-ch" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-zaptec/02.jpg" bildtext="Zaptec Pro" titel="Zaptec Pro" href="https://www.zaptec.com/de-ch" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Zaptec stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium features](/funktionen)


### Integration of OCPP stations

1.  Make sure your charging stations are installed and your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stations" tab ("Stationen").

4.  Select the "OCPP" tab ("OCPP").

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.


## Integrating the Zaptec charging stations

The Zaptec station can also transmit the 15-minute values to smart-me. Learn more at [15-minute data import](/funktionen/15-minuten-datenimport).

[![Zaptec – Figure 3](/img/ocpp-ladestationen-zaptec/03.jpg)](https://youtu.be/jK-UypywXZU)

Video guide: integrating Zaptec into the eCarUp backend

## Zaptec Go and Pro

### Installation Zaptec Portal

1.  Navigate to the [Zaptec web portal](https://portal.zaptec.com/) and log in

2.  In the menu bar at the top, select "Installations" and the desired group of Zaptec stations to integrate into the eCarUp billing system

3.  Now select "Settings" and then "Authentication" in the submenu

4.  You will see the following menu interface:


5\. Activate the "OCPP 1.6 Authentication" field

6\. Under "URL", enter the OCPP URL that you received during the preparations in the eCarUp portal. 

Note: The URL must still be extended with / & &#123;deviceid&#125;

- Example: ws://www.ecarup.com/api/Ocpp16/wei948gfhwe/&#123;deviceid&#125;


7\. Activate the "Authorization required" field and finally click "Save"

⚠️ Important:  The station must be restarted. 

The Zaptec chargers of the selected group are now registered as charging stations in your eCarUp account and can be configured according to your individual terms of use.

![Zaptec – Figure 4](/img/ocpp-ladestationen-zaptec/04.png)

### Billing a Zaptec charger in a multi-tariff system

The 15-minute values of the Zaptec station can be exported. This enables extended tariff structures such as ZEV billing or multi-tariff systems. Learn more on the page [15-minute data import](/funktionen/15-minuten-datenimport).

## Without authentication + offline charging

Connect your Zaptec stations to eCarUp via the installation as usual. (Steps 5 to 7)

1.  If not yet registered, please add a driver

2.  Then navigate to the charging station

3.  Deactivate authentication

4.  Add a default ID tag from your driver. 


Important: the RFID token must also be registered with eCarUp under the driver. You can find more information here: [LINK](/fahrer/rfid-nfc-tags-carid)

![Zaptec – Figure 5](/img/ocpp-ladestationen-zaptec/05.png)

What happens:

If no token is stored, eCarUp sends an "Invalid" message because the ID tag is empty. As the backend, we must be able to validate at all times who is authorizing. 

![Zaptec – Figure 6](/img/ocpp-ladestationen-zaptec/06.png)

If a token is stored at Zaptec, eCarUp sends an "Accepted" message because the ID tag is now sent along. The charging session is still registered at eCarUp. 

![Zaptec – Figure 7](/img/ocpp-ladestationen-zaptec/07.png)

The charging session can now also be carried out in offline mode. The station sends us the offline transaction as soon as it is back online. 

![Zaptec – Figure 8](/img/ocpp-ladestationen-zaptec/08.png)

The advantage is that the driver can also be charged retroactively (if configured accordingly).

## Several eCarup station owners on one Zaptec installation?

### Yes, this works!

Proceed as follows:

1.  On the installation, set authentication to OCPP 1.6J as usual

2.  Leave the URL field empty

3.  Select the checkbox for authentication required.

4.  Now go to the station, where you can enter the individual URL with the serial number of the Zaptec station in the settings. 

5.  Save.


![Zaptec – Figure 9](/img/ocpp-ladestationen-zaptec/09.png)

![Zaptec – Figure 10](/img/ocpp-ladestationen-zaptec/10.png)

### Links

[Webinar recording: Zaptec charging stations in the eCarUp backend](https://web.ecarup.com/webinar-zaptec-stationen-mit-ecarup-backend/)

[15-minute data import](/funktionen/15-minuten-datenimport)

[Features of the Zaptec wallbox in the eCarUp backend](https://web.ecarup.com/backend/novavolt-zaptec-charger-abrechnen/)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. Only then can we better calculate and display the current charging power in the app. 



You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)


![Zaptec – Figure 12](/img/ocpp-ladestationen-zaptec/11.png)

![Zaptec – Figure 12](/img/ocpp-ladestationen-zaptec/12.png)
