---
title: 'Hager'
slug: '/ocpp-ladestationen/hager'
description: 'Guide d''intégration backend'
sidebar_label: 'Hager'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-hager/01.png" bildtext="Hager witty plus & pro" titel="Hager witty plus & pro" href="https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-hager/02.png" bildtext="Hager witty park 2" titel="Hager witty park 2" href="https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-hager/03.png" bildtext="Hager witty share" titel="Hager witty share" href="https://hager.com/de-ch/katalog/ladestation-fuer-elektrofahrzeuge-evcs/ladestationen?_gl=1*qlklly*_up*MQ..*_ga*MTIzODc0MzgyNC4xNzUxMjY5MTg3*_ga_PV0S9027V6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw*_ga_9H5STC0VW6*czE3NTEyNjkxODQkbzEkZzAkdDE3NTEyNjkxODQkajYwJGwwJGgw" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Hager peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (tarifs, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel tarif. 

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stations » (« Stationen »).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

    1.  Lien ws sans Basic Auth : testé et fonctionne

    2.  wss sans Basic Auth : testé et fonctionne

    3.  wss avec Basic Auth : testé et fonctionne

6.  Allez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration de la Hager witty park 2

- Version de firmware testée : V1.1.0.11

1.  Connectez-vous à la borne Hager via LAN ou WLAN (vous trouverez les détails de la connexion dans le guide d'installation)

2.  Écran de connexion (vous trouverez également les données de connexion nécessaires dans le guide d'installation.)

3.  Comme pour l'intégration de la Hager witty pro, vous pouvez saisir votre URL eCarUp de la même manière. [Lien](/ocpp-ladestationen/hager#intégration-de-la-hager-witty-pro)

4\. Si vous souhaitez encore personnaliser l'écran, vous pouvez le faire sous « Ladestationen » (« Ladestationen »), puis sous Écran (« Bildschirm »). 

![Hager – Illustration 4](/img/ocpp-ladestationen-hager/04.png)

5. Astuce : vous pouvez faire afficher les codes QR directement via OCPP sur l'écran de la borne. 

- Avec ChangeConfiguration via l'outil de maintenance, vous pouvez envoyer la commande suivante :

\[2, "b1a70001-6e37-b9a9-d242-a5f2e0ab6860", "ChangeConfiguration", &#123;"key":"HagerQrCodeURL1","value":"[https://admin.ecarup.com/instant-payment?serial=I3M264mupkyqFp4fu21QTqZeY](https://admin.ecarup.com/instant-payment?serial=I3M264mupkyqFp4fu21QTqZeY)"&#125;\]

- Vous trouverez ici comment obtenir l'URL : [Lien](/stationsbetreiber/qr-code)

- Tout sur l'outil de maintenance ici : [Lien](/funktionen/wartung)

Exemple :

![Hager – Illustration 5](/img/ocpp-ladestationen-hager/05.jpg)

![Hager – Illustration 6](/img/ocpp-ladestationen-hager/06.png)

## Intégration de la Hager witty pro

- XVL122SCH et XVL122CCH

- Version de firmware testée : V1.1.5.3

1.  Connectez-vous à la borne Hager via LAN ou WLAN (vous trouverez les détails de la connexion dans le guide d'installation)

2.  Écran de connexion (vous trouverez également les données de connexion nécessaires dans le guide d'installation.).

3.  Dans le menu Charging Station, vous pouvez régler la connexion souhaitée. 

4\. Sous Access Management, le Charge Point Operator peut être ajouté. 

5\. Serveur OCPP : l'URL de votre compte, p. ex.    wss://www.ecarup.com/api/Ocpp16/D037xxxxxxxxxx

6\. L'ID ChargePoint peut rester avec les réglages par défaut.

 7\. Type d'authentification : Aucune.

8\. Enregistrer et redémarrer

![Hager – Illustration 7](/img/ocpp-ladestationen-hager/07.png)

![Hager – Illustration 8](/img/ocpp-ladestationen-hager/08.png)

Facultatif : wss + Basic Auth. 

![Hager – Illustration 9](/img/ocpp-ladestationen-hager/09.png)

## Gestionnaire de charge Hager

XEM 520

Important : la version de firmware LLM\_2023\_098 doit être présente. 

1.  Connectez-vous au gestionnaire de charge

2.  Cliquez sur l'élément de menu Ladestationen (« Ladestationen »)

3.  Recherchez la borne de recharge et configurez l'appartenance de phase

4.  Allez à la borne de recharge et activez l'exploitant de borne CPO, puis cliquez sur Paramètres.

![Hager – Illustration 10](/img/ocpp-ladestationen-hager/10.png)

5\. Sélectionnez eCarUp dans la liste et ajoutez votre ID eCarUp (pas l'URL complète)

p. ex. (ws://www.ecarup.com/api/Ocpp16/) D037xxxxxxxxxx

puis cliquez de nouveau sur Suivant. 

![Hager – Illustration 11](/img/ocpp-ladestationen-hager/11.png)

6. Ajoutez le numéro de série de la borne de recharge dans le champ OCPP ID. 

7\. Cliquez maintenant sur Verbinden zum CPO Server (« Verbinden zum CPO Server »).

8\. La borne redémarre. 

![Hager – Illustration 12](/img/ocpp-ladestationen-hager/12.png)

Contrôle final

![Hager – Illustration 13](/img/ocpp-ladestationen-hager/13.png)

## Intégration de la Hager witty plus

<div className="row">
<div className="col col--6">

- XVL122S et XVL122C

- Version de firmware testée : V1.1.1.6

- Installez pour cela l'application Hager Charge

</div>
<div className="col col--6 text--center">

![Hager – Illustration 14](/img/ocpp-ladestationen-hager/14.png)

</div>
</div>

1.  ### Activer le couplage

![Hager – Illustration 15](/img/ocpp-ladestationen-hager/15.png)

### 2\. Ajouter une borne

![Hager – Illustration 16](/img/ocpp-ladestationen-hager/16.png)

Ajoutez un réseau à la borne de recharge

### 3.

![Hager – Illustration 17](/img/ocpp-ladestationen-hager/17.png)

### 4.

![Hager – Illustration 18](/img/ocpp-ladestationen-hager/18.png)

### 5.

![Hager – Illustration 19](/img/ocpp-ladestationen-hager/19.png)

### 6.

![Hager – Illustration 20](/img/ocpp-ladestationen-hager/20.png)

### 7.

![Hager – Illustration 21](/img/ocpp-ladestationen-hager/21.png)

- Ajoutez votre URL eCarUp dans le champ d'adresse. 

- OCPP ID : saisissez ici le numéro de série de la borne. 

- Enregistrer. 

## Intégration de la Hager witty share

- XEV1R22T2

- a été abandonnée par Hager. 

<Video src="g2omgn1jWo0" title="Vidéo YouTube, guide d'intégration Hager dans le backend eCarUp" />

Guide rapide d'intégration d'une borne Hager dans le backend eCarUp

1.  Connectez-vous à la borne Hager via LAN ou WLAN (vous trouverez les détails de la connexion dans le guide d'installation)

2.  Écran de connexion (vous trouverez également les données de connexion nécessaires dans le guide d'installation.).

- Nom d'utilisateur : admin

- Mot de passe : 1234

3.  Sous Configuration, vous pouvez effectuer les réglages LAN et/ou WLAN.

4.  Sous Protocole, réglez le type sur OCPP et le mode d'autorisation sur OCPP complet. 

5.  Serveur OCPP : l'URL de votre compte, p. ex. ws://www.ecarup.com/api/Ocpp16/D037xxxxxxxxxx

6.  L'ID ChargePoint peut rester avec les réglages par défaut. 

7.  Type d'authentification : Aucune.

8.  Enregistrer et redémarrer

### 2\. Étape : se connecter

![Hager – Illustration 22](/img/ocpp-ladestationen-hager/22.png)

### 3\. Étape : configurer les réglages WLAN et LAN

![Hager – Illustration 23](/img/ocpp-ladestationen-hager/23.png)

### 4.-7. Étape : saisir et adapter les données

![Hager – Illustration 24](/img/ocpp-ladestationen-hager/24.png)

### 8\. Étape : enregistrer et redémarrer.

## Réglages avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. Ce n'est qu'ainsi que nous pouvons mieux calculer et afficher la puissance de charge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Hager – Illustration 25](/img/ocpp-ladestationen-hager/25.png)

![Hager – Illustration 26](/img/ocpp-ladestationen-hager/26.png)
