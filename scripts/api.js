'use strict';

const api = (function(){
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/andrewb';

    function listApiFetch(...args){
        let error = false;
        return fetch(...args)
            .then(res => {
                if(!res.ok){
                    error = true;
                    store.error = true;
                }
                return res.json();
            })
            .then(data => {
                if(error) throw new Error(data.message);
                return data;
            })
            .catch(err => store.errorMessage = err.message);
    }

    function getItems(){
        return listApiFetch(`${BASE_URL}/items`);
    }


    function createItem(name){
        const newItem = JSON.stringify({
            name
        });
        return listApiFetch(`${BASE_URL}/items`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: newItem
        });
    }

    function updateItem(id, updateData){
        return listApiFetch(`${BASE_URL}/items/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateData)
        });
    }

    function deleteItem(id){
        return listApiFetch(`${BASE_URL}/items/${id}`, {
            method: 'DELETE'
        });
    }

    return {
        getItems,
        createItem,
        updateItem,
        deleteItem
    };

    

}());