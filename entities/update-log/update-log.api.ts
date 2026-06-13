import { UPDATE_LOG } from '@entities/update-log/update-log.content'
import type { UpdateLogEntry } from '@entities/update-log/update-log.type'

export const getUpdateLog = (): UpdateLogEntry[] => UPDATE_LOG
