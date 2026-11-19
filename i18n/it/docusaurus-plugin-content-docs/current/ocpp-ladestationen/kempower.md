---
title: 'Kempower'
slug: '/ocpp-ladestationen/kempower'
description: 'Guida all''integrazione backend'
sidebar_label: 'Kempower'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-kempower/01.jpg" bildtext="Kempower Station Charger" titel="Kempower Station Charger" href="https://kempower.com/de/solution/kempower-station-charger/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kempower/02.jpg" bildtext="Kempower Satellite" titel="Kempower Satellite" href="https://kempower.com/de/solution/kempower-satellite/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-kempower/03.jpg" bildtext="Kempower Movable Charger" titel="Kempower Movable Charger" href="https://kempower.com/de/solution/kempower-movable-charger/" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione backend

Le stazioni Kempower possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo. 

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione della stazione di ricarica Kempower

Importante: versione firmware testata, 3.2.6

### Passaggio 1

Assicurati che la tua stazione sia online e comunichi con il portale Kempower. 

- [https://kempower.io/](https://kempower.io/)


### Passaggio 2

1.  Verifica che la stazione disponga anche di una connessione Internet attiva

2.  Clicca sull'icona a forma di ingranaggio in alto a destra.


![Kempower – Figura 4](/img/ocpp-ladestationen-kempower/04.png)

### Passaggio 3

1.  Clicca su Connectivity e attiva OCPP

2.  Aggiungi il tuo URL eCarUp e clicca su salva. 


![Kempower – Figura 5](/img/ocpp-ladestationen-kempower/05.png)

### Passaggio 4

1.  Per concludere, controlla le impostazioni di autorizzazione e clicca su salva.


![Kempower – Figura 6](/img/ocpp-ladestationen-kempower/06.png)

## Impostazioni avanzate tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Kempower – Figura 7](/img/ocpp-ladestationen-kempower/07.png)

![Kempower – Figura 8](/img/ocpp-ladestationen-kempower/08.png)
