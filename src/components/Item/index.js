export const Item = ({props}) => {
	return (
		<tr>
			<td>{props.title}</td>
			<td>{props.resume}</td>
			<td>{props.isDone ? "complete" : "in progress"}</td>
		</tr>
	);
};
