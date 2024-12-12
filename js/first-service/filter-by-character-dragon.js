document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('get-by-character-dragon-button').addEventListener('click', async function () {

        const character = document.getElementById('dragon-get-by-character-character').value;

        const url = `https://85.192.48.69:8443/soa_lab2_first_service-0.1-SNAPSHOT/dragons/filter-by-character?character=${character}`;

        try {
            const response = await axios.get(url);
            const formattedResponse = JSON.stringify(response.data, null, 2);

            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-success" role="alert">
                    <pre>${formattedResponse}</pre>
                </div>
            `;
        } catch (error) {
            let errorMessage = "Ошибка при получении драконов.";
            if (error.response && error.response.data && error.response.data.message) {
                errorMessage = error.response.data.message;
            } else if (error.message) {
                errorMessage = error.message;
            }

            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ${errorMessage}
                </div>
            `;
        }
    });
});
