
const screens = {

    screen1:
        document.getElementById("screen1"),

    screen2:
        document.getElementById("screen2"),

    screen3:
        document.getElementById("screen3"),

    screen4:
        document.getElementById("screen4"),

    screen5:
        document.getElementById("screen5")

};


const mainGift =
    document.getElementById("mainGift");

const openMainGift =
    document.getElementById("openMainGift");


const secondGift =
    document.getElementById("secondGift");

const openSecondGift =
    document.getElementById("openSecondGift");


const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");




function goToScreen(nextScreen) {

    Object.values(screens).forEach(
        screen => {

            screen.classList.remove("active");

        }
    );


    nextScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



let musicPlaying = false;


function playMusic() {

    music.volume = 0.5;

    music.play()
        .then(() => {

            musicPlaying = true;

            musicButton.classList.add(
                "playing"
            );

        })
        .catch(() => {

            console.log(
                "Trình duyệt yêu cầu người dùng tương tác trước khi phát nhạc."
            );

        });

}


function toggleMusic() {

    if (music.paused) {

        playMusic();

    } else {

        music.pause();

        musicPlaying = false;

        musicButton.classList.remove(
            "playing"
        );

    }

}


musicButton.addEventListener(
    "click",
    toggleMusic
);




let mainGiftOpened = false;


function openFirstGift() {

    if (mainGiftOpened) {

        return;

    }


    mainGiftOpened = true;


    mainGift.classList.add(
        "open"
    );


    openMainGift.disabled = true;

    openMainGift.textContent =
        "✨ Đang mở quà...";


    playMusic();


   

    fireworkBurst(
        window.innerWidth / 2,
        window.innerHeight / 3
    );


    setTimeout(() => {

        goToScreen(
            screens.screen2
        );

    }, 1200);

}


mainGift.addEventListener(
    "click",
    openFirstGift
);


openMainGift.addEventListener(
    "click",
    openFirstGift
);



const photos = [

    "assets/anh1.jpg",
    "assets/anh2.jpg",
    "assets/anh3.jpg",
    "assets/anh4.jpg",
    "assets/anh5.jpg",
    "assets/anh6.jpg"

];


let currentPhoto = 0;


const albumImage =
    document.getElementById("albumImage");

const photoCurrent =
    document.getElementById("photoCurrent");

const photoTotal =
    document.getElementById("photoTotal");

const photoDots =
    document.getElementById("photoDots");


photoTotal.textContent =
    photos.length;




photos.forEach(
    (_, index) => {

        const dot =
            document.createElement("div");

        dot.className =
            "dot";


        if (index === 0) {

            dot.classList.add(
                "active"
            );

        }


        dot.addEventListener(
            "click",
            () => {

                currentPhoto = index;

                updatePhoto();

            }
        );


        photoDots.appendChild(
            dot
        );

    }
);




function updatePhoto() {

    albumImage.classList.add(
        "change"
    );


    setTimeout(() => {

        albumImage.src =
            photos[currentPhoto];

        photoCurrent.textContent =
            currentPhoto + 1;


        document
            .querySelectorAll(".dot")
            .forEach(
                (dot, index) => {

                    dot.classList.toggle(
                        "active",
                        index === currentPhoto
                    );

                }
            );


        albumImage.classList.remove(
            "change"
        );

    }, 250);

}




document
    .getElementById("prevPhoto")
    .addEventListener(
        "click",
        () => {

            currentPhoto--;

            if (
                currentPhoto < 0
            ) {

                currentPhoto =
                    photos.length - 1;

            }

            updatePhoto();

        }
    );




document
    .getElementById("nextPhoto")
    .addEventListener(
        "click",
        () => {

            currentPhoto++;

            if (
                currentPhoto >=
                photos.length
            ) {

                currentPhoto = 0;

            }

            updatePhoto();

        }
    );




document
    .getElementById("goToGift")
    .addEventListener(
        "click",
        () => {

            goToScreen(
                screens.screen3
            );

        }
    );




let secondGiftOpened = false;


function openSecondBox() {

    if (secondGiftOpened) {

        return;

    }


    secondGiftOpened = true;


    secondGift.classList.add(
        "open"
    );


    openSecondGift.disabled =
        true;


    openSecondGift.textContent =
        "✨ Đang mở...";


    fireworkBurst(
        window.innerWidth / 2,
        window.innerHeight / 3
    );


    setTimeout(() => {

        goToScreen(
            screens.screen4
        );

    }, 1000);

}


secondGift.addEventListener(
    "click",
    openSecondBox
);


openSecondGift.addEventListener(
    "click",
    openSecondBox
);



const mysteryBoxes =
    document.querySelectorAll(
        ".mystery-wrapper"
    );


let boxAlreadyChosen = false;




const gifts = {

    1: {

        icon: "💎",

        title:
            "Ông Bụt hiện lên và nói",

        heading:
            "Hô Hô Hô",

        text:
            "Chúc mừng em đã trúng được một viên đá tự chọn nhớ cap lại làm bằng chứng nhé "

    },


    2: {

        icon: "🧢",

        title:
            "Món quà em thích",

        heading:
            "Ha Ha Ha...",

        text:
            "Trước em có nói là em thích 1 chiếc mũ thì hôm nay hãy chọn cho mình đi còn lại để anh lo."

    },


    3: {

        icon: "🧸",

        title:
            "Ngôi Nhà gấu bông",

        heading:
            "Hi Hi Hi...",

        text:
            "Anh nghĩ là nhiều gấu bông em sẽ cảm thấy bớt cô đơn trong căn nhà đó."

    },


    4: {

        icon: "🎆",

        title:
            "Món quà cuối cùng",

        heading:
            "🎉 Surprise!",

        text:
            "Không quan trọng bạn chọn hộp nào. Điều quan trọng nhất là hôm nay em hãy thật vui, thật hạnh phúc và tận hưởng ngày đặc biệt của mình!"

    }

};



mysteryBoxes.forEach(
    wrapper => {

        wrapper.addEventListener(
            "click",
            () => {

                if (boxAlreadyChosen) {

                    return;

                }


                boxAlreadyChosen =
                    true;


                const boxNumber =
                    wrapper.dataset.box;


              

                wrapper.classList.add(
                    "selected"
                );


            

                mysteryBoxes.forEach(
                    other => {

                        if (
                            other !== wrapper
                        ) {

                            other.classList.add(
                                "disabled"
                            );

                        }

                    }
                );


               

                fireworkBurst(
                    window.innerWidth / 2,
                    window.innerHeight / 3
                );


                fireworkBurst(
                    window.innerWidth / 3,
                    window.innerHeight / 2
                );


                fireworkBurst(
                    window.innerWidth * .7,
                    window.innerHeight / 2
                );


                

                setTimeout(
                    () => {

                        showGift(
                            boxNumber
                        );

                    },
                    1200
                );

            }
        );

    }
);



function showGift(boxNumber) {

    const gift =
        gifts[boxNumber];


    document.getElementById(
        "resultIcon"
    ).textContent =
        gift.icon;


    document.getElementById(
        "resultTitle"
    ).textContent =
        gift.title;


    document.getElementById(
        "resultHeading"
    ).textContent =
        gift.heading;


    document.getElementById(
        "resultText"
    ).textContent =
        gift.text;


  

    const resultImage =
        document.getElementById(
            "resultImage"
        );


    if (boxNumber === "1") {

        resultImage.textContent =
            "💌";

    }


    if (boxNumber === "2") {

        resultImage.textContent =
            "📸";

    }


    if (boxNumber === "3") {

        resultImage.textContent =
            "🎵";

    }


    if (boxNumber === "4") {

        resultImage.textContent =
            "🎆";

    }


    goToScreen(
        screens.screen5
    );




    for (
        let i = 0;
        i < 8;
        i++
    ) {

        setTimeout(
            () => {

                fireworkBurst(
                    Math.random() *
                    window.innerWidth,

                    Math.random() *
                    (window.innerHeight * .6)
                );

            },
            i * 250
        );

    }

}




document
    .getElementById("replayButton")
    .addEventListener(
        "click",
        () => {

           

            mainGiftOpened = false;

            secondGiftOpened = false;

            boxAlreadyChosen = false;


            mainGift.classList.remove(
                "open"
            );


            secondGift.classList.remove(
                "open"
            );


            openMainGift.disabled =
                false;

            openMainGift.textContent =
                "🎁 MỞ QUÀ";


            openSecondGift.disabled =
                false;

            openSecondGift.textContent =
                "🎁 MỞ HỘP";


            mysteryBoxes.forEach(
                box => {

                    box.classList.remove(
                        "selected",
                        "disabled"
                    );

                }
            );


            currentPhoto = 0;

            updatePhoto();


            goToScreen(
                screens.screen1
            );

        }
    );




const canvas =
    document.getElementById(
        "canvas"
    );


const ctx =
    canvas.getContext("2d");


let fireworks = [];


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);




class Firework {

    constructor(
        x,
        y
    ) {

        this.x = x;

        this.y = y;

        this.particles = [];

        const particleCount = 90;

        const hue =
            Math.random() * 360;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const angle =
                Math.PI * 2 *
                (i / particleCount);


            const speed =
                2 +
                Math.random() * 7;


            this.particles.push({

                x: x,

                y: y,

                vx:
                    Math.cos(angle)
                    * speed,

                vy:
                    Math.sin(angle)
                    * speed,

                alpha: 1,

                size:
                    1 +
                    Math.random() * 3,

                hue: hue

            });

        }

    }


    update() {

        this.particles.forEach(
            particle => {

                particle.x +=
                    particle.vx;

                particle.y +=
                    particle.vy;

                particle.vy +=
                    .045;

                particle.vx *=
                    .985;

                particle.vy *=
                    .985;

                particle.alpha -=
                    .012;

            }
        );


        this.particles =
            this.particles.filter(
                particle =>
                    particle.alpha > 0
            );


        return (
            this.particles.length > 0
        );

    }


    draw() {

        this.particles.forEach(
            particle => {

                ctx.save();

                ctx.globalAlpha =
                    particle.alpha;

                ctx.beginPath();

                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );


                ctx.fillStyle =
                    `hsl(
                        ${particle.hue},
                        100%,
                        70%
                    )`;


                ctx.shadowBlur = 15;

                ctx.shadowColor =
                    `hsl(
                        ${particle.hue},
                        100%,
                        70%
                    )`;


                ctx.fill();

                ctx.restore();

            }
        );

    }

}




function fireworkBurst(
    x,
    y
) {

    fireworks.push(
        new Firework(x, y)
    );

}




function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    fireworks =
        fireworks.filter(
            firework => {

                firework.draw();

                return firework.update();

            }
        );


    requestAnimationFrame(
        animate
    );

}


animate();




setInterval(
    () => {

        
        if (
            screens.screen5.classList.contains(
                "active"
            )
        ) {

            fireworkBurst(

                Math.random() *
                window.innerWidth,

                Math.random() *
                (window.innerHeight * .55)

            );

        }

    },
    1800
);

document.addEventListener(
    "click",
    event => {

        if (
            !screens.screen5.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (
            event.target.closest(
                "button"
            )
        ) {

            return;

        }


        fireworkBurst(
            event.clientX,
            event.clientY
        );

    }
);