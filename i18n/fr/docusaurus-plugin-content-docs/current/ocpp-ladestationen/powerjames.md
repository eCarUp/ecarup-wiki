---
title: 'POWERJames'
slug: '/ocpp-ladestationen/powerjames'
description: 'Guide d''intégration backend'
sidebar_label: 'POWERJames'
---
## Guide d'intégration backend

Les bornes POWERJames peuvent être intégrées au système de décompte eCarUp en quelques étapes. Une fois installées dans ton compte, tu peux définir toi-même, sans complication, les conditions d'utilisation de tes bornes (prix, utilisateurs, plages horaires disponibles, etc.). Tu décides qui peut recharger, quand et à quel prix.

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvre ici davantage de détails sur nos [fonctions Premium](/funktionen)

<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-powerjames/01.png" bildtext="POWERJames Wallbox POWERJames Charges" titel="Wallbox POWERJames Charges" href="https://powerjames.com/#funktionen" bildhoehe="10rem" mittig />

</Kacheln>

### Intégration de bornes OCPP

1.  Assure-toi que tes bornes de recharge sont installées et que ton PC ou ton téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvre le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connecte-toi avec les données de ton compte.

3.  Dans le menu à gauche, clique sur l'onglet « Stationen ».

4.  Sélectionne l'onglet « OCPP ».

5.  Copie l'URL dans le presse-papiers.

6.  Va sur l'interface web de la borne souhaitée et colle l'URL copiée.

## POWERJames Charge S

- "firmwareVersion":"22.0.35" 

### Étape 1

- Connecte la borne de recharge au Wi-Fi local.

- Astuce : consulte le guide rapide fourni.

### Étape 2

- Contacte ensuite le support de PowerJames à l'adresse [support@powerjames.com](mailto:support@powerjames.com) pour indiquer que tu souhaites connecter la borne à eCarUp.

### Étape 3

- Dès que tu as reçu leur accord, tu peux commencer.

- Connecte-toi de nouveau à la wallbox via ton téléphone portable et saisis à nouveau l'adresse IP 192.168.4.1 dans le navigateur.

### Étape 4

- Clique sur « OCPP Configuration »

![POWERJames – Illustration 2](/img/ocpp-ladestationen-powerjames/02.png)

### Étape 5

<div className="row">
<div className="col col--6">

- Active l'interface OCPP

- La ChargeBox ID est définie automatiquement.

- Ajoute l'URL OCPP de ton compte eCarUp.

- Enregistre à la fin et redémarre la borne.

</div>
<div className="col col--6 text--center">

![POWERJames – Illustration 3](/img/ocpp-ladestationen-powerjames/03.png)

</div>
</div>

### Exemple :

- URL OCPP de ton compte : ws://www.ecarup.com/api/Ocpp16/D0xxxxxxxxxx

### Étape 6

<div className="row">
<div className="col col--6">

- Contrôle final : pour OCPP, « Active » doit être affiché.

- La configuration chez PowerJames est ainsi terminée et le point de mesure peut être modifié dans eCarUp.

</div>
<div className="col col--6 text--center">

![POWERJames – Illustration 4](/img/ocpp-ladestationen-powerjames/04.png)

</div>
</div>

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application.

Tu peux le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![POWERJames – Illustration 5](/img/ocpp-ladestationen-powerjames/05.png)

![POWERJames – Illustration 6](/img/ocpp-ladestationen-powerjames/06.png)
