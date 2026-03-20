import { AuthProviders } from "@context/AuthProviders";
import { DataProviders } from "@context/DataProviders";
import { StateProvider } from "@context/StateProvider";
import "@styles/global.css";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <StateProvider>
          <DataProviders>
            <AuthProviders>
              <>{children}</>
            </AuthProviders>
          </DataProviders>
        </StateProvider>
        {/* <GoogleAnalytics gaId="G-BCK49WKS44" /> */}
      </body>
    </html>
  );
}
