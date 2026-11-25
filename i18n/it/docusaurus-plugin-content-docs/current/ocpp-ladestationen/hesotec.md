---
title: 'Hesotec'
slug: '/ocpp-ladestationen/hesotec'
description: 'Guida all''integrazione del backend'
sidebar_label: 'Hesotec'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-hesotec/01.jpg" bildtext="Hesotec eBox wr30" titel="eBox wr30" href="https://electrify.hesotec.de/produkte/ebox-wr30" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-hesotec/02.jpg" bildtext="Hesotec eBox sr10" titel="eBox sr10" href="https://electrify.hesotec.de/produkte/ebox-wr30" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-hesotec/03.jpg" bildtext="Hesotec eSat r10/r20" titel="eSat r10/r20" href="https://electrify.hesotec.de/produkte/ebox-wr30" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione del backend

Le stazioni Hesotec possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Collegamento della stazione di ricarica Hesotec

- Scarica dall'App Store l'app "electrify charge control" di Hesotec

- Nell'app, clicca sul + per collegare la stazione desiderata

- La connessione può essere configurata tramite hotspot oppure tramite l'eLMS di Hesotec

- Seleziona il tuo modello e assegna un nome alla stazione

- Poi collega lo smartphone all'hotspot della stazione di ricarica

- Tutte le informazioni sull'hotspot (SSID\_EBOX\_XXX incl. password) si trovano nella busta fornita in dotazione.

- Quando la stazione si è collegata correttamente, appare nell'app.

## Play Store

![Hesotec – Figura 4](/img/ocpp-ladestationen-hesotec/04.png)

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Figura 5](/img/ocpp-ladestationen-hesotec/05.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Figura 6](/img/ocpp-ladestationen-hesotec/06.jpg)

</div>
</div>

- Nell'app, clicca sui 3 puntini in alto a destra

- Devono essere attivati "Impostazioni avanzate" e "Tecnico"

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Figura 7](/img/ocpp-ladestationen-hesotec/07.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Figura 8](/img/ocpp-ladestationen-hesotec/08.jpg)

</div>
</div>

- Seleziona le impostazioni generali

- Imposta l'autorizzazione su RFID/App e

- Attiva "Termina con RFID"

- Salva e torna alle impostazioni

<div className="row">
<div className="col col--6 text--center">

![Hesotec – Figura 9](/img/ocpp-ladestationen-hesotec/09.jpg)

</div>
<div className="col col--6 text--center">

![Hesotec – Figura 10](/img/ocpp-ladestationen-hesotec/10.jpg)

</div>
</div>

<div className="row">
<div className="col col--6">

- Apri le impostazioni avanzate

- In Backend OCPP, inserisci l'URL eCarUp dal tuo portale web

- Esempio: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxx/15023910 (numero di serie della stazione)

- Imposta la modalità su OCPP

</div>
<div className="col col--6 text--center">

![Hesotec – Figura 11](/img/ocpp-ladestationen-hesotec/11.png)

</div>
</div>

- Importante: nell'URL, dopo la / inserisci il numero di serie della tua stazione!

- Poi riavvia la stazione

## Impostazioni avanzate tramite tool di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale.

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Hesotec – Figura 12](/img/ocpp-ladestationen-hesotec/12.png)

![Hesotec – Figura 13](/img/ocpp-ladestationen-hesotec/13.png)
