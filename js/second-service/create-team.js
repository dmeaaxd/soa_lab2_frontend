document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('create-team-button').addEventListener('click', async function () {

        const teamId = document.getElementById('team-create-id').value.trim();
        const teamName = document.getElementById('team-create-name').value.trim();
        const teamSize = document.getElementById('team-create-size').value.trim();
        const startCaveId = document.getElementById('start-create-cave-id').value.trim();
        const killersInput = document.getElementById('killers').value.trim();

        // if (!teamId || !teamName || !teamSize || !startCaveId || !killersInput) {
        //     document.getElementById('response-output').innerHTML = `
        //         <div class="alert alert-warning" role="alert">
        //             Пожалуйста, заполните все поля.
        //         </div>
        //     `;
        //     return;
        // }

        const killers = killersInput.split(',').map(id => parseInt(id.trim())).filter(Number.isInteger);

        if (killers.length === 0) {
            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-warning" role="alert">
                    Введите хотя бы один корректный ID убийцы.
                </div>
            `;
            return;
        }

        const url = `http://80.242.57.251:8081/killer/teams/create/${teamId}/${teamName}/${teamSize}/${startCaveId}`;

        const requestBody = {
            killers: killers // Массив ID убийц
        };

        try {
            await axios.post(url, requestBody);

            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-success" role="alert">Команда успешно создана</div>
            `;
        } catch (error) {
            let errorMessage = "Ошибка при создании команды.";
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
