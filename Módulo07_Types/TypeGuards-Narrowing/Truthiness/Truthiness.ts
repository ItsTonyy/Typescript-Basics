function getUsersOnline(usersOnline: number) {
  if (usersOnline) {
    return `There are ${usersOnline} users online now.`
  }

  return "nobody's here. :("
}

console.log(getUsersOnline(1000))