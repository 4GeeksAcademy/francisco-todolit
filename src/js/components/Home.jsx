import { useState } from "react";
import React  from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [ inputValue , setInputValue ] = useState("");
	const [ todos , setTodos] = useState([]);
	//add into array-> contact
	//Dalete from array -> filter
	//Update -> map

		return (
		
			<div className="lista" >
				<h1>Lista de Nombres </h1>
				<ul className= "lista" style={{ listStyle:"none"}}>
					<li>
						<input 
						type="text" 
						onChange={(e) => setInputValue(e.target.value)} 
						value={inputValue}
						onKeyPress={(e) => {
							if(e.key ==="Enter" ){
								console.log("Enter was pressed");
								setTodos(todos.concat(inputValue));
								setInputValue("");
							 }

						}}
						style={{border:"none" , width:"100%"}} 
						placeholder="Añadir Nombre...."/>
						</li>
						{todos.map((item, index)=>(

							<li>{item}<i class="fa-solid fa-trash"onDoubleClick={()=> setTodos( todos.filter((t, currentIndex)=> index!= currentIndex))}></i></li>
						))}
						
						
				</ul>
				<div>{todos.length}</div>
			</div>
	
	);
};

export default Home;