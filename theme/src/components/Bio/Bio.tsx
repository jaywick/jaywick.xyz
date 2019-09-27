import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Image from '@components/Image'
import { IAuthor } from '@types'

function Bio({ author }: IAuthor) {
    return (
        <BioContainer>
            <BioAvatar
                as={author.authorsPage ? Link : 'div'}
                to={author.slug}
                data-a11y='false'
                aria-label="Author's bio"
            >
                <BioAvatarInner>
                    <Image src={author.avatar.medium} />
                </BioAvatarInner>
            </BioAvatar>
            <BioTextContainer>
                <BioText
                    dangerouslySetInnerHTML={{
                        __html: author.bio.split('<br/>')[0],
                    }}
                />
                <BioSubtitle
                    dangerouslySetInnerHTML={{
                        __html: author.bio.split('<br/>')[1],
                    }}
                />
            </BioTextContainer>
        </BioContainer>
    )
}

export default Bio

const BioContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    left: -10px;
`

const BioAvatar = styled.div`
    display: block;
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
    margin-right: 16px;
    margin: 10px 26px 10px 10px;

    &::after {
        content: '';
        position: absolute;
        left: -5px;
        top: -5px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.25);
    }

    &[data-a11y='true']:focus::after {
        content: '';
        position: absolute;
        left: -5px;
        top: -5px;
        width: 50px;
        height: 50px;
        border: 2px solid ${p => p.theme.colors.accent};
    }
`

const BioAvatarInner = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
    margin-right: 16px;
    overflow: hidden;
`

const BioText = styled.div`
    max-width: 430px;
    font-weight: bold;
    line-height: 1.15;
    color: ${p => p.theme.colors.primary};
    margin-bottom: 2px;

    a {
        color: ${p => p.theme.colors.primary};
        text-decoration: underline;
    }
`

const BioSubtitle = styled.div`
    margin-top: 2px;
    line-height: 1.15;
    color: ${p => p.theme.colors.grey};

    a {
        color: ${p => p.theme.colors.grey};
        text-decoration: underline;
    }
`

const BioTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`