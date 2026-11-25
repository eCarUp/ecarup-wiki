---
title: 'Bibus'
slug: '/ocpp-ladestationen/bibus'
description: 'Guida all''integrazione backend'
sidebar_label: 'Bibus'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-bibus/01.jpg" bildtext="Bibus eVolve" titel="Bibus eVolve" href="https://technology.bibus.com/ch-de/produkte/e-mobility-and-energy/" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-bibus/02.jpg" bildtext="Bibus eNext" titel="Bibus eNext" href="https://technology.bibus.com/ch-de/produkte/e-mobility-and-energy/" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione backend

Le stazioni Bibus possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo. 

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Integrazione della stazione di ricarica Bibus

Per la versione con stazioni Kempower, clicca [qui](/ocpp-ladestationen/kempower).

## Versione con Circontrol

I primi passaggi devono essere eseguiti direttamente sul display della tua stazione:

1.   Collega il tuo laptop alla stazione

2.   Ricava l'indirizzo IP attuale della stazione dalle istruzioni allegate

3.  Inserisci quindi l'indirizzo IP nel browser web

4.  Compare la dashboard di Circontrol

5.  Seleziona il tipo di connessione (GSM, LAN ...)


⚠️ Nota bene:

L'impostazione standard della stazione Bibus può essere Plug & Charge. Questa funzione deve essere disattivata nel Charge Point Manager. 

Contatta BIBUS per ottenere il Charge Point Manager.

Lì, nelle impostazioni, lo stato deve essere impostato su "Attivato" ("Aktiviert").

![Bibus – Figura 3](/img/ocpp-ladestationen-bibus/03.png)

### Impostazioni dell'interfaccia web Circontrol

1.  Clicca su Integrazione ("Integration") nella navigazione sul lato sinistro

2.  Seleziona OCPP 1.6J in "Integrazioni disponibili" ("Verfügbare Integrationen").

3.  Clicca sul link

4.  Inserisci nome utente e password (vedi manuale)


![Bibus – Figura 4](/img/ocpp-ladestationen-bibus/04.png)

5\. Assegna un nome alla Bibus Charge Box. ⚠️ Nota: il nome non deve contenere spazi.

![Bibus – Figura 5](/img/ocpp-ladestationen-bibus/05.png)

6\. Inserisci l'URL OCPP del tuo account in Sistema centrale ("Zentrales System")

![Bibus – Figura 6](/img/ocpp-ladestationen-bibus/06.png)

⚠️ Importante: devi impostare l'intervallo di misurazione dei valori misurati (ad es. su 60 )

![Bibus – Figura 7](/img/ocpp-ladestationen-bibus/07.png)

## Impostazioni avanzate tramite Wartungstool (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Bibus – Figura 8](/img/ocpp-ladestationen-bibus/08.png)

![Bibus – Figura 9](/img/ocpp-ladestationen-bibus/09.png)
