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

function LoveringDistance (distance , averagespeed){
    const result = distance / averagespeed;

    if (result > 4) {
        const correction = Math.trunc(result / 4);
        return result + correction;

    }
    return result;

}

console.log(LoveringDistance( 375, 75 ) ); 

    

