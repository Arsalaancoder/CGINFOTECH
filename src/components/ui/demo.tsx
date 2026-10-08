import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonails';

// Unique client testimonials data
const testimonials = [
  {
    name: 'Ava Green',
    username: '@ava_corporate',
    body: 'C&G Infotech made our enterprise network workflow 10x faster and zero downtime!',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    country: '🏢 Corporate',
  },
  {
    name: 'Ana Miller',
    username: '@ana_health',
    body: 'CCTV 4K & Biometric access control setup is a total game changer for our hospital!',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    country: '🏥 Healthcare',
  },
  {
    name: 'Mateo Rossi',
    username: '@mat_enterprise',
    body: 'Server room setup & AMC support response times are buttery smooth and reliable.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    country: '🏭 Enterprise',
  },
  {
    name: 'Maya Patel',
    username: '@maya_edu',
    body: 'Data center rack pulling and Cat6 cabling setup was an absolute breeze!',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    country: '🏛️ Education',
  },
  {
    name: 'Noah Smith',
    username: '@noah_hotel',
    body: 'Best IT infrastructure & CCTV security partner in Hyderabad & Secunderabad!',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    country: '🏨 Hospitality',
  },
  {
    name: 'Lucas Stone',
    username: '@luc_retail',
    body: 'Very dependable AMC team with instant hardware replacement support.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    country: '🏬 Retail',
  },
  {
    name: 'Haruto Sato',
    username: '@haru_bank',
    body: 'Impressive biometric attendance & visitor software performance on mobile!',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
    country: '🏦 Banking',
  },
  {
    name: 'Emma Lee',
    username: '@emma_logistics',
    body: 'Love the 24/7 remote mobile CCTV live view and intrusion alert features!',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    country: '🏢 Logistics',
  },
  {
    name: 'Carlos Ray',
    username: '@carl_tech',
    body: 'Great for enterprise firewalls, VPN tunnels and high-density Wi-Fi 6.',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    country: '🏙️ Commercial',
  },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <Card className="w-52 border-black/10 bg-white/95 backdrop-blur-xs shadow-xs hover:shadow-md transition-shadow">
      <CardContent className="p-3.5">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9 border border-black/10">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-[#FDEEE9] text-[#E65100] font-bold text-xs">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-xs font-bold text-[#181715] flex items-center gap-1">
              {name} <span className="text-[10px] text-[#66635C] font-normal">{country}</span>
            </figcaption>
            <p className="text-[10px] font-mono text-[#E65100]">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-xs text-[#66635C] leading-snug line-clamp-2">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

export default function DemoOne() {
  return (
    <div className="border border-black/10 rounded-2xl relative flex h-[400px] w-full max-w-[800px] flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px] bg-[#F5F4F0] p-2 shadow-xs">
      <div
        className="flex flex-row items-center gap-3"
        style={{
          transform:
            'translateX(-80px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(18deg)',
        }}
      >
        {/* Vertical Marquee 1 */}
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:35s]">
          {testimonials.map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>
        {/* Vertical Marquee 2 */}
        <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:35s]">
          {testimonials.map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>
        {/* Vertical Marquee 3 */}
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:35s]">
          {testimonials.map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>
        {/* Vertical Marquee 4 */}
        <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:35s]">
          {testimonials.map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#F5F4F0]"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#F5F4F0]"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F5F4F0]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#F5F4F0]"></div>
      </div>
    </div>
  );
}
