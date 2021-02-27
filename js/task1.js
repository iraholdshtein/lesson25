/*1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
Функция для вывода на экран информации об автомобиле;
Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю 
необходимо делать перерыв на 1 час.*/

const car = {  
    properties: {
        produced_by: "Toyota Motors Corporation",
        model: "Lexsus_IS" ,
        year: 2016,
        averagespeed: 75,
    carproperties: function() {
        return properties,
        console.log( properties );     
    }
  }
};

console.log (car.properties);

function LoveringDistance (t , averagespeed){
    const StartTime = 0;
    const EndTime = t; //не читает переменную//

    /*let i = 1;
    for (let i = StartTime, i = EndTime , EndTime++);
    if (i % 4 === 0);
    console.log( i);*/
    if ((typeof t === "number") && 
    (typeof EndTime === "number"));
    return (averagespeed * t);

}

console.log(LoveringDistance( 6 ) ); //не сделала //

    

