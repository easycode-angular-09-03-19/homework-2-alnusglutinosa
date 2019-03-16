// 4. Есть два класса Junior и Middle создайте класс Senior который будет имплементировать этих два класса 
// а также у него будет еще свой метод createArchitecture реализация данного метода может быть произвольной. 
class Junior {
    doTasks() {
        console.log('Actions!!!');
    }
}
class Middle {
    createApp() {
        console.log('Creating!!!');
    }
}
class Senior {
    createArchitecture() {
        console.log('Create Architecture!');
    }
}
function applyMixin(targetClass, baseClasses) {
    baseClasses.forEach((baseClass) => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach((propName) => {
            if (propName !== 'constructor') {
                targetClass.prototype[propName] = baseClass.prototype[propName];
            }
        });
    });
}
applyMixin(Senior, [Junior, Middle]);
const programmer = new Senior();
programmer.doTasks();
programmer.createApp();
programmer.createArchitecture();
