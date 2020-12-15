export default class Card {
    constructor({$target, data, onClick}) {
        this.onClick = onClick;
        this.data = data;
        this.card = document.createElement('article');
        this.card.className = 'dog-card';

        $target.appendChild(this.card);

        this.render();
    }

    getDetail() {
        this.onClick(this.data);
    }

    render() {
        const url = this.data.url;
        const {name, origin} = this.data.breeds.length > 0 ? this.data.breeds[0] : { name: '정보없음', origin: '정보없음'};

        const cardImage = document.createElement('img');
        cardImage.className = 'card-image';
        cardImage.classList.add('lazy');
        cardImage.dataset.src = url;

        const cardInfo = document.createElement('article');
        cardInfo.className = 'card-info';

        const dogName = document.createElement('p');
        dogName.className = 'dog-name';
        dogName.innerText = name;

        const dogOrigin = document.createElement('p');
        dogOrigin.className = 'dog-origin';
        dogOrigin.innerText = origin;

        this.card.addEventListener('click', () => { this.getDetail(); });

        cardInfo.appendChild(dogName);
        cardInfo.appendChild(dogOrigin);
        this.card.appendChild(cardImage);
        this.card.appendChild(cardInfo);
    }
}