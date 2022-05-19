import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [isVerde, setIsVerde] = useState(false);
	const [isAmarillo, setIsAmarillo] = useState(false);
	const [isRojo, setIsRojo] = useState(false);
	const encenderVerde = () => {
		setIsVerde(true);
		setIsAmarillo(false);
		setIsRojo(false);
	};

	const encenderAmarillo = () => {
		setIsVerde(false);
		setIsAmarillo(true);
		setIsRojo(false);
	};
	const encenderRojo = () => {
		setIsVerde(false);
		setIsAmarillo(false);
		setIsRojo(true);
	};
	const rectangulo = {
		width: "150px",
		height: "350px",
		border: "3px solid #555",
		background: "#000000",
	};
	return (
		<div>
			<div
				className="d-flex flex-column mt-5 text-center mx-auto"
				style={rectangulo}>
				<div className="col">
					<button
						onClick={() => encenderVerde()}
						className={`${
							isVerde === true ? "bg-success" : ""
						} rounded-circle p-5 `}></button>
				</div>
				<div className="col">
					<button
						onClick={() => encenderAmarillo()}
						className={`${
							isAmarillo === true ? "bg-warning" : ""
						} rounded-circle p-5`}></button>
				</div>
				<div className="col">
					<button
						onClick={() => encenderRojo()}
						className={`${
							isRojo === true ? "bg-danger" : ""
						} rounded-circle p-5`}></button>
				</div>
			</div>
		</div>
	);
};

export default Home;
