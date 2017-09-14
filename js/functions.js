/**
 * Please provide all your functions in this file.
 */
 
let currentStep = 1;
let maxNumberOfStep = 5;
let maxOfGeneratedNumber = 101;
let generatedNumber = null;

function generateANumber(pMax){
   return Math.floor(Math.random() * pMax);
}

function resetGame(){
   currentStep = 1;
   maxNumberOfStep = 5;
   maxOfGeneratedNumber = 100;
   generatedNumber = generateANumber(maxOfGeneratedNumber);
   console.log('secilen sayi', generatedNumber);
}

function getUserGuess(pText, pMax){
   const girilenSayi = prompt(pText);
   if(girilenSayi > pMax) {
       alert("lutfen 100 un uzerinde rakam girmeyin!");
       return false;
   }

   if(girilenSayi < 0) {
    alert("lutfen 0 in altinda rakam girmeyin!");
    return false;
   }

   return girilenSayi;
}

function feedback(pText){
    alert(pText);
}
