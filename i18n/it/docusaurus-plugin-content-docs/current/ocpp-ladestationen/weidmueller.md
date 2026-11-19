---
title: 'Weidmüller'
slug: '/ocpp-ladestationen/weidmueller'
description: 'Guida all''integrazione del backend'
sidebar_label: 'Weidmüller'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-weidmueller/01.jpg" bildtext="Weidmüller AC-Smart Advance" titel="AC-Smart Advance" href="https://www.weidmueller.de/de/produkte/elektronik/wallbox/index.jsp?gclid=CjwKCAjw2K6lBhBXEiwA5RjtCbAmZOvWrCNlfC8cwdbzRLt3y6OgvMq4_sHL43wfaHOBy_34iB-q9BoC7WUQAvD_BwE" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-weidmueller/02.jpg" bildtext="Weidmüller Wallbox" titel="Wallbox" href="https://www.weidmueller.de/de/produkte/elektronik/wallbox/index.jsp?gclid=CjwKCAjw2K6lBhBXEiwA5RjtCbAmZOvWrCNlfC8cwdbzRLt3y6OgvMq4_sHL43wfaHOBy_34iB-q9BoC7WUQAvD_BwE" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione del backend

Le stazioni Weidmüller possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può ricaricare, quando e a quale prezzo. 

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) e accedi con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Collegamento delle stazioni di ricarica Weidmüller

### AC-Smart Advance

- Processo di fine produzione da parte di Weidmüller a partire da 01/2025 per questo hardware


- Apri le impostazioni di rete e Internet del tuo PC

- Qui devi assegnare un indirizzo IP statico, ad es. 192.168.0.72

- Poi collega il PC alla wallbox e apri nel browser il seguente IP "predefinito" ("Default"): 192.168.0.8 

- Per i dati di accesso consulta la guida fornita in dotazione

- La versione del software deve essere almeno 01.08.01

- Importante: con la versione attuale non è possibile visualizzare nell'app la potenza di ricarica attiva !


![Weidmüller – Figura 3](/img/ocpp-ladestationen-weidmueller/03.png)

1.  Attivare Enable OCPP

2.  Interface: qui si può scegliere un mezzo di comunicazione qualsiasi

3.  Portal address = [www.ecarup.com](http://www.ecarup.com)

4.  Portal port = 80 (porta standard in uscita)

5.  Portal path = api/Ocpp16/xxxxxxxxxx/numero di serie della stazione


Esempio: api/Ocpp16/we2eb484wrgwoir/0123456789

6.  Heartbeat Intervall 60s

7.  MeterValue sample Interval 60s


![Weidmüller – Figura 4](/img/ocpp-ladestationen-weidmueller/04.png)

8\. Enable charging = Disabled

9\. Freemode = non attivo

10\. RFID = attivo

11\. Website, Modbus RTU/TCP and APP = attivo

Riavviare la stazione. 

### Weidmüller (modello precedente con controller Wallbe)

- Apri le impostazioni di rete e Internet del tuo PC

- Qui devi assegnare un indirizzo IP statico, ad es. 192.168.0.72

- Poi collega il PC alla wallbox e apri nel browser il seguente IP "predefinito" ("Default"): 192.168.0.8 e PW: wallbe7213

- Il firmware deve essere almeno alla versione: BF-01.04.20


### Interfaccia web

### Backend

- Vai al menu "Network"

- Seleziona OCPP-J 1.6

- Mezzo di comunicazione desiderato

- OCPP Vendor non deve contenere spazi

- Il websocket deve essere suddiviso nelle sue parti


### Websocket di eCarUp

- Inserirlo come mostrato nella schermata

- Prestare attenzione alla parte finale, api/Ocpp16/weoih48zlkuhr9/00000010638




- Importante: non dimenticare alla fine / (slash) + 00000010638 (numero di serie della stazione)!


![Weidmüller – Figura 5](/img/ocpp-ladestationen-weidmueller/05.png)

Il numero di serie della tua wallbox si trova come segue:

![Weidmüller – Figura 6](/img/ocpp-ladestationen-weidmueller/06.png)

Se si utilizzano schede RFID, impostare anche il seguente parametro:

![Weidmüller – Figura 7](/img/ocpp-ladestationen-weidmueller/07.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo tra 30 e 60s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Weidmüller – Figura 8](/img/ocpp-ladestationen-weidmueller/08.png)

![Weidmüller – Figura 9](/img/ocpp-ladestationen-weidmueller/09.png)
