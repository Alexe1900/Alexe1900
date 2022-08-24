const Language = require("../structures/Language");
const engLevel = require("./eng-level");

module.exports = [
    new Language('Russian', '⭐⭐⭐⭐⭐'),
    new Language('Ukrainian', '⭐⭐⭐⭐⭐'),
    new Language('English', `⭐⭐⭐⭐⭐ (_**${engLevel}**_)`),
    new Language('German', '⭐⭐⭐'),
];