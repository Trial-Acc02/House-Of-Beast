import { Check, Crown } from 'lucide-react';

interface MembershipPlansProps {
  onJoinNow: () => void;
}

export default function MembershipPlans({ onJoinNow }: MembershipPlansProps) {
  const plans = [
    {
      name: 'Basic',
      price: '1,999',
      period: 'per month',
      description: 'Perfect for getting started on your fitness journey',
      features: [
        'Access to all gym equipment',
        'Cardio zone access',
        'Locker facility',
        'General workout guidance',
        'Flexible gym hours',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '4,999',
      period: 'per quarter',
      description: 'Best value for committed fitness enthusiasts',
      features: [
        'Everything in Basic',
        '2 personal training sessions/month',
        'Nutrition consultation',
        'Progress tracking',
        'Group class access',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      price: '15,999',
      period: 'per year',
      description: 'Ultimate package for serious athletes',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Customized meal plans',
        'Body composition analysis',
        'Guest passes (2/month)',
        'Free merchandise',
        'VIP locker access',
      ],
      popular: false,
    },
  ];

  return (
    <section id="plans" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Membership <span className="text-red-600">Plans</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan to match your fitness goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 rounded-lg overflow-hidden ${
                plan.popular
                  ? 'ring-4 ring-red-600 transform scale-105'
                  : 'hover:transform hover:scale-105'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase flex items-center gap-1">
                  <Crown size={16} />
                  Best Value
                </div>
              )}

              <div className="p-8">
                <h3 className="text-3xl font-black text-white mb-2 uppercase">{plan.name}</h3>
                <p className="text-gray-400 mb-6 h-12">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-black text-white">₹{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <Check className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onJoinNow}
                  className={`w-full py-4 rounded-lg font-bold uppercase tracking-wider transition-all ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ No joining fee</span>
            <span>✓ Free trial day</span>
            <span>✓ Flexible payment options</span>
            <span>✓ Pause membership option</span>
          </div>
        </div>
      </div>
    </section>
  );
}
