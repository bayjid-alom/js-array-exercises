console.log("===========| Array traversal using for/while loop |==========")

/*
 Looping technique:
 1. for loop
 2. while loop
 3. do while loop
 4. for of --> array looping
 5. for in --> object looping
 */

const friends = ["Elon Mask", "Bill Gates", "Waren"]

for (const friend of friends) {
    // console.log(friend)
}


for (let i = 0; i < friends.length; i++) {
    console.log(i)
    console.log(friends[i])
}



const numbers = [10, 20, 30, 40, 50, 60, 70];

// for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// while loop

let i = 0;
while (i < friends.length) {
    console.log(friends[i])
    i++;
}






