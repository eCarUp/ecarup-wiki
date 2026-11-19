---
title: 'Partino'
slug: '/ocpp-ladestationen/partino'
description: 'Guide d''intégration backend'
sidebar_label: 'Partino'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-partino/01.jpg" bildtext="Partino Vool" titel="Partino Vool" href="https://www.partino.ch/de/angebot/e-ladestationen/vool/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-partino/02.png" bildtext="Partino DC30" titel="Partino DC30" href="https://www.partino.ch/de/angebot/e-ladestationen/partino-x-ecotap/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-partino/03.png" bildtext="Partino Ecotap" titel="Partino Ecotap" href="https://www.partino.ch/de/angebot/e-ladestationen/partino-x-ecotap/" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Partino et Ecotap peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Condition préalable : [intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions Premium](/funktionen)


### Intégration de bornes OCPP

1.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

2.  Dans le menu à gauche, cliquez sur l'onglet « Stationen » (Stationen).

3.  Sélectionnez l'onglet « OCPP » (OCPP).

4.  Copiez l'URL dans le presse-papiers.

5.  Collez l'URL dans le formulaire de demande mentionné ci-dessous.


## Partino Vool

- version de firmware testée : v1.9.16


<Video src="pRN2F2iiNzk" title="Vidéo YouTube, guide d'intégration de la borne de recharge Partino /Vool dans le backend eCarUp" />

### Vidéo : guide d'intégration des bornes de recharge Partino Vool dans le backend eCarUp

- Installez pour cela l'application Vool


![Partino – illustration 4](/img/ocpp-ladestationen-partino/04.png)

1.  Connecter la borne via Bluetooth


![Partino – illustration 5](/img/ocpp-ladestationen-partino/05.png)

2.



![Partino – illustration 6](/img/ocpp-ladestationen-partino/06.png)

3.. Configurer le chargeur



![Partino – illustration 7](/img/ocpp-ladestationen-partino/07.png)

4\. Effectuer la configuration de base

![Partino – illustration 8](/img/ocpp-ladestationen-partino/08.png)

5\. Cliquez sur « Erweiterte Einstellungen anzeigen » (Erweiterte Einstellungen anzeigen)

![Partino – illustration 9](/img/ocpp-ladestationen-partino/09.png)

6\. Ajoutez votre URL eCarUp et enregistrez

![Partino – illustration 10](/img/ocpp-ladestationen-partino/10.png)

### Transmettre l'URL eCarUp à Partino (en cas d'utilisation de la Floatbridge)

Pour l'intégration des bornes Partino (en cas d'utilisation de la Floatbridge) dans notre backend, vous avez actuellement encore besoin du soutien de l'entreprise [Partino](https://www.partino.ch/de/). Partino se charge de la dernière étape de configuration et attribue vos points de recharge au bon compte eCarUp (via l'URL OCPP) que vous avez reçue lors de la préparation. Pour cela, transmettez à Partino l'URL ainsi que les numéros de série de la borne de recharge à l'aide du formulaire ci-dessous.

[Formulaire de demande Partino](https://www.partino.ch/wp-content/uploads/Partino_Anmeldeformular_eCarUp.pdf).

![Partino – illustration 11](/img/ocpp-ladestationen-partino/11.png)

## Ecotap

- version de firmware testée : 506.32R.33


### Transmettre l'URL OCPP à Partino

Pour l'intégration des bornes Ecotap dans notre backend, vous avez actuellement encore besoin du soutien de l'entreprise [Partino](https://www.partino.ch/de/). Partino se charge de la dernière étape de configuration et attribue vos points de recharge au bon compte eCarUp (via l'URL OCPP) que vous avez reçue lors de la préparation. Pour cela, transmettez à Partino l'URL ainsi que les numéros de série de la borne de recharge à l'aide du formulaire ci-dessous.

[Formulaire de demande Partino](https://www.partino.ch/wp-content/uploads/Partino_Anmeldeformular_eCarUp.pdf).

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule manière de calculer et d'afficher plus précisément la puissance de charge actuelle dans l'application.



Vous pouvez la modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Partino – illustration 12](/img/ocpp-ladestationen-partino/12.png)

![Partino – illustration 13](/img/ocpp-ladestationen-partino/13.png)
