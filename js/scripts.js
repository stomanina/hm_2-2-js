
//задание №1
var num = 1;
    num += 12;
    num -= 14;
    num *= 5;
    num /= 7;
    num += 1;
    num -= 18;
    num *= 10;
    num /=15;
console.log(num);

//задание №2
var hours = prompt('Введите часы'),
    minutes = prompt('Введите минуты'),
    seconds = prompt('Введите секунды');
    console.log (hours + ':' + minutes  + ':' + seconds); 

//задание №3 
var stroka,
    b = prompt ('введите на анлийском языкe буквенный символ'),
    c = prompt ('введите на анлийском языкe буквенный символ'),
    d = prompt ('введите на анлийском языкe буквенный символ'),
    stroka = b + c + d;
        console.log("");
        console.log(stroka);
    if (b == 'a') {
        console.log('первая буква - а');
    } else{
        console.log('первая буква - не а');
    }

//задание №4
var str = ['В', 'неком', 'царстве,', 'в неком', 'государстве', 'жил-был', 'богатый купец', 'именитый', 'человек.'];
console.log(str[6]);

//задание №5
var q = [];
    q[0] = prompt('Введите число от 0 до 9'),
    q[1] = prompt('Введите число от 0 до 9'),
    q[2] = prompt('Введите число от 0 до 9');
    console.log(Number(q[0]) + Number(q[1]) + Number(q[2]));

//задание №6
var a = prompt('Введите число от 1 до 10 включительно');
    if (a == 10){
        console.log('');
        console.log('Верно');
    } else {
        console.log('');
        console.log('Неверно');
    }

//задание №7 
var a1 = prompt('Введите слово');
    if (a1 == 'test'){
        console.log('');
        console.log('Верно');
    } else {
        console.log('');
        console.log('Неверно');
    }

//задание №8
var a2 = prompt('Введите число'),
    b2 =  prompt('Введите число');
    if (a2 <= 1 && b2 >= 3) {
        console.log(Number(a2) + Number(b2));
    } else {
        console.log(Number(a2) - Number(b2));
    }

//задание №9 
var name = prompt('Введите имя'),
    login = prompt('Введите логин'),
    pass = prompt('Введите пароль');
    if (login == 'admin' && pass == 'nimda'){
        document.write ('Добро пожаловать, ' + name + '! Вы успешно вошли на сайт!');
    } else {
        document.write (name + ', вы неверно ввели логин или пароль!');
    }


//задание №10
var season,
    seasonName,
    month = 1;
    for (; month <= 12; month++) {
        console.log(month);
        if (month == 1 || month == 2 || month == 12) {
            season = 1;
           console.log ('first');
                 switch(season){
                case 1: 
                    console.log('zima');
                break;
                case 2:
                    console.log('vesna');
                break;
                case 3:
                    console.log('leto');
                break;
                default:
                console.log('ocen');
        }
        } else if (month == 3 || month == 4 || month == 5) {
            season = 2;
           console.log ('second');
                switch(season){
                    case 1: 
                        console.log('zima');
                    break;
                    case 2:
                        console.log('vesna');
                    break;
                    case 3:
                        console.log('leto');
                    break;
                    default:
                    console.log('ocen');
        }
        } else if (month == 6 || month == 7 || month == 8) {
            season = 3;
           console.log ('thrird');
                    switch(season){
                        case 1: 
                            console.log('zima');
                        break;
                        case 2:
                            console.log('vesna');
                        break;
                        case 3:
                            console.log('leto');
                        break;
                        default:
                        console.log('ocen');
    }
        } else {
            season = 4;
            console.log ('forth');
            switch(season){
                case 1: 
                    console.log('zima');
                break;
                case 2:
                    console.log('vesna');
                break;
                case 3:
                    console.log('leto');
                break;
                default:
                console.log('ocen');
            }
        }
    }
