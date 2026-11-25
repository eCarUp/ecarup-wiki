---
title: 'ABL'
slug: '/ocpp-ladestationen/abl'
description: 'Guida all''integrazione backend'
sidebar_label: 'ABL'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-abl/01.jpg" bildtext="ABL Wallbox" titel="ABL Wallbox" href="https://www.ablmobility.de/de/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-abl/02.png" bildtext="ABL Supernova" titel="ABL Supernova" href="https://www.ablmobility.de/de/" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione backend

Le stazioni ABL possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo. 

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri qui di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni".

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione della ABL Wallbox

### ⚠️ Osservazioni importanti per l'integrazione delle stazioni di ricarica ABL

- Per avviare la sessione di ricarica è assolutamente necessario collegare prima un veicolo. In caso contrario non viene avviata alcuna sessione di ricarica.

- Se la ricarica viene avviata con la tessera RFID, è possibile terminarla solo tramite l'auto (ad es. sbloccando il cavo) o tramite l'app eCarUp. Avvicinare nuovamente la tessera RFID non termina la sessione di ricarica.


### Accedere alla stazione

- Una volta collegato alla stazione, inserisci nel browser il seguente IP: [http://169.254](/).1.1:8300/

- Controlla nei dati di sistema se è disponibile la versione software più recente


### Configurazione

- Impostare la versione OCPP su 1.6

- Inserire l'intero URL dall'account eCarUp

- Rinominare la ChargeBox ID. Attenzione: nessuno spazio. 

- Salvare e riavviare la stazione.


![ABL – Figura 3](/img/ocpp-ladestationen-abl/03.png)

### Importante

La Chargebox ID non deve contenere più di 20 caratteri. 

![ABL – Figura 4](/img/ocpp-ladestationen-abl/04.png)

### Importante

Si prega di disattivare la funzione Auto-Charge

![ABL – Figura 5](/img/ocpp-ladestationen-abl/05.png)

## Impostazioni avanzate tramite Wartungstool (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore) 




![ABL – Figura 6](/img/ocpp-ladestationen-abl/06.png)

![ABL – Figura 7](/img/ocpp-ladestationen-abl/07.png)
