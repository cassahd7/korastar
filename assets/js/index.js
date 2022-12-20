

//<![CDATA[
var tglbtn = document.getElementById("nav-toggle");
var navlst = document.getElementById("nav-list")
tglbtn.addEventListener('click', () => {navlst.classList.toggle("active");});
//]]>
//<![CDATA[
// grab all the buttons
let Buttons = document.querySelectorAll(".tabs-nav button");

// loop through the buttons using for..of 
for (let button of Buttons) {

 // listen for a click event 
 button.addEventListener('click', (e) => {
  // Store the event target in a const
  const et = e.target;

  // select active class
  const active = document.querySelector(".active");

  /* when a button is clicked, remove the active class 
from the button that has it */
  if (active) {
    active.classList.remove("active");
   }

  // Add active class to the clicked element
  et.classList.add("active");

  // select all classes with the name content
  let allContent = document.querySelectorAll('.content');

  // loop through all content classes
  for (let content of allContent) {

    /* display the content if the value in the data attribute of the button and content are the same */
    if(content.getAttribute('data-number') === button.getAttribute('data-number')) {
      content.style.display = "block";
     }

     // if it's not equal then hide it.
     else {
        content.style.display = "none";
      }
    }
 });
}
//]]>
        
//<![CDATA[
$(document).ready(function() {
    $(".date").each(function() {
        var t = $(this),
            e = t.data("start"),
            a = t.data("start"),
            n = moment(e, "YYYY-MM-DD HH:mm:ssZ"),
            m = moment(a, "YYYY-MM-DD HH:mm:ssZ"),
            d = moment.utc().format("YYYY-MM-DD HH:mm:ssZ"),
            r = n.diff(d, "minutes"),
            i = m.diff(d, "minutes") + 120;
        switch (!0) {
            case 30 < r:
                var o = moment.utc(e).toDate();
                t.parent().find("#match-time").text(moment(o).format("LT")), t.parent().find("#result").hide(), t.parent().find(".date").html("لم تبدا بعد").addClass("not-start");
                break;
            case 0 < r:
                o = moment.utc(e).toDate(), t.parent().find("#match-time").text(moment(o).format("LT")), t.parent().find("#result").hide(), t.parent().find(".date").html("بعد قليل").addClass("soon");
                break;
            case 0 < i:
                o = moment.utc(e).toDate(), t.parent().find("#match-time").hide(), t.parent().find(".date").html("مباشر الآن").addClass("live"), t.parent().find("#match-time").text(moment(o).format("LT"));
                break;
            default:
                o = moment.utc(e).toDate(), t.parent().find("#match-time").hide(), t.parent().find("#match-time").text(moment(o).format("LT")), t.parent().find(".date").html("إنتهت ").addClass("end")
        }
    })
});
//]]>
