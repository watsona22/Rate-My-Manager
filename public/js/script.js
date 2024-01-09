document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM content loaded');
    fetchDataAndRender();
});

function fetchDataAndRender() {
    console.log('Fetching data...');
    fetch('/api/ratings')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data:', data);

            // Check if data.ratings exists
            if (Array.isArray(data) && data.length > 0) {
                // Compile the template
                const source = document.getElementById('rating-template').innerHTML;
                const template = Handlebars.compile(source);
                console.log('Template compiled successfully');

                // Render the template with the data
                const html = template({ ratings: data.ratings });
                console.log('Rendered HTML:', html);

                // Make sure the container element exists before setting inner HTML
                const container = document.getElementById('ratings-container');
                if (container) {
                    container.innerHTML = html;
                    console.log('HTML inserted into container');
                } else {
                    console.error('Container element not found.');
                }
            } else {
                console.log('No ratings data found.');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);

            // Update error message to be more descriptive
            const container = document.getElementById('ratings-container');
            if (container) {
                container.innerHTML = '<p class="text-xl text-red-500">Error fetching ratings data</p>';
            } else {
                console.error('Container element not found.');
            }
        });
}