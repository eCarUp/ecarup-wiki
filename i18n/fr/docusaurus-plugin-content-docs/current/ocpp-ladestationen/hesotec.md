---
title: 'Hesotec'
slug: '/ocpp-ladestationen/hesotec'
description: 'Guide d''intégration du backend'
sidebar_label: 'Hesotec'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-hesotec/01.jpg" bildtext="Hesotec eBox wr30" titel="eBox wr30" href="https://electrify.hesotec.de/produkte/ebox-wr30" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-hesotec/02.jpg" bildtext="Hesotec eBox sr10" titel="eBox sr10" href="https://electrify.hesotec.de/produkte/ebox-wr30" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-hesotec/03.jpg" bildtext="Hesotec eSat r10/r20" titel="eSat r10/r20" href="https://electrify.hesotec.de/produkte/ebox-wr30" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration du backend

Les bornes de recharge Hesotec peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Bornes de recharge » (« Stationen »).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration de la borne de recharge Hesotec

- Téléchargez l'application « electrify charge control » de la société Hesotec dans votre App Store

- Dans l'application, cliquez sur le + pour connecter la borne souhaitée

- La connexion peut être configurée via le hotspot ou via l'eLMS de Hesotec

- Sélectionnez votre modèle et donnez un nom à la borne

- Connectez ensuite le téléphone au hotspot de la borne de recharge

- Vous trouverez toutes les informations sur le hotspot (SSID\_EBOX\_XXX, mot de passe inclus) dans l'enveloppe fournie.

- Lorsque la borne s'est connectée avec succès, elle apparaît dans l'application.

## Play Store

![Hesotec – Illustration 4](/img/ocpp-ladestationen-hesotec/04.png)

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Illustration 5](/img/ocpp-ladestationen-hesotec/05.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Illustration 6](/img/ocpp-ladestationen-hesotec/06.jpg)

</div>
</div>

- Dans l'application, cliquez en haut à droite sur les 3 points

- Les « Paramètres avancés » (« Erweiterte Einstellungen ») et « Technicien » (« Techniker ») doivent être activés

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Illustration 7](/img/ocpp-ladestationen-hesotec/07.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Illustration 8](/img/ocpp-ladestationen-hesotec/08.jpg)

</div>
</div>

- Sélectionnez « Paramètres généraux » (« Allgemeine Einstellungen »)

- Réglez l'autorisation sur RFID/application et

- Activez « Terminer avec RFID » (« Beenden mit RFID »)

- Enregistrez et retournez aux paramètres

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Illustration 9](/img/ocpp-ladestationen-hesotec/09.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Illustration 10](/img/ocpp-ladestationen-hesotec/10.jpg)

</div>
</div>

<div className="row">
<div className="col col--6">

- Ouvrez les « Paramètres avancés » (« Erweiterte Einstellungen »)

- Sous Backend OCPP, saisissez l'URL eCarUp de votre portail web

- Exemple : ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxx/15023910 (numéro de série de la borne)

- Réglez le mode sur OCPP

</div>
<div className="col col--6 text--center">

![Hesotec – Illustration 11](/img/ocpp-ladestationen-hesotec/11.png)

</div>
</div>

- Important : dans l'URL, après le /, indiquez le numéro de série de votre borne !

- Redémarrez ensuite la borne

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de téléversement des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. Ce n'est qu'ainsi que nous pouvons mieux calculer et afficher la puissance de charge actuelle dans l'application.

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Hesotec – Illustration 13](/img/ocpp-ladestationen-hesotec/12.png)

![Hesotec – Illustration 13](/img/ocpp-ladestationen-hesotec/13.png)
