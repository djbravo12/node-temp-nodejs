const { readFile, writeFile } = require("fs");

// const first = readFileSync('./modules/text.txt', 'utf8')
// const second = readFileSync('./modules/text2.txt', 'utf8')

// console.log(first);

readFile('./modules/text.txt', "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    const first = result
    readFile('./modules/text2.txt', "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(result);
        const second = result
        writeFile('./modules/newfile.txt', `first ${first} and second ${second}`, { flag: 'a' }, (err, result) => {
            if (err) {
                console.log(err);
                return

            }
            console.log(result);
        })
    })
})


// writeFileSync('./modules/wews.txt', `${first} and ${second} `, { flag: 'a+' })