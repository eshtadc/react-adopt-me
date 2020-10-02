const Pet = ({ name, animal, breed }) => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, name),
		React.createElement("h2", {}, animal),
		React.createElement("h2", {}, breed),
	]);
};

const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Adopt Me!"),
		React.createElement(Pet, { name: "Jay", animal: "Cat", breed: "Tabby" }),
		React.createElement(Pet, { name: "Sammy", animal: "Dog", breed: "Mutt" }),
		React.createElement(Pet, { name: "Caesar", animal: "Cat", breed: "Black" }),
	]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
