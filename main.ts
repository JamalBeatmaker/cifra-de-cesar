let tamanho = 0
let cifra = 0
for (let índice = 0; índice <= "CARA".length - 1; índice++) {
    tamanho = "_ABCDEFGHIJKLMNOPQRSTUVXZWY".indexOf("CARA".charAt(índice)) + cifra
    if (tamanho <= 26) {
        basic.showString("_ABCDEFGHIJKLMNOPQRSTUVXZWY".charAt("_ABCDEFGHIJKLMNOPQRSTUVXZWY".indexOf("TESTE".charAt(índice)) + cifra))
        basic.pause(1000)
    } else {
        basic.showString("_ABCDEFGHIJKLMNOPQRSTUVXZWY".charAt("_ABCDEFGHIJKLMNOPQRSTUVXZWY".indexOf("TESTE".charAt(índice))))
        basic.pause(1000)
    }
}
