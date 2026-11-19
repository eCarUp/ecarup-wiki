---
title: 'Eaton OCPP'
slug: '/ocpp-ladestationen/eaton'
description: 'Stazioni di ricarica Green Motion più datate (Box Proxy)'
sidebar_label: 'Eaton OCPP'
---
## Stazioni di ricarica Box Proxy

## Stazioni di ricarica Green Motion più datate (Box Proxy)

Il Box Proxy è disponibile da subito per l'integrazione delle stazioni Green Motion più datate. Ciò significa che le stazioni di ricarica possono già essere collegate alla piattaforma eCarUp e testate seguendo la guida riportata di seguito. Potrebbero però essere ancora in corso estensioni e/o miglioramenti.

Attualmente sono supportati i seguenti modelli di stazioni di ricarica:

[Private-One con un connettore](/drittsysteme/box-proxy-green-motion)

[xChargeLN xCIM Client con un connettore](/drittsysteme/box-proxy-green-motion)

[Master One](/drittsysteme/box-proxy-green-motion)

[Network TWO](/drittsysteme/box-proxy-green-motion)

[Smart One](/drittsysteme/box-proxy-green-motion)

## Stazioni di ricarica OCPP

<Kacheln min="11rem">

<Kachel bild="/img/ocpp-ladestationen-eaton/01.jpg" bildtext="Eaton Green Motion Duo" titel="Green Motion Duo" href="https://www.eaton.com/ch/de-de.html" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-eaton/02.jpg" bildtext="Eaton Green Motion DC 22&66" titel="Green Motion DC 22&66" href="https://www.eaton.com/ch/de-de.html" bildhoehe="10rem" mittig />

<Kachel bild="/img/ocpp-ladestationen-eaton/03.jpg" bildtext="Eaton Green Motion Building" titel="Green Motion Building" href="https://www.eaton.com/ch/de-de.html" bildhoehe="10rem" mittig />

</Kacheln>

## Guida all'integrazione del backend

Le stazioni Eaton possono essere integrate nel sistema di conteggio eCarUp in pochi passaggi. Una volta installate nel tuo account, puoi definire autonomamente e senza complicazioni le condizioni d'uso delle tue stazioni (prezzi, utenti, orari disponibili ecc.). Sei tu a decidere chi può caricare, quando e a quale prezzo.

- Requisito per l'[integrazione tramite OCPP](/stationsbetreiber/inbetriebnahme-ocpp-station)

- Configurazione nel [portale web per i gestori di stazioni](/stationsbetreiber/webportal)

- Scopri di più sulle nostre [funzioni Premium](/funktionen)

### Integrazione di stazioni OCPP

1.  Assicurati che le tue stazioni di ricarica siano installate e che il tuo PC o smartphone sia collegato alla stessa rete della stazione di ricarica.

2.  Apri il [portale web di eCarUp](https://admin.ecarup.com/authentication/login) ed effettua l'accesso con i dati del tuo account.

3.  Nel menu a sinistra, clicca sulla scheda «Stazioni» («Stationen»).

4.  Seleziona la scheda «OCPP».

5.  Copia l'URL negli appunti.

6.  Vai all'interfaccia web della stazione desiderata e incolla l'URL copiato.

## Integrazione delle stazioni di ricarica Eaton

### Green Motion DC 22 & 66

Versione firmware testata: 2003

### Integrazione della stazione di ricarica

Info: la pagina di configurazione rimane attiva per 30 minuti, poi la stazione deve essere riavviata.

- Accendi la stazione tramite l'interruttore di protezione

- Collega il PC tramite Ethernet a una delle tre porte LAN del router Teltonika nella stazione

- Nel browser vai al seguente indirizzo IP: 192.168.52.11

- Clicca su «Apri pagina» e inserisci nel browser i dati di accesso forniti in dotazione. (di default può essere admin/admin)

![Eaton OCPP – Figura 4](/img/ocpp-ladestationen-eaton/04.png)

![Eaton OCPP – Figura 5](/img/ocpp-ladestationen-eaton/05.png)

### Passaggio 1

- Verificare la versione del software: Bienne 2003 è il firmware testato.

![Eaton OCPP – Figura 6](/img/ocpp-ladestationen-eaton/06.png)

### Passaggio 2

- Selezionare OCPP Server

- In Backend impostare Custom

- Aggiungere l'URL eCarUp dal proprio account

Esempio:

wss://[www.ecarup.com/api/Ocpp16/D037091EE3xxxxxx/](http://www.ecarup.com/api/Ocpp16/D037091EE3026BE0/HL68P28001)

- Security Profile su None

- Salvare

![Eaton OCPP – Figura 7](/img/ocpp-ladestationen-eaton/07.png)

### Passaggio 3

- Riavviare la stazione

## Green Motion Building

- Firmware testato v.1807

### Integrazione della stazione di ricarica

<div className="row">
<div className="col col--8">

Info: la pagina di configurazione rimane attiva per 30 minuti, poi la stazione deve essere riavviata.

- Accendi la stazione

- Attiva il WLAN sul tuo PC o smartphone

- La stazione crea un hotspot con le ultime 4 cifre del numero di serie. Ad es. GM\_Mxxxxx

- La password è riportata su un adesivo insieme alla documentazione del caricatore. I modelli più datati hanno una password standard (GreenMotion!1052).

- Collega il tuo PC o smartphone all'hotspot e vai nel browser al seguente indirizzo IP: 192.168.53.1

- Configura la rete e prosegui con i passaggi riportati di seguito.

- Prima di accedere alla pagina di configurazione potrebbe comparire un avviso. Clicca su «Continua».

</div>
<div className="col col--4 text--center">

![Eaton OCPP – Figura 8](/img/ocpp-ladestationen-eaton/08.png)

</div>
</div>

![Eaton OCPP – Figura 9](/img/ocpp-ladestationen-eaton/09.png)

### Passaggio 1

- Selezionare OCPP Server

- In Backend impostare Custom

- Aggiungere l'URL eCarUp dal proprio account

Esempio:

wss://[www.ecarup.com/api/Ocpp16/D037091EE3026BE0/](http://www.ecarup.com/api/Ocpp16/D037091EE3026BE0/HL68P28001)

- Security Profile su None

- Salvare

![Eaton OCPP – Figura 10](/img/ocpp-ladestationen-eaton/10.png)

### Passaggio 2

- Riavviare la stazione

## Verifica dell'autorizzazione

![Eaton OCPP – Figura 11](/img/ocpp-ladestationen-eaton/11.png)

## Impostazioni avanzate tramite lo strumento di manutenzione (eCarUp Premium)

L'intervallo di caricamento dei Meter Values può variare da stazione a stazione. Consigliamo un intervallo di 30-60 s. Solo così possiamo calcolare e visualizzare meglio nell'app la potenza di ricarica attuale.

Puoi modificarlo come segue:

1.  Get Configuration (per leggere ciò che è programmato)

2.  Change Configuration (per sovrascrivere il valore)

![Eaton OCPP – Figura 12](/img/ocpp-ladestationen-eaton/12.png)

![Eaton OCPP – Figura 13](/img/ocpp-ladestationen-eaton/13.png)

### Download Logs

Se la stazione non compare nel nostro sistema e nemmeno il supporto Eaton riesce a trovare una soluzione al problema, vi preghiamo di metterci a disposizione i file di log per la verifica.

Maintenance --> System Log --> Get the Logs
