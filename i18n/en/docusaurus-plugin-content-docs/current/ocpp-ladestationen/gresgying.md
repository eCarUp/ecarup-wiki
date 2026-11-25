---
title: 'Gresgying'
slug: '/ocpp-ladestationen/gresgying'
description: 'Backend integration guide'
sidebar_label: 'Gresgying'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-gresgying/01.png" bildtext="Gresgying Turbo Wallbox" titel="Turbo Wallbox" href="https://www.gresgying.global/product/turbo-wallbox.html" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-gresgying/02.png" bildtext="Gresgying 120kW & 180kW DC Charging Station" titel="120kW & 180kW DC Charging Station" href="https://www.gresgying.global/product/120kw-180kw-dc-charging-station.html" bildhoehe="10rem" mittig />

</Kacheln>

## Backend integration guide

Gresgying stations can be integrated into the eCarUp billing system in just a few steps. Once installed in your account, you can easily define the terms of use for your stations yourself (prices, users, available times, etc.). You decide who can charge, when, and at what price. 

- Prerequisite for [integration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration in the [web portal for station operators](/stationsbetreiber/webportal) 

- Learn more about our [premium features](/funktionen)

### Integration of OCPP stations

1.  Make sure your charging stations are installed and your PC or phone is connected to the same network as the charging station.

2.  Open the [eCarUp web portal](https://admin.ecarup.com/authentication/login) and log in with your account details.

3.  In the menu on the left, click the "Stationen" tab ("Stationen").

4.  Select the "OCPP" tab.

5.  Copy the URL to the clipboard.

6.  Go to the web interface of the desired station and paste the copied URL.

## Gresgying AC Wallbox

- "firmwareVersion":"C-V1.01.24 P-V1.01.21" 

- Install the Gresgying app

- Tested app version: V1.0.10

![Gresgying – Figure 3](/img/ocpp-ladestationen-gresgying/03.png)

### Step 1

<div className="row">
<div className="col col--6">

- Connect the station to your Gresgying account via the app.

</div>
<div className="col col--6 text--center">

![Gresgying – Figure 4](/img/ocpp-ladestationen-gresgying/04.png)

</div>
</div>

### Step 2

<div className="row">
<div className="col col--6">

- Once the station has been connected successfully, it looks like this in the app

</div>
<div className="col col--6 text--center">

![Gresgying – Figure 5](/img/ocpp-ladestationen-gresgying/05.png)

</div>
</div>

### Step 3

<div className="row">
<div className="col col--6">

- Under Network Configuration, you can select the connection type.

- Under OCPP Server, you can add the URL.

</div>
<div className="col col--6 text--center">

![Gresgying – Figure 6](/img/ocpp-ladestationen-gresgying/06.png)

</div>
</div>

### Step 4

<div className="row">
<div className="col col--6">

- Under Path, add the entire URL from your eCarUp account.

- Please note that the serial number of the station must be added after the URL.

- Click Connect.

</div>
<div className="col col--6 text--center">

![Gresgying – Figure 7](/img/ocpp-ladestationen-gresgying/07.png)

</div>
</div>

### Example URL:

- ws://www.ecarup.com/api/Ocpp16/D0xxxxxxxxxx/Seriennummer

### Finally, please check the following setting:

- Charging Mode must be set to "Online". 

![Gresgying – Figure 8](/img/ocpp-ladestationen-gresgying/08.png)

## Gresgying F3-EU 180 kW

- "firmwareVersion":"C2032\_V2.8.2" 

### The station can be configured locally as well as remotely.

Locally via the screen:

- Please refer to the supplied operating manual. 

Remotely via the Device Management System:

- Click "Device Manage" and search for the desired station

- Select "Set Parameters"

- "Operation Platfrom address"

- Add the OCPP URL from your account and save the setting.

- Then restart the station.

![Gresgying – Figure 9](/img/ocpp-ladestationen-gresgying/09.png)

![Gresgying – Figure 10](/img/ocpp-ladestationen-gresgying/10.png)

## Advanced settings via maintenance tool (eCarUp Premium)

The upload interval of the meter values can vary from station to station. We recommend an interval between 30-60s. This is the only way we can better calculate and display the current charging power in the app. 

You can change this as follows:

1.  Get Configuration (to read out what is programmed)

2.  Change Configuration (to overwrite the value)

![Gresgying – Figure 11](/img/ocpp-ladestationen-gresgying/11.png)

![Gresgying – Figure 12](/img/ocpp-ladestationen-gresgying/12.png)
