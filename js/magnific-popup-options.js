$('.popup-youtube').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube: {
                index: 'youtube.com/', 
                id: function(url) {        
                    var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                    if ( !m || !m[1] ) return null;
                    return m[1];
                },
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            },
        }
    }
});