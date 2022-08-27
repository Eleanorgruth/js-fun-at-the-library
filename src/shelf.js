function shelfBook (bookObject, shelfTypeArray) {
  if (shelfTypeArray.length < 3) {
    return shelfTypeArray.unshift(bookObject)
  }
}

function unshelfBook(titleParam, shelfParam) {
  for (var i = 0 ; i < shelfParam.length; i++) {
    if (shelfParam[i].title === titleParam) {
      return shelfParam.splice(i, 1)
    }
  }
}

function listTitles(shelfList) {
  var titlesOnShelf = []
  for (var i = 0; i < shelfList.length; i++) {
    titlesOnShelf.push(shelfList[i].title)
  }
    return titlesOnShelf.join(", ")
}

function searchShelf(shelfName, bookName) {
  for (var i = 0; i < shelfName.length; i ++) {
    if (shelfName[i].title === bookName) {
      return true}
    }
    return false
  }

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
