import { DateTime, IANAZone } from 'luxon';

const STOCKS_MARKETS_TIME_ZONE_IANA = IANAZone.create('America/New_York');

export const isStocksOpen = (dateToCheck) => {
	const now = DateTime.fromJSDate(dateToCheck).setZone(STOCKS_MARKETS_TIME_ZONE_IANA);
	const weekday = now.weekday; // 1 = Montag, 7 = Sonntag
	const hour = now.hour;
	const dayOfMonth = now.day;
	const month = now.month;
	const minute = now.minute;

	const isClosed =
		// New Year's Day 2025 (1. Januar 2025)
		(month === 1 && dayOfMonth === 1) ||
		// Martin Luther King, Jr. Day 2025 (20. Januar 2025)
		(month === 1 && dayOfMonth === 20) ||
		// Washington's Birthday (Presidents' Day) 2025 (17. Februar 2025)
		(month === 2 && dayOfMonth === 17) ||
		// Good Friday 2025 (18. April 2025)
		(month === 4 && dayOfMonth === 18) ||
		// Memorial Day 2025 (26. Mai 2025)
		(month === 5 && dayOfMonth === 26) ||
		// Juneteenth National Independence Day 2025 (19. Juni 2025)
		(month === 6 && dayOfMonth === 19) ||
		// Independence Day 2025 (4. Juli 2025)
		(month === 7 && dayOfMonth === 4) ||
		// Labor Day 2025 (1. September 2025)
		(month === 9 && dayOfMonth === 1) ||
		// Thanksgiving Day 2025 (27. November 2025)
		(month === 11 && dayOfMonth === 27) ||
		// Friday after Thanksgiving Day 2025 (closes early at 1 PM, 28. November 2025)
		(month === 11 && dayOfMonth === 28 && hour >= 13) ||
		// Christmas Day 2025 (25. Dezember 2025)
		(month === 12 && dayOfMonth === 25) ||
		// Saturday
		weekday === 6 ||
		// Sunday
		weekday === 7 ||
		// Mo-Fr Daily Opening (before 9:30 AM)
		hour < 9 || (hour === 9 && minute < 30) ||
		// Mo-Fr Daily Closing (after 4:00 PM)
		hour >= 16;

	return !isClosed;
};
