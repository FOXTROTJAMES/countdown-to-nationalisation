// components/NationalizedOperators.tsx
import React from 'react';
import { TrainOperator, getNationalizedOperators } from './train-operators';

const NationalizedOperators: React.FC = () => {
  const nationalizedOperators = getNationalizedOperators();

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getDaysSince = (dateString: string): number => {
    const nationalizationDate = new Date(dateString);
    const today = new Date();
    const diffTime = today.getTime() - nationalizationDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Sort operators by scheduled date
    const sortedOperators: TrainOperator[] = [...nationalizedOperators].sort((b, a) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );

  return (
    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-10 m-8">
      <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
        <span className="mr-3">✅</span>
        Already Nationalized ({sortedOperators.length})
      </h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedOperators.map((operator: TrainOperator, index: number) => {
          const daysSince = getDaysSince(operator.date);
          const isRecent = daysSince >= 0; // Check if nationalization date has passed
          
          return (
            <div 
              key={index} 
              className="bg-white border border-green-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg text-green-900 mb-2">
                {operator.name}
              </h3>
              
              <div className="text-sm text-gray-600 space-y-1">
                {/* <p><strong>Region:</strong> {operator.region}</p> */}
                <p><strong>Nationalized:</strong> {formatDate(operator.date)}</p>
                {isRecent && daysSince > 0 && (
                  <p className="text-green-600 font-medium">
                    {daysSince} day{daysSince !== 1 ? 's' : ''} ago
                  </p>
                )}
                {daysSince === 0 && (
                  <p className="text-green-600 font-bold">Nationalized today!</p>
                )}
                {daysSince < 0 && (
                  <p className="text-orange-600 font-medium">
                    Scheduled for {Math.abs(daysSince)} day{Math.abs(daysSince) !== 1 ? 's' : ''} time
                  </p>
                )}
              </div>
              
              <p className="text-sm text-gray-700 mt-2 italic">
                {/* {operator.description} */}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NationalizedOperators;