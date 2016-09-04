function letTest() {

    let x = 1;
    if (true) {
        let x = 2;  // другая переменная
        alert(x);  // 2
    }

    //let x = 3 ==> Ошибка. Нельзя использовать let с одним и тем же именем в пределах одного блока
    alert(x);  // 1
}

letTest();