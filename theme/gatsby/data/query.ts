/* eslint-disable */

// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js

export const queryArticles = `
{
    articles: allArticle(
        sort: { fields: [date, title], order: DESC }
        limit: 1000
    ) {
        edges {
            node {
                id
                permaLink
                link
                title
                author
                date(formatString: "MMMM Do, YYYY")
                dateForSEO: date
                timeToRead
                secret
                excerpt
                body
                tag
                hero {
                    full: childImageSharp {
                        fluid(maxWidth: 944, quality: 100) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                    regular: childImageSharp {
                        fluid(maxWidth: 653, quality: 100) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                    narrow: childImageSharp {
                        fluid(maxWidth: 457, quality: 100) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                    seo: childImageSharp {
                        fixed(width: 1200, quality: 100) {
                            src
                        }
                    }
                }
            }
        }
    }
}`

export const queryTags = `
{
    tags: allTag {
        edges {
            node {
                name
                key
                story
                hero {
                    full: childImageSharp {
                        fluid(maxWidth: 944, quality: 100) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                    regular: childImageSharp {
                        fluid(maxWidth: 653, quality: 100) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                    narrow: childImageSharp {
                        fluid(maxWidth: 457, quality: 100) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                    seo: childImageSharp {
                        fixed(width: 1200, quality: 100) {
                            src
                        }
                    }
                }
            }
        }
    }
}`

export const queryAuthors = `
{
    authors: allAuthor {
        edges {
            node {
                authorsPage
                bio
                id
                name
                featured
                social {
                    url
                }
                permaLink
                avatar {
                    small: childImageSharp {
                        fluid(maxWidth: 50, quality: 100) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                    medium: childImageSharp {
                        fluid(maxWidth: 100, quality: 100) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                    large: childImageSharp {
                        fluid(maxWidth: 328, quality: 100) {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                }
            }
        }
    }
}`
