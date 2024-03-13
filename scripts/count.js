let storeButtonUp = document.getElementById('up');
let storeButtonDown = document.getElementById('down');
let count = 0;

function updateCounter() {
    const counter = document.getElementById('counter');
    counter.textContent = count;

    if(count <= 0) {
        counter.innerHTML = 0;
        return count = 0;
    }
    else {
        return count;
    }
};

function AddSubtractCount() {
    storeButtonUp.addEventListener('click', () => {
        count ++;
        updateCounter();
        console.log('clicked up');
        console.log(count);
    });
    storeButtonDown.addEventListener('click', () => {
        count --;
        updateCounter();
        console.log('clicked down');
        console.log(count);
    });
  };

AddSubtractCount();
