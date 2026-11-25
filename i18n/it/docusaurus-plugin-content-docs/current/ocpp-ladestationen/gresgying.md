---
title: 'Gresgying'
slug: '/ocpp-ladestationen/gresgying'
description: 'Guida all''integrazione backend'
sidebar_label: 'Gresgying'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-gresgying/01.png" bildtext="Gresgying Turbo Wallbox" titel="Turbo Wallbox" href="https://www.gresgying.global/product/turbo-wallbox.html" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-gresgying/02.png" bildtext="Gresgying 120kW & 180kW DC Charging Station" titel="120kW & 180kW DC Charging Station" href="https://www.gresgying.global/product/120kw-180kw-dc-charging-station.html" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione backend

Le stazioni di ricarica Gresgying possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire in modo semplice e autonomo le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo. 

- Presupposto per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal) 

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni".

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Gresgying AC Wallbox

- "firmwareVersion":"C-V1.01.24 P-V1.01.21" 

- Installa l'app Gresgying

- Versione dell'app testata: V1.0.10

![Gresgying – Figura 3](/img/ocpp-ladestationen-gresgying/03.png)

### Passaggio 1

<div className="row">
<div className="col col--6">

- Collega la stazione al tuo account Gresgying tramite l'app.

</div>
<div className="col col--6 text--center">

![Gresgying – Figura 4](/img/ocpp-ladestationen-gresgying/04.png)

</div>
</div>

### Passaggio 2

<div className="row">
<div className="col col--6">

- Una volta che la stazione è stata collegata correttamente, nell'app appare così

</div>
<div className="col col--6 text--center">

![Gresgying – Figura 5](/img/ocpp-ladestationen-gresgying/05.png)

</div>
</div>

### Passaggio 3

<div className="row">
<div className="col col--6">

- In Network Configuration puoi selezionare il tipo di connessione.

- In OCPP Server puoi aggiungere l'URL.

</div>
<div className="col col--6 text--center">

![Gresgying – Figura 6](/img/ocpp-ladestationen-gresgying/06.png)

</div>
</div>

### Passaggio 4

<div className="row">
<div className="col col--6">

- In Path inserisci l'intero URL del tuo account eCarUp.

- Tieni presente che dopo l'URL deve essere aggiunto il numero di serie della stazione.

- Clicca su Connect.

</div>
<div className="col col--6 text--center">

![Gresgying – Figura 7](/img/ocpp-ladestationen-gresgying/07.png)

</div>
</div>

### Esempio di URL:

- ws://www.ecarup.com/api/Ocpp16/D0xxxxxxxxxx/Seriennummer

### Al termine, verifica la seguente impostazione:

- Charging Mode deve essere impostato su "Online". 

![Gresgying – Figura 8](/img/ocpp-ladestationen-gresgying/08.png)

## Gresgying F3-EU 180 kW

- "firmwareVersion":"C2032\_V2.8.2" 

### La stazione può essere configurata sia localmente sia da remoto.

Localmente tramite lo schermo:

- Consulta a tale scopo il manuale d'uso in dotazione. 

Da remoto tramite il Device Management System:

- Clicca su "Device Manage" e cerca la stazione desiderata

- Seleziona "Set Parameters"

- "Operation Platfrom address"

- Inserisci l'URL OCPP del tuo account e salva l'impostazione.

- Poi riavvia la stazione.

![Gresgying – Figura 9](/img/ocpp-ladestationen-gresgying/09.png)

![Gresgying – Figura 10](/img/ocpp-ladestationen-gresgying/10.png)

## Impostazioni avanzate tramite il tool di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo di 30-60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Gresgying – Figura 11](/img/ocpp-ladestationen-gresgying/11.png)

![Gresgying – Figura 12](/img/ocpp-ladestationen-gresgying/12.png)
