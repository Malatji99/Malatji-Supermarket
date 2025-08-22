// 🧮 Calculate total amount
function calculateTotal(quantity, price) {
  if (quantity > 0 && price > 0) {
    let total = quantity * price;
    return total;
  } else {
    document.getElementById("result").innerHTML="<span style='color:red;'>Please enter valid quantity and price.</span>"
    return 0;
  }
}
function validateInput(){
  const name = document.getElementById("customerName").value;
   const name = document.getElementById("address").value;
   const name = document.getElementById("salesID").value;

  if (!name|| !address|| !salesID){
    alert("Please fill in all required fields.");
    return false
  }
  alert("Sales enrty submitted successfully!");
  return true;
}

// ✅ Validate input fields
function validateInput() {
  let name = document.getElementById("customerName").value.trim();
  let address = document.getElementById("address").value.trim();
  let product = document.getElementById("productName").value.trim();
  let quantity = parseFloat(document.getElementById("quantity").value);
  let price = parseFloat(document.getElementById("price").value);

  if (!name || !address || !product || isNaN(quantity) || quantity <= 0 ||isNaN(price) || price <= 0) {
    document.getElementById("result").innerHTML="<span style='color:red'>Please fiil in all fields correctly.</span>";
    return;
  }
  
  {
    let total = calculateTotal(quantity,price);
    document.getElementById("result").innerHTML= "<b>Total Amount: R" + total.toFixed(2) +"</b>"
  }
}

// 🧹 Clear the form
function clearForm() {
  let inputs = document.querySelectorAll("form input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  alert("Form cleared.");
}

// 🔄 Update record simulation
function updateRecord() {
  if (validateInput()) {
    alert("Record updated successfully.");
  }
}
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (username === "" || password === "") {
    message.textContent = "Please enter both username and password.";
    message.style.color = "red";
  } else {
    message.textContent = "Login successful!";
    message.style.color = "green";

    // Optional: Redirect to another page
    // window.location.href = "Report.html";
  }
}

// ❌ Delete record simulation
function deleteRecord() {
  let confirmDelete = confirm("Are you sure you want to delete this record?");
  if (confirmDelete) {
    clearForm();
    alert("Record deleted.");
  }
}

// 🚀 Event listeners
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submitBtn").addEventListener("click", function (e) {
    e.preventDefault();
    if (validateInput()) {
      alert("Form submitted successfully.");
    }
  });

  document.getElementById("resetBtn").addEventListener("click", function (e) {
    e.preventDefault();
    clearForm();
  });

  document.getElementById("updateBtn").addEventListener("click", updateRecord);
  document.getElementById("deleteBtn").addEventListener("click", deleteRecord);
  document.getElementById("totalBtn").addEventListener("click", function () {
    let quantity = parseFloat(document.getElementById("quantity").value);
    let price = parseFloat(document.getElementById("price").value);
    calculateTotal(quantity, price);
  });

});
