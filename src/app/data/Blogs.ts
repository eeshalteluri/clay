type BlogType = {
    id: number,
    title: string,
    image: string,
}

const Blogs = [
    {
        id: 1,
        title: 'How Clay uses Clay to automate inbound lead outreach at scale',
        image:'/blog1.avif',
    },
    {
        id: 2,
        title: 'How Anthropic uses Clay to 3x their enrichment coverage—with no manual work ',
        image:'/blog2.avif',
    },
    {
        id: 3,
        title: 'Outbound sales automation: How to 10x your pipeline with AI',
        image:'/blog3.avif',
    },
    {
        id: 4,
        title: 'The best B2B email list providers of 2024 [with test results]',
        image:'/blog4.avif',
    },
    {
        id: 5,
        title: 'AI lead generation',
        image:'/blog5.webp',
    },
]

export { Blogs, type BlogType }