function scuberGreetingForFeet(number){
  if (number<=400) {
    return 'This one is on me!'
  }
  else if (number > 400 && number < 2000) {
    return 'That will be twenty bucks.'
  }

  else if  (number > 2000 && number <2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (number > 2500) {
    return 'No can do.'
  }
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);



function ternaryCheckCity(city) {
  return (city === 'NYC' ? "Ok, sounds good." : "No go.");
}
ternaryCheckCity('NYC');

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
    return 'Thank you so much.';
    break;
  case 'not as generous':
  return 'Thank you.'
  case 'thanks for everything' :
  return 'Bye.'
  break;
  } 
}
switchOnCharmFromTip(generous);
switchOnCharmFromTip(notasgenerous);
switchOnCharmFromTip('thanks for everything');
