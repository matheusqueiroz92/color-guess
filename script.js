window.onload = function colorGuess () {

    const cor1 = document.getElementById('cor1');
    const cor2 = document.getElementById('cor2');
    const cor3 = document.getElementById('cor3');
    const cor4 = document.getElementById('cor4');
    const cor5 = document.getElementById('cor5');
    const cor6 = document.getElementById('cor6');
    const btnDifficulty = document.getElementById('btn-difficulty');
    const btnReset = document.getElementById('reset-game');

    let divFrase = document.getElementById('div-frase');
    let frase = document.createElement('h2');
    frase.id = 'answer';
    frase.innerText = 'Escolha uma cor';
    divFrase.appendChild(frase);

    let arrayColors = [];
    let placar = 0;
    let contadorClick = 0;

    let containerScore = document.getElementById('container-score');
    let score = document.createElement('p');
    score.id = 'score';
    score.innerText = 'Placar: '+ placar;
    containerScore.appendChild(score);

    function gerar_cor1(opacidade1 = 1) {
        let r1 = parseInt(Math.random() * 255);
        let g1 = parseInt(Math.random() * 255);
        let b1 = parseInt(Math.random() * 255);
        let rgb1 = 'rgb'+'(' + r1 + ', ' + g1 + ', ' + b1 + ')';
        arrayColors.push(rgb1);
        cor1.style.backgroundColor = rgb1;
        return rgb1;
    }
    console.log(gerar_cor1());

    function gerar_cor2(opacidade2 = 1) {
        let r2 = parseInt(Math.random() * 255);
        let g2 = parseInt(Math.random() * 255);
        let b2 = parseInt(Math.random() * 255);
        let rgb2 = 'rgb'+'(' + r2 + ', ' + g2 + ', ' + b2 + ')';
        arrayColors.push(rgb2);
        cor2.style.backgroundColor = rgb2;
        return rgb2;
    }
    console.log(gerar_cor2());

    function gerar_cor3(opacidade3 = 1) {
        let r3 = parseInt(Math.random() * 255);
        let g3 = parseInt(Math.random() * 255);
        let b3 = parseInt(Math.random() * 255);
        let rgb3 = 'rgb'+'(' + r3 + ', ' + g3 + ', ' + b3 + ')';
        arrayColors.push(rgb3);
        cor3.style.backgroundColor = rgb3;
        return rgb3;
    }
    console.log(gerar_cor3());

    function gerar_cor4(opacidade4 = 1) {
        let r4 = parseInt(Math.random() * 255);
        let g4 = parseInt(Math.random() * 255);
        let b4 = parseInt(Math.random() * 255);
        let rgb4 = 'rgb'+'(' + r4 + ', ' + g4 + ', ' + b4 + ')';
        arrayColors.push(rgb4);
        cor4.style.backgroundColor = rgb4;
        return rgb4;
    }
    console.log(gerar_cor4());

    function gerar_cor5(opacidade5 = 1) {
        let r5 = parseInt(Math.random() * 255);
        let g5 = parseInt(Math.random() * 255);
        let b5 = parseInt(Math.random() * 255);
        let rgb5 = 'rgb'+'(' + r5 + ', ' + g5 + ', ' + b5 + ')';
        cor5.style.backgroundColor = rgb5;
        arrayColors.push(rgb5);
        return rgb5;
    }
    console.log(gerar_cor5());

    function gerar_cor6(opacidade6 = 1) {
        let r6 = parseInt(Math.random() * 255);
        let g6 = parseInt(Math.random() * 255);
        let b6 = parseInt(Math.random() * 255);
        let rgb6 = 'rgb'+'(' + r6 + ', ' + g6 + ', ' + b6 + ')';
        arrayColors.push(rgb6);
        cor6.style.backgroundColor = rgb6;
        return rgb6;
    }
    console.log(gerar_cor6());

    let containerRgb = document.getElementById('container-rgb');
    let rgbCode = document.createElement('p');
    rgbCode.id = 'rgb-color';
    colorSecret = arrayColors[Math.floor(Math.random() * arrayColors.length)];
    rgbCode.innerText = colorSecret;
    containerRgb.appendChild(rgbCode);

    console.log(colorSecret + 'secreta');

    cor1.addEventListener('click', function(e){
        if (contadorClick == 0) {
            cor1.style.border = '2px solid blue';
            cor2.style.border = '';
            cor3.style.border = '';
            cor4.style.border = '';
            cor5.style.border = '';
            cor6.style.border = '';
            contadorClick += 1;
            console.log(contadorClick);
            if (arrayColors[0] == colorSecret) {
                frase.style.color = 'blue';
                frase.innerText = 'Acertou!';
                placar += 3;
                score.innerText = 'Placar: ' + placar;
            }
            else {
                frase.style.color = 'red';
                frase.innerText = 'Errou! Tente novamente!';
                cor1.style.border = '2px solid red';
            }
        }
    });

    cor2.addEventListener('click', function(e){
        if (contadorClick == 0) {
            cor1.style.border = '';
            cor2.style.border = '2px solid blue';
            cor3.style.border = '';
            cor4.style.border = '';
            cor5.style.border = '';
            cor6.style.border = '';
            contadorClick += 1;
            if (arrayColors[1] == colorSecret) {
                frase.style.color = 'blue';
                frase.innerText = 'Acertou!';
                placar += 3;
                score.innerText = 'Placar: ' + placar;
            }
            else {
                frase.style.color = 'red';
                frase.innerText = 'Errou! Tente novamente!';
                cor2.style.border = '2px solid red';
            }
        }
    });

    cor3.addEventListener('click', function(e){
        if (contadorClick == 0) {
            cor1.style.border = '';
            cor2.style.border = '';
            cor3.style.border = '2px solid blue';
            cor4.style.border = '';
            cor5.style.border = '';
            cor6.style.border = '';
            contadorClick += 1;
            if (arrayColors[2] == colorSecret) {
                frase.style.color = 'blue';
                frase.innerText = 'Acertou!';
                placar += 3;
                score.innerText = 'Placar: ' + placar;
            }
            else {
                frase.style.color = 'red';
                frase.innerText = 'Errou! Tente novamente!';
                cor3.style.border = '2px solid red';
            }
        }
    });

    cor4.addEventListener('click', function(e){
        if (contadorClick == 0) {
            cor1.style.border = '';
            cor2.style.border = '';
            cor3.style.border = '';
            cor4.style.border = '2px solid blue';
            cor5.style.border = '';
            cor6.style.border = '';
            contadorClick += 1;
            if (arrayColors[3] == colorSecret) {
                frase.style.color = 'blue';
                frase.innerText = 'Acertou!';
                placar += 3;
                score.innerText = 'Placar: ' + placar;
            }
            else {
                frase.style.color = 'red';
                frase.innerText = 'Errou! Tente novamente!';
                cor4.style.border = '2px solid red';
            }
        }
    });

    cor5.addEventListener('click', function(e){
        if (contadorClick == 0) {
            cor1.style.border = '';
            cor2.style.border = '';
            cor3.style.border = '';
            cor4.style.border = '';
            cor5.style.border = '2px solid blue';
            cor6.style.border = '';
            contadorClick += 1;
            if (arrayColors[4] == colorSecret) {
                frase.style.color = 'blue';
                frase.innerText = 'Acertou!';
                placar += 3;
                score.innerText = 'Placar: ' + placar;
            }
            else {
                frase.style.color = 'red';
                frase.innerText = 'Errou! Tente novamente!';
                cor5.style.border = '2px solid red';
            }
        }
    });

    cor6.addEventListener('click', function(e){
        if (contadorClick == 0) {
            cor1.style.border = '';
            cor2.style.border = '';
            cor3.style.border = '';
            cor4.style.border = '';
            cor5.style.border = '';
            cor6.style.border = '2px solid blue';
            contadorClick += 1;
            if (arrayColors[5] == colorSecret) {
                frase.style.color = 'blue';
                frase.innerText = 'Acertou!';
                placar += 3;
                score.innerText = 'Placar: ' + placar;
            }
            else {
                frase.style.color = 'red';
                frase.innerText = 'Errou! Tente novamente!';
                cor6.style.border = '2px solid red';
            }
        }
    });

    btnDifficulty.addEventListener('click', function() {

    });

    btnReset.addEventListener('click', function() {
        //document.location.reload(true);
        contadorClick = 0;
        cor1.style.border = '';
        cor2.style.border = '';
        cor3.style.border = '';
        cor4.style.border = '';
        cor5.style.border = '';
        cor6.style.border = '';
        frase.style.color = 'black';
        frase.innerText = 'Escolha uma cor';
        // arrayColors = [];
        for (let i = arrayColors.length; i > 0; i--) {
            arrayColors.pop();
        }
        colorSecret = '';

        console.log(gerar_cor1());
        console.log(gerar_cor2());
        console.log(gerar_cor3());
        console.log(gerar_cor4());
        console.log(gerar_cor5());
        console.log(gerar_cor6());

        colorSecret = arrayColors[Math.floor(Math.random() * arrayColors.length)];
        rgbCode.innerText = colorSecret;

        cor1.addEventListener('click', function(e){
            if (contadorClick == 0) {
                cor1.style.border = '2px solid blue';
                cor2.style.border = '';
                cor3.style.border = '';
                cor4.style.border = '';
                cor5.style.border = '';
                cor6.style.border = '';
                contadorClick += 1;
                console.log(contadorClick);
                if (arrayColors[0] == colorSecret) {
                    frase.style.color = 'blue';
                    frase.innerText = 'Acertou!';
                    placar += 3;
                    score.innerText = 'Placar: ' + placar;
                }
                else {
                    frase.style.color = 'red';
                    frase.innerText = 'Errou! Tente novamente!';
                    cor1.style.border = '2px solid red';
                }
            }
        });
    
        cor2.addEventListener('click', function(e){
            if (contadorClick == 0) {
                cor1.style.border = '';
                cor2.style.border = '2px solid blue';
                cor3.style.border = '';
                cor4.style.border = '';
                cor5.style.border = '';
                cor6.style.border = '';
                contadorClick += 1;
                if (arrayColors[1] == colorSecret) {
                    frase.style.color = 'blue';
                    frase.innerText = 'Acertou!';
                    placar += 3;
                    score.innerText = 'Placar: ' + placar;
                }
                else {
                    frase.style.color = 'red';
                    frase.innerText = 'Errou! Tente novamente!';
                    cor2.style.border = '2px solid red';
                }
            }
        });
    
        cor3.addEventListener('click', function(e){
            if (contadorClick == 0) {
                cor1.style.border = '';
                cor2.style.border = '';
                cor3.style.border = '2px solid blue';
                cor4.style.border = '';
                cor5.style.border = '';
                cor6.style.border = '';
                contadorClick += 1;
                if (arrayColors[2] == colorSecret) {
                    frase.style.color = 'blue';
                    frase.innerText = 'Acertou!';
                    placar += 3;
                    score.innerText = 'Placar: ' + placar;
                }
                else {
                    frase.style.color = 'red';
                    frase.innerText = 'Errou! Tente novamente!';
                    cor3.style.border = '2px solid red';
                }
            }
        });
    
        cor4.addEventListener('click', function(e){
            if (contadorClick == 0) {
                cor1.style.border = '';
                cor2.style.border = '';
                cor3.style.border = '';
                cor4.style.border = '2px solid blue';
                cor5.style.border = '';
                cor6.style.border = '';
                contadorClick += 1;
                if (arrayColors[3] == colorSecret) {
                    frase.style.color = 'blue';
                    frase.innerText = 'Acertou!';
                    placar += 3;
                    score.innerText = 'Placar: ' + placar;
                }
                else {
                    frase.style.color = 'red';
                    frase.innerText = 'Errou! Tente novamente!';
                    cor4.style.border = '2px solid red';
                }
            }
        });
    
        cor5.addEventListener('click', function(e){
            if (contadorClick == 0) {
                cor1.style.border = '';
                cor2.style.border = '';
                cor3.style.border = '';
                cor4.style.border = '';
                cor5.style.border = '2px solid blue';
                cor6.style.border = '';
                contadorClick += 1;
                if (arrayColors[4] == colorSecret) {
                    frase.style.color = 'blue';
                    frase.innerText = 'Acertou!';
                    placar += 3;
                    score.innerText = 'Placar: ' + placar;
                }
                else {
                    frase.style.color = 'red';
                    frase.innerText = 'Errou! Tente novamente!';
                    cor5.style.border = '2px solid red';
                }
            }
        });
    
        cor6.addEventListener('click', function(e){
            if (contadorClick == 0) {
                cor1.style.border = '';
                cor2.style.border = '';
                cor3.style.border = '';
                cor4.style.border = '';
                cor5.style.border = '';
                cor6.style.border = '2px solid blue';
                contadorClick += 1;
                if (arrayColors[5] == colorSecret) {
                    frase.style.color = 'blue';
                    frase.innerText = 'Acertou!';
                    placar += 3;
                    score.innerText = 'Placar: ' + placar;
                }
                else {
                    frase.style.color = 'red';
                    frase.innerText = 'Errou! Tente novamente!';
                    cor6.style.border = '2px solid red';
                }
            }
        });

        console.log(arrayColors);
        console.log(colorSecret + 'secreta');
        console.log(rgbCode);
    });

}

