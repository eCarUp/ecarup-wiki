---
title: 'GL Charge'
slug: '/ocpp-ladestationen/gl-charge'
description: 'Guide d''intégration backend'
sidebar_label: 'GL Charge'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-gl-charge/01.png" bildtext="GL Charge LiteBox" titel="LiteBox" href="https://iskraemeco-emobility.com/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-gl-charge/02.png" bildtext="GL Charge Public Box" titel="Public Box" href="https://iskraemeco-emobility.com/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-gl-charge/03.png" bildtext="GL Charge Platinum" titel="Platinum" href="https://iskraemeco-emobility.com/" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge GL Charge peuvent être intégrées au système de décompte eCarUp en quelques étapes. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal) 

- En savoir plus sur nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stationen » (Stations).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## LiteBox

Version du firmware : A0-GL-V2.0.5-b4 

- Installez l'application CP Tool

- Version testée de l'application : V. 1.12.2

![GL Charge – Illustration 4](/img/ocpp-ladestationen-gl-charge/04.png)

### Étape 1

<div className="row">
<div className="col col--6">

- Dans CP Tool, rechercher la borne de recharge et la sélectionner.

- Saisir le mot de passe (par défaut : 12345678)

- Cliquer sur Enter

</div>
<div className="col col--6 text--center">

![GL Charge – Illustration 5](/img/ocpp-ladestationen-gl-charge/05.png)

</div>
</div>

### Étape 2

- Établir la connexion souhaitée à Internet

![GL Charge – Illustration 6](/img/ocpp-ladestationen-gl-charge/06.png)

### Étape 3

<div className="row">
<div className="col col--6">

- Server URL : Manual Entry

- URL issue de votre compte eCarUp

- Charger ID : peut être défini librement

</div>
<div className="col col--6 text--center">

![GL Charge – Illustration 7](/img/ocpp-ladestationen-gl-charge/07.png)

</div>
</div>

### Étape 4

<div className="row">
<div className="col col--6">

- Pour finir, cliquer sur Set.

- Redémarrer la borne.

- La borne devrait maintenant communiquer avec votre compte.

</div>
<div className="col col--6 text--center">

![GL Charge – Illustration 8](/img/ocpp-ladestationen-gl-charge/08.png)

</div>
</div>

## PublicBox & GlowBox Platinum

Version du firmware : 0.20/6,1.8,2.8  

### Intégration

Avant de pouvoir configurer la borne de recharge, vous devez avoir accès à l'interface web. 

1.  Connectez un PC à la borne via Ethernet. 

2.  Réglez localement l'adresse suivante sur votre interface :

- IP Address : 192.168.1.3

- Subnet Mask : 255.255.255.0

3.  Ouvrez le navigateur et saisissez l'URL suivante : http://192.168.1.2. 

4.  Connectez-vous à l'interface web comme suit :

- Username : installer

- Mot de passe : installer

![GL Charge – Illustration 9](/img/ocpp-ladestationen-gl-charge/09.png)

### Configuration OCPP

1.  Naviguez vers les OCPP Settings

2.  Dans OCPP Host, saisissez votre URL eCarUp :

Exemple : ws://[www.ecarup.com/api/Ocpp16/xxxxxxxxxx](http://www.ecarup.com/api/Ocpp16/xxxxxxxxxx)/Seriennummer

⚠️Important : n'oubliez pas d'ajouter / + numéro de série après l'URL. 

3.  Cliquez sur Apply et la borne redémarre. 

![GL Charge – Illustration 10](/img/ocpp-ladestationen-gl-charge/10.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de téléversement des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon de mieux calculer et afficher la puissance de charge actuelle dans l'application. 

Vous pouvez la modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![GL Charge – Illustration 12](/img/ocpp-ladestationen-gl-charge/11.png)

![GL Charge – Illustration 12](/img/ocpp-ladestationen-gl-charge/12.png)
