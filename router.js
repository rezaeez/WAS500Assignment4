const path = require("path");

const index = (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
};

const book1 = (req, res) => {
  res.sendFile(path.join(__dirname, "views/book1.html"));
};

const book2 = (req, res) => {
  res.sendFile(path.join(__dirname, "views/book2.html"));
};

const book3 = (req, res) => {
  res.sendFile(path.join(__dirname, "views/book3.html"));
};

const books = (req, res) => {
  res.sendFile(path.join(__dirname, "views/books.html"));
};

const contact = (req, res) => {
  res.sendFile(path.join(__dirname, "views/contact.html"));
};

const honesty = (req, res) => {
  res.sendFile(path.join(__dirname, "views/honesty.html"));
};

const survey = (req, res) => {
  res.sendFile(path.join(__dirname, "views/survey.html"));
};

const error = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views/404.html"));
  console.log(
    `An error occurred. Request for page "${
      req.url
    }" could not be found on the server. ${new Date().toUTCString()}`
  );
};

// export
module.exports = {
  index,
  book1,
  book2,
  book3,
  books,
  contact,
  honesty,
  survey,
  error,
};
