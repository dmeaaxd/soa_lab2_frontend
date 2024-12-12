document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("get-dragon-button").addEventListener("click", async function () {
        const baseUrl = "https://85.192.48.69:8443/soa_lab2_first_service-0.1-SNAPSHOT/dragons";

        const sort = document.getElementById("get-sort").value;
        const filter = document.getElementById("get-filter").value;
        const page = document.getElementById("get-page").value;
        const size = document.getElementById("get-size").value;

        const params = new URLSearchParams();
        if (sort) params.append("sort", sort);
        if (filter) params.append("filter", filter);
        if (page) params.append("page", page);
        if (size) params.append("size", size);

        const url = `${baseUrl}?${params.toString()}`;

        try {
            const response = await axios.get(url);
            const formattedResponse = JSON.stringify(response.data, null, 2);

            document.getElementById('response-output').innerHTML = `
                <div class="alert alert-success" role="alert">
                    <pre>${formattedResponse}</pre>
                </div>
            `;
        } catch (error) {
            let errorMessage = "Ошибка при получении драконов";
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
