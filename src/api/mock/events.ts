import { Event, EventCategory, EventMember } from '../../types';
import { EventFilters } from '../events';

const mockCategories: EventCategory[] = [
  { id: 1, name: 'Outdoors', icon: '🌲' },
  { id: 2, name: 'Food & Drink', icon: '🍽️' },
  { id: 3, name: 'Sports', icon: '⚽' },
  { id: 4, name: 'Music', icon: '🎵' },
  { id: 5, name: 'Arts', icon: '🎨' },
  { id: 6, name: 'Social', icon: '🎉' },
  { id: 7, name: 'Learning', icon: '📚' },
  { id: 8, name: 'Fitness', icon: '💪' },
];

function hoursFromNow(hours: number): string {
  const d = new Date();
  d.setHours(d.getHours() + hours);
  return d.toISOString();
}

const mockEventsData: Event[] = [
  {
    id: 'evt-1',
    title: 'Sunset Hike & Picnic',
    cover_image_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category_id: 1,
    category: mockCategories[0],
    host_id: 'host-1',
    host: { id: 'host-1', first_name: 'Alex', last_name: 'Smith', trust_level: 'member' },
    location_name: 'Riverside Park',
    address: '500 Park Dr',
    description: 'A leisurely evening hike followed by a picnic dinner overlooking the city skyline. Bring your own blanket and snacks — we will provide drinks.',
    start_time: hoursFromNow(4),
    end_time: hoursFromNow(7),
    max_capacity: 20,
    current_capacity: 8,
    member_count: 8,
    is_member: false,
    price: 0,
    visibility: 'public',
    distance_miles: 2.3,
    created_at: hoursFromNow(-48),
  },
  {
    id: 'evt-2',
    title: 'Sushi Rolling Workshop',
    cover_image_url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop',
    category_id: 2,
    category: mockCategories[1],
    host_id: 'host-2',
    host: { id: 'host-2', first_name: 'Jordan', last_name: 'Garcia', trust_level: 'verified' },
    location_name: 'The Loft Studio',
    address: '245 Broadway',
    description: 'Learn to roll sushi like a pro! All ingredients provided. Vegetarian options available. Take home what you make.',
    start_time: hoursFromNow(26),
    end_time: hoursFromNow(28),
    max_capacity: 15,
    current_capacity: 12,
    member_count: 12,
    is_member: false,
    price: 25,
    visibility: 'public',
    distance_miles: 4.1,
    created_at: hoursFromNow(-120),
  },
  {
    id: 'evt-3',
    title: 'Pickup Basketball',
    cover_image_url: 'https://images.unsplash.com/photo-1546519638405-a8c39f5c0549?w=800&auto=format&fit=crop',
    category_id: 3,
    category: mockCategories[2],
    host_id: 'host-3',
    host: { id: 'host-3', first_name: 'Taylor', last_name: 'Wilson', trust_level: 'member' },
    location_name: 'Community Center',
    address: '1200 Oak Ave',
    description: 'Casual pickup basketball. All skill levels welcome. We will split into teams once we have enough people.',
    start_time: hoursFromNow(6),
    end_time: hoursFromNow(8),
    max_capacity: 20,
    current_capacity: 6,
    member_count: 6,
    is_member: false,
    price: 0,
    visibility: 'public',
    distance_miles: 0.8,
    created_at: hoursFromNow(-24),
  },
  {
    id: 'evt-4',
    title: 'Acoustic Open Mic Night',
    cover_image_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop',
    category_id: 4,
    category: mockCategories[3],
    host_id: 'host-4',
    host: { id: 'host-4', first_name: 'Morgan', last_name: 'Lee', trust_level: 'trusted' },
    location_name: 'Downtown Cafe',
    address: '342 Main St',
    description: 'Bring your guitar, your voice, or just your ears. Open mic night at the cozy Downtown Cafe. Sign up at the door.',
    start_time: hoursFromNow(30),
    end_time: hoursFromNow(33),
    max_capacity: 40,
    current_capacity: 15,
    member_count: 15,
    is_member: false,
    price: 5,
    visibility: 'public',
    distance_miles: 1.5,
    created_at: hoursFromNow(-72),
  },
  {
    id: 'evt-5',
    title: 'Watercolor Painting Session',
    cover_image_url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop',
    category_id: 5,
    category: mockCategories[4],
    host_id: 'host-5',
    host: { id: 'host-5', first_name: 'Riley', last_name: 'Martinez', trust_level: 'verified' },
    location_name: 'Art Gallery',
    address: '78 Market Sq',
    description: 'Guided watercolor painting session. No experience needed. All materials supplied. We are painting a sunset landscape.',
    start_time: hoursFromNow(50),
    end_time: hoursFromNow(52),
    max_capacity: 12,
    current_capacity: 9,
    member_count: 9,
    is_member: false,
    price: 15,
    visibility: 'public',
    distance_miles: 3.2,
    created_at: hoursFromNow(-168),
  },
  {
    id: 'evt-6',
    title: 'Board Game Night',
    category_id: 6,
    category: mockCategories[5],
    host_id: 'host-6',
    host: { id: 'host-6', first_name: 'Casey', last_name: 'Brown', trust_level: 'member' },
    location_name: 'Rooftop Bar',
    address: '900 Broadway',
    description: 'Catan, Ticket to Ride, Codenames, and more. Snacks provided. Drinks available for purchase. Come solo or bring friends.',
    start_time: hoursFromNow(28),
    end_time: hoursFromNow(31),
    max_capacity: 25,
    current_capacity: 18,
    member_count: 18,
    is_member: false,
    price: 0,
    visibility: 'public',
    distance_miles: 2.8,
    created_at: hoursFromNow(-96),
  },
  {
    id: 'evt-7',
    title: 'Morning Yoga in the Park',
    cover_image_url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop',
    category_id: 8,
    category: mockCategories[7],
    host_id: 'host-7',
    host: { id: 'host-7', first_name: 'Quinn', last_name: 'Davis', trust_level: 'trusted' },
    location_name: 'Riverside Park',
    address: '500 Park Dr',
    description: 'Start your day with a peaceful yoga session by the river. All levels welcome. Bring your own mat and water.',
    start_time: hoursFromNow(20),
    end_time: hoursFromNow(21),
    max_capacity: 30,
    current_capacity: 14,
    member_count: 14,
    is_member: false,
    price: 0,
    visibility: 'public',
    distance_miles: 2.1,
    created_at: hoursFromNow(-36),
  },
  {
    id: 'evt-8',
    title: 'Cooking Class: Thai Curry',
    category_id: 2,
    category: mockCategories[1],
    host_id: 'host-8',
    host: { id: 'host-8', first_name: 'Sam', last_name: 'Jones', trust_level: 'verified' },
    location_name: 'The Loft Studio',
    address: '245 Broadway',
    description: 'Learn to make authentic Thai green curry from scratch. All ingredients and tools provided. Eat what you cook!',
    start_time: hoursFromNow(48),
    end_time: hoursFromNow(50),
    max_capacity: 10,
    current_capacity: 7,
    member_count: 7,
    is_member: false,
    price: 35,
    visibility: 'public',
    distance_miles: 4.1,
    created_at: hoursFromNow(-200),
  },
  {
    id: 'evt-9',
    title: 'Trail Run: 5K Loop',
    cover_image_url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop',
    category_id: 3,
    category: mockCategories[2],
    host_id: 'host-9',
    host: { id: 'host-9', first_name: 'Alex', last_name: 'Smith', trust_level: 'member' },
    location_name: 'Lake Rd Trailhead',
    address: '3200 Lake Rd',
    description: 'Group trail run on the scenic Lake Loop. Moderate pace, about 45 minutes. Well see some great views of the lake.',
    start_time: hoursFromNow(22),
    end_time: hoursFromNow(23),
    max_capacity: 15,
    current_capacity: 5,
    member_count: 5,
    is_member: false,
    price: 0,
    visibility: 'public',
    distance_miles: 6.5,
    created_at: hoursFromNow(-12),
  },
  {
    id: 'evt-10',
    title: 'Vinyl Listening Party',
    cover_image_url: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800&auto=format&fit=crop',
    category_id: 4,
    category: mockCategories[3],
    host_id: 'host-10',
    host: { id: 'host-10', first_name: 'Jordan', last_name: 'Garcia', trust_level: 'verified' },
    location_name: 'Harbor View',
    address: '55 Harbor Blvd',
    description: 'Bring your favorite vinyl records to share. We will have a rotating DJ setup. Jazz, soul, rock, electronic — all genres welcome.',
    start_time: hoursFromNow(52),
    end_time: hoursFromNow(55),
    max_capacity: 30,
    current_capacity: 20,
    member_count: 20,
    is_member: false,
    price: 10,
    visibility: 'public',
    distance_miles: 5.2,
    created_at: hoursFromNow(-144),
  },
  {
    id: 'evt-11',
    title: 'Photography Walk: Architecture',
    category_id: 5,
    category: mockCategories[4],
    host_id: 'host-11',
    host: { id: 'host-11', first_name: 'Taylor', last_name: 'Wilson', trust_level: 'member' },
    location_name: 'City Library',
    address: '100 Civic Plaza',
    description: 'Walk through the historic district photographing architecture. Any camera welcome including phone cameras. Well share tips along the way.',
    start_time: hoursFromNow(46),
    end_time: hoursFromNow(48),
    max_capacity: 12,
    current_capacity: 4,
    member_count: 4,
    is_member: false,
    price: 0,
    visibility: 'public',
    distance_miles: 0.3,
    created_at: hoursFromNow(-60),
  },
  {
    id: 'evt-12',
    title: 'Trivia Night: 90s Edition',
    category_id: 6,
    category: mockCategories[5],
    host_id: 'host-12',
    host: { id: 'host-12', first_name: 'Morgan', last_name: 'Lee', trust_level: 'trusted' },
    location_name: 'Rooftop Bar',
    address: '900 Broadway',
    description: 'Test your 90s knowledge! Music, movies, pop culture, and history. Teams of 2-4 people. Prize for the winning team.',
    start_time: hoursFromNow(54),
    end_time: hoursFromNow(56),
    max_capacity: 40,
    current_capacity: 28,
    member_count: 28,
    is_member: false,
    price: 0,
    visibility: 'public',
    distance_miles: 2.8,
    created_at: hoursFromNow(-36),
  },
];

let memberships: Record<string, EventMember> = {
  'evt-1': {
    id: 'member-99',
    user_id: 'current-user',
    event_feed_id: 'evt-1',
    status: 'accepted',
  },
};
let memberIdCounter = 100;

function delay(ms = 600): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const mockEventsApi = {
  getEventFeed: async (_filters?: EventFilters): Promise<Event[]> => {
    await delay(800);
    return mockEventsData.map((e) => ({
      ...e,
      is_member: !!memberships[e.id],
      member_count: memberships[e.id]
        ? Math.max(e.member_count ?? 0, 1)
        : e.member_count,
    }));
  },

  getEvent: async (eventId: string): Promise<Event> => {
    await delay(500);
    const event = mockEventsData.find((e) => e.id === eventId);
    if (!event) throw { response: { status: 404, data: { detail: 'Event not found.' } } };
    return {
      ...event,
      is_member: !!memberships[eventId],
    };
  },

  joinEvent: async (eventId: string): Promise<EventMember> => {
    await delay(400);
    const event = mockEventsData.find((e) => e.id === eventId);
    if (!event) throw { response: { status: 404, data: { detail: 'Event not found.' } } };
    if (memberships[eventId]) throw { response: { status: 400, data: { detail: 'Already a member.' } } };
    const member: EventMember = {
      id: `member-${memberIdCounter++}`,
      user_id: 'current-user',
      event_feed_id: eventId,
      status: 'accepted',
    };
    memberships[eventId] = member;
    return member;
  },

  leaveEvent: async (eventId: string): Promise<void> => {
    await delay(400);
    if (!memberships[eventId]) throw { response: { status: 400, data: { detail: 'Not a member.' } } };
    delete memberships[eventId];
  },

  getCategories: async (): Promise<EventCategory[]> => {
    await delay(200);
    return [...mockCategories];
  },
};
