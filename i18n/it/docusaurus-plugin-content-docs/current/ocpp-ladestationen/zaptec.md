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

Le stazioni Zaptec possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo.

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stationen" (Stazioni).

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione delle stazioni di ricarica Zaptec

La stazione Zaptec può inoltre trasmettere a smart-me i valori ogni 15 minuti. Per saperne di più, consulta [Importazione dati ogni 15 minuti](/funktionen/15-minuten-datenimport).

[![Zaptec – Figura 3](/img/ocpp-ladestationen-zaptec/03.jpg)](https://youtu.be/jK-UypywXZU)

Guida video all'integrazione di Zaptec nel backend eCarUp

## Zaptec Go e Pro

### Installazione portale Zaptec

1.  Vai al [portale web Zaptec](https://portal.zaptec.com/) ed effettua l'accesso

2.  Nella barra del menu in alto seleziona "Installationen" (Installazioni) e il gruppo desiderato di stazioni Zaptec per l'integrazione nel sistema di conteggio eCarUp

3.  Seleziona ora "Einstellungen" (Impostazioni) e poi, nel sottomenu, "Authentifizierung" (Autenticazione)

4.  Vedrai la seguente interfaccia del menu:


5\. Attiva il campo "OCPP 1.6 Authentifizierung" (Autenticazione OCPP 1.6)

6\. Sotto "URL" inserisci l'URL OCPP che hai ricevuto durante i preparativi nel portale eCarUp.

Attenzione: all'URL va ancora aggiunto / &#123;deviceid&#125;

- Esempio: ws://www.ecarup.com/api/Ocpp16/wei948gfhwe/&#123;deviceid&#125;


7\. Attiva il campo "Authorization required" (Autorizzazione richiesta) e clicca infine su "Speichern" (Salva)

⚠️ Importante: la stazione deve essere riavviata.

I Zaptec Charger del gruppo selezionato sono ora registrati nel tuo account eCarUp come stazioni di ricarica e possono essere configurati in base alle tue condizioni d'uso individuali.

![Zaptec – Figura 4](/img/ocpp-ladestationen-zaptec/04.png)

### Conteggio dei Zaptec Charger in un sistema multitariffa

I valori ogni 15 minuti della stazione Zaptec possono essere esportati. Ciò consente strutture tariffarie avanzate, come ad esempio i conteggi ZEV o i sistemi multitariffa. Per saperne di più, consulta la pagina [Importazione dati ogni 15 minuti](/funktionen/15-minuten-datenimport).

## Senza autenticazione + ricarica offline

Collega le tue stazioni Zaptec a eCarUp tramite l'installazione, come di consueto (passaggi da 5 a 7).

1.  Se non è ancora stato registrato, registra un conducente

2.  Vai quindi alla stazione di ricarica

3.  Disattiva l'autenticazione

4.  Aggiungi un ID tag standard del tuo conducente.


Importante: il token RFID deve essere registrato in eCarUp anche sotto il conducente. Qui trovi maggiori informazioni: [LINK](/fahrer/rfid-nfc-tags-carid)

![Zaptec – Figura 5](/img/ocpp-ladestationen-zaptec/05.png)

Cosa succede:

Se non è registrato alcun token, eCarUp invia un messaggio "Invalid", poiché l'ID tag è vuoto. Noi, come backend, dobbiamo poter validare in qualsiasi momento chi si autorizza.

![Zaptec – Figura 6](/img/ocpp-ladestationen-zaptec/06.png)

Se in Zaptec è registrato un token, eCarUp invia un messaggio "Accepted", poiché l'ID tag viene ora inviato insieme. La ricarica viene comunque registrata in eCarUp.

![Zaptec – Figura 7](/img/ocpp-ladestationen-zaptec/07.png)

La ricarica può ora essere eseguita anche in modalità offline. La stazione ci invia la transazione offline in un secondo momento, non appena torna online.

![Zaptec – Figura 8](/img/ocpp-ladestationen-zaptec/08.png)

Il vantaggio è che il conducente può essere addebitato anche a posteriori (se configurato in tal modo).

## Più proprietari di stazioni eCarup su un'unica installazione Zaptec?

### Sì, funziona!

Procedi come segue:

1.  Sull'installazione imposta l'autenticazione su OCPP 1.6J, come di consueto

2.  Lascia vuoto il campo con l'URL

3.  Seleziona la casella di controllo per l'autenticazione richiesta.

4.  Ora vai alla stazione: nelle impostazioni puoi inserire l'URL individuale con il numero di serie della stazione Zaptec.

5.  Salva.


![Zaptec – Figura 9](/img/ocpp-ladestationen-zaptec/09.png)

![Zaptec – Figura 10](/img/ocpp-ladestationen-zaptec/10.png)

### Link

[Registrazione del webinar sulle stazioni di ricarica Zaptec nel backend eCarUp](https://web.ecarup.com/webinar-zaptec-stationen-mit-ecarup-backend/)

[Importazione dati ogni 15 minuti](/funktionen/15-minuten-datenimport)

[Funzioni della wallbox Zaptec nel backend eCarUp](https://web.ecarup.com/backend/novavolt-zaptec-charger-abrechnen/)

## Impostazione avanzata tramite tool di manutenzione (eCarUp Premium)

L'intervallo di upload dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e mostrare meglio nell'app la potenza di ricarica attuale.



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Zaptec – Abbildung 11](/img/ocpp-ladestationen-zaptec/11.png)

![Zaptec – Abbildung 12](/img/ocpp-ladestationen-zaptec/12.png)
