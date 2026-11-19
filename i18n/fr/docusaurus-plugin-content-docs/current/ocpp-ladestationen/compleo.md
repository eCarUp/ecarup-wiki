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

Les bornes Compleo peuvent être intégrées au système de décompte eCarUp en quelques étapes. Une fois installées dans ton compte, tu peux définir toi-même, en toute simplicité, les conditions d'utilisation de tes bornes (prix, utilisateurs, plages horaires disponibles, etc.). Tu décides qui peut recharger, quand et à quel prix. 

- Condition préalable : [l'intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvre ici plus de détails sur nos [fonctions Premium](/funktionen)


### Intégration de bornes OCPP

1.  Assure-toi que tes bornes de recharge sont installées et que ton PC ou ton téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvre le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connecte-toi avec les données de ton compte.

3.  Clique dans le menu, à gauche, sur l'onglet « Stationen » (Stationen).

4.  Sélectionne l'onglet « OCPP » (OCPP).

5.  Copie l'URL dans le presse-papiers.

6.  Va dans l'interface web de la borne souhaitée et colle l'URL copiée.


## Intégration des bornes de recharge Compleo

### Remarque

- Un terminal de carte de crédit peut être exploité parallèlement à eCarUp afin de garantir une flexibilité maximale. Pour plus d'informations, Compleo se tient volontiers à ta disposition. Cela ne concerne ici que le matériel DC !


### Compleo SOLO

Guide vidéo : [https://www.youtube.com/watch?v=Aa3artQXC6w](https://www.youtube.com/watch?v=Aa3artQXC6w)

### Compleo eBOX

Pour l'intégration de la Compleo eBOX, tu as besoin de l'application Compleo eConfig. 

Il est également important que la version de firmware 1.1 soit installée sur la box pour la connexion OCPP. 

## Aperçu :

![Compleo – Illustration 6](/img/ocpp-ladestationen-compleo/06.png)

## Étape 1 :

![Compleo – Illustration 7](/img/ocpp-ladestationen-compleo/07.png)

## Étape 2 :

![Compleo – Illustration 8](/img/ocpp-ladestationen-compleo/08.png)

## Étape 3 :

![Compleo – Illustration 9](/img/ocpp-ladestationen-compleo/09.png)

## Étape 4 :

![Compleo – Illustration 10](/img/ocpp-ladestationen-compleo/10.png)

## Étape 5 avec redémarrage :

![Compleo – Illustration 11](/img/ocpp-ladestationen-compleo/11.png)

Important : si la borne ne fonctionne pas correctement avec eCarUp après une implémentation réussie, vérifie ce qui suit via l'interface web de la wallbox :

- Authentification sur MIT

- Remote doit être activé


La manière d'accéder à l'interface web devrait être décrite dans le guide fourni. 

![Compleo – Illustration 12](/img/ocpp-ladestationen-compleo/12.png)

### Compleo DUO, CITO 500 & CITO 240

Pour l'intégration d'autres bornes Compleo à eCarUp, tu as besoin du support de la société [Compleo Charging Solutions AG Schweiz](https://www.compleo-charging.ch/kontakt) . Elle se charge de la configuration et attribue ton point de recharge au compte eCarUp au moyen de l'URL OCPP que tu as reçue lors de la préparation.

![Compleo – Illustration 13](/img/ocpp-ladestationen-compleo/13.png)

### Important

Pour chaque borne de recharge Compleo, le paramètre suivant doit être réglé sur « true ».

![Compleo – Illustration 14](/img/ocpp-ladestationen-compleo/14.png)

Cela peut être fait au moyen de notre outil de maintenance (eCarUp Premium) ou alors le réglage s'effectue côté borne. 

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule manière pour nous de calculer et d'afficher plus précisément la puissance de charge actuelle dans l'application. 



Tu peux le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Compleo – Illustration 15](/img/ocpp-ladestationen-compleo/15.png)

![Compleo – Illustration 16](/img/ocpp-ladestationen-compleo/16.png)
