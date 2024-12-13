document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('get-caves-button').addEventListener('click', async function () {


        const url = `https://85.192.48.69:8081/killer/caves`;

        try {
            const response = await axios.get(url);
            const formattedResponse = JSON.stringify(response.data, null, 2);

            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-success" role="alert">
                    <pre>${formattedResponse}</pre>
                </div>
            `;
        } catch (error) {
            let errorMessage = "Ошибка при получении пещерок.";
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
