export interface TeamItem {
    id: number;
    TeamName: string;
    mentor: string;
    member: number;
    status: string;
}

export const arrayTeam: TeamItem[] = [
    { id: 1, TeamName: "Grounded", mentor: "none", member: 5, status:"close" },
    { id: 2, TeamName: "Elevate", mentor: "John Doe", member: 6, status:"open" },
    { id: 3, TeamName: "Momentum", mentor: "Jane Smith", member: 4, status:"close" },
    { id: 4, TeamName: "Pioneers", mentor: "Sarah Lee", member: 7, status:"close" },
    { id: 5, TeamName: "Innovators", mentor: "Michael Brown", member: 5, status:"open" },
    { id: 6, TeamName: "Trailblazers", mentor: "none", member: 6, status:"close" },
    { id: 7, TeamName: "Visionaries", mentor: "David Green", member: 8, status:"close" },
    { id: 8, TeamName: "Synergy", mentor: "Emily White", member: 4, status:"open" },
    { id: 9, TeamName: "Catalysts", mentor: "none", member: 5, status:"open" },
    { id: 10, TeamName: "Phoenix", mentor: "Chris Johnson", member: 6, status:"open" }
]