(function() {
 const messages = JSON.parse("{\"xG/RYQ\":\"App Sandbox Editor page\",\"v/GPpw\":\"An error occurred and we couldn’t load the app’s JavaScript bundle from {0}.\\n\\nPlease check that the URL is correct and that the server is running on that address.\\n\\nIf you’re using Safari, enable HTTPS for the development server or upload your app bundle to the Developer Portal.\\n\\nIf you’re using Canva’s desktop app, we recommend switching to a web browser. Otherwise you’ll need to generate a self-signed SSL certificate or upload your app bundle to the Developer Portal.\",\"TRCV3w\":\"The clipboard API’s `write` method is not fully supported in all browsers. Use `writeText` instead for better cross-browser compatibility.\",\"YfcEnQ\":\"Media playback is restricted when the App is in the suspended state.\",\"taqVJQ\":\"Something went wrong on our end.\",\"Zdj8UA\":\"The following required activity actions were not registered: {0}\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const loaded = cmsg["loaded"] = cmsg["loaded"] || {};
 loaded["98973_de-DE"] = 1;
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["de-DE"] = strings["de-DE"] ? Object.assign(strings["de-DE"], messages) : messages;
})();