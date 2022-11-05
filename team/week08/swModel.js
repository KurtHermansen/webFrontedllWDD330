const starWarsAPI = [
    {
        category: "films",
        url: "https://swapi.dev/api/films/"
    },
    {
        category: "people",
        url: "https://swapi.dev/api/people/"
    },
    {
        category: "planets",
        url: "https://swapi.dev/api/planets/"
    },
    {
        category: "species",
        url: "https://swapi.dev/api/species/"
    },
    {
        category: "starships",
        url: "https://swapi.dev/api/starships/"
    },
    {
        category: "vehicles",
        url: "https://swapi.dev/api/vehicles/"
    }

]

class StarWarsModel {
    getCategory(category) {
       const swCategory = starWarsAPI.find(list => list.category === category)
       return swCategory.url

    }


    getNextPage(url) {
        return 'boop';
    }
}

export default StarWarsModel;