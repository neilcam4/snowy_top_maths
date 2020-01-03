showTicks = () => {
    document.getElementById("tick").style.visibility = "visible";
    document.getElementById("msg").style.visibility = "visible";
    document.getElementById("msg").textContent = " Well done! 20 points";
    correct ++;
    }

    module.exports = showTicks;