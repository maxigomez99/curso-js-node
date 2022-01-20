
for(let i=2; i<=12; i++){
    for(let j=0; j<=10; j++){
        console.log(i+ ' x '+ j + ' = '+ i*j);
    }
}


var contador = 2;

while(contador<=12){
    for (let i=0; i<=10; i++)
    console.log(contador+ ' x '+ i + ' = '+ contador*i);
    contador += 1
}

var contador = 2;
do { for (let i=0; i<=10; i++)
    console.log(contador+ ' x '+ i + ' = '+ contador*i);
    contador += 1
}
while (contador<=12)