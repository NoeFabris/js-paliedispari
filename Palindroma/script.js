function checkInserimento(parola) {
    var num = parseInt(parola)
    if (!Number.isNaN(num)) {      //typeof num == 'NaN'
        return 'numero'
    } else if (parola == '') {
        return 'non valido'
    }
    else {
        return parola
    }
}
function reverseString(ParolaContrario) {
    var strToArray = ParolaContrario.split('')
    var reverseArray = strToArray.reverse()
    var joinArray = reverseArray.join('')
    return joinArray
}

var inserimentoUtente = prompt('Inserisci una Parola')
var inserimento = checkInserimento(inserimentoUtente)
var parolaAlContrario = reverseString(inserimento)
var inserimentoMinuscolo = inserimento.toLocaleLowerCase()
var ParolaAlContrarioMinuscolo = parolaAlContrario.toLocaleLowerCase()

switch (inserimento) {
    case 'numero':
        document.getElementById('output').innerHTML = inserimentoUtente + ' non è una parola'
        break;

    case 'non valido':
        document.getElementById('output').innerHTML = 'Valore non valido'
        break;
    default:
        if (inserimentoMinuscolo === ParolaAlContrarioMinuscolo) {
            document.getElementById('palindroma').innerHTML += 'Palindroma'
        } else {
            document.getElementById('non-palindroma').innerHTML += 'Non Palindroma'
        }
        document.getElementById('output').innerHTML = '<li>Parola inserita: ' + inserimento + '</li>'
        document.getElementById('output').innerHTML += '<li>Al Contrario: ' + parolaAlContrario + '</li>'        
        break;
}