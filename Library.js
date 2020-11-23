function collide(bodya, bodyb) {
    if (bodya.x - bodyb.x < bodya.width / 2 + bodyb.width / 2
        && bodyb.x - bodya.x < bodya.width / 2 + bodyb.width / 2
        && bodya.y - bodyb.y < bodya.height / 2 + bodyb.height / 2
        && bodyb.y - bodya.y < bodya.height / 2 + bodyb.height / 2) {
        bodya.velocityY = 0;
        bodya.velocityX = 0;
        bodyb.velocityY = 0;
    }
    else {
        return false
    }
}

function istouching(bodya, bodyb) {
    if (bodya.x - bodyb.x < bodya.width / 2 + bodyb.width / 2
        && bodyb.x - bodya.x < bodya.width / 2 + bodyb.width / 2
        && bodya.y - bodyb.y < bodya.height / 2 + bodyb.height / 2
        && bodyb.y - bodya.y < bodya.height / 2 + bodyb.height / 2) {
        bodya.velocityX = 0
        return true
    }
    else {
        return false
    }
}
function ninjacontrols() {
    if (keyDown("right")) {
        ninja.changeAnimation("3");
        ninja.velocityX = 20;
    }
    if (keyWentUp("right")) {
        ninja.changeAnimation("1");
        ninja.velocityX = 0;
    }
    if (keyDown("space")) {
        ninja.changeAnimation("2");
        ninja.velocityY = -30;
    }
    if (keyWentUp("space")) {
        ninja.changeAnimation("1");
        ninja.velocityY = 0;
    }
    if (ninja.y < 465 && keyIsPressed === false) {
        ninja.y += 60;
    }
}

function endstate() {
    if (istouching(ninja, zombie)) {
        alert("You Lose");
        ninja.velocityX = 0;
    }
    else {
        gamestate = "Start";
    }
}