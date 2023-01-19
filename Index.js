const readlineSync = require('readline-sync')

const main = () => {
    let user1 = 0;
    let comp = 0;
    let computer;
    let winnerFlag = 0;
    for (let i = 0; i < 3; i += 1){
        console.log(`Раунд ${i+1}\n`)
        computer = Math.random();
        if (computer <= 0.33){
            computer = 'камень';
        }else if (computer <= 0.64){
            computer = 'ножницы';
        }else {
            computer = 'бумага';
        }
        const user = readlineSync.question('Введите один из вариантов\n1. камень \n2. ножницы\n3. бумага\n');
        const number = parseInt(user);
        if (number !== 1 && number !== 2 && number !== 3){
            console.log('Не верный ввод!\n')
            continue;
        }
        if(computer === 'камень'){
            if (number === 1) {
                winnerFlag = 0;
            } else if (number === 3){
                user1++;
                winnerFlag = 1;
            } else {
                comp++;
                winnerFlag = 2;
            }
        } else if(computer === 'ножницы'){
            if (number === 2) {
                winnerFlag = 0;
            } else if (number === 1){
                user1++;
                winnerFlag = 1;
            } else {
                comp++;
                winnerFlag = 2;
            }
        } else if(computer === 'бумага'){
            if (number === 3) {
                winnerFlag = 0;
            } else if (number === 2){
                user1++;
                winnerFlag = 1;
            } else {
                comp++;
                winnerFlag = 2;
            }
        }
        let userVar;
        if (number == 1) userVar = "камень";
        if (number == 2) userVar = "ножницы";
        if (number == 3) userVar = "бумага";
        console.log(`\nВы показали ${userVar}, компьютер показывает ${computer}. Победил ${winnerFlag == 0 ? 'ничья' : (winnerFlag == 2 ?'компьютер' : 'человек') }.\n`)
    }
    let winner = "компьютер";
    if (user1 > comp){
        winner = "человек";
    }
    if (user1 == comp){
        winner = "ничья";
    }
    console.log(`В итоге побеждает ${winner}.`)
}


main();