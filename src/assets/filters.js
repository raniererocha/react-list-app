export const filterByStatus = (list, status) => {
	let filteredList = [];
	switch (status) {
		case "complete":
			for (let item of list) {
				if (item.isDone) {
					filteredList.push(item);
				}
			}
			return filteredList;
			break;
		case "incomplete":
			for (let item of list) {
				if (!item.isDone) {
					filteredList.push(item);
				}
			}
			return filteredList;
			break;
		default:
			return list;
			break;
	}
};
