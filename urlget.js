// Define your video source URL here
        function getUrlParameterCheck(name, url) {
            var startIndex = url.indexOf('https://goddardduncan.github.io/epg/') + 'https://goddardduncan.github.io/epg/'.length;
            return url.slice(startIndex);
        }

        function getUrlParameter(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }
	var videoSourceUrl = getUrlParameter('url');
