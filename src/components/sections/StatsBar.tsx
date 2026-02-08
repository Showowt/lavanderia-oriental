export default function StatsBar() {
  const stats = [
    { icon: '🏪', value: '5', label: 'Sucursales' },
    { icon: '👕', value: '10K+', label: 'Clientes Satisfechos' },
    { icon: '⭐', value: '5.0', label: 'Calificación Google' },
    { icon: '🚚', value: '24h', label: 'Delivery Express' },
  ];

  return (
    <section className="bg-oriental-blue py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <span className="text-3xl md:text-4xl block mb-2">{stat.icon}</span>
              <span className="text-2xl md:text-3xl font-heading font-bold block">{stat.value}</span>
              <span className="text-sm md:text-base text-white/80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
