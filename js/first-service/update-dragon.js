document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('update-dragon-button').addEventListener('click', async function () {

        const id = document.getElementById('update-id').value.trim();
        const dragonName = document.getElementById('dragon-create-name').value.trim();
        const x = document.getElementById('update-x').value.trim();
        const y = document.getElementById('update-y').value.trim();
        const age = document.getElementById('dragon-update-age').value.trim();
        const color = document.getElementById('dragon-update-color').value;
        const type = document.getElementById('dragon-update-type').value;
        const character = document.getElementById('dragon-update-character').value;
        const killerId = document.getElementById('dragon-update-killer-id').value.trim();

        if (!id || !dragonName || !x || !y || !age || !color || !type || !character || !killerId) {
            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-warning" role="alert">
                    Пожалуйста, заполните все поля.
                </div>
            `;
            return;
        }

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

        const url = `http://51.250.20.1:8085/soa_lab2_first_service/dragons/${id}`;

        try {
            await axios.put(url, requestBody);

            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-success" role="alert">
                    Дракон успешно обновлен
                </div>
            `;
        } catch (error) {
            let errorMessage = "Ошибка при обновлении дракона.";
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
