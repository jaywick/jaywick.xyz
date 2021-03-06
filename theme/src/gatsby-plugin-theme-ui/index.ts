import { merge } from 'lodash'

import { colors } from './colors'
import { tags } from './tags'

const breakpoints = [
    ['phone_small', 320],
    ['phone', 376],
    ['phablet', 540],
    ['tablet', 735],
    ['desktop', 1070],
    ['desktop_medium', 1280],
    ['desktop_large', 1440],
]

const fonts = {
    serif: "'Roboto Slab', 'Merriweather', 'Cambria', Georgia, Serif",
    sansSerif:
        "'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
    monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
}

const colorModeTransition =
    'background 0.25s var(--ease-in-out-quad), color 0.25s var(--ease-in-out-quad)'

export const theme = merge({
    initialColorMode: 'dark',
    useCustomProperties: true,
    colorModeTransition,
    colors,
    fonts,
    breakpoints,
    tags,
})

export type IColors = typeof colors

export default theme
