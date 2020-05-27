async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });

    return response.json();
}

async function handleSubmit(event) {
    event.preventDefault()

    let url = document.getElementById('name').value;

    // Validate URL
    if (Client.isValidURL(url)) {
        const response = await postData(
            'http://localhost:8082/aylien', { url }
        );
    
        document.getElementById('results').innerHTML = response.sentences;
    } else {
        document.getElementById('results').innerHTML = 'Please input a valid URL';
    }
}

export { handleSubmit }
