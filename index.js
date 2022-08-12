var generator = require('generate-password');

let passwords = generator.generateMultiple(100, {
    length: 10,
    numbers: true,
    uppercase: false,
    excludeSimilarCharacters: true,
});

console.log(passwords)