'use strict'

const api = (function() {

    const BASE_URL = "https://thinkful-list-api.herokuapp.com/brian-ben";
    const ITEMS_URL = `${BASE_URL}/items`;

    const getItems = function() {
           
        return Promise.resolve(
            fetch(ITEMS_URL)
            .then(res => res)
            .catch(error => { return error.message })
        );
        
    };

    const createItem = function(name) {
        
        const newItem = {
            name,
        };
        const stringedItem = JSON.stringify(newItem);

        const options = {
            method: "POST",
            headers: new Headers ({
                'Content-Type': 'application/json'
            }),
            body: stringedItem,
        };

        return Promise.resolve(
            fetch(ITEMS_URL, options)
                .then(res => {
                    console.log(res);
                    return res;
                }))
                .catch(error => { return error.message });
    };

    const updateItem = function(id, updateData) {
        const options = {
            method: "PATCH",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(updateData),
        };
        const ID_URL = `${ITEMS_URL}/${id}`;
        console.log(ID_URL);

        return Promise.resolve(
            fetch(ID_URL)
                .then(res => {
                    console.log(res);
                    return res;
                }))
                .catch(error => { return error.message });
    };

    const deleteItem = function(id) {
        const options = {
            method: "DELETE",
        };

        const ID_URL = `${ITEMS_URL}/${id}`;
        console.log(ID_URL);
        console.log(id);

        return Promise.resolve(
            fetch(ID_URL)
                .then(res => {
                    console.log(res);
                    return res;
                }))
                .catch(error => {return error.message});
    };
    
    return {
        getItems,
        createItem,
        updateItem,
        deleteItem,
    };

} () );