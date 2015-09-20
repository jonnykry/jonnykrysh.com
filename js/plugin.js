// To use this widget, edit your username / api key into the URL
$(document).ready( function() {
    // Start hidden on landing
    $("#widget").css({'visibility':'hidden'});

    var artist = null;
    var song = null;
    var album = null;
    var albumimg = null;
    var scrollYpos = 0;

    // NOTE:  to re-use this component, you must use your own API key
    // add a key to keys.json in the root directory with the same format as below
    $.ajax({
        dataType: 'json',
        url: 'keys.json',
        success: function(response) {
            var url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jonnydoesmusic&api_key=' + response.apikeys.lastfm;

            // Request data from LastFM
            $.ajax({
                url: url,
                success: function(response) {
                    displayTrack(response.getElementsByTagName('track'));
                }
            });
        }
    });

    // Hides widget on landing page
    $(window).scroll(function() {
        scrollYpos = $(document).scrollTop();
        if(scrollYpos == 0) {
            $("#widget").css({'visibility':'hidden'});
        }
        else {
            $("#widget").css({'visibility':'visible'});
        }
    });

    function displayTrack(track)
    {
        // Sometimes LastFM does not supply the image, which throws an error
        // We account for this with the try/catch.
        try {
            song = (track[0].getElementsByTagName("name")[0].childNodes[0].nodeValue);

            // Take previous song if current one hasn't loaded
            if(song.indexOf('(') > -1) {
                artist = (track[1].getElementsByTagName("artist")[0].childNodes[0].nodeValue);
                song = (track[1].getElementsByTagName("name")[0].childNodes[0].nodeValue);
                album = (track[1].getElementsByTagName("album")[0].childNodes[0].nodeValue);
                albumimg = (track[1].getElementsByTagName("image")[0].childNodes[0].nodeValue);
            }
            else {
                // add in album and img from current song
                artist = (track[0].getElementsByTagName("artist")[0].childNodes[0].nodeValue);
                album = (track[0].getElementsByTagName("album")[0].childNodes[0].nodeValue);
                albumimg = (track[0].getElementsByTagName("image")[0].childNodes[0].nodeValue);
            }
        } catch(err) {
            txt = "<a href='http://www.last.fm/user/jonnydoesmusic' target='_blank'>"
            + "<img src='" + albumimg + "' style='padding-right: 5px;'/> #np - <strong>" + artist + ' - "' + song + '"' + "</strong></a>";
            $("#text").append(txt);
            return txt;
        }

        // This text contains the html that is appended to that page.
        // Edit the link to contain your username.
        txt = "<a href='http://www.last.fm/user/jonnydoesmusic' target='_blank'>"
        + "<img src='" + albumimg + "' style='padding-right: 5px;'/> #np - <strong>" + artist + ' - "' + song + '"' + "</strong></a>";
        $("#text").append(txt);
        return txt;
    }

});
