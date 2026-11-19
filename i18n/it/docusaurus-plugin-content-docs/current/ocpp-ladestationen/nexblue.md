---
title: 'NEXBLUE'
slug: '/ocpp-ladestationen/nexblue'
description: 'Guida all''integrazione del backend'
sidebar_label: 'NEXBLUE'
---
## Guida all'integrazione del backend

Le stazioni NEXBLUE possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo.

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-nexblue/01.png" bildtext="NEXBLUE" titel="NEXBLUE" href="https://nexblue.com/de" bildhoehe="10rem" mittig />

</Kacheln>

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Fai clic nel menu a sinistra sulla scheda «Stazioni» («Stationen»).

4.  Seleziona la scheda «OCPP».


 1. Link ws senza Basic Auth: testato e funzionante

2\. wss senza Basic Auth: testato e funzionante

3\. wss con Basic Auth: testato e funzionante

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione della NEXBLUE

- testata"firmwareVersion":"03.07.36" 


Integrazione tramite il portale web

<Embed src="https://demo.arcade.software/ZMABeR5jjEkvl6uWrWsV?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.705" title="Wiki - NEXBLUE" />

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo in questo modo possiamo calcolare e mostrare meglio nell'app la potenza di ricarica attuale.



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![NEXBLUE – Figura 2](/img/ocpp-ladestationen-nexblue/02.png)

![NEXBLUE – Figura 3](/img/ocpp-ladestationen-nexblue/03.png)
