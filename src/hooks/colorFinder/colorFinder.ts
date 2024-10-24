import { TBackground, TTheme } from "@/types/color";

const colorScheme: Record<TTheme, TBackground> = {
    avocado: "bg-avocado",
    pool: "bg-pool",
    aqua: "bg-aqua",
    irish: "bg-irish",
    sand: "bg-sand",
    cream: "bg-cream",
    peach: "bg-peach",
    rose: "bg-rose",
    primary: "bg-primary",
};

const colorFinder = (theme: TTheme): TBackground => {
    return colorScheme[theme];
};

export default colorFinder;
