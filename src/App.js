import "./App.css";
import { StickyTable, Row, Cell } from "react-sticky-table";
import { useEffect, useRef } from "react";

function App() {
	const ref = useRef();

	useEffect(() => {
		console.dir(ref);
	}, []);

	return (
		<div className="App" style={{ width: 500 }}>
			<StickyTable leftStickyColumnCount={2}>
				<Row>
					<Cell>Header 1</Cell>
					<Cell ref={ref}>Header 2</Cell>
					<Cell>Header 3</Cell>
					<Cell>Header 4</Cell>
					<Cell>Header 5</Cell>
					<Cell>Header 1</Cell>
					<Cell>Header 2</Cell>
					<Cell>Header 3</Cell>
					<Cell>Header 4</Cell>
					<Cell>Header 5</Cell>
				</Row>
				<Row>
					<Cell>Cell 1</Cell>
					<Cell>Cell 2</Cell>
					<Cell>Cell 3</Cell>
					<Cell>Cell 4</Cell>
					<Cell>Cell 5</Cell>
					<Cell>Cell 1</Cell>
					<Cell>Cell 2</Cell>
					<Cell>Cell 3</Cell>
					<Cell>Cell 4</Cell>
					<Cell>Cell 5</Cell>
				</Row>
				<Row>
					<Cell>Cell 1</Cell>
					<Cell>Cell 2</Cell>
					<Cell>Cell 3</Cell>
					<Cell>Cell 4</Cell>
					<Cell>Cell 5</Cell>
					<Cell>Cell 1</Cell>
					<Cell>Cell 2</Cell>
					<Cell>Cell 3</Cell>
					<Cell>Cell 4</Cell>
					<Cell>Cell 5</Cell>
				</Row>
				<Row>
					<Cell>Cell 1Cell 1Cell 1Cell 1Cell 1</Cell>
					<Cell>Cell 2</Cell>
					<Cell>Cell 3</Cell>
					<Cell>Cell 4</Cell>
					<Cell>Cell 5</Cell>
					<Cell>Cell 1</Cell>
					<Cell>Cell 2</Cell>
					<Cell>Cell 3</Cell>
					<Cell>Cell 4</Cell>
					<Cell>Cell 5</Cell>
				</Row>
			</StickyTable>
		</div>
	);
}

export default App;
