const textInput = document.querySelector("#name-input");
console.log("🚀 ~ textInput:", textInput)

const nameOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    nameOutput.textContent = event.currentTarget.value.trim();
    if (nameOutput.textContent.trim() === "") {
        nameOutput.textContent = "Anonymous";
    }   
});

