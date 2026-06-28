# Flocker Frontend Engineering Code Challenge

**Expected time: 2 hours or less**

```bash
npm install --legacy-peer-deps
npx expo start
```

This challenge is an opportunity for you to display your knowledge of system architecture, design patterns, code quality, and best practices.

You are building the core browsing experience for **Flocker** — a mobile app for discovering and hosting local real-life events. The signature UX is a TikTok-style vertical feed where events fill the screen and you swipe up/down through them.

## Background

Flocker is a two-sided marketplace for micro-events (2–50 people) — think Airbnb for real-life experiences. The vertical feed is the **core discovery loop**: it looks and feels like a social app (swipeable, full-screen cards), but the backend ranks events by geospatial proximity, friendship graph, trust scores, mood, weather, and AI signals.

The real product is *infrastructure disguised as a swipeable consumer app* — a recommendation engine solving a real problem: people are surrounded by potential friends but have no way to connect IRL. The vertical card feed is where that connection starts: swipe up to find your next event, tap to RSVP, show up.

This challenge asks you to build that feed.

## What's Provided

| File | Notes |
|------|-------|
| `src/types/index.ts` | `Event`, `User`, `EventMember`, `EventCategory` types |
| `src/theme/` | Colors, typography (Poppins + Poller One), spacing constants |
| `src/navigation/AppNavigator.tsx` | Stack navigator |
| `src/components/Button.tsx` | Primary/secondary/outline + loading state |
| `src/components/Avatar.tsx` | Image or initials fallback |
| `src/api/events.ts` | Mock toggle (`USE_MOCK_API=true`) |
| `src/api/mock/events.ts` | 12 fake events with simulated delay. Methods: `getEventFeed`, `getEvent(id)`, `joinEvent(id)`, `leaveEvent(id)`, `getCategories` |
| `src/components/EventCard.tsx` | Full-screen TikTok-style card (cover image, overlay text, gradient) |
| `src/screens/EventFeedScreen.tsx` | **Your starting point** — currently a placeholder |

## Requirements

### Required

Build `EventFeedScreen`:

1. **Fetch events** from `eventsApi.getEventFeed()` on mount
2. **Display one event per screen** in a vertical feed (TikTok-style — swipe up/down to move between events).
3. **Swipe up/down** with a pan gesture. One swipe advances one event.
4. **Handle 4 states:**
   - **Loading:** spinner or skeleton while fetching
   - **Error:** message + "Retry" button
   - **Empty:** friendly message when no events exist
   - **Data:** the feed with events
5. **Tap a card** → open a bottom sheet / overlay with **full event details** (use `eventsApi.getEvent(id)` for the expanded data) and a **JOIN** button. If already joined (`is_member`), show **LEAVE** instead.
6. The RSVP button shows a **loading spinner** while the request processes. Update the UI when it completes.

### Adds polish

- Spring animation on card drag
- Next card peeks from behind as you drag
- Smooth opacity/translate when a card exits

### Nice to have

- Swipe-right to RSVP (with haptic feedback)
- Liked events counter
- Empty deck state ("No more events!")
- Skeleton loading instead of a spinner

## Tips

- **Architecture is yours** — we deliberately don't prescribe how to structure this. Component decomposition, state management, file organization: entirely your call.
- **Gesture & animation deps are pre-installed** — react-native-gesture-handler and react-native-reanimated are ready to use.
- **Use the existing pieces** — EventCard, Button, Avatar, theme, types. The mock API works out of the box.
- **We will run `npm install --legacy-peer-deps && npx expo start`** — make sure it works.

- Send us your updated repo
