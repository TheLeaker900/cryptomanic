// Function to fetch API key
async function fetchApiKey() {
    const response = await fetch('https://d9ax4d00.cryptomanic.nl/get-key');
    if (!response.ok) {
        throw new Error('Failed to fetch API key');
    }
    const data = await response.json();
    return data.apiKey; // Assuming the API returns an object with an apiKey property
}

// Function to fetch personal information
async function fetchPersonalInfo(apiKey) {
    const response = await fetch('https://610dhsbc.cryptomanic.nl/get-personal-info', {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch personal information');
    }
    const data = await response.json();
    return data; // Assuming the API returns personal information as an object
}

// Function to fetch product information
async function fetchProductInfo(apiKey) {
    const response = await fetch('https://q6gvawkj.cryptomanic.nl/get-products', {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch product information');
    }
    const data = await response.json();
    return data; // Assuming the API returns product information as an array
}

// Main function to orchestrate the API calls
async function main() {
    try {
        const apiKey = await fetchApiKey();
        console.log('API Key:', apiKey);

        const personalInfo = await fetchPersonalInfo(apiKey);
        console.log('Personal Information:', personalInfo);

        const productInfo = await fetchProductInfo(apiKey);
        console.log('Product Information:', productInfo);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Execute the main function
main();
