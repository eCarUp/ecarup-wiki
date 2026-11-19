---
title: 'Gewiss'
slug: '/ocpp-ladestationen/gewiss'
description: 'Guide d''intégration du backend'
sidebar_label: 'Gewiss'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-gewiss/01.jpg" bildtext="Gewiss JOINON EVO" titel="JOINON EVO" href="https://www.gewiss.com/ch/de/mobility" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-gewiss/02.jpg" bildtext="Gewiss JOINON-FAST" titel="JOINON-FAST" href="https://www.gewiss.com/ch/de/mobility" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration du backend

Les bornes de recharge Gewiss JOINON peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans ton compte, tu peux définir toi-même, sans difficulté, les conditions d'utilisation de tes bornes (tarifs, utilisateurs, plages horaires disponibles, etc.). Tu décides qui peut recharger, quand et à quel tarif. 

- Condition préalable : l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal) 

- Découvre ici-même davantage de choses sur nos [fonctions Premium](/funktionen)


### Intégration des bornes OCPP

1.  Assure-toi que tes bornes de recharge sont installées et que ton PC ou ton téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvre le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connecte-toi avec les données de ton compte.

3.  Dans le menu à gauche, clique sur l'onglet « Bornes » (« Stationen »).

4.  Sélectionne l'onglet « OCPP ».

5.  Copie l'URL dans le presse-papiers.


1.ws Lien sans Basic Auth : testé et fonctionne

2.wss sans Basic Auth : testé et fonctionne

3.wss avec Basic Auth : non testé

6.  Va dans l'interface web de la borne souhaitée et colle l'URL copiée.


## Borne murale JOINON EVO

- "firmwareVersion":"12.3.0" 


1.  Connecte-toi à la borne Gewiss JOINON Evo via LAN ou WLAN (tu trouveras les détails de la connexion dans la notice d'installation).

2.  Écran de connexion (tu trouveras également les données de connexion requises dans la notice d'installation).

3.  Dans le point de menu « Charging Station », tu peux configurer la connexion souhaitée. 


4\. « Authorisation Type » doit être réglé sur « Autorisation ».



![Gewiss – Illustration 3](/img/ocpp-ladestationen-gewiss/03.png)

5\. Mettre « OCPP Protocol » sur « ON ».

6\. Ajouter l'URL eCarUp.

Exemple : wss://[www.ecarup.com/api/Ocpp16/D8xxxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8xxxxxxxxx)

7\. « Chargebox identity » = numéro de série de la borne.

8\. Enregistrer.



![Gewiss – Illustration 4](/img/ocpp-ladestationen-gewiss/04.png)

## Borne de recharge DC JOINON I-Fast

- "firmwareVersion":"V4.13.M0 " 


1.  Connecte-toi à la borne de recharge DC Gewiss i-Fast via LAN ou WLAN (tu trouveras les détails de la connexion dans la notice d'installation).

2.  Écran de connexion (tu trouveras également les données de connexion requises dans la notice d'installation).


3. Clique sur « Set ».

4\. Sélectionne « Backend ».

5\. Ajoute ton URL eCarUp dans « Central System URL ». 

Exemple : wss://[www.ecarup.com/api/Ocpp16/D8xxxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8xxxxxxxxx)

6. « Charge Box ID » = numéro de série de la borne.

7. Le « OCPP Security Profile » peut être choisi en option. 

8\. Enregistrer.




![Gewiss – Illustration 5](/img/ocpp-ladestationen-gewiss/05.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule manière de calculer et d'afficher plus précisément la puissance de charge actuelle dans l'application. 



Tu peux la modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Gewiss – Illustration 6](/img/ocpp-ladestationen-gewiss/06.png)

![Gewiss – Illustration 7](/img/ocpp-ladestationen-gewiss/07.png)
