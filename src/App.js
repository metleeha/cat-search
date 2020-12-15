import SearchingSection from './components/SearchingSection.js';
import ResultsSection from './components/ResultsSection.js';
import DetailModal from './components/DetailModal.js';
import { api } from './api/theDogAPI.js';

export default class App {
    constructor($target) {        
        const searchingSection = new SearchingSection({
            $target,
            onSearch: keyword => {
                api.fetchDogs(keyword).then(data => { resultsSection.setState(data); });
            },
            onRandom: () => {
                api.fetchRandomDogs().then(data => { resultsSection.setState(data); });
            }
        });

        const resultsSection = new ResultsSection({
            $target,
            onClick: data => {
                detailModal.setState(data);
            }
        });

        const detailModal = new DetailModal({
            $target
        });


        this.focusOnSearchBox();
    }
    
    focusOnSearchBox() {
        const searchBox = document.querySelector('.search-box');
        searchBox.focus();
    }
}