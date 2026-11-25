---
title: 'EVTEC'
slug: '/ocpp-ladestationen/evtec'
description: 'Backend integration guide'
sidebar_label: 'EVTEC'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-evtec/01.jpg" bildtext="EVTEC Cappuccino & Charge" titel="Cappuccino & Charge" href="https://www.evtec.ch/geraete" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-evtec/02.jpg" bildtext="EVTEC Coffee & Charge" titel="Coffee & Charge" href="https://www.evtec.ch/geraete" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-evtec/03.png" bildtext="EVTEC Espresso & Charge" titel="Espresso & Charge" href="https://www.evtec.ch/geraete" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

EVTEC stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for the [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal)

- Learn more about our [premium functions](/funktionen) here

### Integration of OCPP stations

General information on the [commissioning of OCPP stations](/stationsbetreiber/inbetriebnahme-ocpp-station) 

Make sure that your charging stations are installed and that your PC or phone is connected to the same network as the charging station.

1.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

2.  In the menu on the left, click the "Stationen" tab ("Stations").

3.  Select the "OCPP" tab.

4.  Copy the URL to the clipboard. 

    1.  ws link without Basic Auth: tested and works

    2.  wss without Basic Auth: not tested

    3.  wss with Basic Auth: not tested

5.  Go to the web interface of the desired station and paste the copied URL.

## Integration into the eCarUp portal

## Note

<div className="row">
<div className="col col--8">

- A credit card terminal can be operated in parallel with eCarUp to ensure maximum flexibility. EVTEC will be happy to provide you with further information.

1.  Adjust the IP settings of the EVTEC station to the IP network of the station administrator (on the device).

2.  Connect to the EVTEC station from a PC on the same network (via the IP address defined above). See the screenshot with the example 192.168.10.20. Then press the «Config» button.

If you have questions about connecting the station (which IP my station has, user name & password), contact eCarUp or EVTEC directly.

</div>
<div className="col col--4 text--center">

![EVTEC – Figure 4](/img/ocpp-ladestationen-evtec/04.png)

</div>
</div>

3\. Select the menu item OCPP.

![EVTEC – Figure 5](/img/ocpp-ladestationen-evtec/05.png)

4\. Make the settings as shown in the screenshot below. Then select Connection Parameters.

Important: change idTagConversion to HexZero...

![EVTEC – Figure 6](/img/ocpp-ladestationen-evtec/06.jpg)

5\. Make the settings as shown in the screenshot below.

⚠️ IMPORTANT: In the «CsAddress» field, enter the correct path for the desired eCarUp account.

![EVTEC – Figure 7](/img/ocpp-ladestationen-evtec/07.png)

<div className="row">
<div className="col col--8">

6\. The path for the eCarUp account can be determined as follows.

a) Log in at www.ecarup.com with the desired account.

b) Select the «OCPP URL» tab.

c) Copy the link and enter it in the «CsAddress» field in the EVTEC interface.

7\. When finished, use the «back» button to return to the menu from step 4 of this guide. Then select «ConfigurationParameters».

8\. After selecting «ConfigurationParameters», configure the settings for the EVTEC station according to your own needs (example in the screenshot).

</div>
<div className="col col--4 text--center">

![EVTEC – Figure 8](/img/ocpp-ladestationen-evtec/08.png)

</div>
</div>

9. Set MeterValuesSampledData to the value Energy.Active.Import.Register,Power.Active.Import so that the live charging power is displayed.

10. When finished, use the «back» button to return to the menu from step 4, and then use the «back» button once more to return to the menu from step 3 of this guide. Then select «Authentication».

![EVTEC – Figure 9](/img/ocpp-ladestationen-evtec/09.png)

<div className="row">
<div className="col col--8">

11\. After selecting «Authentification», set the menu item «ChargeAuthentification» to OCPP. Leave the other menu items untouched.

</div>
<div className="col col--4 text--center">

![EVTEC – Figure 10](/img/ocpp-ladestationen-evtec/10.png)

</div>
</div>

12\. The EVTEC station has now been created in the eCarUp account specified by the URL. The station can now be configured via the standard process in the eCarUp app and web login according to your individual needs (location, prices, images, etc.).

⚠️ ATTENTION: Note multiple connectors!

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. Only then can we better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![EVTEC – Figure 11](/img/ocpp-ladestationen-evtec/11.png)

![EVTEC – Figure 12](/img/ocpp-ladestationen-evtec/12.png)
