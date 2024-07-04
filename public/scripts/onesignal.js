// src/scripts/onesignal.js
window.OneSignalDeferred = window.OneSignalDeferred || [];
OneSignalDeferred.push(async function (OneSignal) {
    await OneSignal.init({
        appId: "8718ce03-c439-4a9f-b9a5-48ae91d60ac7",
    });
});
