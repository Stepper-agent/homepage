export type UpdateLogChange = {
    type: string
    scope?: string
    subject: string
    hash: string
}

export type UpdateLogGroup = {
    label: string
    items: UpdateLogChange[]
}

export type UpdateLogEntry = {
    version: string
    tag?: string
    date?: string
    groups: UpdateLogGroup[]
}
