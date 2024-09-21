// darkmode
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
})


// dropdown
let visible = false;

function toggle () {
    if(visible) {
        document.getElementById('wochis').style.opacity='0';
        document.getElementById('wochis').style.transform='translateY(-10px)';
        document.getElementById('wochis').style.pointerEvents='none';
        visible = false;
    } else {
        document.getElementById('wochis').style.opacity='1';
        document.getElementById('wochis').style.transform='translateY(0px)';
        document.getElementById('wochis').style.pointerEvents='auto';
        visible = true;
        
    }
}