document.getElementById("share-copy").addEventListener("click", () => {
    console.log("Button clicked"); 
    writeClipboardText(window.location.href);
});

async function writeClipboardText(text) {
    try {
        await navigator.clipboard.writeText(text);
        alert("Profile link copied to clipboard!");
    } catch (error) {
        console.error(error.message);
        alert("Failed to copy the link."); 
    }
}



document.getElementById("mode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.getElementById("mode").innerHTML = document.body.classList.contains("dark-mode") ? '<i class="fa-solid fa-sun" style="color:white;"></i>' : '<i class="fa-solid fa-moon"></i>';
});