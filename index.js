// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  
  }
  const gifts = ["teddy bear", "drone", "doll"];
  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      debugger;
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(arrayName,birthMessage){
    let messages=[]
    for(let i=0;i<arrayName.length;i++){
        
        messages.push(`Thank you, ${arrayName[i]}, for the wonderful ${birthMessage} gift!`)
        
       
    }
    console.log(messages)
     return messages
   
       
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")
function countDown(){
  let count=10;
  while(count>-1){
    console.log(count--);

  }
}
countDown()