"use client";
import { useState, useEffect } from "react";
import { 
  Calendar, User, Phone, Clock, ArrowLeft, 
  ChevronRight, Stethoscope, MessageSquare, CheckCircle2, Loader2 
} from "lucide-react";
import Link from "next/link";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({ 
    name: "", 
    phone: "", 
    service: "Physiotherapy Session", 
    appointment_slot: "", 
    message: "" 
  });
  
  const [status, setStatus] = useState("idle"); // idle, loading, success
  const [isFormValid, setIsFormValid] = useState(false);

  // Real-time Validation
  useEffect(() => {
    const isValid = 
      formData.name.trim().length > 2 && 
      formData.phone.length === 10 && 
      formData.appointment_slot !== "";
    setIsFormValid(isValid);
  }, [formData]);

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwWJOTjNxc5xX_eyDEyxnSYG-3nhekC9xxPDNtrM7P3fNprDJuunv72jSGB_KUTol5o4Q/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setStatus("loading");

    try {
      // Google Script ko data bhejna
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: 'no-cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Hum success assume karte hain kyunki no-cors response nahi deta
      setStatus("success");
      setFormData({ name: "", phone: "", service: "Physiotherapy Session", appointment_slot: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please call us directly.");
      setStatus("idle");
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        
        {/* Navigation */}
        <Link href="/" className="group inline-flex items-center gap-2 text-slate-500 hover:text-green-600 font-bold mb-10 transition-all">
          <div className="p-2 rounded-full bg-white shadow-sm group-hover:bg-green-50 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Back to Home
        </Link>

        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-slate-100">
          
          {/* Header Section */}
          <div className="bg-slate-900 p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Book Your <span className="text-green-500">Recovery</span>
            </h1>
            <p className="mt-3 text-slate-400 font-medium uppercase tracking-[0.2em] text-xs">
              Healthy Wing's Physiotherapy
            </p>
          </div>

          <div className="p-8 sm:p-12">
            {status === "success" ? (
              <div className="py-10 text-center animate-in fade-in zoom-in duration-500">
                <div className="relative inline-block">
                  <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <div className="absolute top-0 right-0 animate-ping w-4 h-4 bg-green-400 rounded-full opacity-75"></div>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">Request Sent!</h2>
                <p className="text-slate-500 mt-4 text-lg leading-relaxed max-w-sm mx-auto">
                  Bhai, aapka appointment request **Google Sheet** mein save ho gaya hai. Hum jaldi hi call karenge!
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-10 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg"
                >
                  Book Another Slot
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                
                {/* Name & Phone Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      <User className="w-3 h-3" /> Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rahul Gupta"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-semibold text-slate-800"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                      <Phone className="w-3 h-3" /> Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="98XXXXXXXX"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-semibold text-slate-800"
                      onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                    />
                  </div>
                </div>

                {/* Date & Time Picker */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    <Clock className="w-3 h-3" /> Preferred Appointment Slot
                  </label>
                  <input
                    type="datetime-local"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-bold text-slate-700"
                    onChange={(e) => setFormData({...formData, appointment_slot: e.target.value})}
                  />
                </div>

                {/* Treatment Selection */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    <Stethoscope className="w-3 h-3" /> Type of Service
                  </label>
                  <div className="relative">
                    <select 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/5 outline-none cursor-pointer appearance-none font-bold text-slate-700"
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option>Physiotherapy Session</option>
                      <option>Holistic Wellness</option>
                      <option>Home Visit Appointment</option>
                      <option>Post-Surgery Rehab</option>
                      <option>Sports Injury Specialist</option>
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 rotate-90 pointer-events-none" />
                  </div>
                </div>

                {/* Message Box */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    <MessageSquare className="w-3 h-3" /> Describe your pain (Optional)
                  </label>
                  <textarea
                    placeholder="E.g. I have back pain while sitting for long hours..."
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/5 outline-none h-32 resize-none transition-all font-medium text-slate-700"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                {/* Submit Button */}
                <button
                  disabled={status === "loading" || !isFormValid}
                  className={`w-full py-5 rounded-[1.5rem] font-black text-lg transition-all duration-500 flex items-center justify-center gap-3 shadow-xl 
                    ${isFormValid 
                      ? "bg-slate-900 hover:bg-green-600 text-white shadow-slate-200 active:scale-[0.98]" 
                      : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                    }`}
                >
                  {status === "loading" ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Book Now <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {!isFormValid && status === "idle" && (
                  <p className="text-center text-[10px] font-bold text-red-400 uppercase tracking-tighter">
                    * Please fill Name, Time and 10-digit Phone
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
        
        {/* Footer Note */}
        <div className="mt-10 text-center space-y-2">
          <p className="text-slate-400 text-xs font-medium">
            Your data is stored securely in our private business database.
          </p>
          <div className="flex justify-center gap-4 text-[10px] font-bold text-slate-300 uppercase">
            <span>Verified Clinic</span>
            <span>•</span>
            <span>Secure SSL</span>
          </div>
        </div>
      </div>
    </main>
  );
}