for (let i = 0; i <= 100; i++) {
   let output = '';
   if (i % 3 === 0) {
      output += 'Apa'
   }
   if (i % 5 === 0) {
      output += 'Bole'
   }
   if (output === '') {
      output = i.toString()
   }
   process.stdout.write(output + ' ')
}