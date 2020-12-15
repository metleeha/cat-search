const API_ENDPOINT = 'https://api.thedogapi.com/v1';

const request = async (url) => {
    try {
        const result = await fetch(url);
        return result.json();
    } catch (e) {
        console.warn(e);
    }
};

const api = {
    fetchDogs: async keyword => {
        const breeds = (await api.searchBreedByName(keyword)).map(breed => { return breed.id; });
        const requests = breeds.map(id => { return request(`${API_ENDPOINT}/images/search?limit=20&breed_ids=${id}`); });

        return Promise.all(requests).then(responses => {
            let result = [];
            responses.forEach(response => { result = result.concat(response); });
            return result;
        });
    },
    fetchRandomDogs: () => {
        return request(`${API_ENDPOINT}/images/search?limit=20`);
    },
    searchBreedByName: keyword => {
        return request(`${API_ENDPOINT}/breeds/search?q=${keyword}`);
    }
};

export { api };