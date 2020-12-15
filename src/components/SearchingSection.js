export default class SearchBar {    
    
    constructor({$target, onSearch, onRandom}) {
        this.recent = [];
        this.onSearch = onSearch;
        this.onRandom = onRandom;
        this.section = document.createElement('section');
        this.section.className = 'searching-section';

        $target.appendChild(this.section);

        this.render();
    }

    addRecentKeyword(keyword) {
        if(this.recent.includes(keyword)) return;
        if(this.recent.length == 5) this.recent.shift();

        this.recent.push(keyword);
        this.render();
    }

    searchByKeyword(keyword) {
        if(keyword.length == 0) return;

        this.addRecentKeyword(keyword);
        this.onSearch(keyword);
    }

    deleteKeyword(){
        const searchBox = document.querySelector('.search-box');
        searchBox.value = '';
    }

    render() {
        this.section.innerHTML = '';
        const randomBtn = document.createElement('span');
        randomBtn.className = 'random-btn';
        randomBtn.innerText = '🐶';
        
        const wrapper = document.createElement('div');
        wrapper.className = 'search-box-wrapper';

        const searchBox = document.createElement('input');
        searchBox.className = 'search-box';
        searchBox.placeholder = '강아지를 검색하세요.';

        const recentKeywords = document.createElement('div');
        recentKeywords.className = 'recent-keywords';

        this.recent.map(keyword => {
            const link = document.createElement('span');
            link.className = 'keyword';
            link.innerText = keyword;

            link.addEventListener('click', () => { this.searchByKeyword(keyword); });

            recentKeywords.appendChild(link);
        });
        
        randomBtn.addEventListener('click', this.onRandom);
        searchBox.addEventListener('focus', this.deleteKeyword);
    
        searchBox.addEventListener('keyup', event => {
            if(event.code == 'Enter'){
                this.searchByKeyword(searchBox.value);
            }
        });

        wrapper.appendChild(searchBox);
        wrapper.appendChild(recentKeywords);
        this.section.appendChild(randomBtn);
        this.section.appendChild(wrapper);
    }
}