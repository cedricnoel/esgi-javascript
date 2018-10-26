let table = document.createElement('table')
table.setAttribute('id', 'table')

let root  = document.getElementById('root')

root.appendChild(table)

for (let i = 0; i < 4; i++) {
    let tr = document.createElement('tr')

    for (let j = 0; j < 4; j++) {
        const text = document.createTextNode('lorem ipsum')
        let td = document.createElement('td')
        td.setAttribute('id', i + '_' + j)

        td.appendChild(text)
        tr.appendChild(td)

        if (j % 2 === 0) {
            td.style.backgroundColor = 'grey'
        }
    } 
    table.appendChild(tr)
}

document.querySelectorAll('td').forEach((elem) => {
    elem.addEventListener('click', function () {
        if (this.getElementsByTagName('input').length) return;

        let text = this.innerText;
        let input = document.createElement('input');

        input.value = text;

        this.innerText = "";
        this.appendChild(input);

        input.addEventListener('blur', function() {
            let value = this.value;
            let parent = this.parentNode;

            const text = document.createTextNode(value);

            parent.removeChild(this);
            parent.appendChild(text);
        });
    })
}) 

let saveButton = document.createElement('button')
saveButton.innerText = 'Save'
saveButton.addEventListener('click', function () {
    let data = tableToJson()
})

document.getElementById('root').appendChild(saveButton)

let reloadButton = document.createElement('button')
reloadButton.innerText = 'Reload'
reloadButton.addEventListener('click', function () {
    console.log('Reload data')
})

document.getElementById('root').appendChild(reloadButton)

function tableToJson()
{
    let data = {}

    document.querySelectorAll('td').forEach((e) => {
        data[e.getAttribute('id')] = e.innerText
    })
}