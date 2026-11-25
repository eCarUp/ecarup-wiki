---
title: 'RFID / NFC Tags / CarID'
slug: '/fahrer/rfid-nfc-tags-carid'
description: '⚠️ Important : eCarUp ne vend pas de tags RFID.'
sidebar_label: 'RFID / NFC Tags / CarID'
---
<Video src="Rhmi6IUkedY" title="Vidéo YouTube, associer un tag RFID à un compte eCarUp" />

⚠️ Important : eCarUp ne vend pas de tags RFID. Vous trouverez ici des informations importantes concernant l'achat d'un tag RFID : [LINK](/drittprodukte#porte-clés-rfid--nfc-tags-ntag215)

## Principe de fonctionnement :

![RFID / NFC Tags / CarID – Illustration 1](/img/fahrer-rfid-nfc-tags-carid/01.png)

\*CarID ne fonctionne actuellement qu'avec la [borne de recharge Pico](/smart-me-pico) de smart-me

![RFID / NFC Tags / CarID – Illustration 2](/img/fahrer-rfid-nfc-tags-carid/02.png)

![RFID / NFC Tags / CarID – Illustration 3](/img/fahrer-rfid-nfc-tags-carid/03.png)

### Important

- Les tags RFID sont installés sur les comptes conducteur, et non chez le propriétaire de la borne.

- Toutes les bornes ne disposent pas d'un lecteur RFID / NFC. Un tag RFID ne peut donc pas être utilisé sur toutes les bornes.

- [Tags RFID compatibles avec Pico (données techniques)](https://wiki.smart-me.com/produkte/pico-ladestation)

- Il est possible qu'un tag RFID puisse être lu dans eCarUp alors qu'il n'est pas pris en charge par la borne. Veillez avant tout à la compatibilité avec la borne.

- Un déverrouillage par cartes RFID ne satisfait en principe pas aux exigences de sécurité élevées d'eCarUp. Les cartes RFID peuvent être facilement copiées et falsifiées. L'ajout et l'utilisation de cartes RFID se font à vos propres risques.

- eCarUp n'émet pas de cartes RFID / NFC propres. L'ajout et la gestion des tags doivent être effectués par le conducteur lui-même.

- Les tags RFID ne peuvent être utilisés que pour le déverrouillage local des bornes de recharge eCarUp et ne fonctionnent pas pour les bornes de réseaux tiers (p. ex. Hubject).

- Dans le système eCarUp, le TagID de la carte RFID ne peut être attribué qu'une seule fois à un utilisateur. (Fonction de protection)

## Guide pour ajouter une carte RFID :

<div className="row">
<div className="col col--7">

### Guide pour l'application Android

Condition préalable : téléphone Android avec fonction NFC.

1\. Connectez-vous via l'application eCarUp Android au compte conducteur que vous souhaitez associer à un tag RFID/NFC. Cliquez dans le menu en bas sur Compte (Account), puis sur Cartes RFID (RFID Karten).

2\. Cliquez en haut à droite sur le symbole +, vous pouvez ensuite indiquer le nom et le Tag-ID (comme sur le Web).

3\. Si votre smartphone Android dispose d'une fonction NFC, vous pouvez lire directement le tag de la carte souhaitée. Pour cela, placez la carte contre l'arrière de l'appareil (là où se trouvent la plupart des lecteurs NFC).

Si vous saisissez le Tag-ID (UID) à la main, vous pouvez le déterminer en lisant le tag RFID souhaité. Cela peut se faire directement avec un lecteur RFID (p. ex. dans une entreprise) ou avec une application sur un téléphone mobile équipé d'un lecteur NFC. Un exemple est l'application gratuite [NFC-Tools](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc&hl=de_CH) (Apple bloque la lecture des numéros RFID / NFC).

4\. Votre Tag-ID est maintenant associé au compte et peut être utilisé pour le déverrouillage.

</div>
<div className="col col--5 text--center">

![RFID / NFC Tags / CarID – Illustration 4](/img/fahrer-rfid-nfc-tags-carid/04.png)

</div>
</div>

<div className="row">
<div className="col col--7">

### Guide pour l'application iOS

Condition préalable : iPhone avec fonction NFC (à partir d'iOS 14 & > iPhone 6).

(Apple ne prend cela en charge qu'à partir de la version iOS 13/14).

1\. Connectez-vous dans l'application eCarUp (iOS) au compte conducteur que vous souhaitez associer à un tag RFID/NFC. Cliquez dans le menu en bas sur Compte (Account), puis sur Cartes RFID (RFID Karten).

2\. Cliquez en haut à droite sur le symbole +, vous pouvez ensuite indiquer le nom et le Tag-ID (comme sur le Web).

3\. Si votre smartphone Apple dispose d'une fonction NFC (>iPhone 10), vous pouvez lire directement le tag de la carte souhaitée. Pour cela, placez la carte contre l'arrière de votre appareil (là où se trouvent la plupart des lecteurs NFC).

4\. Votre Tag-ID est maintenant associé au compte et peut être utilisé pour le déverrouillage.

</div>
<div className="col col--5 text--center">

![RFID / NFC Tags / CarID – Illustration 5](/img/fahrer-rfid-nfc-tags-carid/05.png)

</div>
</div>

Exemple de TagID :

- Important : il n'est pas nécessaire de saisir les deux-points.

- Attention : le SwissPass contient 2 tags RFID, eCarUp recommande de les enregistrer tous les deux.

![RFID / NFC Tags / CarID – Illustration 6](/img/fahrer-rfid-nfc-tags-carid/06.png)

### Remarque concernant l'Apple iPhone (iOS) :

Android reconnaît presque tous les types de puces. Apple restreint toutefois fortement l'interface NFC côté fabricant : les puces anciennes ou propriétaires (p. ex. Mifare Classic ou Legic), souvent utilisées sur les cartes de recharge, sont bloquées par iOS pour des raisons de sécurité. eCarUp n'a aucune influence à ce sujet.

Si votre iPhone ne reconnaît pas la carte :

- Saisie manuelle : saisissez simplement à la main le numéro de carte imprimé (UID, s'il est disponible) dans l'application eCarUp (sans espaces).

- Enregistrement via Android : connectez-vous une seule fois sur un appareil Android avec votre compte eCarUp et scannez-y la carte. Elle est ensuite immédiatement enregistrée dans votre compte.

![RFID / NFC Tags / CarID – Illustration 7](/img/fahrer-rfid-nfc-tags-carid/07.png)

## CarID :

La fonction Plug & Charge permet une authentification conviviale et sûre entre le véhicule électrique et une borne de recharge, rendant superflu le déverrouillage par application ou par carte RFID.

Après un enregistrement unique du véhicule avec l'application eCarUp, il suffit, à chaque session de recharge, que l'utilisateur branche le véhicule électrique. Le véhicule transmet automatiquement à la borne de recharge les données nécessaires à l'autorisation du paiement.

⚠️Important : actuellement, cette fonction ne fonctionne qu'avec la borne de recharge électrique [Pico](https://wiki.smart-me.com/produkte/pico-ladestation) de smart-me AG.

### Association avec le compte

<div className="row">
<div className="col col--6">

Condition de base : l'exploitant de la [Pico](/smart-me-pico) doit avoir activé la fonction sur la borne de recharge et la voiture doit être un véhicule électrique à batterie.

1.  Connectez votre véhicule à la Pico

2.  Attendez que la croix orange (X CAR-ID) apparaisse sur l'écran

3.  Une icône apparaît sur l'écran (personne avec un écusson)

4.  Vous pouvez ensuite démarrer la session de recharge comme d'habitude via l'application eCarUp

5.  Dès que c'est fait, une fenêtre pop-up d'eCarUp s'affiche et vous demande si vous souhaitez associer le Car-Id.

⚠️Important : il est important que vous supprimiez l'association du CarID avec votre compte dès que la voiture n'est plus en votre possession, par exemple après une vente.

⚠️Important : le Car-Id peut être identique sur plusieurs véhicules selon le constructeur automobile. Une recharge peut ainsi avoir lieu sur votre compte alors que ce n'est pas votre véhicule.

</div>
<div className="col col--6 text--center">

![RFID / NFC Tags / CarID – Illustration 8](/img/fahrer-rfid-nfc-tags-carid/08.jpg)

</div>
</div>
