const buttons = document.querySelectorAll(".container button");

const links = [
  "documents/TOEFL%20Exam%20Instructions.pdf",
  "TOEFL%20BOOK%203.pdf",

  "listen/listen1.html",
  "listen/listen2.html",

  "documents/TOEFL%20explain.pdf",

  "exams/TOEFL%20Exam.html",
  "exams/TOEFL%20interactive%20exam.html"
];

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (links[index]) {
      window.location.href = links[index];
    }
  });
});
