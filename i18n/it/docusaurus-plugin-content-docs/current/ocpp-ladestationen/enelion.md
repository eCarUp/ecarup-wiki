---
title: 'Enelion'
slug: '/ocpp-ladestationen/enelion'
description: 'Guida all''integrazione del backend'
sidebar_label: 'Enelion'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-enelion/01.jpg" bildtext="Enelion Lumina" titel="Lumina" href="https://enelion.com/product/lumina/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-enelion/02.png" bildtext="Enelion Vertica" titel="Vertica" href="https://enelion.com/product/vertica/" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione del backend

Le stazioni Enelion possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo. 

- Presupposto per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione di stazioni OCPP

1.  Assicurati che la tua stazione sia installata e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stationen".

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Enelion Lumina

### Passaggi preliminari per l'integrazione della Lumina

1.  Accendi la tua Lumina

2.  Usa uno smartphone e vai alle impostazioni WLAN

3.  Seleziona l'hotspot della wallbox Lumina (Enelion-xxxx-xxx)

4.  Apri il browser sullo smartphone e inserisci il seguente indirizzo IP: 192.168.8.8

5.  Si apre la pagina di configurazione di Enelion

6.  Inserisci la password richiesta. La password si trova nella lettera di Enelion fornita in dotazione 

### Passaggio 1

<div className="row">
<div className="col col--6">

- Sotto Network la stazione può essere collegata tramite WLAN o GSM.

</div>
<div className="col col--6 text--center">

![Enelion – Figura 3](/img/ocpp-ladestationen-enelion/03.png)

</div>
</div>

### Passaggio 2

- Sotto Charger selezionare "Authorization"

![Enelion – Figura 4](/img/ocpp-ladestationen-enelion/04.png)

### Passaggio 3

- Disattivare la modalità FreeCharge e salvare

![Enelion – Figura 5](/img/ocpp-ladestationen-enelion/05.png)

### Passaggio 4

- Sotto OCPP selezionare "Connection"

![Enelion – Figura 6](/img/ocpp-ladestationen-enelion/06.png)

### Passaggio 5

- Attivare OCPP Connection

- Sotto Connection settings:

1.  Impostare Device su Master

2.  Connector ID 1

3.  Freecharge idTAg non deve essere vuoto. Qui è possibile registrare un badge master (whitelist) oppure, se non ha alcuna rilevanza, procedere in modo analogo all'esempio dello screenshot

4.  Inserire l'URL eCarUp del proprio account

5.  Anche Charge Point ID non deve essere vuoto e può essere denominato individualmente. (Attenzione: max. 20 caratteri e nessuno spazio)

\+ Salvare e riavviare

Controllare lo stato della connessione della stazione nella dashboard. 

<div className="row">
<div className="col col--6 text--center">

![Enelion – Figura 7](/img/ocpp-ladestationen-enelion/07.png)

</div>
<div className="col col--6 text--center">

![Enelion – Figura 8](/img/ocpp-ladestationen-enelion/08.png)

</div>
</div>

### Enelion Vertica e Wallbox Duo

- firmwareVersion":"4.4.4

## Impostazioni avanzate tramite il tool di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da una stazione all'altra. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

3.  

![Enelion – Figura 9](/img/ocpp-ladestationen-enelion/09.png)

![Enelion – Figura 10](/img/ocpp-ladestationen-enelion/10.png)
