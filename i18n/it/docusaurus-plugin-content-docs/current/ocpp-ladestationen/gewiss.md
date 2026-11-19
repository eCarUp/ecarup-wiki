---
title: 'Gewiss'
slug: '/ocpp-ladestationen/gewiss'
description: 'Guida all''integrazione del backend'
sidebar_label: 'Gewiss'
---
<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-gewiss/01.jpg" bildtext="Gewiss JOINON EVO" titel="JOINON EVO" href="https://www.gewiss.com/ch/de/mobility" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-gewiss/02.jpg" bildtext="Gewiss JOINON-FAST" titel="JOINON-FAST" href="https://www.gewiss.com/ch/de/mobility" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione del backend

Le stazioni Gewiss JOINON possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni di utilizzo delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo. 

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal) 

- Scopri qui di più sulle nostre [funzioni premium](/funktionen)


### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua il login con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda "Stazioni" ("Stationen").

4.  Seleziona la scheda "OCPP".

5.  Copia l'URL negli appunti.


1.ws Link senza Basic Auth: testato e funzionante

2.wss senza Basic Auth: testato e funzionante

3.wss con Basic Auth: non testato

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.


## Wallbox JOINON EVO

- "firmwareVersion":"12.3.0" 


1.  Collegati alla stazione Gewiss JOINON Evo tramite LAN o WLAN (i dettagli per la connessione si trovano nelle istruzioni di installazione)

2.  Maschera di login (anche i dati di accesso necessari si trovano nelle istruzioni di installazione).

3.  Alla voce di menu Charging Station è possibile impostare la connessione desiderata. 


4\. Authorisation Type deve essere impostato su "Autorisation". 



![Gewiss – Figura 3](/img/ocpp-ladestationen-gewiss/03.png)

5\. OCPP Protocol su "ON"

6\. Aggiungi l'URL di eCarUp

Esempio: wss://[www.ecarup.com/api/Ocpp16/D8xxxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8xxxxxxxxx)

7\. Chargebox identity = numero di serie della stazione

8\. Salva.



![Gewiss – Figura 4](/img/ocpp-ladestationen-gewiss/04.png)

## Stazione di ricarica DC JOINON I-Fast

- "firmwareVersion":"V4.13.M0 " 


1.  Collegati alla stazione di ricarica DC Gewiss i-Fast tramite LAN o WLAN (i dettagli per la connessione si trovano nelle istruzioni di installazione)

2.  Maschera di login (anche i dati di accesso necessari si trovano nelle istruzioni di installazione).


3. Clicca su "Set"

4\. Seleziona "Backend"

5\. Aggiungi il tuo URL eCarUp in Central System URL. 

Esempio: wss://[www.ecarup.com/api/Ocpp16/D8xxxxxxxxx](http://www.ecarup.com/api/Ocpp16/D8xxxxxxxxx)

6. Charge Box ID\= numero di serie della stazione

7. L'OCPP Security Profile può essere scelto facoltativamente. 

8\. Salva. 




![Gewiss – Figura 5](/img/ocpp-ladestationen-gewiss/05.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo compreso tra 30 e 60 s. Solo così possiamo calcolare e mostrare meglio nell'app la potenza di ricarica attuale. 



Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)


![Gewiss – Figura 6](/img/ocpp-ladestationen-gewiss/06.png)

![Gewiss – Figura 7](/img/ocpp-ladestationen-gewiss/07.png)
