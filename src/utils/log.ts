import path from 'path'
import fs from 'fs'
import { getDateString } from './date-time'

export const writeLog = (type: 'INFO' | 'ERROR', uid: string, message: string) => {
  const now = new Date()
  const nowDateOnly = getDateString(now, 'YYYY-MM-DD')
  const nowTimeOnly = getDateString(now, 'HH:mm:SS')
  const logPath = path.join(__dirname, '..', '..', 'logs', `${nowDateOnly}.log`)
  const content = `${nowTimeOnly} | ${uid} | ${type}: ${message}\n`

  fs.appendFileSync(logPath, content)
}