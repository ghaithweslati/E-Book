var members = JSON.parse(localStorage.getItem("members"));

if (!members) {
  members = [
    {
      id: 0,
      image: "1.PNG",
      nom: "Admin",
      prenom: "Admin",
      email: "admin@gmail.com",
      password: "admin",
      type: "Admin",
      etat: "Actif",
      reseau_social: {
        facebook: "facebook",
        twitter: "twitter",
        linkedin: "linkedin",
      },
      description:
        "Consectetur adipisicing elit sed do eiusmod tempor incididunt labore toloregna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoiars nisiuip commodo consequat aute irure dolor in aprehenderit aveli esseati cillum dolor fugiat nulla pariatur cepteur sint occaecat cupidatat. Caanon proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnisate natus error sit voluptatem accusantium doloremque totam rem aperiam, eaque ipsa quae abillo inventoe veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia. Voluptas sit asapernatur aut odit aut fugit, sed quia consequuntur magni dolores eos quistan ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      livres: [],
    },
  ];

  localStorage.setItem("members", JSON.stringify(members));
}

// const members=JSON.parse(localStorage.getItem('members'));

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchMembers = (async) => {
  //  await delay(2000)
  return members;
};

export const fetchMyBorrowed = (id) => {
  //await delay(2000)
  return members.filter((member) => member.id == id)[0].livres;
};

export const fetchBorroweds = (async) => {
  //await delay(2000)
  var borr = [];
  for (let i = 0; i < members.length; i++)
    for (let g = 0; g < members[i].livres.length; g++)
      borr.unshift(members[i].livres[g]);
  return borr;
};

export const fetchBorrowedsRetard = (async) => {
  //await delay(2000)
  var borr = [];
  for (let i = 0; i < members.length; i++)
    for (let g = 0; g < members[i].livres.length; g++) {
      let date = new Date(members[i].livres[g].dateEmp);
      let dateRetard = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 15
      );
      if (new Date() > dateRetard) {
        borr.unshift(members[i].livres[g]);
      }
    }
  return borr;
};

export const fetchMemberById = (id) => {
  //await delay(2000)
  return members.filter((member) => member.id == id)[0];
};

export const fetchMemberByEmailPassword = (email, password) => {
  //await delay(2000)
  return members.filter(
    (member) => member.email == email && member.password == password
  )[0];
};

/*export const searchBooks = async searchValue => {
        //await delay(2000)
      return books.filter(book => book.titre.includes(searchValue))

      }*/
