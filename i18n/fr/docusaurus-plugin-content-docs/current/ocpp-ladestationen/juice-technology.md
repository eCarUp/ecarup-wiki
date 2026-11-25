---
title: 'Juice Technology'
slug: '/ocpp-ladestationen/juice-technology'
description: 'Guide d''intégration backend'
sidebar_label: 'Juice Technology'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-juice-technology/01.jpg" bildtext="Juice Technology Charger me 3" titel="Charger me 3" href="https://juice.world/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-juice-technology/02.jpg" bildtext="Juice Technology Charger 2" titel="Charger 2" href="https://juice.world/" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Juice peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (tarifs, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel tarif.

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions premium](/funktionen)


### Intégration de bornes de recharge OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stationen » (Stationen).

4.  Sélectionnez l'onglet « OCPP » (OCPP).

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne de recharge souhaitée et collez-y l'URL copiée.


## Intégration des bornes de recharge Juice

<Video src="nj_x0WNQhNk" title="Vidéo YouTube, guide d'intégration « Juice Technology dans le backend eCarUp »" />

Guide vidéo : intégration de Juice Technology dans le backend eCarUp

## Juice Charger me 3

### Installation

Accéder à la borne de recharge (statique) :

1\. Dès que vous êtes connecté à la borne de recharge (attention, le PC doit se trouver dans la même plage IP), ouvrez votre navigateur préféré et saisissez l'adresse IP suivante : 192.168.123.123/

2\. Connexion : les données de connexion figurent dans le guide fourni.

Standard :

Username: operator

PW: JuiCeMeUP!

3\. Configurez ensuite le Juice Charger me 3 selon vos souhaits.



Accéder à la borne de recharge (dynamique) :

1.  Branchez le câble réseau au routeur et repérez l'adresse IP dans le répertoire du routeur.

2.   Connexion : les données de connexion figurent dans le guide fourni.


Standard :

Username: operator

PW: JuiCeMeUP!

3.   Configurez ensuite le Juice Charger me 3 selon vos souhaits.




### Paramètres OCPP :

![Juice Technology – Illustration 3](/img/ocpp-ladestationen-juice-technology/03.png)

1.  Sélectionnez le type de connexion (WLAN, LAN, etc.).

2.  Ajoutez l'URL eCarUp de votre compte.


Exemple : ws://www.ecarup.com/api/OCPP16/wgwepog4980h4ho

![Juice Technology – Illustration 4](/img/ocpp-ladestationen-juice-technology/04.png)

\+ régler le Meter Value Sample Interval sur 60 secondes au maximum.

### Paramètres d'autorisation

![Juice Technology – Illustration 5](/img/ocpp-ladestationen-juice-technology/05.png)

- Désactiver la recharge gratuite

- Désactiver la liste blanche locale


Enregistrer tous les paramètres et redémarrer la borne de recharge.

## Juice Charger 2

### Installation

Accéder à la borne de recharge :

1\. Dès que vous êtes connecté à la borne de recharge, ouvrez votre navigateur préféré et saisissez l'adresse IP suivante : 192.168.4.1:1234

2\. Connexion : saisissez sur cette page le mot de passe par défaut 1234567890.

3\. Configurez ensuite le Juice Charger 2 selon vos souhaits.

![Juice Technology – Illustration 6](/img/ocpp-ladestationen-juice-technology/06.png)

### Intégration OCPP

⚠️ Important : l'URL générée à partir du compte eCarUp doit être décomposée selon l'exemple suivant.

1.  ws:// doit être omis ; le chemin de l'hôte (Hostpath) et le domaine doivent être saisis séparément / de manière distincte.

2.  (\*\*\*\* doit être remplacé par p. ex. F749E....)

3.  La Chargebox ID ne doit pas contenir d'espaces

4.  Enregistrer la configuration

5.  La borne de recharge redémarre.


![Juice Technology – Illustration 7](/img/ocpp-ladestationen-juice-technology/07.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne de recharge à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon de mieux calculer et afficher la puissance de recharge actuelle dans l'app.

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Juice Technology – Abbildung 8](/img/ocpp-ladestationen-juice-technology/08.png)

![Juice Technology – Abbildung 9](/img/ocpp-ladestationen-juice-technology/09.png)
