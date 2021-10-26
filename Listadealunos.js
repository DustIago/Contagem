const quantidadeDeAlunos = 11;

for (let index = 0; index <= quantidadeDeAlunos; index++) {
    if (index == 0) {
        console.log('O número é zero');
    } else if (index % 2 === 0) {
        console.log('O número é par' + index);
    } else {
        console.log('o número é ímpar' + index);

    }
}