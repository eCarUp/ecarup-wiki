---
title: 'Kempower'
slug: '/ocpp-ladestationen/kempower'
description: 'Guide d''intégration backend'
sidebar_label: 'Kempower'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-kempower/01.jpg" bildtext="Kempower Station Charger" titel="Kempower Station Charger" href="https://kempower.com/de/solution/kempower-station-charger/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kempower/02.jpg" bildtext="Kempower Satellite" titel="Kempower Satellite" href="https://kempower.com/de/solution/kempower-satellite/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kempower/03.jpg" bildtext="Kempower Movable Charger" titel="Kempower Movable Charger" href="https://kempower.com/de/solution/kempower-movable-charger/" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes Kempower peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en davantage sur nos [fonctions Premium](/funktionen)


### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stations » (Stationen).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.


## Intégration de la borne de recharge Kempower

Important : version de firmware testée, 3.2.6

### Étape 1

Assurez-vous que votre borne est en ligne et qu'elle communique avec le portail Kempower.

- [https://kempower.io/](https://kempower.io/)


### Étape 2

1.  Vérifiez que la borne dispose également d'une connexion Internet active.

2.  Cliquez en haut à droite sur la roue dentée.


![Kempower – Illustration 4](/img/ocpp-ladestationen-kempower/04.png)

### Étape 3

1.  Cliquez sur Connectivity et activez OCPP.

2.  Ajoutez votre URL eCarUp et cliquez sur « enregistrer » (speichern).


![Kempower – Illustration 5](/img/ocpp-ladestationen-kempower/05.png)

### Étape 4

1.  Pour finir, vérifiez les paramètres d'autorisation et cliquez sur « enregistrer » (speichern).


![Kempower – Illustration 6](/img/ocpp-ladestationen-kempower/06.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule manière de calculer et d'afficher plus précisément la puissance de charge actuelle dans l'app.



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Kempower – Illustration 7](/img/ocpp-ladestationen-kempower/07.png)

![Kempower – Illustration 8](/img/ocpp-ladestationen-kempower/08.png)
