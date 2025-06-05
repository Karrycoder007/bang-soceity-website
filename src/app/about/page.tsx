"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="px-4 py-22 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header & Image */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1745666890553-68a1098c51ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">ನಮ್ಮ ಬಗ್ಗೆ</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              ಕಳೆದ 18 ವರ್ಷಗಳಿಂದ ಸಹಕಾರ ಕ್ಷೇತ್ರದ ಜವಾಬ್ದಾರಿಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನಿರ್ವಹಿಸಿ, ಸಲಹೆ ಹಾಗೂ ಮಾರ್ಗದರ್ಶನ ನೀಡಿದ ನಿಮಗೆ Karnataka State Co-operative Societies Association (R) ಹೃತ್ಪೂರ್ವಕ ಕೃತಜ್ಞತೆ ಸಲ್ಲಿಸುತ್ತದೆ.
            </p>
          </div>
        </div>

        {/* Program Highlights */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4 border border-gray-200">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">ಸಹಕಾರಿ ಯೋಜನೆಗಳು</h3>
          <p className="text-gray-700">
            ಅಸೋಸಿಯೇಷನ್ ನಿಂದ ಸದಸ್ಯರಿಗಾಗಿ ರೂಪಿಸಲಾಗಿರುವ ಪ್ರಮುಖ ಕಾರ್ಯಕ್ರಮಗಳು:
          </p>
          <ul className="grid gap-3 list-disc list-inside text-gray-800 pl-2 md:pl-5">
            <li>2 ದಿನಗಳ ಉನ್ನತ ಮಟ್ಟದ ತರಬೇತಿ – ಬೆಂಗಳೂರು</li>
            <li>3 ದಿನದ ವ್ಯಕ್ತಿತ್ವ ವಿಕಸನ ತರಬೇತಿ – ಮೈಸೂರು</li>
            <li>ಅಭಿವೃದ್ಧಿ ಯೋಜನಾ ತರಬೇತಿ – ಬೆಂಗಳೂರು</li>
            <li>ಮಹಿಳಾ ನಿರ್ದೇಶಕರಿಗಾಗಿ ಆಡಳಿತಾಭಿವೃದ್ದಿ ತರಬೇತಿ</li>
            <li>5 ದಿನಗಳ ವಿದೇಶಿ ಅಧ್ಯಯನ ಪ್ರವಾಸ</li>
            <li>ರಾಜ್ಯ ಮಟ್ಟದ ಮತ್ತು ಜಿಲ್ಲಾ ಮಟ್ಟದ ಕಾರ್ಯಾಗಾರಗಳು</li>
            <li>ವಲಯವಾರು ತರಬೇತಿ ಕಾರ್ಯಕ್ರಮಗಳು</li>
            <li>ದಕ್ಷಿಣ ದೆಹಲಿಗೆ 30 ಸದಸ್ಯರ ಅಧ್ಯಯನ ಪ್ರವಾಸ</li>
          </ul>
        </div>

        {/* Membership Info */}
        <div className="bg-blue-50 rounded-lg p-6 shadow-inner border-l-4 border-blue-400">
          <h3 className="text-xl font-bold text-blue-800 mb-2">ಅಸೋಸಿಯೇಷನ್ ಸದಸ್ಯತ್ವ ಮಾಹಿತಿ</h3>
          <p className="text-gray-700 leading-relaxed">
            ಪ್ರಸ್ತುತ ಅಸೋಸಿಯೇಷನ್ ಸದಸ್ಯತ್ವ ನೋಂದಣಿ ಪ್ರಾರಂಭವಾಗಿದೆ. ತಮ್ಮ ಸಂಸ್ಥೆಗಾಗಿ ಸದಸ್ಯತ್ವ ಪಡೆಯಬಹುದು.
            <br />
            <span className="font-semibold text-black">
              ಸದಸ್ಯತ್ವ ಶುಲ್ಕ: ರೂ. 11,100/- (ಹನ್ನೊಂದು ಸಾವಿರದ ಒಂದು ನೂರು)
            </span>
          </p>
          <p className="mt-3 text-center font-bold text-blue-700">
            KARNATAKA STATE CO-OPERATIVE SOCIETIES ASSOCIATION (R)
          </p>
        </div>

      </div>
    </section>
  );
}
