// data/trainOperators.ts

export interface TrainOperator {
  name: string;
  region: string;
  description: string;
  date: string; // The nationalization date (past) or scheduled date (future)
}

export const trainOperators: TrainOperator[] = [
  {
    name: "London North Eastern Railway (LNER)",
    date: "2018-06-24",
    region: "East Coast Main Line",
    description: "Government-controlled since replacing Virgin Trains East Coast"
  },
  {
    name: "Southeastern",
    date: "2021-10-16",
    region: "Southeast England",
    description: "Brought under public control after franchise issues"
  },
  {
    name: "Northern Trains",
    date: "2020-03-01",
    region: "Northern England",
    description: "Taken into public ownership due to poor performance"
  },
  {
    name: "South Western Railway",
    date: "2025-05-25",
    region: "Southwest England and London",
    description: "First operator nationalized under Labour's 2025 program"
  },
  {
    name: "c2c (Essex Thameside)",
    date: "2025-07-20",
    region: "Essex and East London",
    description: "Second operator in the 2025 nationalization program"
  },
  {
    name: "Greater Anglia",
    date: "2025-10-12",
    region: "East of England",
    description: "Scheduled for autumn 2025 nationalization"
  },
  {
    name: "Chiltern Railways",
    date: "2027-12-12",
    region: "London to Birmingham corridor",
    description: "Core term expires April 2025"
  },
  {
    name: "Thameslink",
    date: "2028-04-01",
    region: "North-South London corridor",
    description: "Part of the Govia Thameslink Railway franchise"
  },
  {
    name: "Southern",
    date: "2028-04-01",
    region: "South London and South Coast",
    description: "Part of the Govia Thameslink Railway franchise"
  },
  {
    name: "Great Northern",
    date: "2028-04-01",
    region: "North London and surrounding areas",
    description: "Part of the Govia Thameslink Railway franchise"
  },
  {
    name: "CrossCountry",
    date: "2027-10-15",
    region: "Cross-country services",
    description: "Long-distance cross-country routes"
  },
  {
    name: "West Midlands Trains",
    date: "2026-09-20",
    region: "West Midlands",
    description: "Regional services in the West Midlands"
  },
  {
    name: "Great Western Railway",
    date: "2028-06-25",
    region: "West of England and Wales",
    description: "Main line services to the West Country"
  },
  {
    name: "ScotRail",
    date: "2022-04-01",
    region: "Scotland",
    description: "Scottish passenger services"
  },
  {
    name: "TransPennine Express",
    date: "2023-05-28",
    region: "Northern England",
    description: "Inter-city services across Northern England"
  },
  {
    name: "East Midlands Railway",
    date: "2025-08-18",
    region: "East Midlands",
    description: "Regional and inter-city services"
  },
  {
    name: "London Northwestern",
    date: "2026-09-20",
    region: "East Midlands",
    description: "Regional and inter-city services"
  },
  {
    name: "Avanti West Coast",
    date: "2026-10-18",
    region: "West Coast Main Line",
    description: "High-speed inter-city services"
  },
  {
    name: "Transport for Wales",
    date: "2021-02-07",
    region: "Wales",
    description: "High-speed inter-city services"
  },{
    name: "Carillion Sleeper",
    date: "2023-06-25",
    region: "Wales",
    description: "High-speed inter-city services"
  }
];

// Helper functions to filter operators based on current date
export const getNationalizedOperators = (): TrainOperator[] => {
  const now = new Date();
  return trainOperators.filter(operator => new Date(operator.date) <= now);
};

export const getPendingOperators = (): TrainOperator[] => {
  const now = new Date();
  return trainOperators.filter(operator => new Date(operator.date) > now);
};