---
title: 'Eaton OCPP'
slug: '/ocpp-ladestationen/eaton'
description: 'Anciennes bornes de recharge Green Motion (Box Proxy)'
sidebar_label: 'Eaton OCPP'
---
## Bornes de recharge Box Proxy

## Anciennes bornes de recharge Green Motion (Box Proxy)

Le Box Proxy est dès à présent disponible pour l'intégration des anciennes bornes Green Motion. Cela signifie que les bornes de recharge peuvent déjà être connectées à la plateforme eCarUp et testées à l'aide du guide ci-dessous. Il se peut toutefois que des extensions et/ou des améliorations soient encore apportées.

Les modèles de bornes de recharge suivants sont actuellement pris en charge :

[Private-One avec un connecteur](/drittsysteme/box-proxy-green-motion)

[xChargeLN xCIM Client avec un connecteur](/drittsysteme/box-proxy-green-motion)

[Master One](/drittsysteme/box-proxy-green-motion)

[Network TWO](/drittsysteme/box-proxy-green-motion)

[Smart One](/drittsysteme/box-proxy-green-motion)

## Bornes de recharge OCPP

<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-eaton/01.jpg" bildtext="Eaton Green Motion Duo" titel="Green Motion Duo" href="https://www.eaton.com/ch/de-de.html" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-eaton/02.jpg" bildtext="Eaton Green Motion DC 22&66" titel="Green Motion DC 22&66" href="https://www.eaton.com/ch/de-de.html" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-eaton/03.jpg" bildtext="Eaton Green Motion Building" titel="Green Motion Building" href="https://www.eaton.com/ch/de-de.html" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes Eaton peuvent être intégrées au système de décompte eCarUp en quelques étapes. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (tarifs, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel tarif.

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en davantage sur nos [fonctions Premium](/funktionen)

### Intégration des bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stationen ».

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration des bornes de recharge Eaton

### Green Motion DC 22 & 66

Version de firmware testée : 2003

### Intégration de la borne de recharge

Info : la page de configuration reste active pendant 30 minutes ; passé ce délai, la borne doit être redémarrée.

- Mettez la borne sous tension à l'aide du disjoncteur

- Connectez-vous avec le PC via Ethernet à l'un des trois ports LAN du routeur Teltronika situé dans la borne

- Dans le navigateur, accédez à l'adresse IP suivante : 192.168.52.11

- Cliquez sur « Ouvrir la page » et saisissez dans le navigateur les données de connexion fournies. (Par défaut, il peut s'agir de admin/admin)

![Eaton OCPP – Illustration 4](/img/ocpp-ladestationen-eaton/04.png)

![Eaton OCPP – Illustration 5](/img/ocpp-ladestationen-eaton/05.png)

### Étape 1

- Vérifiez la version du logiciel ; Bienne 2003 est le firmware testé.

![Eaton OCPP – Illustration 6](/img/ocpp-ladestationen-eaton/06.png)

### Étape 2

- Sélectionnez OCPP Server

- Réglez Backend sur Custom

- Ajoutez l'URL eCarUp issue de votre compte

Exemple :

wss://[www.ecarup.com/api/Ocpp16/D037091EE3xxxxxx/](http://www.ecarup.com/api/Ocpp16/D037091EE3026BE0/HL68P28001)

- Réglez Security Profile sur None

- Enregistrez

![Eaton OCPP – Illustration 7](/img/ocpp-ladestationen-eaton/07.png)

### Étape 3

- Redémarrez la borne

## Green Motion Building

- Version de firmware testée : v.1807

### Intégration de la borne de recharge

<div className="row">
<div className="col col--8">

Info : la page de configuration reste active pendant 30 minutes ; passé ce délai, la borne doit être redémarrée.

- Mettez la borne sous tension

- Activez le Wi-Fi sur votre PC ou votre téléphone portable

- La borne crée un point d'accès avec les 4 derniers chiffres du numéro de série, p. ex. GM\_Mxxxxx

- Le mot de passe figure sur un autocollant fourni avec la documentation du chargeur. Les anciens modèles ont un mot de passe par défaut (GreenMotion!1052).

- Connectez votre PC ou votre téléphone portable au point d'accès et accédez dans le navigateur à l'adresse IP suivante : 192.168.53.1

- Configurez le réseau et poursuivez avec les étapes ci-dessous.

- Il est possible que vous receviez un message d'avertissement avant d'accéder à la page de configuration. Cliquez sur Continuer.

</div>
<div className="col col--4 text--center">

![Eaton OCPP – Illustration 8](/img/ocpp-ladestationen-eaton/08.png)

</div>
</div>

![Eaton OCPP – Illustration 9](/img/ocpp-ladestationen-eaton/09.png)

### Étape 1

- Sélectionnez OCPP Server

- Réglez Backend sur Custom

- Ajoutez l'URL eCarUp issue de votre compte

Exemple :

wss://[www.ecarup.com/api/Ocpp16/D037091EE3026BE0/](http://www.ecarup.com/api/Ocpp16/D037091EE3026BE0/HL68P28001)

- Réglez Security Profile sur None

- Enregistrez

![Eaton OCPP – Illustration 10](/img/ocpp-ladestationen-eaton/10.png)

### Étape 2

- Redémarrez la borne

## Vérifier l'autorisation

![Eaton OCPP – Illustration 11](/img/ocpp-ladestationen-eaton/11.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon de calculer et d'afficher plus précisément la puissance de recharge actuelle dans l'application.

Vous pouvez la modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Eaton OCPP – Illustration 12](/img/ocpp-ladestationen-eaton/12.png)

![Eaton OCPP – Illustration 13](/img/ocpp-ladestationen-eaton/13.png)

### Download Logs

Si la borne n'apparaît pas dans notre système et que le support Eaton ne trouve pas non plus de solution au problème, nous vous prions de nous mettre à disposition les fichiers journaux pour vérification.

Maintenance --> System Log --> Get the Logs
