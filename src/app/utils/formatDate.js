import moment from "moment";

export default function(timestamp) {
    const date = moment(new Date(timestamp));
    const yesterday = moment().add(-1, 'days');
    const tomorrow = moment().add(1, 'days');

    const isYesterday = date.isSame(yesterday, 'd');
    const isTomorrow = date.isSame(tomorrow, 'd');

    if (isYesterday) return `Yesterday, ${date.format('MMM DD, HH:mm')}`;
    if (isTomorrow) return `Tomorrow, ${date.format('MMM DD, HH:mm')}`;
    return date.format('dddd, MMM DD, HH:mm');
}