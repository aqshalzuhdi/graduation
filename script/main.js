// Import the data to customize and insert them into page
const fetchData = () => {
    fetch("data.json")
        .then(data => data.json())
        .then(data => {
            dataArr = Object.keys(data);
            dataArr.map(customData => {
                if (data[customData] !== "") {
                    // if(customData.indexOf("text") !== -1) {
                    //     document.querySelector(`[data-node-name="${customData}]`).value = data[customData];
                    // }

                    if (customData === "imgSender") {
                        document
                            .querySelector(`[data-node-name="${customData}"]`)
                            .setAttribute("src", data[customData]);
                    } else {
                        document.querySelector(`[data-node-name*="${customData}"]`).innerHTML = data[customData];
                    }
                }

                // Check if the iteration is over
                // Run amimation if so
                if (dataArr.length === dataArr.indexOf(customData) + 1) {
                    animationTimeline();
                }
            });
        });
};

function scrollToBottom() {
    const dom = document.getElementById("card");
    dom.scrollTo({
        top: dom.scrollHeight,
        behavior: 'smooth'
    });
}

// Animation Timeline
const animationTimeline = () => {
    // Spit chars that needs to be animated individually
    const textShowBalloon = document.getElementsByClassName("typing-show-balloon")[0];
    const textOpenCard = document.getElementsByClassName("typing-open-card")[0];
    const textName = document.getElementsByClassName("fullname")[0];
    const textClosingMsg2 = document.getElementsByClassName("msg-2")[0];
    // const grad = document.getElementsByClassName("wish-grad")[0];

    textShowBalloon.innerHTML = `<span>${textShowBalloon.innerHTML
        .split("")
        .join("</span><span>")}</span`;
    textOpenCard.innerHTML = `<span>${textOpenCard.innerHTML
        .split("")
        .join("</span><span>")}</span`;
    textName.innerHTML = `<span>${textName.innerHTML
        .split("")
        .join("</span><span>")}</span`;
    textClosingMsg2.innerHTML = `<span>${textClosingMsg2.innerHTML
        .split("")
        .join("</span><span>")}</span`;

    // grad.innerHTML = `<span>${grad.innerHTML
    //     .split("")
    //     .join("</span><span>")}</span`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg",
        display: "block",
    };

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg",
        display: "block"
    };

    const tl = new TimelineMax();

    tl
    .staggerTo(".container-greeting", 0.1, {visibility: "visible", display: "block"})
    .staggerTo(".sec-one", 0.1, {visibility: "visible", display: "block"})
    .from("h1 .one", 1, {
        opacity: 0,
        y: 10,
    })
    .to(".one .name", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    })
    .staggerTo(".fullname span",
        0.5,
        {
            visibility: "visible",
            display: "unset"
        },
        0.05
    )
    .to(".sec-one",
        0.5,
        {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
        "+=0.7"
    )
    .staggerTo(".sec-one", 0.1, {visibility: "hidden", display: "none"}, 0.5, "+=2")
    .staggerTo(".sec-two", 0.1, {visibility: "visible", display: "block"})
    .from(".show-balloon .fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0
    })
    .to(".text-box.show-balloon", 0, {
        padding: "10px"
    })
    .staggerTo(".typing-show-balloon span",
        1,
        {
            visibility: "visible",
            display: "unset"
        },
        0.05
    )
    .to(".show-balloon .fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)"
    })
    .to(".sec-two",
        0.5,
        {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
        "+=0.7"
    )
    .staggerTo(".sec-three", 0, {visibility: "visible", display: "block"})
    .staggerTo(".sec-two", 0.1, {visibility: "hidden", display: "none"}, 0.5, "+=0.1")
    .staggerTo(".sec-four", 0.1, {visibility: "visible", display: "flex"})
    .from(".sec-four", 0.4, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0
        },
        "+=0.5"
    )
    .to(".sec-four .smiley",
        0.5,
        {
            rotation: 90,
            // x: 8
        },
        "+=1"
    )
    .staggerFromTo(".baloons img",
        2.0,
        {
            opacity: 0.9, 
            y: 1400
        },
        {
            opacity: 1,
            y: -1000
        },
        0.2
    )
    .staggerTo(".sec-four", 0.1, {visibility: "hidden", display: "none"}, 0.5, "+=2")
    .staggerTo(".sec-five", 0.1, {visibility: "visible", display: "block"})
    .from(".open-card .fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0
    })
    .to(".text-box.open-card", 0, {
        padding: "10px"
    })
    .staggerTo(".typing-open-card span",
        0.5,
        {
            visibility: "visible",
            display: "unset"
        },
        0.05
    )
    .to(".open-card .fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)"
    })
    .to(".sec-five",
        0.5,
        {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
        "+=0.7"
    )
    .staggerTo(".sec-five", 0.1, {visibility: "hidden", display: "none"}, 0.5, "+=2")
    // .staggerTo(".sec-six", 0.1, {visibility: "visible", display: "block"})
    // .staggerTo(".sec-two", 0.1, {visibility: "hidden", display: "none"}, 0.5, "+=2")
    // .to(
    //     ".sec-one",
    //     0.7,
    //     {
    //         opacity: 0,
    //         y: 10
    //     },
    //     "+=2.5"
    // )
    // .to(
    //     ".sec-two",
    //     0.7,
    //     {
    //         opacity: 0,
    //         y: 10
    //     },
    //     "-=1"
    // )
    // .to(".sec-one", 1, {
    //         opacity: 0,
    //         y: 10,
    //     }
    // )
    // // .staggerTo(".sec-two", 1, {visibility: "visible", display: "block"}, 0.5, "+=2")
    // .to(".sec-two", 1, {
    //         opacity: 0,
    //         y: 10,
    //     }
    // )
    // .to(".container-greeting", 0.1, {visibility: "hidden", display: "none"}, 0.5, "+=2")
    // .call(function() {
    //     document.getElementById("greeting").classList.remove("d-flex");
    //     document.getElementById("greeting").classList.add("d-none");
    // })
    // .staggerTo(".container-card", 0.1, {visibility: "visible", display: "block"})
    // .to(".container-card", 0.6, {
    //         visibility: "visible",
    //     },
    //     0.5,
    //     "+=1"
    // )
    .to(".container-greeting", 0.1, {visibility: "hidden", display: "none"}, 0.5, "+=0.5")
    .call(function() {
        document.getElementById("greeting").classList.remove("d-flex");
        document.getElementById("greeting").classList.add("d-none");
    })
    .staggerTo(".container-chat", 0.1, {visibility: "visible", display: "block"})
    .from(".container-chat", 0.3, {
            scale: 0.2,
            opacity: 0
        },
    )
    // .to(".container-chat",
    //     0.5,
    //     {
    //         scale: 0.2,
    //         opacity: 0,
    //         y: -150
    //     },
    //     "+=0.7"
    // )
    .staggerTo(".user_info p", 0.1, { visibility: "visible", display: "block" })
    .staggerTo(".first", 0.1, { visibility: "visible", display: "block" })
    .from(
        ".msg_cotainer.one",
        0.2,
        {
            opacity: 0,
            y: 10
        },
        "+=2"
    )
    .call(function() { scrollToBottom(); })
    .staggerTo(".user_info p", 0.2, { display: "none" })
    .staggerTo(".user_info p", 1, { display: "block" }, 0.5, "+=1")
    .staggerTo(".second", 0.1, { visibility: "visible", display: "block" })
    .from(
        ".msg_cotainer.two",
        0.5,
        {
            opacity: 0,
            y: 10
        },
        "+=2"
    )
    .call(function() { scrollToBottom(); })
    .staggerTo(".user_info p", 0.2, { display: "none" })
    .staggerTo(".user_info p", 3, { display: "block" }, 0.5, "+=1")
    .staggerTo(".third", 0.1, { visibility: "visible", display: "block" })
    .from(
        ".msg_cotainer.three",
        0.5,
        {
            opacity: 0,
            y: 10
        },
        "+=2"
    )
    .call(function() { scrollToBottom(); })
    .staggerTo(".user_info p", 0.2, { display: "none" })
    .staggerTo(".user_info p", 3, { display: "block" }, 0.5, "+=1")
    .staggerTo(".fourth", 0.1, { visibility: "visible", display: "block" })
    .from(
        ".msg_cotainer.four",
        0.5,
        {
            opacity: 0,
            y: 10
        },
        "+=2"
    )
    .call(function() { scrollToBottom(); })
    .staggerTo(".user_info p", 0.2, { display: "none" })
    .staggerTo(".user_info p", 3, { display: "block" }, 0.5, "+=1")
    .staggerTo(".fifth", 0.1, { visibility: "visible", display: "block" })
    .from(
        ".msg_cotainer.five",
        0.5,
        {
            opacity: 0,
            y: 10
        },
        "+=2"
    )
    .call(function() { scrollToBottom(); })
    .staggerTo(".sixth", 0.1, { visibility: "visible", display: "block" })
    .call(function() { scrollToBottom(); })
    .staggerTo(".user_info p", 0.2, { display: "none" })
    .from(".container-chat", 3, {visibility: "hidden", display: "none"}, 2, "+=0.5")
    .call(function() {
        setTimeout(() => {
            document.getElementById("chat").classList.remove("d-flex");
            document.getElementById("chat").classList.add("d-none");
        }, 6000);
    })
    .staggerTo(".container-closing", 7, {visibility: "visible", display: "block"})
    .staggerTo(".closing-one", 0.5, {visibility: "visible", display: "block"})
    .from("h1 .one", 1, {
        opacity: 0,
        y: 10,
    })
    .staggerTo(".msg-2 span",
        0.5,
        {
            visibility: "visible",
            display: "unset"
        },
        0.05
    )
    .to(".closing-one",
        0.5,
        {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
        "+=0.7"
    )
    .staggerTo(".closing-one", 0.1, {visibility: "hidden", display: "none"}, 0.5, "+=2")
    .staggerTo(".closing-two", 0.1, {visibility: "visible", display: "block"})
    .from(".closing-two p", 0.2, {
        opacity: 0,
        y: 5,
    })
    .to(".closing-two",
        0.5,
        {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
        "+=5"
    )
    .staggerTo(".closing-two", 0.5, {visibility: "hidden", display: "none"}, 2, "+=0.5")
    .staggerTo(".closing-three", 3, {visibility: "visible", display: "block"})
    .staggerFrom(".closing-three p", 1, ideaTextTrans, 1.2)
    .to(
        ".last-smile",
        0.5,
        {
            rotation: 90
        },
        "+=1"
    );

    // // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        location.reload();
    });
};

// Run fetch and animation in sequence
fetchData();