# JS Customization Samples
## Getting started
This repository stores various Javascript custom scripts for the BusinessManager Customizations area (Admin|Customizations) Please note that injection scripts may outdate with changes of the Plunet User Interface.

## Script Details

### ICS Calendar Download for Order Due Date
#### Description
In Order Details|General, there is a field for order due date. If the order due date is set a button will be displayed that allows to download a general ICS Calendar file which can be opened with your calendar application (e.g. Outlook).

It will create a calendar entry with "Order Due Date [OrderNo] [ProjectName] - [CustomerName]. The body of the calendar item will be "Imported from Plunet BusinessManager"

This example script only works for this specific date field.

#### What you can learn
- Inserting a new button into the GUI that then creates a function to download a file
- How to make sure the functionality is only available for internal users.

#### Details
Last Version tested: 9.6.0

Source Code: [calendar_file_for_order_due_date.js](https://github.com/PlunetBusinessManager/JS-Customization-Samples/blob/main/calendar_file_for_order_due_date.js "calendar_file_for_order_due_date.js")

### News Ticker
#### Description
A simple CSS driven News Ticker that consumes data from a rest endpoint.
:exclamation: PLEASE NOTE: Data is being pulled from TechCrunch for educational purposes. Please allow https://www.techcrunch.com in your _Allowlist for external domains_. :exclamation:

#### What you can learn
- Inserting a new component into the GUI
- Adding your own styling CSS for your component
- Consuming data from a foreign REST Endpoint

#### Details
Last Version tested: 9.6.0

Source Code: [dashboard_feed.js](https://github.com/PlunetBusinessManager/JS-Customization-Samples/blob/main/dashboard_feed.js "dashboard_feed.js")

## Customer CRM Integration
#### Description
Retrieving information from an external datasource based on the customer name and showing this in the customer profile.
:exclamation: PLEASE NOTE: You do not have access to the REST Endpoint used - This is for educational purposes only. :exclamation:

#### What you can learn
- Inserting a new display table into the GUI matching the Plunet style
- Retrieving data from the screen (Customer Name) and
- fetching related data from a foreign REST Endpoint
- producing the GUI table with the data

#### Details
Last Version tested: 9.6.0
