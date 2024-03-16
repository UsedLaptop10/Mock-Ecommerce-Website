// adding items to wish list
const wishList = document.getElementById('wishlist');
const wishlistItem1 = document.getElementById('wishlistItem1');
const wishlistItem2 = document.getElementById('wishlistItem2');
const wishlistItem3 = document.getElementById('wishlistItem3');
const wishlistItem4 = document.getElementById('wishlistItem4');
const wishlistItem5 = document.getElementById('wishlistItem5');
const wishlistItem6 = document.getElementById('wishlistItem6');
const wishlistItem7 = document.getElementById('wishlistItem7');
const wishlistItem8 = document.getElementById('wishlistItem8');
const wishlistItem9 = document.getElementById('wishlistItem9');
const wishlistItem10 = document.getElementById('wishlistItem10');

// gathering ids for each respective buttons
// fising line
const addButtonFishing = document.getElementById('addfishing');
const removeButtonFishing = document.getElementById('removefishing');

// dices
const addButtonDices = document.getElementById('adddice');
const removeButtonDices = document.getElementById('removedice');

// tree
const addButtonTree = document.getElementById('addtree');
const removeButtonTree = document.getElementById('removetree');

// bot
const addButtonBot = document.getElementById('addbot');
const removeButtonBot = document.getElementById('removebot');

// tutle
const addButtonTurtle = document.getElementById('addturtle');
const removeButtonTurtle = document.getElementById('removeturtle');

// coins
const addButtonCoins = document.getElementById('addcoins');
const removeButtonCoins = document.getElementById('removecoins');

// bundle
const addButtonBundle = document.getElementById('addbundle');
const removeButtonBundle = document.getElementById('removebundle');

// dawg
const addButtonDawg = document.getElementById('adddawg');
const removeButtonDawg = document.getElementById('removedawg');

// decoration
const addButtonDecoration = document.getElementById('adddecoration');
const removeButtonDecoration = document.getElementById('removedecoration');

// orbital
const addButtonOrbital = document.getElementById('addorbital');
const removeButtonOrbital = document.getElementById('removeorbital');

// fishing
addButtonFishing.addEventListener('click', () => {
    wishlistItem1.textContent = 'Fishing Line'
    console.log('clicked')
});
    
removeButtonFishing.addEventListener('click', () => {
    wishlistItem1.textContent = ''
    console.log('clickeded')
});

// dices
addButtonDices.addEventListener('click', () => {
    wishlistItem2.textContent = 'Dices'
    console.log('clicked')
})

removeButtonDices.addEventListener('click', () => {
    wishlistItem2.textContent = ''
    console.log('clickeded')
})

// tree
addButtonTree.addEventListener('click', () => {
    wishlistItem3.textContent = 'A Whole Damn Tree'
    console.log('clicked')
})

removeButtonTree.addEventListener('click', () => {
    wishlistItem3.textContent = ''
    console.log('clickeded')
})

// timber bot
addButtonBot.addEventListener('click', () => {
    wishlistItem4.textContent = 'Assistant Bot'
    console.log('clicked')
})

removeButtonBot.addEventListener('click', () => {
    wishlistItem4.textContent = ''
    console.log('clickeded')
})

// rocket turtle
addButtonTurtle.addEventListener('click', () => {
    wishlistItem5.textContent = 'Automated Turtle Rocket'
    console.log('clicked')
})

removeButtonTurtle.addEventListener('click', () => {
    wishlistItem5.textContent = ''
    console.log('clickeded')
})

// coins
addButtonCoins.addEventListener('click', () => {
    wishlistItem6.textContent = 'Coins'
    console.log('clicked')
})

removeButtonCoins.addEventListener('click', () => {
    wishlistItem6.textContent = ''
    console.log('clickeded')
})

// cursed bundle
addButtonBundle.addEventListener('click', () => {
    wishlistItem7.textContent = 'Cursed Bundle'
    console.log('clicked')
})

removeButtonBundle.addEventListener('click', () => {
    wishlistItem7.textContent = ''
    console.log('clickeded')
})

// crazy dawg
addButtonDawg.addEventListener('click', () => {
    wishlistItem8.textContent = 'Crazy Dawg'
    console.log('clicked')
})

removeButtonDawg.addEventListener('click', () => {
    wishlistItem8.textContent = ''
    console.log('clickeded')
})

// fancy decoration
addButtonDecoration.addEventListener('click', () => {
    wishlistItem9.textContent = 'Fancy Decoration'
    console.log('clicked')
})

removeButtonDecoration.addEventListener('click', () => {
    wishlistItem9.textContent = ''
    console.log('clickeded')
})

// orbital sander
addButtonOrbital.addEventListener('click', () => {
    wishlistItem10.textContent = 'Orbital Sander'
    console.log('clicked')
})

removeButtonOrbital.addEventListener('click', () => {
    wishlistItem10.textContent = ''
    console.log('clickeded')
})



