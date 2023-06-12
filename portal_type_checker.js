window.addEventListener('load', function () {
    // The following code checks if the tags are within the source code of the page
    var vendorportal = document.getElementsByTagName("pl-navigation-freelancer");
    var customerportal = document.getElementsByTagName("pl-navigation-customer");
    if (vendorportal.length > 0) {console.log("This is the vendor portal")}
    else if (customerportal.length > 0) { console.log("This is the customer portal")}
    else {console.log("This is the PM Portal")};
});
