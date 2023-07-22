import moment from 'moment'

export const getDateString = (date: Date, format?: string) => moment(date).format(format || 'DD/MM/YYYY HH:mm:SS')