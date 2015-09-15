chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});

$(window).on('hashchange', function(e){

    function whenElementLoaded2() {
            $('sj-paper-button[data-id=radio]').attr( "icon", "sj:instant-mix");    
            $('sj-paper-button[data-id=radio]').attr( "aria-label", "Instant mix");     
            $('sj-paper-button[data-id=radio]').attr( "title", "Instant mix");  
            $('sj-paper-button[data-id=share-artist]').attr( "icon", "av:play-shopping-bag");
            $('sj-paper-button[data-id=share-artist]').attr( "aria-label", "Shop for this Artist");
            $('sj-paper-button[data-id=share-artist]').attr( "title", "Shop for this Artist");
            $('sj-paper-button[data-id=share-artist]').attr( "data-type", "link");
            $('sj-paper-button[data-id=share-artist]').attr( "data-id", "share-artist");
            $('sj-paper-button[data-id=radio]').changeTag('sj-fab'); 
            $('sj-paper-button[data-id=share-artist]').changeTag('sj-fab');   
    }

    var intervalID2 = setInterval(function() {
        if ($(".actions").length) {
            clearInterval(intervalID2);
            whenElementLoaded2();
        }
    }, 50);

    function whenElementLoaded3() {
        $('#auto-playlist-thumbs-up').append('<core-icon relative="" id="icon" src="{{src}}" icon="{{icon}}" aria-label="menu" role="img"><svg viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" fit="" style="pointer-events: none; display: block;"><g><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g></svg></core-icon>');
        $('#auto-playlist-recent').append('<core-icon relative="" id="icon" src="{{src}}" icon="{{icon}}" aria-label="menu" role="img"><svg viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" fit="" style="pointer-events: none; display: block;"><g><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g></svg></core-icon>');
        $('#auto-playlist-promo').append('<core-icon relative="" id="icon" src="{{src}}" icon="{{icon}}" aria-label="menu" role="img"><svg viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" fit="" style="pointer-events: none; display: block;"><g><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g></svg></core-icon>');
        
        $('#auto-playlists div').remove();
        
        time=setInterval(function(){

        }, 500);
    }

    var intervalID3 = setInterval(function() {
        if ($("#nav").length) {
            clearInterval(intervalID3);
            whenElementLoaded3();
        }
    }, 100);

    function whenElementLoaded() {
            $('.column .material-card').unwrap();
            $('.material-card[data-size="small"][data-type="imfl"] .image-wrapper').attr( "class", "image-wrapper-new");
        time=setInterval(function(){
            $('.column .material-card').unwrap();
            $('.material-card[data-size="small"][data-type="imfl"] .image-wrapper').attr( "class", "image-wrapper-new");
        }, 500);
    }

    var intervalID = setInterval(function() {
        if ($(".new-listen-now").length) {
            clearInterval(intervalID);
            whenElementLoaded();
        }
    }, 100);


}).trigger('hashchange');

jQuery.fn.changeTag = function (newTag) {
    var q = this;
    this.each(function (i, el) {
        var h = "<" + el.outerHTML.replace(/(^<[\w-]+|[\w-]+>$)/g, newTag) + ">";
        try {
            el.outerHTML = h;
        } catch (e) { //elem not in dom
            q[i] = jQuery(h)[0];
        }

    });
    return this;
};

document.getElementsByClassName("menu-logo")[0] .style.backgroundImage="url('http://i.imgur.com/FpXIgNx.png')";

$('#drawer-panel').removeAttr( "narrow" );
                                                                        