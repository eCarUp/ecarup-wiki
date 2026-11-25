---
title: 'Siemens'
slug: '/ocpp-ladestationen/siemens'
description: 'Guide d''intégration backend'
sidebar_label: 'Siemens'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-siemens/01.jpg" bildtext="Siemens SiCharge CC" titel="SiCharge CC" href="/ocpp-ladestationen/siemens#sicharge-cc-ac22" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-siemens/02.png" bildtext="Siemens VersiCharge" titel="Siemens VersiCharge" href="/ocpp-ladestationen/siemens#versiecharge-ac-22kw" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-siemens/03.png" bildtext="Siemens SICHARGE D" titel="Siemens SICHARGE D" href="/ocpp-ladestationen/siemens#sicharge-d" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Siemens peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans ton compte, tu peux définir toi-même, en toute simplicité, les conditions d'utilisation de tes bornes (prix, utilisateurs, plages horaires disponibles, etc.). Tu décides qui peut recharger, quand et à quel prix. 

- Condition préalable : [intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvre-en plus sur nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assure-toi que tes bornes de recharge sont installées et que ton PC ou ton téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvre le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connecte-toi avec les données de ton compte.

3.  Dans le menu à gauche, clique sur l'onglet « Stationen » (Stations).

4.  Sélectionne l'onglet « OCPP ».

5.  Copie l'URL dans le presse-papiers.

6.  Va sur l'interface web de la borne souhaitée et colle l'URL copiée.

## Intégration des bornes de recharge Siemens

<Video src="zB1Yqo63b6I" title="Vidéo YouTube, intégration de Siemens dans le backend eCarUp" />

## SiCharge CC AC22

### Intégration de la SICharge

Se connecter à la borne via Ethernet

1.  L'ordinateur portable doit avoir l'adresse IP 192.168.32.10 et le masque de sous-réseau : 255.255.255.0.

2.  Ouvre le navigateur de ton ordinateur portable et saisis l'URL suivante dans la barre d'adresse : 192.168.32.1

3.  Le nom d'utilisateur est « admin » et le mot de passe est le numéro de série de l'installation.

### Interface web

1.  Server Profile sur Production

2.  Protocol Version OCPP 1.6J

3.  Insérer l'URL du compte

4.  Dans User Management, sous Authentication, le point doit être activé pour OCPP (managed) dans la whitelist.

5.  Enregistrer et redémarrer

![Siemens – illustration 4](/img/ocpp-ladestationen-siemens/04.png)

![Siemens – illustration 5](/img/ocpp-ladestationen-siemens/05.png)

### Connexion par carte SIM

Siemens livre avec la borne de recharge une carte SIM M2M. 

Le paramètre suivant doit encore être effectué :

- Authentication Method sur PAP

- Service Mode sur Auto

![Siemens – illustration 6](/img/ocpp-ladestationen-siemens/06.png)

## VersieCharge AC 22kW

### Étapes préparatoires pour l'intégration de la VersieCharge

1.  Installe l'application Sifinity Go sur ton téléphone portable

2.  Connecte maintenant ta borne de recharge à l'application (configuration via Bluetooth)

Version de firmware testée : V2.132.29

[App Store](https://apps.apple.com/us/app/sifinity-go/id989742892?l=de)

[Google Play](https://play.google.com/store/apps/details?id=com.siemens.VersiChargeSG&hl=de&gl=US)

![Siemens – illustration 7](/img/ocpp-ladestationen-siemens/07.png)

<div className="row">
<div className="col col--6 text--center">

![Siemens – illustration 8](/img/ocpp-ladestationen-siemens/08.png)

</div>
<div className="col col--6 text--center">

![Siemens – illustration 9](/img/ocpp-ladestationen-siemens/09.png)

</div>
</div>

3\. Ensuite, l'exploitant de la borne doit envoyer l'URL, y compris le numéro de série de la borne, à l'adresse e-mail suivante pour l'intégration :

[si.emobility.ch@siemens.com](mailto:si.emobility.ch@siemens.com). 

Siemens vous contactera rapidement pour une intégration réussie. 

## SiCharge D

Pour l'intégration de la SiCharge D, l'URL ainsi que le numéro de série de la borne doivent être envoyés à l'adresse e-mail suivante : 

[si.emobility.ch@siemens.com](mailto:si.emobility.ch@siemens.com)

Siemens vous contactera rapidement pour une intégration réussie. 

![Siemens – illustration 10](/img/ocpp-ladestationen-siemens/10.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de charge actuelle dans l'application. 

Tu peux le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Siemens – illustration 11](/img/ocpp-ladestationen-siemens/11.png)

![Siemens – illustration 12](/img/ocpp-ladestationen-siemens/12.png)
