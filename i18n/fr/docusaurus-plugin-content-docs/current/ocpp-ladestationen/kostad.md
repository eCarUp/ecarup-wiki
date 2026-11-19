---
title: 'Kostad'
slug: '/ocpp-ladestationen/kostad'
description: 'Guide d''intégration backend'
sidebar_label: 'Kostad'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-kostad/01.png" bildtext="Kostad Unnity20 - DC Wallbox" titel="Unnity20 - DC Wallbox" href="https://www.kostad.at/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kostad/02.jpg" bildtext="Kostad Unity50" titel="Unity50" href="https://www.kostad.at/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kostad/03.jpg" bildtext="Kostad Unity20 - Mobile Charger" titel="Unity20 - Mobile Charger" href="https://www.kostad.at/" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Kostad peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir vous-même, en toute simplicité, les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stations » (Stationen).

4.  Sélectionnez l'onglet « OCPP » (OCPP).

5.  Copiez l'URL dans le presse-papiers.

6.  Rendez-vous dans l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration de la borne DC Kostad (CPC20)

1.  Connectez-vous au menu de service. Le nom d'utilisateur et le mot de passe figurent dans le mode d'emploi. 

2.  ⚠️ Important : la borne doit pouvoir communiquer avec Internet (LAN, WLAN, etc.)

![Kostad – Illustration 4](/img/ocpp-ladestationen-kostad/04.png)

### Configuration de la borne

3\. Sélectionner OCPP :

4\. Hostname : www.ecarup.com/ 

5\. HTTPString : api/OCPP/................/

6. Veuillez vérifier encore une fois : aucun espace nulle part et un / à la fin 

7\. Reprendre les données de connexion ; si la connexion est établie, le statut est « vert ».

![Kostad – Illustration 5](/img/ocpp-ladestationen-kostad/05.png)

<div className="row">
<div className="col col--8">

Veuillez également tenir compte du paramètre suivant : « Betreibereinstellungen 1 » (Paramètres de l'exploitant 1)

- Si l'authentification doit se faire via eCarUp (app ou carte RFID), vous devez, sous
    Authentifikation, passer sur OCPP.

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

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon de mieux calculer et d'afficher dans l'app la puissance de recharge actuelle. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Kostad – Illustration 9](/img/ocpp-ladestationen-kostad/09.png)

![Kostad – Illustration 10](/img/ocpp-ladestationen-kostad/10.png)
