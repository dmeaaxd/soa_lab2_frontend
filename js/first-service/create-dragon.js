document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('create-dragon-button').addEventListener('click', async function () {

        const dragonName = document.getElementById('dragon-create-name').value.trim();
        const x = document.getElementById('create-x').value.trim();
        const y = document.getElementById('create-y').value.trim();
        const age = document.getElementById('dragon-create-age').value.trim();
        const color = document.getElementById('dragon-create-color').value;
        const type = document.getElementById('dragon-create-type').value;
        const character = document.getElementById('dragon-create-character').value;
        const killerId = document.getElementById('dragon-create-killer-id').value.trim();

        // if (!dragonName || !x || !y || !age || !color || !type || !character || !killerId) {
        //     document.getElementById('response-output').innerHTML = `
        //         <div class="alert alert-warning" role="alert">
        //             Пожалуйста, заполните все поля.
        //         </div>
        //     `;
        //     return;
        // }

        const requestBody = {
            name: dragonName,
            coordinates: {
                x: parseInt(x),
                y: parseFloat(y)
            },
            age: parseInt(age),
            color: color,
            type: type,
            character: character,
            killer: parseInt(killerId)
        };

        const url = 'https://85.192.48.69:8443/soa_lab2_first_service-0.1-SNAPSHOT/dragons';

        try {
            await axios.post(url, requestBody);

            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-success" role="alert">
                    Дракон успешно создан
                </div>
            `;
        } catch (error) {
            let errorMessage = "Ошибка при создании дракона.";
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
