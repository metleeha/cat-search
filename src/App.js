import SearchBar from './components/SearchBar.js';
import SearchResult from './components/SearchResult.js'

export default class App {
    constructor() {
        console.log("App is created!");

        const body = document.body;

        const searchBar = new searchBar(body);
        const searchResult = new searchResult(body, []);
    }
}