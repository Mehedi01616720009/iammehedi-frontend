import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
    to: string;
    children: ReactNode;
};

const activeClassName =
    "w-max flex items-center gap-2 text-button relative nav__link before:w-[7px] before:h-[7px] before:bg-button before:absolute before:top-0 before:-right-[10px] before:rounded-full before:transition-all";

const className =
    "w-max flex items-center gap-2 text-paragraph relative nav__link before:w-[7px] before:h-[7px] before:bg-tartiary before:absolute before:top-0 before:-right-[10px] before:rounded-full before:transition-all before:opacity-0 hover:before:opacity-100";

const ActiveLink = ({ to, children }: Props) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? activeClassName : className
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
