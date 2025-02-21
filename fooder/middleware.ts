import { NextResponse, NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
    const token = request.cookies.get("token")?.value;
    const role = request.cookies.get("role")?.value;

    if (request.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (request.nextUrl.pathname.startsWith("/manager")) {
        // Jika tidak ada token atau role, arahkan ke halaman login
        if (!token || !role) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        // Jika role bukan MANAGER, arahkan ke halaman login
        if (role !== "MANAGER") {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    if (request.nextUrl.pathname.startsWith("/cashier")) {
        // Jika tidak ada token atau role, arahkan ke halaman login
        if (!token || !role) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        // Jika role bukan CASHIER, arahkan ke halaman login
        if (role !== "CASHIER") {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // Lanjutkan ke halaman yang diminta
    return NextResponse.next();
};

// Konfigurasi middleware untuk menangkap rute tertentu
export const config = {
    matcher: ["/manager/:path*", "/cashier/:path*", "/"]
};