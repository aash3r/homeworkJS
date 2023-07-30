// Ниже приведён объект 'bobsCar'
// Напишите конструкцию if таким образом
// Если свойство 'mileage' ровно нулю то выводится строка 'Bob owns Subaru Impreza and it is brand new!'
// Если свойство 'mileage' меньше тысячи то выводится строка 'Bob owns Subaru Impreza and it is almost new!'
// В остальных случаях выводится строка 'Bob owns Subaru Impreza and it is old!'

const bobsCar = {
    make: 'Subaru',
    model: 'Impreza',
    info: {
        color: 'blue',
        mileage: 2000
    },
}
bobsCar.result = (bobsCar.info.mileage === 0) ? 'Bob owns Subaru Impreza and it is brand new!' : (bobsCar.info.mileage < 1000 ? 'Bob owns Subaru Impreza and it is almost new!' : ('Bob owns Subaru Impreza and it is old!'))


console.log(bobsCar.result)

console.log(bobsCar.info)







// Напишите код, который проверит возраст Боба
// Если Боб младше 12лет выведет строку 'This is Bob Smith and he is a child!'
// Если Боб младше 18лет выведет строку 'This is Bob Smith and he is a teenager!'
// Если Бобу 18лет или больше выведет строку 'This is Bob Smith and he is a adult!'

const bob = {
    name: 'Bob',
    surname: 'Smith',
    age: 18
}

bob.old = (bob.age < 12) ? 'This is Bob Smith and he is a child!' : (bob.age < 18 ? 'This is Bob Smith and he is a teenager!' : 'This is Bob Smith and he is a adult!')

// console.log(bob.old);

// Ниже приведены две переменные 'x, y'
// Напишите код, который проверит каждую из переменных
// Если какая-то из них отрицательная, сделает из неё положительную и сложит их
// x = -2 y = -3 результат 5
// попробуйте изменить значения 'x, y'
let x = -7;
let y = 7;

const result = Math.abs(x) + Math.abs(y)





// Ниже приведён объект 'registry' - запись о владении недвижимостью
// скопируйте объект и измените данные владельца
// данные нового владельца приведены в объекте 'newOwner'
const registry = {
    owner: {
        name: 'Mary Gold',
        age: 45
    },
    property: {
        type: 'House',
        bedrooms: 4,
        address: {
            country: 'England',
            city: 'London',
            street: 'Fulton rd.',
            houseNumber: 30

        }
    }
}

const newOwner = {
    name: 'Jack Smith',
    age: 50
}

registry.owner = newOwner
console.log(registry)