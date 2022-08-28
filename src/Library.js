function createLibrary(nameOfLib) {
  var libraryObject = {
    name: nameOfLib,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return libraryObject
}

function addBook(libraryName, bookObject) {
  if (bookObject.genre === "fantasy") {
    libraryName.shelves.fantasy.push(bookObject)
  } else if (bookObject.genre === "fiction") {
    libraryName.shelves.fiction.push(bookObject)
  } else if (bookObject.genre === "nonFiction") {
    libraryName.shelves.nonFiction.push(bookObject)
  }
  return bookObject
}

function checkoutBook(libraryLocation, bookName, bookGenre) {
var shelf = libraryLocation.shelves[bookGenre]
var isOnShelf = false
  for (var i = 0; i < shelf.length; i++) {
    if (bookName === shelf[i].title) {
      shelf.splice(i, 1)
      isOnShelf = true
    }
    }
    if (isOnShelf) {
      return `You have now checked out ${bookName} from the ${libraryLocation.name}`
    } else if (!isOnShelf) {
      return `Sorry, there are currently no copies of ${bookName} available at the ${libraryLocation.name}`
    }
  }


//bracket notation - if you don't know the exact property[]
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
