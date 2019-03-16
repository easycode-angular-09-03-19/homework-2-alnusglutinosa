// 3. Есть два апи для получения и работы с новостями одно для получения новостей из USA второе из Ukraine. 
// Под эти апи создано по два интерфейса и по два класса. Переделайте это в namespaces.
//News api USA
var USA;
(function (USA) {
    class NewsService {
        constructor() {
            this.apiurl = 'https://news_api_usa_url';
        }
        getNews() { } // method
    }
    USA.NewsService = NewsService;
})(USA || (USA = {}));
// News api Ukraine
var UA;
(function (UA) {
    class NewsService {
        constructor() {
            this.apiurl = 'https://news_api_2_url';
        }
        getNews() { } // method get all news
        addToFavorite() { } // method add to favorites
    }
    UA.NewsService = NewsService;
})(UA || (UA = {}));
