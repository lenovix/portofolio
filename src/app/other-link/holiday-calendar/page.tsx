"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

interface Holiday {
  date: string;
  localName: string;
  name: string;
}

const DAYS = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

export default function HolidayCalendarPage() {
  const router = useRouter();

  const today = new Date();
  const todayISO = today.toISOString().split("T")[0];

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(todayISO);

  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ================= FETCH HOLIDAY ================= */
  useEffect(() => {
    async function fetchHolidays() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://date.nager.at/api/v3/PublicHolidays/${year}/ID`
        );

        if (!res.ok) throw new Error("Gagal mengambil data libur");

        setHolidays(await res.json());
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchHolidays();
  }, [year]);

  /* ================= UTILS ================= */
  const holidayMap = useMemo(
    () => new Map(holidays.map((h) => [h.date, h])),
    [holidays]
  );

  const selectedHoliday = holidayMap.get(selectedDate);
  const selectedDateObj = new Date(selectedDate);

  /* ================= CALENDAR ================= */
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dates = Array.from({ length: firstDay + daysInMonth }).map((_, i) =>
    i < firstDay ? null : i - firstDay + 1
  );

  /* ================= HANDLERS ================= */
  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else setMonth((m) => m - 1);
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else setMonth((m) => m + 1);
  };

  /* ================= UI ================= */
  return (
    <>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* ================= HEADER ================= */}
          <header className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="px-4 py-2 rounded-xl border
            hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              ⬅ Back
            </button>

            <h1 className="text-2xl font-bold">Indonesia Holiday Calendar</h1>
          </header>

          {/* ================= MAIN LAYOUT ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* ================= CALENDAR (3/4) ================= */}
            <section className="lg:col-span-3 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevMonth}
                  className="p-2 rounded-full
               bg-gray-100 dark:bg-gray-700
               hover:scale-110 transition"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <h2 className="text-xl font-bold tracking-wide">
                  {new Date(year, month).toLocaleDateString("id-ID", {
                    month: "long",
                    year: "numeric",
                  })}
                </h2>

                <button
                  onClick={nextMonth}
                  className="p-2 rounded-full
               bg-gray-100 dark:bg-gray-700
               hover:scale-110 transition"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Day Labels */}
              <div className="grid grid-cols-7 mb-3">
                {DAYS.map((d) => (
                  <div
                    key={d}
                    className="text-center text-sm font-semibold opacity-60"
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-3">
                {dates.map((date, i) => {
                  if (!date) return <div key={i} />;

                  const iso = `${year}-${String(month + 1).padStart(
                    2,
                    "0"
                  )}-${String(date).padStart(2, "0")}`;

                  const isToday = iso === todayISO;
                  const isSelected = iso === selectedDate;
                  const holiday = holidayMap.get(iso);

                  return (
                    <div
                      key={iso}
                      onClick={() => setSelectedDate(iso)}
                      className={`
                    aspect-square p-3 rounded-xl cursor-pointer
                    border transition flex flex-col items-center justify-between
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    ${isToday ? "bg-blue-500 text-white border-blue-500" : ""}
                    ${isSelected && !isToday ? "ring-2 ring-blue-400" : ""}
                  `}
                    >
                      <span className="text-lg font-bold">{date}</span>

                      {holiday && (
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full
                      bg-red-100 text-red-700
                      dark:bg-red-900 dark:text-red-200"
                        >
                          Libur
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {loading && (
                <p className="mt-4 text-blue-500">Loading data libur...</p>
              )}
              {error && <p className="mt-4 text-red-500">{error}</p>}
            </section>

            {/* ================= AGENDA (1/4) ================= */}
            <aside
              className="lg:col-span-1 p-6 rounded-2xl
          bg-gradient-to-b from-blue-50 to-blue-100
          dark:from-gray-800 dark:to-gray-700
          border border-blue-200 dark:border-gray-600
          h-fit sticky top-24"
            >
              <h2 className="text-xl font-bold mb-2">📅 Agenda</h2>

              <p className="text-sm opacity-80 mb-4">
                {selectedDateObj.toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              {selectedHoliday ? (
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border">
                  <p className="font-semibold text-lg">
                    {selectedHoliday.localName}
                  </p>
                  <p className="text-sm opacity-70">{selectedHoliday.name}</p>
                </div>
              ) : (
                <p className="font-medium text-gray-600 dark:text-gray-300">
                  Tidak ada hari libur di tanggal ini
                </p>
              )}
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
