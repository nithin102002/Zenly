import React from 'react';
import Image, { StaticImageData } from 'next/image';
import person1 from '../AboutTeam/assets/person1.jpg';
import person2 from '../AboutTeam/assets/person2.jpg';
import person3 from '../AboutTeam/assets/person3.jpg';

// Define the types for the TeamMember props
interface TeamMemberProps {
    name: string;
    role: string;
    image: StaticImageData;
}

// Define the types for the SocialMediaIcon props
interface SocialMediaIconProps {
    platform: 'facebook' | 'twitter' | 'instagram'; // restrict to known platforms
}

const AboutTeam: React.FC = () => {
    return (
        <section className="text-center py-12 bg-gray-100">
            <h2 className="text-3xl font-bold mb-8">Meet the Team</h2>
            <div className="flex flex-wrap justify-center gap-8 w-11/12 mx-auto">
                {/* Person 1 */}
                <TeamMember name="John Doe" role="Designer" image={person1} />
                {/* Person 2 */}
                <TeamMember name="Jane Smith" role="Developer" image={person2} />
                {/* Person 3 */}
                <TeamMember name="Alex Johnson" role="Marketing" image={person3} />
            </div>
        </section>
    );
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => (
    <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <div className="relative group w-full h-[300px] md:h-[350px] lg:h-[450px] rounded-lg overflow-hidden">
            <Image
                src={image}
                alt={name}
                className="w-full h-full object-contain transition duration-300 group-hover:filter-none filter grayscale"
                layout="fill"
                objectFit="contain"
            />
            <div className="absolute bottom-[-60px] flex justify-center gap-4 left-0 right-0 group-hover:bottom-2 transition-all duration-300">
                {/* Social Media Icons */}
                <SocialMediaIcon platform="facebook" />
                <SocialMediaIcon platform="twitter" />
                <SocialMediaIcon platform="instagram" />
            </div>
        </div>
        <h3 className="mt-4 font-semibold text-lg">{name}</h3>
        <p className="text-gray-500">{role}</p>
    </div>
);

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ platform }) => {
    const icons: { [key in SocialMediaIconProps['platform']]: JSX.Element } = {
        facebook: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.483v-9.284h-3.118v-3.622h3.118v-2.671c0-3.086 1.887-4.766 4.644-4.766 1.321 0 2.458.099 2.789.143v3.234l-1.914.001c-1.501 0-1.794.713-1.794 1.759v2.308h3.587l-.467 3.622h-3.12v9.284h6.116c.732 0 1.324-.592 1.324-1.324v-21.351c0-.733-.592-1.325-1.325-1.325z" />
            </svg>
        ),
        twitter: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57c-.885.392-1.83.654-2.825.775 1.014-.607 1.794-1.57 2.165-2.724-.949.56-2.005.973-3.127 1.194-.896-.956-2.174-1.55-3.594-1.55-2.717 0-4.928 2.21-4.928 4.927 0 .387.045.765.126 1.124-4.094-.205-7.72-2.166-10.148-5.144-.424.725-.666 1.566-.666 2.465 0 1.703.87 3.196 2.189 4.071-.807-.026-1.566-.247-2.229-.616v.062c0 2.375 1.688 4.351 3.93 4.802-.411.111-.843.171-1.287.171-.314 0-.616-.031-.916-.086.617 1.926 2.415 3.327 4.537 3.366-1.67 1.311-3.775 2.092-6.06 2.092-.394 0-.784-.023-1.17-.067 2.174 1.396 4.76 2.213 7.523 2.213 9.045 0 13.977-7.491 13.977-13.975 0-.213-.004-.426-.014-.637.96-.694 1.796-1.56 2.457-2.549z" />
            </svg>
        ),
        instagram: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.344 3.608 1.319.976.976 1.257 2.243 1.319 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.344 2.633-1.319 3.608-.976.976-2.243 1.257-3.608 1.319-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.685-.344-3.637-1.291-.952-.953-1.218-2.044-1.291-3.637-.058-1.28-.072-1.688-.072-4.947s.014-3.667.072-4.947c.073-1.593.34-2.685 1.291-3.637.976-.976 2.243-1.257 3.608-1.319 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.593.073-2.685.34-3.637 1.291-.952.953-1.218 2.044-1.291 3.637-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.073 1.593.34 2.685 1.291 3.637.953.952 2.044 1.218 3.637 1.291 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.593-.073 2.685-.34 3.637-1.291.952-.953 1.218-2.044 1.291-3.637.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.593-.34-2.685-1.291-3.637-.952-.952-2.044-1.218-3.637-1.291-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.757-6.162 6.162s2.757 6.162 6.162 6.162 6.162-2.757 6.162-6.162-2.757-6.162-6.162-6.162zm0 10.313c-2.287 0-4.151-1.864-4.151-4.151s1.864-4.151 4.151-4.151 4.151 1.864 4.151 4.151-1.864 4.151-4.151 4.151zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441 0-.796.645-1.441 1.441-1.441.796 0 1.441.645 1.441 1.441 0 .796-.645 1.441-1.441 1.441z" />
            </svg>
        ),
    };
    return <span className="hover:text-blue-500 cursor-pointer">{icons[platform]}</span>;
};

export default AboutTeam;
