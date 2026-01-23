import React, { useState } from "react";
import { useTranslation } from "react-i18next"; //

const ApplicationPage = () => {
  const { t } = useTranslation();
  // 1. ПАМЯТЬ ДЛЯ ЭКРАНА УСПЕХА
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 2. ПАМЯТЬ ДЛЯ ВСЕХ ПОЛЕЙ ФОРМЫ (то, что мы забыли)
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    email: "",
    age: "",
    grade: "",
    zone: "blue",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.age < 6 || formData.age > 19) {
      alert(t("lang.error_age"));
      return;
    }

    try {
      // Отправка на твой Formspree
      const response = await fetch("https://formspree.io/f/mqekkjqn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Очистка формы после успеха
        setFormData({
          parentName: "",
          studentName: "",
          email: "",
          age: "",
          grade: "",
          zone: "blue",
          message: "",
        });
      } else {
        alert(t("lang.error_server"));
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Не удалось соединиться с сервером.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center justify-center transition-all duration-1000">
      {!isSubmitted ? (
        <>
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              {t("lang.title_1")}{" "}
              <span className="text-blue-500">{t("lang.title_2")}</span>
            </h1>
            <p className="text-gray-500 font-mono tracking-widest text-sm italic">
              {t("lang.status_pending")}
            </p>
          </div>

          <div className="w-full max-w-2xl bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,1)] relative overflow-hidden animate-slide-up">
            <div
              className={`absolute top-0 left-0 w-full h-1 transition-colors duration-500 ${
                formData.zone === "red" ? "bg-red-600" : "bg-blue-600"
              }`}
            ></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono text-gray-500 uppercase mb-2 ml-1">
                  {t("lang.parent_label")}
                </label>
                <input
                  type="text"
                  placeholder={t("lang.parent_placeholder")}
                  value={formData.parentName} // Добавлено для контроля
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-all text-white"
                  onChange={(e) =>
                    setFormData({ ...formData, parentName: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-500 uppercase mb-2 ml-1">
                  {t("lang.student_label")}
                </label>
                <input
                  type="text"
                  placeholder={t("lang.student_placeholder")}
                  value={formData.studentName}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-all text-white"
                  onChange={(e) =>
                    setFormData({ ...formData, studentName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder={t("lang.email_placeholder")}
                  value={formData.email}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-all text-white"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <select
                  value={formData.zone}
                  className={`w-full bg-black border border-gray-800 rounded-xl px-4 py-4 focus:outline-none transition-all text-white appearance-none ${
                    formData.zone === "red" ? "text-red-500" : "text-blue-500"
                  }`}
                  onChange={(e) =>
                    setFormData({ ...formData, zone: e.target.value })
                  }
                >
                  <option value="blue">Blue Zone (Study)</option>
                  <option value="red">Red Zone (Control)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="number"
                  placeholder={t("lang.age_placeholder")}
                  value={formData.age}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-all text-white"
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                  required
                />
                <select
                  value={formData.grade}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-all text-white"
                  onChange={(e) =>
                    setFormData({ ...formData, grade: e.target.value })
                  }
                  required
                >
                  <option value="">{t("lang.grade_placeholder")}</option>
                  {[...Array(11)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {t("lang.grade_label")}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className={`w-full py-4 font-bold uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg active:scale-95 ${
                  formData.zone === "red"
                    ? "bg-red-600 shadow-red-900/20"
                    : "bg-blue-600 shadow-blue-900/20"
                }`}
              >
                {t("lang.submit_btn")}
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center animate-pulse text-center">
          <div className="w-24 h-24 mb-6 border-4 border-blue-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <span className="text-4xl">✓</span>
          </div>
          <h2 className="text-5xl font-black text-blue-500 uppercase tracking-tighter mb-2">
            {t("lang.success_title")}
          </h2>
          <div className="font-mono text-gray-500 text-sm overflow-hidden whitespace-nowrap border-r-2 border-blue-500 animate-typing">
            {t("lang.success_msg").replace(
              "{{name}}",
              formData.studentName.split(" ")[0],
            )}
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-10 text-xs font-mono text-gray-600 hover:text-white transition-colors"
          >
            {t("lang.reset_btn")}
          </button>
        </div>
      )}

      <p className="mt-8 text-gray-600 text-[10px] font-mono uppercase tracking-widest text-center">
        {t("lang.security_footer")}
      </p>

      <style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        .animate-typing {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          animation: typing 2s steps(40, end);
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-in; }
        .animate-slide-up { animation: slideUp 0.6s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
};

export default ApplicationPage;
