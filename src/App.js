import { useEffect, useState, useRef } from "react";
import * as C from "./App.style";
import { Item } from "./components/Item";
import { items } from "./data/items";

import { filterByStatus } from "./assets/filters";

export const App = () => {
	const [list, setList] = useState(items);
	const [filter, setFilter] = useState("all");
	const [filteredList, setFilteredList] = useState([]);

	const selectFilter = useRef(null);
	const insertInputs = useRef(null);

	useEffect(() => {
		
		setFilteredList([...filterByStatus(list, filter)]);
	}, [filter, list]);

	const createTask = () => {
		let title = insertInputs.current.childNodes[1].value;
		let resume = insertInputs.current.childNodes[3].value;
		let isDone = null
		if (insertInputs.current.childNodes[5].value === "complete") {
			isDone = true
		} else{
			isDone = false
		}
		setList([...list, {
			title,
			resume,
			isDone
		}])
		insertInputs.current.childNodes[1].value = ""
		insertInputs.current.childNodes[3].value = ""
		
		console.log(list)
	}
	return (
		<>
			<C.Container color="blue">
				<h1>Todo List</h1>
				<C.Text>Me ajudando a organizar as ideias!</C.Text>
			</C.Container>

			{/* Criação de Itens */}
			<C.Container fontColor="black" bgColor="white" ref={insertInputs}>
				<label forhtml="title">Título</label>
				<input id="title" placeholder="Digite seu título"></input>

				<label forhtml="resume">Resumo</label>
				<input id="resume" placeholder="Digite o resumo do item"></input>

				<label forhtml="status">Status: </label>
				<select>
					<option value="complete">Completo</option>
					<option value="incomplete">Em progresso</option>
				</select>

				<C.btn onClick={createTask}>Cadastrar</C.btn>
			</C.Container>

			<C.Container fontColor="black" width="80%" bgColor="white">
				<C.Text padding="10px">Filtre por:</C.Text>
				<C.Filter
					ref={selectFilter}
					onChange={() => setFilter(selectFilter.current.value)}
				>
					<option value="all">Todos</option>
					<option value="complete">Completo</option>
					<option value="incomplete">Em progresso</option>
				</C.Filter>
			</C.Container>

			<C.showItems>
				<thead>
					<tr>
						<C.tableHead size="180">Título</C.tableHead>
						<C.tableHead>Resumo</C.tableHead>
						<C.tableHead size="180">Status</C.tableHead>
					</tr>
				</thead>
				<tbody>
					{filteredList.map((item, key) => (
						<Item props={item} key={key} />
					))}
				</tbody>
			</C.showItems>
		</>
	);
};
