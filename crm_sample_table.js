function tableCustomer() {
    function getCustomerInfo() {
        const customerName = document.getElementById("+inp+Nachname").value;
        return customerName;
    }

    async function fusionCall(customerName) {
        // you could now use your CustomerName or CustomerID for a lookup in your CRM
        try {
            const options = {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            };

            const response = await fetch('https://rickandmortyapi.com/api/character?page=1');
            const json = await response.json();
            return json.results;
        } catch (error) {
            console.error('Error in Rest CALL:', error);
            return { data: [] };
        }
    }

    function buildRows(crmData) {
        let rows = '';

        crmData.forEach(data => {
            const date = new Date(data.created);
            rows += `<tr>
               <td>${date.toDateString()}</td>
               <td>${data.name}</td>
               <td>${data.status}</td>
               <td>${data.species}</td>
             </tr>`;
        });

        return rows;
    }

    function createTableSection(rows) {
        const tableDiv = `<div>
                      <table class="new row-lines big-table pad-cols-10 fill-h row-list-base">
                        <thead>
                          <tr>
                            <th><div>Created</div></th>
                            <th><div>Character</div></th>
                            <th><div>Status</div></th>
                            <th><div>Species</div></th>
                          </tr>
                        </thead>
                        <tbody>
                          ${rows}
                        </tbody>
                      </table>
                    </div>`;

        return tableDiv;
    }

    function createContentBox(tableDiv) {
        const divHtml = document.createElement("div");
        divHtml.setAttribute("class", "ContentBox ContentBox1Spalte");
        divHtml.innerHTML = `<div class="ContentBoxHeader"><div class="divTable"><div class="divTableCell "><h1 class="jumpNavTarget" id="External_CRM">External Information from Rick and Morty</h1></div></div></div>`;
        divHtml.innerHTML += tableDiv;

        return divHtml;
    }

    function createDivider() {
        const divTrenner = document.createElement("div");
        divTrenner.setAttribute("class", "ContentBoxTrenner");

        return divTrenner;
    }

    function insertContentBox(divHtml, divTrenner) {
        const contentContainer = document.getElementById("bg_site_inner");
        const boxes = contentContainer.getElementsByClassName("ContentBox");
        contentContainer.insertBefore(divHtml, boxes[1]);
        contentContainer.insertBefore(divTrenner, boxes[2]);
    }

    function updateJumpNav() {
        const jumpNav = document.getElementById("jumpNavigationBar");
        const sampleJumpLink = jumpNav.firstChild;
        const newJumpLink = sampleJumpLink.cloneNode(true);
        newJumpLink.removeAttribute("id");
        newJumpLink.setAttribute("class", "scroll");
        newJumpLink.setAttribute("href", "#External_CRM");
        newJumpLink.innerHTML = "Rick and Morty External";
        jumpNav.insertBefore(newJumpLink, document.getElementById("jumpMenuLeiste_IDY3"));
    }

    async function buildTable() {
        const customerName = getCustomerInfo();
        const crmResponse = await fusionCall();
        const crmData = crmResponse;

        if (crmData.length > 0) {
            const rows = buildRows(crmData);
            const tableDiv = createTableSection(rows);
            const divHtml = createContentBox(tableDiv);
            const divTrenner = createDivider();
            insertContentBox(divHtml, divTrenner);
            updateJumpNav();
        }
    }
  buildTable();
}

window.addEventListener('load', () => {
  if (document.getElementById("navExtPlus")) {
    if (window.location.pathname.includes('partner_kunde.jsp')) {
      tableCustomer();
    }
  }
});
