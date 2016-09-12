function constTest() {

    const x = 1;
    alert(x);

    //x = 2; ==> ошибка! 
    //alert(x);

    const y = { a: 1, b: 2 };
    y.a = 3;
    y.c = 4;

    alert(y.c);

    const z = [1,2];
    z[0] = 5;

    alert(z[0]);

}
constTest();
