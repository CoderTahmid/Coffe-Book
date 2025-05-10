import { Link, useLocation } from "react-router-dom";

const Card = ({ coffee }) => {
    const { pathname } = useLocation();
    const { name, image, category, origin, type, id, rating, popularity } = coffee;

    return (
        <div className="flex relative">
            <Link to={`/coffees/${id}`} className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden">
                <figure className="w-full h-48 overflow-hidden">
                    <img src={image} alt="" />
                </figure>
                <div className="p-4">
                    <h1 className="text-xl">Name: {name}</h1>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>rating: {rating}</p>
                    <p>Popular: {popularity}</p>
                </div>
            </Link>
            {
                pathname === "/dashboard" && <p className="absolute -top-5 -right-5">Delete</p>
            }
        </div>
    );
};

export default Card;