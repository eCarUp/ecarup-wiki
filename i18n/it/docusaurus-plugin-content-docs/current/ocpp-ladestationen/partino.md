---
title: 'Partino'
slug: '/ocpp-ladestationen/partino'
description: 'Guida all''integrazione del backend'
sidebar_label: 'Partino'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-partino/01.jpg" bildtext="Partino Vool" titel="Partino Vool" href="https://www.partino.ch/de/angebot/e-ladestationen/vool/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-partino/02.png" bildtext="Partino DC30" titel="Partino DC30" href="https://www.partino.ch/de/angebot/e-ladestationen/partino-x-ecotap/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-partino/03.png" bildtext="Partino Ecotap" titel="Partino Ecotap" href="https://www.partino.ch/de/angebot/e-ladestationen/partino-x-ecotap/" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione del backend

Le stazioni Partino ed Ecotap possono essere integrate nel sistema di conteggio di eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo. 

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal) 

- Scopri di più sulle nostre [funzioni premium](/funktionen)


### Integrazione delle stazioni OCPP

1.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

2.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

3.  Seleziona la scheda "OCPP".

4.  Copia l'URL negli appunti.

5.  Incolla l'URL nel modulo di richiesta indicato qui sotto. 


## Partino Vool

- versione firmware testata v1.9.16 


<Video src="pRN2F2iiNzk" title="Video YouTube, guida all'integrazione della stazione di ricarica Partino /Vool nel backend di eCarUp" />

### Video della guida all'integrazione delle stazioni di ricarica Partino Vool nel backend di eCarUp

- A tale scopo, installa l'app Vool


![Partino – figura 4](/img/ocpp-ladestationen-partino/04.png)

1.  Collegare la stazione tramite Bluetooth


![Partino – figura 5](/img/ocpp-ladestationen-partino/05.png)

2.



![Partino – figura 6](/img/ocpp-ladestationen-partino/06.png)

3.. Configurare il caricabatterie



![Partino – figura 7](/img/ocpp-ladestationen-partino/07.png)

4\. Impostare la configurazione di base

![Partino – figura 8](/img/ocpp-ladestationen-partino/08.png)

5\. Clicca su "Mostra impostazioni avanzate" ("Erweiterte Einstellungen anzeigen")

![Partino – figura 9](/img/ocpp-ladestationen-partino/09.png)

6\. Aggiungi il tuo URL eCarUp e salva

![Partino – figura 10](/img/ocpp-ladestationen-partino/10.png)

### Trasmettere l'URL eCarUp a Partino (in caso di utilizzo del Floatbridge)

Per integrare le stazioni Partino (in caso di utilizzo del Floatbridge) nel nostro backend, al momento hai ancora bisogno del supporto dell'azienda [Partino](https://www.partino.ch/de/). Partino si occupa dell'ultimo passaggio di configurazione e assegna i tuoi punti di ricarica all'account eCarUp corretto (tramite l'URL OCPP), che hai ricevuto durante la preparazione. A tale scopo, trasmetti a Partino l'URL e i numeri di serie della stazione di ricarica tramite il modulo qui sotto. 

[Modulo di richiesta Partino](https://www.partino.ch/wp-content/uploads/Partino_Anmeldeformular_eCarUp.pdf).

![Partino – figura 11](/img/ocpp-ladestationen-partino/11.png)

## Ecotap

- versione firmware testata 506.32R.33


### Trasmettere l'URL OCPP a Partino

Per integrare le stazioni Ecotap nel nostro backend, al momento hai ancora bisogno del supporto dell'azienda [Partino](https://www.partino.ch/de/). Partino si occupa dell'ultimo passaggio di configurazione e assegna i tuoi punti di ricarica all'account eCarUp corretto (tramite l'URL OCPP), che hai ricevuto durante la preparazione. A tale scopo, trasmetti a Partino l'URL e i numeri di serie della stazione di ricarica tramite il modulo qui sotto. 

[Modulo di richiesta Partino](https://www.partino.ch/wp-content/uploads/Partino_Anmeldeformular_eCarUp.pdf).

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e mostrare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Partino – figura 12](/img/ocpp-ladestationen-partino/12.png)

![Partino – figura 13](/img/ocpp-ladestationen-partino/13.png)
