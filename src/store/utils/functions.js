export const storeObject = (key, obj) => {
	localStorage.setItem(key, JSON.stringify(obj));
};

export const getObject = key => {
	return JSON.parse(localStorage.getItem(key));
};
