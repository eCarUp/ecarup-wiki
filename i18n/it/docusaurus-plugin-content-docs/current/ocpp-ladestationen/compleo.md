---
title: 'Compleo'
slug: '/ocpp-ladestationen/compleo'
description: 'Guida all''integrazione del backend'
sidebar_label: 'Compleo'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-compleo/01.png" bildtext="Compleo SOLO" titel="SOLO" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-compleo/02.jpg" bildtext="Compleo eBOX" titel="eBOX" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-compleo/03.jpg" bildtext="Compleo DUO" titel="DUO" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-compleo/04.jpg" bildtext="Compleo CITO 500" titel="CITO 500" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-compleo/05.jpg" bildtext="Compleo CITO 240" titel="CITO 240" href="https://www.compleo-charging.ch/" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione del backend

Le stazioni Compleo possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Decidi tu chi può ricaricare, quando e a quale prezzo. 

- Prerequisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni".

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione delle stazioni di ricarica Compleo

### Nota

- Un terminale per carte di credito può essere utilizzato parallelamente a eCarUp, per garantire la massima flessibilità. Per ulteriori informazioni, Compleo è a tua disposizione. Qui riguarda solo l'hardware DC !


### Compleo SOLO

Video guida: [https://www.youtube.com/watch?v=Aa3artQXC6w](https://www.youtube.com/watch?v=Aa3artQXC6w)

### Compleo eBOX

Per integrare la Compleo eBOX hai bisogno dell'app Compleo eConfig. 

È inoltre importante che sul box sia installata la versione firmware 1.1 per il collegamento OCPP. 

## Panoramica:

![Compleo – Immagine 6](/img/ocpp-ladestationen-compleo/06.png)

## Passaggio 1:

![Compleo – Immagine 7](/img/ocpp-ladestationen-compleo/07.png)

## Passaggio 2:

![Compleo – Immagine 8](/img/ocpp-ladestationen-compleo/08.png)

## Passaggio 3:

![Compleo – Immagine 9](/img/ocpp-ladestationen-compleo/09.png)

## Passaggio 4:

![Compleo – Immagine 10](/img/ocpp-ladestationen-compleo/10.png)

## Passaggio 5 incl. riavvio:

![Compleo – Immagine 11](/img/ocpp-ladestationen-compleo/11.png)

Importante: se dopo l'integrazione riuscita con eCarUp la stazione non funziona correttamente, verifica quanto segue tramite l'interfaccia web della wallbox:

- Autenticazione su MIT

- Remote deve essere attivato


Come accedere all'interfaccia web dovrebbe essere descritto nelle istruzioni fornite in dotazione. 

![Compleo – Immagine 12](/img/ocpp-ladestationen-compleo/12.png)

### Compleo DUO, CITO 500 & CITO 240

Per integrare altre stazioni Compleo con eCarUp hai bisogno del supporto della società [Compleo Charging Solutions AG Schweiz](https://www.compleo-charging.ch/kontakt) . Essa si occupa della configurazione e assegna il tuo punto di ricarica all'account eCarUp tramite l'URL OCPP che hai ricevuto durante la preparazione.

![Compleo – Immagine 13](/img/ocpp-ladestationen-compleo/13.png)

### Importante

Per ogni stazione di ricarica Compleo il seguente parametro deve essere impostato su "true".

![Compleo – Immagine 14](/img/ocpp-ladestationen-compleo/14.png)

Questo può essere fatto tramite il nostro strumento di manutenzione (eCarUp Premium) oppure l'impostazione viene effettuata direttamente sulla stazione. 

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da una stazione all'altra. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Compleo – Immagine 15](/img/ocpp-ladestationen-compleo/15.png)

![Compleo – Immagine 16](/img/ocpp-ladestationen-compleo/16.png)
