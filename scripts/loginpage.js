let bgdirectory = null;

window.onload = () => {
    let bgurl = chrome.runtime.getURL('/images/character_bg.png')
    let loginpage = document.querySelector(".loginpage");
    loginpage.style.background = `url('${bgurl}') no-repeat center`
    loginpage.style.backgroundSize = "cover";

    let loginForm = document.querySelector(".col-login-person")
    loginForm.style.border = "solid 1px white"
    document.querySelector(".col-login-person").style.background = "black"

    let loginBtn = document.querySelector(".submitform > input")
    loginBtn.style.background = "black"
    loginBtn.style.border = "solid 1px white"
    loginBtn.style.color = "white"

    document.querySelector(".col-notice > h3").style.color = "white"
    document.querySelector(".col-notice").style.background = "black"
    document.querySelector(".col-notice").style.border = "solid 1px white"
    document.querySelectorAll(".col-notice > ul > li > a").forEach((e) => e.style.color = "white")
    
    document.querySelector(".col-family > ul").style.background = "black"
    document.querySelector(".col-family > ul").style.border = "solid 1px white"

    document.querySelectorAll(".col-buttonset > .col-button > a").forEach(e => {
        e.style.background = "black"
        e.style.border = "solid 1px white"
        e.addEventListener("mouseenter", () => {
            e.style.color = "black"
            e.style.background = "white"
        })
        e.addEventListener("mouseleave", () => {
            e.style.background = "black"
            e.style.border = "solid 1px white"
            e.style.color = "white"
        })
    })

    document.querySelectorAll(".textform > input").forEach(e => {
        e.style.backgroundColor = "black"
        e.style.border = "solid 1px white"
        e.style.color = "white"
    })
    
    document.querySelector("#page-footer").style.backgroundColor = "black"
    document.querySelector("#page-footer").style.border = "solid white"
    document.querySelector("#page-footer").style.borderWidth = "1px 0px 0px 0px"
    

    loginBtn.addEventListener("mouseenter", () => {
        loginBtn.style.color = "black"
        loginBtn.style.background = "white"
    })
    loginBtn.addEventListener("mouseleave", () => {
        loginBtn.style.background = "black"
        loginBtn.style.border = "solid 1px white"
        loginBtn.style.color = "white"
    })

    
}