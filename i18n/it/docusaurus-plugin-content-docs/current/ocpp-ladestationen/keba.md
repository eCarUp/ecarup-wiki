---
title: 'KEBA'
slug: '/ocpp-ladestationen/keba'
description: 'Guida all''integrazione backend'
sidebar_label: 'KEBA'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-keba/01.png" bildtext="Keba P30" titel="Keba P30" href="https://www.keba.com/de/emobility/elektromobilitaet" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-keba/02.png" bildtext="Keba P40" titel="Keba P40" href="https://www.keba.com/de/emobility/elektromobilitaet" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione backend

Le stazioni KEBA possono essere integrate nel sistema di conteggio di eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza difficoltà le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo. 

- Presupposto per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori delle stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua il login con i dati del tuo account.

3.  Nel menu a sinistra, fai clic sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

1.ws Link senza Basic Auth: testato e funzionante

2.wss senza Basic Auth: testato e funzionante

3.wss con Basic Auth: testato e funzionante

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione della Keba Wallbox P40

- versione firmware testata: 1.3.0 

Integra la stazione in una rete a cui puoi accedere tramite l'indirizzo IP. 

<Embed src="https://demo.arcade.software/IYNbI7tB2YAuuK25c3KR?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true" aspect="1.660" title="Wiki - KEBA" />

1.  Apri nel browser l'indirizzo IP della stazione

2.  Effettua il login:

Default Password: viene fornita con le istruzioni.

3.  Ora, in OCPP, effettua le seguenti impostazioni:

Chargepoint Identity: "nome della stazione"

Attenzione: il nome della stazione (Chargepoint Identity) non deve contenere spazi né caratteri speciali, ad eccezione del trattino basso "\_". Dopo l'integrazione riuscita, la stazione può essere rinominata senza problemi sulla piattaforma eCarUp.

OCPP Communication Type: "OCPP 1.6 JSON"

Central System Hostname: "www.ecarup.com"

Central System Port: "80"

Central System Path: "api/Ocpp16/xxxxxxxx

4.  Fai clic su "Apply".

![KEBA – Figura 3](/img/ocpp-ladestationen-keba/03.png)

5\. Authorization su "ON"

6\. Online Authorization Mode "FirstOnline".

7\. Fai clic su "Apply"

![KEBA – Figura 4](/img/ocpp-ladestationen-keba/04.png)

<div className="row">
<div className="col col--8">

Se vuoi collegare la stazione con WSS e Basic Auth, nell'app Keba devi effettuare le seguenti impostazioni:

- Connessione sicura al sistema centrale per WSS

- Autenticazione del sistema centrale per Basic Auth.

L'Authorization Key deve essere prelevata dall'account eCarUp e inserita inoltre nel portale web.

</div>
<div className="col col--4 text--center">

![KEBA – Figura 5](/img/ocpp-ladestationen-keba/05.png)

</div>
</div>

Controllo

![KEBA – Figura 6](/img/ocpp-ladestationen-keba/06.png)

![KEBA – Figura 7](/img/ocpp-ladestationen-keba/07.png)

## Integrazione della Keba Wallbox P30 X Serie

<Video src="db3zpnosgv8" title="Video YouTube, integrare una stazione KEBA nel backend di eCarUp" />

### KEBA: legge sulle misure e sulla taratura in Germania

Con le stazioni di ricarica KEBA ME è possibile fatturare in modo semplice, tramite eCarUp e con carta di credito, sessioni di ricarica semipubbliche e pubbliche conformi alle norme vigenti in materia di misure e taratura. Maggiori informazioni: [Eichrecht in Germania](/sonstige-informationen/eichrecht-in-deutschland).

### Importante: tenere conto della circolare Keba

![KEBA – Figura 8](/img/ocpp-ladestationen-keba/08.png)

![KEBA – Figura 9](/img/ocpp-ladestationen-keba/09.png)

### Importante: versione del firmware!

Affinché tu possa installare la tua stazione di ricarica KEBA x-series (anche M&E / versione firmware: 1.9.1 o successiva / il software più recente è sempre disponibile nei [download KEBA](https://www.keba.com/de/emobility/service-support/downloads/downloads)) in un account eCarUp, devi effettuare i seguenti preparativi:

### Integrazione della x-series

1.  Collega il tuo computer all'indirizzo IP della stazione. L'indirizzo IP viene visualizzato sul display della stazione.

2.  Effettua il login:

Default Nome utente: admin

Default Password: Keba\_xxxx( numero di serie della stazione)

3.  Ora, in OCPP, effettua le seguenti impostazioni:

Chargepoint Identity: "nome della stazione"

Attenzione: il nome della stazione (Chargepoint Identity) non deve contenere spazi né caratteri speciali, ad eccezione del trattino basso "\_". Dopo l'integrazione riuscita, la stazione può essere rinominata senza problemi sulla piattaforma eCarUp.

OCPP Communication Type: "OCPP 1.6 JSON"

Central System Hostname: "www.ecarup.com"

Central System Port: "80"

Central System Path: "api/Ocpp16/&#123;codice dal sito web eCarUp&#125;". Hai salvato questo codice al punto tre della preparazione (vedi sopra).

![KEBA – Figura 10](/img/ocpp-ladestationen-keba/10.png)

4\. Configurazione dei dispositivi

Menu: Configurazione --> Dispositivi (il caricamento della pagina richiede un po' di tempo)

Autorizzazione: ON

Online Authorization Mode: First Online

![KEBA – Figura 11](/img/ocpp-ladestationen-keba/11.png)

Nota: se la tua azienda supporta un proxy nel sistema, puoi effettuare queste impostazioni direttamente sulla stazione KEBA. 

La stazione di ricarica KEBA x-series è ora registrata nel tuo account eCarUp. Ora puoi definire le condizioni di utilizzo della stazione di ricarica nel portale web eCarUp.

### Integrazione della c-series

Le stazioni di ricarica KEBA c-series possono essere installate come slave delle stazioni di ricarica KEBA x-series. Esattamente come per la x-series, puoi definire autonomamente e senza difficoltà le condizioni di utilizzo delle tue stazioni, non appena sono installate nel tuo account. Sei tu a decidere chi può caricare, quando e a quale prezzo.

1.  Nella stazione slave, imposta il DIP switch "DSW2.5" su "On"

![KEBA – Figura 12](/img/ocpp-ladestationen-keba/12.png)

<div className="row">
<div className="col col--6">

2\. Collega il tuo computer all'indirizzo IP del master, ovvero la stazione di ricarica KEBA x-series.

Default Nome utente: admin

Default Password: numero di serie della stazione di ricarica KEBA x-Series

3. Ora, in OCPP, effettua le seguenti impostazioni:

1.  In Operation Mode passa a Charging Network

2.  Indica il numero di slave

3.  Inserisci i numeri di serie degli slave

</div>
<div className="col col--6 text--center">

![KEBA – Figura 13](/img/ocpp-ladestationen-keba/13.png)

</div>
</div>

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![KEBA – Figura 14](/img/ocpp-ladestationen-keba/14.png)

![KEBA – Figura 15](/img/ocpp-ladestationen-keba/15.png)
