import React from 'react'
import ImageWithZoom from 'react-medium-image-zoom'
import { useThemeUI } from 'theme-ui'

interface Props {
    src: string
    alt?: string
}

export const Zoom = (props: Props) => {
    const { theme } = useThemeUI()

    const image = {
        ...props,
        className: 'Image__Zoom',
        style: {
            display: 'block',
            margin: '0 auto',
            width: '100%',
        },
    }

    return (
        <ImageWithZoom
            image={image}
            zoomImage={image}
            onZoom={() =>
                handleImageZoomBackground(theme.colors.background) as any
            }
            defaultStyles={{
                zoomImage: {
                    borderRadius: '5px',
                },
            }}
        />
    )
}

function handleImageZoomBackground(background: string) {
    const images = Array.from(document.getElementsByClassName('Image__Zoom'))

    images.map(img => {
        if (
            img.previousElementSibling &&
            img.previousElementSibling.tagName === 'DIV'
        ) {
            ;(img.previousElementSibling as any).style.background = background
        }
    })
}
