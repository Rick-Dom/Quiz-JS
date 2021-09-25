let myQuestions = [

    {
        question: "<b>1. Em guia do Mochileiro das Galáxias, qual a resposta para a vida e o universo e tudo mais?</b>",
        answers: { a: 'Não existe', b: 'Amor', c: 'Rock', d: '42' },
        correctAnswer: 'd'
    },

    {
        question: "<b>2. Quantos episódios tem a saga Star-Wars até o momento (2021)?</b>",
        answers: { a: '15', b: '6', c: '8', d: '9' },
        correctAnswer: 'd'
    },

    {
        question: "<b>3. Quais as cores de sabre de luz existentes até o momento em Star-Wars?</b>",
        answers: { a: 'Laranja, azul, preto, vermelho e roxo', b: 'Azul, vermelho, verde e rosa', c: 'Vermelho, Preto e azul', d: 'Vermelho, Azul, Roxo e Verde' },
        correctAnswer: 'd'
    },

    {
        question: "<b>4. Qual o planeta natal de Spock, o ser lógico da série e saga de filmes Star Trek?</b>",
        answers: { a: 'Vulcano', b: 'Spocklândia', c: 'Krypton', d: 'Asgard' },
        correctAnswer: 'a'
    },

    {
        question: "<b>5. Qual a cor da Meta-anfetamina de Heisenberg em Breaking Bad?</b>",
        answers: { a: 'Branca', b: 'Transparente', c: 'Azul', d: 'Amarelo' },
        correctAnswer: 'c'
    },

    {
        question: "<b>6. Qual o nome do Dragão de O Hobbit?</b>",
        answers: { a: 'Smaug', b: 'Godzilla', c: 'Smeagol', d: 'Phíton' },
        correctAnswer: 'a'
    },

    {
        question: "<b>7. Qual das alternativas contêm apenas personagens da Marvel?</b>",
        answers: { a: 'Homem de Ferro, Pantera-Negra, Flash e Hulk', b: 'Hulk, Thor, Lobo e Batman', c: 'Motoqueiro Fantasma, Homem-aranha, Superman e Flash', d: 'Feiticeira Escarlate, Hulk, Wolverine e Star-Lord' },
        correctAnswer: 'd'
    },

    {
        question: "<b>8. Qual a palavra que Sheldon Cooper utiliza para definir alguma brincadeira ou mentira feita pro si próprio?</b>",
        answers: { a: 'Jibber-Jabber', b: 'Zazzle', c: 'Bazinga!', d: 'Abracadabra' },
        correctAnswer: 'c'
    },

    {
        question: "<b>9. Qual é a regeneração do doutor na série britânica Doctor Who, até o momento (2021)</b>",
        answers: { a: '10', b: '15', c: '13', d: '8' },
        correctAnswer: 'c'
    },

    {
        question: "<b>10. Qual desses não é orfão?</b>",
        answers: { a: 'Alerquina', b: 'Batman', c: 'Superman', d: 'Arqueiro Verde' },
        correctAnswer: 'a'
    }

];

// chamando as id da html
let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');


//gerador de questões, recebe os parâmetros das questões, onde vai ficar
//armazenado o quiz, que é a div quiz, onde vai ficar armazenado os resultados
//e qual botão vamos utilizar.
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    let inicio = prompt("Está pronto para o quiz? Sim ou Não:")

    //condicional para inciar o teste pq eu achei chique 
    if (inicio === "Sim") {
        //essa é a função responsavel de fazer aparecer na tela
        function showQuestions(questions, quizContainer) {
            //aqui dentro temos duas variaveis locais, só existem nessa função
            //tudo que tive .answer esta se referindo as respostas da nossa lista de quiz
            // precisaremos de um lugar para armazenar a saída e as opções de resposta
            let output = [];
            let respost;

            // a variavel i fica responsavel por falar em que posição da lista de perguntas estamos
            //e quando chegaremos no final para pararmos o laço
            for (let i = 0; i < questions.length; i++) {

                // mas, primeiro resetamos a lista de questões
                respost = [];

                // e aqui faremos para cada resposta na questão.
                //esse for adiciona na variavel resposta cada letra, as alternativas
                for (letter in questions[i].answers) {

                    // Aqui será escrito para html para usar o Radio.
                    respost.push(
                        '<label>' + '<br>' +
                        '<input type="radio" name="question' + i + '" value="' + letter + '">' +
                        questions[i].answers[letter] +
                        '</label>'
                    );
                }

                // add this question and its answers to the output
                output.push(
                    '<div class="question">' + questions[i].question + '</div>' +
                    '<div class="answers">' + respost.join('') + '</div>'
                );
            }

            // finally combine our output list into one string of html and put it on the page
            quizContainer.innerHTML = output.join('');
        }

    } else if (inicio === "Não") {

        document.write("Bobão")

    } else {
        document.write("Informe sua resposta!")
    }



    function showResults(questions, quizContainer, ) {


        let answerContainers = quizContainer.querySelectorAll('.answers');


        let userAnswer = '';
        let numCorrect = 0;


        for (let i = 0; i < questions.length; i++) {

            // agora ele vai virar a letra que esta marcada.
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;



            if (userAnswer === questions[i].correctAnswer) {

                numCorrect++;


                answerContainers[i].style.color = 'green';
            } else {

                answerContainers[i].style.color = 'red';
            }
        }

        alert('Sua pontuação foi: ' + numCorrect + '0' + ' de 100')
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);

    }
}