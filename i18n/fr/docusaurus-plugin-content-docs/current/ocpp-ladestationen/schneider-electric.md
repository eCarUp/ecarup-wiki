---
title: 'Schneider Electric'
slug: '/ocpp-ladestationen/schneider-electric'
description: 'Guide d''intégration backend'
sidebar_label: 'Schneider Electric'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-schneider-electric/01.jpg" bildtext="Schneider Electric EVlink Pro AC" titel="EVlink Pro AC" href="/ocpp-ladestationen/schneider-electric" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-schneider-electric/02.jpg" bildtext="Schneider Electric EVlink Pro DC" titel="EVlink Pro DC" href="/ocpp-ladestationen/schneider-electric" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Schneider Electric peuvent être intégrées au système de décompte eCarUp en quelques étapes. Une fois installées dans votre compte, vous pouvez définir vous-même, en toute simplicité, les conditions d'utilisation de vos bornes (tarifs, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel tarif. 

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Apprenez-en davantage sur nos [fonctions premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stationen » (Stations).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Rendez-vous sur l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration des bornes de recharge Schneider Electric

### EVlink Pro AC

### Intégration de l'EVlink AC Pro

Pour pouvoir accéder à la borne via smartphone, les étapes suivantes sont nécessaires :

- Installez sur votre téléphone portable l'application « eSetup » de Schneider Electric ;

- Créez-y un compte utilisateur.

![Schneider Electric – Illustration 3](/img/ocpp-ladestationen-schneider-electric/03.png)

### Étape 1

- Sélectionner EVlink Pro AC

![Schneider Electric – Illustration 4](/img/ocpp-ladestationen-schneider-electric/04.jpg)

### Étape 2

- La recherche démarre

![Schneider Electric – Illustration 5](/img/ocpp-ladestationen-schneider-electric/05.jpg)

### Étape 3

- Sélectionner la borne de recharge

![Schneider Electric – Illustration 6](/img/ocpp-ladestationen-schneider-electric/06.jpg)

### Étape 4

<div className="row">
<div className="col col--6">

- Saisir le code PIN (attribué lors de l'enregistrement)

</div>
<div className="col col--6 text--center">

![Schneider Electric – Illustration 7](/img/ocpp-ladestationen-schneider-electric/07.jpg)

</div>
</div>

### Étape 5

- Sélectionner Configuration

![Schneider Electric – Illustration 8](/img/ocpp-ladestationen-schneider-electric/08.jpg)

### Étape 6

- Sélectionner la supervision pour le paramètre OCPP

![Schneider Electric – Illustration 9](/img/ocpp-ladestationen-schneider-electric/09.png)

### Étape 7

![Schneider Electric – Illustration 10](/img/ocpp-ladestationen-schneider-electric/10.jpg)

- Supervision sur ON

- Insérer normalement l'URL OCPP depuis votre compte

Exemple : ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

- Sélectionner Authentification requise (Public)

### Étape 8

- Effectuer les paramètres réseau

![Schneider Electric – Illustration 11](/img/ocpp-ladestationen-schneider-electric/11.png)

### Étape 9 (facultatif)

- Définir le mode hors ligne

![Schneider Electric – Illustration 12](/img/ocpp-ladestationen-schneider-electric/12.jpg)

### Étape 10

- Enregistrer les paramètres et redémarrer la borne. 

## EVlink Pro DC

Vous souhaitez intégrer la borne de recharge DC de Schneider à eCarUp ?

- Envoyez votre URL OCPP à l'adresse e-mail suivante de Schneider : [services@ch.schneider-electric.com](mailto:services@ch.schneider-electric.com)

- Schneider Electric vous contactera rapidement. 

## EVlink Smart Wallbox & EVlink Parking

### Intégration de l'EVlink Smart Wallbox

Se connecter à la borne via Ethernet

1.  Attribuer à votre PC l'adresse IP statique suivante : 192.168.0.x (x est un nombre entier compris entre 241 et 249)

2.  Masque de sous-réseau : 255.255.255.0 + pas de passerelle par défaut, pas de DNS et pas de proxy

3.  Ouvrez votre navigateur web et saisissez http://192.168.0.102 dans la barre d'adresse.

4.  Nom d'utilisateur ( admin ) , mot de passe ( ADMIN ) 

## Interface web

### General Settings

1.  Charging Station Name : supprimer tous les espaces

2.  Station type sur Supervised

3.  Authentication done by Supervision 

![Schneider Electric – Illustration 13](/img/ocpp-ladestationen-schneider-electric/13.png)

### Supervision

1.  Régler OCPP Version sur 1.6

2.  Supervision URL : insérer l'URL de votre compte en entier

3.  Renommer Charging station ID + sans espaces. 

Pour terminer, redémarrer la borne !

![Schneider Electric – Illustration 14](/img/ocpp-ladestationen-schneider-electric/14.png)

### Système de gestion de la charge EVlink

Se connecter au LMS via Ethernet ETH1

1.  Attribuer à votre PC l'adresse IP statique suivante : 192.168.0.x (x est un nombre entier compris entre 241 et 249)

2.  Masque de sous-réseau : 255.255.255.0 + pas de passerelle par défaut, pas de DNS et pas de proxy

3.  Ouvrez votre navigateur web et saisissez http://192.168.0.128 dans la barre d'adresse.

4.  Nom d'utilisateur ( admin ) , mot de passe ( ADMIN ) 

### Remote Supervision

1.  Enable sur « ON »

2.  Remote supervision URL address : insérer l'URL eCarUp de votre compte en entier.

![Schneider Electric – Illustration 15](/img/ocpp-ladestationen-schneider-electric/15.png)

### Paramètres avancés

- Admin --> Avancé\--> Paramètres avancés  --> Activer la numérotation des points de recharge \--> ON

⚠️ Attention : n'activer cette fonction que pour les bornes à 2 connecteurs. 

![Schneider Electric – Illustration 16](/img/ocpp-ladestationen-schneider-electric/16.png)

### Charging Stations

1.  Il faut impérativement créer une zone dans laquelle la borne peut être ajoutée. 

2.  Renommer impérativement la Box Identity

![Schneider Electric – Illustration 17](/img/ocpp-ladestationen-schneider-electric/17.png)

### Contrôle final

1.  La borne devrait maintenant recevoir l'URL de supervision du LMS 

2.  L'ID de la borne de recharge devrait être identique

![Schneider Electric – Illustration 18](/img/ocpp-ladestationen-schneider-electric/18.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de téléversement des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon de mieux calculer et afficher la puissance de charge actuelle dans l'application. 

Vous pouvez la modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Schneider Electric – Illustration 19](/img/ocpp-ladestationen-schneider-electric/19.png)

![Schneider Electric – Illustration 20](/img/ocpp-ladestationen-schneider-electric/20.png)
