var moreText = document.getElementById("more");
  var moreText2 = document.getElementById("more2");
  var moreText3 = document.getElementById("more3");

  var btnText = document.getElementById("myBtn");
  var btnText2 = document.getElementById("myBtn2");
  var btnText3 = document.getElementById("myBtn3");

  var dotsBool = false;
  var dotsBool2 = false;
  var dotsBool3 = false;

  function myFunction(param) {
    if (param === 'dots') {
      dotsBool = !dotsBool;
      dotsBool ? btnText.innerHTML = "Read less" : btnText.innerHTML = "Read more";
      dotsBool ? moreText.style.display = "inline" : moreText.style.display = "none";
    } else if (param === 'dots2') {
      dotsBool2 = !dotsBool2;
      dotsBool2 ? btnText2.innerHTML = "Read less" : btnText2.innerHTML = "Read more";
      dotsBool2 ? moreText2.style.display = "inline" : moreText2.style.display = "none";
    } else if (param === 'dots3') {
      dotsBool3 = !dotsBool3;
      dotsBool3 ? btnText3.innerHTML = "Read less" : btnText3.innerHTML = "Read more";
      dotsBool3 ? moreText3.style.display = "inline" : moreText3.style.display = "none";
    }
  }
