---
title: 'Garo'
slug: '/ocpp-ladestationen/garo'
description: 'Guide d''intégration backend'
sidebar_label: 'Garo'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-garo/01.jpg" bildtext="Garo Wallbox GLB+" titel="Wallbox GLB+" href="https://www.garo.se/en/products/wallbox" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-garo/02.png" bildtext="Garo Entity Pro" titel="Entity Pro" href="https://www.garo.se/en/products/wallbox" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-garo/03.jpg" bildtext="Garo LS4 Compact" titel="LS4 Compact" href="https://www.garo.se/en/products/wallbox" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Garo peuvent être intégrées au système de décompte eCarUp en quelques étapes. Une fois installées dans ton compte, tu peux définir toi-même, très simplement, les conditions d'utilisation de tes bornes (prix, utilisateurs, plages horaires disponibles, etc.). Tu décides qui peut recharger, quand et à quel prix. 

- Condition préalable : l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvre ici plus de détails sur nos [fonctions premium](/funktionen)

### Intégration de bornes OCPP

1.  Assure-toi que tes bornes de recharge sont installées et que ton PC ou ton téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvre le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connecte-toi avec les données de ton compte.

3.  Dans le menu à gauche, clique sur l'onglet « Stationen » (Stations).

4.  Sélectionne l'onglet « OCPP ».

5.  Copie l'URL dans le presse-papiers.

6.  Va sur l'interface web de la borne souhaitée et colle l'URL copiée.

## Intégration des bornes de recharge Garo

<Video src="Jj_6G8k8nus" title="Vidéo YouTube, guide d'intégration de GARO dans le backend eCarUp" />

## Intégration de la Garo Entity Pro

Installe ici l'application Garo Connect.  

### Version testée

- Version du firmware 1.8.8

![Garo – Illustration 4](/img/ocpp-ladestationen-garo/04.png)

### Étape 1

Suis le guide fourni étape par étape et scanne le code QR sur la plaque arrière. 

⚠️ Important : ton téléphone et la borne de recharge doivent se trouver dans le même réseau (LAN ou WLAN).

### Étape 2

<div className="row">
<div className="col col--6">

Dans les paramètres généraux, assure-toi qu'aucun plan de recharge du véhicule et aucune utilisation gratuite ne sont activés.

</div>
<div className="col col--6 text--center">

![Garo – Illustration 5](/img/ocpp-ladestationen-garo/05.png)

</div>
</div>

### Étape 3

<div className="row">
<div className="col col--6">

Dans l'aperçu de l'installation, sélectionne le champ « Drittanbieter » (Fournisseur tiers).

</div>
<div className="col col--6 text--center">

![Garo – Illustration 6](/img/ocpp-ladestationen-garo/06.png)

</div>
</div>

### Étape 4

<div className="row">
<div className="col col--6">

Notre recommandation : sélectionner StopTransactionPnEVSideDisconnecet + UnlockConnectorOnEVSideDisconnect.

</div>
<div className="col col--6 text--center">

![Garo – Illustration 7](/img/ocpp-ladestationen-garo/07.png)

</div>
</div>

### Étape 5

<div className="row">
<div className="col col--6">

Pour la connexion OCPP, le DeviceId peut être choisi librement.

Dans le champ CsmsUrl, tu peux ajouter ton URL issue de ton compte eCarUp.

</div>
<div className="col col--6 text--center">

![Garo – Illustration 8](/img/ocpp-ladestationen-garo/08.png)

</div>
</div>

### Étape 5.1

<div className="row">
<div className="col col--6">

L'URL peut être copiée telle quelle, sans modification.

N'oublie pas d'enregistrer et de redémarrer !

</div>
<div className="col col--6 text--center">

![Garo – Illustration 9](/img/ocpp-ladestationen-garo/09.png)

</div>
</div>

### Remarque

<div className="row">
<div className="col col--6">

Sur la borne de recharge, l'utilisateur peut encore définir ce qu'elle doit faire dans l'état « Nicht verbunden » (Non connecté). Nous recommandons de ne rien activer.

</div>
<div className="col col--6 text--center">

![Garo – Illustration 10](/img/ocpp-ladestationen-garo/10.png)

</div>
</div>

## Intégration de la Garo GLB+ et de la LS4 Compact

### 1\. Connecter le notebook au contrôleur Bender par câble USB :

⚠️ Important : utiliser l'interface Micro-USB

![Garo – Illustration 11](/img/ocpp-ladestationen-garo/11.png)

### 2\. Ouvrir le navigateur sur le notebook

Saisis l'URL suivante : http://192.168.123.123/operator/

- Nom d'utilisateur par défaut : operator

- Mot de passe par défaut : yellow\_zone

### 3\. Vérifier la version du firmware :

<div className="row">
<div className="col col--8">

La version 4.00-2139 au minimum doit être installée.

Sous State →  Firmware Version, tu trouves la version la plus récente.

Effectuer la mise à jour du firmware :

a) Copier le fichier du firmware sur une clé USB. Insérer la clé USB.

b) Redémarrer le contrôleur Bender

</div>
<div className="col col--4 text--center">

![Garo – Illustration 12](/img/ocpp-ladestationen-garo/12.png)

</div>
</div>

### 4\. Configurer le Bender

OCPP Mode: OCPP-J 1.6

WebSocket JSON OCPP URL: ws://www.ecarup.com/api/Ocpp16/&#123;ecarupID&#125;/

Exemple : ws://www.ecarup.com/api/Ocpp16/D8D2AFE54EF4D508/

Important : après l'URL OCPP d'eCarUp, il faut ajouter un « / » (comme indiqué dans l'exemple). De plus, aucun caractère spécial ne doit figurer dans le champ « ChargePoint ID (OCPP) ».

![Garo – Illustration 13](/img/ocpp-ladestationen-garo/13.png)

### Nouvelle interface Bender

Si tu as l'interface web suivante, tu trouveras le guide dans l'article suivant 

- [Guide](/ocpp-ladestationen/webasto)

![Garo – Illustration 14](/img/ocpp-ladestationen-garo/14.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle de 30 à 60 s. C'est la seule manière de calculer et d'afficher plus précisément dans l'application la puissance de recharge actuelle. 

Tu peux la modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![Garo – Illustration 15](/img/ocpp-ladestationen-garo/15.png)

![Garo – Illustration 16](/img/ocpp-ladestationen-garo/16.png)
