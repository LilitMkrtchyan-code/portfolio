import { Code2, Link2, Mail, Phone } from 'lucide-react';
import { EMAIL, SOCIAL_LINKS } from '../../../../consts';
import type { DirectChannelItem } from './types';

const linkedinLink = SOCIAL_LINKS.find(link => link.label === 'Linkedin');
const githubLink = SOCIAL_LINKS.find(link => link.label === 'Github');

if (!linkedinLink) {
  console.error('DirectChannels: "Linkedin" link is missing in global SOCIAL_LINKS!');
}
if (!githubLink) {
  console.error('DirectChannels: "Github" link is missing in global SOCIAL_LINKS!');
}

export const DIRECT_CHANNELS_TITLE = 'Direct Channels';

export const CONTACT_PHONE = '+374 94 19 05 22';

export const DIRECT_CHANNEL_ITEMS: DirectChannelItem[] = [
  {
    id: 'email',
    label: 'Email',
    title: 'Send an Email',
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
  {
    id: 'linkedin',
    label: 'Linkedin',
    title: 'Professional Profile',
    href: linkedinLink?.href ?? '',
    isExternal: true,
    icon: Link2,
  },
  {
    id: 'github',
    label: 'Github',
    title: 'Open Source Work',
    href: githubLink?.href ?? '',
    isExternal: true,
    icon: Code2,
  },
  {
    id: 'phone',
    label: 'Phone',
    title: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE.replace(/\s/g, '')}`,
    icon: Phone,
  },
];
