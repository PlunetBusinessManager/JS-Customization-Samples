function retrieveSelectedValue() {
  try {
    // Retrieve the select element for the company code
    var selectElement = document.getElementById("PJ28A_");

    // Get the selected value from the select element
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;

    // Store the selected value in a variable
    var storedValue = selectedValue;

    // Log the selected value
    console.log("MYUSERSCRIPT Selected Value:", storedValue);

    return storedValue;
  } catch (error) {
    console.error("MYUSERSCRIPT Error:", error);
    return null;
  }
}

function hideBankAccountRow() {
  try {
    // Get all the label elements
    var labels = document.getElementsByTagName("label");

    // Loop through the labels
    for (var i = 0; i < labels.length; i++) {
      var labelText = labels[i].textContent;

      // Check if the label contains the target text - Your Textmodule name should go here
      if (labelText.includes("Bank Account")) {
        var tableRow = labels[i].closest("tr");

        // Hide the table row if found
        if (tableRow) {
          tableRow.style.display = "none";
          console.log("MYUSERSCRIPT Hiding table row");
        }
      }
    }
  } catch (error) {
    console.error("MYUSERSCRIPT Error:", error);
  }
}

function checkSelectedValueAndHideRow() {
  try {
    // Retrieve the selected value
    var selectedValue = retrieveSelectedValue();

    // Check if the selected value is not "2"
    if (selectedValue !== "2") { // Change "2" to the desired selected value of your company code
      // Hide the bank account row
      hideBankAccountRow();
    }
  } catch (error) {
    console.error("MYUSERSCRIPT Error:", error);
  }
}

window.addEventListener('load', function () {
  try {
    // Check if on the right page and the plus button is present
    if (window.location.pathname.includes('auftrag_allgemeinauftrag.jsp') && document.getElementById("navExtPlus")) {
      // Call the function to check selected value and hide row
      checkSelectedValueAndHideRow();
    }
  } catch (error) {
    console.error("MYUSERSCRIPT Error:", error);
  }
});
