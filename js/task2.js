/*2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
Функция сложения 2-х объектов-дробей;
Функция вычитания 2-х объектов-дробей;
Функция умножения 2-х объектов-дробей;
Функция деления 2-х объектов-дробей;
Функция сокращения объекта-дроби.*/

/*сложение дробей*/

function  AddingFractions(a,b,c,d){
    if((typeof a === "number") &&
    (typeof b === "number"));
    if((typeof c === "number") &&
    (typeof d === "number"));
    return ((a * d) + (c * b)) / (b *d );
};
console.log (AddingFractions ( 3 , 2 , 3 , 4 ) );

/*вычитание дробей*/

function  SubtractionFractions(a,b,c,d){
    if((typeof a === "number") &&
    (typeof b === "number"));
    if((typeof c === "number") &&
    (typeof d === "number"));
    return ((a * d) - (c * b)) / (b *d );
};
console.log (SubtractionFractions ( 3 , 2 , 3 , 4 ) );

/*умножение дробей*/

function  MultFractions(a,b,c,d){
    if((typeof a === "number") &&
    (typeof b === "number"));
    if((typeof c === "number") &&
    (typeof d === "number"));
    return ( (a * c) / (b * d) );
};
console.log (MultFractions ( 3 , 2 , 3 , 4 ) );

/*деление дробей*/

function  fractions(a,b,c,d){
    if((typeof a === "number") &&
    (typeof b === "number"));
    if((typeof c === "number") &&
    (typeof d === "number"));
    return ((a * d) / (c * b));
};
console.log (fractions ( 3 , 2 , 3 , 4 ) );