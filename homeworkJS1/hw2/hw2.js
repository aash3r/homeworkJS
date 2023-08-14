const people = [
    {
        name: 'Jack',
        surname: 'Smith',
        profilePic: 'http://picsum.photos/300/300'
    },
    {
        name: 'Mary',
        surname: 'Gold',
        profilePic: 'http://picsum.photos/301/301'
    },
    {
        name: 'Sarah',
        surname: 'Connor',
        profilePic: 'http://picsum.photos/299/299'
    }
];

const displayPeople = () => {
    const ul = document.createElement('ul');
    const body = document.getElementById('body');

    people.forEach(({ name, surname, profilePic }) => {
        const li = document.createElement('li');
        const div = document.createElement('div');

        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';

        const nameNode = document.createTextNode(`Name: ${name}, `);
        const surnameNode = document.createTextNode(`Surname: ${surname}, `);
        const img = document.createElement('img');
        const regex = /\/(\d+)\/(\d+)$/;
        const match = profilePic.match(regex);
        const height = parseInt(match[1], 10);
        const width = parseInt(match[2], 10);

        img.style.height = height + 'px'; // Added unit
        img.style.width = width + 'px';   // Added unit
        img.src = profilePic;

        div.appendChild(nameNode);
        div.appendChild(surnameNode);
        div.appendChild(img);

        li.appendChild(div);
        ul.appendChild(li);
    });

    body.appendChild(ul);
};