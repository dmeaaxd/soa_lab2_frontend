document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('move-team-button').addEventListener('click', async function () {

        const teamId = document.getElementById('team-move-id').value.trim();
        const caveId = document.getElementById('move-cave-id').value.trim();

        // if (!teamId || !caveId) {
        //     document.getElementById('response-output').innerHTML = `
        //         <div class="alert alert-warning" role="alert">
        //             Пожалуйста, заполните все поля.
        //         </div>
        //     `;
        //     return;
        // }


        const url = `https://85.192.48.69:8081/killer/team/${teamId}/move-to-cave/${caveId}`;


        try {
            console.log(`Отправляется запрос на URL: ${url}`);

            await axios.put(url);

            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-success" role="alert">Команда успешно перемещена</div>
            `;
        } catch (error) {
            let errorMessage = "Ошибка при переносе команды.";
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
