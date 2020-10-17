
/**
 * @method getDom
 * @param {id} id
 * @returns {HTMLElement}
 */
function getDom(id) {
  return document.getElementById(id);
}

(function () {

  var extTitle = "<h4 class='half' >Search custom</h4>";
  extTitle += "<h4 class='half' >Change type</h4>";

  function createContainers() {

    var btn = document.createElement("div");
    btn.id = "nContainer";
    document.querySelector(".FPdoLc.tfB0Bf center").appendChild(btn);

  }

  function createContainerNode(id) {

    var btn = document.createElement("div");
    btn.id = "slotContainer" + id;
     getDom("nContainer").appendChild(btn);
  }

  function fnAddButtons() {

    var btn;

    /**
     * @description Tool header
     */
    createContainerNode("ToolHeader");
    getDom("slotContainerToolHeader").innerHTML = extTitle;
    getDom("nContainer").appendChild(getDom("slotContainerToolHeader"));

    createContainerNode("WebSearch");
    /**
     * @description Search only links how
     * contain search string in url
     */
    btn = document.createElement("input");
    btn.value = "Search string in url";
    btn.id = "search-mm-btn";
    btn.title = "Search";
    btn.type = "submit";
    btn.myData = "inurl"
    getDom("slotContainerWebSearch").appendChild(btn);

    getDom("slotContainerWebSearch").innerHTML += `
        <div class="dropdown">
          <div id="pseudoSelect" class="caption">inurl</div>
          <div class="list">
            <div class="item">allinanchor</div>
            <div class="item">allintext</div>
            <div class="item">allintitle</div>
            <div class="item">allinurl</div>
            <div class="item">cache</div>
            <div class="item">filetype</div>
            <div class="item">id</div>
            <div class="item">inanchor</div>
            <div class="item">info</div>
            <div class="item">intext</div>
            <div class="item">intitle</div>
            <div class="item">inurl</div>
            <div class="item">link</div>
            <div class="item">related</div>
            <div class="item">site</div>
            <div class="item">define</div>
          </div>
        </div>
      `;

    /**
     * @description Search only links
     * on some domain.
     */
    createContainerNode("SearchByDomain");

    btn = document.createElement("input");
    btn.value = "Search site";
    btn.id = "search-site-btn";
    btn.title = "Search by domain name";
    btn.type = "submit";
    getDom("slotContainerSearchByDomain").appendChild(btn);

    /**
     * @description Search input for
     * custom `domain`
     * For example
     *  yahoo.com
     *  maximumroulette.com
     *  linkedin.com
     */
    btn = document.createElement("input");
    btn.value = "https://maximumroulette.com";
    btn.id = "search-site-input";
    btn.title = "Search only domain name";
    btn.type = "input";
    // getDom("nContainer").appendChild(btn);
    getDom("slotContainerSearchByDomain").appendChild(btn);

  }

  /**
   * @description Atach events listeners.
   */
  function fnDefineEvents() {

    /**
     * @description Search `inurl` event call.
     */
    document
      .getElementById("search-mm-btn")
      .addEventListener("click", function (event) {
        fnSearch(event.target.myData);
      });

    /**
     * @description Search `site` event call.
     */
    document
      .getElementById("search-site-btn")
      .addEventListener("click", function (event) {
        // alert(event.target.value)
        siteSearch(event.target.value.split(" ")[1]);
      });

  }

  function fnSearch(str) {
    document.querySelector(".gLFyf.gsfi").value =
      getDom("pseudoSelect").innerHTML + ":" + document.querySelector(".gLFyf.gsfi").value;
  }

  function siteSearch(str) {
    var currentSite = document.getElementById("search-site-input").value;
    document.querySelector(".gLFyf.gsfi").value =
     "site:" + currentSite + " "+ document.querySelector(".gLFyf.gsfi").value;
  }

  createContainers();
  fnAddButtons();
  fnDefineEvents();

  $(function() {

  $('.dropdown > .caption').on('click', function() {
    $(this).parent().toggleClass('open');
  });

  $('.dropdown > .list > .item').on('click', function() {
    $('.dropdown > .list > .item').removeClass('selected');
    $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text( $(this).text() );
    // console.log(">>>", getDom("pseudoSelect").innerHTML , " <<<",  $(this).text() )
  });

  $(document).on('keyup', function(evt) {
    if ( (evt.keyCode || evt.which) === 27 ) {
      $('.dropdown').removeClass('open');
    }
  });

  $(document).on('click', function(evt) {
    if ( $(evt.target).closest(".dropdown > .caption").length === 0 ) {
      $('.dropdown').removeClass('open');
    }
  });

});

})();
