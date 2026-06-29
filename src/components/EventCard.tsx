import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Event } from '../types';
import { colors } from '../theme/colors';
import { fonts } from '../theme/typography';
import Avatar from './Avatar';

interface EventCardProps {
  event: Event;
  onPress: () => void;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export default function EventCard({ event, onPress }: EventCardProps) {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const hostName = event.host
    ? `${event.host.first_name} ${event.host.last_name}`
    : 'Unknown Host';

  return (
    <TouchableOpacity
      style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
      onPress={onPress}
      activeOpacity={1}
    >
      {event.cover_image_url ? (
        <Image
          source={{ uri: event.cover_image_url }}
          style={StyleSheet.absoluteFillObject}
          resizeMode="cover"
        />
      ) : (
        <View style={[StyleSheet.absoluteFillObject, styles.imagePlaceholder]}>
          <Text style={styles.imagePlaceholderText}>
            {event.category?.icon ?? '📍'}
          </Text>
        </View>
      )}

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.85)']}
        style={[styles.gradient, { height: SCREEN_HEIGHT * 0.45 }]}
        pointerEvents="none"
      />

      <View style={[styles.overlay, { bottom: 24 + insets.bottom }]}>
        <View style={styles.hostRow}>
          <Avatar
            uri={event.host?.profile_image_url}
            name={hostName}
            size={32}
          />
          <Text style={styles.hostName}>{hostName}</Text>
        </View>

        <Text style={styles.title} numberOfLines={2}>
          {event.title}
        </Text>

        <View style={styles.tagsRow}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{formatDate(event.start_time)}</Text>
          </View>
          {event.distance_miles != null && (
            <View style={styles.tag}>
              <Text style={styles.tagText}>{event.distance_miles.toFixed(1)} miles</Text>
            </View>
          )}
        </View>

        <View style={styles.attendeesRow}>
          <Text style={styles.attendeesText}>
            {event.member_count ?? 0} going
            {event.max_capacity ? ` · ${event.max_capacity} max` : ''}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imagePlaceholder: {
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    fontSize: 60,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    position: 'absolute',
    left: 24,
    right: 24,
  },
  hostRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  hostName: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 14,
    color: colors.white,
    marginLeft: 8,
  },
  title: {
    fontFamily: fonts.poppinsBold,
    fontSize: 24,
    color: colors.white,
    lineHeight: 30,
    marginBottom: 10,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 10,
  },
  tag: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  tagText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 13,
    color: colors.white,
  },
  attendeesRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  attendeesText: {
    fontFamily: fonts.poppinsRegular,
    fontSize: 14,
    color: colors.white,
    opacity: 0.85,
  },
});
