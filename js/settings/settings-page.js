(function() {
    var ip_input = document.getElementById("ip_input");
    var save_button = document.getElementById("save_button");
    var sync_power_status_checkbox = document.getElementById("sync_power_status_checkbox");

    function init() {
        loadSettings(function onSettingsComplete(settings) {
            setupSettingsPage(settings)
        });
    }

    function setupSettingsPage(settings) {
        ip_input.value = isEmpty(settings.ip) ? "192.168.0." : settings.ip;
        sync_power_status_checkbox.checked = settings.syncPowerStatus;
        save_button.addEventListener("click", onSaveClick);
    }

    function onSaveClick() {
        saveSettings(ip_input.value, sync_power_status_checkbox.checked, function onComplete() {
            moveToStartupPage();
        });
    }

    function saveSettings(ip, syncPowerStatus, onComplete) {
        settings = {};
        settings.ip = ip;
        settings.syncPowerStatus = syncPowerStatus;

        tizen.preference.setValue(PREFERENCE_IP_KEY, ip);
        tizen.preference.setValue(PREFERENCE_SYNC_POWER_STATUS_KEY, syncPowerStatus);

        onComplete();
    }

    scrollWithBezelAsSnapList('main', 'list-view');

    window.addEventListener("tizenhwkey", function(ev) {
        if (ev.keyName === "back") {
            window.history.back();
        }
    });

    window.onload = init;
}());