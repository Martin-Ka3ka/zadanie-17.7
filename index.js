var fs = require('fs');


function readContent(path) {
    path = path || '.';
    fs.readdir(path, writeData)

    function writeData(err, files) {
        if (err) {
            console.log(err);
        } else {
            var data = files.join('\n');
            fs.writeFile('content.txt', data, function (err) {
                if (err) console.log(err);
            })
        }
    }

}

readContent();


