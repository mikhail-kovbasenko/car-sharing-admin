const defaultUrl = 'https://cors-anywhere.herokuapp.com/api-factory.simbirsoft1.com/';

export const getCorrectSrcImg = path => {
	if(path.indexOf('base64') !== -1) return path;

	return defaultUrl + path;
}