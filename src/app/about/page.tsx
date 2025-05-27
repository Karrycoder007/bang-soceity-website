"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="mt-30 px-4 md:px-16 bg-gray-50 text-gray-800 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">

        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1745666890553-68a1098c51ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D" // Replace with your own image
            alt="About Us"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Full Text */}
        <div className="w-full md:w-1/2 space-y-4 text-sm md:text-base max-h-[700px] overflow-y-auto pr-2">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">ನಮ್ಮ ಬಗ್ಗೆ</h2>
          
          <p className="text-justify leading-relaxed text-lg">
            ಕಳೆದ 18 ವರ್ಷಗಳಿಂದ ಸಹಕಾರ ಕ್ಷೇತ್ರದ ವಿವಿಧ ಜವಾಬ್ದಾರಿಗಳನ್ನು ನಿರ್ವಹಿಸಿ, ಅತ್ಯಂತ ಯಶಸ್ವಿಯಾಗಿ, ಕಾರ್ಯನಿರ್ವಹಿಸಲು ಸಲಹೆ, ಸಹಕಾರ ಹಾಗೂ ಮಾರ್ಗದರ್ಶನ ನೀಡಿದ ತಮಗೂ, ತಮ್ಮ ಸಂಸ್ಥೆಯ ಆಡಳಿತ ಮಂಡಳಿಯ ಸದಸ್ಯರಿಗೂ ಹಾಗೂ ತಮ್ಮ ಸಂಸ್ಥೆಯ ಎಲ್ಲ ಸಿಬ್ಬಂದಿವರ್ಗದವರಿಗೂ ಕರ್ನಾಟಕ ಸ್ಟೇಟ್ ಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟೀಸ್ ಅಸೋಸಿಯೇಷನ್‍ನ ಆಡಳಿತ ಮಂಡಳಿಯ ಪರವಾಗಿ ಹಾಗೂ ವೈಯಕ್ತಿಕವಾಗಿ ಹೃತ್ಪೂರ್ವಕವಾದ ಕೃತಜ್ಞತೆಗಳನ್ನು ಸಲ್ಲಿಸುತ್ತೇನೆ.
          </p>

          <p className="text-justify leading-relaxed">
            ಆತ್ಮೀಯ ಸಹಕಾರಿ ಬಂಧುಗಳೇ, ಕರ್ನಾಟಕ ಸ್ಟೇಟ್ ಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟೀಸ್ ಅಸೋಸಿಯೇಷನ್‍ನ ವತಿಯಿಂದ ಈ ಕೆಳಕಂಡ ಕಾರ್ಯಕ್ರಮಗಳ ಕ್ರಿಯಾಯೋಜನೆಯನ್ನು ಸದಸ್ಯ ಸಹಕಾರಿಗಳಿಗಾಗಿ ರೂಪಿಸಲಾಗಿದೆ:
          </p>

          <ul className="list-disc pl-5 space-y-2 leading-relaxed">
            <li>ಅಧ್ಯಕ್ಷರು, ಉಪಾಧ್ಯಕ್ಷರು ಹಾಗೂ ಆಡಳಿತ ಮಂಡಳಿ ಸದಸ್ಯರಿಗಾಗಿ 2 ದಿನಗಳ ಉನ್ನತ ಮಟ್ಟದ ತರಬೇತಿ - ಅಂಕಿತಾ ವಿಸ್ತಾ ಸ್ಪಾ ಅಂಡ್ ರೆಸಾರ್ಟ್, ಬೆಂಗಳೂರು.</li>
            <li>ಸಿಬ್ಬಂದಿಗಳಿಗಾಗಿ 3 ದಿನದ ವ್ಯಕ್ತಿತ್ವ ವಿಕಸನ ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮ - ಶ್ರೀರಂಗಪಟ್ಟಣ ಮೈಸೂರು.</li>
            <li>ಮುಖ್ಯ ಕಾರ್ಯನಿರ್ವಾಹಣಾಧಿಕಾರಿಗಳಿಗಾಗಿ ಅಭಿವೃದ್ಧಿ ಯೋಜನಾ ತರಬೇತಿ ಒಂದು ದಿನದ ಕಾರ್ಯಾಗಾರ - ಬೆಂಗಳೂರು.</li>
            <li>ಮಹಿಳಾ ನಿರ್ದೇಶಕರಿಗಾಗಿ ಒಂದು ದಿನದ ವಿಶೇಷ ಆಡಳಿತಾಭಿವೃದ್ದಿ ತರಬೇತಿ - ಬೆಂಗಳೂರು.</li>
            <li>5 ದಿನಗಳ ವಿದೇಶಿ ಅಧ್ಯಯನ ಪ್ರವಾಸ - ಆಗಸ್ಟ್ 2019.</li>
            <li>ಒಂದು ರಾಜ್ಯ ಮಟ್ಟದ ಕಾರ್ಯಾಗಾರ.</li>
            <li>ಬೆಂಗಳೂರು ನಗರದ ರಾಜ್ಯ ಮಟ್ಟದ ಸಮಾವೇಶ.</li>
            <li>30 ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಜಿಲ್ಲಾ ಮಟ್ಟದ ಕಾರ್ಯಕ್ಷಮತೆ ಅಭಿವೃದ್ದಿ ತರಬೇತಿ.</li>
            <li>ಮಹಿಳಾ ಸಹಕಾರ ಸಂಸ್ಥೆಗಳಿಗಾಗಿ ಕ್ರಿಯಾ ಯೋಜನಾ ತರಬೇತಿ - ಕಲಬುರಗಿ.</li>
            <li>ವಲಯವಾರು ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳು - ಬೆಳಗಾವಿ, ಚಿಕ್ಕೋಡಿ, ಅಥಣಿ, ರಾಣಿಬೆನ್ನೂರು, ಕಾರವಾರ, ಮಂಗಳೂರು, ಕುಂದಾಪುರ, ಹಾಸನ, ಚಾಮರಾಜನಗರ ಮತ್ತು ಬೆಂಗಳೂರು.</li>
            <li>ಆಸಕ್ತ 30 (ಜಿಲ್ಲೆಗೆ ಒಂದರಂತೆ) ಸದಸ್ಯರನ್ನು ದೆಹಲಿಯಲ್ಲಿ ನಡೆಯುವ ವಿಶೇಷ ಸಹಕಾರಿ ವಿಚಾರ ಸಂಕಿರಣಕ್ಕೆ ಕಳುಹಿಸುವುದು.</li>
          </ul>

          <p className="text-justify leading-relaxed">
            ಪ್ರಸ್ತುತ ಅಸೋಸಿಯೇಷನ್ ಸದಸ್ಯತ್ವ ನೋಂದಣಿ ಪ್ರಾರಂಭಿಸಿದ್ದು, ತಮ್ಮ ಸಂಸ್ಥೆಗೆ ಅಸೋಸಿಯೇಷನ್ ಸದಸ್ಯತ್ವ ನೀಡಲು ತೀರ್ಮಾನಿಸಲಾಗಿದೆ.
          </p>

          <p className="text-justify leading-relaxed font-semibold">
            ಅಸೋಸಿಯೇಷನ್ ಸದಸ್ಯತ್ವ ಶುಲ್ಕ ರೂ. 11,100/- (ಹನ್ನೊಂದು ಸಾವಿರದ ಒಂದು ನೂರು) ಮಾತ್ರ.  
            ದಯವಿಟ್ಟು ಡಿ.ಡಿ./ಚೆಕ್ ಮೂಲಕ ಕೆಳಗಿನ ಹೆಸರಿಗೆ ಪಾವತಿಸಲು ಕೋರುತ್ತೇವೆ:
          </p>

          <p className="text-center font-bold text-blue-800">
            KARNATAKA STATE CO-OPERATIVE SOCIETIES ASSOCIATION (R)
          </p>

        </div>

      </div>
    </section>
  );
}
