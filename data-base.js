let candidatos = [
    
    {numero: 13, nome: 'Lulu Costa', imagem: '<img src="fotos/lulu.png" alt="">' },
    {numero: 22, nome: 'Maxima Felp', imagem: '<img src="fotos/maxima.png" alt="">'},
    {numero:'', nome:'DIGITE 13 ou 22', imagem:`<img src="http://robohash.org/${rdm}">`},//numero não encontrado no banco de dados

];

let rdm;
function getRandomInt() {

  rdm = Math.floor(Math.random() * 100);

};

getRandomInt();
