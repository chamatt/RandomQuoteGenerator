var quoteUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";


var color= [
  {
    'id':'0',
    'color1':'#1AD6FD',
    'color2':'#1D62F0'
  },
  {
    'id':'1',
    'color1':'#52EDC7',
    'color2':'#5AC8FB'
  },
  {
    'id':'2',
    'color1':'#FF5E3A',
    'color2':'#FF2A68'
  },
  {
    'id':'3',
    'color1':'#5AD427',
    'color2':'#A4E786'
  },
  {
    'id':'4',
    'color1':'#FF4981',
    'color2':'#FF4981'
  },
  {
    'id':'5',
    'color1':'#D1EEFC',
    'color2':'#D1EEFC'
  },
  {
    'id':'6',
    'color1':'#5856D6',
    'color2':'#5856D6'
  },
  {
    'id':'7',
    'color1':'#F7F7F7',
    'color2':'#F7F7F7'
  }
  
];
/*var quoteAPI = [
  {
    'id':0,
    'text':'“Don\'t cry because it\'s over, smile because it happened.”',
    'author':'Dr. Seuss'
  },
  {
    'id':1,
    'text':'“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”',
    'author':'Marilyn Monroe'
  },
  {
    'id':2,
    'text':'tefdfdfd a aaaaaaaa ljadkf',
    'author':''
  },
  {
    'id':3,
    'text':'ahfdjakjlh  a fkjkldf  fkjdjkfhndsjff',
    'author':''
  },
  {
    'id':4,
    'text':'loreoroeorer  fikfjfkjdkff',
    'author':''
  }
];
*/
var text="";
var textcache="";
var author="";
var element = "";

function changeColor(){
  console.log("color", color);
  var min = 0;
  var max = Object.keys(color).length;
  var random = (Math.floor(Math.random() * (max - min)) + min);
  var cor = color.filter(function(val){
    return (val.id == random);        
  });
  console.log("cor", cor);
  var cor1 = cor[0].color1;
  console.log("cor1", cor1);
  var cor2 = cor[0].color2;
  console.log("cor2", cor2);
  $("#outer").css("background","linear-gradient(" + cor1 + "," + cor2 + ")");
}




var getjson = function(quote){
      text = quote.quoteText;
      if(textcache == text){
        console.log("enter");
      $.getJSON(quoteUrl, getjson);
    }
      author = quote.quoteAuthor;
      if(author === "")
      {
        author = "Unknown";
      }
      
      $("#quote").html("<p>"+ text +"</p>");
      $("#author").html(author);
} 



function CopyClipboard(){ //This is the only thing that i'm not a creator of. Got it from the internet, as i couldnt figure out how to do it.
  // creating new textarea element and giveing it id 't'
  let t = document.createElement('textarea');
  t.id = 't';
  // Optional step to make less noise in the page, if any!
  t.style.height = 0;
  // You have to append it to your page somewhere, I chose <body>
  document.body.appendChild(t);
  // Copy whatever is in your div to our new textarea
  t.value = document.getElementById('quote').innerText;
  // Now copy whatever inside the textarea to clipboard
  let selector = document.querySelector('#t');
  selector.select();
  document.execCommand('copy');
  // Remove the textarea
  document.body.removeChild(t);
}


function alertUserClipboard(){ //tells the user the quote has been copied.
  var cpyconfirm = document.createElement('P');
        var textnode = document.createTextNode("Quote has been copied to clipboard!")
        cpyconfirm.appendChild(textnode);
        cpyconfirm.className = "cpyconfirm";
        quotecon = document.getElementById("quotecontainer");
        quotecon.appendChild(cpyconfirm);
        var remove = function(){
            quotecon.removeChild(cpyconfirm);
        };
        setTimeout(remove, 500);
}


$(document).ready(function(){
    $.getJSON(quoteUrl, getjson);
    
    $("#genquote").on("click",function(){
    textcache = text;
    $.getJSON(quoteUrl, getjson);
    changeColor();
    });
    
    $("#tweet").on("click", function(){
    window.open("https://www.twitter.com/intent/tweet?text=" + text + " - " + author + " https://goo.gl/pBSyTc", "_blank");
    });
    
    $("#clipboard").on("click", function(){
        CopyClipboard();
        alertUserClipboard();
    });
});




  
  
  
    //alternative method using my own JSON
   /*
    var min = 0;
    var max = Object.keys(quoteAPI).length;
    console.log("max", max);
     var random = (Math.floor(Math.random() * (max - 1 - min)) + min);
      var quote = quoteAPI.filter(function(val){        
        console.log("random", random);
        return (val.id == random);        
      });
    console.log("quote object", quote);
      html = quote[0].text;
      var author = quote[0].author;
      console.log(html);
      $("#quote").html(html + '<br><p class="author">' + author + '</p>');*/
