import Image from "next/image";

export default function TopBanner() {
  return (
    <div className="w-full bg-white p-4 flex items-center justify-center">
      <Image
        src="/logobangloresociety.png" // your full banner image here
        alt="ಸಹಕಾರಿ ಸಂಘ ಲೋಗೋ ಮತ್ತು ವಿಳಾಸ"
        width={800} // you can adjust based on your image
        height={200}
        className="object-contain"
        priority
      />
    </div>
  );
}
