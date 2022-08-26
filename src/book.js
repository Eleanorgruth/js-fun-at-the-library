function createTitle(bookIdea) {
  return "The " + bookIdea
}

function buildMainCharacter(name, age, pronouns) {
  return mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
}

function saveReview(reviewText, reviews) {
  if (reviews.includes(reviewText) === false) {
    return reviews.push(reviewText)
  }
}


function calculatePageCount(bookTitle, bookPageCount) {
  var bookPageCount = bookTitle.length  * 20
  return bookPageCount;
}

function writeBook(bookTitle, bookCharacter, genre) {
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: bookTitle.length  * 20,
    genre: genre,
  }
}

function editBook(book) {
  book.pageCount = book.pageCount * .75
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
