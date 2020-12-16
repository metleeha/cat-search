export default class ScrollBtn {

    constructor ({ $target }) {        
        this.button = document.createElement('button');
        this.button.className = 'scroll-top-btn';
        this.rootElement = document.documentElement;
        $target.appendChild(this.button);

        this.render();
    }

    handleClick() {
        window.scroll({top: 0, left: 0, behavior: 'smooth'});
    }

    handleScroll() {
        // TODO:
    }

    render() {
        this.button.innerText = '☝️';
        this.button.addEventListener('click', () => {
            this.handleClick();
        });
        this.button.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }
}