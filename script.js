let darkmode = localStorage.getItem('dark-mode')
const themeSwitch = document.getElementById('theme-switch')

const  enableDarkmode = () => {
    document.body.classList.add('dark-mode')
    localStorage.setItem('dark-mode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('dark-mode')
    localStorage.setItem('dark-mode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('dark-mode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    if (darkmode =="active") {
        alert("Why are you switching to light mode bro?")
    }
})