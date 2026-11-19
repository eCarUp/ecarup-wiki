---
title: 'Siemens'
slug: '/ocpp-ladestationen/siemens'
description: 'Guide d''intégration du backend'
sidebar_label: 'Siemens'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-siemens/01.jpg" bildtext="Siemens SiCharge CC" titel="SiCharge CC" href="/ocpp-ladestationen/siemens#sicharge-cc-ac22" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-siemens/02.png" bildtext="Siemens VersiCharge" titel="Siemens VersiCharge" href="/ocpp-ladestationen/siemens#versiecharge-ac-22kw" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-siemens/03.png" bildtext="Siemens SICHARGE D" titel="Siemens SICHARGE D" href="/ocpp-ladestationen/siemens#sicharge-d" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration du backend

Les bornes de recharge Siemens peuvent être intégrées au système de décompte eCarUp en quelques étapes. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Condition préalable : l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions Premium](/funktionen)

### Intégration de bornes de recharge OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stationen » (Stations).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Rendez-vous sur l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration des bornes de recharge Siemens

<Video src="zB1Yqo63b6I" title="Vidéo YouTube, intégration de Siemens dans le backend eCarUp" />

## SiCharge CC AC22

### Intégration de la SICharge

Se connecter à la borne via Ethernet

1.  L'ordinateur portable doit avoir l'adresse IP 192.168.32.10 et le masque de sous-réseau 255.255.255.0.

2.  Ouvrez le navigateur de votre ordinateur portable et saisissez l'URL suivante dans la barre d'adresse : 192.168.32.1

3.  Le nom d'utilisateur est « admin » et le mot de passe correspond au numéro de série de l'installation.

### Interface web

1.  Server Profile sur Production

2.  Protocol Version OCPP 1.6J

3.  Insérer l'URL du compte

4.  Dans User Management, sous Authentication, le point à côté d'OCPP (managed) doit être coché dans la liste blanche (Whitelist).

5.  Enregistrer et redémarrer

![Siemens – Illustration 4](/img/ocpp-ladestationen-siemens/04.png)

![Siemens – Illustration 5](/img/ocpp-ladestationen-siemens/05.png)

### Connexion via carte SIM

Siemens livre avec la borne de recharge une carte SIM M2M.

Le réglage suivant doit encore être effectué :

- Authentication Method sur PAP

- Service Mode sur Auto

![Siemens – Illustration 6](/img/ocpp-ladestationen-siemens/06.png)

## VersieCharge AC 22kW

### Étapes préparatoires pour l'intégration de la VersieCharge

1.  Installez l'application Sifinity Go sur votre téléphone portable

2.  Connectez ensuite votre borne de recharge à l'application (configuration via Bluetooth)

Version de firmware testée : V2.132.29

[App Store](https://apps.apple.com/us/app/sifinity-go/id989742892?l=de)

[Google Play](https://play.google.com/store/apps/details?id=com.siemens.VersiChargeSG&hl=de&gl=US)

![Siemens – Illustration 7](/img/ocpp-ladestationen-siemens/07.png)

<div className="row">
<div className="col col--6 text--center">

![Siemens – Illustration 8](/img/ocpp-ladestationen-siemens/08.png)

</div>
<div className="col col--6 text--center">

![Siemens – Illustration 9](/img/ocpp-ladestationen-siemens/09.png)

</div>
</div>

3\. L'exploitant de la borne doit ensuite envoyer l'URL, y compris le numéro de série de la borne, à l'adresse e-mail suivante pour l'intégration :

[si.emobility.ch@siemens.com](mailto:si.emobility.ch@siemens.com).

Siemens vous contactera rapidement pour une intégration réussie.

## SiCharge D

Pour l'intégration de la SiCharge D, l'URL ainsi que le numéro de série de la borne doivent être envoyés à l'adresse e-mail suivante :

[si.emobility.ch@siemens.com](mailto:si.emobility.ch@siemens.com)

Siemens vous contactera rapidement pour une intégration réussie.

![Siemens – Illustration 10](/img/ocpp-ladestationen-siemens/10.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de téléversement des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule manière de calculer et d'afficher plus précisément la puissance de charge actuelle dans l'application.

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Siemens – Illustration 12](/img/ocpp-ladestationen-siemens/11.png)

![Siemens – Illustration 12](/img/ocpp-ladestationen-siemens/12.png)
