# JS Customization Samples
## Getting started
This repository stores various Javascript custom scripts for the BusinessManager Customizations area (Admin|Customizations) Please note that injection scripts may outdate with changes of the Plunet User Interface.

## Scripts

### Hide Text Module based on selected company code in order
#### Description
You may have a text module that shall only appear for orders in a specific company code. The text module will be hidden from the screen for all other company codes.
The text module name and the selection for the company code need to be altered in the script. Community thread to be found [here](https://community.plunet.com/t/m1h4s0k)

#### What you can learn
- Grabbing the value of a field in Plunet for condition checking
- Hiding a field from the user interface

#### Details
Last Version tested: 9.7.5

Source Code: [hidetextmodule.js](https://github.com/PlunetBusinessManager/JS-Customization-Samples/blob/main/hidetextmodule.js "hidetextmodule.js")

### ICS Calendar Download for Order Due Date
#### Description
In Order Details|General, there is a field for order due date. If the order due date is set a button will be displayed that allows to download a general ICS Calendar file which can be opened with your calendar application (e.g. Outlook).

It will create a calendar entry with "Order Due Date [OrderNo] [ProjectName] - [CustomerName]. The body of the calendar item will be "Imported from Plunet BusinessManager"

This example script only works for this specific date field.

#### What you can learn
- Inserting a new button into the GUI that then creates a function to download a file
- How to make sure the functionality is only available for internal users.

#### Details
Last Version tested: 9.7.5

Source Code: [calendar_file_for_order_due_date.js](https://github.com/PlunetBusinessManager/JS-Customization-Samples/blob/main/calendar_file_for_order_due_date.js "calendar_file_for_order_due_date.js")

### News Ticker
#### Description
A simple CSS driven News Ticker that consumes data from a rest endpoint.
:exclamation: PLEASE NOTE: Data is being pulled from TechCrunch for educational purposes. Please allow https://www.techcrunch.com in your _Allowlist for external domains_. :exclamation:

#### What you can learn
- Inserting a new component into the GUI
- Adding your own styling CSS for your component
- Consuming data from a foreign REST Endpoint
- How to hide a created element until next login.

#### Details
Last Version tested: 9.7.5

Source Code: [dashboard_feed.js](https://github.com/PlunetBusinessManager/JS-Customization-Samples/blob/main/dashboard_feed.js "dashboard_feed.js")

### Customer CRM Integration
#### Description
Retrieving information from an external datasource (Rick and Morty) based on the customer name and showing this in the customer profile.
:exclamation: PLEASE NOTE: Data is being pulled from https://rickandmortyapi.com/ for educational purposes. Please allow https://rickandmortyapi.com/ in your _Allowlist for external domains_. :exclamation:

#### What you can learn
- Inserting a new display table into the GUI matching the Plunet style
- Retrieving data from the screen (Customer Name) and
- fetching data from a foreign REST Endpoint
- producing the GUI table with the data

#### Details
Last Version tested: 9.7.5

Source Code: [crm_sample_table.js](https://github.com/PlunetBusinessManager/JS-Customization-Samples/blob/main/crm_sample_table.js "crm_sample_table.js")

## Helper Functions

### Portal Checker
#### Description
Sometimes, you need to make sure that you only show your customizations for the PM or only customer or vendor. This short snippet shows how you can differentiate

#### Details
Last Version tested: 9.7.5

Source Code: [portal_type_checker.js](https://github.com/PlunetBusinessManager/JS-Customization-Samples/blob/main/portal_type_checker.js "portal_type_checker.js")



## License
Distributed under the MIT License. See LICENSE for more information.
