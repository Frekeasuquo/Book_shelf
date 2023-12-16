import { Link } from "react-router-dom";
import { BsArrowLeft} from "react-icons/bs"

const BackButton = () => {

    return (
        <div className="flex">
            <Link to="/" className="bg-sky-800 text-white px-4 py-1 round-lg w-fit">
                <BsArrowLeft className="text-2x1" />
            </Link>
        </div>
    )
}

export default BackButton;