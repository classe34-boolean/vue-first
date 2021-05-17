// Predisponiamo due input, in cui inseriremo Nome e Cognome.
// In un paragrafo utilizzare Nome e Cognome per salutare l’utente

// Creiamo una pagina con all’interno un titolo di colore rosso.
// Al click di un bottone il titolo diventerà blu.

var app = new Vue(
    {
        el: "#root",
        data: {
            nome: "",
            cognome: "",
            colorClass: "red"
        },
        methods: {
            saluta: function () {
                alert("Ciao");
            },
            saluta2: function () {
                console.log("Ciao");
            },
            cambiaColore: function () {

               if (this.colorClass == "red") {
                   this.colorClass = "blue"; 
               } else {
                this.colorClass = "red"; 
               }
               
            }
        }
    }
);