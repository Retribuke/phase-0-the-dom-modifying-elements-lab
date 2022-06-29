function mainRemove() {
    const main = document.getElementById('main');
    main.remove();
}

mainRemove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Justyn is the champion';
document.body.append(newHeader);