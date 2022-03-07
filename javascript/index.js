// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));*/



// Iteration 1 - using callbacks
 function makeMashedPotatoes()  {
  setTimeout(() => { 
    getInstruction("mashedPotatoes", 0, (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    }, (error) => console.log(error))
  }, 1000)
  setTimeout(() => { 
    getInstruction("mashedPotatoes", 1, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    }, (error) => console.log(error))
  }, 2000)
  setTimeout(() => { 
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
    }, (error) => console.log(error))
  }, 3000)
  setTimeout(() => { 
    getInstruction("mashedPotatoes", 3, (step4) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
    }, (error) => console.log(error))
  }, 4000)
  setTimeout(() => { 
    getInstruction("mashedPotatoes", 4, (step5) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    }, (error) => console.log(error))
  }, 5000)
  setTimeout(() => {     
      document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;   
  }, 6000)
  setTimeout(() => {     
    document.querySelector("#mashedPotatoesImg").removeAttribute('hidden');   
}, 6000) 
}
makeMashedPotatoes()

// Iteration 2 - using promises
// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector('#steak').innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak',  1)
  }).then( (step1) => {
    document.querySelector('#steak').innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak',  2)
  }).then( (step2) => {
    document.querySelector('#steak').innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak',  3)
  }).then( (step3) => {
    document.querySelector('#steak').innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak',  4)
  }).then( (step4) => {
    document.querySelector('#steak').innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak',  5)
  }).then( (step5) => {
    document.querySelector('#steak').innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak',  6)
  }).then( (step6) => {
    document.querySelector('#steak').innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak',  7)
  })
  .then((step7) => {
    document.querySelector('#steak').innerHTML += `<li>Steak is ready!</li>`;   
  })
  .then((img) => {
    document.querySelector("#steakImg").removeAttribute('hidden')
  })

// Iteration 3 using async/await

async function makeBroccoli() {
  for (let i = 0; i < broccoli.length - 1; i++) {
    try {
      const step = await obtainInstruction('broccoli', i)
      document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`    
    } catch(err) {
        console.log('Error!')
    }
    finally {
    }
  }
  document.querySelector('#broccoli').innerHTML += `<li>Broccoli is ready!</li>` 
  const brocImg = document.querySelector('#broccoliImg');
  brocImg.removeAttribute('hidden');  
     //await obtainInstruction(1)
  }
  makeBroccoli()



// Bonus 2 - Promise all
// ...