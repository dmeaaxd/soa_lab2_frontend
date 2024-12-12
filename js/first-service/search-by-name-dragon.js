document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('get-by-name-dragon-button').addEventListener('click', async function () {

        const dragonName = document.getElementById('get-by-name-dragon').value.trim();

        // if (!dragonId) {
        //     document.getElementById('response-output').innerHTML = `
        //         <div class="alert alert-warning" role="alert">
        //             Пожалуйста, заполните ID.
        //         </div>
        //     `;
        //     return;
        // }


        const url = `https://85.192.48.69:8443/soa_lab2_first_service-0.1-SNAPSHOT/dragons/search-by-name?name=${dragonName}`;

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
