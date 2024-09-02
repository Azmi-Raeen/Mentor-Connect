window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i<reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 70;
        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
            initCounter(reveals[i]);
        } else {
            // reveals[i].classList.remove('active'); // Enable if want to remove elements on up-scroll
        }
    }
}
// END

// ~~~~~~~~~ Incrementor ~~~~~~~~~~~~~~~~~~~
function initCounter(element) {
    if (element.classList.contains('counter-initialized')) {
        return;
    }

    var counterElement = element.querySelector('.classrun1 p');
    if (counterElement) {

        var targetValue = parseInt(counterElement.textContent.trim());

        animateCounter(counterElement, targetValue);

        element.classList.add('counter-initialized');
    }
    var counterElement = element.querySelector('.classrun2 p');
    if (counterElement) {

        var targetValue = parseInt(counterElement.textContent.trim());

        animateCounter(counterElement, targetValue);

        element.classList.add('counter-initialized');
    }
    var counterElement = element.querySelector('.classrun3 p');
    if (counterElement) {

        var targetValue = parseInt(counterElement.textContent.trim());

        animateCounter(counterElement, targetValue);

        element.classList.add('counter-initialized');
    }
}

function animateCounter(element, target) {
    $({countNum: 0}).animate({countNum: target}, {
        duration: 2000,
        easing: 'linear',
        step: function() {
            element.textContent = Math.floor(this.countNum);
        },
        complete: function() {
            element.textContent = target + ' +';
        }
    });
}
// ENDS HERE


var toggle_count = 2;
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("svgIcon").addEventListener("click", function() {
        // Your onclick functionality here
        if(toggle_count%2==0) {
            toggle_count++;
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
            document.getElementById("color_change_item_11").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_12").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_13").style.backgroundColor = "#fff";
            document.getElementById("h_1").style.color = "#000";
            document.getElementById("h_2").style.color = "#000";
            document.getElementById("color_change_item_14").style.backgroundColor = "#F3F4F6";
            document.getElementById("recommendation_card_second_child").style.backgroundColor = "#F3F4F6";
            document.getElementById("color_change_item_14").style.color = "#3E4856";
            document.getElementById("recommendation_card_second_child").style.color = "#3E4856";
            document.getElementById("color_change_item_15").style.color = "#000";
            document.getElementById("color_change_item_16").style.color = "#000";
            document.getElementById("third_page").style.backgroundColor = "#fff";
            
            document.getElementById("ind_skil1").style.background = "rgba(31, 41, 55, 0.9)";
            document.getElementById("ind_skil2").style.background = "rgba(31, 41, 55, 0.9)";
            document.getElementById("ind_skil3").style.background = "rgba(31, 41, 55, 0.9)";
            document.getElementById("ind_skil4").style.background = "rgba(31, 41, 55, 0.9)";
            
            document.getElementById("fourth_page").style.backgroundColor = "#fff";
            document.getElementById("redirect_vscode").style.backgroundColor = "rgba(0, 132, 208, 0.7)";
            document.getElementById("redirect_android_studio").style.backgroundColor = "#3DDC84";
            document.getElementById("redirect_pieces").style.backgroundColor = "#000";
            document.getElementById("redirect_mysql_wb").style.backgroundColor = "#26557C";
            document.getElementById("redirect_arduino_ide").style.backgroundColor = "#00858A";
            document.getElementById("redirect_jupyter").style.backgroundColor = "#E36E2E";

            document.getElementById("fifth_page").style.backgroundColor = "#fff";
            document.getElementById("group_connectivities").style.backgroundImage = "url(./Images_Index/wipped_wall_putty.jpg)";
            document.getElementById("group_connectivities").style.backgroundRepeat = "contain";
            document.getElementById("run1").style.color = "#000";
            document.getElementById("run2").style.color = "#000";
            document.getElementById("run3").style.color = "#000";
            document.getElementById("wt").style.color = "#000";
            document.getElementById("lc").style.color = "#000";
            document.getElementById("pn").style.color = "#000";
            
            document.getElementById("scroll_end_thought").style.backgroundImage = "url(./Images_Index/thought_Background.jpg)";
            document.getElementById("sixth_page").style.backgroundColor = "#fff";
            document.getElementById("h2_auth").style.color = "#fff";
            
            document.getElementById("seventh_page").style.backgroundColor = "#fff";
            document.getElementById("h2_back_to_top").style.color = "#000";
            document.getElementById("cr_name").style.color = "#000";
            document.getElementById("cr_year").style.color = "#000";
            document.getElementById("vertical_divider").style.backgroundColor = "#000";
            document.getElementById("footer_li_1").style.color = "#000";
            document.getElementById("footer_li_2").style.color = "#000";
            document.getElementById("footer_li_3").style.color = "#000";
            document.getElementById("footer_li_4").style.color = "#000";
            document.getElementById("footer_li_5").style.color = "#000";
            document.getElementById("footer_li_6").style.color = "#000";
            document.getElementById("footer_li_7").style.color = "#000";
            document.getElementById("footer_li_8").style.color = "#000";
            document.getElementById("footer_li_9").style.color = "#000";
            document.getElementById("footer_li_10").style.color = "#000";

        } else {
            toggle_count++;
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
            document.getElementById("color_change_item_11").style.backgroundColor = "#111827";
            document.getElementById("color_change_item_12").style.backgroundColor = "#111827";
            document.getElementById("color_change_item_13").style.backgroundColor = "#111827";
            document.getElementById("h_1").style.color = "#fff";
            document.getElementById("h_2").style.color = "#fff";
            document.getElementById("color_change_item_14").style.backgroundColor = "#374151";
            document.getElementById("recommendation_card_second_child").style.backgroundColor = "#374151";
            document.getElementById("color_change_item_14").style.color = "#9CA3AF";
            document.getElementById("recommendation_card_second_child").style.color = "#9CA3AF";
            document.getElementById("color_change_item_15").style.color = "#fff";
            document.getElementById("color_change_item_16").style.color = "#fff";
            document.getElementById("third_page").style.backgroundColor = "#111827";
            document.getElementById("skill_h1").style.color = "#fff";
            document.getElementById("skill_h2").style.color = "#fff";
            document.getElementById("skill_h3").style.color = "#fff";
            document.getElementById("skill_h4").style.color = "#fff";
            document.getElementById("ind_skil1").style.backgroundColor = "transparent";
            document.getElementById("ind_skil2").style.backgroundColor = "transparent";
            document.getElementById("ind_skil3").style.backgroundColor = "transparent";
            document.getElementById("ind_skil4").style.backgroundColor = "transparent";

            document.getElementById("fourth_page").style.backgroundColor = "#111827";
            document.getElementById("redirect_vscode").style.backgroundColor = "transparent";
            document.getElementById("redirect_android_studio").style.backgroundColor = "transparent";
            document.getElementById("redirect_pieces").style.backgroundColor = "transparent";
            document.getElementById("redirect_mysql_wb").style.backgroundColor = "transparent";
            document.getElementById("redirect_arduino_ide").style.backgroundColor = "transparent";
            document.getElementById("redirect_jupyter").style.backgroundColor = "transparent";

            document.getElementById("fifth_page").style.backgroundColor = "#111827";
            document.getElementById("group_connectivities").style.backgroundImage = "";
            document.getElementById("run1").style.color = "#fff";
            document.getElementById("run2").style.color = "#fff";
            document.getElementById("run3").style.color = "#fff";
            document.getElementById("wt").style.color = "#fff";
            document.getElementById("lc").style.color = "#fff";
            document.getElementById("pn").style.color = "#fff";

            document.getElementById("sixth_page").style.backgroundColor = "#111827";
            document.getElementById("scroll_end_thought").style.backgroundImage = "";
            document.getElementById("h2_auth").style.color = "#fff";

            document.getElementById("seventh_page").style.backgroundColor = "#1F2937";
            document.getElementById("h2_back_to_top").style.removeProperty('color');
            document.getElementById("cr_name").style.color = "#fff";
            document.getElementById("cr_year").style.color = "#fff";
            document.getElementById("vertical_divider").style.backgroundColor = "#fff";
            document.getElementById("footer_li_1").style.color = "#fff";
            document.getElementById("footer_li_2").style.color = "#fff";
            document.getElementById("footer_li_3").style.color = "#fff";
            document.getElementById("footer_li_4").style.color = "#fff";
            document.getElementById("footer_li_5").style.color = "#fff";
            document.getElementById("footer_li_6").style.color = "#fff";
            document.getElementById("footer_li_7").style.color = "#fff";
            document.getElementById("footer_li_8").style.color = "#fff";
            document.getElementById("footer_li_9").style.color = "#fff";
            document.getElementById("footer_li_10").style.color = "#fff";
        }
    });
});

// ENDS HERE


var toggle_count = 2;
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("svgIcon_").addEventListener("click", function() {
        // Your onclick functionality here
        if(toggle_count%2==0) {
            toggle_count++;
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
            document.getElementById("color_change_item_11").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_12").style.backgroundColor = "#fff";
            document.getElementById("color_change_item_13").style.backgroundColor = "#fff";
            document.getElementById("h_1").style.color = "#000";
            document.getElementById("h_2").style.color = "#000";
            document.getElementById("color_change_item_14").style.backgroundColor = "#F3F4F6";
            document.getElementById("recommendation_card_second_child").style.backgroundColor = "#F3F4F6";
            document.getElementById("color_change_item_14").style.color = "#3E4856";
            document.getElementById("recommendation_card_second_child").style.color = "#3E4856";
            document.getElementById("color_change_item_15").style.color = "#000";
            document.getElementById("color_change_item_16").style.color = "#000";
            document.getElementById("third_page").style.backgroundColor = "#fff";
            
            document.getElementById("ind_skil1").style.background = "rgba(31, 41, 55, 0.9)";
            document.getElementById("ind_skil2").style.background = "rgba(31, 41, 55, 0.9)";
            document.getElementById("ind_skil3").style.background = "rgba(31, 41, 55, 0.9)";
            document.getElementById("ind_skil4").style.background = "rgba(31, 41, 55, 0.9)";

            document.getElementById("fourth_page").style.backgroundColor = "#fff";
            document.getElementById("redirect_vscode").style.backgroundColor = "rgba(0, 132, 208, 0.7)";
            document.getElementById("redirect_android_studio").style.backgroundColor = "#3DDC84";
            document.getElementById("redirect_pieces").style.backgroundColor = "#000";
            document.getElementById("redirect_mysql_wb").style.backgroundColor = "#26557C";
            document.getElementById("redirect_arduino_ide").style.backgroundColor = "#00858A";
            document.getElementById("redirect_jupyter").style.backgroundColor = "#E36E2E";

            document.getElementById("fifth_page").style.backgroundColor = "#fff";
            document.getElementById("group_connectivities").style.backgroundImage = "url(./Images_Index/wipped_wall_putty.jpg)";
            document.getElementById("run1").style.color = "#000";
            document.getElementById("run2").style.color = "#000";
            document.getElementById("run3").style.color = "#000";
            document.getElementById("wt").style.color = "#000";
            document.getElementById("lc").style.color = "#000";
            document.getElementById("pn").style.color = "#000";
            
            document.getElementById("sixth_page").style.backgroundColor = "#fff";
            document.getElementById("scroll_end_thought").style.backgroundImage = "url(./Images_Index/thought_Background.jpg)";
            document.getElementById("h2_auth").style.color = "#fff";

            document.getElementById("seventh_page").style.backgroundColor = "#fff";
            document.getElementById("h2_back_to_top").style.color = "#000";
            document.getElementById("cr_name").style.color = "#000";
            document.getElementById("cr_year").style.color = "#000";
            document.getElementById("vertical_divider").style.backgroundColor = "#000";
            document.getElementById("footer_li_1").style.color = "#000";
            document.getElementById("footer_li_2").style.color = "#000";
            document.getElementById("footer_li_3").style.color = "#000";
            document.getElementById("footer_li_4").style.color = "#000";
            document.getElementById("footer_li_5").style.color = "#000";
            document.getElementById("footer_li_6").style.color = "#000";
            document.getElementById("footer_li_7").style.color = "#000";
            document.getElementById("footer_li_8").style.color = "#000";
            document.getElementById("footer_li_9").style.color = "#000";
            document.getElementById("footer_li_10").style.color = "#000";
        } else {
            toggle_count++;
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
            document.getElementById("color_change_item_11").style.backgroundColor = "#111827";
            document.getElementById("color_change_item_12").style.backgroundColor = "#111827";
            document.getElementById("color_change_item_13").style.backgroundColor = "#111827";
            document.getElementById("h_1").style.color = "#fff";
            document.getElementById("h_2").style.color = "#fff";
            document.getElementById("color_change_item_14").style.backgroundColor = "#374151";
            document.getElementById("recommendation_card_second_child").style.backgroundColor = "#374151";
            document.getElementById("color_change_item_14").style.color = "#9CA3AF";
            document.getElementById("recommendation_card_second_child").style.color = "#9CA3AF";
            document.getElementById("color_change_item_15").style.color = "#fff";
            document.getElementById("color_change_item_16").style.color = "#fff";
            document.getElementById("third_page").style.backgroundColor = "#111827";
            document.getElementById("skill_h1").style.color = "#fff";
            document.getElementById("skill_h2").style.color = "#fff";
            document.getElementById("skill_h3").style.color = "#fff";
            document.getElementById("skill_h4").style.color = "#fff";
            document.getElementById("ind_skil1").style.backgroundColor = "transparent";
            document.getElementById("ind_skil2").style.backgroundColor = "transparent";
            document.getElementById("ind_skil3").style.backgroundColor = "transparent";
            document.getElementById("ind_skil4").style.backgroundColor = "transparent";

            document.getElementById("fourth_page").style.backgroundColor = "#111827";
            document.getElementById("redirect_vscode").style.backgroundColor = "transparent";
            document.getElementById("redirect_android_studio").style.backgroundColor = "transparent";
            document.getElementById("redirect_pieces").style.backgroundColor = "transparent";
            document.getElementById("redirect_mysql_wb").style.backgroundColor = "transparent";
            document.getElementById("redirect_arduino_ide").style.backgroundColor = "transparent";
            document.getElementById("redirect_jupyter").style.backgroundColor = "transparent";

            document.getElementById("fifth_page").style.backgroundColor = "#111827";
            document.getElementById("group_connectivities").style.backgroundImage = "";
            document.getElementById("run1").style.color = "#fff";
            document.getElementById("run2").style.color = "#fff";
            document.getElementById("run3").style.color = "#fff";
            document.getElementById("wt").style.color = "#fff";
            document.getElementById("lc").style.color = "#fff";
            document.getElementById("pn").style.color = "#fff";

            document.getElementById("sixth_page").style.backgroundColor = "#111827";
            document.getElementById("scroll_end_thought").style.backgroundImage = "";
            document.getElementById("h2_auth").style.color = "#fff";

            document.getElementById("seventh_page").style.backgroundColor = "#1F2937";
            document.getElementById("h2_back_to_top").style.removeProperty('color');
            document.getElementById("cr_name").style.color = "#fff";
            document.getElementById("cr_year").style.color = "#fff";
            document.getElementById("vertical_divider").style.backgroundColor = "#fff";
            document.getElementById("footer_li_1").style.color = "#fff";
            document.getElementById("footer_li_2").style.color = "#fff";
            document.getElementById("footer_li_3").style.color = "#fff";
            document.getElementById("footer_li_4").style.color = "#fff";
            document.getElementById("footer_li_5").style.color = "#fff";
            document.getElementById("footer_li_6").style.color = "#fff";
            document.getElementById("footer_li_7").style.color = "#fff";
            document.getElementById("footer_li_8").style.color = "#fff";
            document.getElementById("footer_li_9").style.color = "#fff";
            document.getElementById("footer_li_10").style.color = "#fff";
        }
    });
});


var toggle_dropdown_menu = 2;
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("menu_3_icon").addEventListener("click", function() {
        // Your onclick functionality here
        if(toggle_dropdown_menu%2==0) {
            toggle_dropdown_menu++;
            document.getElementById("nav_options").style.display = "flex";
        } else {
            toggle_dropdown_menu++;
            document.getElementById("nav_options").style.display = "none";
        }
    });
});

// ENDS HERE

// IF USER ON PC, REDUCED THE SCREEN WIDTH, THEN OF COURSE THE MENU ICON WILL GET VISIBLE, NOW IF USER TAPS IT SO NOW THE DROPDOWN APPEARS, AND NOW IF HE RESIZES THE SCREEEN TO AGAIN LARGER WIDTH THAN 700 PIXELS, THE DROPDOWN WILL STILL BE VISIBLE, SO THE FOLLOWING BETHOD WILL DISAPPPEAR THE DROPDOWN WHEN SCREEN-WIDTH EXCEEDS 700 PIXELS

// Function to handle screen resize
function handleResize() {
    // Get the current width of the screen
    const screenWidth = window.innerWidth;

    // Check if the screen width is at a defined pixel value
    if (screenWidth > 700) {
        // Do something when the screen width is 800px
        document.getElementById("nav_options").style.display = "none";
    } else {
        // Do something else when the screen width is not 800px

    }
}

// Listen for the resize event on the window object
window.addEventListener('resize', handleResize);

// Initial call to handleResize to handle screen size on page load
handleResize();

// ENDS HERE
