const { readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
  
    const second = result

    writeFile('./content/sec.txt','erfvrsdvsdvvvvvvvvvv'+second,(err,result) => {
        if(err){
            console.log(err)
            return
        }
        console.log(result)
    })
})
