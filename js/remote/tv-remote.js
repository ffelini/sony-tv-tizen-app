var IP_CONTROL_API_JSON_KEY = "ip_control_api_json";

var ipControlApiJson;

function sendTvRequest(commandKey) {
	var commandObj = ipControlApiJson.api_commands[commandKey];
	var ip = settings.ip ? settings.ip : ipControlApiJson.ip;
	var url = ipControlApiJson.scheme + ip + commandObj.path;

	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open(commandObj.method, url, true);

	// set common headers
	setHeaders(xmlHttp, ipControlApiJson.headers);
	// override headers if specified
	setHeaders(xmlHttp, commandObj.headers);

	// read body
	if (isString(commandObj.body)) {
		xmlHttp.send(commandObj.body);
	} else {
		xmlHttp.send(JSON.stringify(commandObj.body));
	}
}

function setHeaders(xmlHttp, headers) {
	for ( var header in headers) {
		xmlHttp.setRequestHeader(header, headers[header]);
	}
}

function loadIpControlApiJson(onComplete) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "json/tv_api.json", true);
	xmlhttp.onreadystatechange = function onReady() {
		if (xmlhttp.readyState === 4 && xmlhttp.responseText) {
			ipControlApiJson = JSON.parse(xmlhttp.responseText);
			saveIpControlApiJsonToPreferences(ipControlApiJson);
			onComplete();
		}
	};
	xmlhttp.send();
}

function loadIpControlApiJsonFromPreferences(onSuccess, onFailure){
	if (tizen.preference.exists(IP_CONTROL_API_JSON_KEY)) {
		var json = tizen.preference.getValue(IP_CONTROL_API_JSON_KEY);
		ipControlApiJson = JSON.parse(json);
		onSuccess();
	} else {
		onFailure();
	}
}

function saveIpControlApiJsonToPreferences(jsonObject){
	tizen.preference.setValue(IP_CONTROL_API_JSON_KEY, JSON.stringify(jsonObject));
}

function initRemoteApi(onComplete) {
	loadIpControlApiJson(onComplete);
}

function initRemoteApiFromPreferences(onSuccess, onFailure) {
	loadIpControlApiJsonFromPreferences(onSuccess, onFailure);
}