export default function strictParseInt(val: string) {

	for (let i = 0; i < val.length; i++) {

		if (val.charCodeAt(i) < 48 || val.charCodeAt(i) > 57) {

			throw TypeError("Expected number");

		}
	}

	return parseInt(val);

};
