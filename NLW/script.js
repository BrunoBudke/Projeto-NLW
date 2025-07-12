const apiKeyInput = document.getElementById('apiKey');
const gameSelect = document.getElementById('gameSelect');
const QuestionInput = document.getElementById('QuestionInput');
const AskButton = document.getElementById('AskButton');
const Form = document.getElementById('Form');
const Airesponse = document.getElementById('Airesponse');
const ResponseContent = document.getElementById('ResponseContent');


const enviarFormulario = (event) => {
    event.preventDefault()
    const apiKey = apiKeyInput.value
    const game = gameSelect.value
    const question = QuestionInput.value

    console.log({apiKey, gameSelect, question})

}


Form.addEventListener('submit', enviarFormulario)