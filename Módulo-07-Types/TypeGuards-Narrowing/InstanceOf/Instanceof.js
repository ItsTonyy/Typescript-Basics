var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("i'm a bird and im gonna flyyyyy!!");
    };
    Bird.prototype.layEggs = function () {
        console.log("i'm a bird and im gonna lay some beaaaautiful eggs");
    };
    return Bird;
}());
var pet = new Bird();
if (pet instanceof Bird) {
    pet.fly();
}
else {
    console.log("i don't think this is a bird buddy...");
}
