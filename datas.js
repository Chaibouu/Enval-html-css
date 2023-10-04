const factures = [
    { 
        facture: "00002",
        laboratoire : "Biochimie",
        date : "10/03/2023" 
    },
    { 
        facture: "00001",
        laboratoire : "Enval",
        date : "10/03/2023" 
    },
    { 
        facture: "00003",
        laboratoire : "Biologie",
        date : "11/03/2023" 
    },
    { 
        facture: "00006",
        laboratoire : "Biochimie",
        date : "12/03/2023" 
    },
    { 
        facture: "00005",
        laboratoire : "Enval",
        date : "12/03/2023" 
    },
    { 
        facture: "00004",
        laboratoire : "Biologie",
        date : "12/03/2023" 
    },
    { 
        facture: "00009" ,
        laboratoire : "Enval",
        date : "13/03/2023" 
    },
    { 
        facture: "00008" ,
        laboratoire : "Géologie",
        date : "13/03/2023" 
    },
    { 
        facture: "00007",
        laboratoire : "Enval",
        date : "13/03/2023" 
    }
]


// donées de commandes

const commandes = [
    {
        commande:"000001",
        laboratoire:"Enval",
        date:"10/03/2023",
        statut: "En cours",
    },
    {
        commande:"000002",
        laboratoire:"Codeloccol",
        date:"10/03/2023",
        statut: "En cours",
    },
    {
        commande:"000003",
        laboratoire:"ANSI",
        date:"12/03/2023",
        statut: "Terminée",
    },
    {
        commande:"000004",
        laboratoire:"CIPMEN",
        date:"12/03/2023",
        statut: "En cours",
    },
    {
        commande:"000005",
        laboratoire:"ADU",
        date:"13/03/2023",
        statut: "Terminée",
    },
    {
        commande:"000006",
        laboratoire:"Codeloccol",
        date:"14/03/2023",
        statut: "En cours",
    },
    {
        commande:"000007",
        laboratoire:"Enval",
        date:"14/03/2023",
        statut: "En cours",
    },
    {
        commande:"000008",
        laboratoire:"ANSI",
        date:"16/03/2023",
        statut: "En cours",
    },
    {
        commande:"000009",
        laboratoire:"ADU",
        date:"18/03/2023",
        statut: "Terminée",
    }
]

// donées de suivi

const suivis = [
    {
        lot:"TE232003001",
        etat:"Reçu",
        date: "12/03/2023",
        rapport:"Disponnible",
    },
    {
        lot:"E202302023",
        etat:"Non Reçu",
        date: "12/03/2023",
        rapport:"Non disponible",
    },
    {
        lot:"TE20230190",
        etat:"Reçu",
        date: "14/03/2023",
        rapport:"Non disponible",
    },
    {
        lot:"Carbonate",
        etat:"Reçu",
        date: "14/03/2023",
        rapport:"Disponnible",
    },
    {
        lot:"Chlourire",
        etat:"Non Reçu",
        date: "15/03/2023",
        rapport:"Non disponible",
    },
    {
        lot:"CO2 libre",
        etat:"Reçu",
        date: "15/03/2023",
        rapport:"Disponnible",
    },
    {
        lot:"Conductivité electrique",
        etat:"Non Reçu",
        date: "15/03/2023",
        rapport:"Non disponible",
    },
    {
        lot:"pH/Temperature",
        etat:"Reçu",
        date: "16/03/2023",
        rapport:"Disponnible",
    },
    {
        lot:"Couleur Brute",
        etat:"Reçu",
        date: "17/03/2023",
        rapport:"Non disponible",
    },
    {
        lot:"Cyanure libre",
        etat:"Reçu",
        date: "20/03/2023",
        rapport:"Disponnible",
    }
]