let text = prompt("Metn daxil edin:");

if (/\d/.test(text)) {
    console.log("Rəqəm var")
} else {
    console.log("Rəqəm yoxdur")
}