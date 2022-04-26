window.onload = function colorGuess () {

    const cor1 = document.getElementById('cor1');
    const cor2 = document.getElementById('cor2');
    const cor3 = document.getElementById('cor3');
    const cor4 = document.getElementById('cor4');
    const cor5 = document.getElementById('cor5');
    const cor6 = document.getElementById('cor6');

    let arrayColors = [];

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

    console.log(arrayColors);

    let containerRgb = document.getElementById('container-rgb');
    let rgbCode = document.createElement('p');
    rgbCode.id = 'rgb-color';
    let colorSecret = arrayColors[Math.floor(Math.random() * arrayColors.length)];
    rgbCode.innerText = colorSecret;
    containerRgb.appendChild(rgbCode);

    console.log(colorSecret);

    cor1.addEventListener('click', function(){
        if (arrayColors[0] == colorSecret) {
            alert('Você acertou!')
        }
        else {
            alert('Você errou!');
        }
    });

    cor2.addEventListener('click', function(){
        if (arrayColors[1] == colorSecret) {
            alert('Você acertou!')
        }
        else {
            alert('Você errou!');
        }
    });

    cor3.addEventListener('click', function(){
        if (arrayColors[2] == colorSecret) {
            alert('Você acertou!')
        }
        else {
            alert('Você errou!');
        }
    });

    cor4.addEventListener('click', function(){
        if (arrayColors[3] == colorSecret) {
            alert('Você acertou!')
        }
        else {
            alert('Você errou!');
        }
    });

    cor5.addEventListener('click', function(){
        if (arrayColors[4] == colorSecret) {
            alert('Você acertou!')
        }
        else {
            alert('Você errou!');
        }
    });

    cor6.addEventListener('click', function(){
        if (arrayColors[5] == colorSecret) {
            alert('Você acertou!')
        }
        else {
            alert('Você errou!');
        }
    }); 
}

