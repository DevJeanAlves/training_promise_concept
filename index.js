const guests = [
  {
    name: "Jean",
    age: 29
  },
  {
    name: "Jade",
    age: 10
  }
];

const checkInvite = (name) => {
  const checkName = guests.find(guest => guest.name == name)
  return checkName;
}

const validName = (name) => {
  const checkName = typeof name == "string";

  if (!checkName) {
    throw new Error("Invalid name.")
  }
}

const ifNotInvite = (name) => {
  const invited = checkInvite(name)

  if(!invited) {
    throw new Error("Sorry, you aren't invited!")
  }
}

const ifInvite = (name) => {
  const invited = checkInvite(name)
  const inviteMessage = `Wellcome ${invited.name}, enjoy the party!!!`
  console.log(inviteMessage)
};


const checkList = async (name) => {

  try {

    validName(name)

    ifNotInvite(name)
  
    ifInvite(name)

  } catch (e) {
    console.log(e.message)
  }
}

checkList("Name")
