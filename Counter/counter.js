let counterElement = document.getElementById("counter");
let count = 0;

function updateCounter(newValue) {
    const oldElement = counterElement;
    const newElement = oldElement.cloneNode(true);
    newElement.textContent = newValue;

    if (newValue > count) {
        // Moving up
        newElement.style.top = "35px";
        counterElement.parentNode.appendChild(newElement);
        setTimeout(() => {
            oldElement.style.top = "-35px";
            newElement.style.top = "0";
        }, 20);
    } else {
        // Moving down
        newElement.style.top = "-35px";
        counterElement.parentNode.insertBefore(newElement, oldElement);
        setTimeout(() => {
            oldElement.style.top = "35px";
            newElement.style.top = "0";
        }, 20);
    }

    setTimeout(() => {
        oldElement.remove();
    }, 300);

    counterElement = newElement;
    count = newValue;
}

function incrementCounter() {
    updateCounter(count + 1);
}

function decrementCounter() {
    updateCounter(count - 1);
}

function resetCounter() {
    updateCounter(0);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('incrementBtn').addEventListener('click', incrementCounter);
    document.getElementById('decrementBtn').addEventListener('click', decrementCounter);
    document.getElementById('resetBtn').addEventListener('click', resetCounter);
});