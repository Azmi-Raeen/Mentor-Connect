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

// For Toggle Button on Project Page Desktop Mode
var toggle_count_index = 0;
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("svgIcon").addEventListener("click", function() {
        if(toggle_count_index==0) {
            toggle_count_index = toggle_count_index + 1;
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
            
            document.getElementById("color_change_item_11").style.backgroundColor = "transparent"; 

            // For Project 1
            document.getElementById("project_listed_number_1").style.backgroundImage = "url(./Images_Index/wipped_wall_putty.jpg)";
            document.getElementById("project_listed_number_1").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_1").style.backgroundColor = "transparent";
            document.getElementById("id_bottom_full_no_division_1").style.backgroundColor = "transparent";
            document.getElementById("project_id_1").style.color = "#000";
            document.getElementById("paragraph_id_1").style.color = "#000";
            document.getElementById("repo_download_mtrs_temp").style.color = "#000";
            document.getElementById("repo_download_mtrs").style.color = "#000";
            document.getElementById("mtrs_repo").style.color = "#000";
            document.getElementById("mtrs_project").style.color = "#000";

            // For Project 2
            document.getElementById("project_listed_number_2").style.backgroundImage = "url(./Images_Index/wipped_wall_putty.jpg)";
            document.getElementById("project_listed_number_2").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_2").style.backgroundColor = "transparent";
            document.getElementById("id_bottom_full_no_division_2").style.backgroundColor = "transparent";
            document.getElementById("project_id_2").style.color = "#000";
            document.getElementById("paragraph_id_2").style.color = "#000";
            document.getElementById("repo_download_tdtm_temp").style.color = "#000";
            document.getElementById("repo_download_tdtm").style.color = "#000";
            document.getElementById("tdtm_repo").style.color = "#000";
            document.getElementById("tdtm_project").style.color = "#000";

            // For Project 3
            document.getElementById("project_listed_number_3").style.backgroundImage = "url(./Images_Index/wipped_wall_putty.jpg)";
            document.getElementById("project_listed_number_3").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_3").style.backgroundColor = "transparent";
            document.getElementById("id_bottom_full_no_division_3").style.backgroundColor = "transparent";
            document.getElementById("project_id_3").style.color = "#000";
            document.getElementById("paragraph_id_3").style.color = "#000";
            document.getElementById("repo_download_ytc_temp").style.color = "#000";
            document.getElementById("repo_download_ytc").style.color = "#000";
            document.getElementById("ytc_repo").style.color = "#000";
            document.getElementById("ytc_project").style.color = "#000";
            document.getElementById("ytc_web").style.color = "#000";

            // For Project 4
            document.getElementById("project_listed_number_4").style.backgroundImage = "url(./Images_Index/wipped_wall_putty.jpg)";
            document.getElementById("project_listed_number_4").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_4").style.backgroundColor = "transparent";
            document.getElementById("id_bottom_full_no_division_4").style.backgroundColor = "transparent";
            document.getElementById("project_id_4").style.color = "#000";
            document.getElementById("paragraph_id_4").style.color = "#000";
            document.getElementById("repo_download_rdfc_temp").style.color = "#000";
            document.getElementById("repo_download_rdfc").style.color = "#000";
            document.getElementById("rdfc_repo").style.color = "#000";
            document.getElementById("rdfc_project").style.color = "#000";

            // For Project 5
            document.getElementById("project_listed_number_5").style.backgroundImage = "url(./Images_Index/wipped_wall_putty.jpg)";
            document.getElementById("project_listed_number_5").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_5").style.backgroundColor = "transparent";
            document.getElementById("id_bottom_full_no_division_5").style.backgroundColor = "transparent";
            document.getElementById("project_id_5").style.color = "#000";
            document.getElementById("paragraph_id_5").style.color = "#000";
            document.getElementById("repo_download_rds_temp").style.color = "#000";
            document.getElementById("repo_download_rds").style.color = "#000";
            document.getElementById("rds_repo").style.color = "#000";
            document.getElementById("rds_project").style.color = "#000";
            document.getElementById("rds_web").style.color = "#000";
        } else {
            toggle_count_index = toggle_count_index - 1;
            
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

            // For Project 1
            document.getElementById("project_listed_number_1").style.backgroundImage = "url(./Images_Index/stars_sky.jpg)";
            document.getElementById("project_listed_number_1").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_1").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById("id_bottom_full_no_division_1").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById('project_id_1').style.removeProperty('color');
            document.getElementById('paragraph_id_1').style.removeProperty('color');
            document.getElementById("repo_download_mtrs_temp").style.color = "#fff";
            document.getElementById("repo_download_mtrs").style.color = "#fff";
            document.getElementById("mtrs_repo").style.color = "#fff";
            document.getElementById("mtrs_project").style.color = "#fff";

            // For Project 2
            document.getElementById("project_listed_number_2").style.backgroundImage = "url(./Images_Index/stars_sky.jpg)";
            document.getElementById("project_listed_number_2").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_2").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById("id_bottom_full_no_division_2").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById('project_id_2').style.removeProperty('color');
            document.getElementById('paragraph_id_2').style.removeProperty('color');
            document.getElementById("repo_download_tdtm_temp").style.color = "#fff";
            document.getElementById("repo_download_tdtm").style.color = "#fff";
            document.getElementById("tdtm_repo").style.color = "#fff";
            document.getElementById("tdtm_project").style.color = "#fff";

            // For Project 3
            document.getElementById("project_listed_number_3").style.backgroundImage = "url(./Images_Index/stars_sky.jpg)";
            document.getElementById("project_listed_number_3").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_3").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById("id_bottom_full_no_division_3").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById('project_id_3').style.removeProperty('color');
            document.getElementById('paragraph_id_3').style.removeProperty('color');
            document.getElementById("repo_download_ytc_temp").style.color = "#fff";
            document.getElementById("repo_download_ytc").style.color = "#fff";
            document.getElementById("ytc_repo").style.color = "#fff";
            document.getElementById("ytc_project").style.color = "#fff";
            document.getElementById("ytc_web").style.color = "#fff";

            // For Project 4
            document.getElementById("project_listed_number_4").style.backgroundImage = "url(./Images_Index/stars_sky.jpg)";
            document.getElementById("project_listed_number_4").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_4").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById("id_bottom_full_no_division_4").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById('project_id_4').style.removeProperty('color');
            document.getElementById('paragraph_id_4').style.removeProperty('color');
            document.getElementById("repo_download_rdfc_temp").style.color = "#fff";
            document.getElementById("repo_download_rdfc").style.color = "#fff";
            document.getElementById("rdfc_repo").style.color = "#fff";
            document.getElementById("rdfc_project").style.color = "#fff";

            // For Project 5
            document.getElementById("project_listed_number_5").style.backgroundImage = "url(./Images_Index/stars_sky.jpg)";
            document.getElementById("project_listed_number_5").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_5").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById("id_bottom_full_no_division_5").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById('project_id_5').style.removeProperty('color');
            document.getElementById('paragraph_id_5').style.removeProperty('color');
            document.getElementById("repo_download_rds_temp").style.color = "#fff";
            document.getElementById("repo_download_rds").style.color = "#fff";
            document.getElementById("rds_repo").style.color = "#fff";
            document.getElementById("rds_project").style.color = "#fff";
            document.getElementById("rds_web").style.color = "#fff";
        }
    });
});

// ENDS HERE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// For Toggle Button on Project Page Minimized Screen Mode [DropDown Toggle Button]
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("svgIcon_").addEventListener("click", function() {
        if(toggle_count_index==0) {
            toggle_count_index = toggle_count_index + 1;
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
            
            document.getElementById("color_change_item_11").style.backgroundColor = "transparent"; 

            // For Project 1
            document.getElementById("project_listed_number_1").style.backgroundImage = "url(./Images_Index/wipped_wall_putty.jpg)";
            document.getElementById("project_listed_number_1").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_1").style.backgroundColor = "transparent";
            document.getElementById("id_bottom_full_no_division_1").style.backgroundColor = "transparent";
            document.getElementById("project_id_1").style.color = "#000";
            document.getElementById("paragraph_id_1").style.color = "#000";
            document.getElementById("repo_download_mtrs_temp").style.color = "#000";
            document.getElementById("repo_download_mtrs").style.color = "#000";
            document.getElementById("mtrs_repo").style.color = "#000";
            document.getElementById("mtrs_project").style.color = "#000";

            // For Project 2
            document.getElementById("project_listed_number_2").style.backgroundImage = "url(./Images_Index/wipped_wall_putty.jpg)";
            document.getElementById("project_listed_number_2").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_2").style.backgroundColor = "transparent";
            document.getElementById("id_bottom_full_no_division_2").style.backgroundColor = "transparent";
            document.getElementById("project_id_2").style.color = "#000";
            document.getElementById("paragraph_id_2").style.color = "#000";
            document.getElementById("repo_download_tdtm_temp").style.color = "#000";
            document.getElementById("repo_download_tdtm").style.color = "#000";
            document.getElementById("tdtm_repo").style.color = "#000";
            document.getElementById("tdtm_project").style.color = "#000";

            // For Project 3
            document.getElementById("project_listed_number_3").style.backgroundImage = "url(./Images_Index/wipped_wall_putty.jpg)";
            document.getElementById("project_listed_number_3").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_3").style.backgroundColor = "transparent";
            document.getElementById("id_bottom_full_no_division_3").style.backgroundColor = "transparent";
            document.getElementById("project_id_3").style.color = "#000";
            document.getElementById("paragraph_id_3").style.color = "#000";
            document.getElementById("repo_download_ytc_temp").style.color = "#000";
            document.getElementById("repo_download_ytc").style.color = "#000";
            document.getElementById("ytc_repo").style.color = "#000";
            document.getElementById("ytc_project").style.color = "#000";
            document.getElementById("ytc_web").style.color = "#000";

            // For Project 4
            document.getElementById("project_listed_number_4").style.backgroundImage = "url(./Images_Index/wipped_wall_putty.jpg)";
            document.getElementById("project_listed_number_4").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_4").style.backgroundColor = "transparent";
            document.getElementById("id_bottom_full_no_division_4").style.backgroundColor = "transparent";
            document.getElementById("project_id_4").style.color = "#000";
            document.getElementById("paragraph_id_4").style.color = "#000";
            document.getElementById("repo_download_rdfc_temp").style.color = "#000";
            document.getElementById("repo_download_rdfc").style.color = "#000";
            document.getElementById("rdfc_repo").style.color = "#000";
            document.getElementById("rdfc_project").style.color = "#000";

            // For Project 5
            document.getElementById("project_listed_number_5").style.backgroundImage = "url(./Images_Index/wipped_wall_putty.jpg)";
            document.getElementById("project_listed_number_5").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_5").style.backgroundColor = "transparent";
            document.getElementById("id_bottom_full_no_division_5").style.backgroundColor = "transparent";
            document.getElementById("project_id_5").style.color = "#000";
            document.getElementById("paragraph_id_5").style.color = "#000";
            document.getElementById("repo_download_rds_temp").style.color = "#000";
            document.getElementById("repo_download_rds").style.color = "#000";
            document.getElementById("rds_repo").style.color = "#000";
            document.getElementById("rds_project").style.color = "#000";
            document.getElementById("rds_web").style.color = "#000";

        } else {
            toggle_count_index = toggle_count_index - 1;
            
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

            // For Project 1
            document.getElementById("project_listed_number_1").style.backgroundImage = "url(./Images_Index/stars_sky.jpg)";
            document.getElementById("project_listed_number_1").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_1").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById("id_bottom_full_no_division_1").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById('project_id_1').style.removeProperty('color');
            document.getElementById('paragraph_id_1').style.removeProperty('color');
            document.getElementById("repo_download_mtrs_temp").style.color = "#fff";
            document.getElementById("repo_download_mtrs").style.color = "#fff";
            document.getElementById("mtrs_repo").style.color = "#fff";
            document.getElementById("mtrs_project").style.color = "#fff";

            // For Project 2
            document.getElementById("project_listed_number_2").style.backgroundImage = "url(./Images_Index/stars_sky.jpg)";
            document.getElementById("project_listed_number_2").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_2").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById("id_bottom_full_no_division_2").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById('project_id_2').style.removeProperty('color');
            document.getElementById('paragraph_id_2').style.removeProperty('color');
            document.getElementById("repo_download_tdtm_temp").style.color = "#fff";
            document.getElementById("repo_download_tdtm").style.color = "#fff";
            document.getElementById("tdtm_repo").style.color = "#fff";
            document.getElementById("tdtm_project").style.color = "#fff";

            // For Project 3
            document.getElementById("project_listed_number_3").style.backgroundImage = "url(./Images_Index/stars_sky.jpg)";
            document.getElementById("project_listed_number_3").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_3").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById("id_bottom_full_no_division_3").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById('project_id_3').style.removeProperty('color');
            document.getElementById('paragraph_id_3').style.removeProperty('color');
            document.getElementById("repo_download_ytc_temp").style.color = "#fff";
            document.getElementById("repo_download_ytc").style.color = "#fff";
            document.getElementById("ytc_repo").style.color = "#fff";
            document.getElementById("ytc_project").style.color = "#fff";
            document.getElementById("ytc_web").style.color = "#fff";

            // For Project 4
            document.getElementById("project_listed_number_4").style.backgroundImage = "url(./Images_Index/stars_sky.jpg)";
            document.getElementById("project_listed_number_4").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_4").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById("id_bottom_full_no_division_4").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById('project_id_4').style.removeProperty('color');
            document.getElementById('paragraph_id_4').style.removeProperty('color');
            document.getElementById("repo_download_rdfc_temp").style.color = "#fff";
            document.getElementById("repo_download_rdfc").style.color = "#fff";
            document.getElementById("rdfc_repo").style.color = "#fff";
            document.getElementById("rdfc_project").style.color = "#fff";

            // For Project 5
            document.getElementById("project_listed_number_5").style.backgroundImage = "url(./Images_Index/stars_sky.jpg)";
            document.getElementById("project_listed_number_5").style.boxShadow = "-4px 4px 10px rgba(0, 0, 0, 0.5)";
            document.getElementById("top_container_5").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById("id_bottom_full_no_division_5").style.backgroundColor = "rgba(0,0,0,0.3)";
            document.getElementById('project_id_5').style.removeProperty('color');
            document.getElementById('paragraph_id_5').style.removeProperty('color');
            document.getElementById("repo_download_rds_temp").style.color = "#fff";
            document.getElementById("repo_download_rds").style.color = "#fff";
            document.getElementById("rds_repo").style.color = "#fff";
            document.getElementById("rds_project").style.color = "#fff";
            document.getElementById("rds_web").style.color = "#fff";
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

// Project Download Functionality Button */

document.getElementById("repo_download_mtrs").addEventListener("click", function() {

    var downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", "GitHub Repository Download Source\Movie-Ticket-Reservation-System-MTRS-main.zip");
    downloadAnchor.setAttribute("download", "filename.zip");

    // Simulate click to trigger download
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
});
