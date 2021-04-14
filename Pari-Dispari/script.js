function numGenerator(numero) {
    return numero = Math.floor(Math.random() * 5) + 1
}
function CheckPariDispari(numero) {
    if (numero % 2 === 0) {
        return 'pari'
    } else {
        return 'dispari'
    }
}
function CheckNumeroUtente(numero) {
    var num = parseInt(numero)
    if (isNaN(num)) {
        return 'Non è stato inserito un numero'
    } else if (num > 5 || num < 1) {
        return 'Il numero deve essere tra 1 e 5'
    }
    else {
        return num 
    }
}

var pariDispari = prompt('Scrivi pari o dispari').toLocaleLowerCase()
var numUtente = prompt('Inserisci un numero da 1 a 5')
var noNumero = CheckNumeroUtente(numUtente)
var somma = CheckNumeroUtente(numUtente) + numGenerator()
var res = CheckPariDispari(somma)
console.log('Selezione Utente = ' + pariDispari)
console.log('Numero utente = ' + (CheckNumeroUtente(numUtente)))
console.log(res)
if (noNumero === 'Non è stato inserito un numero' || noNumero === 'Il numero deve essere tra 1 e 5') {
    document.getElementById('somma').innerHTML = noNumero
} else {
    document.getElementById('somma').innerHTML = somma
    document.getElementById('pari-dispari').innerHTML = res
    
    
    switch (pariDispari) {
        case 'pari':
            console.log(somma)
            if (res === 'pari') {
                console.log('Hai Vinto')
                document.getElementById('hai-vinto').innerHTML = 'Hai Vinto'
            } else {
                console.log('Hai Perso')
                document.getElementById('hai-perso').innerHTML = 'Hai Perso'
    
            }
            break;
        case 'dispari':
            console.log(somma)
            if (res === 'dispari') {
                console.log('Hai Vinto')
                document.getElementById('hai-vinto').innerHTML = 'Hai Vinto'
            } else {
                console.log('Hai Perso')
                document.getElementById('hai-perso').innerHTML = 'Hai Perso'
            }
            break;
        default:
            console.log('Inserimento non valido')
            document.getElementById('errore').innerHTML = 'Sei morto, dovevi scegliere tra pari o dispari'
            break;
    }
}
 
