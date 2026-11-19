---
title: 'Mennekes'
slug: '/ocpp-ladestationen/mennekes'
description: 'Guide d''intégration backend'
sidebar_label: 'Mennekes'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-mennekes/01.jpg" bildtext="Mennekes Professional" titel="Professional" href="https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-mennekes/02.jpg" bildtext="Mennekes Wallbox Premium" titel="Wallbox Premium" href="https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-mennekes/03.jpg" bildtext="Mennekes Amtron Professional" titel="Amtron Professional" href="https://www.mennekes.ch/emobility/produkte/portfolio/ladesaeulen/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-mennekes/04.png" bildtext="Mennekes Amtron 4Business/4You" titel="Amtron 4Business/4You" href="https://www.mennekes.ch/emobility/produkt-details/1347012405BK/#" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Mennekes peuvent être intégrées au système de décompte eCarUp en quelques étapes. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (tarifs, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel tarif. 

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes de recharge](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions Premium](/funktionen)

### Intégration des bornes de recharge OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stationen » (Stations).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne de recharge souhaitée et collez-y l'URL copiée.

## Amtron 4Business/4You

- version de firmware testée : 1.2.15

Intégrez la borne de recharge dans un réseau auquel vous pouvez accéder via l'adresse IP.  

<Embed src="https://demo.arcade.software/pn64vzJQpOAvqVOZLRlT?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.570" title="Wiki - Mennekes" />

1.  Activez le mode expert

2.  Dans les paramètres, cliquez sur Backend.

![Mennekes – Illustration 5](/img/ocpp-ladestationen-mennekes/05.png)

3\. Ajoutez votre URL eCarUp et redémarrez la borne de recharge. 

Exemple d'URL :

![Mennekes – Illustration 6](/img/ocpp-ladestationen-mennekes/06.png)

## Intégration de la borne Amedio Professional et de la wallbox Amtron Professional

### 1\. Relier l'ordinateur portable au contrôleur Bender par câble USB :

⚠️ Important : utilisez l'interface Micro-USB

![Mennekes – Illustration 7](/img/ocpp-ladestationen-mennekes/07.png)

### 2\. Ouvrir le navigateur sur l'ordinateur portable

Saisissez l'URL suivante : http://192.168.123.123/operator/

- Nom d'utilisateur par défaut : operator

- Mot de passe par défaut : yellow\_zone

### 3\. Vérifier la version du firmware :

<div className="row">
<div className="col col--8">

La version 4.00-2139 au minimum doit être installée.

Sous State -> Firmware Version, vous trouverez la version la plus récente.

Effectuer une mise à jour du firmware :

a) Copiez le fichier de firmware sur une clé USB. Insérez la clé USB.

b) Redémarrez le contrôleur Bender

</div>
<div className="col col--4 text--center">

![Mennekes – Illustration 8](/img/ocpp-ladestationen-mennekes/08.png)

</div>
</div>

### 4\. Configurer le Bender

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Exemple : ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

⚠️ Important : un « / » doit être ajouté après l'URL OCPP d'eCarUp (comme indiqué dans l'exemple). De plus, l'« ChargePoint ID (OCPP) » ne doit contenir aucun caractère spécial.

![Mennekes – Illustration 9](/img/ocpp-ladestationen-mennekes/09.png)

## Intégration des ACU V3 et V4

### Intégration des contrôleurs ACU

Se connecter à la borne de recharge par Ethernet

1.  L'ordinateur portable doit avoir l'IP suivante : 192.168.0.21 et le masque de sous-réseau : 255.255.255.0.

2.  Ouvrez le navigateur de votre ordinateur portable et saisissez l'URL suivante dans la barre d'adresse : 192.168.0.10

3.  Le nom d'utilisateur et le mot de passe sont « admin »

![Mennekes – Illustration 10](/img/ocpp-ladestationen-mennekes/10.png)

### Mises à jour du logiciel et guide Mennekes :

Le logiciel, guide inclus, peut être téléchargé sur la page [Mises à jour logicielles de Mennekes](https://www.chargeupyourday.de/services/software-updates/).

## Interface web de Mennekes

1.  Vérification du firmware actuel

2.  S'il n'est pas à jour, veuillez mettre à jour l'ACU. La version actuelle du logiciel, guide inclus, se trouve sur la [page de mises à jour logicielles de Mennekes](https://www.chargeupyourday.de/services/software-updates/).

3.  Sélectionnez le protocole de transmission v1.6J

4.  Collez l'URL OCPP de votre compte et OCPP 1.6 

ws://www.ecarup.com/api/Ocpp16/(Ihre ID)/

N'oubliez pas la barre oblique à la fin. ! 

Respectez les paramètres

![Mennekes – Illustration 11](/img/ocpp-ladestationen-mennekes/11.png)

![Mennekes – Illustration 12](/img/ocpp-ladestationen-mennekes/12.png)

![Mennekes – Illustration 13](/img/ocpp-ladestationen-mennekes/13.png)

![Mennekes – Illustration 14](/img/ocpp-ladestationen-mennekes/14.png)

## Téléchargements

Softwareupdate-ACU-v3-v4\_v03\_30-09-2019\_de.pdf

## Paramètre avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle de téléversement des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon de mieux calculer et afficher la puissance de charge actuelle dans l'app. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Mennekes – Illustration 16](/img/ocpp-ladestationen-mennekes/15.png)

![Mennekes – Illustration 16](/img/ocpp-ladestationen-mennekes/16.png)
