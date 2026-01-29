'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f86fdb9f0b11d06456714f52ddef7ff6",
".git/config": "3c2dfc7192d159396360f62b15f7ca0e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "fb8fe0f25dc63e6fdfac4768197322c9",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "79fadcbcfde1e475bb879e7684bf9a25",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb789b578487b63b1e3866eb597fb1d5",
".git/logs/refs/heads/gh-pages2": "bf027ba957039c6e459337616e750eec",
".git/logs/refs/remotes/origin/gh-pages": "e3c3eb2f327aedb099e0a86f40008ac1",
".git/logs/refs/remotes/origin/gh-pages2": "bd0b250653a33974aa3363e0a3b5ef5a",
".git/objects/02/9909d8796b2cc3227303781f5e1e935e721677": "33e6d90500ffb83c4c097ea3fd31dc4e",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/3770ab90391a92604a32790e403a396a6915e8": "d88bca10d2fcdc6fe426c6b2e9dc1af9",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/12/a6143cd2e6554c1cbc3333dad47a9296eec28f": "546cc2e48efee8e9b08bb4256a9e1b7c",
".git/objects/15/eefbb01c2e31370c71516031326262b427fe51": "a72b7ab2b587d9e5121b86088c801d63",
".git/objects/18/8e8e354526167548471fc8342ff03e35e5ab30": "7b0f5e678c755935c9a2caa710289323",
".git/objects/1a/6b144749b4789498a46cbb8f5661cfb8f21590": "b8590742b9ec253b3927439820d310c6",
".git/objects/22/75d70581ba00815dfe8a3e9d50ce3ae24998ac": "a7e5044ddac7689c61123674cbef58e3",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/39/2c5c15058ca8d71ac3bdb5c9676dbecdc81652": "501437342b18e55c4c9048689fe197de",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/45/9bc7539a51bcc7fb19e93b70a28cce4b853dbb": "329d71eac6a90e75736f4f6cc8acb28c",
".git/objects/45/da3718e3ffca92899c6f7e05eb86bdb5f1af3d": "bbfd84b9918eb1e94dbebb3a49e21e05",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/76fbd4a1f8b9210b9bdb3b8b47d2b10ae9cc18": "bb99c6dbde0fa04048d178bd73fffe4e",
".git/objects/4a/6f68fb343e095d8dd5388b15f290b61e8d2c2e": "2a317ec8b9358578a28e40bd6d5dcc33",
".git/objects/4a/a54d68e13a695f3f0623cc3b8ca8a2146f03b2": "baa67a78d85a73d19d04052f34306dc5",
".git/objects/4b/6a8aebbab94acee7a622384c5fb58a033399f5": "55bb80431ab4b56a318fa8ae63f73245",
".git/objects/4f/caa76bf79dd674efe57c6d2eda4907e33477b4": "136174a351490f143ce3b8706f480600",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/d13642d6ee6ba6b2c9f60943ede63eba9f700e": "d227a670a459ed762b7d8b32f039531e",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/21cc4eb41b942bba26ef16bda7eecf01fccf91": "bb1f42712e7baaa33074ab7aa6733450",
".git/objects/61/70cd7d1596862f95e9ff61ec1a9a498db03082": "0be7632bb727faa2c7073bf1df42da6f",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/75/5bdf82c5aeaeb0fa117b9b0095e606e8e2ba83": "1f4070b06229d8a43312ba7ddf05e747",
".git/objects/75/796ac3ace30d2558bb51a779df4081a4e0cabe": "623780ea255fa01d3f792ead56cb1ac2",
".git/objects/7c/15cdd69b573a028a7b71ba0e5952e93bf40846": "68b3a5cbded570250f9c8258d2799090",
".git/objects/7c/1dddac158ecb1ec7a3213b284aa483b8a171f2": "6d01be01c0f0edb98c1bbda10f4786ec",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/a7379895a7100d6b21620ac49f19e9970c6cd1": "98deabfd66c99950ae278dd1807b31d1",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/87/806c6a5b3349460cf5347aea03190ad1c658fe": "0fd351cb81709de8c2c7e5535e09a39c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/fcdabf749a0bdda69b01b8724466969234e62d": "179037d75b9a992840a0ae5333e18d2e",
".git/objects/91/b9568b1e096993cb400e670e6bf8e2005a6de9": "6b93be6a3fa06a08235202d159042535",
".git/objects/92/5bbb2231444e50043ce89bcd4e4aef3040ea31": "aa75ab79e6edf10c131b714f7861db6e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/a2/22009e93ef676c80acb4d53a4022729568aa2d": "25079a791fdb04ef6b56eaf50c3b4bef",
".git/objects/a3/8e28dd835d8244fb9a4d02f131da9bbd87bf97": "3e8b9fabb2c0963e050dd3f9dec516e3",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ab/66c8aae4ef3ea88c40d95cd743c479e691e6e4": "c767237e0d20311161aee89cc1fcedf2",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b0/929fdee80c758d94dee8f4ad11d361c7738a4b": "f2a5bcde4f9fd698858cb84d23383822",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bd/035e27d34834b2de382088770315f8cf0df7e9": "4231622ad1ee0f5104769c43384612e1",
".git/objects/c5/672925f5da696a226b2ce454d87fc2df9b9aa4": "2cab93c90ae60143307028a353bb4305",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/ba8deae68d941284a330e8f5f9adf9083b33a4": "62e57913b157f98fda74c0a56e91783e",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
".git/objects/ce/a327fc8b2e449396db0aa64b3934e43374c8e5": "808bad9492f5605bf4367e50bc552808",
".git/objects/d0/6678f44ba1b211521b33fd916050c10fd2477e": "96a54ef383872fdc25b71accf015eb2f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/05f0e227bfad460eec7b821ca131056a419937": "7518b6b9577d64fb24d8efbbbbed0ddf",
".git/objects/f1/fdbc487da099db9e9f84a5a9d914bf12c998e7": "8c35c4a16be7fa3b74c4394434d91a49",
".git/objects/f2/98be9de6fc69f30db7f99ff2b5409422313640": "fac5910fb21bbd01d69abb087133c41e",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/741f460d010c500ec57a87ccb98598233681e3": "5832d9b6435c1b1f3b4ccffe963f2839",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/gh-pages2": "88eae9d46519d7d16cc41de5f1da4f6e",
".git/refs/remotes/origin/gh-pages": "7975ddd8559d5c979899f9fac104fc7b",
".git/refs/remotes/origin/gh-pages2": "88eae9d46519d7d16cc41de5f1da4f6e",
"assets/AssetManifest.bin": "6d1a8644fcc2d109179865787c5f1de0",
"assets/AssetManifest.bin.json": "b9dff7db535cbf1902ac34822cf3fce6",
"assets/assets/images/bac.png": "bb578e7ca0152ee1c933cbc02e49be16",
"assets/assets/images/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/images/instagram.png": "6d502e87783d611f2d606d55d541e139",
"assets/assets/images/linkedin.png": "75d2ca104a1903bc305fa6eed718012d",
"assets/assets/images/profile.jpeg": "d8c8431e810cfc366cd29a6d13712304",
"assets/assets/images/profile2.jpeg": "51ec80e209fd68901684db8463a8b76f",
"assets/assets/images/profile3.jpeg": "c70bc027594a8ed4826451322e4eaf5c",
"assets/assets/images/profile4.jpg": "6e0b9c765c02290448b9c290182919d9",
"assets/assets/images/tik-tok.png": "e30e4714ecadc84324ee6e65ae93d669",
"assets/assets/images/whats.png": "1da1618b88bbbb6a0aa49985c76f71c8",
"assets/assets/images/youtube.png": "37bf61e8c6f8144a2e025f6625a5d561",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "36607469f22d1e4ab345fb7fb41f2b54",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "2f84dd870021922bce3dc19d5ed4197d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "895f9eab833c238b73219813d44785f9",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
