---
title: 'POWERJames'
slug: '/ocpp-ladestationen/powerjames'
description: 'Guide d''intégration backend'
sidebar_label: 'POWERJames'
---
## Guide d'intégration backend

Les bornes de recharge POWERJames peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes de recharge (tarifs, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel tarif.

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes de recharge](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions Premium](/funktionen)

<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-powerjames/01.png" bildtext="Wallbox POWERJames POWERJames Charges" titel="Wallbox POWERJames Charges" href="https://powerjames.com/#funktionen" bildhoehe="10rem" mittig />

</Kacheln>

### Intégration de bornes de recharge OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stationen » (Stationen).

4.  Sélectionnez l'onglet « OCPP » (OCPP).

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne de recharge souhaitée et collez-y l'URL copiée.

## POWERJames Charge S

- "firmwareVersion":"22.0.35" 

### Étape 1

- Connectez la borne de recharge au réseau Wi-Fi local.

- Conseil : consultez le guide rapide fourni.

### Étape 2

- Contactez ensuite le support de PowerJames à l'adresse [support@powerjames.com](mailto:support@powerjames.com) pour lui indiquer que vous souhaitez connecter la borne à eCarUp.

### Étape 3

- Dès que vous avez reçu son accord, vous pouvez commencer.

- Reconnectez-vous à la wallbox avec votre téléphone portable et saisissez à nouveau l'adresse IP 192.168.4.1 dans le navigateur.

### Étape 4

- Cliquez sur « OCPP Configuration »

![POWERJames – Illustration 2](/img/ocpp-ladestationen-powerjames/02.png)

### Étape 5

<div className="row">
<div className="col col--6">

- Activez l'interface OCPP

- La ChargeBox ID est définie automatiquement.

- Ajoutez l'URL OCPP de votre compte eCarUp.

- Enregistrez pour terminer et redémarrez la borne.

</div>
<div className="col col--6 text--center">

![POWERJames – Illustration 3](/img/ocpp-ladestationen-powerjames/03.png)

</div>
</div>

### Exemple :

- URL OCPP de votre compte : ws://www.ecarup.com/api/Ocpp16/D0xxxxxxxxxx

### Étape 6

<div className="row">
<div className="col col--6">

- Contrôle final : pour OCPP, « Active » doit s'afficher.

- La configuration chez PowerJames est ainsi terminée et le point de mesure peut être édité dans eCarUp.

</div>
<div className="col col--6 text--center">

![POWERJames – Illustration 4](/img/ocpp-ladestationen-powerjames/04.png)

</div>
</div>

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. Ce n'est qu'ainsi que nous pouvons mieux calculer et afficher la puissance de charge actuelle dans l'application.

Vous pouvez la modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![POWERJames – Illustration 5](/img/ocpp-ladestationen-powerjames/05.png)

![POWERJames – Illustration 6](/img/ocpp-ladestationen-powerjames/06.png)
