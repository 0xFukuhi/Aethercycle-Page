import React from 'react';
import { MessageSquare, Twitter, Github, Users, Code, BookOpen, ExternalLink, Info } from 'lucide-react';

const CommunitySection: React.FC = () => {
  const communityChannels = [
    {
      name: 'Discord',
      description: 'Real-time discussions, support, and community governance',
      icon: MessageSquare,
      url: 'https://discord.gg/wadaks9KPt',
      members: '500+',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      description: 'Protocol updates, announcements, and ecosystem news',
      icon: Twitter,
      url: 'https://x.com/Aethercycle',
      members: '1.2K+',
      color: 'bg-gray-700 hover:bg-gray-600'
    },
    {
      name: 'GitHub',
      description: 'Open source code, technical discussions, and contributions',
      icon: Github,
      url: 'https://github.com/aethercycle',
      members: 'Public',
      color: 'bg-gray-800 hover:bg-gray-700'
    }
  ];

  const contributionAreas = [
    {
      title: 'Community Building',
      description: 'Help grow the AEC ecosystem through education and outreach',
      icon: Users,
      tasks: [
        'Create educational content',
        'Onboard new community members',
        'Organize community events',
        'Moderate community channels'
      ]
    },
    {
      title: 'Technical Contributions',
      description: 'Contribute to protocol development and security',
      icon: Code,
      tasks: [
        'Code review and testing',
        'Bug reporting and fixes',
        'Documentation improvements',
        'Security auditing'
      ]
    },
    {
      title: 'Content Creation',
      description: 'Develop educational and promotional materials',
      icon: BookOpen,
      tasks: [
        'Write technical articles',
        'Create video tutorials',
        'Design infographics',
        'Translate documentation'
      ]
    }
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">COMMUNITY</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the AEC community and help build the future of autonomous DeFi. 
            Connect with developers, contributors, and supporters worldwide.
          </p>
        </div>

        {/* Community Channels */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Join Our Community</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {communityChannels.map((channel, index) => (
              <a
                key={index}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${channel.color} p-8 rounded-lg text-center transition-all duration-300 ease-in-out transform hover:scale-105 group`}
              >
                <channel.icon className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
                <h4 className="text-xl font-bold mb-3">{channel.name}</h4>
                <p className="text-sm opacity-90 mb-4">{channel.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xs font-mono bg-black bg-opacity-30 px-2 py-1 rounded">
                    {channel.members} members
                  </span>
                  <ExternalLink size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contribution Areas */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Ways to Contribute</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {contributionAreas.map((area, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <area.icon className="mr-3 text-blue-400" size={32} />
                  <h4 className="text-xl font-bold">{area.title}</h4>
                </div>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-gray-800 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Community Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-green-400 mb-4">We Encourage:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  Constructive technical discussions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  Educational content sharing
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  Respectful debate and feedback
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  Collaboration and mutual support
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
                  Transparency and honesty
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red-400 mb-4">We Prohibit:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                  Financial advice or price speculation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                  Spam, scams, or phishing attempts
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                  Harassment or personal attacks
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                  Off-topic discussions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></span>
                  Impersonation of team members
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Community Growth</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">1.7K+</div>
              <div className="text-sm text-gray-400">Total Members</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm text-gray-400">Contributors</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm text-gray-400">Countries</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm text-gray-400">Active Support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Ready to Get Involved?</h3>
          <p className="text-gray-300 mb-8">
            Start by joining our Discord server and introducing yourself to the community.
          </p>
          <a
            href="https://discord.gg/wadaks9KPt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-mono text-sm transition-all duration-300 ease-in-out transform hover:scale-105 inline-flex items-center gap-2"
          >
            <MessageSquare size={16} />
            JOIN DISCORD NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;