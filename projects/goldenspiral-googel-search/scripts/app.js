
/**
 * @method getDom
 * @param {id} id
 * @returns {HTMLElement}
 */
function getDom(id) {
  return document.getElementById(id);
}

(function () {

  var extTitle = "<h2>GoldenSpiral google custom search tool</h2>";

  function createContainers() {

    var btn = document.createElement("div");
    btn.id = "nContainer";
    btn.innerHTML = extTitle;
    document.querySelector(".FPdoLc.tfB0Bf center").appendChild(btn);

  }

  function fnAddButtons() {

    var btn;

    /**
     * @description Search only links how
     * contain search string in url
     */
    btn = document.createElement("input");
    btn.value = "Contain search string in url";
    btn.id = "search-mm-btn";
    btn.type = "submit";
    btn.myData = "inurl"
    getDom("nContainer").appendChild(btn);

    getDom("nContainer").innerHTML += `
        <div class="dropdown">
          <div class="caption">inurl</div>
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
    btn = document.createElement("input");
    btn.value = "Search sites";
    btn.id = "search-site-btn";
    btn.type = "submit";
    getDom("nContainer").appendChild(btn);

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
    btn.type = "input";
    getDom("nContainer").appendChild(btn);

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
        alert(event.target.value)
        siteSearch(event.target.value.split(" ")[1]);
      });

  }

  function fnSearch(str) {
    document.querySelector(".gLFyf.gsfi").value = "inurl:" + document.querySelector(".gLFyf.gsfi").value;
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
