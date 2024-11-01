
function fibonacci(num) {
   first = 0; second = 1

   if (first === num)
      return true
   while (second <= num) {
      if (second === num)
         return true
      second = first + second
      first = second - first
   }

   return false
}

num = 13
console.log(fibonacci(num))