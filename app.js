var fizzBuzz = [];

for (var i = 0; i <= 50; i++) {
    if (i === 0) continue;
    var message = "";
    if (i % 3 === 0) message += "fizz";
    if (i % 5 === 0) message += "buzz";
    else (message += i);
    if (message !== "") fizzBuzz.push(message);
}

// console.log(fizzBuzz);

var ul = document.querySelector("ul");
console.log(ul);

// ispis liste iz niza
for (var i = 0; i < fizzBuzz.length; i++) {
    var li = document.createElement("li");
    li.innerText = fizzBuzz[i];
    ul.appendChild(li);
}


/*
VJEŽBA: Manipulacija DOM
Trajanje: cca 30min (~20:2)

Napravite stranicu (web aplikaciju) koja će ispisati listu FizzBuzz rezultata.

Dakle, FizzBuzz pravila su:
1. Prođite kroz brojeve od 1 do 50
2. Ako je broj djeljiv sa 3, ispišite umjesto broja "Fizz"
3. Ako je broj djeljiv sa 5, ispišite umjesto broja "Buzz"
4. Ako je broj djeljiv sa 3 i sa 5, ispišite umjesto broja "FizzBuzz"
5. Ako broj nije djeljiv sa 3 ni sa 5, ispišite broj

Za svaki broj koji se provjeri:
1. Napravite li element
2. Upišite rezultat provjere u li element
3. Dodajte li element u ul element na stranici

BONUS:
Napravite setTimeout koji će nakon 10s obrisati listu.
*/