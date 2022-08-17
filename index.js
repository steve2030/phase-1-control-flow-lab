function scuberGreetingForFeet(someValue){

  // Write your code here!
  if (someValue > 2500) {
    return "No can do.";
   }
 else if (someValue > 2000) {
   return "I will gladly take your thirty bucks.";
   }
 else {
     return "This one is on me!";
   }
 }


function ternaryCheckCity(city){
  // Write your code here!
  let cityValue = city === "NYC" ? "Ok, sounds good." : "No go.";
  return cityValue;
}




function switchOnCharmFromTip(){
  // Write your code here!
  let tip='generous'
  switch (tip) {
    case "generous":
      return 'Thank you so much.';
      break;
    case "not as generous":
      return 'Thank you.';
      break;

    default:
      "thanks for everything";
      return 'Bye.';
  }

}
