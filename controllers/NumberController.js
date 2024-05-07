import axios from 'axios'; // Import axios for making HTTP requests

const API_BASE_URL = 'http://20.244.56.144/test/';

async function fetchNumbersFromServer(endpoint) {
    try {
        const response = await axios.get(API_BASE_URL + endpoint);
        return response.data.numbers;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw new Error('Error fetching data from the server');
    }
}

async function handleNumberRequest(numberId) {
    try {
        const numbers = await fetchNumbersFromServer(numberId);
        return numbers;
    } catch (error) {
        console.error('Error handling number request:', error.message);
        throw new Error('Error handling number request');
    }
}

export { handleNumberRequest };
