---
title: 'NEXBLUE'
slug: '/ocpp-ladestationen/nexblue'
description: 'Guide d''intégration du backend'
sidebar_label: 'NEXBLUE'
---
## Guide d'intégration du backend

Les bornes de recharge NEXBLUE peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans ton compte, tu peux définir simplement toi-même les conditions d'utilisation de tes bornes (prix, utilisateurs, plages horaires disponibles, etc.). C'est toi qui décides qui peut recharger, quand et à quel prix.

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvre ici davantage de détails sur nos [fonctions premium](/funktionen)


<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-nexblue/01.png" bildtext="NEXBLUE" titel="NEXBLUE" href="https://nexblue.com/de" bildhoehe="10rem" mittig />

</Kacheln>

### Intégration de bornes OCPP

1.  Assure-toi que tes bornes de recharge sont installées et que ton PC ou ton téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvre le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connecte-toi avec les données de ton compte.

3.  Dans le menu à gauche, clique sur l'onglet « Stationen ».

4.  Sélectionne l'onglet « OCPP ».


 1. Lien ws sans Basic Auth : testé et fonctionnel

2\. wss sans Basic Auth : testé et fonctionnel

3\. wss avec Basic Auth : testé et fonctionnel

5.  Copie l'URL dans le presse-papiers.

6.  Rends-toi sur l'interface web de la borne souhaitée et colle l'URL copiée.


## Intégration de la NEXBLUE

- version de firmware testée : `"firmwareVersion":"03.07.36"` 


Intégration via le portail web

<Embed src="https://demo.arcade.software/ZMABeR5jjEkvl6uWrWsV?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.705" title="Wiki - NEXBLUE" />

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon de mieux calculer et afficher la puissance de recharge actuelle dans l'app.



Tu peux le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![NEXBLUE – Illustration 2](/img/ocpp-ladestationen-nexblue/02.png)

![NEXBLUE – Illustration 3](/img/ocpp-ladestationen-nexblue/03.png)
