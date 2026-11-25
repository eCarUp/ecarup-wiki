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

Les bornes de recharge KEBA peuvent être intégrées au système de décompte d'eCarUp en quelques étapes. Une fois installées dans votre compte, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes (prix, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel prix.

- Condition préalable : [intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions Premium](/funktionen)

### Intégration de bornes OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Bornes » (« Stationen »).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

1.ws Link ohne Basic Auth : testé et fonctionne

2.wss ohne Basic Auth : testé et fonctionne

3.wss mit Basic Auth : testé et fonctionne

6.  Accédez à l'interface web de la borne souhaitée et collez-y l'URL copiée.

## Intégration de la Keba Wallbox P40

- version de firmware testée : 1.3.0 

Intégrez la borne dans un réseau auquel vous pouvez accéder via l'adresse IP. 

<Embed src="https://demo.arcade.software/IYNbI7tB2YAuuK25c3KR?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.660" title="Wiki - KEBA" />

1.  Accédez dans le navigateur à l'adresse IP de la borne

2.  Connectez-vous :

Default Password : est fourni dans le mode d'emploi.

3.  Effectuez maintenant sous OCPP les paramètres suivants :

Chargepoint Identity: "Stationsnamen"

Attention : le nom de la borne (Chargepoint Identity) ne doit contenir ni espaces ni caractères spéciaux, à l'exception du tiret bas « \_ ». Après une intégration réussie, la borne peut être renommée sans problème sur la plateforme eCarUp.

OCPP Communication Type: "OCPP 1.6 JSON"

Central System Hostname: "www.ecarup.com"

Central System Port: "80"

Central System Path: "api/Ocpp16/xxxxxxxx

4.  Cliquez sur « Apply ».

![KEBA – Illustration 3](/img/ocpp-ladestationen-keba/03.png)

5\. Authorization sur « ON »

6\. Online Authorization Mode « FirstOnline ».

7\. Cliquez sur « Apply »

![KEBA – Illustration 4](/img/ocpp-ladestationen-keba/04.png)

<div className="row">
<div className="col col--8">

Si vous souhaitez connecter la borne avec WSS et Basic Auth, vous devez effectuer les paramètres suivants dans l'application Keba :

- Connexion sécurisée au système central pour WSS

- Authentification du système central pour Basic Auth.

L'Authorization Key doit être repris du compte eCarUp et être en plus saisi dans le portail web.

</div>
<div className="col col--4 text--center">

![KEBA – Illustration 5](/img/ocpp-ladestationen-keba/05.png)

</div>
</div>

Contrôle

![KEBA – Illustration 6](/img/ocpp-ladestationen-keba/06.png)

![KEBA – Illustration 7](/img/ocpp-ladestationen-keba/07.png)

## Intégration de la Keba Wallbox P30 X Serie

<Video src="db3zpnosgv8" title="Vidéo YouTube, intégrer une borne KEBA dans le backend eCarUp" />

### KEBA : métrologie et étalonnage en Allemagne

Avec les bornes de recharge KEBA ME, eCarUp permet de décompter simplement par carte de crédit des sessions de recharge semi-publiques et publiques conformément aux prescriptions en vigueur en matière de métrologie et d'étalonnage. En savoir plus : [Droit d'étalonnage en Allemagne](/sonstige-informationen/eichrecht-in-deutschland).

### Important : tenir compte de la circulaire Keba

![KEBA – Illustration 8](/img/ocpp-ladestationen-keba/08.png)

![KEBA – Illustration 9](/img/ocpp-ladestationen-keba/09.png)

### Important : version du firmware !

Pour pouvoir installer votre borne de recharge KEBA x-series (également M&E / version de firmware : 1.9.1 ou plus récente / dernier logiciel toujours disponible dans les [téléchargements KEBA](https://www.keba.com/de/emobility/service-support/downloads/downloads)) dans un compte eCarUp, les préparatifs suivants doivent être effectués :

### Intégration de la x-series

1.  Connectez votre ordinateur à l'adresse IP de la borne. L'adresse IP s'affiche sur l'écran de la borne.

2.  Connectez-vous :

Default Benutzername : admin

Default Password : Keba\_xxxx (numéro de série de la borne)

3.  Effectuez maintenant sous OCPP les paramètres suivants :

Chargepoint Identity: "Stationsnamen"

Attention : le nom de la borne (Chargepoint Identity) ne doit contenir ni espaces ni caractères spéciaux, à l'exception du tiret bas « \_ ». Après une intégration réussie, la borne peut être renommée sans problème sur la plateforme eCarUp.

OCPP Communication Type: "OCPP 1.6 JSON"

Central System Hostname: "www.ecarup.com"

Central System Port: "80"

Central System Path: "api/Ocpp16/&#123;code von der eCarUp Webseite&#125;". Vous avez enregistré celui-ci à l'étape trois de la préparation (voir ci-dessus).

![KEBA – Illustration 10](/img/ocpp-ladestationen-keba/10.png)

4\. Configuration des appareils

Menu : Konfiguration --> Geräte (le chargement de la page prend un certain temps)

Authorisierung : AN

Online Authorization Mode : First Online

![KEBA – Illustration 11](/img/ocpp-ladestationen-keba/11.png)

Remarque : si votre entreprise prend en charge un proxy dans le système, vous pouvez effectuer ces paramètres directement sur la borne KEBA. 

La borne de recharge KEBA x-series est maintenant enregistrée dans votre compte eCarUp. Vous pouvez à présent définir les conditions d'utilisation de la borne de recharge dans le portail web eCarUp.

### Intégration de la c-series

Les bornes de recharge KEBA c-series peuvent être installées comme esclaves des bornes de recharge KEBA x-series. Tout comme pour la x-series, vous pouvez définir simplement vous-même les conditions d'utilisation de vos bornes dès qu'elle est installée dans votre compte. Vous décidez qui peut recharger, quand et à quel prix.

1.  Placez sur la borne esclave le DIP Switch « DSW2.5 » sur « On »

![KEBA – Illustration 12](/img/ocpp-ladestationen-keba/12.png)

<div className="row">
<div className="col col--6">

2\. Connectez votre ordinateur à l'adresse IP du maître - la borne de recharge KEBA x-series.

Default Benutzername : admin

Default Password : numéro de série de la borne de recharge KEBA x-Series

3. Effectuez maintenant sous OCPP les paramètres suivants :

1.  Passez sous Operation Mode à Charging Network

2.  Indiquez le nombre d'esclaves

3.  Saisissez les numéros de série des esclaves

</div>
<div className="col col--6 text--center">

![KEBA – Illustration 13](/img/ocpp-ladestationen-keba/13.png)

</div>
</div>

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule façon de mieux calculer et afficher la puissance de charge actuelle dans l'application. 

Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)

![KEBA – Illustration 14](/img/ocpp-ladestationen-keba/14.png)

![KEBA – Illustration 15](/img/ocpp-ladestationen-keba/15.png)
