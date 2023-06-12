function build_news_ticker(){
    function create_style(){
        // create a style element
        const style = document.createElement('style');

        // add the CSS as a string using template literals
        style.appendChild(document.createTextNode(`
											#marquee-cont {
											  background: #f4f4f4;
											  margin-top:10px;
											}
											#marquee-cont marquee {
											  margin-top: 5px;
											  color: #4ba0c3;
											}
											#marquee-news {
											  color: #ffffff;
											  background: #1174A8;
											  padding: 5px;
											}
											#ticker-title{
											  border:none;
											  padding:5px 20px;
											  background:#1174A8;
											  color:white;
											}
											#ticker-title:focus{
											  outline:none;
											}`)
                         );
        return style;
    };

    function create_ticker(css_style){
        const my_html_ticker = `
				<div id="marquee-cont">
				  <table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
					<td width="12px">
        <span onclick="hide_marquee()" data-tooltip="Hide until next login" class='icon-cancel' width='12px' style='margin:0 8px; color:#4ba0c3'></span>
      </td>
					  <td id="marquee">
						<marquee onmouseover="this.stop();" onmouseout="this.start();" id='scroll'>
						</marquee>
					  </td>
					</tr>
				  </table>
				</div>`
        const head = document.getElementsByTagName('head')[0];
        head.appendChild(css_style);
        const page = document.getElementById("bg_site_inner");
        const dashboard = document.getElementsByClassName("ContentBox ContentBox1Spalte")[0];
        let my_new_div = document.createElement("div")
        my_new_div.innerHTML = my_html_ticker;
        page.insertBefore(my_new_div, dashboard);
    };

    function fill_ticker(my_news){
        //array of news
        // const news = ["Plunet 9 New Features","Password management: User-centered, controlled, and improved", "Plunet Hub & OAuth: Safely connect additional services through API authentication", "Modernization: Providing high scalability", "PDF Creation: New fully native solution", "Customization: Use the new JS injection"]
        let news = my_news
        //logo
        const logo = "<span class='icon-dot-dashboard' width='12px' style='margin:0 8px'></span>";
        let tickerText = "";
        //looping through the news array
        for(let i=0; i<news.length; i++){
			if (news[i].link){
				tickerText+="<a href='"+news[i].link+"' target='_blank'>"+news[i].title.rendered+"</a>";
			}
			else {
				tickerText+=news[i].slug;
			}
            //adds the logo in between news items
            if(i!=news.length-1){
                tickerText+=logo;
            }
        }
        document.querySelector("#scroll").innerHTML = tickerText;
    };

    // Main Function
    // REST CALL to Datasource
    var fusion_call = async function(){
		const options = {
		method: 'GET',
			headers: {				
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json'
			}
		};

		var response = await fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=5&context=embed');
		var json = await response.json();

		return json
        };
        fusion_call()
        let css = create_style();
        create_ticker(css)
        var build_ticker = async function(){
            var news_results = await fusion_call();
            fill_ticker(news_results);
        };
        build_ticker();
        console.log("News item added");
};

function hide_marquee() {
	document.getElementById("marquee-cont").style.display="none"
	sessionStorage.setItem("dashboard_marquee", "hidden")
};


window.addEventListener('load', function () {
    if (window.location.pathname.includes('buero_termine.jsp') && document.getElementById("navExtPlus"))
    // on right page and only for internal users who have the plus button
    {
        build_news_ticker();
    }
})
