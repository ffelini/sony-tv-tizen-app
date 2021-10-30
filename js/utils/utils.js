// Returns if a value is a string
function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

// Returns if a value is really a number
function isNumber(value) {
	return typeof value === 'number' && isFinite(value);
}

// Returns if a value is a function
function isFunction(value) {
	return typeof value === 'function';
}

// Returns if a value is an object
function isObject(value) {
	return value && typeof value === 'object' && value.constructor === Object;
}

// Returns if a value is null
function isNull(value) {
	return value === null;
}

// Returns if a value is undefined
function isUndefined(value) {
	return typeof value === 'undefined';
}

function isEmpty(str) {
    return !str || 0 === str.length;
}

function hideView(view){
	view.style.display = "none";
}
function showView(view){
	view.style.display = "block";
}