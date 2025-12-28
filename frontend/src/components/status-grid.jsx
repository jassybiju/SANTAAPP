import { Thermometer, Zap, Gift } from "lucide-react"

const stats = [
  {
    label: "Active Wishes",
    value: "1,284,592",
    icon: Gift,
    trend: "+12.5%",
    color: "text-primary",
  },
  {
    label: "Sleigh Speed",
    value: "Mach 12.4",
    icon: Zap,
    trend: "Stable",
    color: "text-secondary",
  },
  {
    label: "Current North Pole Temp",
    value: "-42.8°C",
    icon: Thermometer,
    trend: "-2.1°",
    color: "text-white",
  },
]

export function StatsGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6 relative -top-20">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="glass p-6 rounded-3xl border-white/5 text-left group hover:scale-[1.02] transition-all duration-300"
        >
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-2xl bg-white/5 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
              {stat.trend}
            </span>
          </div>
          <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">{stat.label}</p>
          <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
          <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div
              className={`h-full opacity-50 group-hover:opacity-100 transition-opacity ${
                i === 0 ? "bg-primary" : i === 1 ? "bg-secondary" : "bg-white"
              }`}
              style={{ width: i === 0 ? "75%" : i === 1 ? "92%" : "45%" }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
