function latefunction(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
    console.log("late");
    resolve();
  },2000)
  });
}


async function main(){
console.log("123");
await latefunction();
console.log("456");
  
};

main();