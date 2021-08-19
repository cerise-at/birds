// ********************************************
// SETUP
const btn = document.querySelector('#msg-btn');
const form = document.querySelector('#new-bird-form');
const birdList = document.querySelector('table');

// Bind event listeners
btn.addEventListener('click', getMessage);
form.addEventListener('submit', submitBird);

// Fetch all cats as soon as app is loaded
getAllBirds();

// ********************************************

// DOGS FLOW
// index
function getAllBirds() {
    fetch('http://localhost:3000/birds')
        .then(r => r.json())
        .then(appendBirds)
        .catch(console.warn)
};

// create
function submitBird(e) {
    e.preventDefault();

    const birdData = {
        name: e.target.name.value,
        colour: e.target.colour.value,
        location: e.target.location.value,
        number: e.target.number.value
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(birdData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/birds', options)
        .then(r => r.json())
        .then(appendBirds)
        .then(() => e.target.reset())
        .catch(console.warn)
};

function updateBirds(id, tr) {
    const options = {
        method: 'PATCH',
    };
    fetch(`http://localhost:3000/birds/${id}`, options)
        .then(r => r.json())
        .then(data => {
            const { bird } = data
            tr.querySelectorAll('td')[1].textContent = bird.number
        })
        .catch(console.warn)
}

function deleteBird(id, li) {
    console.log('deleting', id)
    const options = {
        method: 'DELETE',
    };
    fetch(`http://localhost:3000/birds/${id}`, options)
        .then(li.remove())
        .catch(console.warn)
}

// helpers
function appendBirds(data) {
    data.birds.forEach(appendBird);
};

function appendBird(birdData) {
    const newRow = document.createElement('tr');
    formatBirdTr(birdData, newRow)
    birdList.append(newRow);
};


function formatBirdTr(bird, tr) {
    const nameTd = document.createElement('td');
    const colourTd = document.createElement('td');
    const locationTd = document.createElement('td');
    const numberTd = document.createElement('td');
    const delTd = document.createElement('td');
    const uptTd = document.createElement('td');

    const delBtn = document.createElement('button');
    const uptBtn = document.createElement('button');
    delBtn.setAttribute('class', 'delete')
    uptBtn.setAttribute('class', 'update')
    delBtn.textContent = 'X';
    uptBtn.textContent = '+';
    delBtn.onclick = () => deleteBird(bird.id, tr);
    uptBtn.onclick = () => updateBird(bird.id, tr);
    delTd.append(delBtn);
    uptTd.append(uptBtn);

    nameTd.textContent = bird.name
    colourTd.textContent = bird.colour
    locationTd.textContent = bird.location
    numberTd.textContent = bird.number

    tr.append(nameTd)
    tr.append(colourTd)
    tr.append(locationTd)
    tr.append(numberTd)
    tr.append(delTd)
    tr.append(uptTd)

    return tr
}

// ********************************************

// MESSAGE FLOW
function getMessage() {
    fetch('http://localhost:3000')
        .then(r => r.text())
        .then(renderMessage)
        .catch(console.warn)
};

function renderMessage(msgText) {
    document.querySelector('#msg-btn').textContent = msgText;
};



// ********************************************