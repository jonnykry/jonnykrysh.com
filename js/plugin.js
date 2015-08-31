// To use this widget, edit your username / api key into the URL
$(document).ready( function() {
    // Start hidden on landing
    $("#widget").css({'visibility':'hidden'});

    var artist = null;
    var song = null;
    var album = null;
    var albumimg = null;
    var scrollYpos = 0;

    var xml = httpGet("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jonnydoesmusic&api_key=c64600ddca04dfc310703c59fe1b5230");

    var track = xml.getElementsByTagName("track");

    var txt = displayTrack(track);

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

    function httpGet(theUrl)
    {
        var xmlHttp;
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false);
        xmlHttp.send(null);
        return xmlHttp.responseXML;
    }

    function displayTrack(track)
    {
        // Sometimes LastFM does not supply the image. This will account for it.
        // This occurs whenever there is a (feat. ____) tag on the current song.
        // Taking the song before it works.
        try {
            artist = (track[0].getElementsByTagName("artist")[0].childNodes[0].nodeValue);
            song = (track[0].getElementsByTagName("name")[0].childNodes[0].nodeValue);

            // Take prev. song instead
            if(song.indexOf('(') > -1) {
                artist = (track[1].getElementsByTagName("artist")[0].childNodes[0].nodeValue);
                song = (track[1].getElementsByTagName("name")[0].childNodes[0].nodeValue);
                album = (track[1].getElementsByTagName("album")[0].childNodes[0].nodeValue);
                albumimg = (track[1].getElementsByTagName("image")[0].childNodes[0].nodeValue);
            }
            else {
                // add in album and img from current song
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
