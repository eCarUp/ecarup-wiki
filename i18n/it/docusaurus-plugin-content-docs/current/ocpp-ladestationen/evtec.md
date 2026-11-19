---
title: 'EVTEC'
slug: '/ocpp-ladestationen/evtec'
description: 'Guida all''integrazione backend'
sidebar_label: 'EVTEC'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-evtec/01.jpg" bildtext="EVTEC Cappuccino & Charge" titel="Cappuccino & Charge" href="https://www.evtec.ch/geraete" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-evtec/02.jpg" bildtext="EVTEC Coffee & Charge" titel="Coffee & Charge" href="https://www.evtec.ch/geraete" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-evtec/03.png" bildtext="EVTEC Espresso & Charge" titel="Espresso & Charge" href="https://www.evtec.ch/geraete" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione backend

Le stazioni EVTEC possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo. 

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri qui di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione di stazioni OCPP

Informazioni generali sulla [messa in servizio della stazione OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station) 

Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

1.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed esegui l'accesso con i dati del tuo account.

2.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

3.  Seleziona la scheda "OCPP".

4.  Copia l'URL negli appunti. 

    1.  Link ws senza Basic Auth: testato e funzionante

    2.  wss senza Basic Auth: non testato

    3.  wss con Basic Auth: non testato

5.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione nel portale eCarUp

## Avvertenza

<div className="row">
<div className="col col--8">

- Un terminale per carte di credito può essere utilizzato parallelamente a eCarUp per garantire la massima flessibilità. Per ulteriori informazioni EVTEC è volentieri a tua disposizione.

1.  Adattare le impostazioni IP della stazione EVTEC alla rete IP del gestore delle stazioni (sul dispositivo).

2.  Collegarsi alla stazione EVTEC con un PC della stessa rete (tramite l'indirizzo IP definito sopra). Vedi lo screenshot con l'esempio 192.168.10.20. Poi premere il pulsante «Config».

In caso di domande sul collegamento della stazione (quale IP ha la mia stazione, nome utente e password) rivolgiti a eCarUp o direttamente a EVTEC.

</div>
<div className="col col--4 text--center">

![EVTEC – Figura 4](/img/ocpp-ladestationen-evtec/04.png)

</div>
</div>

3\. Selezionare la voce di menu OCPP.

![EVTEC – Figura 5](/img/ocpp-ladestationen-evtec/05.png)

4\. Effettuare le impostazioni come nello screenshot qui sotto. Poi selezionare Connection Parameters.

Importante: impostare idTagConversion su HexZero...

![EVTEC – Figura 6](/img/ocpp-ladestationen-evtec/06.jpg)

5\. Effettuare le impostazioni come nello screenshot qui sotto.

⚠️ IMPORTANTE: nel campo «CsAddress» inserire il percorso corretto per l'account eCarUp desiderato.

![EVTEC – Figura 7](/img/ocpp-ladestationen-evtec/07.png)

<div className="row">
<div className="col col--8">

6\. Il percorso per l'account eCarUp può essere determinato come segue.

a) Eseguire l'accesso su www.ecarup.com con l'account desiderato.

b) Selezionare la scheda «OCPP URL».

c) Copiare il link e inserirlo nel campo «CsAddress» dell'interfaccia EVTEC.

7\. Alla fine, tornare con il pulsante «back» al menu del punto 4 di questa guida. Poi selezionare «ConfigurationParameters».

8\. Dopo aver selezionato «ConfigurationParameters», effettuare le impostazioni per la stazione EVTEC secondo le proprie esigenze (esempio nello screenshot)

</div>
<div className="col col--4 text--center">

![EVTEC – Figura 8](/img/ocpp-ladestationen-evtec/08.png)

</div>
</div>

9. Impostare MeterValuesSampledData con il valore Energy.Active.Import.Register,Power.Active.Import, affinché venga visualizzata la potenza di ricarica in tempo reale.

10. Alla fine, tornare con il pulsante «back» al menu del punto 4 e poi ancora una volta con il pulsante «back» al menu del punto 3 di questa guida. Poi selezionare «Authentication».

![EVTEC – Figura 9](/img/ocpp-ladestationen-evtec/09.png)

<div className="row">
<div className="col col--8">

11\. Dopo aver selezionato «Authentification», impostare la voce di menu «ChargeAuthentification» su OCPP. Lasciare invariate le altre voci di menu.

</div>
<div className="col col--4 text--center">

![EVTEC – Figura 10](/img/ocpp-ladestationen-evtec/10.png)

</div>
</div>

12\. La stazione EVTEC è ora stata creata nell'account eCarUp definito dall'URL. Ora la stazione può essere configurata tramite il processo standard nell'app eCarUp e nel login web in base alle esigenze individuali (ubicazione, prezzi, immagini ecc.).

⚠️ ATTENZIONE: tenere conto dei connettori multipli!

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale. 

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![EVTEC – Figura 11](/img/ocpp-ladestationen-evtec/11.png)

![EVTEC – Figura 12](/img/ocpp-ladestationen-evtec/12.png)
