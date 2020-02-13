// 1) FCB (Function Call Backs)

// Example 1 - 

function first(){
    console.log(1);
  }
  function second(){
    console.log(2);
  }
  first();
  second();

  // As you would expect, the function first is executed first, and the function second is executed second — logging the following to the console:

  // But what if function first contains some sort of code that can’t be executed immediately? For example, an API request where we have to send the request then wait 2 minutes for a response?

  function first(){
setTimeout( function(){
      console.log(1);
    }, 5000);
  }
function second(){
    console.log(2);
  }
  first();
  second();
  
  // Example 2.........Create our own Callback............//

  
 function hungry(food,callback) {
     console.log(`i'm eating ${food}`)
     callback();
 }

 function thirsty(drink) {
    console.log(`i'm drinking cola`)
  }

  // lets call our function hungry and pass thirsty at the place of callback

 hungry('pizza', thirsty)

// Example 3...........Create our Second Callback.........//


function ex(behavior, callback) {
    console.log(`ex is ${behavior}`)
    callback();
}

function crush() {
    console.log(`crush is awesome`)
}

ex('crazy', crush);


function ex(behavior, callback) {
    if(!behavior) {
        return callback(`ex is ${behavior}`)
    }
}




// Example 3 -

const posts = [
    {title:'post 1: ', body: 'This is a Post One'},
    {title:'post 2: ', body: 'This is a Post Two'},
    {title:'post 3: ', body: 'This is a Post Three'}
];



//.....................Create Posts......................//

 function createPost(post, callback) {
     setTimeout(() => {
     posts.push(post);
     callback();
     },1000)
 }

 function getPost() {
     setTimeout(() => {
         let output = '';
         posts.forEach((post) => {
             output += `<li>${post.title} ${post.body}</li>`
         }) 
         document.body.innerHTML = output;
     },1000);
 }

createPost({title:'post 4: ', body:'This is Post four'}, getPost)





