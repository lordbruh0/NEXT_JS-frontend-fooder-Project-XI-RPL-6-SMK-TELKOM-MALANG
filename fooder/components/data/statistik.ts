import { Stats } from "fs";

export interface StatistikItem {
    id: number;
    title: string;
    data: number;
    footer: string;
}

export const arrayStatistik: StatistikItem[] = [
    {
        id: 1,
        title: "Number of Student",
        data: 1200,
        footer: "Malang Telkom Vocational School Students"
    },

    {
        id: 2,
        title: "Number of Team",
        data: 1200,
        footer: "Malang Telkom Vocational School Students"
    },

    {
        id: 1,
        title: "Number of Mentor",
        data: 1200,
        footer: "Malang Telkom Vocational School Students"
    },

    {
        id: 1,
        title: "Number of User",
        data: 1200,
        footer: "Malang Telkom Vocational School Students"
    },
]