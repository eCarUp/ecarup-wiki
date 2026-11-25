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

Les bornes de recharge Weidmüller peuvent être intégrées en quelques étapes dans le système de décompte eCarUp. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions Premium](/funktionen)


### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stationen » (Stations).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.


## Intégration des bornes de recharge Weidmüller

### AC-Smart Advance

- Processus d'abandon de la gamme par Weidmüller à partir de 01/2025 pour ce matériel


- Ouvrez les paramètres réseau et Internet de votre PC

- Vous devez y attribuer une adresse IP statique, p. ex. 192.168.0.72

- Connectez ensuite votre PC à la wallbox et ouvrez dans le navigateur l'IP « par défaut » suivante : 192.168.0.8 

- Veuillez consulter le guide fourni pour les données de connexion

- La version du logiciel doit être au minimum 01.08.01

- Important : avec la version actuelle, la puissance de recharge active ne peut pas être affichée dans l'application !


![Weidmüller – illustration 3](/img/ocpp-ladestationen-weidmueller/03.png)

1.  Activer « Enable OCPP »

2.  Interface : un support de communication au choix peut être sélectionné

3.  Portal address = [www.ecarup.com](http://www.ecarup.com)

4.  Portal port = 80 (port standard sortant)

5.  Portal path = api/Ocpp16/xxxxxxxxxx/numéro de série de la borne


Exemple : api/Ocpp16/we2eb484wrgwoir/0123456789

6.  Heartbeat Intervall 60s

7.  MeterValue sample Interval 60s


![Weidmüller – illustration 4](/img/ocpp-ladestationen-weidmueller/04.png)

8\. Enable charging = Disabled

9\. Freemode = non actif

10\. RFID = actif

11\. Website, Modbus RTU/TCP and APP = actif

Redémarrez la borne. 

### Weidmüller (modèle précédent avec contrôleur Wallbe)

- Ouvrez les paramètres réseau et Internet de votre PC

- Vous devez y attribuer une adresse IP statique, p. ex. 192.168.0.72

- Connectez ensuite votre PC à la wallbox et ouvrez dans le navigateur l'IP « par défaut » suivante : 192.168.0.8 & PW: wallbe7213

- Le firmware doit être au minimum en version : BF-01.04.20


### Interface web

### Backend

- Allez dans le menu « Network »

- Sélectionnez OCPP-J 1.6

- Support souhaité pour la communication

- OCPP Vendor ne doit pas contenir d'espace

- Le websocket doit être décomposé


### Websocket d'eCarUp

- À renseigner d'après la capture d'écran

- Veuillez faire attention à la fin : api/Ocpp16/weoih48zlkuhr9/00000010638




- Important : ne pas oublier à la fin le / (slash) + 00000010638 (numéro de série de la borne) !


![Weidmüller – illustration 5](/img/ocpp-ladestationen-weidmueller/05.png)

Vous trouvez le numéro de série de votre wallbox comme suit :

![Weidmüller – illustration 6](/img/ocpp-ladestationen-weidmueller/06.png)

Si des cartes RFID sont utilisées, veuillez encore définir le paramètre suivant :

![Weidmüller – illustration 7](/img/ocpp-ladestationen-weidmueller/07.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de recharge actuelle dans l'application. 



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Weidmüller – illustration 8](/img/ocpp-ladestationen-weidmueller/08.png)

![Weidmüller – illustration 9](/img/ocpp-ladestationen-weidmueller/09.png)
