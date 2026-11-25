---
title: 'POWERJames'
slug: '/ocpp-ladestationen/powerjames'
description: 'Guida all''integrazione del backend'
sidebar_label: 'POWERJames'
---
## Guida all'integrazione del backend

Le stazioni POWERJames possono essere integrate nel sistema di conteggio di eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo.

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-powerjames/01.png" bildtext="POWERJames Wallbox POWERJames Charges" titel="Wallbox POWERJames Charges" href="https://powerjames.com/#funktionen" bildhoehe="10rem" mittig />

</Kacheln>

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## POWERJames Charge S

- "firmwareVersion":"22.0.35"

### Passaggio 1

- Collega la stazione di ricarica al Wi-Fi locale.

- Suggerimento: consulta la Quick Guide in dotazione.

### Passaggio 2

- Contatta quindi il supporto di PowerJames all'indirizzo [support@powerjames.com](mailto:support@powerjames.com) per comunicare che desideri collegare la stazione a eCarUp.

### Passaggio 3

- Non appena hai ricevuto il via libera, puoi iniziare.

- Collegati di nuovo alla wallbox tramite lo smartphone e digita nuovamente l'indirizzo IP 192.168.4.1 nel browser.

### Passaggio 4

- Clicca su "OCPP Configuration"

![POWERJames – Figura 2](/img/ocpp-ladestationen-powerjames/02.png)

### Passaggio 5

<div className="row">
<div className="col col--6">

- Attiva l'interfaccia OCPP

- ChargeBox ID viene impostato automaticamente.

- Aggiungi l'URL OCPP del tuo account eCarUp.

- Alla fine salva e riavvia la stazione.

</div>
<div className="col col--6 text--center">

![POWERJames – Figura 3](/img/ocpp-ladestationen-powerjames/03.png)

</div>
</div>

### Esempio:

- URL OCPP del tuo account: ws://www.ecarup.com/api/Ocpp16/D0xxxxxxxxxx

### Passaggio 6

<div className="row">
<div className="col col--6">

- Controllo finale: alla voce OCPP deve essere visualizzato "Active".

- Con questo la configurazione presso PowerJames è conclusa e il punto di misura può essere modificato in eCarUp.

</div>
<div className="col col--6 text--center">

![POWERJames – Figura 4](/img/ocpp-ladestationen-powerjames/04.png)

</div>
</div>

## Impostazioni avanzate tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale.

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![POWERJames – Figura 5](/img/ocpp-ladestationen-powerjames/05.png)

![POWERJames – Figura 6](/img/ocpp-ladestationen-powerjames/06.png)
