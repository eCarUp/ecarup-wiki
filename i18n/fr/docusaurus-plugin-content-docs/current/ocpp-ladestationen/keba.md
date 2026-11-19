---
title: 'KEBA'
slug: '/ocpp-ladestationen/keba'
description: 'Guide d''intégration backend'
sidebar_label: 'KEBA'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-keba/01.png" bildtext="Keba P30" titel="Keba P30" href="https://www.keba.com/de/emobility/elektromobilitaet" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-keba/02.png" bildtext="Keba P40" titel="Keba P40" href="https://www.keba.com/de/emobility/elektromobilitaet" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge KEBA peuvent être intégrées en quelques étapes au système de décompte eCarUp. Une fois installées dans ton compte, tu peux définir toi-même, sans difficulté, les conditions d'utilisation de tes bornes (prix, utilisateurs, plages horaires disponibles, etc.). Tu décides qui peut recharger, quand et à quel prix. 

- Condition préalable pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvre ici davantage d'informations sur nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assure-toi que tes bornes de recharge sont installées et que ton PC ou ton téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvre le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connecte-toi avec les données de ton compte.

3.  Dans le menu à gauche, clique sur l'onglet « Bornes » (« Stationen »).

4.  Sélectionne l'onglet « OCPP ».

5.  Copie l'URL dans le presse-papiers.

1.ws Link ohne Basic Auth: Getestet und funktioniert

2.wss ohne Basic Auth: Getestet und funktioniert

3.wss mit Basic Auth: Getestet und funktioniert

6.  Va sur l'interface web de la borne souhaitée et colle l'URL copiée.

## Intégration de la Keba Wallbox P40

- version de firmware testée : 1.3.0 

Intègre la borne dans un réseau auquel tu peux accéder via l'adresse IP. 

<Embed src="https://demo.arcade.software/IYNbI7tB2YAuuK25c3KR?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.660" title="Wiki - KEBA" />

1.  Ouvre l'adresse IP de la borne dans le navigateur

2.  Connecte-toi :

Mot de passe par défaut : fourni avec le mode d'emploi.

3.  Effectue maintenant les paramètres suivants sous OCPP :

Chargepoint Identity : « nom de la borne »

Attention : le nom de la borne (Chargepoint Identity) ne doit contenir ni espace ni caractère spécial, à l'exception du tiret bas « \_ ». Après une intégration réussie, la borne peut être renommée sans problème sur la plateforme eCarUp.

OCPP Communication Type: "OCPP 1.6 JSON"

Central System Hostname: "www.ecarup.com"

Central System Port: "80"

Central System Path: "api/Ocpp16/xxxxxxxx

4.  Clique sur « Apply ».

![KEBA – Illustration 3](/img/ocpp-ladestationen-keba/03.png)

5\. Authorization sur « ON »

6\. Online Authorization Mode « FirstOnline ».

7\. Clique sur « Apply »

![KEBA – Illustration 4](/img/ocpp-ladestationen-keba/04.png)

<div className="row">
<div className="col col--8">

Si tu souhaites connecter la borne avec WSS et Basic Auth, tu dois effectuer les paramètres suivants dans l'application Keba :

- Connexion sécurisée au système central pour WSS

- Authentification du système central pour Basic Auth.

La clé d'autorisation (Authorization Key) doit être récupérée dans le compte eCarUp et être en plus saisie dans le portail web.

</div>
<div className="col col--4 text--center">

![KEBA – Illustration 5](/img/ocpp-ladestationen-keba/05.png)

</div>
</div>

Contrôle

![KEBA – Illustration 6](/img/ocpp-ladestationen-keba/06.png)

![KEBA – Illustration 7](/img/ocpp-ladestationen-keba/07.png)

## Intégration de la Keba Wallbox P30 X Series

<Video src="db3zpnosgv8" title="Vidéo YouTube, intégrer une borne KEBA au backend eCarUp" />

### KEBA : métrologie et étalonnage légal en Allemagne

Avec les bornes de recharge KEBA ME, eCarUp permet de décompter simplement par carte de crédit les sessions de recharge semi-publiques et publiques, conformément aux prescriptions en vigueur en matière de métrologie et d'étalonnage légal. Plus d'informations : [Étalonnage légal en Allemagne](/sonstige-informationen/eichrecht-in-deutschland).

### Important : tenir compte de la circulaire Keba

![KEBA – Illustration 8](/img/ocpp-ladestationen-keba/08.png)

![KEBA – Illustration 9](/img/ocpp-ladestationen-keba/09.png)

### Important : version du firmware !

Pour pouvoir installer ta borne de recharge KEBA x-series (également M&E / version du firmware : 1.9.1 ou plus récente / dernier logiciel toujours disponible dans les [téléchargements KEBA](https://www.keba.com/de/emobility/service-support/downloads/downloads)) dans un compte eCarUp, les préparatifs suivants doivent être effectués :

### Intégration de la x-series

1.  Connectez votre ordinateur à l'adresse IP de la borne. L'adresse IP s'affiche sur l'écran de la borne.

2.  Connecte-toi :

Nom d'utilisateur par défaut : admin

Mot de passe par défaut : Keba\_xxxx (numéro de série de la borne)

3.  Effectue maintenant les paramètres suivants sous OCPP :

Chargepoint Identity : « nom de la borne »

Attention : le nom de la borne (Chargepoint Identity) ne doit contenir ni espace ni caractère spécial, à l'exception du tiret bas « \_ ». Après une intégration réussie, la borne peut être renommée sans problème sur la plateforme eCarUp.

OCPP Communication Type: "OCPP 1.6 JSON"

Central System Hostname: "www.ecarup.com"

Central System Port: "80"

Central System Path: "api/Ocpp16/&#123;code von der eCarUp Webseite&#125;". Tu as enregistré celui-ci à l'étape trois de la préparation (voir ci-dessus).

![KEBA – Illustration 10](/img/ocpp-ladestationen-keba/10.png)

4\. Configuration des appareils

Menu : Configuration --> Appareils (le chargement de la page prend un peu de temps)

Autorisation : ON

Online Authorization Mode : First Online

![KEBA – Illustration 11](/img/ocpp-ladestationen-keba/11.png)

Remarque : si ton entreprise prend en charge un proxy dans le système, tu peux effectuer ces paramètres directement sur la borne KEBA. 

La borne de recharge KEBA x-series est maintenant enregistrée dans ton compte eCarUp. Tu peux maintenant définir les conditions d'utilisation de la borne de recharge dans le portail web eCarUp.

### Intégration de la c-series

Les bornes de recharge KEBA c-series peuvent être installées comme esclaves des bornes de recharge KEBA x-series. Comme pour la x-series, tu peux définir toi-même, sans difficulté, les conditions d'utilisation de tes bornes dès qu'elles sont installées dans ton compte. Tu décides qui peut recharger, quand et à quel prix.

1.  Place le commutateur DIP « DSW2.5 » de la borne esclave sur « On »

![KEBA – Illustration 12](/img/ocpp-ladestationen-keba/12.png)

<div className="row">
<div className="col col--6">

2\. Connecte ton ordinateur à l'adresse IP du maître – la borne de recharge KEBA x-series.

Nom d'utilisateur par défaut : admin

Mot de passe par défaut : numéro de série de la borne de recharge KEBA x-Series

3. Effectue maintenant les paramètres suivants sous OCPP :

1.  Passe sous Operation Mode sur Charging Network

2.  Indique le nombre d'esclaves

3.  Saisis le numéro de série des esclaves

</div>
<div className="col col--6 text--center">

![KEBA – Illustration 13](/img/ocpp-ladestationen-keba/13.png)

</div>
</div>

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle de téléversement des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon de mieux calculer et afficher la puissance de charge actuelle dans l'application. 

Tu peux le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![KEBA – Illustration 14](/img/ocpp-ladestationen-keba/14.png)

![KEBA – Illustration 15](/img/ocpp-ladestationen-keba/15.png)
