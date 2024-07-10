function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

document.getElementById('searchButton').addEventListener('click', function() {
    var csrftoken = getCookie('csrftoken');
    var searchQuery = document.getElementById('searchInput').value;
    var description = document.getElementById('descriptionInput').value;
    // Send the searchInput and description to the Django app
    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'csrfmiddlewaretoken': csrftoken,
            'search_role': searchQuery,
            'search_project':description
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        try {
            // Handle the response from the Django app
            // Parse the data here
            var response = data["response"];
            // Loop through each key in the response object
            for (var key in response) {
                if (response.hasOwnProperty(key)) {
                    var container = document.querySelector('.row.justify-content-center.mt-5 .col-md-6');
                    var value = response[key];
                    // Create a card element
                    var card = document.createElement('div');
                    card.classList.add('card');

                    // Create a div element for the buttons
                    var buttonDiv = document.createElement('div');
                    buttonDiv.classList.add('card-buttons');

                    // Create the Add button
                    var addButton = document.createElement('button');
                    addButton.classList.add('card-add-btn');
                    addButton.textContent = 'Add';

                    // Append the buttons to the button div
                    buttonDiv.appendChild(addButton);

                    // Append the button div to the card
                    card.appendChild(buttonDiv);
                    
                    // Create a header element
                    var header = document.createElement('h3');
                    header.textContent = key;
                    
                    // Append the header to the card
                    card.appendChild(header);
                    
                    // Create a paragraph element for the value
                    var paragraph = document.createElement('p');
                    paragraph.textContent = value;
                    
                    // Append the paragraph to the card
                    card.appendChild(paragraph);
                    
                    // Append the card to the document body or any other container element
                    container.append(card);
                }
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });
});