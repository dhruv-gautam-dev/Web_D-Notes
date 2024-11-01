/**DOM Manipulation */
//  One of the most fundamental use-case of jS is able to manipulate and control DOM (Document Object Model).

/**Meaning of DOM manipulation  */
//  JS should be able to control what element are added / removed to DOM  and how they behave in terms of user interaction, How their look and feel and everything else related to html element.

/**How to Achieve a DOM Manipulation */
//  Our browsers are provide a lot of function and objects through which we can control the whole DOM 
//  These function are not native to js and they are provided by the browsers at runtime Environment.
//  Some of the most important function are :
//     1. document.getElementById()
//     2. document.querySelector()
//     3. document.getElementByClassName().



/**How to add jS in html Document */
//  1.Use Script tag at the end of body 
//  2.Using Script file and then link it to html page 

/* Code {Adding Js using Script tag}
    <body>
      <h1> YOUR TIER LIST</h1>

      <form>
        <label for="tier" >Tier</label>
        <input type="text" id="tier" name="tier">
        <br>
        <input type="submit" value="submit">
      </form>
      <script>
        console.log("Hello");
        console.log("I am in script tag")
        </script>
    </body>
*/
// Adding Js Directly in html can lead to less readability of code, Hence this is not always prefer

/**Code 
<body>
    <h1> YOUR TIER LIST</h1>

    <form>
      <label for="tier" >Tier</label>
      <input type="text" id="tier" name="tier">
      <br>
      <input type="submit" value="submit">
    </form>
    
      <script src="script.js"></script>   {Adding js by linking a separate file Using Script tag}
  </body>
 */
//Script tag use "Src" attribute which link the js file to html page 


/**Event driven programme */
//Events are some action or interaction done by external user 
//  So react on these action we can write logics, which will only execute when these action are triggered
//  The programming paradigm where the logic response to these event is called event driven programming.

/**<Element>.addEventListener*/
//

/**How to select or target element using js */
//in CSS we can use id Selector, class Selector, tag Selector for selecting an element 

/*Code
#tier{
    background-color: red;
  }
*/

/* global object Document */
//  browsers provide this object and is globally present in every browsers js called as document
//  help us to access DOM
//  Has access to HTMl element.
//  it contains a lot of method and properties using which we can manipulate DOM

//in js we can use these tagName idName, also as :  document.getElementById() , document.getElementsByClassName() , document.getElementsByTagName() for selecting an element
//document.getElementById(): takes one argument i.e id of the element that we are targeting to access HTML element and manipulate it.

  /**code
   * const x = document.getElementById("tier");
   * <input type=​"text" id=​"tier" name=​"tier" placeholder=​"Enter your Tier Here">​
   */

// by using value attribute we can get the input written inside the element
//for example:  x.value { access the value attribute of tag }
//X.textContent: {give the input written in x element  }.


// Sometimes we might have to fetch the text written inside a div, paragraph, button etc, in those cases, value doesn't help us because value is generally used to fetch the value of different input tags. if we want to fetch the text written inside the element then we can use textContent property to get and set the text of particular HTML element

/**Browser object model */
//  this allow running js inside the browser to access a lot of browser related feature ,like the url bar , window frame, reload button etc.
//  in this object we have one object called 'window'. which is globally available across the js running in the browser.
//  we can access the following using this window object :
//  1.Navigator
//  2.Location
//  3.History
//  4.Screen
//  5.Url bar
//  6.Reloader
//  and More...

/**Methods of window object */
//  1.window.document: it will provide you the access to document object of our DOM.
//  2.window.location : return a location object which have lot of properties which are related to our current url present in the address bar ,
//      for ex:
//              window.location.href ,, returns the complete address written in the address bar.
//              window.location.href ='https://wwww.yahoo.com' ,, it refresh your current page to yahoo 
//              window.open : by passing a url it opens the page to us.
//              window.close(): this will close the current tab in window.
//              timers: it also contains important timers methods like 'setTimeout' and 'setInterval'
//              window.addEventListener: we can add event listener to window object as well.
//              window.alert(): this creates an popup alert on a present tab.
//              window.confirm(): this also creates a new popup but this popup as a cancel or ok button , and return true if its ok and false it its cancel . 
//  we can use the window object navigator property this will return us the coordinates
//  we can access web cam and other devices of the user by using window object.
//  can access browsers storages 
//  can access cpu.
//  Note: if we are try to access this in the browsers console it return the window object only showing the scope in which all this is working is of the window object  