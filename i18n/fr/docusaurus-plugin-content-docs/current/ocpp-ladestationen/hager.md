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

Les bornes de recharge Hager peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans ton compte, tu peux définir toi-même, sans complication, les conditions d'utilisation de tes bornes (tarifs, utilisateurs, plages horaires disponibles, etc.). Tu décides qui peut recharger, quand et à quel tarif. 

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvre ici-même davantage sur nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assure-toi que tes bornes de recharge sont installées et que ton PC ou ton téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvre le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connecte-toi avec les données de ton compte.

3.  Dans le menu à gauche, clique sur l'onglet « Stations » (Stationen).

4.  Sélectionne l'onglet « OCPP ».

5.  Copie l'URL dans le presse-papiers.

    1.  Lien ws sans Basic Auth : testé et fonctionne

    2.  wss sans Basic Auth : testé et fonctionne

    3.  wss avec Basic Auth : testé et fonctionne

6.  Va sur l'interface web de la borne souhaitée et colle l'URL copiée.

## Intégration de la Hager witty park 2

- version de firmware testée : V1.1.0.11

1.  Connecte-toi à la borne Hager via LAN ou WLAN (les détails de la connexion figurent dans les instructions d'installation).

2.  Masque de connexion (les données de connexion nécessaires figurent également dans les instructions d'installation).

3.  Comme pour l'intégration de la Hager witty pro, tu peux saisir ton URL eCarUp de la même manière. [Lien](/ocpp-ladestationen/hager#intégration-de-la-hager-witty-pro)

4\. Si tu souhaites encore personnaliser l'écran, tu peux le faire sous « Bornes de recharge » (Ladestationen), puis sous « Écran » (Bildschirm). 

![Hager – Figure 4](/img/ocpp-ladestationen-hager/04.png)

5. Astuce : tu peux faire projeter les codes QR directement sur l'écran de la borne via OCPP. 

- Au moyen de ChangeConfiguration via l'outil de maintenance, tu peux envoyer la commande suivante :

\[2, "b1a70001-6e37-b9a9-d242-a5f2e0ab6860", "ChangeConfiguration", &#123;"key":"HagerQrCodeURL1","value":"[https://admin.ecarup.com/instant-payment?serial=I3M264mupkyqFp4fu21QTqZeY](https://admin.ecarup.com/instant-payment?serial=I3M264mupkyqFp4fu21QTqZeY)"&#125;\]

- Tu trouveras ici comment obtenir l'URL : [Lien](/stationsbetreiber/qr-code)

- Tout sur l'outil de maintenance ici : [Lien](/funktionen/wartung)

Exemple :

![Hager – Figure 5](/img/ocpp-ladestationen-hager/05.jpg)

![Hager – Figure 6](/img/ocpp-ladestationen-hager/06.png)

## Intégration de la Hager witty pro

- XVL122SCH et XVL122CCH

- version de firmware testée : V1.1.5.3

1.  Connecte-toi à la borne Hager via LAN ou WLAN (les détails de la connexion figurent dans les instructions d'installation).

2.  Masque de connexion (les données de connexion nécessaires figurent également dans les instructions d'installation).

3.  Sous l'option de menu Charging Station, tu peux régler la connexion souhaitée. 

4\. Sous Access Management, le Charge Point Operator peut être ajouté. 

5\. Serveur OCPP : l'URL de ton compte, p. ex. wss://www.ecarup.com/api/Ocpp16/D037xxxxxxxxxx

6\. L'ID du point de recharge (ChargePoint-ID) peut rester sur les valeurs par défaut.

 7\. Type d'authentification sur Aucun.

8\. Enregistrer et redémarrer

![Hager – Figure 7](/img/ocpp-ladestationen-hager/07.png)

![Hager – Figure 8](/img/ocpp-ladestationen-hager/08.png)

Optionnel : wss + Basic Auth. 

![Hager – Figure 9](/img/ocpp-ladestationen-hager/09.png)

## Gestionnaire de charge Hager

XEM 520

Important : la version de firmware LLM\_2023\_098 doit être présente. 

1.  Connecte-toi au gestionnaire de charge.

2.  Clique sur l'option de menu Bornes de recharge (Ladestationen).

3.  Recherche la borne de recharge et configure l'appartenance de phase.

4.  Va sur Borne de recharge (Ladestation), active Exploitant de la borne de recharge CPO (Ladestationsbetreiber CPO), puis clique sur Paramètres (Einstellungen).

![Hager – Figure 10](/img/ocpp-ladestationen-hager/10.png)

5\. Sélectionne eCarUp dans la liste et ajoute ton ID eCarUp (pas l'URL entière).

p. ex. (ws://www.ecarup.com/api/Ocpp16/) D037xxxxxxxxxx

Clique ensuite sur Suivant (weiter). 

![Hager – Figure 11](/img/ocpp-ladestationen-hager/11.png)

6. Ajoute le numéro de série de la borne de recharge dans le champ OCPP ID. 

7\. Clique maintenant sur Se connecter au serveur CPO (Verbinden zum CPO Server).

8\. La borne redémarre. 

![Hager – Figure 12](/img/ocpp-ladestationen-hager/12.png)

Contrôle final

![Hager – Figure 13](/img/ocpp-ladestationen-hager/13.png)

## Intégration de la Hager witty plus

<div className="row">
<div className="col col--6">

- XVL122S et XVL122C

- version de firmware testée : V1.1.1.6

- Installe pour cela l'application Hager Charge

</div>
<div className="col col--6 text--center">

![Hager – Figure 14](/img/ocpp-ladestationen-hager/14.png)

</div>
</div>

1.  ### Activer le couplage

![Hager – Figure 15](/img/ocpp-ladestationen-hager/15.png)

### 2\. Ajouter la borne

![Hager – Figure 16](/img/ocpp-ladestationen-hager/16.png)

Ajoute un réseau à la borne de recharge

### 3.

![Hager – Figure 17](/img/ocpp-ladestationen-hager/17.png)

### 4.

![Hager – Figure 18](/img/ocpp-ladestationen-hager/18.png)

### 5.

![Hager – Figure 19](/img/ocpp-ladestationen-hager/19.png)

### 6.

![Hager – Figure 20](/img/ocpp-ladestationen-hager/20.png)

### 7.

![Hager – Figure 21](/img/ocpp-ladestationen-hager/21.png)

- Ajoute ton URL eCarUp dans le champ d'adresse. 

- OCPP ID : saisis ici le numéro de série de la borne. 

- Enregistrer. 

## Intégration de la Hager witty share

- XEV1R22T2

- a été retirée du catalogue par Hager. 

<Video src="g2omgn1jWo0" title="Vidéo YouTube, guide d'intégration Hager dans le backend eCarUp" />

Guide rapide d'intégration d'une borne Hager dans le backend eCarUp

1.  Connecte-toi à la borne Hager via LAN ou WLAN (les détails de la connexion figurent dans les instructions d'installation).

2.  Masque de connexion (les données de connexion nécessaires figurent également dans les instructions d'installation).

- Nom d'utilisateur : admin

- MDP : 1234

3.  Sous Configuration, tu peux effectuer les réglages LAN et/ou WLAN.

4.  Sous Protocole, règle le type sur OCPP et le mode d'autorisation sur OCPP complet. 

5.  Serveur OCPP : l'URL de ton compte, p. ex. ws://www.ecarup.com/api/Ocpp16/D037xxxxxxxxxx

6.  L'ID du point de recharge (ChargePoint-ID) peut rester sur les valeurs par défaut. 

7.  Type d'authentification sur Aucun.

8.  Enregistrer et redémarrer

### 2\. Étape : se connecter

![Hager – Figure 22](/img/ocpp-ladestationen-hager/22.png)

### 3\. Étape : configurer les paramètres WLAN et LAN

![Hager – Figure 23](/img/ocpp-ladestationen-hager/23.png)

### 4.-7. Étape : saisir et adapter les entrées

![Hager – Figure 24](/img/ocpp-ladestationen-hager/24.png)

### 8\. Étape : enregistrer et redémarrer.

## Réglage avancé via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de charge actuelle dans l'application. 

Tu peux le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Hager – Figure 26](/img/ocpp-ladestationen-hager/26.png)
