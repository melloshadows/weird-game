let button = document.querySelectorAll('.s')
let buttonSection = document.querySelectorAll('section')
let vid = document.querySelectorAll('video')
let aud = document.querySelectorAll('audio')
let label = document.getElementById('clic')
let label2 = document.getElementById('clik')
let startGameButton = document.getElementById("s1")
let p = document.querySelectorAll("p")
let h = document.querySelector("h1")
let h2 = document.querySelector("h2")
let h4 = document.querySelector("h4")
let difficultyChoice = document.querySelectorAll("li")
let difficultySection = document.getElementById("Difficulty-section")
let enterGameButton = document.getElementById("beg")
let enterGameButtonContainer = document.getElementById("cont")
let restartGameButton = document.getElementById("res")
let endGameButton = document.getElementById("end")
let rick = document.querySelector(".rick")
let info = document.querySelector(".info")
let infoOnHover = document.querySelector(".hev")
let infoOnClick = document.querySelector(".info-showed")

let pInterval
let maxCounter = 50
let pIntervalIndex = 0
let mainIntervalIndex = 0
let mainInterval
let reversedInterval
let mainIntervalTimer = 700
let reversedIntervalTimer = 600
let clicks = 0
let difficultyChoosen
let lastClickTime = 0


enterGameButton.addEventListener("mouseover", function () {
    enterGameButton.classList.remove("vibrate")
})

enterGameButton.addEventListener("mouseout", function () {
    enterGameButton.classList.add("vibrate")
})

enterGameButton.addEventListener("click", function () {
    aud[4].play()
    enterGameButton.classList.add("fade-out")
    // enterGameButtonContainer.classList.add("fade-out")
    difficultySection.style.display = "block"
    difficultySection.classList.add("fade-in")
})

info.addEventListener("mouseover", function(){
    infoOnHover.classList.add("fading-in")
})

info.addEventListener("mouseout", function(){
    infoOnHover.classList.remove("fading-in")
})

info.addEventListener("click", function(){
    if(infoOnClick.classList.contains("move-up")){
        infoOnClick.classList.remove("move-up")
    }
    else
        infoOnClick.classList.add("move-up")
})


difficultyChoice[0].addEventListener("mouseover", function () {
    h4.classList.add("flashing")
    h4.textContent = "Just Your Normal Difficulty"

})

difficultyChoice[1].addEventListener("mouseover", function () {
    h4.classList.add("flashing")
    h4.textContent = "You Want To Spice Things Up"

})

difficultyChoice[2].addEventListener("mouseover", function () {
    h4.classList.add("flashing")
    h4.textContent = "You're Simply INSANE!"

})


difficultyChoice[0].addEventListener("mouseout", clearDiffText)
difficultyChoice[1].addEventListener("mouseout", clearDiffText)
difficultyChoice[2].addEventListener("mouseout",clearDiffText)

function clearDiffText() {
    h4.classList.remove("flashing")
    h4.textContent = ""
}

difficultyChoice[0].addEventListener("click", function () {
    setupDifficultySections('medium')
    setupGame();

})

difficultyChoice[1].addEventListener("click", function () {
    setupDifficultySections('hard')
    setupGame();

})

difficultyChoice[2].addEventListener("click", function () {
    setupDifficultySections('pagon')
    setupGame();

})

function playSoundForGameDiff(level) {
    switch(level) {
        case "medium":
            aud[7].play()
            break;
        case "hard":
            aud[6].play()
            break;
        case "pagon":
            aud[5].play();
            break;
    }
}

function setupDifficultySections(level) {
    difficultySection.classList.remove("fade-in")
    difficultySection.classList.add("fade-out")
    startGameButton.style.display = "block"
    startGameButton.classList.add("appr")
    aud[4].pause()
    playSoundForGameDiff(level)
    difficultyChoosen = level
}

function setupGame() {
    for (let i = 0; i < buttonSection.length; i++) {

        button[i].addEventListener("click", function () {
            clicks++;
            aud[0].play();
            label2.textContent = clicks + "/" + maxCounter
            buttonSection[i].style.display = "none"

            if (clicks == maxCounter) {
                buttonSection[i].style.display = "none"
                aud[1].pause()
                clearInterval(mainInterval);
                clearInterval(reversedInterval);
                label.style.display = "none"
                label2.style.display = "none"
                h.style.display = "block"
                h2.style.display = "block"
                aud[3].play()
                aud[2].play()
                aud[8].play()
                vid[1].style.display = "block"
                vid[1].play()

                aud[2].addEventListener("ended", function () {

                    h.style.display = "none"
                    h2.style.display = "none"

                    pInterval = setInterval(function () {


                        p[pIntervalIndex].style.display = "none"

                        pIntervalIndex++

                        if (pIntervalIndex == p.length) {
                            rick.style.display = "block"
                            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_self");
                        }
                        else {
                            p[pIntervalIndex].style.display = "block"
                        }
                    }, 200)

                })
            }
        })


        aud[1].addEventListener("ended", function () {
            buttonSection[i].style.display = "none"
            aud[1].pause()
            clearInterval(mainInterval);
            clearInterval(reversedInterval);
            label.style.display = "none"
            label2.style.display = "none"
            vid[0].style.display = "block"
            vid[0].play();
            vid[0].addEventListener("ended", function () {

                restartGameButton.style.display = "block"
                endGameButton.style.display = "block"

                restartGameButton.addEventListener("click", function () {
                    restartGameButton.style.display = "none"
                    endGameButton.style.display = "none"
                    vid[0].style.display = "none"
                    aud[4].play()
                    location.reload()
                })
                endGameButton.addEventListener("click", function () {
                    restartGameButton.style.display = "none"
                    endGameButton.style.display = "none"
                    vid[0].style.display = "none"
                    aud[4].play()
                    window.close()
                })

            })
        })

    }

    if (difficultyChoosen == "pagon") {

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }

        function begin() {
            if (buttonSection[mainIntervalIndex].style.display != "none") {
                buttonSection[mainIntervalIndex].style.display = "none";
                maxCounter += 1;
                label2.textContent = clicks + "/" + maxCounter;
            }

            mainIntervalIndex++;

            if (mainIntervalIndex == buttonSection.length) {
                mainIntervalIndex = buttonSection.length - 2;
                buttonSection[mainIntervalIndex].style.display = "block"
                clearInterval(mainInterval);


                reversedInterval = setInterval(function () {
                    if (buttonSection[mainIntervalIndex].style.display != "none") {
                        buttonSection[mainIntervalIndex].style.display = "none";
                        maxCounter += 1;
                        label2.textContent = clicks + "/" + maxCounter;
                    }
                    mainIntervalIndex--;

                    if (mainIntervalIndex < 0) {
                        mainIntervalIndex = 1
                        buttonSection[mainIntervalIndex].style.display = "block"
                        clearInterval(reversedInterval);
                        mainInterval = setInterval(begin, mainIntervalTimer);
                    }
                    else {
                        buttonSection[mainIntervalIndex].style.display = "block";
                    }
                }, 550);

            }
            else {
                buttonSection[mainIntervalIndex].style.top = `${getRandomNumber(2,92)}%`
                buttonSection[mainIntervalIndex].style.left = `${getRandomNumber(1,85)}%`
                buttonSection[mainIntervalIndex].style.display = "block";
            }
        }


        startGameButton.addEventListener("click", function () {
            aud[1].play();
            startGameButton.style.display = "none";
            startGameButton.classList.remove("appr")
            label.style.display = "inline-block";
            label2.style.display = "inline-block";
            buttonSection[0].style.display = "block";
            label2.textContent = "0/50";


            mainInterval = setInterval(begin, mainIntervalTimer);

        });
    }

    else if (difficultyChoosen == "hard") {
        function begin() {
            if (buttonSection[mainIntervalIndex].style.display != "none") {
                buttonSection[mainIntervalIndex].style.display = "none";
                maxCounter++;
                label2.textContent = clicks + "/" + maxCounter;
            }

            mainIntervalIndex++;

            if (mainIntervalIndex == buttonSection.length) {
                mainIntervalIndex = buttonSection.length - 2;
                buttonSection[mainIntervalIndex].style.display = "block"
                clearInterval(mainInterval);


                reversedInterval = setInterval(function () {
                    if (buttonSection[mainIntervalIndex].style.display != "none") {
                        buttonSection[mainIntervalIndex].style.display = "none";
                        maxCounter++;
                        label2.textContent = clicks + "/" + maxCounter;
                    }
                    mainIntervalIndex--;

                    if (mainIntervalIndex < 0) {
                        mainIntervalIndex = 1
                        buttonSection[mainIntervalIndex].style.display = "block"
                        clearInterval(reversedInterval);
                        mainInterval = setInterval(begin, mainIntervalTimer);
                    } else {
                        buttonSection[mainIntervalIndex].style.display = "block";
                    }
                }, reversedIntervalTimer);

            }
            else {
                buttonSection[mainIntervalIndex].style.display = "block";
            }
        }
        startGameButton.addEventListener("click", function () {
            aud[1].play();
            startGameButton.classList.remove("appr")
            startGameButton.style.display = "none"
            label.style.display = "inline-block"
            label2.style.display = "inline-block"
            buttonSection[0].style.display = "block"
            label2.textContent = "0/50";

            mainInterval = setInterval(begin, mainIntervalTimer);
        })
    }

    else {
        startGameButton.addEventListener("click", function () {
            aud[1].play();
            startGameButton.classList.remove("appr")
            startGameButton.style.display = "none";
            label.style.display = "inline-block";
            label2.style.display = "inline-block";
            buttonSection[0].style.display = "block";
            label2.textContent = "0/50";

            mainInterval = setInterval(function () {

                buttonSection[mainIntervalIndex].style.display = "none"
                mainIntervalIndex++;

                if (mainIntervalIndex == buttonSection.length) {
                    buttonSection[0].style.display = "block";
                    mainIntervalIndex = 0;
                }
                else {

                    buttonSection[mainIntervalIndex].style.display = "block";
                }
            }, mainIntervalTimer)
        })
    }
}