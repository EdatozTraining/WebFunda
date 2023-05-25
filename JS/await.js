// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }
  
//   asyncCall();
  

  function add(a,b){
      return a + b    
  }
  //console.log(add(40 , 50))


  async function printName(name) {
    let count = 0, val = 9
    for (let index = 1; index < 1000; index++) {
        for (let j = 1; j <  1000; j++) {
            const element = index * j            
            count++
            val *= index * j
        }
        const element = index**999**99999
    }
    console.log("count: " + count + "; val: ", val)
    console.log(name.toUpperCase())
    // setTimeout(() => {
    //     console.log(name.toUpperCase())
    //           }, 100);

    
    // const result = await add();
    // console.log(result);
    // Expected output: "resolved"
  }
  
  async function run() {
    await printName("edatoz")
    console.log("Run completed")
  }

  run()
  //await printName("aikya") // Syntax Error: await is only valid in async functions and the top level bodies of modules

  console.log("Done")