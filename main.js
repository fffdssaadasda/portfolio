let listBar = document.querySelector('.container .page .icones div'),
    mainLinks = document.querySelector('.container .links ul'),
    closeBtn = document.querySelector('.close'),
    nightMode = document.querySelector('.mon'),
    dayMode = document.querySelector('.sun'),
    mode = document.querySelector('.mode'),
    toTop = document.querySelector('span.to-top'),
    projNumber = document.querySelectorAll(".project .project-info")

document.body.classList.add(localStorage.getItem("dark-light"))
if (document.body.classList.contains("dark")) {
    nightMode.classList.add("off")
    dayMode.classList.remove("off")
}
function GetNumberOfProjects() {
    for (let i = 0; i < projNumber.length; i++) {
        let theSpan = document.createElement("h3")
        theSpan.innerHTML = `Project (${i + 1})`
        projNumber[i].prepend(theSpan)
    }
}
GetNumberOfProjects()

window.onscroll = function () {
    this.scrollY >= 200 ? toTop.classList.add('show') : toTop.classList.remove('show');
}
listBar.addEventListener('click', function () {
    listBar.classList.toggle('rotate')
    mainLinks.classList.toggle('on');
})
nightMode.addEventListener('click', () => {
    nightMode.classList.toggle('off')
    localStorage.setItem("dark-light", "dark")
    if (dayMode.classList.contains('off')) {
        document.body.classList.add('dark')
        dayMode.classList.remove('off')
    }
})
dayMode.addEventListener('click', () => {
    dayMode.classList.toggle('off')
    nightMode.classList.toggle('off')
    if (dayMode.classList.contains('off')) {
        document.body.classList.remove('dark')
    }
    if (!document.body.classList.contains("dark")) {
        localStorage.removeItem("dark-light")
    }
})
toTop.onclick = function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
}
console.log(document.body.className)