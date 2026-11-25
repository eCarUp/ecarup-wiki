---
title: 'RFID / NFC Tags / CarID'
slug: '/fahrer/rfid-nfc-tags-carid'
description: '⚠️ Importante: eCarUp non vende TAG RFID.'
sidebar_label: 'RFID / NFC Tags / CarID'
---
<Video src="Rhmi6IUkedY" title="Video YouTube, collegare un tag RFID a un account eCarUp" />

⚠️ Importante: eCarUp non vende TAG RFID. Informazioni importanti sull'acquisto di un TAG RFID si trovano qui: [LINK](/drittprodukte#portachiavi-tag-rfid--nfc-ntag215)

## Principio di funzionamento:

![RFID / NFC Tags / CarID – Figura 1](/img/fahrer-rfid-nfc-tags-carid/01.png)

\*CarID funziona attualmente solo con la [stazione di ricarica Pico](/smart-me-pico) di smart-me

![RFID / NFC Tags / CarID – Figura 2](/img/fahrer-rfid-nfc-tags-carid/02.png)

![RFID / NFC Tags / CarID – Figura 3](/img/fahrer-rfid-nfc-tags-carid/03.png)

### Importante

- I rispettivi tag RFID sono installati sugli account dei conducenti, non presso il proprietario della stazione.

- Non tutte le stazioni dispongono di un lettore RFID / NFC. Un tag RFID non può quindi essere utilizzato presso ogni stazione.

- [Tag RFID compatibili con Pico (dati tecnici)](https://wiki.smart-me.com/produkte/pico-ladestation)

- È possibile che in eCarUp venga letto un tag RFID che la stazione non supporta. Verifica innanzitutto la compatibilità con la stazione.

- Un'abilitazione tramite carte RFID non soddisfa in linea di principio gli elevati requisiti di sicurezza di eCarUp. Le carte RFID possono essere copiate e falsificate facilmente. L'aggiunta e l'utilizzo di carte RFID avvengono a proprio rischio.

- eCarUp non emette proprie carte RFID / NFC. L'aggiunta e la gestione dei tag devono essere effettuate dal conducente stesso.

- I tag RFID possono essere utilizzati solo per l'abilitazione locale delle stazioni di ricarica eCarUp e non funzionano per le stazioni di reti di terzi (ad es. Hubject).

- Nel sistema eCarUp, il TagID della carta RFID può essere assegnato una sola volta a un utente. (Funzione di protezione)

## Guida per aggiungere una carta RFID:

<div className="row">
<div className="col col--7">

### Guida app Android

Requisito: telefono Android con funzione NFC.

1\. Accedi con l'app eCarUp per Android all'account conducente che desideri collegare a un tag RFID/NFC. Nel menu in basso clicca su Account (Account) e poi su Carte RFID (RFID Karten).

2\. Clicca in alto a destra sul simbolo +, poi puoi specificare il nome e il Tag-ID (come sul web).

3\. Se il tuo smartphone Android dispone di una funzione NFC, puoi leggere direttamente il tag della carta desiderata. Per farlo, tieni la carta contro il retro del dispositivo (dove si trova la maggior parte dei lettori NFC).

Se inserisci a mano il Tag-ID (UID), puoi determinarlo leggendo il tag RFID desiderato. Ciò può avvenire direttamente tramite un lettore RFID (ad es. in un'azienda) oppure tramite un'app su un telefono cellulare dotato di lettore NFC. Un esempio è l'app gratuita [NFC-Tools](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc&hl=de_CH) (Apple impedisce la lettura dei numeri RFID / NFC).

4\. Il tuo Tag-ID è ora collegato all'account e può essere utilizzato per l'abilitazione.

</div>
<div className="col col--5 text--center">

![RFID / NFC Tags / CarID – Figura 4](/img/fahrer-rfid-nfc-tags-carid/04.png)

</div>
</div>

<div className="row">
<div className="col col--7">

### Guida app iOS

Requisito: iPhone con funzione NFC (da iOS 14 e > iPhone 6).

(Apple supporta questa funzione solo a partire dalla versione iOS 13/14).

1\. Accedi con l'app eCarUp (iOS) all'account conducente che desideri collegare a un tag RFID/NFC. Nel menu in basso clicca su Account (Account) e poi su Carte RFID (RFID Karten).

2\. Clicca in alto a destra sul simbolo +, poi puoi specificare il nome e il Tag-ID (come sul web).

3\. Se il tuo smartphone Apple dispone di una funzione NFC (>iPhone 10), puoi leggere direttamente il tag della carta desiderata. Per farlo, tieni la carta contro il retro del dispositivo (dove si trova la maggior parte dei lettori NFC).

4\. Il tuo Tag-ID è ora collegato all'account e può essere utilizzato per l'abilitazione.

</div>
<div className="col col--5 text--center">

![RFID / NFC Tags / CarID – Figura 5](/img/fahrer-rfid-nfc-tags-carid/05.png)

</div>
</div>

Esempio di TagID:

- Importante: non è necessario inserire i due punti.

- Attenzione: la SwissPass ha 2 tag RFID, eCarUp consiglia di registrarli entrambi.

![RFID / NFC Tags / CarID – Figura 6](/img/fahrer-rfid-nfc-tags-carid/06.png)

### Nota su Apple iPhone (iOS):

Android riconosce quasi ogni tipo di chip. Apple, tuttavia, limita fortemente l'interfaccia NFC per scelta del produttore: i chip più vecchi o proprietari (ad es. Mifare Classic o Legic), spesso utilizzati sulle carte di ricarica, vengono bloccati da iOS per motivi di sicurezza. eCarUp non ha alcuna influenza su questo aspetto.

Se il tuo iPhone non riconosce la carta:

- Inserimento manuale: inserisci semplicemente a mano nell'app eCarUp il numero della carta stampato (UID, se presente), senza spazi.

- Registrazione tramite Android: accedi una volta con il tuo account eCarUp su un dispositivo Android e scansiona lì la carta. Dopo di che è subito registrata nel tuo conto.

![RFID / NFC Tags / CarID – Figura 7](/img/fahrer-rfid-nfc-tags-carid/07.png)

## CarID:

La funzione Plug & Charge consente un'autenticazione facile e sicura tra il veicolo elettrico e una stazione di ricarica, rendendo superflua l'abilitazione tramite app o carta RFID.

Dopo un'unica registrazione del veicolo con l'app eCarUp, a ogni sessione di ricarica è sufficiente che l'utente colleghi il veicolo elettrico. Il veicolo trasmette automaticamente alla stazione di ricarica i dati necessari per autorizzare il pagamento.

⚠️Importante: attualmente questa funzione è disponibile solo con la stazione di ricarica [Pico](https://wiki.smart-me.com/produkte/pico-ladestation) di smart-me AG.

### Collegamento all'account

<div className="row">
<div className="col col--6">

Requisito di base: il gestore della stazione [Pico](/smart-me-pico) deve aver attivato la funzione sulla stazione di ricarica e l'auto deve essere un veicolo elettrico a batteria.

1.  Collega il tuo veicolo alla Pico

2.  Attendi che sul display appaia la croce arancione (X CAR-ID)

3.  Sul display appare un'icona (persona con scudo)

4.  Dopodiché puoi avviare la sessione di ricarica come di consueto tramite l'app eCarUp

5.  Non appena avviata, compare una finestra pop-up di eCarUp che ti chiede se desideri assegnare la Car-Id.

⚠️Importante: è importante che tu elimini il collegamento della CarID con il tuo account non appena l'auto non è più di tua proprietà, ad esempio dopo una vendita.

⚠️Importante: la Car-Id può essere la stessa su più veicoli, a seconda del costruttore dell'auto. Pertanto una ricarica può avvenire sul tuo conto anche se non si tratta del tuo veicolo.

</div>
<div className="col col--6 text--center">

![RFID / NFC Tags / CarID – Figura 8](/img/fahrer-rfid-nfc-tags-carid/08.jpg)

</div>
</div>
