$(document).ready(function () {
    $(".submit-button").on("click", function () {
        // Remove o conteúdo atual do botão
        $(this).empty();

        // Adiciona o ícone SVG ao botão com a classe svg-icon
        $(this).append(`
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
        `);

        // Adiciona uma classe para estilizar o botão após o clique (opcional)
        $(this).addClass("success-button");
    });
});