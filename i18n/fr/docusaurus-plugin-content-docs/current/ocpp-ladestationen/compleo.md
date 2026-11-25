---
title: 'Compleo'
slug: '/ocpp-ladestationen/compleo'
description: 'Guide d''intégration backend'
sidebar_label: 'Compleo'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-compleo/01.png" bildtext="Compleo SOLO" titel="SOLO" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-compleo/02.jpg" bildtext="Compleo eBOX" titel="eBOX" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-compleo/03.jpg" bildtext="Compleo DUO" titel="DUO" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-compleo/04.jpg" bildtext="Compleo CITO 500" titel="CITO 500" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-compleo/05.jpg" bildtext="Compleo CITO 240" titel="CITO 240" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Compleo peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même, simplement, les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en davantage sur nos [fonctions Premium](/funktionen)


### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stationen ».

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Rendez-vous sur l'interface web de la borne souhaitée et collez-y l'URL copiée.


## Intégration des bornes de recharge Compleo

### Remarque

- Un terminal de carte de crédit peut être exploité en parallèle avec eCarUp afin de garantir une flexibilité maximale. Pour de plus amples informations, Compleo se tient volontiers à votre disposition. Cela ne concerne ici que le matériel DC !


### Compleo SOLO

Guide vidéo : [https://www.youtube.com/watch?v=Aa3artQXC6w](https://www.youtube.com/watch?v=Aa3artQXC6w)

### Compleo eBOX

Pour l'intégration de la Compleo eBOX, vous avez besoin de l'application Compleo eConfig. 

Il est également important que la version de firmware 1.1 soit installée sur la box pour la connexion OCPP. 

## Aperçu :

![Compleo – Figure 6](/img/ocpp-ladestationen-compleo/06.png)

## Étape 1 :

![Compleo – Figure 7](/img/ocpp-ladestationen-compleo/07.png)

## Étape 2 :

![Compleo – Figure 8](/img/ocpp-ladestationen-compleo/08.png)

## Étape 3 :

![Compleo – Figure 9](/img/ocpp-ladestationen-compleo/09.png)

## Étape 4 :

![Compleo – Figure 10](/img/ocpp-ladestationen-compleo/10.png)

## Étape 5, y compris redémarrage :

![Compleo – Figure 11](/img/ocpp-ladestationen-compleo/11.png)

Important : si la borne ne fonctionne pas correctement avec eCarUp après une intégration réussie, veuillez vérifier les points suivants via l'interface web de la wallbox :

- Authentification sur MIT

- Remote doit être activé


La manière d'accéder à l'interface web devrait être décrite dans le guide fourni. 

![Compleo – Figure 12](/img/ocpp-ladestationen-compleo/12.png)

### Compleo DUO, CITO 500 & CITO 240

Pour l'intégration d'autres bornes Compleo à eCarUp, vous avez besoin du support de la société [Compleo Charging Solutions AG Schweiz](https://www.compleo-charging.ch/kontakt) . Elle se charge de la configuration et associe votre point de recharge au compte eCarUp via l'URL OCPP que vous avez reçue lors de la préparation.

![Compleo – Figure 13](/img/ocpp-ladestationen-compleo/13.png)

### Important

Pour chaque borne de recharge Compleo, le paramètre suivant doit être réglé sur « true ».

![Compleo – Figure 14](/img/ocpp-ladestationen-compleo/14.png)

Cela peut être fait au moyen de notre outil de maintenance (eCarUp Premium) ou bien le réglage s'effectue côté borne. 

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de téléversement des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule manière de calculer et d'afficher plus précisément la puissance de charge actuelle dans l'application. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Compleo – Figure 15](/img/ocpp-ladestationen-compleo/15.png)

![Compleo – Figure 16](/img/ocpp-ladestationen-compleo/16.png)
