---
title: 'Zaptec'
slug: '/ocpp-ladestationen/zaptec'
description: 'Guide d''intégration backend'
sidebar_label: 'Zaptec'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-zaptec/01.jpg" bildtext="Zaptec Go" titel="Zaptec Go" href="https://www.zaptec.com/de-ch" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-zaptec/02.jpg" bildtext="Zaptec Pro" titel="Zaptec Pro" href="https://www.zaptec.com/de-ch" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Zaptec peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (tarifs, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel tarif.

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Apprenez-en plus sur nos [fonctions Premium](/funktionen)


### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stationen » (Stations).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Rendez-vous sur l'interface web de la borne souhaitée et collez-y l'URL copiée.


## Intégration des bornes de recharge Zaptec

La borne Zaptec peut en outre transmettre les valeurs de 15 minutes à smart-me. Pour en savoir plus, consultez la page [Importation de données de 15 minutes](/funktionen/15-minuten-datenimport).

[![Zaptec – Illustration 3](/img/ocpp-ladestationen-zaptec/03.jpg)](https://youtu.be/jK-UypywXZU)

Vidéo explicative de l'intégration de Zaptec dans le backend eCarUp

## Zaptec Go et Pro

### Installation du portail Zaptec

1.  Rendez-vous sur le [portail web Zaptec](https://portal.zaptec.com/) et connectez-vous.

2.  Dans la barre de menu en haut, sélectionnez « Installationen » (Installations) puis le groupe de bornes Zaptec souhaité pour l'intégration dans le système de décompte eCarUp.

3.  Sélectionnez à présent « Einstellungen » (Paramètres), puis « Authentifizierung » (Authentification) dans le sous-menu.

4.  Vous voyez l'interface de menu suivante :


5\. Activez le champ « OCPP 1.6 Authentifizierung » (authentification OCPP 1.6)

6\. Sous « URL », saisissez l'URL OCPP que vous avez obtenue lors des préparatifs dans le portail eCarUp. 

Attention : l'URL doit encore être complétée par / & &#123;deviceid&#125;

- Exemple : ws://www.ecarup.com/api/Ocpp16/wei948gfhwe/&#123;deviceid&#125;


7\. Activez le champ « Authorization required » puis cliquez enfin sur « Speichern » (Enregistrer)

⚠️ Important : la borne doit être redémarrée. 

Les chargeurs Zaptec du groupe sélectionné sont désormais enregistrés dans votre compte eCarUp en tant que bornes de recharge et peuvent être configurés selon vos conditions d'utilisation individuelles.

![Zaptec – Illustration 4](/img/ocpp-ladestationen-zaptec/04.png)

### Décompter un chargeur Zaptec dans un système multitarif

Les valeurs de 15 minutes de la borne Zaptec peuvent être exportées. Cela permet des structures tarifaires étendues, comme des décomptes RCP ou des systèmes multitarifs. Pour en savoir plus, consultez la page [Importation de données de 15 minutes](/funktionen/15-minuten-datenimport).

## Sans authentification + recharge hors ligne

Connectez vos bornes Zaptec à eCarUp comme d'habitude via l'installation (étapes 5 à 7).

1.  Si ce n'est pas déjà fait, enregistrez un conducteur.

2.  Rendez-vous ensuite sur la borne de recharge.

3.  Désactivez l'authentification.

4.  Ajoutez un ID tag par défaut de votre conducteur. 


Important : le token RFID doit également être enregistré dans eCarUp sous le conducteur. Vous trouverez plus d'informations à ce sujet ici : [LINK](/fahrer/rfid-nfc-tags-carid)

![Zaptec – Illustration 5](/img/ocpp-ladestationen-zaptec/05.png)

Ce qui se passe :

Si aucun token n'est enregistré, eCarUp envoie un message « Invalid », car l'ID tag est vide. En tant que backend, nous devons pouvoir valider à tout moment qui s'autorise. 

![Zaptec – Illustration 6](/img/ocpp-ladestationen-zaptec/06.png)

Si un token est enregistré chez Zaptec, eCarUp envoie un message « Accepted », car l'ID tag est désormais transmis. La recharge est tout de même enregistrée dans eCarUp. 

![Zaptec – Illustration 7](/img/ocpp-ladestationen-zaptec/07.png)

La recharge peut désormais aussi être effectuée en mode hors ligne. La borne nous renvoie la transaction hors ligne dès qu'elle est de nouveau en ligne. 

![Zaptec – Illustration 8](/img/ocpp-ladestationen-zaptec/08.png)

L'avantage est que le conducteur peut également être facturé a posteriori (si configuré ainsi).

## Plusieurs propriétaires de bornes eCarup sur une même installation Zaptec ?

### Oui, c'est possible !

Procédez comme suit :

1.  Sur l'installation, réglez l'authentification sur OCPP 1.6J comme d'habitude.

2.  Laissez le champ de l'URL vide.

3.  Cochez la case « Authentification requise ».

4.  Rendez-vous ensuite sur la borne : dans les paramètres, vous pouvez y enregistrer l'URL individuelle avec le numéro de série de la borne Zaptec. 

5.  Enregistrez.


![Zaptec – Illustration 9](/img/ocpp-ladestationen-zaptec/09.png)

![Zaptec – Illustration 10](/img/ocpp-ladestationen-zaptec/10.png)

### Liens

[Enregistrement du webinaire Bornes de recharge Zaptec dans le backend eCarUp](https://web.ecarup.com/webinar-zaptec-stationen-mit-ecarup-backend/)

[Importation de données de 15 minutes](/funktionen/15-minuten-datenimport)

[Fonctions de la wallbox Zaptec dans le backend eCarUp](https://web.ecarup.com/backend/novavolt-zaptec-charger-abrechnen/)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon de mieux calculer et afficher la puissance de recharge actuelle dans l'app. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Zaptec – Illustration 11](/img/ocpp-ladestationen-zaptec/11.png)

![Zaptec – Illustration 12](/img/ocpp-ladestationen-zaptec/12.png)
