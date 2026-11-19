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

Les bornes de recharge Juice peuvent être intégrées au système de décompte eCarUp en quelques étapes. Une fois installées dans ton compte, tu peux définir toi-même, simplement, les conditions d'utilisation de tes bornes (prix, utilisateurs, plages horaires disponibles, etc.). Tu décides qui peut recharger, quand et à quel prix. 

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Apprends-en plus ici sur nos [fonctions Premium](/funktionen)


### Intégration de bornes OCPP

1.  Assure-toi que tes bornes de recharge sont installées et que ton PC ou ton téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvre le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connecte-toi avec les données de ton compte.

3.  Dans le menu à gauche, clique sur l'onglet « Stationen » (Stations).

4.  Sélectionne l'onglet « OCPP ».

5.  Copie l'URL dans le presse-papiers.

6.  Va dans l'interface web de la borne souhaitée et colle l'URL copiée.


## Intégration des bornes de recharge Juice

<Video src="nj_x0WNQhNk" title="Vidéo YouTube, guide d'intégration « Juice Technology dans le backend eCarUp »" />

Guide vidéo : intégration de Juice Technology dans le backend eCarUp

## Juice Charger me 3

### Installation

Accéder à la borne (statique) :

1\. Dès que tu es connecté à la borne (attention, le PC doit se trouver dans la même plage IP), ouvre ton navigateur préféré et saisis l'adresse IP suivante : 192.168.123.123/

2\. Connexion : tu trouveras les données de connexion dans le guide fourni.

Standard : 

Username: operator

PW: JuiCeMeUP!

3\. Configure ensuite le Juice Charger me 3 selon tes souhaits. 



Accéder à la borne (dynamique) :

1.  Branche le câble réseau au routeur et repère l'adresse IP dans le répertoire du routeur. 

2.   Connexion : tu trouveras les données de connexion dans le guide fourni.


Standard : 

Username: operator

PW: JuiCeMeUP!

3.   Configure ensuite le Juice Charger me 3 selon tes souhaits. 




### Paramètres OCPP :

![Juice Technology – Illustration 3](/img/ocpp-ladestationen-juice-technology/03.png)

1.  Sélectionner le type de connexion (WLAN, LAN, etc.)

2.  Ajouter l'URL eCarUp issue de ton compte. 


Exemple : ws://www.ecarup.com/api/OCPP16/wgwepog4980h4ho

![Juice Technology – Illustration 4](/img/ocpp-ladestationen-juice-technology/04.png)

\+ régler l'intervalle d'échantillonnage des Meter Values (Meter Value Sample Interval) à 60 secondes max. 

### Paramètres d'autorisation

![Juice Technology – Illustration 5](/img/ocpp-ladestationen-juice-technology/05.png)

- Désactiver la recharge gratuite

- Désactiver la liste blanche locale


Enregistrer tous les paramètres et redémarrer la borne. 

## Juice Charger 2

### Installation

Accéder à la borne :

1\. Dès que tu es connecté à la borne, ouvre ton navigateur préféré et saisis l'adresse IP suivante : 192.168.4.1:1234

2\. Connexion : saisis sur cette page le mot de passe par défaut 1234567890.

3\. Configure ensuite le Juice Charger 2 selon tes souhaits. 

![Juice Technology – Illustration 6](/img/ocpp-ladestationen-juice-technology/06.png)

### Intégration OCPP

⚠️ Important : l'URL générée à partir du compte eCarUp doit être décomposée selon l'exemple suivant. 

1.  ws:// est à omettre ; le chemin d'hôte (Hostpath) et le domaine doivent être saisis séparément, séparés par /.

2.  (\*\*\*\* doit être remplacé par p. ex. F749E....)

3.  La Chargebox ID ne doit pas contenir d'espaces

4.  Enregistrer la configuration

5.  La borne redémarre.


![Juice Technology – Illustration 7](/img/ocpp-ladestationen-juice-technology/07.png)

## Paramètre avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 

Tu peux le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Juice Technology – Abbildung 8](/img/ocpp-ladestationen-juice-technology/08.png)

![Juice Technology – Abbildung 9](/img/ocpp-ladestationen-juice-technology/09.png)
