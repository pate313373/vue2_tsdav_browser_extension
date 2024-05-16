import browser from 'webextension-polyfill';
import { DAVClient } from 'tsdav';
import { createEvent } from 'ics';

browser.runtime.onInstalled.addListener(async () => {
	console.log('Extension installed');

	try {
		const calDavClient = new DAVClient({
			serverUrl: 'https://caldav.icloud.com',
			credentials: { username: 'xxx@gmail.com', password: 'xxx' },
			authMethod: 'Basic',
			defaultAccountType: 'caldav',
		});
		await calDavClient.login();

		const calendars = await calDavClient.fetchCalendars();
		const workCalendar = calendars.find((calendar) => calendar.displayName === 'Arbeit');
		const calendarObjects = await calDavClient.fetchCalendarObjects({
			calendar: workCalendar,
			timeRange: { start: '2021-11-01', end: '2021-12-01' },
		});
		console.log('calDavClient', calDavClient);
		console.log('calendars', calendars);
		console.log('calendarObjects', calendarObjects);

		// const newCalendar = ical({ name: 'temp', timezone: 'Europe/Vienna' })
		// const newEvent = newCalendar.createEvent({
		// 	summary: 'Termin B',
		// 	start: DateTime.fromObject({ year: 2021, month: 11, day: 27, hour: 20 }),
		// 	end: DateTime.fromObject({ year: 2021, month: 11, day: 27, hour: 21 })
		// })
		const newEvent = createEvent(
			{ title: 'Termin B', start: [2023, 11, 21, 9, 0], duration: { hours: 1 }, busyStatus: 'BUSY', location: 'Moon' },
			async (error, value) => {
				if (error) {
					console.error(error);
					return;
				}
				console.log('newEvent', value);
				const result = await calDavClient.createCalendarObject({
					calendar: workCalendar,
					iCalString: value,
					filename: 'Termin_B.ics',
				});
				console.log('created event:', result);
			}
		);
	} catch (error) {
		console.error(error);
	}
});
