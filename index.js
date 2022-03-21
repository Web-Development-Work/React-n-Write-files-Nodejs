// const fs = require("fs");
const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");


const fileops = async()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname,'files','starter.txt'))


        await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data)
        await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'),'\n\nNice to meet u')
        await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','promiseComplete.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname,'files','promiseComplete.txt'),'utf8');
        console.log(newData);
        await fsPromises.write
    }catch(err){
        console.error(err);
    }
}

fileops();
// fs.readFile(path.resolve(__dirname, 'files','starter.txt'),"utf8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });


//fs.readFile(path.join(__dirname, 'files','starter.txt'),"utf8",(err,data)=>{
//    if(err) throw err;
//    console.log(data);
//});

console.log("hello.....");


// fs.writeFile(path.join(__dirname, 'files','reply.txt'),"nice to meet u",(err,data)=>{
//     if(err) throw err;
//     console.log("Write complete");
//     fs.appendFile(path.join(__dirname, 'files','reply.txt'),"\n\nYes it is ",(err,data)=>{
//         if(err) throw err;
//         console.log("Append complete")
//         fs.rename(path.join(__dirname, 'files','reply.txt'),path.join(__dirname, 'files','newReply.txt'),(err)=>{
//             if(err) throw err;
//             console.log("Rename complete");
//         });
//     });
// });


// fs.appendFile(path.join(__dirname, 'files','test.txt'),"testing text ",(err,data)=>{
//     if(err) throw err;
//     console.log("Append complete");
// });

// exit on uncauthg error
process.on('uncaughtException',err=>{
    console.error(`There was an uncautght error :${err}`);
    process.exit();
})