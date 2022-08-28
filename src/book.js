function createTitle(book) {
  return "The " + book
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


function calculatePageCount(bookTitleParam) {
  var bookPageCount = bookTitleParam.length  * 20
  return bookPageCount;
}

function writeBook(bookTitleCreated, bookCharacter, genre) {
  return book = {
    title: bookTitleCreated,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitleCreated),
    genre: genre,
  }
}

function editBook(bookData) {
  bookData.pageCount = bookData.pageCount * .75
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
