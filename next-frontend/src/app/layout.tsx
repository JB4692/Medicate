import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Medicate",
    description: "Team 12",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <header
                    style={{ backgroundColor: "lightblue", padding: "1rem" }}
                >
                    <p>Testing Header</p>
                </header>
                <div>{children}</div>
                <footer style={{ backgroundColor: "violet", padding: "1rem" }}>
                    <p>Testing Footer</p>
                </footer>
            </body>
        </html>
    );
}
