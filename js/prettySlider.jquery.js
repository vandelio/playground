  /* Setting defaults */
  /* Speed */
  var speed = 7000;
  
  function startSlider() {
                var container = $('.prettySlider');
                var tmpItemContainer = [];
                container.find('.prettyLi').each(function (i) {
                    var i = $(this).data('slide');
                    tmpItemContainer.push(i);

                });
                // tmpItemContainer array with All data-slide li items  tmpItemContainer 
                // found by each .prettyLi inside a .prettySlider

                var curNewsIndex = -1; // set default start point
                localStorage.clear('actLi');
                // interval fetching data-slide attr. from tmpItemContainer
                var intervalID = setInterval(function () {
                    ++curNewsIndex;
                    if (curNewsIndex >= tmpItemContainer.length) {
                        curNewsIndex = 0;

                    }
                    setTicker(tmpItemContainer[curNewsIndex]);   // setting the data-slide attr to setTicker
                }, speed);

                localStorage.setItem('actLi', intervalID);

                setTimeout(hideItem(), 0);
                showItem();



                // Show the first slide

//        $("ul").find("[data-slide='" + intervalID + "']").slideDown().removeClass('hidden');


                // getting the data-slide attr. from interval fetch
                function setTicker(item) {
                    // saving local active li
                    localStorage.setItem('actLi', item);
                    // hide old li's 
                    setTimeout(hideItem(), 0);


                    // delaying show function by 0.5 s
                    setTimeout(showItem(), 500);
                    // setting active to previous


                    localStorage.setItem('prevLi', item);
                }



                function hideItem() {
                    var main = $("ul").find("[data-slide='" + localStorage.getItem('prevLi') + "']");
                    var psH1 = $("ul").find("[data-slide='" + localStorage.getItem('prevLi') + "']").find('h1');
                    var psCircle = $("ul").find("[data-slide='" + localStorage.getItem('prevLi') + "']").find('.prettyCircle');
                    var psH6 = $("ul").find("[data-slide='" + localStorage.getItem('prevLi') + "']").find('h6');

                    $('.prettyLi').addClass('hidden');
                    // show children of li
                    psH1.fadeOut();
                    psCircle.fadeOut().toggleClass('scaleMeBig hidden');
                    psH6.fadeOut();




                }

                function showItem() {
                    var main = $("ul").find("[data-slide='" + localStorage.getItem('actLi') + "']");
                    var psH1 = $("ul").find("[data-slide='" + localStorage.getItem('actLi') + "']").find('h1');
                    var psCircle = $("ul").find("[data-slide='" + localStorage.getItem('actLi') + "']").find('.prettyCircle');
                    var psH6 = $("ul").find("[data-slide='" + localStorage.getItem('actLi') + "']").find('h6');

                    main.removeClass('hidden');
                    // show children of li
                    psH1.fadeIn(600);
                    psCircle.fadeIn(900).addClass(' scaleMeBig ').removeClass('hidden');
                    psH6.delay(600).fadeIn(600);


                }

            }
            // initializing slider
            function InitPS() {

                setTimeout(startSlider, 500);
            }

            InitPS();