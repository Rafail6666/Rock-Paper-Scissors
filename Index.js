const example = () => {
    let user1 = 0;
    let comp = 0;
    let computer = Math.random();
    if (computer <= 0.33){
        computer = 'камень';
    }else if (computer <= 0.64){
        computer = 'ножницы';
    }else {
        computer = 'бумага';
    }
    console.log(computer);
    while (true){
        const user = prompt('Введите один из вариантов\n1. камень \n2. ножницы\n3. бумага');
        const number = parseInt(user);
        if (user === null){
            console.log('Пользователь '+ user1 +'\nКомпьютер '+ comp)
            break;
        }
        if(computer === 'камень'){
            if (user === 3){
                user1++;
            continue
            }
        }else {
            comp++;
        }
        if(computer === 'ножницы'){
            if (user === 1){
                user1++;
            continue
            }
        }else {
            comp++;
        }
        if(computer === 'бумага'){
            if (user === 2){
                user1++;
            }
        }else {
            comp++;
        }
    }
}