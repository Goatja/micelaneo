
import { encrypter } from "./encrypter.js";

const text = document.getElementById("password");
const result = document.querySelector(".result-text")
const bd = document.querySelector(".wrapper");
document.getElementById("form").addEventListener("submit", e =>{
    e.preventDefault();
    let textValue = text.value;
    result.textContent = encrypter(textValue);
    text.value = "";
})

result.addEventListener("copy", () => {
    setTimeout(() => {
        bd.style.background = "url(https://t4.ftcdn.net/jpg/06/25/30/61/360_F_625306116_nW90DHo7sz91Mi87db0UF5iv5Rn8diBQ.jpg)"
    }, 2500);
    bd.style.background = "url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGQyYmlxeXl5dWxwdHFvNmptcG9hOHFkbm1ueThrcWcwNnFwaG1qOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/xT9IgMgdur6larNA1a/giphy.gif)"
    result.innerHTML += " ✅copy"
});
