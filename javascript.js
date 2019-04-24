function Rat(name,weight_rat,speed) {
    this.name=name;
    this.weight_rat=weight_rat;
    this.speed=speed;
    this.status=true;
    this.speak="chit chit";
    this.getTalk=function () {
        return this.speak;
    };
    this.getStatus=function () {
        if (this.status===true){
            console.log("Rats are alive");
        }
        else {
            console.log("dead rats");
        }
    }
}
function Cat(name,weight_cat,speed) {
    this.name=name;
    this.weight_cat=weight_cat;
    this.speed=speed;
    this.speak="meo meo";
    this.getTalk=function () {
        return this.speak;
    };
    this.catchRat=function (rat) {
        if (this.speed>rat.speed){
            console.log("cats caught the mouse");
        }
        else {
            console.log("cats can't catch mice");
        }
    };
    this.eatRat=function (rat) {
        if(rat.status===true){
            this.weight_cat+=rat.weight_rat;
            rat.status=false;
            console.log("cats have eaten rats");
        }
    };
    this.getWeightCat=function () {
        return this.weight_cat;
    }
}
let rat=new Rat("jerry",10,20);
let cat=new Cat("Tom",100,21);
console.log(rat.getTalk());
console.log(cat.getTalk());
cat.catchRat(rat);
cat.eatRat(rat);
console.log(cat.getWeightCat());
rat.getStatus();