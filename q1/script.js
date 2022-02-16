const input = require("fs").readFileSync("stdin", "utf8");
let n = input;
let escada = ''

for (let numeroDoDegrau = n; numeroDoDegrau >= 1; numeroDoDegrau--) {
    for (let i = 1; i <= n; i++ ) {
        if (i < numeroDoDegrau) {
            escada += ' '
        }
        else {
            escada += '*'
        }
    }
    escada += "\n"
}

console.log(escada)