export default function FighterProfilePage({ params }) {
  const { fighterId } = params;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-card rounded-lg overflow-hidden">
          <div className="bg-primary-700 text-white p-6">
            <h1 className="text-3xl font-heading">{fighterId}</h1>
            <p className="text-xl">Nickname: "The Iron Man"</p>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 mb-4">
                  {/* Fighter image will go here */}
                  <div className="flex items-center justify-center">
                    <p>Fighter Image</p>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="text-xl font-heading mb-2">Fighter Stats</h2>
                  {/* FighterStats component will be added here */}
                  <ul>
                    <li className="flex justify-between py-1 border-b border-gray-200">
                      <span>Record:</span>
                      <span>270-42-10 (61 KOs)</span>
                    </li>
                    <li className="flex justify-between py-1 border-b border-gray-200">
                      <span>Height:</span>
                      <span>5'5" (165 cm)</span>
                    </li>
                    <li className="flex justify-between py-1 border-b border-gray-200">
                      <span>Weight:</span>
                      <span>125 lbs (56.7 kg)</span>
                    </li>
                    <li className="flex justify-between py-1 border-b border-gray-200">
                      <span>Age:</span>
                      <span>26</span>
                    </li>
                    <li className="flex justify-between py-1">
                      <span>Gym:</span>
                      <span>Jitmuangnon</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-xl font-heading mb-4">Biography</h2>
                <div className="prose max-w-none">
                  <p>This is a placeholder for the fighter biography.</p>
                </div>
                
                <h2 className="text-xl font-heading mt-6 mb-4">Recent Fights</h2>
                <div className="space-y-4">
                  {/* Recent fights will be listed here */}
                  <p>Recent fights will be displayed here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 