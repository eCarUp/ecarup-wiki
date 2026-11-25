---
title: 'RFID / NFC Tags / CarID'
slug: '/fahrer/rfid-nfc-tags-carid'
description: '⚠️ Wichtig: eCarUp verkauft keine RFID-TAGs.'
sidebar_label: 'RFID / NFC Tags / CarID'
---
<Video src="Rhmi6IUkedY" title="YouTube Video, RFID Tag mit einem eCarUp Account verknüpfen" />

⚠️ Wichtig: eCarUp verkauft keine RFID-TAGs. Wichtige Informationen zum Kauf eines RFID-TAGs findest du hier: [LINK](/drittprodukte#rfid--nfc-schlüsselanhänger-tags-ntag215)

## Funktionsprinzip:

![RFID / NFC Tags / CarID – Abbildung 1](/img/fahrer-rfid-nfc-tags-carid/01.png)

\*CarID funktioniert derzeit nur mit der smart-me  [Pico-Ladestation](/smart-me-pico)

![RFID / NFC Tags / CarID – Abbildung 2](/img/fahrer-rfid-nfc-tags-carid/02.png)

![RFID / NFC Tags / CarID – Abbildung 3](/img/fahrer-rfid-nfc-tags-carid/03.png)

### Wichtig

- Die jeweiligen RFID-Tags sind bei den Fahrer Accounts installiert - nicht beim Stationsbesitzer. 

- Nicht alle Stationen verfügen über einen RFID / NFC Reader. Ein RFID-Tag kann folglich nicht bei jeder Station genutzt werden.

- Mit [Pico kompatible RFID-Tags (technische Daten)](https://wiki.smart-me.com/produkte/pico-ladestation)

- Es ist möglich, dass ein RFID-Tag bei eCarUp eingelesen werden kann, welche von der Station nicht unterstützt wird. Achte primär auf Kompatibilität mit der Station.

- Eine Freischaltung mit RFID Karten erfüllt grundsätzlich nicht die hohen Sicherheitsanforderungen von eCarUp. RFID Karten können einfach kopiert und gefälscht werden.  Das Hinzufügen und die Nutzung von RFID Karten erfolgt auf eigene Gefahr.

- eCarUp gibt keine eigenen RFID / NFC Karten heraus. Das Hinzufügen und Verwalten der Tags muss durch den Fahrer selber geschehen.

- Die RFID Tags können nur für die lokale Freischaltung von eCarUp Ladestationen verwendet werden und funktionieren nicht für Stationen aus Drittnetzwerken (z.B. Hubject).

- Im eCarUp System kann die TagID der RFID-Karte nur einmal einem Nutzer zugewiesen werden. (Schutzfunktion)

## Anleitung RFID Karte hinzufügen:

<div className="row">
<div className="col col--7">

### Anleitung Android App

Voraussetzung: Android Handy mit NFC Funktion.

1\. Logge dich per eCarUp Android-App in den Fahrer-Account ein, welche du mit einem RFID/NFC-Tag verknüpfen möchtest.  Klick im Menü unten auf Account und dann RFID Karten.

2\. Klicke oben rechts auf das +-Symbol, danach kannst du den Namen und die Tag-ID spezifizieren (gleich wie im Web). 

3\. Wenn dein Android-Smartphone eine NFC-Funktion hat, kannst du den Tag der gewünschten Karte direkt auslesen. Halte dafür die Karte von hinten (wo die meisten NFC Leser platziert sind) an das Gerät.

Falls du die Tag ID (UID) von Hand eingibst, kannst du diese ermitteln, indem du den gewünschten RFID-Tag ausliest. Dies kann entweder direkt über ein RFID Lesegerät geschehen (z. B. in einer Firma) oder auch über eine App mit einem Mobiltelefon, welches über einen NFC-Reader verfügt. Ein Beispiel ist das kostenlose App [NFC-Tools](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc&hl=de_CH) (Apple unterdrückt das Auslesen von RFID / NFC Nummern).

4\. Deine Tag-ID ist jetzt mit dem Account verknüpft und kann für die Freischaltung verwendet werden.

</div>
<div className="col col--5 text--center">

![RFID / NFC Tags / CarID – Abbildung 4](/img/fahrer-rfid-nfc-tags-carid/04.png)

</div>
</div>

<div className="row">
<div className="col col--7">

### Anleitung iOS App

Voraussetzung: iPhone mit NFC-Funktion (ab iOS 14 & > iPhone 6).

(Apple unterstützt dies erst ab der iOS-Version 13/14).

1\. Logge dich in der eCarUp-App (iOS) in den Fahrer-Account ein, den du mit einem RFID/NFC-Tag verknüpfen möchtest. Klicke im Menü unten auf Account und dann RFID Karten.

2\. Klicken Sie oben rechts auf das +-Symbol, danach können Sie den Namen und die Tag-ID spezifizieren (gleich wie im Web). 

3\. Wenn Ihr Apple-Smartphone eine NFC-Funktion hat (>iPhone 10), können Sie den Tag der gewünschten Karte direkt auslesen. Halten Sie dafür die Karte von hinten (wo die meisten NFC\-Leser platziert sind) an dein Gerät.

4\. Deine Tag-ID ist jetzt mit dem Account verknüpft und kann für die Freischaltung verwendet werden.

</div>
<div className="col col--5 text--center">

![RFID / NFC Tags / CarID – Abbildung 5](/img/fahrer-rfid-nfc-tags-carid/05.png)

</div>
</div>

Beispiel TagID:

- Wichtig: Doppelpunkt muss nicht gemacht werden.

- Achtung: Der SwissPass hat 2 RFID-Tags, eCarUp empfiehlt beide zu hinterlegen.

![RFID / NFC Tags / CarID – Abbildung 6](/img/fahrer-rfid-nfc-tags-carid/06.png)

### Hinweis zu Apple iPhone (iOS):

Android erkennt nahezu jeden Chiptyp. Apple schränkt die NFC-Schnittstelle jedoch herstellerseitig stark ein: Ältere oder proprietäre Chips (z. B. Mifare Classic oder Legic), die häufig auf Ladekarten genutzt werden, werden von iOS aus Sicherheitsgründen blockiert. eCarUp hat darauf keinen Einfluss.

Wenn dein iPhone die Karte nicht erkennt:

- Manuell eingeben: Trage die aufgedruckte Kartennummer (UID, sofern vorhanden) in der eCarUp App einfach von Hand ein (ohne Leerzeichen).

- Über Android anlernen: Logge dich einmalig auf einem Android-Gerät mit deinem eCarUp Account ein und scanne die Karte dort. Sie ist danach sofort in deinem Konto hinterlegt.

![RFID / NFC Tags / CarID – Abbildung 7](/img/fahrer-rfid-nfc-tags-carid/07.png)

## CarID:

Die Plug-& Charge-Funktion ermöglicht eine benutzerfreundliche und sichere Authentifizierung zwischen dem Elektrofahrzeug und einer Ladestation, die eine Freischaltung per App oder RFID Karte überflüssig macht.

Nach einmaliger Registrierung des Fahrzeugs mit der eCarUp App reicht es bei jedem Ladevorgang, dass der Nutzer das Elektrofahrzeug verbindet. Das Fahrzeug übermittelt automatisch die zur Autorisierung des Bezahlvorgangs erforderlichen Daten an die Ladestation.

⚠️Wichtig: Aktuell funktioniert diese Funktion nur mit der E-Ladestation [Pico](https://wiki.smart-me.com/produkte/pico-ladestation) von smart-me AG.

### Verknüpfung mit dem Account

<div className="row">
<div className="col col--6">

Grundvoraussetzung: Der Stationsbetreiber der [Pico](/smart-me-pico) muss die Funktion auf der Ladestation aktiviert haben und das Auto muss ein Batteriebetriebenes Elektrofahrzeug sein.

1.  Verbinde dein Fahrzeug mit der Pico

2.  Warte bis das orange Kreuz (X CAR-ID) auf dem Display erscheint

3.  Ein Icon erscheint auf dem Display (Mensch mit Schild)

4.  Danach kannst du den Ladevorgang wie gehabt über die eCarUp App starten

5.  Sobald dies geschehen ist, kommt ein Pop Up Fenster von eCarUp welches dich fragt ob du die Car-Id zuordnen möchtest.

⚠️Wichtig: Es ist wichtig, dass du die Verknüpfung der CarID mit deinem Account löschst, sobald das Auto nicht mehr in deinem Besitz ist, zum Beispiel nach einem Verkauf.

⚠️Wichtig: Car-Id kann seitens Auto-Hersteller auf mehreren Fahrzeugen dieselbe sein. Somit kann eine Ladung auf deinem Konto stattfinden, obwohl es nicht deine Fahrzeug ist.

</div>
<div className="col col--6 text--center">

![RFID / NFC Tags / CarID – Abbildung 8](/img/fahrer-rfid-nfc-tags-carid/08.jpg)

</div>
</div>