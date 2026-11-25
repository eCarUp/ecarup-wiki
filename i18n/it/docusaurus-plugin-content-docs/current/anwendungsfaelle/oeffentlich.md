---
title: 'Ricarica pubblica'
slug: '/anwendungsfaelle/oeffentlich'
description: '1\. Informazioni generali'
sidebar_label: 'Pubblica'
---

## 1\. Informazioni generali

Nel seguente articolo viene descritta una configurazione standard per l'installazione e la gestione di una stazione di ricarica pubblica con eCarUp. I conducenti pagano con carta di credito e il credito viene trasferito automaticamente dal conducente al proprietario della stazione. Se la vostra stazione (ad es. all'interno di una PMI) è a disposizione in modo semipubblico, lo abbiamo documentato in un [articolo del wiki](/anwendungsfaelle/laden-im-kmu) separato.

Il vantaggio di questa variante consiste nel fatto che il denaro viene trasferito in modo automatizzato dalla carta di credito del conducente al conto del proprietario della stazione. 

Ciò comporta due vantaggi decisivi:

1.  L'intero processo di incasso è completamente automatizzato: eCarUp trasferisce il denaro delle transazioni sul conto del proprietario della stazione direttamente al termine di queste ultime. 

2.  In questo modo il credito non è mai in possesso di eCarUp AG e tutte le transazioni (anche ad es. quelle degli ospiti nei parcheggi per visitatori) rientrano nelle disposizioni di legge vigenti.

Nel nostro wiki trovate tutte le altre informazioni sul [pagamento con carta di credito](/stationsbetreiber/abrechnen-auszahlen) e sulle [disposizioni di legge relative al credito trasferito](/stationsbetreiber/account-verifizieren).

Il pagamento con carta di credito comporta sempre una commissione del 10%, indipendentemente dal fatto che una [licenza premium eCarUp](https://web.ecarup.com/preise-ladestationen-backend/) sia attiva o meno.

Per questo caso d'uso si raccomanda vivamente una [licenza Premium eCarUp](https://web.ecarup.com/preise-ladestationen-backend/) (altrimenti mancano alcune funzioni importanti come lo strumento di manutenzione, i report o il roaming).

## 2\. Collegare le stazioni di ricarica al backend eCarUp

Per prima cosa le stazioni devono essere collegate al backend eCarUp:

- Nel nostro wiki trovate un elenco aggiornato di tutti i [modelli di stazioni di ricarica supportati](/ocpp-ladestationen).

- È inoltre disponibile una [guida passo per passo per l'integrazione delle stazioni](/stationsbetreiber/inbetriebnahme-ocpp-station).

- Affinché il denaro possa essere trasferito sull'account, questo deve essere verificato. Le informazioni a riguardo si trovano qui: [Verificare l'account in eCarUp](/sonstige-informationen/stripe). Consigliamo di eseguire questo passaggio prima o durante l'installazione delle stazioni di ricarica. Senza verifica, per motivi legali eCarUp non può trasferire denaro sull'account e non sono possibili ricariche a pagamento.

    Il denaro trasferito viene accreditato continuamente sul vostro account di proprietario della stazione e può essere versato in qualsiasi momento su un IBAN a scelta alla voce di menu «Account».

![Ricarica pubblica – Figura 1](/img/anwendungsfaelle-oeffentlich/01.png)

## 3\. Configurare le stazioni di ricarica

Quando le stazioni di ricarica sono state collegate a eCarUp, compaiono nell'account eCarUp nella dashboard e nella gestione delle stazioni.

Con eCarUp le stazioni di ricarica possono essere conteggiate senza problemi in modo pubblico e quindi nei confronti di conducenti anonimi. A tale scopo, nella configurazione occorre assegnare alle stazioni lo stato «pubblico» (öffentlich) e impostare un'ubicazione. 

![Ricarica pubblica – Figura 2](/img/anwendungsfaelle-oeffentlich/02.png)

### Impostazioni di base

Successivamente le stazioni possono essere configurate facendo clic su «Stazioni» (Stationen) e poi su «Gestione delle stazioni» (Stationsverwaltung):

- Modificare nome e descrizione della stazione

- Eliminare le stazioni

- Impostare le ubicazioni

- Modificare i collegamenti (se più di uno)

- Definire i tipi di collegamento (ad es. Typ 2, CSS o Chademo)

- Definire l'energia massima (ad es. 22 kW)

- Definire l'accesso (pubblico, limitato e privato)

Pubblico = tutti gli utenti / Limitato = proprietario della stazione e utenti speciali / Privato = SOLO il proprietario della stazione, ovvero l'account in cui sono installate le stazioni

- Impostare i prezzi per energia e tempo

- Definire gli orari riservati

- Attivare la stazione dal portale web

Tutte le [impostazioni per i proprietari delle stazioni](/stationsbetreiber/webportal) sono riassunte in un articolo del wiki.

Una volta configurata completamente, può avere questo aspetto:

![Ricarica pubblica – Figura 3](/img/anwendungsfaelle-oeffentlich/03.png)

## 4\. Etichettare le stazioni

Nelle stazioni di ricarica accessibili al pubblico l'etichettatura delle stazioni di ricarica è molto importante, affinché i conducenti sappiano come sbloccare la stazione di ricarica. Con un'etichettatura chiara puoi anche comunicare ai conducenti informazioni importanti, come ad es. regole aggiuntive (durata massima di sosta, tariffe di parcheggio ecc.).

Per lo sblocco direttamente tramite eCarUp esistono due possibilità:

### Ricarica tramite l'app eCarUp

- -   Il conducente scarica l'app eCarUp gratuita (Android/Apple)

    - Crea un account e registra una carta di credito valida come mezzo di pagamento

    - Può sbloccare la stazione scansionando il codice QR nell'app oppure, tramite la funzione mappa, premendo un pulsante ([guida alla ricarica tramite Webstory](https://web.ecarup.com/web-stories/laden-mit-der-ecarup-app/))

    - Al termine della sessione di ricarica l'importo dovuto viene addebitato automaticamente sulla carta di credito registrata

    - Una [descrizione dettagliata per i conducenti](/fahrer) è disponibile nel wiki oppure in queste [FAQ](/faq)

### Ricarica ad hoc tramite codice QR

<div className="row">
<div className="col col--6">

- Il conducente scansiona il codice QR sulla stazione con la fotocamera dello smartphone o con un'app di scansione di codici QR

- Approda su una homepage mobile e può lì avviare un pagamento unico indicando i dati della carta di credito

- Via e-mail riceve un permalink per terminare la ricarica (può avvenire anche scollegando il cavo di ricarica) nonché una ricevuta al termine della sessione di ricarica

- Una descrizione dettagliata della ricarica senza barriere è disponibile nel nostro wiki

- ATTENZIONE: per proteggere i proprietari delle stazioni, con questa variante sulla carta di credito utilizzata viene effettuata una prenotazione temporanea di CHF 60.-. Questa viene annullata automaticamente al termine della sessione di ricarica.

Trovate alcuni [esempi di etichettatura](/stationsbetreiber/qr-code) direttamente nella pagina del wiki.

</div>
<div className="col col--6 text--center">

![Ricarica pubblica – Figura 4](/img/anwendungsfaelle-oeffentlich/04.png)

</div>
</div>

## 5\. Roaming

Opzionalmente le stazioni possono essere pubblicate anche nelle reti di ricarica di fornitori terzi tramite la [funzione di roaming](/funktionen/roaming). Ciò è però possibile solo se la stazione è a disposizione del pubblico 24 ore su 24, 7 giorni su 7. Devi inoltre essere consapevole che in seguito la stazione sarà trovata molto più facilmente (nelle più svariate app e nei sistemi di navigazione delle auto) e attirerà quindi utenti esterni. 

Per il roaming devi inoltre definire un prezzo separato. Questo viene trasmesso da eCarUp alla rete di roaming e serve come base per la determinazione dei prezzi delle altre reti di ricarica collegate. Tu come gestore della stazione, così come eCarUp come piattaforma, non avete però alcuna influenza sulla determinazione delle tariffe delle altre piattaforme.

Informazioni dettagliate si trovano nell'[articolo del wiki sul roaming](/funktionen/roaming).

![Ricarica pubblica – Figura 5](/img/anwendungsfaelle-oeffentlich/05.png)

## 6\. Analisi e risoluzione degli errori

Con l'aiuto del portale eCarUp è possibile riconoscere semplici guasti e adottare le misure del caso. Se nella dashboard o nella gestione delle stazioni le stazioni sono evidenziate in grigio e quindi come «inattive», hanno perso la connessione con il backend (da più di 10 minuti) e non possono quindi essere utilizzate tramite eCarUp. Esistono due possibili motivi:

- Interruzione di Internet: ripristina la connessione a Internet. Non appena le stazioni raggiungono di nuovo eCarUp, lo stato passa a «disponibile», ovvero blu, e le stazioni possono essere di nuovo utilizzate normalmente.

- Interruzione di corrente: ripristina l'alimentazione elettrica. Non appena le stazioni raggiungono di nuovo eCarUp, lo stato passa a «disponibile», ovvero blu, e le stazioni possono essere di nuovo utilizzate normalmente.

Con lo strumento di manutenzione incluso in [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) è possibile [tracciare la comunicazione tra stazione di ricarica e backend](/funktionen/wartung) ed eseguire un'analisi più approfondita degli errori.

Se il guasto è più profondo, devi contattare il responsabile del progetto (ad es. l'installatore elettrico incaricato).

![Ricarica pubblica – Figura 6](/img/anwendungsfaelle-oeffentlich/06.png)

Consiglio pratico: per testare o verificare sul posto il funzionamento delle stazioni, è possibile creare un account per il servizio tecnico o per un'altra persona responsabile sul posto. Questo account può essere registrato presso le stazioni come utente speciale con prezzo 0 per kWh e 0 per h e può quindi eseguire test senza conseguenze di costo.

## 7\. Opzionale: creare gruppi di stazioni di ricarica e definire utenti speciali

Anche per le stazioni di ricarica pubbliche possono essere definiti in qualsiasi momento utenti speciali (ad es. collaboratori, vicini ecc.), che potranno poi ricaricare alle stazioni con una tariffa speciale.

### Creare gruppi di stazioni

Per la gestione delle stazioni di ricarica è importante l'organizzazione in gruppi di stazioni (ad es. per ubicazione):

![Ricarica pubblica – Figura 7](/img/anwendungsfaelle-oeffentlich/07.png)

### Creare utenti speciali

Affinché le stazioni possano essere sbloccate solo dai conducenti/clienti finali autorizzati, i permessi devono essere impostati di conseguenza. Esistono due possibilità:

1. Gestire gruppi di utenti

In questa variante viene creato un gruppo di utenti e assegnato alle stazioni. In questo modo, in caso di cambio di inquilino o di nuovi conducenti, è possibile aggiungere o rimuovere facilmente un nuovo membro nel gruppo di utenti. Ciò riduce l'onere amministrativo.

- Le stazioni vengono impostate sullo stato «limitato» (limitiert)

- Viene creato un gruppo di utenti con tutti i conducenti autorizzati

- Il gruppo di utenti viene assegnato al gruppo di stazioni

![Ricarica pubblica – Figura 8](/img/anwendungsfaelle-oeffentlich/08.png)

![Ricarica pubblica – Figura 9](/img/anwendungsfaelle-oeffentlich/09.png)

2. Assegnare singoli utenti alle stazioni

In questa variante i singoli conducenti/clienti finali vengono assegnati alle rispettive stazioni, solo il rispettivo utente speciale può sbloccare la propria stazione di ricarica. Ciò significa che, in caso di cambio di inquilino o di nuovi conducenti, gli account devono essere assegnati di volta in volta alle stazioni, il che significa che l'account deve essere gestito attivamente in modo continuo.

- Le stazioni vengono impostate sullo stato «limitato» (limitiert)

- L'account del conducente corretto viene sbloccato con il prezzo corretto per la stazione

- Per la stazione viene registrata un'ubicazione

![Ricarica pubblica – Figura 10](/img/anwendungsfaelle-oeffentlich/10.png)

![Ricarica pubblica – Figura 11](/img/anwendungsfaelle-oeffentlich/11.png)
