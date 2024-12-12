document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('create-killer-button').addEventListener('click', async function () {

        const killerName = document.getElementById('killer-create-name').value.trim();
        const passportId = document.getElementById('killer-passport-id').value.trim();
        const locationX = document.getElementById('killer-location-x').value.trim();
        const locationY = document.getElementById('killer-location-y').value.trim();
        const locationZ = document.getElementById('killer-location-z').value.trim();
        const locationName = document.getElementById('killer-location-name').value.trim();

        // if (!killerName || !passportId || !locationX || !locationY || !locationZ || !locationName) {
        //     document.getElementById('response-output').innerHTML = `
        //         <div class="alert alert-warning" role="alert">
        //             Пожалуйста, заполните все поля.
        //         </div>
        //     `;
        //     return;
        // }

        const requestBody = {
            name: killerName,
            passportId: passportId,
            location: {
                x: parseInt(locationX),
                y: parseFloat(locationY),
                z: parseInt(locationZ),
                name: locationName
            }
        };

        const url = 'https://85.192.48.69:8081/killer';

        try {
            await axios.post(url, requestBody);

            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-success" role="alert">
                    Убийца успешно создан
                </div>
            `;
        } catch (error) {
            let errorMessage = "Ошибка при создании убийцы.";
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
