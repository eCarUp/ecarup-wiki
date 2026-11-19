---
title: 'Gresgying'
slug: '/ocpp-ladestationen/gresgying'
description: 'Guide d''intégration backend'
sidebar_label: 'Gresgying'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-gresgying/01.png" bildtext="Gresgying Turbo Wallbox" titel="Turbo Wallbox" href="https://www.gresgying.global/product/turbo-wallbox.html" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-gresgying/02.png" bildtext="Gresgying 120kW & 180kW DC Charging Station" titel="120kW & 180kW DC Charging Station" href="https://www.gresgying.global/product/120kw-180kw-dc-charging-station.html" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Gresgying peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (tarifs, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel tarif. 

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal) 

- Découvrez-en plus sur nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Bornes » (« Stationen »).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez l'URL copiée.

## Gresgying AC Wallbox

- "firmwareVersion":"C-V1.01.24 P-V1.01.21" 

- Installez l'application Gresgying

- Version de l'application testée : V1.0.10

![Gresgying – Illustration 3](/img/ocpp-ladestationen-gresgying/03.png)

### Étape 1

<div className="row">
<div className="col col--6">

- Connectez la borne à votre compte Gresgying via l'application.

</div>
<div className="col col--6 text--center">

![Gresgying – Illustration 4](/img/ocpp-ladestationen-gresgying/04.png)

</div>
</div>

### Étape 2

<div className="row">
<div className="col col--6">

- Dès que la borne est connectée avec succès, l'application l'affiche ainsi

</div>
<div className="col col--6 text--center">

![Gresgying – Illustration 5](/img/ocpp-ladestationen-gresgying/05.png)

</div>
</div>

### Étape 3

<div className="row">
<div className="col col--6">

- Sous Network Configuration, vous pouvez sélectionner le type de connexion.

- Sous OCPP Server, vous pouvez ajouter l'URL.

</div>
<div className="col col--6 text--center">

![Gresgying – Illustration 6](/img/ocpp-ladestationen-gresgying/06.png)

</div>
</div>

### Étape 4

<div className="row">
<div className="col col--6">

- Sous Path, ajoutez l'URL complète de votre compte eCarUp.

- Veuillez noter que le numéro de série de la borne doit être ajouté après l'URL.

- Cliquez sur Connect.

</div>
<div className="col col--6 text--center">

![Gresgying – Illustration 7](/img/ocpp-ladestationen-gresgying/07.png)

</div>
</div>

### Exemple d'URL :

- ws://www.ecarup.com/api/Ocpp16/D0xxxxxxxxxx/Seriennummer

### Veuillez vérifier pour finir le paramètre suivant :

- Charging Mode doit être réglé sur « Online ». 

![Gresgying – Illustration 8](/img/ocpp-ladestationen-gresgying/08.png)

## Gresgying F3-EU 180 kW

- "firmwareVersion":"C2032\_V2.8.2" 

### La borne peut être configurée localement ainsi qu'à distance.

Localement via l'écran :

- Veuillez consulter pour cela le mode d'emploi fourni. 

À distance via le Device Management System :

- Cliquez sur « Device Manage » et recherchez la borne souhaitée

- Sélectionnez « Set Parameters »

- « Operation Platfrom address »

- Ajoutez l'URL OCPP de votre compte et enregistrez le paramètre.

- Redémarrez ensuite la borne.

![Gresgying – Illustration 9](/img/ocpp-ladestationen-gresgying/09.png)

![Gresgying – Illustration 10](/img/ocpp-ladestationen-gresgying/10.png)

## Paramètre avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule manière pour nous de mieux calculer et afficher la puissance de charge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Gresgying – Illustration 11](/img/ocpp-ladestationen-gresgying/11.png)

![Gresgying – Illustration 12](/img/ocpp-ladestationen-gresgying/12.png)
