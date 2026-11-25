---
title: 'Daze'
slug: '/ocpp-ladestationen/daze'
description: 'Guida all''integrazione del backend'
sidebar_label: 'Daze'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-daze/01.png" bildtext="Daze Home" titel="Home" href="https://daze.eu/en-ch/store/dazebox-home-s/?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA.." bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-daze/02.png" bildtext="Daze Duo" titel="Duo" href="https://www.daze.eu/en/store?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA.." bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-daze/03.png" bildtext="Daze Urban" titel="Urban" href="https://www.daze.eu/en/store?_gl=1*b49m7b*_up*MQ..*_ga*NzI2NTg0NTYxLjE3MTgzNjY5OTk.*_ga_ZR8FBKG0V4*MTcxODM2Njk5OC4xLjAuMTcxODM2Njk5OC4wLjAuMA.." bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione del backend

Le stazioni Daze possono essere integrate nel sistema di conteggio di eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo.

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni premium](/funktionen)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" (Stationen).

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione di Dazebox Home, Share e Duo

Importante: versione firmware testata della Dazebox Home, 16.0.6.0

Importante: versione firmware testata di Share e Duo, 2.1.4.1.1.4

<Video src="BLvGWpLkiiY" title="Video YouTube, guida all'integrazione di DAZE nel backend di eCarUp" />

<div className="row">
<div className="col col--8">

Guida rapida all'integrazione della DAZE Box nel backend di eCarUp

- Installa l'app Daze.

- Versione testata dell'app: V. 6.1.0(97)

</div>
<div className="col col--4 text--center">

![Daze – Figura 4](/img/ocpp-ladestationen-daze/04.png)

</div>
</div>

### Passaggio 1

Aggiungi una rete.

![Daze – Figura 5](/img/ocpp-ladestationen-daze/05.png)

### Passaggio 2

<div className="row">
<div className="col col--6">

A questo punto configura la tua stazione di ricarica e aggiungi la rete Wi-Fi.

</div>
<div className="col col--6 text--center">

![Daze – Figura 6](/img/ocpp-ladestationen-daze/06.png)

</div>
</div>

### Passaggio 3

<div className="row">
<div className="col col--6">

Una volta aggiunta la stazione di ricarica, trovi la seguente panoramica

</div>
<div className="col col--6 text--center">

![Daze – Figura 7](/img/ocpp-ladestationen-daze/07.png)

</div>
</div>

### Passaggio 4

<div className="row">
<div className="col col--6">

Per l'integrazione OCPP clicca in alto a destra sulle 3 linee (impostazioni)

</div>
<div className="col col--6 text--center">

![Daze – Figura 8](/img/ocpp-ladestationen-daze/08.png)

</div>
</div>

### Passaggio 5

Attiva OCPP e seleziona eCarUp come provider.

![Daze – Figura 9](/img/ocpp-ladestationen-daze/09.png)

### Passaggio 6

<div className="row">
<div className="col col--6">

Inserisci ora nel campo URL l'URL del portale web dell'account eCarUp desiderato.

</div>
<div className="col col--6 text--center">

![Daze – Figura 10](/img/ocpp-ladestationen-daze/10.png)

</div>
</div>

### Passaggio 7

L'ID della stazione di ricarica viene compilato automaticamente.

Poi clicca su Fine (Ende).

Dopo il riavvio della stazione, questa dovrebbe ora comparire nel tuo account.

Importante: durante l'intero processo la stazione deve essere collegata al tuo smartphone tramite Bluetooth.

## Importante per la stazione Urban con 2 connettori:

- Per l'identificazione, il connettore sinistro e quello destro devono essere completati con le ultime tre cifre del numero di serie.

![Daze – Figura 11](/img/ocpp-ladestationen-daze/11.png)

![Daze – Figura 12](/img/ocpp-ladestationen-daze/12.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale.

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Daze – Figura 13](/img/ocpp-ladestationen-daze/13.png)

![Daze – Figura 14](/img/ocpp-ladestationen-daze/14.png)
