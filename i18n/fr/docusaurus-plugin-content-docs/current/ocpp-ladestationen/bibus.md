---
title: 'Bibus'
slug: '/ocpp-ladestationen/bibus'
description: 'Guide d''intégration backend'
sidebar_label: 'Bibus'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-bibus/01.jpg" bildtext="Bibus eVolve" titel="Bibus eVolve" href="https://technology.bibus.com/ch-de/produkte/e-mobility-and-energy/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-bibus/02.jpg" bildtext="Bibus eNext" titel="Bibus eNext" href="https://technology.bibus.com/ch-de/produkte/e-mobility-and-energy/" bildhoehe="10rem" mittig />

</Kacheln>

## Guide d'intégration backend

Les bornes de recharge Bibus peuvent être intégrées au système de décompte eCarUp en quelques étapes. Une fois installées dans votre compte, vous pouvez définir vous-même, en toute simplicité, les conditions d'utilisation de vos bornes (tarifs, utilisateurs, plages horaires disponibles, etc.). Vous décidez qui peut recharger, quand et à quel tarif.

- Prérequis pour l'[intégration via OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configuration dans le [portail web pour exploitants de bornes](/stationsbetreiber/webportal)

- Découvrez-en plus sur nos [fonctions Premium](/funktionen)


### Intégration de bornes de recharge OCPP

1.  Assurez-vous que vos bornes de recharge sont installées et que votre PC ou votre téléphone portable est connecté au même réseau que la borne de recharge.

2.  Ouvrez le [portail web d'eCarUp](https://admin.ecarup.com/authentication/login) et connectez-vous avec les données de votre compte.

3.  Dans le menu à gauche, cliquez sur l'onglet « Bornes de recharge » (« Stationen »).

4.  Sélectionnez l'onglet « OCPP ».

5.  Copiez l'URL dans le presse-papiers.

6.  Accédez à l'interface web de la borne de recharge souhaitée et collez-y l'URL copiée.


## Intégration de la borne de recharge Bibus

Pour la version avec des bornes de recharge Kempower, cliquez [ici](/ocpp-ladestationen/kempower).

## Version avec Circontrol

Les premières étapes doivent être effectuées directement sur l'écran de votre borne de recharge :

1.   Connectez votre ordinateur portable à la borne de recharge.

2.   Relevez l'adresse IP actuelle de la borne de recharge dans le manuel fourni.

3.  Saisissez ensuite l'adresse IP dans le navigateur web.

4.  Le tableau de bord de Circontrol apparaît.

5.  Sélectionnez le type de connexion (GSM, LAN ...)


⚠️ Veuillez noter :

Le réglage par défaut de la borne de recharge Bibus peut être Plug & Charge. Il doit être désactivé dans le Charge Point Manager.

Veuillez contacter BIBUS pour obtenir le Charge Point Manager.

Dans les paramètres, le statut doit y être défini sur « Activé » (« Aktiviert »).

![Bibus – Figure 3](/img/ocpp-ladestationen-bibus/03.png)

### Paramètres de l'interface web Circontrol

1.  Cliquez sur Intégration (« Integration ») dans la navigation à gauche.

2.  Sélectionnez OCPP 1.6J sous « Intégrations disponibles » (« Verfügbare Integrationen »).

3.  Cliquez sur le lien.

4.  Saisissez le nom d'utilisateur et le mot de passe (voir le manuel).


![Bibus – Figure 4](/img/ocpp-ladestationen-bibus/04.png)

5\. Donnez un nom à la Bibus Charge Box. ⚠️ Remarque : le nom ne doit pas contenir d'espaces.

![Bibus – Figure 5](/img/ocpp-ladestationen-bibus/05.png)

6\. Saisissez l'URL OCPP de votre compte sous Système central (« Zentrales System »).

![Bibus – Figure 6](/img/ocpp-ladestationen-bibus/06.png)

⚠️ Important : vous devez régler l'intervalle de mesure des valeurs mesurées (par ex. sur 60).

![Bibus – Figure 7](/img/ocpp-ladestationen-bibus/07.png)

## Paramètres avancés via l'outil de maintenance (eCarUp Premium)

L'intervalle d'envoi des Meter Values peut varier d'une borne de recharge à l'autre. Nous recommandons un intervalle compris entre 30 et 60 s. C'est la seule manière de calculer et d'afficher plus précisément la puissance de charge actuelle dans l'application.



Vous pouvez le modifier comme suit :

1.  Get Configuration (pour lire ce qui est programmé)

2.  Change Configuration (pour écraser la valeur)


![Bibus – Figure 8](/img/ocpp-ladestationen-bibus/08.png)

![Bibus – Figure 9](/img/ocpp-ladestationen-bibus/09.png)
