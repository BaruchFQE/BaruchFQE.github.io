const leadershipMembers = [
  { name: 'Arthur Faynin', role: 'President', image: '/Arthur_Faynin.jpg', email: 'arthur.faynin@baruchmail.cuny.edu' },
  { name: 'Alfred Leong', role: 'Vice-President', image: '/Alfred_Leong.jpg', email: 'alfred.leong@baruchmail.cuny.edu' },
  { name: 'Alexi Tilly', role: 'Treasurer', image: '/Alexi_Tilly.jpg', email: 'alexandre.tilly@baruchmail.cuny.edu' },
  { name: 'Dmytro Popov', role: 'Secretary', image: '/Dmytroo.jpg', email: 'dmytro.popov@baruchmail.cuny.edu' },
  { name: 'Placeholder Name', role: 'Math Officer', image: '/placeholder_leader.png' },
  { name: 'Placeholder Name', role: 'Tech Officer', image: '/placeholder_leader.png' },
  { name: 'Maahin Nafi', role: 'Marketing Officer', image: '/placeholder_leader.png' },
  { name: 'Abie Lent', role: 'Events Officer', image: '/Abie_Lent.jpg', email: 'abraham.lent@baruchmail.cuny.edu' },
];

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="min-h-screen bg-primary-dark relative flex items-center py-[10vh]"
    >
      <div className="w-full px-[6vw]">
        {/* Header */}
        <div className="mb-12">
          <span className="micro-label text-secondary-light mb-4 block">
            Leadership
          </span>
          <h2 className="headline-lg text-primary-light" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Meet our Leadership
          </h2>
          <p className="body-text text-secondary-light mt-4 max-w-xl">
            A team committed to excellence, innovation, and member success.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {leadershipMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="photo-frame w-full aspect-square mb-4 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              {member.email ? (
                <a
                  href={`mailto:${member.email}`}
                  className="font-display font-semibold text-primary-light text-center leadership-name-link"
                >
                  {member.name}
                </a>
              ) : (
                <span className="font-display font-semibold text-primary-light text-center">
                  {member.name}
                </span>
              )}
              <span className="micro-label text-accent-green mt-1">
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
