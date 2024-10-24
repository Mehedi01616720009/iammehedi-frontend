import { TTheme } from "./color";

export type TPost = {
    title: string;
    slug: string;
    description: string;
    theme: TTheme;
    category: string;
    tags: string[];
    image: string;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
};
