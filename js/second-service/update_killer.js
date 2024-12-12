document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('update-killer-button').addEventListener('click', async function () {

        const killerId = document.getElementById('killer-update-id').value.trim();
        const killerName = document.getElementById('killer-update-name').value.trim();
        const passportId = document.getElementById('killer-update-passport-id').value.trim();
        const locationX = document.getElementById('killer-update-location-x').value.trim();
        const locationY = document.getElementById('killer-update-location-y').value.trim();
        const locationZ = document.getElementById('killer-update-location-z').value.trim();
        const locationName = document.getElementById('killer-update-location-name').value.trim();

        // if (!killerId || !killerName || !passportId || !locationX || !locationY || !locationZ || !locationName) {
        //     document.getElementById('response-output').innerHTML = `
        //         <div class="alert alert-warning" role="alert">
        //             Пожалуйста, заполните все поля.
        //         </div>
        //     `;
        //     return;
        // }

        const requestBody = {
            id: killerId,
            name: killerName,
            passportId: passportId,
            location: {
                x: parseInt(locationX),
                y: parseFloat(locationY),
                z: parseInt(locationZ),
                name: locationName
            }
        };

        const url = `https://85.192.48.69:8081/killer/${killerId}`;

        try {
            await axios.put(url, requestBody);

            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-success" role="alert">
                    Убийца успешно обновлен
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
