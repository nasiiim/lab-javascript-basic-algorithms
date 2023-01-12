

const hacker1 = "john"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "sarah"
console.log(`The navigator's\    name\   is ${hacker2} `)


if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}



let newDriversName = "";
for(let i=0; i < hacker1.length; i++) {
  newDriversName += hacker1[i].toUpperCase() + " ";
}
console.log(newDriversName.trim());



let newNavigator = ""
for(let i= hacker2.length - 1; i >= 0 ; i--){
  newNavigator += hacker2[i]
}


function detectLexicographicalOrder(driver: string, navigator: string) {
  if (driver !== navigator) {
    let nameList = [];
    nameList.push(driver, navigator);
    nameList.sort();
    if (nameList[0] === driver) {
      console.log("The driver's name goes first.");
    } else if (nameList[0] === navigator) {
      console.log("Yo, the navigator goes first definitely.");
    }
    console.log(nameList);
  } else {
    console.log("What?! You both have the same name?");
  }
}

detectLexicographicalOrder(hacker1, hacker2);


const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus, dolor id gravida mollis, nisi augue feugiat turpis, non suscipit nunc lectus in leo. Aliquam erat volutpat. Morbi vel molestie nisl. Pellentesque convallis quis urna ac elementum. Duis aliquet nulla sit amet urna blandit, accumsan mattis ante consequat. Integer libero urna, hendrerit sed leo bibendum, congue lacinia nibh. Vestibulum elementum erat eu elit hendrerit pulvinar. Sed vel lobortis lacus.Aenean consectetur varius nulla sit amet molestie. Vivamus ullamcorper turpis blandit odio condimentum, in tempor sem sagittis. Morbi id metus aliquam, aliquam nisl id, posuere lacus. Ut consequat odio eget eleifend tincidunt. Morbi justo metus, tristique ut sem eget, dictum iaculis velit. Aliquam et neque ut ante posuere gravida et eu ante. Pellentesque arcu odio, vulputate at leo id, pulvinar interdum enim. Praesent vestibulum dignissim diam non faucibus. Nam et risus quis eros vestibulum mattis. Nunc et elit magna.Aliquam faucibus ante ut orci lacinia convallis. In hac habitasse platea dictumst. Proin dignissim aliquam magna a convallis. Sed accumsan felis ut dui venenatis, in scelerisque nibh interdum. Etiam est eros, posuere nec arcu a, gravida molestie nunc. Suspendisse ultricies odio ultrices eros aliquet, eu tristique neque faucibus. Integer nec velit vitae nisi fringilla tempus. Donec a pharetra dolor. Mauris et magna eros. Proin quis malesuada turpis, non faucibus quam. In a bibendum lacus. Integer ut mauris diam. Ut sit amet pellentesque urna. Curabitur magna nisi, maximus nec orci et, fermentum malesuada nisl."




function countWords(str: string) {
  str = str.replaceAll(/\,|\.|;/g,'')
  const arr = str.split(' ');
  return arr.filter(word => word !== '').length;
}
console.log(countWords(longText))


function countWord(str: string) { 
  str = str.replaceAll(/\,|\.|;/g,'')
  const arr = str.split(' ');
  const countET = arr.filter(word => word === 'et').length;
  return countET
}
console.log(countWord(longText))


  
 let phraseToCheck = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus, dolor id gravida mollis, nisi augue feugiat turpis, non suscipit nunc lectus in leo. Aliquam erat volutpat."


  
        
    
    
    function checkPalindrome(string) {

    const arrayValues = string.split('');
    
    const reverseArrayValues = arrayValues.reverse();
    
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

const string = prompt(phraseToCheck);

checkPalindrome(string);
  

