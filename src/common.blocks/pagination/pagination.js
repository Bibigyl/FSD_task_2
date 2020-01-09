document.addEventListener("DOMContentLoaded", function(event) { 
  
  var totalElements = 300; // elements to show on the page
  var perPage = 20; // how many elements need to show per page
  var visibleLinks = 4; // how many links need to be visible;

  var linksCount = Math.ceil(totalElements / perPage); // pagination links count;
  var paginationContainer = $(".js-pagination__pages");
  var paginationBody = $(".paginationBody"); // where the pagination will be append

  // create the first array of links
  const paginationArray = [...Array(linksCount > visibleLinks ? visibleLinks + 1 : linksCount).keys()].slice(1); 
  paginationArray.splice(visibleLinks - 1, 1, linksCount);

  // Pagination init function
  (function paginationInit(currentPage = 1) {
    if (linksCount > visibleLinks) {
      if ( linksCount - currentPage < visibleLinks - 1 && currentPage !== paginationArray[1] ) {
        if (linksCount - currentPage >= visibleLinks - 2) {
          currentPage = currentPage - 1;
        } else if(currentPage !== paginationArray[paginationArray.length - 2] && 
                  currentPage !== paginationArray[paginationArray.length - 1]){
          return;        
        }else {
          currentPage = currentPage - 1 - (visibleLinks - 2 - (linksCount - currentPage));
        }
      } else if (currentPage !== 1) {
        if (
          currentPage > paginationArray[1] &&
          currentPage < paginationArray[paginationArray.length - 2]
        ) {
          return;
        } else if ( currentPage === paginationArray[1] ){
          if( currentPage - (visibleLinks - 2) >= -1 ) {
            currentPage = currentPage - (visibleLinks - 2) >= 2 ? currentPage - (visibleLinks - 2) : 1;
          }else{
            currentPage = 1;
          }
        } else {
          currentPage -= 1;
        }
      } else {
        currentPage = 1;
      }
      paginationArray.splice(1, paginationArray.length - 2,...Array(visibleLinks - 2)
          .fill(currentPage)
          .map((e, i) => (e += i + 1))
      );
    }
    
    paginationContainer.html("");
    
    paginationArray.map(e => {
      paginationContainer.append("<a href=" + e + ">" + e + "</a>");
    });
    if(paginationArray[1] > 2) {
      $(paginationContainer.children("a")[1]).before("<span>...</span>");
    }
    if(paginationArray[paginationArray.length - 2] < linksCount - 1) {
      $(paginationContainer.children("a")[paginationArray.length - 1]).before('<span>...</span>')
    }
    paginationContainer.children("a").on("click", function(e) {
      e.preventDefault();
      paginationInit(+$(e.target).attr("href"));
    });
  })();

});