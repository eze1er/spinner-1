const array = '|/-\\-/|\n';
let count = 1000;
for (const array1 of array) {
  setTimeout(() => {
    process.stdout.write(`\r${array1}  `)
  }, count);
  count += 200
} 