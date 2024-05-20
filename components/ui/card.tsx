import Image from "next/image";

export function Card({ item }: any) {
  return (
    <div className="mask mask-squircle w-20 h-20 bg-white p-1 relative hidden md:block border">
      <Image
        src={item.img[0].sm}
        fill
        style={{ objectFit: "contain" }}
        alt={item.title}
      />
    </div>
  );
}
