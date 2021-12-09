//group of arrays that determin which path you will take and so on so fourth
let productive = 'Its time to get stuff done! So go and grab your ';
let unproductive ='Productivity can wait because right now, you deserve a rest. Go and ';

let productiveOne = ['computer, turn it on and start working at ', 'favorite study book and head to ', 'workout gear and jog to '];
let unproductivityOne = ['turn on your laptop because you are about to watch a movie at ', 'grab that favorite book you have been dying to read and head to ', 'take a well deserved nap at '];

let locations = ['your favorite cozy spot.', 'your local coffee shop.', 'a warm quiet local library.', 'beautiful outdoor spot near your house.']

let groupedArry = [productive, unproductive];
let groupedArryOne = [productiveOne, unproductivityOne];

let figuringItOut = (arry, arryOne, arryTwo) => {
    let pick = arry[Math.floor(Math.random() * 2)];
    let pickOne = arryOne
    let pickFinal = arryTwo;

    if(pick === productive){
        pickOne = pickOne[0];
    } else{
        pickOne = pickOne = pickOne[1]
    };

    return pick + pickOne[Math.floor(Math.random() * 3)] + pickFinal[Math.floor(Math.random() * 3)]
};

console.log(figuringItOut(groupedArry, groupedArryOne, locations))