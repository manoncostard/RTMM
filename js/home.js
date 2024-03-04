let efficiencyCard = document.getElementById("efficiency_card")
let efficiencyLink = document.getElementById("efficiency_link")

efficiencyLink.addEventListener("click", function() {
    efficiencyCard.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

let comfortCard = document.getElementById("middle_card")
let comfortLink = document.getElementById("comfort_link")

comfortLink.addEventListener("click", function() {
    comfortCard.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

let compatibilityCard = document.getElementById("compatibility_card")
let compatibilityLink = document.getElementById("compatibility_link")

compatibilityLink.addEventListener("click", function() {
    compatibilityCard.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})


// Create the observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('isInViewport');
        }
    });
});

  // Tell the observer which elements to track
observer.observe(document.querySelector('h2'));
