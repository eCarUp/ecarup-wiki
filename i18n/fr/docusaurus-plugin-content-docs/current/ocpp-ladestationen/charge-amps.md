---
title: 'Charge Amps'
slug: '/ocpp-ladestationen/charge-amps'
description: 'Guide d''intégration du backend'
sidebar_label: 'Charge Amps'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-charge-amps/01.jpg" bildtext="Charge Amps Aura" titel="Charge Amps Aura" href="https://www.chargeamps.com/de/product/charge-amps-aura/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-charge-amps/02.jpg" bildtext="Charge Amps Dawn" titel="Charge Amps Dawn" href="https://www.chargeamps.com/de/product/charge-amps-aura/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-charge-amps/03.jpg" bildtext="Charge Amps Halo" titel="Charge Amps Halo" href="https://www.chargeamps.com/de/product/charge-amps-aura/" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration du backend

Les bornes de recharge Charge Amps peuvent être intégrées au système de décompte eCarUp en quelques étapes. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stations » (« Stationen »).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration des bornes Charge Amps

### HALO (1 x 11 kW)

⚠️ Important : le firmware de la borne doit correspondre au minimum à la version 158 

### Étapes préparatoires pour l'intégration de la wallbox HALO

1.  Ouvrez la page suivante et inscrivez-vous : [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Une fois connecté, vous pouvez ajouter votre wallbox HALO via le profil.

3.  Allez ensuite au point de menu « Commande à distance » (« Fernsteuerung ») et activez le verrouillage RFID. 

⚠️ ATTENTION : ce verrouillage doit être effectué AVANT l'implémentation OCPP !

![Charge Amps – Illustration 4](/img/ocpp-ladestationen-charge-amps/04.png)

### Intégration OCPP

1.  Allumez votre HALO

2.  Utilisez pour cela un smartphone et allez dans vos paramètres WLAN

3.  Sélectionnez le hotspot de la wallbox HALO (HALO\_numéro de série)

4.  Ouvrez le navigateur du smartphone et saisissez l'adresse IP suivante : 192.168.250.1

5.  La page de configuration de la HALO s'ouvre

6.  Saisissez le mot de passe demandé. Vous le trouverez sur le courrier de Charge Amps fourni avec la borne 

7.  Dans les paramètres, cliquez sur la flèche de menu (en haut à droite)

- Sous le point de menu Wi-Fi, la borne peut être connectée au WLAN souhaité 

-  Sélectionnez le point de menu « OCPP »

8.  Il faut maintenant saisir l'URL eCarUp. Cliquez ensuite sur « Actualiser » (« Aktualisieren ») et redémarrez la wallbox.

    Exemple d'URL : ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

![Charge Amps – Illustration 5](/img/ocpp-ladestationen-charge-amps/05.png)

![Charge Amps – Illustration 6](/img/ocpp-ladestationen-charge-amps/06.png)

## AURA (2 x 22 kW)

### Étapes préparatoires pour l'intégration de la wallbox AURA

1.  Ouvrez la page suivante et inscrivez-vous : [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Une fois connecté, vous pouvez ajouter votre wallbox Aura via le profil.

3.  Allez ensuite au point de menu « Commande à distance » (« Fernsteuerung ») et activez le verrouillage RFID. Veuillez le faire pour les deux connecteurs !

⚠️ ATTENTION : ce verrouillage doit être effectué AVANT l'implémentation OCPP !

![Charge Amps – Illustration 7](/img/ocpp-ladestationen-charge-amps/07.png)

### Intégration OCPP

1.  Allumez votre AURA

2.  Utilisez pour cela un smartphone et allez dans vos paramètres WLAN

3.  Sélectionnez le hotspot de la wallbox AURA (AURA\_numéro de série)

4.  Ouvrez le navigateur de votre smartphone et saisissez l'adresse IP suivante : 192.168.250.1

5.  La page de configuration de l'AURA s'ouvre

6.  Saisissez le mot de passe demandé. Vous le trouverez sur le courrier de Charge Amps fourni avec la borne 

7.  Dans les paramètres, cliquez sur la flèche de menu (en haut à droite)

- Sous le point de menu Wi-Fi, la borne peut être connectée au WLAN souhaité 

-  Sélectionnez le point de menu « OCPP »

8.  Il faut maintenant saisir l'URL eCarUp. Cliquez ensuite sur « Actualiser » (« Aktualisieren ») et redémarrez la wallbox.

    Exemple d'URL : ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

![Charge Amps – Illustration 8](/img/ocpp-ladestationen-charge-amps/05.png)

![Charge Amps – Illustration 9](/img/ocpp-ladestationen-charge-amps/06.png)

### Informations importantes sur l'AURA

- Par défaut, l'AURA est configurée de manière à ne pouvoir être libérée par carte RFID qu'après la fin de la session de recharge. (Découplage de la fiche) 

- Cela signifie que si vous terminez la session de recharge côté véhicule, le mécanisme de la borne pour la fiche n'est pas libéré automatiquement. 

- Cela peut être corrigé à l'aide de notre outil de maintenance (eCarUp Premium). Procédez pour cela comme suit :

1.  Paramètre Get Configuration, la clé est UnlockConnectorOnEVSideDisconnect (par défaut sur false).

2.  Paramètre pour la modification Change Configuration, puis de nouveau avec la clé UnlockConnectorOn EVSideDisconnect + Value à définir sur true et enregistrer avec Set.

1.

![Charge Amps – Illustration 10](/img/ocpp-ladestationen-charge-amps/10.png)

2.

![Charge Amps – Illustration 11](/img/ocpp-ladestationen-charge-amps/11.png)

## Dawn (1 x 22 kW)

Important : version de firmware testée, 1.3.5

### Étapes préparatoires pour l'intégration de la wallbox Dawn

1.  Ouvrez la page suivante et inscrivez-vous : [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Une fois connecté, vous pouvez ajouter votre wallbox Dawn via le profil.

3.  Allez ensuite au point de menu « Commande à distance » (« Fernsteuerung ») et activez le verrouillage RFID. 

⚠️ ATTENTION : ce verrouillage doit être effectué AVANT l'implémentation OCPP !

![Charge Amps – Illustration 12](/img/ocpp-ladestationen-charge-amps/12.png)

### Intégration OCPP

1.  Allumez votre Dawn.

2.  Pour l'intégration, utilisez votre smartphone et installez l'application Installer de Charge Amps

3.  Ouvrez l'application et lancez une recherche (via Bluetooth). Important : cela ne peut se faire que pendant les 10 premières minutes suivant la mise sous tension de la borne.

![Charge Amps – Illustration 13](/img/ocpp-ladestationen-charge-amps/13.png)

<div className="row">
<div className="col col--6">

4\. Connectez la borne de recharge au support souhaité (WLAN, LAN ou via eSIM)

5\. Allez sur CPMS et cliquez sur éditer

</div>
<div className="col col--6 text--center">

![Charge Amps – Illustration 14](/img/ocpp-ladestationen-charge-amps/14.png)

</div>
</div>

<div className="row">
<div className="col col--6">

6\. Cliquez sur Connect to ohter CPMS pour y placer l'URL eCarUp

</div>
<div className="col col--6 text--center">

![Charge Amps – Illustration 15](/img/ocpp-ladestationen-charge-amps/15.png)

</div>
</div>

<div className="row">
<div className="col col--6">

7\. Saisissez manuellement l'URL eCarUp provenant de votre compte.

Exemple : ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

8\. Cliquez sur Connect

</div>
<div className="col col--6 text--center">

![Charge Amps – Illustration 16](/img/ocpp-ladestationen-charge-amps/16.png)

</div>
</div>

8. Une confirmation s'affiche

![Charge Amps – Illustration 17](/img/ocpp-ladestationen-charge-amps/17.png)

<div className="row">
<div className="col col--6">

9\. Vérifiez l'aperçu, y compris l'état de la connexion.

10\. Confirmez la configuration et terminez.

</div>
<div className="col col--6 text--center">

![Charge Amps – Illustration 18](/img/ocpp-ladestationen-charge-amps/18.png)

</div>
</div>

11\. La borne apparaît maintenant dans votre compte eCarUp. 

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. Ce n'est qu'ainsi que nous pouvons mieux calculer et afficher la puissance de charge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Charge Amps – Illustration 19](/img/ocpp-ladestationen-charge-amps/19.png)

![Charge Amps – Illustration 20](/img/ocpp-ladestationen-charge-amps/20.png)
