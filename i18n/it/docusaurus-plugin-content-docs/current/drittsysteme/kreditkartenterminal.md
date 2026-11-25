---
title: 'Terminale per carte di credito'
slug: '/drittsysteme/kreditkartenterminal'
description: 'Collegare un Verifone UX700 all''account eCarUp, in modo che i conducenti possano pagare alla stazione di ricarica con carta di credito o di debito.'
sidebar_label: 'Terminale per carte di credito'
---
In quattro passaggi colleghi un Verifone UX700 al tuo account eCarUp e gli assegni dei punti di ricarica. Dopodiché i conducenti pagano direttamente alla stazione di ricarica con carta di credito o di debito, senza app e senza account.

:::info Solo Svizzera
I terminali per carte sono attualmente disponibili solo in Svizzera e richiedono la licenza eCarUp Premium.
:::

![Varianti d'impiego: terminale standalone per più punti di ricarica o integrato in una stazione di ricarica DC](/img/drittsysteme-kreditkartenterminal/01.png)

## Preparazione

<div className="row">
<div className="col col--8">

- Un Verifone UX700, acceso e collegato a Internet tramite LAN o WLAN. Un collegamento tramite scheda SIM al momento non è ancora possibile.
- Accesso al portale eCarUp con l'account a cui deve appartenere il terminale
- eCarUp Premium per i punti di ricarica che il terminale deve offrire
- Un gruppo di stazioni o una stazione con punti di ricarica pubblici
- Una sede in Svizzera

Le commissioni di transazione restano invariate: tu, come gestore della stazione, ricevi il 90 %.

</div>
<div className="col col--4 text--center">

![Terminale per carte Verifone UX700](/img/drittsysteme-kreditkartenterminal/02.png)

</div>
</div>

## Montaggio nelle stazioni di ricarica DC

Il terminale può essere montato anche direttamente in una stazione di ricarica DC. La verifica è stata effettuata con stazioni di ricarica DC di questi produttori:

- EVTEC
- Alpitronic
- Siemens

Il montaggio viene eseguito in loco dal committente. Chiariscilo in anticipo con il produttore o con il tuo partner di installazione. Il collegamento a eCarUp avviene poi esattamente come descritto di seguito.

## Procedura

### 1. Avviare il terminale e leggere il codice

Accendi il terminale e collegalo a Internet tramite LAN o WLAN. La rete mobile tramite scheda SIM al momento non funziona. Il terminale mostra quindi un codice di registrazione composto da tre parole, ad esempio «ganz-folgen-schick».

Il codice è valido solo per breve tempo e funziona una sola volta. Un nuovo codice lo ottieni nel menu admin del terminale: scorri dal bordo sinistro dello schermo verso destra e apri **Impostazioni** (**Einstellungen**).

![Finestra di dialogo Registrare il terminale nel portale eCarUp](/img/drittsysteme-kreditkartenterminal/03.png)

### 2. Registrare il terminale nel portale

Nel portale eCarUp apri **Stazioni › Terminali per carte** (**Stationen › Kartenterminals**) e clicca su **Registrare il terminale** (**Terminal registrieren**). Nella finestra di dialogo inserisci questi dati:

| Campo | Contenuto |
| --- | --- |
| Codice di registrazione (Registrierungscode) | Il codice del terminale, con i trattini |
| Denominazione (Bezeichnung) | Un nome che riconosci, ad esempio «Parkplatz Nord» |
| Via e numero, CAP, località (Strasse und Nummer, PLZ, Ort) | La sede del terminale, solo Svizzera |
| Lingua del terminale (Sprache am Terminal) | In questa lingua il terminale guida i conducenti nella selezione e nel pagamento |

Clicca poi su **Registrare** (**Registrieren**).

![Finestra di dialogo compilata con codice di registrazione, denominazione, sede e lingua](/img/drittsysteme-kreditkartenterminal/04.png)

### 3. Assegnare l'offerta

Il terminale compare nell'elenco con lo stato **Online**. Nella colonna **Offerta** (**Angebot**) c'è ancora «Nessuna assegnazione» («Nichts zugeordnet»). Sotto **Modifica** (**Bearbeiten**) clicca sui tre puntini e scegli **Assegnare l'offerta** (**Angebot zuordnen**).

![Elenco dei terminali per carte con menu aperto: Assegnare l'offerta, Mostrare il PIN admin, Rimuovere il terminale](/img/drittsysteme-kreditkartenterminal/05.png)

Scegli quali punti di ricarica il terminale deve offrire:

- **Gruppo di stazioni** (**Stationsgruppe**): tutti i punti di ricarica pubblici di un gruppo, ad esempio un intero parcheggio
- **Singola stazione** (**Einzelne Station**): solo una stazione, ad esempio nel caso di un terminale in una stazione di ricarica DC
- **Nessuno** (**Nichts**): il terminale non offre temporaneamente nulla

Scegli il gruppo o la stazione dall'elenco e clicca su **Salvare** (**Speichern**).

![Finestra di dialogo Assegnare l'offerta con gruppo di stazioni selezionato](/img/drittsysteme-kreditkartenterminal/06.png)

### 4. Cosa vedono i conducenti al terminale

- Il terminale offre solo punti di ricarica pubblici. I conducenti che pagano al terminale non hanno un account eCarUp e non possono sbloccare punti di ricarica limitati o privati.
- Il terminale mostra 3 punti di ricarica per pagina. Se ce ne sono di più, i conducenti toccano «Altri punti di ricarica».
- I punti di ricarica con l'auto collegata vengono per primi, poi quelli occupati, poi quelli liberi.

## Controllo

Il collegamento è riuscito se il terminale compare nell'elenco con lo stato **Online** e nella colonna **Offerta** (**Angebot**) mostra il tuo gruppo o la tua stazione. Accanto vedi il numero di serie, la versione del software e quando il terminale è stato visto l'ultima volta.

![Terminale online con gruppo di stazioni assegnato](/img/drittsysteme-kreditkartenterminal/07.png)

Tramite i tre puntini sotto **Modifica** (**Bearbeiten**) raggiungi in seguito anche:

- **Mostrare il PIN admin** (**Admin-PIN anzeigen**): il PIN per il menu admin del terminale
- **Rimuovere il terminale** (**Terminal entfernen**): scioglie il collegamento. Il PIN di un terminale rimosso lo ottieni presso il supporto eCarUp.
