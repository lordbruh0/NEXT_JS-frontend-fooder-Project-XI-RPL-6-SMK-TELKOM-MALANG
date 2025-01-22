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
        data: 1500,
        footer: "Malang Telkom Vocational School Students"
    },

    {
        id: 2,
        title: "Number of Team",
        data: 100,
        footer: "Malang Telkom Vocational School Students"
    },

    {
        id: 3,
        title: "Number of Mentor",
        data: 60,
        footer: "Malang Telkom Vocational School Students"
    },

    {
        id: 4,
        title: "Number of User",
        data: 1000,
        footer: "Malang Telkom Vocational School Students"
    },

    {
        id: 5,
        title: "Number of PIC",
        data: 5,
        footer: "Industry PIC"
    },
]