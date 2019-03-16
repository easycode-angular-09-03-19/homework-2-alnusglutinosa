// 2. Создать декоратор класса User. 
// Он должен добавлять в данном классе поле createDate датой создания класса а также добавлять поле type 
// в котором будет записана строка ‘admin’ или ‘user’ данную строку нужно передать в декоратор при вызове. 
// Сам класс и имя декоратора может быть произвольным.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function UserInfo(target) {
    let newConstructor = function (type) {
        this.type = type;
        this.createDate = new Date().toLocaleString();
    };
    return newConstructor;
}
let User = class User {
    constructor(...args) { }
};
User = __decorate([
    UserInfo,
    __metadata("design:paramtypes", [Object])
], User);
let tom = new User("admin");
let bob = new User("user");
console.log(tom);
console.log(bob);
