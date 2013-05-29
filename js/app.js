$(function() {
    $('#query-input').focus(); // Keep input focused on page load

    $('#query').submit(function() { // Trigger on submit
        var input = $('#query-input').val(); // Get entire input string
        var type = input.match(/^(\w+)/)[0]; // Get first word as set as type
        var query = input.substr(input.indexOf(" ") + 1); // Get query minus first word (type)

        switch (type) {

            /* Search Engines */
            case "google":
                location.href = "https://google.com/search?q=" + query;
                break

            case "bing":
                location.href = "https://bing.com/search?q=" + query;
                break

            case "yahoo":
                location.href = "https://search.yahoo.com/search?p=" + query;
                break

            case "duckduckgo":
            case "duck":
            case "ddg":
                location.href = "https://duckduckgo.com/?q=" + query;
                break

            case "wolframalpha":
            case "wolfram":
                location.href = "http://www.wolframalpha.com/input/?i=" + query;
                break

            /* Wikis */
            case "wiki":
            case "wikipedia":
                location.href = "http://en.wikipedia.org/w/index.php?search=" + query;
                break

            /* Entertainment */
            case "imdb":
                location.href = "http://imdb.com/find?q=" + query;
                break

            /* Social */
            case "github":
                location.href = "https://github.com/search?q=" + query;
                break

            case "reddit":
                location.href = "http://www.reddit.com/search?q=" + query;
                break

            case "hackernews":
            case "hn":
                location.href = "https://www.hnsearch.com/search#request/all&q=" + query;
                break

            /* Dictionaries */
            case "dictionary":
            case "define":
                location.href = "http://dictionary.reference.com/browse/" + query;
                break

            case "thesaurus":
                location.href = "http://thesaurus.com/browse/" + query;
                break

            /* Programming Documentations */
            case "python":
            case "python2":
                location.href = "http://docs.python.org/2/search.html?q=" + query;
                break

            case "python3":
                location.href = "http://docs.python.org/3/search.html?q=" + query;
                break

            /* Stack Exchange */
            case "stackoverflow":
            case "so":
                location.href = "http://stackoverflow.com/search?q=" + query;
                break

            /* Fallback on Google */
            default:
                location.href = "https://google.com/search?q=" + query;
                break

        }

        return false
    });
});
