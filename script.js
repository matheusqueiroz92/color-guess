window.onload = function colorGuess () {

    const cor1 = document.getElementById('cor1');
    const cor2 = document.getElementById('cor2');
    const cor3 = document.getElementById('cor3');
    const cor4 = document.getElementById('cor4');
    const cor5 = document.getElementById('cor5');
    const cor6 = document.getElementById('cor6');
    
    // function generateRed() {
    //     const letters = '0123456789';
    //     let red = 0;
    //     for (let index1 = 0; index1 < 3; index1 += 1) {
    //       red += letters[Math.floor(Math.random() * 10)];
    //     }
    //     return red;
    // }
    // console.log(generateRed());

    function gerar_cor1(opacidade1 = 1) {

        let r1 = parseInt(Math.random() * 255);
        let g1 = parseInt(Math.random() * 255);
        let b1 = parseInt(Math.random() * 255);
     
        return `rgba(${r1}, ${g1}, ${b1}, ${opacidade1})`;
    }
    console.log(gerar_cor1());
    cor1.style.backgroundColor = gerar_cor1();

    function gerar_cor2(opacidade2 = 1) {

        let r2 = parseInt(Math.random() * 255);
        let g2 = parseInt(Math.random() * 255);
        let b2 = parseInt(Math.random() * 255);
     
        return `rgba(${r2}, ${g2}, ${b2}, ${opacidade2})`;
    }
    console.log(gerar_cor2());
    cor2.style.backgroundColor = gerar_cor2();

    function gerar_cor3(opacidade3 = 1) {

        let r3 = parseInt(Math.random() * 255);
        let g3 = parseInt(Math.random() * 255);
        let b3 = parseInt(Math.random() * 255);
     
        return `rgba(${r3}, ${g3}, ${b3}, ${opacidade3})`;
    }
    console.log(gerar_cor3());
    cor3.style.backgroundColor = gerar_cor3();

    function gerar_cor4(opacidade4 = 1) {

        let r4 = parseInt(Math.random() * 255);
        let g4 = parseInt(Math.random() * 255);
        let b4 = parseInt(Math.random() * 255);
     
        return `rgba(${r4}, ${g4}, ${b4}, ${opacidade4})`;
    }
    console.log(gerar_cor4());
    cor4.style.backgroundColor = gerar_cor4();

    function gerar_cor5(opacidade5 = 1) {

        let r5 = parseInt(Math.random() * 255);
        let g5 = parseInt(Math.random() * 255);
        let b5 = parseInt(Math.random() * 255);
     
        return `rgba(${r5}, ${g5}, ${b5}, ${opacidade5})`;
    }
    console.log(gerar_cor5());
    cor5.style.backgroundColor = gerar_cor5();

    function gerar_cor6(opacidade6 = 1) {

        let r6 = parseInt(Math.random() * 255);
        let g6 = parseInt(Math.random() * 255);
        let b6 = parseInt(Math.random() * 255);
     
        return `rgba(${r6}, ${g6}, ${b6}, ${opacidade6})`;
    }
    console.log(gerar_cor6());
    cor6.style.backgroundColor = gerar_cor6();
}

let rgbCode = document.getElementById('rgb-color');
rgbCode.innerText = gerarCor1();