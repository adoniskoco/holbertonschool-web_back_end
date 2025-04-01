export default function hasArrayValues(set, values) {
	return values.every((value) => set.has(value));
}
