// get all coffees from local storage
const getAllFavorites = () => {
    const all = localStorage.getItem("favorites");

    if (all) {
        const favorites = JSON.parse(all);
        return favorites;
    } else {
        return [];
    }
};

// add a coffee to local storage
const addFavorite = (coffee) => {
    const favorites = getAllFavorites();
    const isExist = favorites.find(item => item.id === coffee.id);

    if(isExist) return  alert("Already exist");

    favorites.push(coffee);
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

// remove coffee from local storage

    
export { addFavorite };   