---
title: 'Weidmüller'
slug: '/ocpp-ladestationen/weidmueller'
description: 'Guide d''intégration backend'
sidebar_label: 'Weidmüller'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-weidmueller/01.jpg" bildtext="Weidmüller AC-Smart Advance" titel="AC-Smart Advance" href="https://www.weidmueller.de/de/produkte/elektronik/wallbox/index.jsp?gclid=CjwKCAjw2K6lBhBXEiwA5RjtCbAmZOvWrCNlfC8cwdbzRLt3y6OgvMq4_sHL43wfaHOBy_34iB-q9BoC7WUQAvD_BwE" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-weidmueller/02.jpg" bildtext="Weidmüller Wallbox" titel="Wallbox" href="https://www.weidmueller.de/de/produkte/elektronik/wallbox/index.jsp?gclid=CjwKCAjw2K6lBhBXEiwA5RjtCbAmZOvWrCNlfC8cwdbzRLt3y6OgvMq4_sHL43wfaHOBy_34iB-q9BoC7WUQAvD_BwE" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Weidmüller peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans ton compte, tu peux définir toi-même, sans complication, les conditions d'utilisation de tes bornes (prix, utilisateurs, plages horaires disponibles, etc.). Tu décides qui peut recharger, quand et à quel prix. 

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- En savoir plus sur nos [fonctions Premium](/funktionen)


### Intégration de bornes OCPP

1.  Assure-toi que tes bornes de recharge sont installées et que ton PC ou ton téléphone est connecté au même réseau que la borne de recharge.

2.  Ouvre le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connecte-toi avec les données de ton compte.

3.  Dans le menu à gauche, clique sur l'onglet « Stationen » (Stationen).

4.  Sélectionne l'onglet « OCPP » (OCPP).

5.  Copie l'URL dans le presse-papiers.

6.  Va dans l'interface web de la borne souhaitée et colle l'URL copiée.


## Intégration des bornes de recharge Weidmüller

### AC-Smart Advance

- Processus d'abandon de Weidmüller pour ce matériel à partir de 01/2025


- Ouvre les paramètres réseau et Internet de ton PC

- Tu dois y attribuer une adresse IP statique, p. ex. 192.168.0.72

- Connecte ensuite ton PC à la wallbox et ouvre dans le navigateur l'IP « par défaut » suivante : 192.168.0.8 

- Pour les données de connexion, merci de te référer au guide fourni

- La version du logiciel doit être au minimum 01.08.01

- Important : avec la version actuelle, la puissance de charge active ne peut pas être affichée dans l'app !


![Weidmüller – illustration 3](/img/ocpp-ladestationen-weidmueller/03.png)

1.  Activer Enable OCPP

2.  Interface : un moyen de communication quelconque peut être choisi ici

3.  Portal address = [www.ecarup.com](http://www.ecarup.com)

4.  Portal port = 80 (port sortant standard)

5.  Portal path = api/Ocpp16/xxxxxxxxxx/numéro de série de la borne


Exemple : api/Ocpp16/we2eb484wrgwoir/0123456789

6.  Heartbeat Intervall 60s

7.  MeterValue sample Interval 60s


![Weidmüller – illustration 4](/img/ocpp-ladestationen-weidmueller/04.png)

8\. Enable charging = Disabled

9\. Freemode = non actif

10\. RFID = actif

11\. Website, Modbus RTU/TCP and APP = actif

Redémarrer la borne. 

### Weidmüller (modèle précédent avec contrôleur Wallbe)

- Ouvre les paramètres réseau et Internet de ton PC

- Tu dois y attribuer une adresse IP statique, p. ex. 192.168.0.72

- Connecte ensuite ton PC à la wallbox et ouvre dans le navigateur l'IP « par défaut » suivante : 192.168.0.8 & PW: wallbe7213

- Le firmware doit être au minimum en version : BF-01.04.20


### Interface web

### Backend

- Va dans le menu « Network »

- Sélectionner OCPP-J 1.6

- Moyen de communication souhaité

- OCPP Vendor ne doit pas contenir d'espace

- Le websocket doit être scindé en plusieurs parties


### Websocket d'eCarUp

- À renseigner d'après la capture d'écran

- À la fin, veuille faire attention à : api/Ocpp16/weoih48zlkuhr9/00000010638




- Important : ne pas oublier à la fin le / (slash) + 00000010638 (numéro de série de la borne) !


![Weidmüller – illustration 5](/img/ocpp-ladestationen-weidmueller/05.png)

Tu trouves le numéro de série de ta wallbox comme suit :

![Weidmüller – illustration 6](/img/ocpp-ladestationen-weidmueller/06.png)

Si des cartes RFID sont utilisées, merci de définir en plus le paramètre suivant :

![Weidmüller – illustration 7](/img/ocpp-ladestationen-weidmueller/07.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de charge actuelle dans l'app. 



Tu peux le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Weidmüller – illustration 8](/img/ocpp-ladestationen-weidmueller/08.png)

![Weidmüller – illustration 9](/img/ocpp-ladestationen-weidmueller/09.png)
