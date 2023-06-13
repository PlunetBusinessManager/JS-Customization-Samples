window.addEventListener('load', function () {
    // The following code checks if the tags are within the source code of the page
    var vendorportal = document.getElementsByTagName("pl-navigation-freelancer");
    var customerportal = document.getElementsByTagName("pl-navigation-customer"); // The customer portal always has this element
    if (vendorportal.length > 0) {console.log("[My-Company Custom JavaScript]  This is the vendor portal")} // The vendor portal always has this element
    else if (customerportal.length > 0) { console.log("[My-Company Custom JavaScript]  This is the customer portal")}
    else {console.log("[My-Company Custom JavaScript]  This is the PM Portal")};
});
