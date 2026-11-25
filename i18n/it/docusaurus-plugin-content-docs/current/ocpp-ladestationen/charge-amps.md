---
title: 'Charge Amps'
slug: '/ocpp-ladestationen/charge-amps'
description: 'Guida all''integrazione backend'
sidebar_label: 'Charge Amps'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-charge-amps/01.jpg" bildtext="Charge Amps Aura" titel="Charge Amps Aura" href="https://www.chargeamps.com/de/product/charge-amps-aura/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-charge-amps/02.jpg" bildtext="Charge Amps Dawn" titel="Charge Amps Dawn" href="https://www.chargeamps.com/de/product/charge-amps-aura/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-charge-amps/03.jpg" bildtext="Charge Amps Halo" titel="Charge Amps Halo" href="https://www.chargeamps.com/de/product/charge-amps-aura/" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione backend

Le stazioni Charge Amps possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo. 

- Presupposto per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri qui di più sulle nostre [funzioni premium](/funktionen)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione delle stazioni Charge Amps

### HALO (1 x 11 kW)

⚠️ Importante: il firmware della stazione deve essere almeno alla versione 158 

### Passaggi preliminari per l'integrazione della wallbox HALO

1.  Apri la pagina seguente e registrati: [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Una volta effettuato l'accesso, puoi aggiungere la tua wallbox HALO tramite il profilo.

3.  Poi vai alla voce di menu "Comando a distanza" ("Fernsteuerung") e attiva il blocco RFID. 

⚠️ ATTENZIONE: questo blocco deve essere attivato PRIMA dell'implementazione OCPP!

![Charge Amps – Immagine 4](/img/ocpp-ladestationen-charge-amps/04.png)

### Integrazione OCPP

1.  Accendi la tua HALO

2.  Usa uno smartphone e vai alle impostazioni WLAN

3.  Seleziona l'hotspot della wallbox HALO (HALO\_numero di serie)

4.  Apri il browser sullo smartphone e inserisci il seguente indirizzo IP: 192.168.250.1

5.  Si apre la pagina di configurazione della HALO

6.  Inserisci la password richiesta. La password si trova nella lettera di Charge Amps fornita in dotazione 

7.  Nelle impostazioni clicca sulla freccia del menu (in alto a destra)

- Alla voce di menu Wi-Fi è possibile collegare la stazione alla rete WLAN desiderata 

-  Seleziona la voce di menu "OCPP"

8.  Ora occorre inserire l'URL di eCarUp. Poi clicca su "Aggiorna" ("Aktualisieren") e riavvia la wallbox.

    Esempio di URL: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

![Charge Amps – Immagine 5](/img/ocpp-ladestationen-charge-amps/05.png)

![Charge Amps – Immagine 6](/img/ocpp-ladestationen-charge-amps/06.png)

## AURA (2 x 22 kW)

### Passaggi preliminari per l'integrazione della wallbox AURA

1.  Apri la pagina seguente e registrati: [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Una volta effettuato l'accesso, puoi aggiungere la tua wallbox Aura tramite il profilo.

3.  Poi vai alla voce di menu "Comando a distanza" ("Fernsteuerung") e attiva il blocco RFID. Questo va fatto per entrambi i connettori!

⚠️ ATTENZIONE: questo blocco deve essere attivato PRIMA dell'implementazione OCPP!

![Charge Amps – Immagine 7](/img/ocpp-ladestationen-charge-amps/07.png)

### Integrazione OCPP

1.  Accendi la tua AURA

2.  Usa uno smartphone e vai alle impostazioni WLAN

3.  Seleziona l'hotspot della wallbox AURA (AURA\_numero di serie)

4.  Apri il browser sullo smartphone e inserisci il seguente indirizzo IP: 192.168.250.1

5.  Si apre la pagina di configurazione della AURA

6.  Inserisci la password richiesta. La password si trova nella lettera di Charge Amps fornita in dotazione 

7.  Nelle impostazioni clicca sulla freccia del menu (in alto a destra)

- Alla voce di menu Wi-Fi è possibile collegare la stazione alla rete WLAN desiderata 

-  Seleziona la voce di menu "OCPP"

8.  Ora occorre inserire l'URL di eCarUp. Poi clicca su "Aggiorna" ("Aktualisieren") e riavvia la wallbox.

    Esempio di URL: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

![Charge Amps – Immagine 8](/img/ocpp-ladestationen-charge-amps/05.png)

![Charge Amps – Immagine 9](/img/ocpp-ladestationen-charge-amps/06.png)

### Informazioni importanti sulla AURA

- Per impostazione predefinita, la AURA è configurata in modo da poter essere sbloccata di nuovo solo con una tessera RFID dopo la fine della sessione di ricarica. (Disaccoppiamento del connettore) 

- Ciò significa che, se termini la sessione di ricarica dal lato del veicolo, il meccanismo della stazione per il connettore non viene sbloccato automaticamente. 

- Questo problema può essere risolto con l'aiuto del nostro strumento di manutenzione (eCarUp Premium); procedi come segue:

1.  Parametro Get Configuration e la chiave è UnlockConnectorOnEVSideDisconnect (impostazione predefinita: false).

2.  Parametro per la modifica Change Configuration e, di nuovo con la chiave UnlockConnectorOn EVSideDisconnect + Value, impostare su true e salvare con Set.

1.

![Charge Amps – Immagine 10](/img/ocpp-ladestationen-charge-amps/10.png)

2.

![Charge Amps – Immagine 11](/img/ocpp-ladestationen-charge-amps/11.png)

## Dawn (1 x 22 kW)

Importante: versione firmware testata, 1.3.5

### Passaggi preliminari per l'integrazione della wallbox Dawn

1.  Apri la pagina seguente e registrati: [https://my.charge.space](https://my.charge.space/userapp/#/dashboard)

2.  Una volta effettuato l'accesso, puoi aggiungere la tua wallbox Dawn tramite il profilo.

3.  Poi vai alla voce di menu "Comando a distanza" ("Fernsteuerung") e attiva il blocco RFID. 

⚠️ ATTENZIONE: questo blocco deve essere attivato PRIMA dell'implementazione OCPP!

![Charge Amps – Immagine 12](/img/ocpp-ladestationen-charge-amps/12.png)

### Integrazione OCPP

1.  Accendi la tua Dawn.

2.  Per l'integrazione usa il tuo smartphone e installa l'app Installer di Charge Amps

3.  Apri l'app e avvia una ricerca (via Bluetooth). Importante: questa operazione può essere eseguita solo nei primi 10 minuti dall'alimentazione elettrica della stazione.

![Charge Amps – Immagine 13](/img/ocpp-ladestationen-charge-amps/13.png)

<div className="row">
<div className="col col--6">

4\. Collega la stazione di ricarica al mezzo desiderato (WLAN, LAN o tramite eSIM)

5\. Vai su CPMS e clicca su modifica

</div>
<div className="col col--6 text--center">

![Charge Amps – Immagine 14](/img/ocpp-ladestationen-charge-amps/14.png)

</div>
</div>

<div className="row">
<div className="col col--6">

6\. Clicca su Connect to ohter CPMS per inserire l'URL di eCarUp

</div>
<div className="col col--6 text--center">

![Charge Amps – Immagine 15](/img/ocpp-ladestationen-charge-amps/15.png)

</div>
</div>

<div className="row">
<div className="col col--6">

7\. Digita manualmente l'URL di eCarUp dal tuo account.

Esempio: ws://www.ecarup.com/api/Ocpp16/xxxxxxxxxxxxxx

8\. Clicca su Connect

</div>
<div className="col col--6 text--center">

![Charge Amps – Immagine 16](/img/ocpp-ladestationen-charge-amps/16.png)

</div>
</div>

8. Appare una conferma

![Charge Amps – Immagine 17](/img/ocpp-ladestationen-charge-amps/17.png)

<div className="row">
<div className="col col--6">

9\. Verifica nella panoramica, incluso lo stato della connessione.

10\. Conferma la configurazione e concludi.

</div>
<div className="col col--6 text--center">

![Charge Amps – Immagine 18](/img/ocpp-ladestationen-charge-amps/18.png)

</div>
</div>

11\. La stazione ora compare nel tuo account eCarUp. 

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da una stazione all'altra. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Charge Amps – Immagine 19](/img/ocpp-ladestationen-charge-amps/19.png)

![Charge Amps – Immagine 20](/img/ocpp-ladestationen-charge-amps/20.png)
