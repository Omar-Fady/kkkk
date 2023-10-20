
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.60e0d77d246b47c69b35.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/540.baseline.en.0ae1dc2b0c212b4328f7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/395.baseline.en.f2e3c9572ea03097ed15.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.baseline.en.73626a558caf95347340.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.2dc91d83fadabff75966.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.baseline.en.68ceefcc66cfc32ca175.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/399.baseline.en.9da49ee9cebb0fa0d6db.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/917.baseline.en.88daeefe46c532f2180e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.baseline.en.2bcddb1bebd8d00bde9a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/Redesign.baseline.en.3c4b9923d0f3acb64190.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/540.baseline.en.337996b373d6d9a9a608.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.a3984c31989d09f92fc0.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/399.baseline.en.dcc324c2cd05dddea73b.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/661.baseline.en.aa4ca9ceddf0e6806e44.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0577/4612/9085/files/Untitled-1-01_cbb0eca1-6bbc-4546-81ca-96b8dbf49869_x320.png?v=1640525412"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  