const likeBtn = document.querySelector(".like-btn");
const likeCount = document.querySelector(".like-count");

let count = 0;

likeBtn.addEventListener("click", () => {
    if (likeBtn.classList.contains("liked")) {
        likeBtn.classList.remove("liked");
        likeBtn.classList.replace("fa-solid", "fa-regular");
        count--;
    } else {
        likeBtn.classList.add("liked");
        likeBtn.classList.replace("fa-regular", "fa-solid");
        count++;
    }

    likeCount.innerText = count;
});
