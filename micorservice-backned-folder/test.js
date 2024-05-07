const axios = require('axios');

async function getTopLaptops() {
    try {
        const response = await axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products/top-10?minPrice=1&maxPrice=10000');
        console.log('Top 10 Laptops:', response.data);
    } catch (error) {
        console.error('Error fetching top laptops:', error);
    }
}

// Call the function to get top laptops
getTopLaptops();
