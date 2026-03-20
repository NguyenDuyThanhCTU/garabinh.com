import { AuthProviders } from "@context/AuthProviders";
import { DataProviders } from "@context/DataProviders";
import { StateProvider } from "@context/StateProvider";
import "@styles/global.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "GARAGE BÍNH - Phụ Tùng Ô Tô Chính Hãng | Hệ Thống Điện, Gầm & Máy Chất Lượng Cao",
  description:
    "Chuyên cung cấp phụ tùng ô tô chính hãng: cụm đồng hồ táp-lô, bơm nhiên liệu, hệ thống lái điện EPS và giảm xóc Mazda. Dịch vụ thay thế phụ tùng chuyên nghiệp, uy tín.",
  keywords: [
    "phụ tùng ô tô chính hãng",
    "phụ tùng hyundai porter",
    "giảm xóc mazda",
    "bơm nhiên liệu dopson",
    "trợ lực lái điện EPS",
    "nắp tản nhiệt két nước",
    "sửa chữa ô tô chuyên nghiệp",
  ],
  openGraph: {
    title: "Phụ Tùng Ô Tô Chính Hãng - Hệ Thống Linh Kiện Động Cơ & Gầm",
    description:
      "Cung cấp giải pháp phụ tùng toàn diện cho xế yêu của bạn. Cam kết hàng chính hãng, độ bền cao.",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/khogachtinp.appspot.com/o/abc%2Fz7612792440907_123532e12db6913b513c6bbce255af88.jpg?alt=media&token=1b392a71-7302-4e63-88eb-c50c26dad136", // Thay bằng ảnh thực tế của cửa hàng bạn
        width: 1200,
        height: 630,
        alt: "Phụ tùng ô tô chính hãng",
      },
    ],
  },
};

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
