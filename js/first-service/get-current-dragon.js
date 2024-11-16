document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('get-by-id-dragon-button').addEventListener('click', async function () {

        const dragonId = document.getElementById('get-by-id-id').value.trim();

        if (!dragonId) {
            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-warning" role="alert">
                    Пожалуйста, заполните ID.
                </div>
            `;
            return;
        }


        const url = `http://51.250.20.1:8085/soa_lab2_first_service/dragons/${dragonId}`;

        try {
            const response = await axios.get(url);
            const formattedResponse = JSON.stringify(response.data, null, 2);

            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-success" role="alert">
                    <pre>${formattedResponse}</pre>
                </div>
            `;
        } catch (error) {
            let errorMessage = "Ошибка при получении дракона.";
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
