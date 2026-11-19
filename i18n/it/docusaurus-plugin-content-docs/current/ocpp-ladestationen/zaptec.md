---
title: 'Zaptec'
slug: '/ocpp-ladestationen/zaptec'
description: 'Guida all''integrazione del backend'
sidebar_label: 'Zaptec'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-zaptec/01.jpg" bildtext="Zaptec Go" titel="Zaptec Go" href="https://www.zaptec.com/de-ch" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-zaptec/02.jpg" bildtext="Zaptec Pro" titel="Zaptec Pro" href="https://www.zaptec.com/de-ch" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione del backend

Le stazioni Zaptec possono essere integrate in pochi passaggi nel sistema di conteggio di eCarUp. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo. 

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori delle stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione delle stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua il login con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione delle stazioni di ricarica Zaptec

La stazione Zaptec può inoltre trasmettere i valori a 15 minuti a smart-me. Per saperne di più, consulta [Importazione dati a 15 minuti](/funktionen/15-minuten-datenimport).

[![Zaptec – Figura 3](/img/ocpp-ladestationen-zaptec/03.jpg)](https://youtu.be/jK-UypywXZU)

Guida video all'integrazione di Zaptec nel backend di eCarUp

## Zaptec Go e Pro

### Installazione portale Zaptec

1.  Vai al [portale web di Zaptec](https://portal.zaptec.com/) ed effettua il login

2.  Nella barra del menu in alto seleziona "Installazioni" ("Installationen") e il gruppo desiderato di stazioni Zaptec da integrare nel sistema di conteggio di eCarUp

3.  Seleziona ora "Impostazioni" ("Einstellungen") e poi, nel sottomenu, "Autenticazione" ("Authentifizierung")

4.  Vedrai la seguente interfaccia del menu:


5\. Attiva il campo "Autenticazione OCPP 1.6" ("OCPP 1.6 Authentifizierung")

6\. Sotto "URL" inserisci l'URL OCPP che hai ricevuto durante i preparativi nel portale eCarUp. 

Attenzione: all'URL deve ancora essere aggiunto / & &#123;deviceid&#125;

- Esempio: ws://www.ecarup.com/api/Ocpp16/wei948gfhwe/&#123;deviceid&#125;


7\. Attiva il campo "Authorization required" e infine clicca su "Salva" ("Speichern")

⚠️ Importante: la stazione deve essere riavviata. 

I Zaptec Charger del gruppo selezionato sono ora registrati nel tuo account eCarUp come stazioni di ricarica e possono essere configurati in base alle tue condizioni d'uso individuali.

![Zaptec – Figura 4](/img/ocpp-ladestationen-zaptec/04.png)

### Conteggio dei Zaptec Charger in un sistema multitariffa

I valori a 15 minuti della stazione Zaptec possono essere esportati. Ciò consente strutture tariffarie avanzate, come ad esempio i conteggi ZEV o i sistemi multitariffa. Per saperne di più, consulta la pagina [Importazione dati a 15 minuti](/funktionen/15-minuten-datenimport).

## Senza autenticazione + ricarica offline

Collega le tue stazioni Zaptec a eCarUp tramite l'installazione, come di consueto (passaggi da 5 a 7).

1.  Se non è ancora stato registrato, registra un conducente

2.  Vai poi alla stazione di ricarica

3.  Disattiva l'autenticazione

4.  Aggiungi un ID tag standard del tuo conducente. 


Importante: il token RFID deve essere registrato in eCarUp anche presso il conducente. Per maggiori informazioni: [LINK](/fahrer/rfid-nfc-tags-carid)

![Zaptec – Figura 5](/img/ocpp-ladestationen-zaptec/05.png)

Cosa succede:

Se non è registrato alcun token, eCarUp invia un messaggio «Invalid», poiché l'ID tag è vuoto. Come backend dobbiamo poter validare in ogni momento chi si autorizza. 

![Zaptec – Figura 6](/img/ocpp-ladestationen-zaptec/06.png)

Se in Zaptec è registrato un token, eCarUp invia un messaggio «Accepted», poiché l'ID tag viene ora trasmesso. La ricarica viene comunque registrata in eCarUp. 

![Zaptec – Figura 7](/img/ocpp-ladestationen-zaptec/07.png)

La ricarica può ora essere effettuata anche in modalità offline. La stazione ci invia la transazione offline non appena torna online. 

![Zaptec – Figura 8](/img/ocpp-ladestationen-zaptec/08.png)

Il vantaggio è che il conducente può essere addebitato anche a posteriori (se configurato in tal senso).

## Più proprietari di stazioni eCarUp su un'unica installazione Zaptec?

### Sì, funziona!

Procedi come segue:

1.  Nell'installazione imposta l'autenticazione su OCPP 1.6J come di consueto

2.  Lascia vuoto il campo dell'URL

3.  Seleziona la casella di controllo per l'autenticazione richiesta.

4.  Vai ora alla stazione: nelle impostazioni puoi inserire l'URL individuale con il numero di serie della stazione Zaptec. 

5.  Salva.


![Zaptec – Figura 9](/img/ocpp-ladestationen-zaptec/09.png)

![Zaptec – Figura 10](/img/ocpp-ladestationen-zaptec/10.png)

### Link

[Registrazione del webinar Stazioni di ricarica Zaptec nel backend di eCarUp](https://web.ecarup.com/webinar-zaptec-stationen-mit-ecarup-backend/)

[Importazione dati a 15 minuti](/funktionen/15-minuten-datenimport)

[Funzioni della wallbox Zaptec nel backend di eCarUp](https://web.ecarup.com/backend/novavolt-zaptec-charger-abrechnen/)

## Impostazioni avanzate tramite strumento di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo di 30-60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere cosa è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Zaptec – Figura 11](/img/ocpp-ladestationen-zaptec/11.png)

![Zaptec – Figura 12](/img/ocpp-ladestationen-zaptec/12.png)
