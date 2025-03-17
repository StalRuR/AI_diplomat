document.addEventListener("DOMContentLoaded", () => {
    let selectedCountry = null;

    document.querySelectorAll(".flag").forEach(flag => {
        flag.addEventListener("click", function() {
            document.querySelectorAll(".flag").forEach(f => f.classList.remove("selected"));
            this.classList.add("selected");
            selectedCountry = this.getAttribute("data-country");

            let startButton = document.getElementById("start-button");
            startButton.classList.remove("disabled");
            startButton.style.pointerEvents = "auto";
            startButton.style.opacity = "1";
        });
    });

    document.getElementById("start-button").addEventListener("click", function() {
        if (!selectedCountry) return;
    
        let dialogContainer = document.querySelector(".dialog-container");
        dialogContainer.style.display = "block";  
        document.querySelector(".dialog-container").classList.add("show");
        setTimeout(() => {
            dialogContainer.style.opacity = "1";
        }, 100);
    
        this.style.display = "none"; 
    
        document.querySelectorAll(".interest").forEach(interest => {
            if (interest.getAttribute("data-country") !== selectedCountry) {
                interest.style.display = "none";
            }
        });
    
        document.getElementById("scenario-outcomes").style.display = "none";
        document.querySelector(".country-selection").style.display = "none";
    });
    
    document.getElementById("theme-toggle").addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
    
    });
    
