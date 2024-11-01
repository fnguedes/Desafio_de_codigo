
function findPattern(texto) {
   quantA = 0
   for (i = 0; i < texto.length; i++) {
      if (texto[i] === 'a' || texto[i] === 'A') {
         quantA++
      }
   }
   if (quantA === 0) {
      console.log("Não existe a no texto")
   } else {
      console.log(`Existem ${quantA} 'a' no texto`)
   }
}

texto = "fyugqi boeaiqoabdvqbiofxrtqsyiqA"

findPattern(texto)
