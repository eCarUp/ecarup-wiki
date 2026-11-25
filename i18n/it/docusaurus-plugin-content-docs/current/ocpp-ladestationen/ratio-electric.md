---
title: 'Ratio Electric'
slug: '/ocpp-ladestationen/ratio-electric'
description: 'Guida all''integrazione backend'
sidebar_label: 'Ratio Electric'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-ratio-electric/01.jpg" bildtext="Ratio Electric IO7" titel="IO7" href="https://elektroscout.ch/produkt/doppellader-fuer-den-oeffentlichen-bereich-mit-ocpp/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-ratio-electric/02.jpg" bildtext="Ratio Electric IO6 MID Pro" titel="IO6 MID Pro" href="https://elektroscout.ch/produkt/io6/" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione backend

Le stazioni Ratio Electric possono essere integrate nel sistema di conteggio di eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo. 

- Presupposto per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni".

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione di IO7 e IO6 pro MID

Importante: versione firmware testata , 1.5.4  (IO7)

Importante: versione firmware testata , 3.13.1  (IO6)



- Per l'integrazione della tua IO7 rivolgiti all'azienda [Elektroscout](https://elektroscout.ch/)

- info@elektroscout.ch


## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Ratio Electric – Figura 3](/img/ocpp-ladestationen-ratio-electric/03.png)

![Ratio Electric – Figura 4](/img/ocpp-ladestationen-ratio-electric/04.png)
