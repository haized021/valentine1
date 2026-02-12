let noSize = 18;

function openEnvelope() {
    document.querySelector(".envelope").classList.add("open");

    setTimeout(() => {
        document.getElementById("envelopeScreen").style.display = "none";
        document.getElementById("card").classList.remove("hidden");
    }, 800);
}

function noClick() {
    noSize += 6;
    document.getElementById("noBtn").style.fontSize = noSize + "px";
}

function yesClick() {
    alert("YAY!! ❤️🥰 Happy Valentine's Day!");
}



