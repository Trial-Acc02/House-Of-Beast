import { useState } from 'react';
import { X, Download, Search, Users } from 'lucide-react';
import { supabase, type Registration } from '../lib/supabase';

interface AdminDashboardProps {
  onClose: () => void;
}

export default function AdminDashboard({ onClose }: AdminDashboardProps) {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const ADMIN_PASSWORD = 'admin123';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError('');
      fetchRegistrations();
    } else {
      setAuthError('Invalid password');
    }
  };

  const fetchRegistrations = async () => {
    try {
      const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRegistrations(data || []);
    } catch (error) {
      console.error('Error fetching registrations:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredRegistrations = registrations.filter(
    (reg) =>
      reg.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.phone.includes(searchTerm)
  );

  const exportToCSV = () => {
    const headers = [
      'First Name',
      'Last Name',
      'Email',
      'Phone',
      'Address',
      'Age',
      'Gender',
      'Fitness Goal',
      'Preferred Plan',
      'Registration Date',
    ];

    const csvData = filteredRegistrations.map((reg) => [
      reg.first_name,
      reg.last_name,
      reg.email,
      reg.phone,
      reg.address,
      reg.age,
      reg.gender,
      reg.fitness_goal,
      reg.preferred_plan,
      new Date(reg.created_at!).toLocaleDateString(),
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gym-registrations-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <div className="bg-gray-900 rounded-lg max-w-md w-full p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white uppercase">Admin Login</h2>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter admin password"
              />
              {authError && <p className="text-red-500 text-sm mt-2">{authError}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-gray-900 rounded-lg max-w-7xl mx-auto my-8">
        <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-3">
            <Users className="text-white" size={28} />
            <h2 className="text-2xl font-bold text-white uppercase">Member Registrations</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider transition-all"
            >
              <Download size={20} />
              Export CSV
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-white">{registrations.length}</p>
                <p className="text-gray-400 text-sm uppercase">Total Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">
                  {registrations.filter((r) => r.preferred_plan === 'Basic').length}
                </p>
                <p className="text-gray-400 text-sm uppercase">Basic Plan</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">
                  {registrations.filter((r) => r.preferred_plan === 'Premium').length}
                </p>
                <p className="text-gray-400 text-sm uppercase">Premium Plan</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">
                  {registrations.filter((r) => r.preferred_plan === 'Elite').length}
                </p>
                <p className="text-gray-400 text-sm uppercase">Elite Plan</p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
              <p className="text-gray-400 mt-4">Loading registrations...</p>
            </div>
          ) : filteredRegistrations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No registrations found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="text-left text-white font-bold p-4 uppercase text-sm">Name</th>
                    <th className="text-left text-white font-bold p-4 uppercase text-sm">Contact</th>
                    <th className="text-left text-white font-bold p-4 uppercase text-sm">Details</th>
                    <th className="text-left text-white font-bold p-4 uppercase text-sm">Plan</th>
                    <th className="text-left text-white font-bold p-4 uppercase text-sm">Registered</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRegistrations.map((reg, index) => (
                    <tr
                      key={reg.id}
                      className={`border-b border-gray-800 hover:bg-gray-800/50 transition-colors ${
                        index % 2 === 0 ? 'bg-gray-900/50' : ''
                      }`}
                    >
                      <td className="p-4">
                        <p className="text-white font-semibold">
                          {reg.first_name} {reg.last_name}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {reg.age} yrs, {reg.gender}
                        </p>
                      </td>
                      <td className="p-4">
                        <p className="text-white">{reg.email}</p>
                        <p className="text-gray-400 text-sm">{reg.phone}</p>
                      </td>
                      <td className="p-4">
                        <p className="text-white text-sm">{reg.address}</p>
                        <p className="text-gray-400 text-sm">Goal: {reg.fitness_goal}</p>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-bold ${
                            reg.preferred_plan === 'Elite'
                              ? 'bg-yellow-600 text-white'
                              : reg.preferred_plan === 'Premium'
                              ? 'bg-red-600 text-white'
                              : 'bg-gray-700 text-white'
                          }`}
                        >
                          {reg.preferred_plan}
                        </span>
                      </td>
                      <td className="p-4 text-gray-400 text-sm">
                        {new Date(reg.created_at!).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
