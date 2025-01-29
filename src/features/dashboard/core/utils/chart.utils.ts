import colorLib from '@kurkle/color';
import { COLORS, MONTHS } from '../constants/chart.const';
import { DateTime } from 'luxon';

export function color(index: number) {
    return COLORS[index % COLORS.length];
}

export function transparentize(value: string, opacity: number) {
    var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return colorLib(value).alpha(alpha).rgbString();
}


export function months(config: any) {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;

    for (i = 0; i < count; ++i) {
        value = MONTHS[Math.ceil(i) % 12];
        values.push(value.substring(0, section));
    }

    return values;
}



export function newDate(days: number) {
    return DateTime.now().plus({ days }).toJSDate();
}

export function newDateString(days: number) {
    return DateTime.now().plus({ days }).toISO();
}

export function parseISODate(str: string) {
    return DateTime.fromISO(str);
}


