---
title: 'EVTEC'
slug: '/ocpp-ladestationen/evtec'
description: 'Guide d''intégration du backend'
sidebar_label: 'EVTEC'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-evtec/01.jpg" bildtext="EVTEC Cappuccino & Charge" titel="Cappuccino & Charge" href="https://www.evtec.ch/geraete" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-evtec/02.jpg" bildtext="EVTEC Coffee & Charge" titel="Coffee & Charge" href="https://www.evtec.ch/geraete" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-evtec/03.png" bildtext="EVTEC Espresso & Charge" titel="Espresso & Charge" href="https://www.evtec.ch/geraete" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration du backend

Les bornes de recharge EVTEC peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir très simplement vous-même les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Condition préalable à l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions premium](/funktionen)

### Intégration de bornes OCPP

Informations générales sur la [mise en service d'une borne OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

1.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

2.  Dans le menu à gauche, cliquez sur l'onglet « Stations » (« Stationen »).

3.  Sélectionnez l'onglet « OCPP ».

4.  Copiez l'URL dans le presse-papiers.

    1.  Lien ws sans Basic Auth : testé et fonctionnel

    2.  wss sans Basic Auth : non testé

    3.  wss avec Basic Auth : non testé

5.  Allez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration dans le portail eCarUp

## Remarque

<div className="row">
<div className="col col--8">

- Un terminal de carte de crédit peut être exploité en parallèle à eCarUp afin de garantir une flexibilité maximale. Pour de plus amples informations, EVTEC se tient volontiers à votre disposition.

1.  Adaptez les paramètres IP de la borne EVTEC au réseau IP de l'administrateur des bornes (sur l'appareil).

2.  Connectez-vous à la borne EVTEC avec un PC du même réseau (via l'adresse IP définie ci-dessus). Voir la capture d'écran avec l'exemple 192.168.10.20. Appuyez ensuite sur le bouton « Config ».

Pour toute question concernant la connexion de la borne (quelle IP a ma borne, nom d'utilisateur et mot de passe), adressez-vous à eCarUp ou directement à EVTEC.

</div>
<div className="col col--4 text--center">

![EVTEC – Illustration 4](/img/ocpp-ladestationen-evtec/04.png)

</div>
</div>

3\. Sélectionnez l'entrée de menu OCPP.

![EVTEC – Illustration 5](/img/ocpp-ladestationen-evtec/05.png)

4\. Effectuez les réglages comme sur la capture d'écran ci-dessous. Sélectionnez ensuite Connection Parameters.

Important : régler idTagConversion sur HexZero...

![EVTEC – Illustration 6](/img/ocpp-ladestationen-evtec/06.jpg)

5\. Effectuez les réglages comme sur la capture d'écran ci-dessous.

⚠️ IMPORTANT : dans le champ « CsAddress », saisissez le bon chemin pour le compte eCarUp souhaité.

![EVTEC – Illustration 7](/img/ocpp-ladestationen-evtec/07.png)

<div className="row">
<div className="col col--8">

6\. Le chemin du compte eCarUp peut être déterminé comme suit.

a) Connectez-vous sur www.ecarup.com avec le compte souhaité.

b) Sélectionnez l'onglet « OCPP URL ».

c) Copiez le lien et saisissez-le dans le champ « CsAddress » de l'interface EVTEC.

7\. Pour terminer, revenez au menu du point 4 de ce guide avec le bouton « back ». Sélectionnez ensuite « ConfigurationParameters ».

8\. Après avoir sélectionné « ConfigurationParameters », effectuez les réglages de la borne EVTEC selon vos propres besoins (exemple sur la capture d'écran).

</div>
<div className="col col--4 text--center">

![EVTEC – Illustration 8](/img/ocpp-ladestationen-evtec/08.png)

</div>
</div>

9. Attribuez à MeterValuesSampledData la valeur Energy.Active.Import.Register,Power.Active.Import afin que la puissance de charge en direct soit affichée.

10. Pour terminer, revenez avec le bouton « back » au menu du point 4, puis une nouvelle fois avec le bouton « back » au menu du point 3 de ce guide. Sélectionnez ensuite « Authentication ».

![EVTEC – Illustration 9](/img/ocpp-ladestationen-evtec/09.png)

<div className="row">
<div className="col col--8">

11\. Après avoir sélectionné « Authentification », réglez l'entrée de menu « ChargeAuthentification » sur OCPP. Laissez les autres entrées de menu inchangées.

</div>
<div className="col col--4 text--center">

![EVTEC – Illustration 10](/img/ocpp-ladestationen-evtec/10.png)

</div>
</div>

12\. La borne EVTEC a maintenant été créée dans le compte eCarUp défini par l'URL. Elle peut désormais être configurée selon le processus standard dans l'app eCarUp et la connexion web, en fonction de vos besoins individuels (emplacement, prix, images, etc.).

⚠️ ATTENTION : tenez compte des connecteurs multiples !

## Réglage avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon de mieux calculer et afficher la puissance de charge actuelle dans l'app.

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![EVTEC – Illustration 11](/img/ocpp-ladestationen-evtec/11.png)

![EVTEC – Illustration 12](/img/ocpp-ladestationen-evtec/12.png)
