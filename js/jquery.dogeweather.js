//  wow
(function($) {
    //  such plugin
    $.doge = function(tings) {
        //  very jquery
        var doge = $('body').css('font-family', 'Comic Sans MS, Comic Sans, Chalkboard, Helvetica, Arial, sans-serif');

        var suchcolors = [ 
            "#0066FF", "#FF3399", "#33CC33", "#FFFF99", "#FFFF75", "#8533FF", 
            "#33D6FF", "#FF5CFF", "#19D1A3", "#FF4719", "#197519", "#6699FF", "#4747D1",
            "#D1D1E0", "#FF5050", "#FFFFF0", "#CC99FF", "#66E0C2", "#FF4DFF", "#00CCFF",
        ];

        function randomFrom(arr){
        var randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
        }
        
        //  much array
        //var tings = $.extend(['doge', 'shibe', 'excite', 'impress', 'skill', 'warn'], tings);
        
        var r = function(arr) {
            if(!arr) {
                arr = tings;
            }
            toReturn =arr[Math.floor(Math.random() * arr.length)];
            return toReturn;
        };

        //Get Weather
        var id = $("#weather-id").text();
        var suchid = parseInt(id);
        var suchicon = $("#weather-icon").text();
        var suchdescription = $("#weather-desc").text();
        var temp = $("#degreesCelsius .number").text();
        var suchtemp = parseInt(temp);

//        console.log(suchicon);
//        console.log(suchtemp + "temp");
        if (suchtemp <= -30)
        {
            var sofirst = "zima"; //"winter";
            var sosecond = "mrozik";//"freeze";
            var sothird = "koło podbiegunowe";//"polar vortex";
            var sofourth = "poyebao";//"ridiculous";
            var sofifth = "piesełbernacja";//"hibernate";
            var sosixth = "epoka lodowcowa";//"climate change";
        }
        else if (suchtemp > -30 && suchtemp <= -15)
        {
            var sofirst = "zimno";//"cold";
            var sosecond = "mrozik"; //"freeze";
            var sothird = "drgawki"; //"shiver";
            var sofourth = "lód"; //"ice";
            var sofifth = "fujka"; //"yuck";
            var sosixth = "zmiana klimatu"; //"climate change";
        }
        else if (suchtemp > -15 && suchtemp <= -7)
        {
            var sofirst = "lodowato w palce"; //"icy";
            var sosecond = "niedobra pora roku"; //"winter";
            var sothird = "chłodek pod czapeczką"; //"chill";
            var sofourth = "ostra zimka"; //"crisp";
            var sofifth = "brrrrr"; //"brrrrr";
            var sosixth = "zimnawo"; //"cool"
        }
        else if (suchtemp > -7 && suchtemp <= 0)
        {
            var sofirst = "sliski chodnik"; //"icy";
            var sosecond = "rękawiczki potrzebne"; //"frost";
            var sothird = "nie czuć paluszków"; //"numb";
            var sofourth = "dygotki"; //"shiver";
            var sofifth = "brrr"; //"brrr";
            var sosixth = "chłodek"; //"chilly";
        }
        else if (suchtemp > 0 && suchtemp <= 10)
        {
            var sofirst = "nieciepło nawet w swetrze"; //"chilly";
            var sosecond = "niepokój pieseła"; //"concern";
            var sothird = "płaszcz na ogon"; //"coat";
            var sofourth = "przymrozek uszu"; //"frosty";
            var sofifth = "O.o"; //"uh oh";
            var sosixth = "brrrr"; //"brrrr";
        }
        else if (suchtemp > 10 && suchtemp <= 20)
        {
            var sofirst = "średnio na pieseła"; //"moderate";
            var sosecond = "umiarkowany ziąb"; //"mild";
            var sothird = "spoko maroko"; //"okay";
            var sofourth = "może być"; //"medium";
            var sofifth = "niegorąco"; //"cool";
            var sosixth = "cokolwiek"; //"whatever";
        }
        else if (suchtemp > 20 && suchtemp <= 30)
        {
            var sofirst = "piesełowi ciepło"; //"heat";
            var sosecond = "ciepełko "; //"warmth";
            var sothird = "klimacik"; //"climate";
            var sofourth = "język na wierzchu"; //"sweating";
            var sofifth = "maściście"; //"balmy";
            var sosixth = "ładny dzionek"; //"nice day";
        }
        else if (suchtemp > 30)
        {
            var sofirst = "parówa"; //"boiling";
            var sosecond = "piekarnik"; //"bake";
            var sothird = "topienie pieseła"; //"melt";
            var sofourth = "zgon"; //"dying";
            var sofifth = "cierpienie"; //"suffer";
            var sosixth = "globalne opieślenie"; //"global warming";
        }
        else
        {
            var sofirst = "niepokój"; //"concern";
            var sosecond = "klimacik"; //"climate";
            var sothird = "stopnie"; //"degrees";
            var sofourth = "niewruszony"; //"shrug";
            var sofifth = "wow"; //"wow";
            var sosixth = "celsjusz"; //"celcius";
        }
        

//        console.log(suchtemp);

        //Clouds
        if(suchicon=="01d") {
//            tings = $.extend(['clear', 'sky', 'lovely', 'amaze', 'wonderful','sun', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['pieseł w słońcu','czyste', 'niebo', 'pięknie', 'wspaniale', 'uroczo','słonko', 'pogoda', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="01n") {
//            tings = $.extend(['night', 'amaze', 'clear', 'lovely', 'wonderful', 'sky', 'stars', 'moon', 'dark', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['pieseł po zmroku','noc', 'wspaniale', 'czysto', 'słodko', 'pięknie', 'niebo', 'gwiazdy', 'księzyc', 'ciemno', 'pogoda', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="02d") {
//            tings = $.extend(['cloud', 'okay', 'cumulus', 'amaze', 'sky', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['pieseł z głową w chumrach','chmurka', 'wporzo', 'cumulus', 'wypas', 'niebo', 'pogoda', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="02n") {
//            tings = $.extend(['dark', 'cumulus', 'amaze', 'cloud', 'star', 'space', 'after dark', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['ciemno', 'cumulus', 'olśnienie', 'chmura', 'gwiazda', 'wszechświat', 'po zmroku', 'pogoda', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="03d") {
//            tings = $.extend(['cloudy', 'scattered', 'overcast', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['pochmurnie', 'piseł rozproszony', 'szary pieseł', 'pogoda pod piesełem', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="03n") {
//            tings = $.extend(['cloud', 'scattered', 'clear sky', 'night time', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['chmury', 'piseł rozproszony', 'czyste niebo', 'noc', 'pogoda pod piesełem', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="04d" || suchicon=="04n") {
//            tings = $.extend(['gloomy', 'clouds', 'shady', 'boring', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['ponuro', 'chmurki', 'ciemno', 'nudy na pudy', 'pogoda pod piesełem', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="09d") {
//            tings = $.extend(['cloud', 'showers', 'raindrop', 'wet', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['chmura', 'przelotne opady', 'kropelki', 'mokro', 'pogoda pod piesełem', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="09n") {
//            tings = $.extend(['cloud', 'showers', 'raindrop', 'wet', 'night', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['chmura', 'kapuśniaczki', 'kropelki', 'mokro', 'noc', 'pogoda pod piesełem', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="10d") {
//            tings = $.extend(['raindrops', 'soak', 'wet', 'slippery', 'shower', 'terrible', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['krople deszczu', 'przemoczony pieseł', 'mokro', 'ślisko', 'deszczyk', 'tragicznie', 'pogoda pod piesełem', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="10n") {
//            tings = $.extend(['raindrops', 'soak', 'wet', 'slippery', 'shower', 'terrible', 'scary', 'dark cloud', 'night', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['krople deszczu', 'przemoczony', 'mokro', 'ślisko', 'deszczyk', 'tragicznie', 'strasznie', 'ciemna chmura', 'noc', 'pogoda pod piesełem', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="11d") {
//            tings = $.extend(['thunder', 'loud', 'scare', 'bolt', 'lightning', 'terrible', 'hide', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['piorun', 'głośno', 'strach', 'błyskawica', 'grom', 'strasznie', 'schowany', 'pogoda pod piesełem', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="11n") {
//            tings = $.extend(['scary night', 'thunder', 'loud', 'crash', 'bolt', 'lightning', 'terrible', 'hide', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['straszna noc', 'grom', 'głośno', 'huczno', 'piorun', 'błyskawica', 'dziadowstwo', 'schowany', 'pogoda pod piesełem', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="13d") {
//            tings = $.extend(['snow', 'white', 'soft', 'icy', 'snowflake', 'powder', 'joy', 'shiny', 'festive', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['śnieg', 'biao', 'miękko', 'lodowato', 'płatki śniegu', 'puszek', 'radość', 'świecąco', 'świątecznie', 'pogoda pod piesełem', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="13n") {
//            tings = $.extend(['snow', 'white', 'night time', 'slippery', 'icy', 'snowflake', 'powder', 'joy', 'shiny', 'festive', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['śnieżek', 'biao', 'nocka', 'ślsko', 'lód', 'płatki śniegu', 'puszek', 'radość', 'świecąco', 'świątecznie', 'pogoda pod piesełem', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        if(suchicon=="50d" || suchicon=="50n") {
//            tings = $.extend(['mist', 'vapor', 'creepy', 'spook', 'blind', 'low visbility', 'darkness', 'gloomy', 'depress', 'weather', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
            tings = $.extend(['mgiełka', 'para wodna', 'kripi', 'drgawki', 'nic nie widać', 'niska widoczność', 'ciemność', 'mroczno', 'deprecha', 'pogoda pod piesełem', sofirst, sosecond, sothird, sofourth, sofifth, sosixth], tings);
        }
        
        var very = doge.append('<div class="such overlay" />').children('.such.overlay').css({
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            pointerEvents: 'none'
        });
        
        $('img').each(function() {
            $(this).attr('src', 'https://images.encyclopediadramatica.es/3/3e/Doge_full_image.jpg');
        });
     
        setInterval(function() {
            var newDogefix = [
                'such ' + r(),
                'very ' + r(), 'much ' + r(),
                'so ' + r(),
                'wow ' + r()
            ];
            $('.such.overlay').append(
                '<span style="position: absolute; left: ' + Math.random()  *80 + '%;top: ' + Math.random()  *80 + '%;font-size: ' + Math.max(20, (Math.random() * 30 + 24)) + 'px; color:' + randomFrom(suchcolors) + ';">'
                    + r(newDogefix) +
                '</span>');
                var suchnumber = $("span").length;
                if (suchnumber > 8 )
                {
                    $('.such span:nth-child(1)').remove();
                }
        }, 1500);
    };
})(jQuery);