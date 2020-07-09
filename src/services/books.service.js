var books=JSON.parse(localStorage.getItem('books'));

if(!books)
{
  books=[{
    isbn:1,
    image:"5.PNG",
    categorie:"Art & Photography",
    titre:"Help Me FindMy Stomach",
    etat:"Disponible",
    nbExemp:2,
    auteur:"Angela Gunning"
  },
  {
    isbn:2,
    image:"2.PNG",
    categorie:"Art & Photography",
    titre:"Drive Safely,No Bumping",
    etat:"Disponible",
    nbExemp:2,
    auteur:"Angela Gunning"
  },
  {
    isbn:3,
    image:"3.PNG",
    categorie:"Art & Photography",
    titre:"Let the Good Times Roll Up",
    etat:"Disponible",
    nbExemp:2,
    auteur:"Angela Gunning"
  },
  {
    isbn:4,
    image:"4.PNG",
    categorie:"Art & Photography",
    titre:"Out State Fair Is A Great State Fair",
    etat:"Disponible",
    nbExemp:2,
    auteur:"Angela Gunning"
  },
  {
    isbn:5,
    image:"5.PNG",
    categorie:"Art & Photography",
    titre:"Put The Petal To The Metal",
    etat:"Disponible",
    nbExemp:2,
    auteur:"Angela Gunning"
  },
  {
    isbn:6,
    image:"3.PNG",
    categorie:"Art & Photography",
    titre:"Help Me Find My Stomach",
    etat:"Disponible",
    nbExemp:2,
    auteur:"Angela Gunning"
  },
  {
    isbn:7,
    image:"4.PNG",
    categorie:"Art & Photography",
    titre:"Help Me Find My Stomach",
    etat:"Disponible",
    nbExemp:2,
    auteur:"Angela Gunning"
  },
  {
    isbn:8,
    image:"5.PNG",
    categorie:"Art & Photography",
    titre:"Help Me Find My Stomach",
    etat:"Disponible",
    nbExemp:2,
    auteur:"Angela Gunning"
  },
  {
    isbn:9,
    image:"2.PNG",
    categorie:"Art & Photography",
    titre:"Help Me Find My Stomach",
    etat:"Disponible",
    nbExemp:2,
    auteur:"Angela Gunning"
  },
  {
    isbn:10,
    image:"3.PNG",
    categorie:"Art & Photography",
    titre:"Help Me Find My Stomach",
    etat:"Disponible",
    nbExemp:2,
    auteur:"Angela Gunning"
  }  ];
localStorage.setItem('books',JSON.stringify(books))

}

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      }
      
      export const fetchBooks = async => {
         //delay(2000)
        return books;
      }

      export const searchBooks = async searchValue => {
        //await delay(2000)
      return books.filter(book => (book.auteur.includes(searchValue)||book.titre.includes(searchValue)));
      }


      
