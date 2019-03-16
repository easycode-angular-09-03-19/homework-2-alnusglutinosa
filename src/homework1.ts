// 1. Создать декоратор метода addItemInfoDecorator он должен добавлять поле date в возвращаемом объекте 
// с датой когда был вызван метод 
// а также поле info в котором будет записан текст состоящий из названия товара и его цены например: ‘Apple iPhone - $100’;
// Для того что бы функция была вызвана в правильном контексте внутри декоратора ее нужно вызывать через 
// apply let origResult =  originalFunc.apply(this);

function addItemInfoDecorator(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value; // save a reference to the original method
    descriptor.value = function(...args: any[]) {
        const result = originalMethod.apply(this);
        result.createDate = new Date().toLocaleString();
        result.info = `${this.name}, price: ${this.price}`;
        return result;
    };

    return descriptor;
}

class Product {
    public name: string;
    public price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    @addItemInfoDecorator
    public myMethod() {
        return {
            name: this.name, 
            price: this.price
        };
    }
}

const phone = new Product('iphone', 250).myMethod();
console.log(phone);
