---
title: 'Chargement public'
slug: '/anwendungsfaelle/oeffentlich'
description: '1\. Informations générales'
sidebar_label: 'Public'
---

## 1\. Informations générales

L'article suivant décrit une configuration standard pour la mise en place et l'exploitation d'une borne de recharge publique avec eCarUp. Les conducteurs paient par carte de crédit et le solde est transféré automatiquement du conducteur au propriétaire de la borne. Si votre borne est accessible de manière semi-publique (p. ex. au sein d'une PME), nous l'avons documenté dans un [article du wiki](/anwendungsfaelle/laden-im-kmu) séparé.

L'avantage de cette variante réside dans le fait que l'argent est transféré automatiquement de la carte de crédit du conducteur vers le compte du propriétaire de la borne. 

Cela présente deux avantages décisifs :

1.  L'ensemble du processus d'encaissement est entièrement automatisé : eCarUp transfère l'argent des transactions sur le compte du propriétaire de la borne directement après leur fin. 

2.  Ainsi, le solde n'est jamais en possession d'eCarUp AG et toutes les transactions (y compris, par exemple, celles des invités sur les places de parc visiteurs) respectent les dispositions légales en vigueur.

Vous trouvez dans notre wiki toutes les autres informations sur le [décompte par carte de crédit](/stationsbetreiber/abrechnen-auszahlen) et sur les [dispositions légales relatives au solde transféré](/stationsbetreiber/account-verifizieren).

Le décompte par carte de crédit entraîne toujours une commission de 10 %, que [la licence premium eCarUp](https://web.ecarup.com/preise-ladestationen-backend/) soit active ou non.

Une [licence premium eCarUp](https://web.ecarup.com/preise-ladestationen-backend/) est vivement recommandée pour ce cas d'utilisation (sinon, certaines fonctionnalités importantes comme l'outil de maintenance, les rapports ou le roaming font défaut).

## 2\. Connecter les bornes de recharge au backend eCarUp

Les bornes doivent d'abord être connectées au backend eCarUp :

- Vous trouvez dans notre wiki une liste à jour de tous les [modèles de bornes de recharge pris en charge](/ocpp-ladestationen).

- Un [guide pas à pas pour l'intégration des bornes](/stationsbetreiber/inbetriebnahme-ocpp-station) est également disponible.

- Pour que de l'argent puisse être transféré sur le compte, celui-ci doit être vérifié. Vous trouvez les informations à ce sujet ici : [Vérifier le compte dans eCarUp](/sonstige-informationen/stripe). Nous recommandons d'effectuer cette étape avant ou pendant l'installation des bornes de recharge. Sans vérification, eCarUp ne peut, pour des raisons légales, transférer aucun argent sur le compte et aucune recharge payante n'est possible.

    L'argent transféré est versé en continu sur votre compte de propriétaire de borne et peut à tout moment être versé sur n'importe quel IBAN via l'option de menu « Account » (« Account »).

![Chargement public – illustration 1](/img/anwendungsfaelle-oeffentlich/01.png)

## 3\. Configurer les bornes de recharge

Une fois les bornes de recharge connectées à eCarUp, elles apparaissent dans le compte eCarUp, dans le tableau de bord et dans la gestion des bornes.

Avec eCarUp, les bornes de recharge peuvent sans problème être utilisées publiquement et donc facturées à des conducteurs anonymes. Pour cela, le statut « public » (« öffentlich ») doit être attribué aux bornes lors de la configuration et un emplacement doit être défini. 

![Chargement public – illustration 2](/img/anwendungsfaelle-oeffentlich/02.png)

### Paramètres de base

Les bornes peuvent ensuite être configurées en cliquant sur « Bornes » (« Stationen »), puis sur « Gestion des bornes » (« Stationsverwaltung ») :

- Modifier le nom et la description de la borne

- Supprimer des bornes

- Définir des emplacements

- Modifier les connecteurs (s'il y en a plusieurs)

- Définir les types de connecteurs (p. ex. Typ 2, CSS ou Chademo)

- Définir l'énergie max. (p. ex. 22 kW)

- Définir l'accès (public, limité et privé)

Public = tous les utilisateurs / Limité = propriétaire de la borne et utilisateurs spéciaux / Privé = UNIQUEMENT le propriétaire de la borne, resp. le compte dans lequel les bornes sont installées

- Définir les prix pour l'énergie et le temps

- Définir les temps réservés

- Activer la borne depuis le portail web

Tous les [paramètres pour les propriétaires de bornes](/stationsbetreiber/webportal) sont réunis dans un article du wiki.

Une fois entièrement configuré, cela peut ressembler à ceci :

![Chargement public – illustration 3](/img/anwendungsfaelle-oeffentlich/03.png)

## 4\. Étiqueter les bornes

Pour les bornes de recharge accessibles au public, l'étiquetage des bornes est très important, afin que les conducteurs sachent comment déverrouiller la borne. Grâce à un étiquetage clair, vous pouvez aussi communiquer aux conducteurs des informations importantes, comme des règles supplémentaires (durée de stationnement max., frais de parcage, etc.).

Pour le déverrouillage directement via eCarUp, il existe deux possibilités :

### Recharger avec l'app eCarUp

- -   Le conducteur télécharge gratuitement l'app eCarUp (Android/Apple)

    - Il crée un compte et enregistre une carte de crédit valable comme moyen de paiement

    - Il peut déverrouiller la borne soit en scannant le code QR dans l'app, soit via la fonction carte en appuyant sur un bouton ([guide pour recharger via Webstory](https://web.ecarup.com/web-stories/laden-mit-der-ecarup-app/))

    - Après la fin de la session de recharge, le montant dû est automatiquement débité de la carte de crédit enregistrée

    - Nous avons décrit une [description détaillée pour les conducteurs](/fahrer) dans le wiki ou dans cette [FAQ](/faq)

### Recharge ad hoc par code QR

<div className="row">
<div className="col col--6">

- Le conducteur scanne le code QR sur la borne avec l'appareil photo de son téléphone portable ou une app de lecture de codes QR

- Il arrive sur une page d'accueil mobile et peut y déclencher un paiement unique en indiquant les informations de sa carte de crédit

- Il reçoit par e-mail un lien permanent pour mettre fin à la recharge (cela peut aussi se faire en débranchant le câble de recharge) ainsi qu'un reçu après la fin de la session de recharge

- Nous avons une description détaillée de la recharge accessible à tous sur notre wiki

- ATTENTION : pour protéger les propriétaires de bornes, une réservation temporaire de CHF 60.- est effectuée sur la carte de crédit utilisée dans cette variante. Elle est automatiquement levée à la fin de la session de recharge.

Vous trouvez quelques [exemples d'étiquetage](/stationsbetreiber/qr-code) directement sur la page du wiki.

</div>
<div className="col col--6 text--center">

![Chargement public – illustration 4](/img/anwendungsfaelle-oeffentlich/04.png)

</div>
</div>

## 5\. Roaming

En option, les bornes peuvent aussi être publiées dans les réseaux de recharge de tiers via la [fonction de roaming](/funktionen/roaming). Cela n'est toutefois possible que si la borne est accessible au public 24 heures sur 24, 7 jours sur 7. Vous devez en outre être conscient que la borne sera ensuite très largement visible (dans les applications et systèmes de navigation des voitures les plus divers) et attirera ainsi des utilisateurs extérieurs. 

Pour le roaming, vous devez en outre définir un prix séparé. Il est transmis par eCarUp au réseau de roaming et sert de base à la tarification des autres réseaux de recharge connectés. En tant qu'exploitant de la borne, comme eCarUp en tant que plateforme, vous n'avez toutefois aucune influence sur la politique tarifaire des autres plateformes.

Vous trouvez des informations détaillées dans l'[article du wiki sur le roaming](/funktionen/roaming).

![Chargement public – illustration 5](/img/anwendungsfaelle-oeffentlich/05.png)

## 6\. Analyse et résolution des erreurs

Le portail eCarUp permet de détecter des dérangements simples et d'engager les mesures correspondantes. Si des bornes apparaissent en gris dans le tableau de bord ou dans la gestion des bornes et sont donc marquées comme « inactives », elles ont perdu la connexion avec le backend (pendant plus de 10 minutes) et ne peuvent donc pas être utilisées via eCarUp. Il y a deux raisons possibles :

- Panne d'Internet : rétablissez Internet. Dès que les bornes atteignent de nouveau eCarUp, le statut passe à « disponible » (« verfügbar »), resp. au bleu, et elles peuvent de nouveau être utilisées normalement.

- Panne de courant : rétablissez l'alimentation électrique. Dès que les bornes atteignent de nouveau eCarUp, le statut passe à « disponible » (« verfügbar »), resp. au bleu, et elles peuvent de nouveau être utilisées normalement.

Avec l'outil de maintenance inclus dans [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/), [la communication entre la borne de recharge et le backend](/funktionen/wartung) peut être suivie et une analyse d'erreur approfondie peut être réalisée.

Si l'erreur est plus profonde, vous devez prendre contact avec le responsable du projet (p. ex. l'installateur électricien chargé de l'exécution).

![Chargement public – illustration 6](/img/anwendungsfaelle-oeffentlich/06.png)

Conseil pratique : pour tester ou vérifier le fonctionnement des bornes sur place, un compte peut être créé pour le service technique ou une autre personne responsable sur place. Ce compte peut être enregistré auprès des bornes comme utilisateur spécial avec un prix de 0 par kWh et de 0 par h, et peut ainsi effectuer des tests sans frais.

## 7\. Optionnel : créer des groupes de bornes de recharge et définir des utilisateurs spéciaux

Même pour les bornes de recharge publiques, des utilisateurs spéciaux (p. ex. collaborateurs, voisins, etc.) peuvent en tout temps être définis en plus et peuvent ensuite recharger aux bornes à un tarif spécial.

### Créer des groupes de bornes

Pour la gestion des bornes de recharge, l'organisation en groupes de bornes (p. ex. par emplacement) est importante :

![Chargement public – illustration 7](/img/anwendungsfaelle-oeffentlich/07.png)

### Créer des utilisateurs spéciaux

Pour que les bornes ne puissent être déverrouillées que par les conducteurs/clients finaux autorisés, les autorisations doivent être attribuées en conséquence. Il existe deux possibilités :

1. Gérer des groupes d'utilisateurs

Dans cette variante, un groupe d'utilisateurs est créé et attribué aux bornes. Ainsi, lors d'un changement de locataire ou pour de nouveaux conducteurs, un nouveau membre peut être ajouté au groupe d'utilisateurs ou en être retiré sans complication. Cela réduit la charge administrative.

- Les bornes sont placées sur le statut « limité » (« limitiert »)

- Un groupe d'utilisateurs comprenant tous les conducteurs autorisés est créé

- Le groupe d'utilisateurs est attribué au groupe de bornes

![Chargement public – illustration 8](/img/anwendungsfaelle-oeffentlich/08.png)

![Chargement public – illustration 9](/img/anwendungsfaelle-oeffentlich/09.png)

2. Attribuer des utilisateurs individuels aux bornes

Dans cette variante, les conducteurs/clients finaux individuels sont attribués à leurs bornes respectives, et seul l'utilisateur spécial concerné peut déverrouiller sa propre borne. Cela signifie que, lors d'un changement de locataire ou pour de nouveaux conducteurs, les comptes doivent à chaque fois être attribués aux bornes, ce qui implique que le compte doit être géré activement en permanence.

- Les bornes sont placées sur le statut « limité » (« limitiert »)

- Le compte du bon conducteur est activé avec le bon prix pour la borne

- Un emplacement est enregistré pour la borne

![Chargement public – illustration 10](/img/anwendungsfaelle-oeffentlich/10.png)

![Chargement public – illustration 11](/img/anwendungsfaelle-oeffentlich/11.png)
