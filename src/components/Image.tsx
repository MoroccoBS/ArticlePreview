import Drawers from "../assets/images/drawers.jpg";

function Image() {
	return (
		<div className="sm:w-2/5 w-full sm:h-full h-2/5">
			<img src={Drawers} className="object-cover w-full h-full" alt={"Image of a Drawer"}/>
		</div>
	);
}

export default Image;
