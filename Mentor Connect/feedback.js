window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i<reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 70;
        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            // reveals[i].classList.remove('active'); // Enable if want to remove elements on up-scroll
        }
    }
}

// ENDS HERE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// For Toggle Button on Feedback Page Desktop Mode
var toggle_count_feedback = 2;
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("svgIcon").addEventListener("click", function() {
        if(toggle_count_feedback%2==0) {
            toggle_count_feedback++;
            document.getElementById("color_change_item_1").style.backgroundColor = "#fff";
            document.getElementById("logo").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_2").style.color = "#7E22CE";
            document.getElementById("color_change_item_3").style.color = "#000";
            document.getElementById("color_change_item_4").style.color = "#000";
            document.getElementById("color_change_item_5").style.color = "#000";
            document.getElementById("color_change_item_6").style.color = "#000";
            document.getElementById("color_change_item_7").style.color = "#000";
            document.getElementById("color_change_item_8").style.color = "#000";
            document.getElementById("color_change_item_9").style.color = "#000";
            document.getElementById("svgIcon").style.color = "#9333EA";
            document.getElementById("separator_line").style.backgroundColor = "#9CA3AF";
            document.getElementById("color_change_item_10").style.backgroundColor = "#fff";
            document.getElementById("live_running_updates").style.backgroundColor = "#fff";
            document.getElementById("live_running_updates").style.color = "#000";
            document.getElementById("color_change_item_12").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_13").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_14").style.backgroundColor = "#fff";
            document.getElementById("h_1").style.color = "#000";
            document.getElementById("h_2").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.4)"
            document.getElementById("h_2").style.color = "rgba(0,0,0,0.7)"
            document.getElementById("h_2").style.backgroundColor = "#F3F4F6"
            document.getElementById("h_2").style.borderRadius = "10px"
            document.getElementById("container_fb_form").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.4)"
            document.getElementById("container_fb_form").style.animation = "slideIn 2s ease-in-out"
        } else {
            toggle_count_feedback++;
            document.getElementById("color_change_item_1").style.backgroundColor = "#1F2937";
            document.getElementById("logo").style.backgroundColor = "#1F2937";
            document.getElementById("color_change_item_2").style.color = "#D8B4FE";
            document.getElementById("color_change_item_3").style.color = "#fff";
            document.getElementById("color_change_item_4").style.color = "#fff";
            document.getElementById("color_change_item_5").style.color = "#fff";
            document.getElementById("color_change_item_6").style.color = "#fff";
            document.getElementById("color_change_item_7").style.color = "#fff";
            document.getElementById("color_change_item_8").style.color = "#fff";
            document.getElementById("color_change_item_9").style.color = "#fff";
            document.getElementById("svgIcon").style.color = "#fff";
            document.getElementById("separator_line").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_10").style.backgroundColor = "#1F2937";
            document.getElementById("live_running_updates").style.backgroundColor = "#1F2937";
            document.getElementById("live_running_updates").style.color = "#9CA3AF";
            document.getElementById("color_change_item_12").style.backgroundColor = "#111827";
            document.getElementById("color_change_item_13").style.backgroundColor = "#111827";
            document.getElementById("color_change_item_14").style.backgroundColor = "#111827";
            document.getElementById("h_1").style.color = "#fff";
            document.getElementById("h_2").style.boxShadow = "-4px 4px 10px rgba(0, 0, 255, 0.2)"
            document.getElementById("h_2").style.color = "rgb(156, 163, 175, 1)"
            document.getElementById("h_2").style.backgroundColor = "#111827"
            document.getElementById("h_2").style.borderRadius = "0px"
            document.getElementById("container_fb_form").style.animation = "slideIn 2s ease-in-out, changeColor 1s infinite"
        }
    });
});

// ENDS HERE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// For Toggle Button on Feedback Page Minimized Screen Mode [DropDown Toggle Button]
var toggle_count_feedback = 2;
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("svgIcon_").addEventListener("click", function() {
        if(toggle_count_feedback%2==0) {
            toggle_count_feedback++;
            document.getElementById("color_change_item_1").style.backgroundColor = "#fff";
            document.getElementById("logo").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_2").style.color = "#7E22CE";
            document.getElementById("color_change_item_3").style.color = "#000";
            document.getElementById("color_change_item_4").style.color = "#000";
            document.getElementById("color_change_item_5").style.color = "#000";
            document.getElementById("color_change_item_6").style.color = "#000";
            document.getElementById("color_change_item_7").style.color = "#000";
            document.getElementById("color_change_item_8").style.color = "#000";
            document.getElementById("color_change_item_9").style.color = "#000";
            document.getElementById("svgIcon").style.color = "#9333EA";
            document.getElementById("separator_line").style.backgroundColor = "#9CA3AF";
            document.getElementById("color_change_item_10").style.backgroundColor = "#fff";
            document.getElementById("live_running_updates").style.backgroundColor = "#fff";
            document.getElementById("live_running_updates").style.color = "#000";
            document.getElementById("color_change_item_12").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_13").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_14").style.backgroundColor = "#fff";
            document.getElementById("h_1").style.color = "#000";
            document.getElementById("h_2").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.4)"
            document.getElementById("h_2").style.color = "rgba(0,0,0,0.7)"
            document.getElementById("h_2").style.backgroundColor = "#F3F4F6"
            document.getElementById("h_2").style.borderRadius = "10px"
            document.getElementById("container_fb_form").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.4)"
            document.getElementById("container_fb_form").style.animation = "slideIn 2s ease-in-out"
        } else {
            toggle_count_feedback++;
            document.getElementById("color_change_item_1").style.backgroundColor = "#1F2937";
            document.getElementById("logo").style.backgroundColor = "#1F2937";
            document.getElementById("color_change_item_2").style.color = "#D8B4FE";
            document.getElementById("color_change_item_3").style.color = "#fff";
            document.getElementById("color_change_item_4").style.color = "#fff";
            document.getElementById("color_change_item_5").style.color = "#fff";
            document.getElementById("color_change_item_6").style.color = "#fff";
            document.getElementById("color_change_item_7").style.color = "#fff";
            document.getElementById("color_change_item_8").style.color = "#fff";
            document.getElementById("color_change_item_9").style.color = "#fff";
            document.getElementById("svgIcon").style.color = "#fff";
            document.getElementById("separator_line").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_10").style.backgroundColor = "#1F2937";
            document.getElementById("live_running_updates").style.backgroundColor = "#1F2937";
            document.getElementById("live_running_updates").style.color = "#9CA3AF";
            document.getElementById("color_change_item_12").style.backgroundColor = "#111827";
            document.getElementById("color_change_item_13").style.backgroundColor = "#111827";
            document.getElementById("color_change_item_14").style.backgroundColor = "#111827";
            document.getElementById("h_1").style.color = "#fff";
            document.getElementById("h_2").style.boxShadow = "-4px 4px 10px rgba(0, 0, 255, 0.2)"
            document.getElementById("h_2").style.color = "rgb(156, 163, 175, 1)"
            document.getElementById("h_2").style.backgroundColor = "#111827"
            document.getElementById("h_2").style.borderRadius = "0px"
            document.getElementById("container_fb_form").style.animation = "slideIn 2s ease-in-out, changeColor 1s infinite"
        }
    });
});

// ENDS HERE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var dropdownMenuToggleCount = 0;
window.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById("menu_3_icon");
    var navOptions = document.getElementById("nav_options");

    if (menuIcon && navOptions) {
        menuIcon.addEventListener("click", function() {
            dropdownMenuToggleCount ^= 1;
            navOptions.style.display = dropdownMenuToggleCount === 1 ? "flex" : "none";
        });
    } else {
        console.error("Required elements not found.");
    }
});

// ENDS HERE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// IF USER ON PC, REDUCED THE SCREEN WIDTH, THEN OF COURSE THE MENU ICON WILL GET VISIBLE, NOW IF USER TAPS IT SO NOW THE DROPDOWN APPEARS, AND NOW IF HE RESIZES THE SCREEEN TO AGAIN LARGER WIDTH THAN 700 PIXELS, THE DROPDOWN WILL STILL BE VISIBLE, SO THE FOLLOWING BETHOD WILL DISAPPPEAR THE DROPDOWN WHEN SCREEN-WIDTH EXCEEDS 700 PIXELS
// Function to handle screen resize
function handleResize() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 770) {
        document.getElementById("nav_options").style.display = "none";
    }
}

window.addEventListener('resize', handleResize);

// Initial call to handleResize to handle screen size on page load
handleResize();

// ENDS HERE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Handling Emails
function sendEmail() {
    var params = {
        from_name : document.getElementById("idname").value,
        from_name_body : document.getElementById("idname").value,
        email : document.getElementById("idemail").value,
        phone : document.getElementById("idphone").value,
        message : document.getElementById("idmessage").value
    }
    emailjs.send("service_mp4nbme", "template_zrog5pr", params).then(function(res) {
        // alert("Succesfully Sent ! : "+res.status); // Uncomment if want to Notify On Webpage
    })
}

// ENDS HERE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
