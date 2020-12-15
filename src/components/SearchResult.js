export default class SearchResult {
    constructor($target) {
        this.$target = $target;
        this.data = data;
        this.data = [];

        this.render();
    }

    updateData(data) {
        this.data = data;
        this.render();
    }


    render () {
        this.$target.innerHTML = '';

        const itemGroupWrapper = document.createElement('div');
        itemGroupWrapper.className = 'wrapper';

        const itemGroup = document.createElement('div');
        itemGroup.className = 'item-group';
        this.data.map(cat => {
            new Item(itemGroup, cat);
        });

        itemGroupWrapper.appendChild(itemGroup);
        this.$target.appendChild(itemGroupWrapper);
        
    }
}