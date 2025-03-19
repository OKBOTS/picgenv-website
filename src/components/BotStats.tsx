import useSWR from 'swr';
import { Users, Server, ThumbsUp, TrendingUp } from 'lucide-react';

interface BotStats {
  server_count: number;
  total_votes: number;
  monthly_votes: number;
  percentage_changes: {
    monthly: number;
  };
}

const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return (num / 1000).toFixed(2) + 'k';
  }
  return num.toString();
};

const formatPercentage = (num: number): string => {
  return Number(num).toFixed(2) + '%';
};

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      'Authorization': 'aedbdcfe98c817fa3d3aa4316b8c21a2b59c8928b6095b56b4e88630227b3f23'
    }
  });
  if (!res.ok) throw new Error('Failed to fetch bot stats');
  return res.json();
};

export default function BotStats() {
  const { data, error, isLoading } = useSWR<BotStats>(
    'https://api.topstats.gg/discord/bots/1229726500883005511',
    fetcher,
    { refreshInterval: 3600000 } // Refresh every hour
  );

  if (error) return (
    <div className="text-red-400 text-center py-4">
      Failed to load bot statistics
    </div>
  );

  if (isLoading) return (
    <div className="text-violet-400 text-center py-4">
      Loading bot statistics...
    </div>
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      <div className="bg-violet-900/40 p-6 rounded-xl border border-violet-800/50">
        <div className="flex items-center mb-2">
          <Server className="h-5 w-5 text-violet-400 mr-2" />
          <h3 className="text-violet-300 font-medium">Servers</h3>
        </div>
        <p className="text-2xl font-bold text-white">{formatNumber(data?.server_count || 0)}</p>
      </div>

      <div className="bg-violet-900/40 p-6 rounded-xl border border-violet-800/50">
        <div className="flex items-center mb-2">
          <ThumbsUp className="h-5 w-5 text-violet-400 mr-2" />
          <h3 className="text-violet-300 font-medium">Total Votes</h3>
        </div>
        <p className="text-2xl font-bold text-white">{formatNumber(data?.total_votes || 0)}</p>
      </div>

      <div className="bg-violet-900/40 p-6 rounded-xl border border-violet-800/50">
        <div className="flex items-center mb-2">
          <Users className="h-5 w-5 text-violet-400 mr-2" />
          <h3 className="text-violet-300 font-medium">Monthly Votes</h3>
        </div>
        <p className="text-2xl font-bold text-white">{formatNumber(data?.monthly_votes || 0)}</p>
      </div>

      <div className="bg-violet-900/40 p-6 rounded-xl border border-violet-800/50">
        <div className="flex items-center mb-2">
          <TrendingUp className="h-5 w-5 text-violet-400 mr-2" />
          <h3 className="text-violet-300 font-medium">Monthly Growth</h3>
        </div>
        <p className="text-2xl font-bold text-white">
          {formatPercentage(data?.percentage_changes.monthly || 0)}
        </p>
      </div>
    </div>
  );
}