function convertToICSDate(dateTime) {
    const year = dateTime.getFullYear().toString();
    const month = (dateTime.getMonth() + 1) < 10 ? "0" + (dateTime.getMonth() + 1).toString() : (dateTime.getMonth() + 1).toString();
    const day = dateTime.getDate() < 10 ? "0" + dateTime.getDate().toString() : dateTime.getDate().toString();
    const hours = dateTime.getHours() < 10 ? "0" + dateTime.getHours().toString() : dateTime.getHours().toString();
    const minutes = dateTime.getMinutes() < 10 ? "0" +dateTime.getMinutes().toString() : dateTime.getMinutes().toString();

    return year + month + day + "T" + hours + minutes + "00";
}

function download(filename, fileBody) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileBody));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


function createDownloadICSFile(timezone, startTime, endTime, title, description, venueName, address, city, state) {
  const icsBody = 'BEGIN:VCALENDAR\n' +
  'VERSION:2.0\n' +
  'PRODID:Calendar\n' +
  'CALSCALE:GREGORIAN\n' +
  'METHOD:PUBLISH\n' +
  'BEGIN:VTIMEZONE\n' +
  'TZID:' + timezone + '\n' +
  'END:VTIMEZONE\n' +
  'BEGIN:VEVENT\n' +
  'SUMMARY:' + title + '\n' +
  'UID:@Default\n' +
  'SEQUENCE:0\n' +
  'STATUS:CONFIRMED\n' +
  'TRANSP:TRANSPARENT\n' +
  'DTSTART;TZID=' + timezone + ':' + convertToICSDate(startTime) + '\n' +
  'DTEND;TZID=' + timezone + ':' + convertToICSDate(endTime)+ '\n' +
  'DTSTAMP:'+ convertToICSDate(new Date()) + '\n' +
  'LOCATION:' + venueName + '\\n' + address + ', ' + city + ', ' + state + '\n' +
  'DESCRIPTION:' + description + '\n' +
  'END:VEVENT\n' +
  'END:VCALENDAR\n';

  download(title + '.ics', icsBody);
}

function get_project_data() {
    let order_container = document.getElementById("AjaxCon81");
    let right_side = order_container.getElementsByClassName("cb-2c-right");
    let order_number = right_side[0].innerText
    let client_container = document.getElementById("AjaxCon43");
    let right_side_client = client_container.getElementsByClassName("cb-2c-right");
    let customer = right_side_client[0].innerText;
    let project_name = document.getElementById("+inp+QUB").value;
    return ({ customer, order_number, project_name });
}

function create_icon_button(node, date_type, cal_date) {
    let my_button = document.createElement('div')
    my_button.innerHTML = '<a data-tooltip="Send to Outlook Calendar"id="downloadICS'+date_type+'"><span class="icon-send"></span></a>'
    my_button.setAttribute("class", "form-element datefield-input ng-scope ng-isolate-scope");
    node[0].appendChild(my_button);
    let p_data = get_project_data();
    cal_date.setHours(cal_date.getHours() - 3);
    console.log(cal_date);
    document.getElementById('downloadICS'+date_type).addEventListener('click', () => {
                createDownloadICSFile(
                    'Europe/Berlin',
                    cal_date,
                    cal_date,
                    date_type + ' ' + p_data.order_number + p_data.project_name + ' - ' + p_data.customer,
                    'Imported from Plunet BusinessManager',
                    '',
                    '',
                    '',
                    ''
                );
            });
};

function date_value(node, date_type) {
    let date_fields_div = node.getElementsByClassName("datefield-wrapper ng-isolate-scope popup-wrapper")
    for (let i = 0, len = date_fields_div.length, text = ""; i < len; i++) {
        if (date_fields_div[i].getAttribute("date-value")) {
             let dategroup = date_fields_div[i].getElementsByClassName("datefield-group")
             let my_date = parseInt(date_fields_div[i].getAttribute("date-value"))
             let cal_date = new Date(my_date)
             create_icon_button(dategroup, date_type, cal_date)
        }
    }
};


function order_due_date() {
    let date_type = "Order Due Date"
    let due_date_container = document.getElementById("AjaxCon94")
    let headline = due_date_container.nextSibling
    let due_dates_table = headline.nextSibling;
    let table_rows = due_dates_table.getElementsByTagName("tr")
    for (let i = 0, len = table_rows.length, text = ""; i < len; i++){
        if (table_rows[i].innerText.includes("Order due date")) {
            date_value(table_rows[i], date_type)
        }
    }
};



window.addEventListener('load', function () {
    if (window.location.pathname.includes('auftrag_allgemeinauftrag.jsp') && document.getElementById("AjaxCon94") && document.getElementById("navExtPlus")) 
    // on right page and only if user can see order due date and only for internal users who have the plus button) {
        order_due_date();
    }
})
