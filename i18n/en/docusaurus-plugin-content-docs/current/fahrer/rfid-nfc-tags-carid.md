---
title: 'RFID / NFC Tags / CarID'
slug: '/fahrer/rfid-nfc-tags-carid'
description: '⚠️ Important: eCarUp does not sell RFID tags.'
sidebar_label: 'RFID / NFC Tags / CarID'
---
<Video src="Rhmi6IUkedY" title="YouTube video, linking an RFID tag to an eCarUp account" />

⚠️ Important: eCarUp does not sell RFID tags. You can find important information on purchasing an RFID tag here: [LINK](/drittprodukte#rfid--nfc-key-fob-tags-ntag215)

## Operating principle:

![RFID / NFC Tags / CarID – Figure 1](/img/fahrer-rfid-nfc-tags-carid/01.png)

\*CarID currently only works with the smart-me  [Pico charging station](/smart-me-pico)

![RFID / NFC Tags / CarID – Figure 2](/img/fahrer-rfid-nfc-tags-carid/02.png)

![RFID / NFC Tags / CarID – Figure 3](/img/fahrer-rfid-nfc-tags-carid/03.png)

### Important

- The RFID tags are installed on the driver accounts, not on the station owner's account. 

- Not all stations have an RFID / NFC reader. An RFID tag can therefore not be used at every station.

- [RFID tags compatible with Pico (technical data)](https://wiki.smart-me.com/produkte/pico-ladestation)

- It is possible that an RFID tag can be read into eCarUp even though the station does not support it. Primarily make sure the tag is compatible with the station.

- Unlocking with RFID cards generally does not meet eCarUp's high security requirements. RFID cards can easily be copied and forged.  Adding and using RFID cards is at your own risk.

- eCarUp does not issue its own RFID / NFC cards. The driver must add and manage the tags themselves.

- RFID tags can only be used for local unlocking of eCarUp charging stations and do not work for stations from third-party networks (e.g. Hubject).

- In the eCarUp system, the TagID of the RFID card can only be assigned to one user once. (Protection function)

## Guide: adding an RFID card:

<div className="row">
<div className="col col--7">

### Guide for the Android app

Requirement: Android phone with NFC function.

1\. Log in to the driver account you want to link to an RFID/NFC tag using the eCarUp Android app.  In the menu at the bottom, tap Account and then RFID Karten (RFID cards).

2\. Tap the + icon at the top right, then you can specify the name and the tag ID (same as on the web). 

3\. If your Android smartphone has an NFC function, you can read the tag of the desired card directly. To do so, hold the card against the back of the device (where most NFC readers are located).

If you enter the tag ID (UID) manually, you can determine it by reading the desired RFID tag. This can be done either directly with an RFID reader (e.g. at a company) or with an app on a mobile phone that has an NFC reader. One example is the free app [NFC-Tools](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc&hl=de_CH) (Apple blocks the reading of RFID / NFC numbers).

4\. Your tag ID is now linked to the account and can be used for unlocking.

</div>
<div className="col col--5 text--center">

![RFID / NFC Tags / CarID – Figure 4](/img/fahrer-rfid-nfc-tags-carid/04.png)

</div>
</div>

<div className="row">
<div className="col col--7">

### Guide for the iOS app

Requirement: iPhone with NFC function (iOS 14 or later & > iPhone 6).

(Apple only supports this from iOS version 13/14).

1\. Log in to the driver account you want to link to an RFID/NFC tag using the eCarUp app (iOS). In the menu at the bottom, tap Account and then RFID Karten (RFID cards).

2\. Tap the + icon at the top right, then you can specify the name and the tag ID (same as on the web). 

3\. If your Apple smartphone has an NFC function (>iPhone 10), you can read the tag of the desired card directly. To do so, hold the card against the back of your device (where most NFC readers are located).

4\. Your tag ID is now linked to the account and can be used for unlocking.

</div>
<div className="col col--5 text--center">

![RFID / NFC Tags / CarID – Figure 5](/img/fahrer-rfid-nfc-tags-carid/05.png)

</div>
</div>

Example TagID:

- Important: the colon does not need to be entered.

- Note: The SwissPass has 2 RFID tags; eCarUp recommends registering both.

![RFID / NFC Tags / CarID – Figure 6](/img/fahrer-rfid-nfc-tags-carid/06.png)

### Note on Apple iPhone (iOS):

Android recognises almost every chip type. However, Apple heavily restricts the NFC interface on the manufacturer side: older or proprietary chips (e.g. Mifare Classic or Legic), which are often used on charging cards, are blocked by iOS for security reasons. eCarUp has no influence on this.

If your iPhone does not recognise the card:

- Enter manually: Simply enter the printed card number (UID, if available) by hand in the eCarUp app (without spaces).

- Teach it via Android: Log in once on an Android device with your eCarUp account and scan the card there. It is then immediately stored in your account.

![RFID / NFC Tags / CarID – Figure 7](/img/fahrer-rfid-nfc-tags-carid/07.png)

## CarID:

The Plug & Charge function enables user-friendly and secure authentication between the electric vehicle and a charging station, making unlocking via app or RFID card unnecessary.

After the vehicle has been registered once with the eCarUp app, it is sufficient for the user to connect the electric vehicle for each charging session. The vehicle automatically transmits the data required to authorise the payment process to the charging station.

⚠️Important: Currently this function only works with the [Pico](https://wiki.smart-me.com/produkte/pico-ladestation) EV charging station from smart-me AG.

### Linking to the account

<div className="row">
<div className="col col--6">

Basic requirement: The station operator of the [Pico](/smart-me-pico) must have activated the function on the charging station, and the car must be a battery-electric vehicle.

1.  Connect your vehicle to the Pico

2.  Wait until the orange cross (X CAR-ID) appears on the display

3.  An icon appears on the display (person with a shield)

4.  You can then start the charging session via the eCarUp app as usual

5.  Once this has happened, a pop-up window from eCarUp appears asking whether you want to assign the Car-Id.

⚠️Important: It is important that you delete the link between the CarID and your account as soon as the car is no longer in your possession, for example after a sale.

⚠️Important: Car-Id can be the same on several vehicles on the part of the car manufacturer. A charge can therefore take place on your account even though it is not your vehicle.

</div>
<div className="col col--6 text--center">

![RFID / NFC Tags / CarID – Figure 8](/img/fahrer-rfid-nfc-tags-carid/08.jpg)

</div>
</div>
