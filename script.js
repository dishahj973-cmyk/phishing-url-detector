function checkURL() {

    let url = document.getElementById("urlInput").value;
    let result = document.getElementById("result");

    if (url === "") {
        result.innerHTML = "⚠️ Please enter a URL.";
        return;
    }

    let suspiciousWords = [
        "login",
        "verify",
        "free",
        "winner",
        "password",
        "urgent"
    ];

    let suspicious = false;

    for (let word of suspiciousWords) {
        if (url.toLowerCase().includes(word)) {
            suspicious = true;
            break;
        }
    }

    if (!url.startsWith("https://")) {
        suspicious = true;
    }

    if (suspicious) {
        result.innerHTML = "⚠️ Suspicious URL detected!";
        result.style.color = "red";
    } else {
        result.innerHTML = "✅ URL looks safe!";
        result.style.color = "green";
    }
}
