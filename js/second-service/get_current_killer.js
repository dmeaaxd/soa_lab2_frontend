document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('get-by-id-killer-button').addEventListener('click', async function () {

        const killerId = document.getElementById('killer-get-by-id-killer-id').value.trim();

        if (!killerId) {
            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-warning" role="alert">
                    Пожалуйста, заполните ID.
                </div>
            `;
            return;
        }


        const url = `http://80.242.57.251:8081/killer/${killerId}`;

        try {
            const response = await axios.get(url);
            const formattedResponse = JSON.stringify(response.data, null, 2);

            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-success" role="alert">
                    <pre>${formattedResponse}</pre>
                </div>
            `;
        } catch (error) {
            let errorMessage = "Ошибка при обновлении убийцы.";
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
