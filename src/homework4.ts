// 4. Есть два класса Junior и Middle создайте класс Senior который будет имплементировать этих два класса 
// а также у него будет еще свой метод createArchitecture реализация данного метода может быть произвольной. 

class Junior {
    public doTasks(): void {
        console.log('Actions!!!');
    }
}

class Middle {
    public createApp(): void {
        console.log('Creating!!!');
    }
}

class Senior implements Junior, Middle {
  public doTasks: () => void;
  public createApp: () => void;
  public createArchitecture(): void {
    console.log('Create Architecture!');
  }
}

function applyMixin(targetClass: any, baseClasses: any[]) {
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