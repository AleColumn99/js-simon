/* Simon says
1. al via il computer genera 5 numeri random
2. vengono mostrati per 5 secondi questi numeri
3. l'utente inserisce 5 numeri cercando di indovinare quelli del PC
4. attesa di 5 secondi con "calcolo in corso"
5. mostrati i numeri indovinati
*/

$(document).ready(function() {

  reset();

  //array numeri rand
  var arrRandom = [];
  var arrNumber = [];
  var arrResult = [];
  var minNum = 0;
  var maxNum = 0;

  $('#start').click(function(){

    minNum = $('#min-number').val();
    maxNum = $('#max-number').val();

    $('#min-max').hide();

    $(this).hide();
    while (arrRandom.length < 5) {
      arrRandom.push(getRandNum(minNum, maxNum));
    }

    printOutput(arrRandom.toString(), '#display')

    setTimeout(function() {

      printOutput('Indovina i 5 numeri', '#display');
      $('#send-box').show();

    }, 5000);

  });

  $('#send').click(function() {

    arrNumber.push($('#number-input').val());

    if (arrNumber.length == 5) {

      printOutput('Calcolo in corso...', '#display');
      $('#send-box').hide();

      setTimeout(function() {

        printOutput('Hai inserito: ' + arrNumber.toString(), '#display');        
    
      }, 3000);
    
      setTimeout(function() {

        arrResult = compareArrays(arrRandom, arrNumber);

        if (arrResult.length == 0) {

          printOutput('Non hai indovinato nessun numero, mi spiace...', '#display');
          $('#restart').show();

        } else {
    
          printOutput('Hai indovinato i seguenti numeri: ' + arrResult, '#display');
          $('#restart').show();
        
        }
    
      }, 6000);

    }

  });

  /* $('#restart').click(function() {
      
    reset();

  } */

});

function reset() {

  $('#display').text('Inserisci i numeri tra cui esrarre i numeri, clicca su VIA e iniziamo!');
  $('#start').show();
  $('#send-box').hide();
  $('#restart').hide();

}

function printOutput(text, target) {

  $(target).text(text);

}

function getRandNum (min, max) {

  return Math.ceil(Math.random() * (max - min) + min);

}

function compareArrays (arrOne, arrTwo) {

  var arrCompare = [];

  for (var i=0; i<arrOne.length; i++) {

    for (var c=0; c<arrTwo.length; c++) {

      if (arrTwo[c] == arrOne[i]) {

        arrCompare.push(arrTwo[c]);
        break;

      }

    }

  }

  return arrCompare;

}