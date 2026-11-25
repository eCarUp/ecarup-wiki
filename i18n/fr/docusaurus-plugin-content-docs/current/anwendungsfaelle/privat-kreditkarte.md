---
title: 'Recharger à domicile par carte de crédit'
slug: '/anwendungsfaelle/privat-kreditkarte'
description: '1\. Informations générales'
sidebar_label: 'Privé carte de crédit'
---

## 1\. Informations générales

L'article suivant décrit une configuration standard pour la recharge à domicile avec eCarUp (par exemple pour les immeubles collectifs/PPE/communautés d'propriétaires). Les conducteurs paient par carte de crédit et le montant est automatiquement transféré du conducteur au propriétaire de la borne.

L'avantage de cette variante réside dans le fait que l'argent est transféré de manière automatisée de la carte de crédit du conducteur vers le compte du propriétaire de la borne. Cela présente deux avantages décisifs :

1.  L'ensemble du processus d'encaissement est entièrement automatisé : eCarUp transfère l'argent des transactions directement après leur fin sur le compte du propriétaire de la borne.

2.  De ce fait, le montant n'est jamais en possession d'eCarUp AG et toutes les transactions (y compris, par exemple, celles des invités sur les places de parc visiteurs) respectent les dispositions légales en vigueur.


Vous trouverez dans notre wiki toutes les autres informations sur le [paiement par carte de crédit](/stationsbetreiber/abrechnen-auszahlen) et sur les [dispositions légales relatives au montant transféré](/stationsbetreiber/account-verifizieren).

Le paiement par carte de crédit entraîne toujours une commission de 10 %, que [la licence premium eCarUp](https://web.ecarup.com/preise-ladestationen-backend/) soit active ou non.

Les paramètres décrits ci-dessous permettent de configurer le cas d'usage « recharge à domicile par carte de crédit » sur eCarUp. L'état cible et les avantages sont les suivants :

- Les bornes ne sont pas visibles publiquement (uniquement pour des utilisateurs spéciaux invités)

- Les conducteurs peuvent recharger directement via l'app ou la carte RFID (payant)

- « Onboarding » simple pour les conducteurs

- Les prix ne doivent être adaptés qu'une fois par an (mutation en masse)

- En option, un compte pour la recharge gratuite peut également être créé (par exemple pour le concierge)


Une [licence eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) est vivement recommandée pour ce cas d'usage (sinon certaines fonctions importantes comme l'outil de maintenance, les rapports ou la gestion avancée des utilisateurs avec les groupes d'utilisateurs font défaut).

## 2\. Connecter les bornes de recharge au backend eCarUp

Il faut d'abord connecter les bornes au backend eCarUp :

- Vous trouverez dans notre wiki une liste actuelle de tous les [modèles de bornes de recharge pris en charge](/ocpp-ladestationen).

- Un [guide pas à pas pour l'intégration des bornes](/stationsbetreiber/inbetriebnahme-ocpp-station) est également disponible.

- Pour que de l'argent puisse être transféré sur le compte, celui-ci doit être vérifié. Vous trouverez les informations à ce sujet ici : [Vérifier le compte dans eCarUp](/sonstige-informationen/stripe). Nous recommandons d'effectuer cette étape avant ou pendant l'installation des bornes de recharge. Sans vérification, eCarUp ne peut, pour des raisons légales, transférer aucun argent sur le compte et aucune recharge payante n'est possible.



L'argent transféré est versé en continu sur votre compte de propriétaire de bornes et peut à tout moment être versé sur n'importe quel IBAN via l'option de menu « Compte » (« Account »).

![Recharger à domicile par carte de crédit – illustration 1](/img/anwendungsfaelle-privat-kreditkarte/01.png)

## 3\. Configurer les bornes de recharge

Une fois les bornes de recharge connectées à eCarUp, elles apparaissent dans le compte eCarUp sur le tableau de bord et dans la gestion des bornes.

![Recharger à domicile par carte de crédit – illustration 2](/img/anwendungsfaelle-privat-kreditkarte/02.png)

### Paramètres de base

Les bornes peuvent ensuite être configurées en cliquant sur « Bornes » (« Stationen »), puis « Gestion des bornes » (« Stationsverwaltung ») :

- Modifier le nom et la description de la borne

- Supprimer des bornes

- Définir les emplacements

- Modifier les connecteurs (s'il y en a plusieurs)

- Définir les types de connecteurs (par exemple Typ 2, CSS ou Chademo)

- Définir la puissance max. (par exemple 22 kW)

- Définir l'accès (public, limité et privé)


Public = tous les utilisateurs/Limité = propriétaire de la borne et utilisateurs spéciaux/Privé = UNIQUEMENT le propriétaire de la borne, respectivement le compte dans lequel les bornes sont installées

- Définir les prix pour l'énergie et le temps

- Définir les temps réservés

- Activer la borne depuis le portail web

Tous les [paramètres pour les propriétaires de bornes](/stationsbetreiber/webportal) sont résumés dans cet article du wiki.



### Créer des groupes de bornes

Pour la gestion des bornes de recharge, il est important de les organiser en groupes de bornes (par exemple par emplacements ou par immeubles) :

![Recharger à domicile par carte de crédit – illustration 3](/img/anwendungsfaelle-privat-kreditkarte/03.png)



Une fois configuré, cela peut ressembler à ceci :

![Recharger à domicile par carte de crédit – illustration 4](/img/anwendungsfaelle-privat-kreditkarte/04.png)

## 4\. Accès simple pour les conducteurs

Pour offrir au conducteur un accès sans complication et sans grande charge administrative, le point de recharge est créé en mode public et sans indication d'emplacement. Ainsi, le point de recharge n'apparaît pas sur la carte eCarUp et aucune gestion d'utilisateurs spécifique n'est nécessaire. Néanmoins, chaque conducteur ayant accès au parking souterrain peut recharger.

![Recharger à domicile par carte de crédit – illustration 5](/img/anwendungsfaelle-privat-kreditkarte/05.png)

### Accès des conducteurs avec des groupes d'utilisateurs

Gérer les groupes d'utilisateurs

Dans cette variante, un groupe d'utilisateurs est créé et affecté aux bornes. Ainsi, lors d'un changement de locataire ou de l'arrivée de nouveaux conducteurs, un nouveau membre peut être ajouté au groupe d'utilisateurs ou en être retiré sans complication. Cela réduit la charge administrative.

- Les bornes sont placées sur le statut « limité »

- Un groupe d'utilisateurs avec tous les conducteurs autorisés est créé

- Le groupe d'utilisateurs est affecté au groupe de bornes


![Recharger à domicile par carte de crédit – illustration 6](/img/anwendungsfaelle-privat-kreditkarte/06.png)

![Recharger à domicile par carte de crédit – illustration 7](/img/anwendungsfaelle-privat-kreditkarte/07.png)

### Affecter les conducteurs individuellement

Affecter des utilisateurs individuels aux bornes

Dans cette variante, les conducteurs/clients finaux sont affectés individuellement à leurs bornes respectives ; seul l'utilisateur spécial concerné peut déverrouiller sa propre borne. Cela signifie que, lors d'un changement de locataire ou de l'arrivée de nouveaux conducteurs, les comptes doivent à chaque fois être réaffectés aux bornes, ce qui implique que le compte doit être activement géré en permanence.

- Les bornes sont placées sur le statut « limité »

- Le bon compte conducteur est déverrouillé avec le bon prix pour la borne

- Un emplacement est enregistré pour la borne


![Recharger à domicile par carte de crédit – illustration 8](/img/anwendungsfaelle-privat-kreditkarte/08.png)

![Recharger à domicile par carte de crédit – illustration 9](/img/anwendungsfaelle-privat-kreditkarte/09.png)

## 5\. Informer les conducteurs / clients finaux

Il est recommandé d'informer les conducteurs/clients finaux de la mise à disposition de la borne. Pour le paiement, les conducteurs doivent créer leur propre compte eCarUp et enregistrer leur propre carte de crédit valide comme moyen de paiement :

- Vous trouverez un guide / modèle possible à envoyer aux conducteurs dans ce [document](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit).

- [Toutes les fonctions pour les conducteurs](/fahrer) sont résumées sur une page de wiki dédiée.

- Il existe en outre une [FAQ pour les conducteurs](/faq) avec les questions et réponses les plus importantes.

- Les conducteurs peuvent [ajouter eux-mêmes des tags RFID / NFC à leur compte](/fahrer/rfid-nfc-tags-carid) et les utiliser ensuite pour déverrouiller la borne de recharge.


Grâce au système flexible d'eCarUp, la charge de gestion est réduite au minimum. Les conducteurs/clients finaux peuvent créer et gérer eux-mêmes leurs comptes.

## 6\. Étiqueter les bornes

Pour que les conducteurs puissent déverrouiller les bornes avec l'app même sans carte RFID, nous recommandons d'étiqueter les bornes avec un code QR et un bref texte d'instructions. Cela aide par exemple lorsqu'un conducteur perd sa carte RFID ou ne l'a pas sur lui.
Vous trouverez quelques [exemples d'étiquetage](/stationsbetreiber/qr-code) directement sur cette page du wiki.

## 7\. Places de parc visiteurs

Avec eCarUp, les bornes de recharge peuvent aussi être facturées publiquement, donc à des conducteurs anonymes. Pour cela, il faut attribuer aux bornes le statut « public » lors de la configuration et définir un emplacement. L'étiquetage des bornes est en outre très important, car le code QR permet aussi de recharger ad hoc et donc sans barrières.

Il est aussi possible d'attribuer sans problème d'autres prix aux places de parc visiteurs (voir ci-dessous).

En option, les bornes peuvent aussi être [publiées dans les réseaux de recharge de fournisseurs tiers grâce à la fonction de roaming](/funktionen/roaming). Cela n'est toutefois possible que si la borne est publiquement disponible 24 heures sur 24, 7 jours sur 7. Vous devez en outre avoir conscience que la borne sera ensuite très largement trouvable (dans les applications les plus diverses et les systèmes de navigation des voitures) et attirera ainsi des utilisateurs étrangers.

![Recharger à domicile par carte de crédit – illustration 10](/img/anwendungsfaelle-privat-kreditkarte/10.png)

![Recharger à domicile par carte de crédit – illustration 11](/img/anwendungsfaelle-privat-kreditkarte/11.png)

## 8\. Analyse et résolution des erreurs

Le portail eCarUp permet de détecter des dysfonctionnements simples et de prendre les mesures appropriées. Si des bornes apparaissent en gris, donc comme « inactives », sur le tableau de bord ou dans la gestion des bornes, elles ont perdu la connexion avec le backend (depuis plus de 10 minutes) et ne peuvent donc pas être utilisées via eCarUp. Il y a deux raisons possibles :

- Panne d'Internet : rétablissez Internet. Dès que les bornes atteignent de nouveau eCarUp, le statut passe à « disponible », c'est-à-dire bleu, et elles peuvent de nouveau être utilisées normalement.

- Panne de courant : rétablissez l'alimentation électrique. Dès que les bornes atteignent de nouveau eCarUp, le statut passe à « disponible », c'est-à-dire bleu, et elles peuvent de nouveau être utilisées normalement.


Avec l'outil de maintenance inclus dans [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/), [la communication entre la borne de recharge et le backend](/funktionen/wartung) peut être suivie et une analyse d'erreurs plus approfondie peut être réalisée.

Si l'erreur est plus profonde, vous devez prendre contact avec le responsable du projet (par exemple l'installateur électricien chargé de l'exécution).

![Recharger à domicile par carte de crédit – illustration 12](/img/anwendungsfaelle-privat-kreditkarte/12.png)

Conseil pratique : pour tester ou vérifier le fonctionnement des bornes sur place, un compte peut être créé pour le service technique ou une autre personne responsable sur place (par exemple concierge\[at\]musterhaus.ch). Ce compte peut être enregistré auprès des bornes comme utilisateur spécial avec un prix de 0.- par kWh et 0.- par h, et peut ainsi effectuer des tests gratuitement.
