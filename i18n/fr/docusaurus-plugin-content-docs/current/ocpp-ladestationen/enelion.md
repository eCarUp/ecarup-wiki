---
title: 'Enelion'
slug: '/ocpp-ladestationen/enelion'
description: 'Guide d''intégration backend'
sidebar_label: 'Enelion'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-enelion/01.jpg" bildtext="Enelion Lumina" titel="Lumina" href="https://enelion.com/product/lumina/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-enelion/02.png" bildtext="Enelion Vertica" titel="Vertica" href="https://enelion.com/product/vertica/" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Enelion peuvent être intégrées au système de décompte eCarUp en quelques étapes. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes de recharge (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix. 

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes de recharge](/stationsbetreiber/webportal)

- Apprenez-en plus sur nos [fonctions Premium](/funktionen)

### Intégration de bornes de recharge OCPP

1.  Assurez-vous que votre borne de recharge est installée et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Stationen » (Stations).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Rendez-vous sur l'interface web de la borne de recharge souhaitée et collez-y l'URL copiée.

## Enelion Lumina

### Étapes préparatoires pour l'intégration de la Lumina

1.  Allumez votre Lumina

2.  Utilisez pour cela un smartphone et ouvrez vos paramètres WLAN

3.  Sélectionnez le hotspot de la wallbox Lumina\-(Enelion-xxxx-xxx)

4.  Ouvrez le navigateur de votre smartphone et saisissez l'adresse IP suivante : 192.168.8.8

5.  La page de configuration Enelion s'ouvre

6.  Saisissez le mot de passe demandé. Vous le trouvez sur le courrier d'Enelion fourni avec la borne 

### Étape 1

<div className="row">
<div className="col col--6">

- Sous Network, la borne de recharge peut être connectée au WLAN ou au GSM.

</div>
<div className="col col--6 text--center">

![Enelion – Illustration 3](/img/ocpp-ladestationen-enelion/03.png)

</div>
</div>

### Étape 2

- Sous Charger, sélectionnez « Authorization »

![Enelion – Illustration 4](/img/ocpp-ladestationen-enelion/04.png)

### Étape 3

- Retirez le mode FreeCharge et enregistrez

![Enelion – Illustration 5](/img/ocpp-ladestationen-enelion/05.png)

### Étape 4

- Sous OCPP, sélectionnez « Connection »

![Enelion – Illustration 6](/img/ocpp-ladestationen-enelion/06.png)

### Étape 5

- Activez OCPP Connection

- Sous Connection settings :

1.  Réglez Device sur Master

2.  Connector ID 1

3.  Freecharge idTAg ne doit pas être vide. Un badge maître peut y être enregistré (liste blanche) ou, si cela n'a pas d'importance, procédez comme dans l'exemple de la capture d'écran

4.  Enregistrez votre URL eCarUp issue du compte

5.  Charge Point ID ne doit pas non plus être vide et peut être libellé individuellement. (Attention : 20 caractères maximum et pas d'espace)

\+ Enregistrer et redémarrer

Contrôlez l'état de la connexion de la borne de recharge dans le tableau de bord. 

<div className="row">
<div className="col col--6 text--center">

![Enelion – Illustration 7](/img/ocpp-ladestationen-enelion/07.png)

</div>
<div className="col col--6 text--center">

![Enelion – Illustration 8](/img/ocpp-ladestationen-enelion/08.png)

</div>
</div>

### Enelion Vertica et Wallbox Duo

- firmwareVersion":"4.4.4

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne de recharge à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon pour nous de mieux calculer et afficher la puissance de charge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Enelion – Illustration 9](/img/ocpp-ladestationen-enelion/09.png)

![Enelion – Illustration 10](/img/ocpp-ladestationen-enelion/10.png)
