import { Link } from "react-router-dom";
import { Button } from "./button";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

type Props = {
    totalPages: number;
    currentPage: number;
    destination: string;
};

const PageButtons = ({ totalPages, currentPage, destination }: Props) => {
    const startPage = Math.max(
        1,
        Math.min(Number(currentPage) - 1, Number(totalPages) - 2)
    );
    const endPage = Math.min(Number(totalPages), startPage + 2);
    const pageArray = [...Array(endPage - startPage + 1).keys()].map(
        (i) => startPage + i
    );

    return pageArray.map((page) => (
        <Link to={`${destination}${page}`}>
            <Button
                className={`text-[19px] font-semibold ${
                    page === currentPage ? "bg-tartiary" : ""
                }`}
            >
                {page}
            </Button>
        </Link>
    ));
};

const Paginate = ({ totalPages, currentPage, destination }: Props) => {
    return (
        <div className="flex justify-center items-center gap-2 pt-7 pb-10">
            {currentPage === 1 || (
                <Link to={`${destination}${currentPage - 1}`}>
                    <Button className="text-[19px] font-semibold">
                        <IoArrowBack />
                    </Button>
                </Link>
            )}

            <PageButtons
                totalPages={totalPages}
                currentPage={currentPage}
                destination={destination}
            />

            {currentPage === totalPages || (
                <Link to={`/posts/page/${currentPage + 1}`}>
                    <Button className="text-[19px] font-semibold">
                        <IoArrowForward />
                    </Button>
                </Link>
            )}
        </div>
    );
};

export default Paginate;
