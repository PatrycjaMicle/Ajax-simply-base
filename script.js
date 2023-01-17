
function runAjax() {

    var requestObject = new XMLHttpRequest();

    requestObject.onreadystatechange = function ()  //callback function for on readystatechange
    {

        if (requestObject.readyState == 4 && requestObject.status == 200) {

            document.getElementById('response').innerHTML=requestObject.responseText;
        }

        if (requestObject.status == 404) {
            alert("Error 404");
        }
    };

    /*
    readyState - przechowuje (jako wartość liczbową od 0 do 4) obecny stan obiektu. Poniżej możliwe wartości:
    0 - żadanie nie zostało jeszcze przygotowane
    1 - połączenie z serwerm zostało wykonane poprawnie
    2 - otrzymano odpowiedź od serwera
    3 - odpowiedź od serwera jest obecnie przetwarzana
    4 - wykonanie żądania udalo się poprawnie, odpowiedź od serwera została w całości odebrana

    onreadystatechange - przechowuje funkcję zwrotną (callback), która wywoływana jest w momencie każdej zmiany stanu w readyState. Funkcja taka wywoływana jest automatycznie podczas kazdego wystąpienia tego zdarzenia.

    status - przechowuje status połączenia odebrany od serwera, może zawierać 2 wartości:
    200: "OK" - gdy zasób, do którego wysyłamy żądanie istnieje
    404: Page not found - gdy serwer zwraca nam, że zasób nie istnieje
    */

    requestObject.open("GET", "ajax.txt", true);
    requestObject.send();


}