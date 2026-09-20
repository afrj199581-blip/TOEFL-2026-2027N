const buttons = document.querySelectorAll(".container button");

const links = [
  "documents/TOEFL%20Exam%20Instructions.pdf",
  "TOEFL%20BOOK%203.pdf",
  "https://www.youtube.com/watch?v=2EIFMwfpL2Y",
  "https://www.youtube.com/watch?v=0EqAtq6IDFQ",
  "documents/TOEFL%20explain.pdf",
  "exams/TOEFL%20Exam.html",
  "exams/TOEFL%20interactive%20exam.html"
];

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    window.open(links[index], "_blank");
  });
});
