// 2. Создать декоратор класса User. 
// Он должен добавлять в данном классе поле createDate датой создания класса а также добавлять поле type 
// в котором будет записана строка ‘admin’ или ‘user’ данную строку нужно передать в декоратор при вызове. 
// Сам класс и имя декоратора может быть произвольным.


function UserInfo<TFunction extends Function>(target: TFunction): TFunction{
 
        let newConstructor: Function = function(type:string){
            this.type = type;
            this.createDate = new Date().toLocaleString();
        }
        return <TFunction>newConstructor;
    }
     
 
@UserInfo
class User {
    constructor(...args: any[]) {}
}
let tom = new User("admin");
let bob = new User("user");
console.log(tom);
console.log(bob);