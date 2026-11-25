---
title: 'Juice Technology'
slug: '/ocpp-ladestationen/juice-technology'
description: 'Guida all''integrazione nel backend'
sidebar_label: 'Juice Technology'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-juice-technology/01.jpg" bildtext="Juice Technology Charger me 3" titel="Charger me 3" href="https://juice.world/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-juice-technology/02.jpg" bildtext="Juice Technology Charger 2" titel="Charger 2" href="https://juice.world/" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione nel backend

Le stazioni Juice possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo. 

- Presupposto per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua il login con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione delle stazioni di ricarica Juice

<Video src="nj_x0WNQhNk" title="Video YouTube, guida all'integrazione «Juice Technology nel backend eCarUp»" />

Videoguida all'integrazione di Juice Technology nel backend eCarUp

## Juice Charger me 3

### Installazione

Accedere alla stazione (statico):

1\. Non appena sei collegato alla stazione (attenzione: il PC deve trovarsi nello stesso intervallo IP), apri il tuo browser di fiducia e inserisci il seguente indirizzo IP: 192.168.123.123/

2\. Login: i dati di accesso si trovano nella guida in dotazione.

Standard: 

Username: operator

PW: JuiCeMeUP!

3\. Configura poi il Juice Charger me 3 secondo le tue esigenze. 



Accedere alla stazione (dinamico):

1.  Collega il cavo di rete al router e individua l'indirizzo IP nell'elenco del router. 

2.   Login: i dati di accesso si trovano nella guida in dotazione.


Standard: 

Username: operator

PW: JuiCeMeUP!

3.   Configura poi il Juice Charger me 3 secondo le tue esigenze. 




### Impostazioni OCPP:

![Juice Technology – Figura 3](/img/ocpp-ladestationen-juice-technology/03.png)

1.  Seleziona il tipo di connessione (WLAN, LAN ecc.)

2.  Aggiungi l'URL eCarUp dal tuo account. 


Esempio: ws://www.ecarup.com/api/OCPP16/wgwepog4980h4ho

![Juice Technology – Figura 4](/img/ocpp-ladestationen-juice-technology/04.png)

\+ impostare Meter Value Sample Interval al massimo a 60 secondi. 

### Impostazioni di autorizzazione

![Juice Technology – Figura 5](/img/ocpp-ladestationen-juice-technology/05.png)

- Disattivare la ricarica gratuita

- Disattivare la whitelist locale


salvare tutte le impostazioni e riavviare la stazione. 

## Juice Charger 2

### Installazione

Accedere alla stazione:

1\. Non appena sei collegato alla stazione, apri il tuo browser di fiducia e inserisci il seguente indirizzo IP: 192.168.4.1:1234

2\. Login: su questa pagina inserisci la password standard 1234567890.

3\. Configura poi il Juice Charger 2 secondo le tue esigenze. 

![Juice Technology – Figura 6](/img/ocpp-ladestationen-juice-technology/06.png)

### Integrazione OCPP

⚠️ Importante: l'URL generato dall'account eCarUp deve essere scomposto secondo il seguente esempio. 

1.  ws:// va omesso; hostpath e dominio devono essere inseriti singolarmente / separati.

2.  (\*\*\*\* deve essere sostituito ad es. con F749E....)

3.  Il Chargebox ID non deve contenere spazi

4.  Salvare la configurazione

5.  La stazione si riavvia.


![Juice Technology – Figura 7](/img/ocpp-ladestationen-juice-technology/07.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da una stazione all'altra. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Juice Technology – Figura 8](/img/ocpp-ladestationen-juice-technology/08.png)

![Juice Technology – Figura 9](/img/ocpp-ladestationen-juice-technology/09.png)
