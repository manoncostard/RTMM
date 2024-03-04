let step1 = document.getElementById("first_step_title_bloc")
let link1 = document.getElementById("link1")

link1.addEventListener("click", function() {
    step1.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
})

let step2 = document.getElementById("second_step_title_bloc")
let link2 = document.getElementById("link2")

link2.addEventListener("click", function() {
    step2.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

let step3 = document.getElementById("third_step_title_bloc")
let link3 = document.getElementById("link3")

link3.addEventListener("click", function() {
    step3.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
})

document.addEventListener('DOMContentLoaded', function() {
    let topOfDiv = document.getElementById("test_steps_links").offsetTop
    window.onscroll = function() {
        let y = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if(y >= topOfDiv) {
            document.getElementById("test_steps_links").classList.add("sticky")
        } else {
            document.getElementById("test_steps_links").classList.remove("sticky")
        }
    }


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
    document.querySelectorAll('.stepTitleSide').forEach(element => {
        observer.observe(element)
    })