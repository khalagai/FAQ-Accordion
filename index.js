document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".request");

    questions.forEach((question, index) => {
        question.setAttribute("role", "button");
        question.setAttribute("aria-expanded", "false");
        question.setAttribute("tabindex", "0"); // Ensures it's focusable

        question.addEventListener("click", () => toggleAnswer(index));
        question.addEventListener("keypress", (event) => handleKeyPress(event, index));
        question.addEventListener("keydown", (event) => handleNavigation(event, index));
    });

    const toggleAnswer = (index) => {
        const question = questions[index];
        const answer = document.getElementById(`answer${index}`);
        const image = document.getElementById(`img${index}`);
        const isExpanded = question.getAttribute("aria-expanded") === "true";

        question.setAttribute("aria-expanded", !isExpanded);
        answer.style.display = isExpanded ? "none" : "block";
        image.src = isExpanded ? "./assets/images/icon-plus.svg" : "./assets/images/icon-minus.svg";
    };

    const handleKeyPress = (event, index) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleAnswer(index);
        }
    };

    const handleNavigation = (event, index) => {
        if (event.key === "ArrowUp") {
            navigateTo(index - 1);
        } else if (event.key === "ArrowDown") {
            navigateTo(index + 1);
        }
    };

    const navigateTo = (index) => {
        if (index >= 0 && index < questions.length) {
            questions[index].focus();
        }
    };
});
