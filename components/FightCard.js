const FightCard = ({ event }) => {
  return (
    <div className="bg-white rounded shadow-card p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-heading font-bold uppercase text-primary">
          {event.title}
        </h2>
        <div className="text-gray-600">
          {event.date} | {event.venue}
        </div>
      </div>
      
      <div className="space-y-4">
        {event.bouts.map((bout, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
          >
            <div className="text-center w-2/5">
              <h3 className="font-heading font-bold">
                {bout.fighter1.name}
              </h3>
              <div className="text-sm text-gray-600">
                {bout.fighter1.record}
              </div>
            </div>
            
            <div className="font-bold text-primary">VS</div>
            
            <div className="text-center w-2/5">
              <h3 className="font-heading font-bold">
                {bout.fighter2.name}
              </h3>
              <div className="text-sm text-gray-600">
                {bout.fighter2.record}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FightCard; 