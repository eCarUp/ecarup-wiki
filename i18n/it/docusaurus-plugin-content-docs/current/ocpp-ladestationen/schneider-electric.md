---
title: 'Schneider Electric'
slug: '/ocpp-ladestationen/schneider-electric'
description: 'Guida all''integrazione backend'
sidebar_label: 'Schneider Electric'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-schneider-electric/01.jpg" bildtext="Schneider Electric EVlink Pro AC" titel="EVlink Pro AC" href="/ocpp-ladestationen/schneider-electric" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-schneider-electric/02.jpg" bildtext="Schneider Electric EVlink Pro DC" titel="EVlink Pro DC" href="/ocpp-ladestationen/schneider-electric" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione backend

Le stazioni Schneider Electric possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo.

- Prerequisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni premium](/funktionen)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua il login con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione delle stazioni di ricarica Schneider Electric

### EVlink Pro AC

### Integrazione di EVlink AC Pro

Per poter accedere alla stazione tramite smartphone, sono necessari i seguenti passaggi:

- Installa sul tuo smartphone l'app "eSetup" di Schneider Electric;

- Crea lì un account utente.

![Schneider Electric – Immagine 3](/img/ocpp-ladestationen-schneider-electric/03.png)

### Passaggio 1

- Seleziona EVlink Pro AC

![Schneider Electric – Immagine 4](/img/ocpp-ladestationen-schneider-electric/04.jpg)

### Passaggio 2

- Viene avviata la ricerca

![Schneider Electric – Immagine 5](/img/ocpp-ladestationen-schneider-electric/05.jpg)

### Passaggio 3

- Seleziona la stazione di ricarica

![Schneider Electric – Immagine 6](/img/ocpp-ladestationen-schneider-electric/06.jpg)

### Passaggio 4

<div className="row">
<div className="col col--6">

- Inserisci il codice PIN (assegnato al momento della registrazione)

</div>
<div className="col col--6 text--center">

![Schneider Electric – Immagine 7](/img/ocpp-ladestationen-schneider-electric/07.jpg)

</div>
</div>

### Passaggio 5

- Seleziona Configurazione

![Schneider Electric – Immagine 8](/img/ocpp-ladestationen-schneider-electric/08.jpg)

### Passaggio 6

- Seleziona la vista per l'impostazione OCPP

![Schneider Electric – Immagine 9](/img/ocpp-ladestationen-schneider-electric/09.png)

### Passaggio 7

![Schneider Electric – Immagine 10](/img/ocpp-ladestationen-schneider-electric/10.jpg)

- Vista attivata (ON)

- Inserisci normalmente l'URL OCPP dal tuo account

Esempio: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

- Seleziona Autenticazione richiesta (Pubblico)

### Passaggio 8

- Configura le impostazioni di rete

![Schneider Electric – Immagine 11](/img/ocpp-ladestationen-schneider-electric/11.png)

### Passaggio 9 (opzionale)

- Definisci la modalità offline

![Schneider Electric – Immagine 12](/img/ocpp-ladestationen-schneider-electric/12.jpg)

### Passaggio 10

- Salva le impostazioni e riavvia la stazione.

## EVlink Pro DC

Desideri integrare la stazione di ricarica DC di Schneider con eCarUp?

- Invia il tuo URL OCPP al seguente indirizzo e-mail di Schneider: [services@ch.schneider-electric.com](mailto:services@ch.schneider-electric.com)

- Schneider Electric ti contatterà a breve.

## EVlink Smart Wallbox & EVlink Parking

### Integrazione di EVlink Smart Wallbox

Collegarsi alla stazione tramite Ethernet

1.  Assegna al tuo PC un indirizzo IP statico: 192.168.0.x (x è un numero intero compreso tra 241 e 249)

2.  Subnet mask: 255.255.255.0 + nessun gateway predefinito, nessun DNS e nessun proxy

3.  Apri il browser web e digita http://192.168.0.102 nella barra degli indirizzi.

4.  Nome utente ( admin ), password ( ADMIN )

## Interfaccia web

### General Settings

1.  Charging Station Name: rimuovi tutti gli spazi

2.  Station type su Supervised

3.  Authentication done by Supervision

![Schneider Electric – Immagine 13](/img/ocpp-ladestationen-schneider-electric/13.png)

### Supervision

1.  Imposta OCPP Version su 1.6

2.  Supervision URL: inserisci integralmente l'URL dal tuo account

3.  Rinomina Charging station ID + senza spazi.

Infine, riavvia la stazione!

![Schneider Electric – Immagine 14](/img/ocpp-ladestationen-schneider-electric/14.png)

### Sistema di gestione del carico EVlink

Collegarsi al LMS tramite Ethernet ETH1

1.  Assegna al tuo PC un indirizzo IP statico: 192.168.0.x (x è un numero intero compreso tra 241 e 249)

2.  Subnet mask: 255.255.255.0 + nessun gateway predefinito, nessun DNS e nessun proxy

3.  Apri il browser web e digita http://192.168.0.128 nella barra degli indirizzi.

4.  Nome utente ( admin ), password ( ADMIN )

### Remote Supervision

1.  Enable su "ON"

2.  Remote supervision URL address: inserisci integralmente l'URL eCarUp dal tuo account.

![Schneider Electric – Immagine 15](/img/ocpp-ladestationen-schneider-electric/15.png)

### Impostazioni avanzate

- Admin --> Avanzate --> Impostazioni avanzate --> Attiva numerazione dei punti di ricarica --> ON

⚠️ Attenzione: attiva questa funzione solo per stazioni con 2 connettori.

![Schneider Electric – Immagine 16](/img/ocpp-ladestationen-schneider-electric/16.png)

### Charging Stations

1.  È obbligatorio creare una zona in cui poter aggiungere la stazione.

2.  È obbligatorio rinominare la Box Identity

![Schneider Electric – Immagine 17](/img/ocpp-ladestationen-schneider-electric/17.png)

### Controllo finale

1.  La stazione dovrebbe ora ricevere l'URL di supervisione dal LMS

2.  L'ID della stazione di ricarica dovrebbe essere identico

![Schneider Electric – Immagine 18](/img/ocpp-ladestationen-schneider-electric/18.png)

## Impostazioni avanzate tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale.

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Schneider Electric – Immagine 19](/img/ocpp-ladestationen-schneider-electric/19.png)

![Schneider Electric – Immagine 20](/img/ocpp-ladestationen-schneider-electric/20.png)
