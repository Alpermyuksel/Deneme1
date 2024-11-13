document.addEventListener("DOMContentLoaded", function () {
    const questionList = document.querySelector(".question-list");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("close");

    if (questionList) {
        for (let i = 1; i <= 82; i++) {
            const question = document.createElement("div");
            question.classList.add("question");
            question.textContent = `${i}. Soru`;
            question.addEventListener("click", function () {
                modal.style.display = "block";
            });
            questionList.appendChild(question);
        }
    }

    closeModal.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
