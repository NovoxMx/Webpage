"use client";

export default function PhoneWarning() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Mobile Version Not Ready</h1>
            <p className="text-lg opacity-80">
                This website is currently optimized only for desktop screens.  
                Please visit from a larger device for the best experience.
            </p>
        </div>
    );
}
