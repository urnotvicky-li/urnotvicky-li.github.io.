// chinese font from adobe 
(function(d) {
  var config = {
    kitId: 'owy4qqq',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

// prints a message in the browser's dev tools console
console.log("hello");

// click anywhere on the page, emoji will shows up
// the description also will shows up

// emoji description 
// array with initial values

var emojiContainer = document.querySelectorAll(".emoji-container");
emojiContainer.forEach((emoji)=>{
  emoji.style.left = (60*Math.random())+'%';
  emoji.style.top=(60*Math.random()) +'%';//change the scale of where the emoji show up
  emoji.style.display = "none";
})

var randomEmoji = [];
index = 0;
randomEmoji[0] = 'emoji1';
randomEmoji[1] = 'emoji2';
randomEmoji[2] = 'emoji3';
randomEmoji[3] = 'emoji4';
randomEmoji[4] = 'emoji5';
randomEmoji[5] = 'emoji6';
randomEmoji[6] = 'emoji7';
randomEmoji[7] = 'emoji8';
randomEmoji[8] = 'emoji9';
randomEmoji[9] = 'emoji10';
randomEmoji[10] = 'emoji11';
randomEmoji[11] = 'emoji12';
randomEmoji[12] = 'emoji13';
randomEmoji[13] = 'emoji14';
randomEmoji[14] = 'emoji15';
randomEmoji[15] = 'emoji16';
randomEmoji[16] = 'emoji17';
randomEmoji[17] = 'emoji18';
randomEmoji[18] = 'emoji19';
randomEmoji[19] = 'emoji20'; 
randomEmoji[20] = 'emoji21';
//add more Emojis here

document.querySelector('p').addEventListener("click",showEmoji); //change where to click to trigger the event

function showEmoji(){       
    
    console.log(randomEmoji.length);
      
    document.querySelector("."+randomEmoji[index]+"").style.display = "block";

    // if you want emoji randomly show up
// index = Math.floor(Math.random() * randomEmoji.length); 
    index = index + 1;
    
    return index;
}

// drag 
var dragItems = document.querySelectorAll(".emoji-container");
   var container = document.querySelector(".emoji-box");
    dragItems.forEach((dragItem)=>{
    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    dragItem.addEventListener("touchstart", dragStart, false);
    dragItem.addEventListener("touchend", dragEnd, false);
    dragItem.addEventListener("touchmove", drag, false);

    dragItem.addEventListener("mousedown", dragStart, false);
    dragItem.addEventListener("mouseup", dragEnd, false);
    dragItem.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target === dragItem) {
        active = true;
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;

      active = false;
    }

    function drag(e) {
      if (active) {
      
        e.preventDefault();
      
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }

  });
   
// clear emoji button 
function myFunction() {
  if (emojiContainer.length > 0) {
    emojiContainer.forEach((e)=>{
      e.style.display = "none";
      index = 0;
    })
  
  }
  }