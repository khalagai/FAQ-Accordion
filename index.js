// ORIGINAL SOLUTION WHICH WORKS BUT NOT DYNAMIC!!//

// const first = document.getElementById("answer0");
// const second = document.getElementById("answer1");
// const third = document.getElementById("answer2");
// const fourth = document.getElementById("answer3");
// const myImg = document.getElementById("img0")
// const myImg1 = document.getElementById("img1")
// const myImg2 = document.getElementById("img2")
// const myImg3 = document.getElementById("img3")

// const showUs0 = () => {
//     if (first.style.display === "none") {
//         first.style.display = "block";
//         myImg.src = "./assets/images/icon-minus.svg";
//     } else {
//         first.style.display = "none";
//         myImg.src = "./assets/images/icon-plus.svg";
//     }
// }
// const showUs1 = () => {
//     if (second.style.display === "none") {
//         second.style.display = "block";
//         myImg1.src = "./assets/images/icon-minus.svg";
//     } else {
//         second.style.display = "none";
//         myImg1.src = "./assets/images/icon-plus.svg";
//     }
// }
// const showUs2 = () => {
//     if (third.style.display === "none") {
//         third.style.display = "block";
//         myImg2.src = "./assets/images/icon-minus.svg";
//     } else {
//         third.style.display = "none";
//         myImg2.src = "./assets/images/icon-plus.svg";
//     }
// }
// const showUs3 = () => {
//     if (fourth.style.display === "none") {
//         fourth.style.display = "block";
//         myImg3.src = "./assets/images/icon-minus.svg";
//     } else {
//         fourth.style.display = "none";
//         myImg3.src = "./assets/images/icon-plus.svg";
//     }
// }



document.addEventListener("DOMContentLoaded", () => {
    let questions = document.querySelectorAll(".request");

    questions.forEach((question, index) => {
        question.addEventListener("click", () => {
            showAnswer(index);  
        });      
  
        question.addEventListener("keypress", (event) => {
            if(event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                showAnswer(index);
            }        
        });

        question.addEventListener("keydown", (event) => {
            if (event.key === "ArrowUp") {
                navigateTo(index - 1);
            } else if (event.key === "ArrowDown") {
                navigateTo(index + 1);
            }
        })
    });
  
  const showAnswer = (index) => {
    let answer = document.getElementById("answer"+index);
    let image = document.getElementById("img"+index);

    if (answer.style.display === "none") {
        answer.style.display = "block";
        image.src = "./assets/images/icon-minus.svg"; // Change to minus icon
      } else {
        answer.style.display = "none";
        image.src = "./assets/images/icon-plus.svg"; // Change to plus icon
      }

  }

  const navigateTo = (index) => {
    if (index >= 0 && index < questions.length) {
        questions[index].focus();
    }
  }
  
});