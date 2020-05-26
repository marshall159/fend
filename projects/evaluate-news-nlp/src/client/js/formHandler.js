async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data)
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
}

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('name').value;

    // Validate URL
    if (Client.isValidURL(url)) {
        const response = await postData(
            'http://localhost:8082/aylien', { url }
        );
    
        console.log("::: Form Submitted :::");
        console.log('response :>> ', response);
    
        document.getElementById('results').innerHTML = response.sentences;
    } else {
        document.getElementById('results').innerHTML = 'Please input a valid URL';
    }
}

export { handleSubmit }
