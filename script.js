var bitress = {
    Utils: {}
};


bitress.Utils.toggleNav = function () {
    const hamburger = document.querySelector("#hamburger");
    const navList = document.querySelector(".nav-link");

    hamburger.addEventListener("click", function () {
        navList.classList.toggle("navbar-toggled");
    });
};



bitress.Utils.calculateAge = function(birthdate) {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    
    // Calculate the difference in milliseconds
    const ageInMilliseconds = currentDate - birthDate;
    
    // Convert the age to years
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    
    // Round down to the nearest whole number to get the age
    const age = Math.floor(ageInYears);
    
    return age;
  }
  
  
  bitress.Utils.submit = function(){
  
    const lastname = document.getElementById('lastname').value.trim();
    const firstname = document.getElementById('firstname').value.trim();
    const middlename = document.getElementById('middlename').value.trim();
    const birthdate = document.getElementById('birthdate').value;
    const address = document.getElementById('address').value.trim();
    const sex = document.getElementById('sex').value;
    const status = document.getElementById('status').value;
    const dateHired = document.getElementById('date_hired').value;
    const isActive = document.getElementById('is_active').checked;
    const undergraduateCourse = document.getElementById('undergraduate_course').value.trim();
    const undergraduateYearGraduated = document.getElementById('undergraduate_year_graduated').value;
    const masterCourse = document.getElementById('master_course').value.trim();
    const masterYearGraduated = document.getElementById('master_year_graduated').value;
    const doctorateCourse = document.getElementById('doctorate_course').value.trim();
    const doctorateYearGraduated = document.getElementById('doctorate_year_graduated').value;
    const rank = document.getElementById("rank").value;
    const age = bitress.Utils.calculateAge(birthdate);
  
    document.getElementById("display-fullname").textContent = firstname + " " + middlename + " " + lastname;
    document.getElementById("display-birthdate").textContent = birthdate;
    document.getElementById("display-age").textContent = age;
    document.getElementById("display-address").textContent = address;
    document.getElementById("display-sex").textContent = sex;
    document.getElementById("display-status").textContent = status;
    document.getElementById("display-date-hired").textContent = dateHired;
    document.getElementById("display-rank").textContent = rank;
    document.getElementById("display-active-status").textContent = isActive;
    document.getElementById("display-undergraduate-course").textContent = undergraduateCourse;
    document.getElementById("display-undergraduate-gradyear").textContent = undergraduateYearGraduated;
    document.getElementById("display-masters-course").textContent = masterCourse;
    document.getElementById("display-masters-gradyear").textContent = masterYearGraduated;
    document.getElementById("display-doctorate-course").textContent = doctorateCourse;
    document.getElementById("display-doctorate-gradyear").textContent = doctorateYearGraduated;
  
    if (
      !lastname ||
      !firstname ||
      !middlename ||
      !birthdate ||
      !address ||
      !sex ||
      !status ||
      !dateHired ||
      !undergraduateCourse ||
      !undergraduateYearGraduated ||
      !masterCourse ||
      !masterYearGraduated ||
      !doctorateCourse ||
      !doctorateYearGraduated ||
      !rank
    ) {
      alert('All fields are required. Please fill out all fields.');
      return; // Prevent form submission if any field is empty
    }
    
    openModal();
  
  }
  
  bitress.Utils.tabs = function(evt, tab){
  
      var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
  
  }
  
 


document.addEventListener("DOMContentLoaded", function () {
    bitress.Utils.toggleNav();
});


