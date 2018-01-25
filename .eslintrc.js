// module.exports = {
//     "env": {
//         "es6": true,
//         "node": true
//     },
//     "extends": "eslint:recommended",
//     "parserOptions": {
//         "sourceType": "module"
//     },
//     "rules": {
//         "indent": [
//             "error",
//             "tab"
//         ],
//         "linebreak-style": [
//             "error",
//             "unix"
//         ],
//         "semi": [
//             "error",
//             "always"
//         ],
//         "no-console":0,
//         "quotes": [2, "single", { "avoidEscape": true }]
//     }
// };

module.exports = {
    "extends": "airbnb-base",
    "rules": {
      "no-console": 0
    },
    "env": {
      jest: true
    }
};
