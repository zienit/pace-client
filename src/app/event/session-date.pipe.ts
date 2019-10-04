import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sessionDate'
})
export class SessionDatePipe implements PipeTransform {

  transform(value: Date, timezone: string): Date {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }
    const formatter = new Intl.DateTimeFormat(
      'en-us',
      timezone ? { ...options, timeZone: timezone } : options
    );
    const parts = formatter.formatToParts(value);
    return parts.reduce((date, part) => {
      switch (part.type) {
        case 'year':
          date.setFullYear(+part.value);
          break;
        case 'month':
          date.setMonth(+part.value);
          break;
        case 'day':
          date.setDate(+part.value);
          break;
        case 'hour':
          date.setHours(+part.value);
          break;
        case 'minute':
          date.setMinutes(+part.value);
          break;
        case 'second':
          date.setSeconds(+part.value);
          break;
      }
      return date;
    }, new Date())
  }
}
