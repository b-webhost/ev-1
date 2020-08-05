function showMessage() {
    document.getElementById("output").innerHTML = `Вы выбрали для изучения ${
        document.getElementById("textArea").value
    }.`;
}

document.getElementById("btn").onclick = showMessage;
