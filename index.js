const { getFirestore, collection,query, where, getDocs ,updateDoc,addDoc} =require('firebase/firestore/lite');
const firebase = require( 'firebase/app');
const { Expo } = require('expo-server-sdk');
const expo = new Expo();

const express = require('express');
const ap = express();
const port = process.env.PORT||3000; // Choose a suitable port number
ap.use(express.json()); // Parse JSON bodies
ap.use(express.urlencoded({ extended: true })); 

const puppeteer=require('puppeteer');
const e = require('express');




const firebaseConfig = {
  apiKey: "AIzaSyC1PR7gTdV6oJIBnVP2ZdCljKtVz--r0kk",
  authDomain: "hosp-39dcb.firebaseapp.com",
  projectId: "hosp-39dcb",
  storageBucket: "hosp-39dcb.appspot.com",
  messagingSenderId: "706032090768",
  appId: "1:706032090768:web:f81a9c42b1eaf773956215",
  measurementId: "G-6WYMCLPFFB"
};
firebase.initializeApp(firebaseConfig);
const app=firebase.getApp();
// Get a reference to the Firestore object
const db = getFirestore(app);
const users=collection(db,"user")






















async function send(doclist,page,i,j ){

console.log(doclist.length)
console.log(j)
if(doclist.length==j){
 await page.close()
return;
}
doc=doclist[j];
 j++;
const username =doc.data().user

const password= doc.data().password;
const url = 'https://mail.guc.edu.eg/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.guc.edu.eg%2fowa%2f", true)'; // Replace with the desired URL


// Clear the cookies and cache of the page


 await page.goto(url);

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});
await page.evaluate( () => document.getElementsByName('username')[0].value = "")
await page.evaluate( () => document.getElementsByName('password')[0].value = "")
await page.type('input[name="username"]', username);
await page.type('input[name="password"]', password);
try{
 await page.evaluate(() => {
    const signinButton = document.querySelector('.signinbutton'); // Replace with your desired class name
    if (signinButton) {
      signinButton.click();
    }
  });
await
 page.
waitForNavigation
();
  
console
.
log
(
'New Page URL:'
, page.
url
());


if(page.url.toString()=='https://mail.guc.edu.eg/owa/auth/logon.aspx?url=https%3a%2f%2fmail.guc.edu.eg%2fowa%2f%2522%2c%2520true)&reason=2'){

console.log('here')
throw new Error()
}


  // Print the status and text
  
;
await page.goto('https://mail.guc.edu.eg/owa/');

var aElements 
try{

 aElements = await page.$$('td');
}catch(err){






console.log('here');

await send(doclist,page,0,j)
return;




}

var doit=true;
// Loop through the array and print the href attribute of each link
aElements.forEach(async (aElement)=>{

  const href = await aElement.evaluate(el => el.getAttribute('class'));

if(i==4&&href==='frst'&&doit){

doit=false

  var not=false;


if(!doc.data().lastmail){



await updateDoc(doc.ref,{lastmail:await aElement.evaluate(e1=>e1.textContent)})







}




else{



    if(doc.data().lastmail!=await aElement.evaluate((e1)=>e1.textContent)){

await updateDoc(doc.ref,{lastmail:await aElement.evaluate((e1)=>e1.textContent)})
not=true;


    }
}






if(not){

const messages=[];
   messages.push({
      to: doc.data().token.data,
      sound: 'default',
      title: 'New mail',
      body: await aElement.evaluate((e1)=>e1.textContent)
    });



  const chunks = expo.chunkPushNotifications(messages);

  for (let chunk of chunks) {
    try {
      const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
      console.log('Push notification sent successfully:', ticketChunk);
    } catch (error) {
      console.error('Error sending push notification:', error);
    }
  }
}
    

await page.evaluate(async () => {
    const signinButton = document.getElementById('lo'); // Replace with your desired class name
    if (signinButton) {
     await signinButton.click();
      console.log('h')
    }
  });

  await page.waitForNavigation();

  await send(doclist,page,0,j)













}



if(href==='frst'){

i++;


}





})



}catch(err){
  console.error(err)

await send(doclist,page,0,j)









}

;






























}


ap.get('/',async (req,res)=>{

 const q = query(collection(db, "mail"), where("password", "!=", ""));
const querySnapshot = await getDocs(q);
const browser =  await puppeteer.launch({
 
    args: ['--no-sandbox','--incognito'],
  })
  var j=0;
 const page=await browser.newPage()
 page.setDefaultTimeout(6000)
  await send(querySnapshot.docs,page,0,0);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ;}
  
  
  
  
  
  )

  // Start the server
ap.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
