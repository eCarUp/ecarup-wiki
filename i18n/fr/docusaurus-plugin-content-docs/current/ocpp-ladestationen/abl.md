---
title: 'ABL'
slug: '/ocpp-ladestationen/abl'
description: 'Guide d''intégration backend'
sidebar_label: 'ABL'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-abl/01.jpg" bildtext="ABL Wallbox" titel="ABL Wallbox" href="https://www.ablmobility.de/de/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-abl/02.png" bildtext="ABL Supernova" titel="ABL Supernova" href="https://www.ablmobility.de/de/" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge ABL peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (tarifs, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel tarif. 

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions premium](/funktionen)


### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Bornes de recharge » (« Stationen »).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.


## Intégration de la wallbox ABL

### ⚠️ Remarques importantes pour l'intégration de bornes de recharge ABL

- Pour démarrer la session de recharge, un véhicule doit impérativement être connecté au préalable. Sinon, aucune session de recharge n'est initiée.

- Si la recharge est démarrée avec la carte RFID, on ne peut l'arrêter que via la voiture (p. ex. en déverrouillant le câble) ou via l'application eCarUp. Présenter à nouveau la carte RFID n'arrête pas la session de recharge.


### Accéder à la borne

- Une fois connecté à la borne, saisissez dans le navigateur l'IP suivante : [http://169.254](/).1.1:8300/

- Vérifiez dans les données système que la version actuelle du logiciel est installée


### Configuration

- Passer la version OCPP à 1.6

- Insérer l'URL complète issue du compte eCarUp

- Renommer l'ID ChargeBox. Attention : pas d'espaces. 

- Enregistrer et redémarrer la borne.


![ABL – Illustration 3](/img/ocpp-ladestationen-abl/03.png)

### Important

L'ID Chargebox ne doit pas contenir plus de 20 caractères. 

![ABL – Illustration 4](/img/ocpp-ladestationen-abl/04.png)

### Important

Veuillez désactiver la fonction Auto-Charge.

![ABL – Illustration 5](/img/ocpp-ladestationen-abl/05.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur) 




![ABL – Illustration 6](/img/ocpp-ladestationen-abl/06.png)

![ABL – Illustration 7](/img/ocpp-ladestationen-abl/07.png)
