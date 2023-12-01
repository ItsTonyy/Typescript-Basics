function getUsersOnline(usersOnline) {
    if (usersOnline) {
        return "There are ".concat(usersOnline, " users online now.");
    }
    return "nobody's here. :(";
}
console.log(getUsersOnline(1000));
