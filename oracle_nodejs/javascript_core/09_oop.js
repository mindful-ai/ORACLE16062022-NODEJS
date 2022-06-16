class Car {

    // Data
    constructor(brand){
        this.carname = brand;
    }

    // Functions
    get cname(){
        return this.carname;
    }

    set cname(x){
        this.carname = x;
    }

    getcar(){
        return this.carname;
    }

    setcar(x){
        this.carname = x;
    }

    present(){
        return 'I have a ' + this.cname;
    }
}

class Model extends Car {
    constructor(brand, model){
        super(brand);
        this.model = model;
    }

    show(){
        return 'My car\'s model is ' + this.model;
    }

    present(){
        return super.present() + ', it is a ' + this.model;
    }

}

var mycar = new Car("Ford");
console.log(mycar.present());

mycar.cname = 'Mercedes';
console.log(mycar.cname)

mycar.setcar('BMW');
console.log(mycar.getcar());

var newcar = new Model("KIA", "Karens");
console.log(newcar.present())
console.log(newcar.show())

var p = newcar;
console.log(p.present());