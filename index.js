var generator = require('generate-password');

let passwords = generator.generateMultiple(100, {
    length: 10,
    numbers: true,
    uppercase: false,
    excludeSimilarCharacters: true,
    // その他の間違えそうな文字
    exclude: [
        '9q', // 発音が似ている
        'mn', // 発音が似ている
        'bd', // 発音が似ている
    ].join(''),
});

console.log(passwords)