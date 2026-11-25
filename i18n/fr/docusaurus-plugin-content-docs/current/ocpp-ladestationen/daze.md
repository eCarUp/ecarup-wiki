---
title: 'Daze'
slug: '/ocpp-ladestationen/daze'
description: 'Guide d''intégration backend'
sidebar_label: 'Daze'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-daze/01.png" bildtext="Daze Home" titel="Home" href="https://daze.eu/en-ch/store/dazebox-home-s/?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA.." bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-daze/02.png" bildtext="Daze Duo" titel="Duo" href="https://www.daze.eu/en/store?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA.." bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-daze/03.png" bildtext="Daze Urban" titel="Urban" href="https://www.daze.eu/en/store?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA.." bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Daze peuvent être intégrées au système de décompte eCarUp en quelques étapes. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (tarifs, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel tarif. 

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stationen » (Stations).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration de la Dazebox Home, Share et Duo

Important : version de firmware testée de la Dazebox Home, 16.0.6.0

Important : version de firmware testée de la Share et de la Duo, 2.1.4.1.1.4

<Video src="BLvGWpLkiiY" title="Vidéo YouTube, guide d'intégration de DAZE dans le backend eCarUp" />

<div className="row">
<div className="col col--8">

Guide rapide d'intégration de la DAZE Box dans le backend eCarUp

- Installez l'application Daze.

- Version testée de l'application : V. 6.1.0(97)

</div>
<div className="col col--4 text--center">

![Daze – illustration 4](/img/ocpp-ladestationen-daze/04.png)

</div>
</div>

### Étape 1

Ajoutez un réseau.

![Daze – illustration 5](/img/ocpp-ladestationen-daze/05.png)

### Étape 2

<div className="row">
<div className="col col--6">

À ce stade, configurez votre borne de recharge et ajoutez le WLAN.

</div>
<div className="col col--6 text--center">

![Daze – illustration 6](/img/ocpp-ladestationen-daze/06.png)

</div>
</div>

### Étape 3

<div className="row">
<div className="col col--6">

Une fois la borne de recharge ajoutée, vous obtenez l'aperçu suivant

</div>
<div className="col col--6 text--center">

![Daze – illustration 7](/img/ocpp-ladestationen-daze/07.png)

</div>
</div>

### Étape 4

<div className="row">
<div className="col col--6">

Pour l'intégration OCPP, cliquez en haut à droite sur les 3 traits (paramètres)

</div>
<div className="col col--6 text--center">

![Daze – illustration 8](/img/ocpp-ladestationen-daze/08.png)

</div>
</div>

### Étape 5

Activez OCPP et sélectionnez eCarUp comme fournisseur.

![Daze – illustration 9](/img/ocpp-ladestationen-daze/09.png)

### Étape 6

<div className="row">
<div className="col col--6">

Collez maintenant votre URL, issue du portail web du compte eCarUp souhaité, dans le champ URL.

</div>
<div className="col col--6 text--center">

![Daze – illustration 10](/img/ocpp-ladestationen-daze/10.png)

</div>
</div>

### Étape 7

L'ID de la borne de recharge est renseigné automatiquement. 

Cliquez ensuite sur « Ende » (Terminer). 

Après le redémarrage de la borne, elle devrait maintenant apparaître dans votre compte. 

Important : la borne doit rester connectée à votre téléphone portable via Bluetooth pendant tout le processus.

## Important pour la borne Urban avec 2 connecteurs :

- Pour l'identification, les connecteurs gauche et droit doivent être complétés par les trois derniers chiffres du numéro de série. 

![Daze – illustration 11](/img/ocpp-ladestationen-daze/11.png)

![Daze – illustration 12](/img/ocpp-ladestationen-daze/12.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon pour nous de calculer et d'afficher plus précisément la puissance de charge actuelle dans l'application. 

Vous pouvez la modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Daze – illustration 13](/img/ocpp-ladestationen-daze/13.png)

![Daze – illustration 14](/img/ocpp-ladestationen-daze/14.png)
