document.addEventListener("DOMContentLoaded", function () {
    const questionList = document.querySelector(".question-list");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("close");

    // 1'den 82'ye kadar soruları oluştur
    for (let i = 1; i <= 82; i++) {
        const question = document.createElement("div");
        question.classList.add("question");
        question.textContent = `${i}. Soru`;
        question.addEventListener("click", function () {
            // Modalı göster
            modal.style.display = "block";
        });
        questionList.appendChild(question);
    }

    // Modalı kapatma
    closeModal.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
