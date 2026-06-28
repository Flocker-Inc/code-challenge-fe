export interface User {
  id: string;
  first_name: string;
  last_name: string;
  display_name?: string;
  profile_image_url?: string;
  trust_level?: 'new' | 'member' | 'trusted' | 'verified' | 'legendary' | 'banned';
}

export interface EventCategory {
  id: number;
  name: string;
  icon?: string;
}

export interface EventMember {
  id: string;
  user_id: string;
  event_feed_id: string;
  status: 'pending' | 'accepted';
  user?: User;
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  category_id?: number;
  category?: EventCategory;
  host_id: string;
  host?: User;
  location_name?: string;
  address?: string;
  start_time: string;
  end_time?: string;
  max_capacity?: number;
  current_capacity?: number;
  price?: number;
  visibility: 'public' | 'filtered' | 'private';
  cover_image_url?: string;
  tags?: string[];
  member_count?: number;
  is_member?: boolean;
  distance_miles?: number;
  created_at?: string;
}
