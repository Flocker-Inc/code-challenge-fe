import client from './client';
import { mockEventsApi } from './mock/events';
import { USE_MOCK_API } from '../config';
import { Event, EventCategory, EventMember } from '../types';

export interface EventFilters {
  start?: string;
  end?: string;
  radius?: number;
  category_id?: number;
  gps_lat?: number;
  gps_lng?: number;
}

export interface CreateEventPayload {
  title: string;
  description?: string;
  category_id?: number;
  gps_lat?: number;
  gps_lng?: number;
  location_name?: string;
  address?: string;
  start_time: string;
  end_time?: string;
  max_capacity?: number;
  price?: number;
  visibility: 'public' | 'filtered' | 'private';
  cover_image_url?: string;
}

export const eventsApi = {
  getEventFeed: async (filters?: EventFilters): Promise<Event[]> => {
    if (USE_MOCK_API) return mockEventsApi.getEventFeed(filters);
    const response = await client.get<Event[]>('/event_feed', { params: filters });
    return response.data;
  },

  getEvent: async (eventId: string): Promise<Event> => {
    if (USE_MOCK_API) return mockEventsApi.getEvent(eventId);
    const response = await client.get<Event>(`/event_feed/${eventId}`);
    return response.data;
  },

  joinEvent: async (eventId: string): Promise<EventMember> => {
    if (USE_MOCK_API) return mockEventsApi.joinEvent(eventId);
    const response = await client.post<EventMember>('/event_feed_members', {
      event_feed_id: eventId,
    });
    return response.data;
  },

  leaveEvent: async (eventId: string): Promise<void> => {
    if (USE_MOCK_API) return mockEventsApi.leaveEvent(eventId);
    await client.delete(`/event_feed_members/${eventId}`);
  },

  getCategories: async (): Promise<EventCategory[]> => {
    if (USE_MOCK_API) return mockEventsApi.getCategories();
    const response = await client.get<EventCategory[]>('/event_feed_categories');
    return response.data;
  },
};
