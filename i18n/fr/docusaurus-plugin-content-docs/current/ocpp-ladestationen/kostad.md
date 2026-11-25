---
title: 'Kostad'
slug: '/ocpp-ladestationen/kostad'
description: 'Guide d''intégration backend'
sidebar_label: 'Kostad'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-kostad/01.png" bildtext="Kostad Unnity20 - borne DC murale" titel="Unnity20 - borne DC murale" href="https://www.kostad.at/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kostad/02.jpg" bildtext="Kostad Unity50" titel="Unity50" href="https://www.kostad.at/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kostad/03.jpg" bildtext="Kostad Unity20 - chargeur mobile" titel="Unity20 - chargeur mobile" href="https://www.kostad.at/" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Kostad peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez ici-même plus d'informations sur nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu de gauche, cliquez sur l'onglet « Stationen » (Stations).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration de la borne murale DC Kostad (CPC20)

1.  Connectez-vous au menu de service. Vous trouverez le nom d'utilisateur et le mot de passe dans le mode d'emploi. 

2.  ⚠️ Important : la borne doit pouvoir communiquer avec Internet (LAN, WLAN, etc.)

![Kostad – Illustration 4](/img/ocpp-ladestationen-kostad/04.png)

### Configuration de la borne

3\. Sélectionner OCPP :

4\. Hostname : www.ecarup.com/ 

5\. HTTPString : api/OCPP/................/

6. Veuillez vérifier encore une fois : aucun espace nulle part et un / à la fin 

7\. Appliquer les données de connexion ; si la connexion est établie, le statut passe au « vert ».

![Kostad – Illustration 5](/img/ocpp-ladestationen-kostad/05.png)

<div className="row">
<div className="col col--8">

Veuillez encore tenir compte du paramètre suivant : « Betreibereinstellungen 1 » (Paramètres de l'exploitant 1)

- Si l'authentification doit se faire via eCarUp (application ou carte RFID), vous devez passer l'authentification sur OCPP.

</div>
<div className="col col--4 text--center">

![Kostad – Illustration 6](/img/ocpp-ladestationen-kostad/06.png)

</div>
</div>

## Kostad DC Unity 50, 90, 120, 150, 180, 300 & 360 kW

![Kostad – Illustration 7](/img/ocpp-ladestationen-kostad/07.png)

L'intégration de ces installations est assurée par :

 Kostad Schweiz AG. 

+41(0) 52 625 50 50

[www.kostad.ch](https://kostad.ch/)

## office@kostad.ch

![Kostad – Illustration 8](/img/ocpp-ladestationen-kostad/08.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de téléversement des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon de calculer et d'afficher plus précisément dans l'application la puissance de charge actuelle. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Kostad – Illustration 9](/img/ocpp-ladestationen-kostad/09.png)

![Kostad – Illustration 10](/img/ocpp-ladestationen-kostad/10.png)
