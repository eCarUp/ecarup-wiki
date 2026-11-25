---
title: 'Terminal de carte bancaire'
slug: '/drittsysteme/kreditkartenterminal'
description: 'Associer un Verifone UX700 au compte eCarUp afin que les conducteurs puissent payer à la borne de recharge par carte de crédit ou de débit.'
sidebar_label: 'Terminal de carte bancaire'
---
En quatre étapes, vous associez un Verifone UX700 à votre compte eCarUp et lui attribuez des points de recharge. Les conducteurs paient ensuite directement à la borne de recharge par carte de crédit ou de débit, sans application et sans compte.

:::info Suisse uniquement
Les terminaux de carte ne sont actuellement disponibles qu'en Suisse et nécessitent la licence eCarUp Premium.
:::

![Variantes d'utilisation : terminal autonome pour plusieurs points de recharge ou intégré dans une borne de recharge DC](/img/drittsysteme-kreditkartenterminal/01.png)

## Préparation

<div className="row">
<div className="col col--8">

- Un Verifone UX700, allumé et connecté à Internet par LAN ou WLAN. Une connexion par carte SIM n'est pas encore possible actuellement.
- Un accès au portail eCarUp avec le compte auquel le terminal doit appartenir
- eCarUp Premium pour les points de recharge que le terminal doit proposer
- Un groupe de bornes ou une borne avec des points de recharge publics
- Un site en Suisse

Les frais de transaction restent inchangés : en tant qu'exploitant de la borne, vous recevez 90 %.

</div>
<div className="col col--4 text--center">

![Terminal de carte Verifone UX700](/img/drittsysteme-kreditkartenterminal/02.png)

</div>
</div>

## Montage dans les bornes de recharge DC

Le terminal peut aussi être monté directement dans une borne de recharge DC. Cela a été testé avec les bornes de recharge DC des fabricants suivants :

- EVTEC
- Alpitronic
- Siemens

Le montage est réalisé sur place. Clarifiez-le au préalable avec le fabricant ou votre partenaire d'installation. L'association avec eCarUp se déroule ensuite exactement comme décrit ci-dessous.

## Marche à suivre

### 1. Démarrer le terminal et relever le code

Allumez le terminal et connectez-le à Internet par LAN ou WLAN. Le réseau mobile par carte SIM n'est pas encore possible actuellement. Le terminal affiche alors un code d'enregistrement composé de trois mots, par exemple « ganz-folgen-schick ».

Le code n'est valable que peu de temps et ne fonctionne qu'une seule fois. Vous obtenez un nouveau code dans le menu admin du terminal : balayez depuis le bord gauche de l'écran vers la droite et ouvrez **Paramètres** (**Einstellungen**).

![Dialogue Enregistrer le terminal dans le portail eCarUp](/img/drittsysteme-kreditkartenterminal/03.png)

### 2. Enregistrer le terminal dans le portail

Dans le portail eCarUp, ouvrez **Stationen › Kartenterminals** (**Stationen › Kartenterminals**) et cliquez sur **Enregistrer le terminal** (**Terminal registrieren**). Saisissez les informations suivantes dans le dialogue :

| Champ | Contenu |
| --- | --- |
| Code d'enregistrement (Registrierungscode) | Le code du terminal, avec les traits d'union |
| Désignation (Bezeichnung) | Un nom que vous reconnaissez, par exemple « Parking Nord » |
| Rue et numéro, NPA, localité (Strasse und Nummer, PLZ, Ort) | L'emplacement du terminal, Suisse uniquement |
| Langue du terminal (Sprache am Terminal) | Dans cette langue, le terminal guide les conducteurs lors de la sélection et du paiement |

Cliquez ensuite sur **Enregistrer** (**Registrieren**).

![Dialogue rempli avec code d'enregistrement, désignation, emplacement et langue](/img/drittsysteme-kreditkartenterminal/04.png)

### 3. Attribuer l'offre

Le terminal apparaît dans la liste avec le statut **En ligne** (**Online**). Dans la colonne **Offre** (**Angebot**), il est encore indiqué « Nichts zugeordnet » (« Rien d'attribué »). Sous **Modifier** (**Bearbeiten**), cliquez sur les trois points et choisissez **Attribuer l'offre** (**Angebot zuordnen**).

![Liste des terminaux de carte avec menu ouvert : Attribuer l'offre, Afficher le PIN admin, Supprimer le terminal](/img/drittsysteme-kreditkartenterminal/05.png)

Choisissez quels points de recharge le terminal doit proposer :

- **Groupe de bornes** (**Stationsgruppe**) : tous les points de recharge publics d'un groupe, par exemple un parking entier
- **Borne individuelle** (**Einzelne Station**) : une seule borne, par exemple pour un terminal dans une borne de recharge DC
- **Rien** (**Nichts**) : le terminal ne propose temporairement rien

Choisissez le groupe ou la borne dans la liste et cliquez sur **Enregistrer** (**Speichern**).

![Dialogue Attribuer l'offre avec un groupe de bornes sélectionné](/img/drittsysteme-kreditkartenterminal/06.png)

### 4. Ce que les conducteurs voient au terminal

- Le terminal ne propose que des points de recharge publics. Les conducteurs qui paient au terminal n'ont pas de compte eCarUp et ne peuvent pas débloquer de points de recharge restreints ou privés.
- Le terminal affiche 3 points de recharge par page. S'il y en a davantage, les conducteurs touchent « Weitere Ladepunkte » (« Autres points de recharge »).
- Les points de recharge avec une voiture branchée apparaissent en premier, puis les points occupés, puis les points libres.

## Contrôle

L'association a réussi lorsque le terminal figure dans la liste avec le statut **En ligne** (**Online**) et que la colonne **Offre** (**Angebot**) affiche votre groupe ou votre borne. Vous y voyez aussi le numéro de série, la version du logiciel et la date à laquelle le terminal a été vu pour la dernière fois.

![Terminal en ligne avec groupe de bornes attribué](/img/drittsysteme-kreditkartenterminal/07.png)

Les trois points sous **Modifier** (**Bearbeiten**) vous permettent aussi d'accéder plus tard à :

- **Afficher le PIN admin** (**Admin-PIN anzeigen**) : le PIN du menu admin du terminal
- **Supprimer le terminal** (**Terminal entfernen**) : supprime l'association. Vous obtenez le PIN d'un terminal supprimé auprès du support eCarUp.
