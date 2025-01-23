import { LucideIcon, SchoolIcon, UniversityIcon } from "lucide-react";

export interface SchoolItem {
    id: number;
    SchoolName: string;
    pengguna: number;
    harga: number;
    totalHarga: number;
    icon: LucideIcon;
}

    export const arraySchool: SchoolItem[] = [
            {
              id: 1,
              SchoolName: "Tel U Surabaya",
              pengguna: 100,
              harga: 2000,
              totalHarga: 200000,
              icon: UniversityIcon
            },
            {
              id: 2,
              SchoolName: "Institut Teknologi Bandung",
              pengguna: 250,
              harga: 1500,
              totalHarga: 375000,
              icon: UniversityIcon
            },
            {
              id: 3,
              SchoolName: "Universitas Indonesia",
              pengguna: 300,
              harga: 1800,
              totalHarga: 540000,
              icon: UniversityIcon
            },
            {
              id: 4,
              SchoolName: "Universitas Gadjah Mada",
              pengguna: 200,
              harga: 2500,
              totalHarga: 500000,
              icon: UniversityIcon
            },
            {
              id: 5,
              SchoolName: "SMA Negeri 1 Jakarta",
              pengguna: 150,
              harga: 1200,
              totalHarga: 180000,
              icon: SchoolIcon
            },
            {
              id: 6,
              SchoolName: "SMPK Kolase Santo Yusuf 2 Malang",
              pengguna: 300,
              harga: 200,
              totalHarga: 60000,
              icon: SchoolIcon
            },
          ];
          