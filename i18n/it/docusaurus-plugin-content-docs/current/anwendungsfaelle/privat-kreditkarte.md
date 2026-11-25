---
title: 'Ricarica a casa con carta di credito'
slug: '/anwendungsfaelle/privat-kreditkarte'
description: '1\. Informazioni generali'
sidebar_label: 'Privato carta di credito'
---

## 1\. Informazioni generali

Nell'articolo seguente viene descritta una configurazione standard per la ricarica a casa con eCarUp (ad esempio per condomini/PPP/comunioni di proprietari). I conducenti pagano con carta di credito e il credito viene trasferito automaticamente dal conducente al proprietario della stazione.

Il vantaggio di questa variante sta nel fatto che il denaro viene trasferito in modo automatizzato dalla carta di credito del conducente al conto del proprietario della stazione. Ciò comporta due vantaggi decisivi:

1.  L'intero processo di incasso è completamente automatizzato: eCarUp trasferisce il denaro delle transazioni sul conto del proprietario della stazione direttamente dopo la loro conclusione. 

2.  In questo modo il credito non è mai in possesso di eCarUp AG e tutte le transazioni (anche ad esempio quelle degli ospiti sui parcheggi per visitatori) rientrano nelle disposizioni di legge in vigore.


Nel nostro wiki trovi tutte le altre informazioni sul [conteggio tramite carta di credito](/stationsbetreiber/abrechnen-auszahlen) e sulle [disposizioni di legge relative al credito trasferito](/stationsbetreiber/account-verifizieren).

Il conteggio tramite carta di credito comporta sempre una commissione del 10%, indipendentemente dal fatto che una [licenza premium eCarUp](https://web.ecarup.com/preise-ladestationen-backend/) sia attiva o meno.

Con le impostazioni descritte di seguito è possibile configurare su eCarUp il caso d'uso "ricarica a casa con carta di credito". Lo stato finale/i vantaggi sono i seguenti:

- Le stazioni non sono visibili pubblicamente (solo per utenti speciali invitati)

- I conducenti possono ricaricare direttamente tramite l'app o la carta RFID (a pagamento)

- "Onboarding" semplice per i conducenti

- I prezzi devono essere adeguati solo 1 volta all'anno (modifica di massa)

- In aggiunta è possibile creare anche un account per la ricarica gratuita (ad esempio per il custode)


Per questo caso d'uso si raccomanda vivamente una [licenza premium eCarUp](https://web.ecarup.com/preise-ladestationen-backend/) (altrimenti mancano alcune funzioni importanti come lo strumento di manutenzione, i report o la gestione avanzata degli utenti con i gruppi di utenti).

## 2\. Collegare le stazioni di ricarica al backend eCarUp

Per prima cosa le stazioni devono essere collegate al backend eCarUp:

- Nel nostro wiki trovi un elenco aggiornato di tutti i [modelli di stazioni di ricarica supportati](/ocpp-ladestationen).

- È inoltre disponibile una [guida passo per passo per l'integrazione delle stazioni](/stationsbetreiber/inbetriebnahme-ocpp-station).

- Affinché il denaro possa essere trasferito sull'account, quest'ultimo deve essere verificato. Le informazioni al riguardo si trovano qui: [Verificare l'account in eCarUp](/sonstige-informationen/stripe). Raccomandiamo di eseguire questo passaggio prima o durante l'installazione delle stazioni di ricarica. Senza verifica, per motivi legali eCarUp non può trasferire denaro sull'account e non sono possibili ricariche a pagamento.



Il denaro trasferito viene accreditato continuamente sul tuo account di proprietario della stazione e può essere versato in qualsiasi momento su un IBAN a scelta alla voce di menu "Account".

![Ricarica a casa con carta di credito – Figura 1](/img/anwendungsfaelle-privat-kreditkarte/01.png)

## 3\. Configurare le stazioni di ricarica

Una volta collegate a eCarUp, le stazioni di ricarica compaiono nell'account eCarUp nella dashboard e nella gestione delle stazioni.

![Ricarica a casa con carta di credito – Figura 2](/img/anwendungsfaelle-privat-kreditkarte/02.png)

### Impostazioni di base

Successivamente le stazioni possono essere configurate cliccando su "Stazioni" (Stationen) e poi su "Gestione delle stazioni" (Stationsverwaltung):

- Modificare nome e descrizione della stazione

- Eliminare le stazioni

- Impostare le ubicazioni

- Modificare i connettori (se ce n'è più di uno)

- Definire i tipi di connettore (ad es. Typ 2, CSS o Chademo)

- Definire l'energia max. (ad es. 22 kW)

- Definire l'accesso (pubblico, limitato e privato)


Pubblico = tutti gli utenti/Limitato = proprietario della stazione e utenti speciali/Privato = SOLO il proprietario della stazione ovvero l'account in cui sono installate le stazioni

- Impostare i prezzi per energia e tempo

- Definire gli orari riservati

- Attivare la stazione dal portale web

Tutte le [impostazioni per i proprietari delle stazioni](/stationsbetreiber/webportal) sono riassunte in questo articolo del wiki.



### Creare gruppi di stazioni

Per la gestione delle stazioni di ricarica è importante organizzarle in gruppi di stazioni (ad es. per ubicazione o per palazzina):

![Ricarica a casa con carta di credito – Figura 3](/img/anwendungsfaelle-privat-kreditkarte/03.png)



Una volta configurato completamente, può avere questo aspetto:

![Ricarica a casa con carta di credito – Figura 4](/img/anwendungsfaelle-privat-kreditkarte/04.png)

## 4\. Accesso semplice per i conducenti

Per offrire al conducente un accesso semplice, senza grande onere amministrativo, il punto di ricarica viene creato come pubblico e senza indicazione dell'ubicazione. In questo modo il punto di ricarica non compare sulla mappa eCarUp e non è necessaria alcuna gestione speciale degli utenti. Ciononostante può ricaricare ogni conducente che ha accesso all'autorimessa sotterranea. 

![Ricarica a casa con carta di credito – Figura 5](/img/anwendungsfaelle-privat-kreditkarte/05.png)

### Accesso dei conducenti con gruppi di utenti

Gestire i gruppi di utenti

In questa variante viene creato un gruppo di utenti che viene assegnato alle stazioni. In questo modo, in caso di cambio di inquilino o di nuovi conducenti, è possibile aggiungere o rimuovere facilmente un nuovo membro nel gruppo di utenti. Ciò riduce l'onere amministrativo.

- Le stazioni vengono impostate sullo stato "limitato"

- Viene creato un gruppo di utenti con tutti i conducenti autorizzati

- Il gruppo di utenti viene assegnato al gruppo di stazioni


![Ricarica a casa con carta di credito – Figura 6](/img/anwendungsfaelle-privat-kreditkarte/06.png)

![Ricarica a casa con carta di credito – Figura 7](/img/anwendungsfaelle-privat-kreditkarte/07.png)

### Assegnare i conducenti singolarmente

Assegnare singoli utenti alle stazioni

In questa variante i singoli conducenti/clienti finali vengono assegnati alle rispettive stazioni, solo il relativo utente speciale può sbloccare la propria stazione di ricarica. Ciò significa che in caso di cambio di inquilino o di nuovi conducenti gli account devono essere assegnati di volta in volta alle stazioni, il che comporta che l'account deve essere gestito attivamente in modo continuo.

- Le stazioni vengono impostate sullo stato "limitato"

- L'account del conducente corretto viene sbloccato con il prezzo corretto per la stazione

- Viene registrata un'ubicazione per la stazione


![Ricarica a casa con carta di credito – Figura 8](/img/anwendungsfaelle-privat-kreditkarte/08.png)

![Ricarica a casa con carta di credito – Figura 9](/img/anwendungsfaelle-privat-kreditkarte/09.png)

## 5\. Informare i conducenti / i clienti finali

Si raccomanda di informare i conducenti/clienti finali dello sblocco della stazione. Per il pagamento i conducenti devono creare un proprio account eCarUp e registrare una propria carta di credito valida come mezzo di pagamento:

- Una possibile guida / un possibile modello da inviare ai conducenti si trova in questo [documento](https://docs.google.com/document/d/1WVdQFd3flkJsQTIyEgS5zUauPbomZ3kOBfhEasXHgFs/edit).

- [Tutte le funzioni per i conducenti](/fahrer) sono riassunte in una pagina wiki dedicata.

- Inoltre c'è anche una [FAQ per i conducenti](/faq) con le domande e risposte più importanti.

- I conducenti possono [aggiungere autonomamente tag RFID / NFC al proprio account](/fahrer/rfid-nfc-tags-carid) e utilizzarli poi per sbloccare la stazione di ricarica.


Grazie al sistema flessibile di eCarUp l'onere di gestione è ridotto al minimo. I conducenti/clienti finali possono creare e gestire autonomamente i propri account.

## 6\. Etichettare le stazioni

Affinché i conducenti possano sbloccare le stazioni anche senza carta RFID e con l'app, raccomandiamo di etichettare le stazioni con un codice QR e un breve testo di istruzioni. Ciò aiuta ad esempio quando un conducente perde la propria carta RFID o non l'ha con sé.
Trovi alcuni [esempi di etichettatura](/stationsbetreiber/qr-code) direttamente in questa pagina del wiki.

## 7\. Parcheggi per visitatori

Con eCarUp le stazioni di ricarica possono essere conteggiate anche pubblicamente e quindi nei confronti di conducenti anonimi. A tal fine, nella configurazione alle stazioni deve essere assegnato lo stato "pubblico" e deve essere impostata un'ubicazione. Inoltre qui l'etichettatura delle stazioni di ricarica è molto importante, poiché tramite il codice QR è possibile ricaricare anche ad hoc e quindi senza barriere.

Ai parcheggi per visitatori si possono assegnare senza problemi anche altri prezzi (vedi sotto).

Opzionalmente le stazioni possono anche essere [pubblicate nelle reti di ricarica di terzi tramite la funzione di roaming](/funktionen/roaming). Ciò è possibile però solo se la stazione è a disposizione pubblicamente 24 ore su 24, 7 giorni su 7. Devi inoltre essere consapevole che in seguito la stazione sarà trovata molto facilmente (nelle più diverse app e nei sistemi di navigazione delle auto) e che verranno quindi attratti utenti esterni.

![Ricarica a casa con carta di credito – Figura 10](/img/anwendungsfaelle-privat-kreditkarte/10.png)

![Ricarica a casa con carta di credito – Figura 11](/img/anwendungsfaelle-privat-kreditkarte/11.png)

## 8\. Analisi e risoluzione degli errori

Con l'aiuto del portale eCarUp è possibile riconoscere semplici guasti e adottare le misure appropriate. Se nella dashboard o nella gestione delle stazioni le stazioni risultano grigie e quindi "inattive", hanno perso la connessione con il backend (per più di 10 minuti) e non possono quindi essere utilizzate tramite eCarUp. Vi sono due possibili cause:

- Interruzione di Internet: ripristina Internet. Non appena le stazioni raggiungono di nuovo eCarUp, lo stato passa a "disponibile" ovvero blu e le stazioni possono di nuovo essere utilizzate normalmente.

- Interruzione di corrente: ripristina l'alimentazione elettrica. Non appena le stazioni raggiungono di nuovo eCarUp, lo stato passa a "disponibile" ovvero blu e le stazioni possono di nuovo essere utilizzate normalmente.


Con lo strumento di manutenzione incluso in [eCarUp Premium](https://web.ecarup.com/preise-ladestationen-backend/) è possibile [tracciare la comunicazione tra stazione di ricarica e backend](/funktionen/wartung) ed effettuare un'analisi più approfondita degli errori.

Se l'errore è più profondo, devi contattare il responsabile del progetto (ad es. l'elettroinstallatore incaricato).

![Ricarica a casa con carta di credito – Figura 12](/img/anwendungsfaelle-privat-kreditkarte/12.png)

Consiglio pratico: per testare o verificare in loco il funzionamento delle stazioni, è possibile creare un account per il servizio tecnico o per un'altra persona responsabile in loco (ad es. hauswart\[at\]musterhaus.ch). Questo account può essere registrato presso le stazioni come utente speciale con prezzo 0.- per kWh e 0.- per h e può quindi eseguire test gratuitamente.
