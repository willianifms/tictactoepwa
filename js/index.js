const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const teste = document.querySelector('#teste');

formulario.addEventListener('submit', event => {
  event.preventDefault();
  const nome = document.querySelector('#nome').value;
  const idade = parseFloat(document.querySelector('#idade').value);
  const sexo = parseFloat(document.querySelector('#sexo').value);
  const altura = parseFloat(document.querySelector('#altura').value);
  const peso = parseFloat(document.querySelector('#peso').value);
  const imc = peso / (altura * altura);
 

  let classificacao = '';
  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
  } else if (imc < 24.9) {
    classificacao = 'Peso normal';
  } else if (imc < 29.9) {
    classificacao = 'Sobrepeso';
  } else if (imc < 34.9) {
    classificacao = 'Obesidade grau 1';
  } else if (imc < 39.9) {
    classificacao = 'Obesidade grau 2';
  } else {
    classificacao = 'Obesidade grau 3';
  }
  
  teste.textContent = `${nome} seu IMC é  ${imc.toFixed(2)} Classificado como ${classificacao}`;
});
