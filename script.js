document.getElementById("opt").addEventListener("change", change);
document.getElementById("calcbtn").removeEventListener("click", calculate2);
document.getElementById("calcbtn").addEventListener("click", calculate1);
document.getElementById("lightbtn").addEventListener("click", LightMode);
document.getElementById("darkbtn").addEventListener("click", DarkMode);

function LightMode() {
  document.getElementById("Html").style.background = `white`;
  document.querySelector(".style").style.color = `rgb(0, 0, 0)`;
  document.getElementById("bdy").style.background = `rgba(0, 0, 0, .5)`;
  document.getElementById("bdy").style.border = `2px solid black`;
  document.querySelector("p").style.color = `rgb(0, 0, 0)`;
  document.querySelector("span").style.color = `rgb(0, 0, 0)`;
  document.getElementById("ftur").style.color = `rgb(0, 0, 0)`;
}

function DarkMode() {
  document.getElementById("Html").style.background = `black`;
  document.querySelector(".style").style.color = `rgb(255, 255, 255)`;
  document.getElementById("bdy").style.background = `rgba(255, 255, 255, .25)`;
  document.getElementById("bdy").style.border = `1px solid white`;
  document.querySelector("p").style.color = `rgb(255, 255, 255)`;
  document.querySelector("span").style.color = `rgb(255, 255, 255)`;
  document.getElementById("ftur").style.color = `rgb(255, 255, 255)`;
}

function change() {
  var Option = document.getElementById("opt").value;
  if (Option == "speed") {
    document.getElementById("tbch").innerHTML = `<table class="style">
        <th class="style">
          <p class="style">Km/h: <input id='inp1' type="number" /></p>
        </th>
        <th class="style">
          <span class="style">Mi/h: <input id='inp2' type="number" /></span>
        </th>
      </table>`;
      document.getElementById("calcbtn").addEventListener("click", calculate1);
      document.getElementById("calcbtn").removeEventListener("click", calculate2);
      document.getElementById("calcbtn").removeEventListener("click", calculate3);
      document.getElementById("calcbtn").removeEventListener("click", calculate4);
  }

  if (Option == "time") {
    document.getElementById("tbch").innerHTML = `<table class="style">
        <th class="style">
          <p class="style">seconds: <input id='inp3' type="number" /></p>
        </th>
        <th class="style">
          <span class="style">hours: <input id='inp4' type="number" /></span>
        </th>
      </table>`;
    document.getElementById("calcbtn").removeEventListener("click", calculate1);
    document.getElementById("calcbtn").addEventListener("click", calculate2);
    document.getElementById("calcbtn").removeEventListener("click", calculate3);
    document.getElementById("calcbtn").removeEventListener("click", calculate4);
  }

  if (Option == "weight") {
    document.getElementById("tbch").innerHTML = `<table class="style">
        <th class="style">
          <p class="style">pounds: <input id='inp5' type="number" /></p>
        </th>
        <th class="style">
          <span class="style">Kilograms: <input id='inp6' type="number" /></span>
        </th>
      </table>`;
    document.getElementById("calcbtn").removeEventListener("click", calculate1);
    document.getElementById("calcbtn").removeEventListener("click", calculate2);
    document.getElementById("calcbtn").addEventListener("click", calculate3);
    document.getElementById("calcbtn").removeEventListener("click", calculate4);
  }

  if (Option == "temp") {
    document.getElementById("tbch").innerHTML = `<table class="style">
        <th class="style">
          <p class="style">celcius: <input id='inp7' type="number" /></p>
        </th>
        <th class="style">
          <span class="style">farenheit: <input id='inp8' type="number" /></span>
        </th>
      </table>`;
    document.getElementById("calcbtn").removeEventListener("click", calculate1);
    document.getElementById("calcbtn").removeEventListener("click", calculate2);
    document.getElementById("calcbtn").removeEventListener("click", calculate3);
    document.getElementById("calcbtn").addEventListener("click", calculate4);
  }
  // event listener
}

function calculate1() {
  var val1 = document.getElementById("inp1");
  var val2 = document.getElementById("inp2");

  console.log(val1.value);
  console.log(val2.value);
  // Code to run if ONE of the fields is not empty
  if (val1.value != "" && val2.value != "") {
    alert("error, both feilds filled");
    location.reload();
  } else if (val2.value != "") {
    var output2 = +val2.value * 1.609;
    output2 = output2.toFixed(6);
    val1.value = output2;
    val2.value = "";
  } else {
    var output1 = +val1.value / 1.609;
    output1 = output1.toFixed(6);
    val2.value = output1;
    val1.value = "";
  }
  // } else if (val1.value != "" && val2.value != "") {
  // Code to run if BOTH fields are empty

  // throw error
  // alert("Error, both feilds filled");
  // location.reload();
}

function calculate2() {
  var val3 = document.getElementById("inp3");
  var val4 = document.getElementById("inp4");

  console.log(val3.value);
  console.log(val4.value);
  if (val3.value != "" && val4.value != "") {
    alert("error, both feilds filled");
    location.reload();
  } else if (val3.value != "") {
    var output2 = +val3.value / 3600;
    output2 = output2.toFixed(6);
    val4.value = output2;
    val3.value = "";
  } else {
    var output1 = +val4.value * 3600;
    output1 = output1.toFixed(6);
    val3.value = output1;
    val4.value = "";
  }
}

function calculate3() {
  var val5 = document.getElementById("inp5");
  var val6 = document.getElementById("inp6");

  console.log(val5.value);
  console.log(val6.value);
  if (val5.value != "" && val6.value != "") {
    alert("error, both feilds filled");
    location.reload();
  } else if (val5.value != "") {
    var output2 = +val5.value / 2.205;
    output2 = output2.toFixed(6);
    val6.value = output2;
    val5.value = "";
  } else {
    var output1 = +val6.value * 2.205;
    output1 = output1.toFixed(6);
    val5.value = output1;
    val6.value = "";
  }
}

function calculate4() {
  var val7 = document.getElementById("inp7");
  var val8 = document.getElementById("inp8");

  console.log(val7.value);
  console.log(val8.value);
  if (val7.value != "" && val8.value != "") {
    alert("error, both feilds filled");
    location.reload();
  } else if (val7.value != "") {
    var output2 = (+val7.value * 9 / 5) + 32;
    output2 = output2.toFixed(6);
    val8.value = output2;
    val7.value = "";
  } else {
    var output1 = (+val8.value - 32) * 5 / 9;
    output1 = output1.toFixed(6);
    val7.value = output1;
    val8.value = "";
  }
}

//Check both filled
//-Check if value 1 != null (uses value 2)
//--Else use value one
