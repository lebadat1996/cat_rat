let Rat = function (name, weight) {
    this.name = name;
    this.weight = weight;
    this.speed = 100 / weight;
    this.exp = 0;
    this.sneaky = 60;
    this.isLive = true;
    this.isCaucthed = "";
    this.say = function () {
        if (this.isLive) {
            console.log("chít chít");
            this.sneaky--;
        } else {
            console.log("the mouse have already dead!")
        }
    };
    this.alert = function () {
        if (this.isLive) {
            this.sneaky++;
        } else {
            console.log("the mouse have already dead!")
        }
    };
    this.dead = function () {
        if (this.isLive) {
            this.speed = 0;
            this.sneaky = 0;
            this.isLive = false;
            this.weight /= 2;
        } else {
            console.log("the mouse have already dead!")
        }
    }
};

let Cat = function (name, weight) {
    this.name = name;
    this.weight = weight;
    this.speed = 500 / weight;
    this.exp = 0;
    this.haveAMouse = false;
    this.sneaky = 80;
    this.say = function () {
        console.log("meo meo");
        this.sneaky--;
    };
    this.preHunt = function () {
        this.sneaky++;
    };
    this.catch = function (mouse) {
        if (mouse.isLive) {
            this.speed += 30;
            if (this.haveAMouse) {
                console.log(this.name + " is already have a mouse")
            } else {
                if ((this.speed > mouse.speed) ||
                    (this.sneaky > mouse.sneaky) ||
                    (this.exp > mouse.exp)) {
                    console.log("méo");
                    console.log("chít!!!!!!");
                    console.log(this.name + " catched " + mouse.name);
                    this.haveAMouse = true;
                    mouse.isCaucthed = this.name;
                    this.exp++;
                    this.sneaky++;
                    this.speed += 10;
                } else {
                    mouse.speed += 5;
                    mouse.exp++;
                    mouse.sneaky++;
                    console.log(mouse.name + " escaped");
                }
                this.speed -= 30;
            }
        } else {
            console.log("the mouse have already dead!")
        }
    };

    this.eat = function (mouse) {
        if (mouse.isCaucthed === this.name) {
            this.weight += mouse.weight;
            console.log(this.name + " vừa ăn " + mouse.name);
            console.log(this.name + " vừa tăng lên " + this.weight);
            mouse.dead();
            this.haveAMouse = false;
        }
    }
};
let mickey = new Rat("mickey", 5);
mickey.say();
let jerry = new Rat("jerry", 3);
jerry.sneaky = 100;
jerry.exp = 10;
jerry.say();
let tom = new Cat("tom", 7);
tom.say();
tom.catch(jerry);
tom.catch(mickey);
tom.eat(mickey);
tom.say();
tom.catch(jerry);
tom.eat(jerry);