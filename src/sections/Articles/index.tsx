import React from 'react';
import { Animation } from '../../components/Animation';
import { Section } from '../../components/Section';
import { Slider } from '../../components/Slider';
import { ArticleCard, ArticleCardSkeleton } from '../../components/ArticleCard';
// import { useSiteMetadata } from '../../../../../gatsby-theme-portfolio-minimal/src/hooks/useSiteMetadata';
// import { useLocalDataSource, useMediumFeed } from './data';
import { PageSection } from '../../types';
import * as classes from './style.module.css';
import {useSiteMetadata} from "../../hooks/useSiteMetadata";
// import {useLocalDataSource, useMediumFeed} from "./data";

enum ArticleSource {
    Medium = 'medium',
    Blog = 'blog',
}

interface ArticleSourceConfiguration {
    [ArticleSource.Medium]?: {
        profileUrl: string;
    };
    [ArticleSource.Blog]?: {
        valid: boolean;
    };
}

interface ArticlesSectionProps extends PageSection {
    sources: ArticleSource[];
}

export function ArticlesSection(props: ArticlesSectionProps): React.ReactElement {
    // const response = useLocalDataSource();
    const [articles, setArticles] = React.useState<ArticleCard[]>([]);
    // const configuration = validateAndConfigureSources(props.sources);

    // async function collectArticlesFromSources(configuration: ArticleSourceConfiguration): Promise<ArticleCard[]> {
    //     const mediumConfig = configuration[ArticleSource.Medium];
    //     const blogConfig = configuration[ArticleSource.Blog];
    //     const articleList: ArticleCard[] = [];
    //     //
    //     // if (mediumConfig !== undefined) {
    //     //     const mediumArticles = await useMediumFeed(mediumConfig.profileUrl);
    //     //     if (mediumArticles.length > 0) {
    //     //         mediumArticles.forEach((article) => {
    //     //             articleList.push({
    //     //                 category: article.categories[0],
    //     //                 title: article.title,
    //     //                 publishedAt: new Date(article.pubDate.replace(/-/g, '/')), // https://stackoverflow.com/a/5646753
    //     //                 link: article.link,
    //     //             });
    //     //         });
    //     //     }
    //     // }
    //     //
    //     // if (blogConfig !== undefined) {
    //     //     const blogArticles = response.allArticle.articles;
    //     //     if (blogArticles.length > 0) {
    //     //         blogArticles.forEach((article) => {
    //     //             articleList.push({
    //     //                 category: article.categories[0],
    //     //                 title: article.title,
    //     //                 publishedAt: new Date(article.date.replace(/-/g, '/')),
    //     //                 link: article.slug,
    //     //                 readingTime: article.readingTime.text,
    //     //             });
    //     //         });
    //     //     }
    //     // }
    //
    //     return articleList.slice().sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
    // }

    React.useEffect(() => {
        // (async function () {
        //     setArticles(await collectArticlesFromSources(configuration));
        // })();
        setArticles([
            {
                link:'https://peakculture.life/',
                category:'Peak Culture',
                title:'Chrome extension developer',
                publishedAt: new Date("08.22.2021")
            },
            {
                link:'https://www.mobileguardian.com/',
                category:'Mobile Guardian',
                title:'Mobile Developer',
                publishedAt: new Date("03/12/2019")
            },
            {
                link:'https://play.google.com/store/apps/details?id=com.jsguru.letinvite.stg&hl=en&gl=US',
                category:'LetInvite',
                title:'Flutter developer',
                publishedAt: new Date("03.22.2020"),
                publishedEnd: new Date("09.12.2021")
            },
            {
                link:'https://play.google.com/store/apps/details?id=eu.nis.emm',
                category:'Uspeh na delu',
                title:'Flutter developer',
                publishedAt: new Date("07.21.2021"),
                publishedEnd: new Date("06.29.2022")
            }
        ]as ArticleCard[]);

    }, []);


    return (
        <Animation type="fadeUp" delay={1000}>
            <Section anchor={props.sectionId} heading={props.heading}>
                <Slider additionalClasses={[classes.Articles]}>
                    {articles.length > 0
                        ? articles.slice(0, 4).map((article, key) => {
                              return <ArticleCard key={key} data={article} />;
                          })
                        : [...Array(3)].map((_, key) => {
                              return <ArticleCardSkeleton key={key} />;
                          })}
                </Slider>
            </Section>
        </Animation>
    );
}

// validateAndConfigureSources: Sources for articles can be defined as props (e.g. sources=["Medium"])
// Currently, only Medium can be used as a source but it is thinkable to extend this approach to other
// sources (e.g. an integrated Markdown blog). To collect all articles from the source, there is a
// specific configuration needed for each source type. For example, to collect articles from Medium,
// we need the profile URL. This function is responsible for validating that at least one source is
// defined. It than adds the needed configuration properties to each source and returns the config.

// function validateAndConfigureSources(sources: ArticleSource[]): ArticleSourceConfiguration {
//     const configuration: ArticleSourceConfiguration = {};
//
//     if (sources.length > 0) {
//         // Configure Medium
//         if (sources.map((i) => i.toLowerCase()).includes(ArticleSource.Medium)) {
//             const siteMetadata = useSiteMetadata();
//             configuration[ArticleSource.Medium] = { profileUrl: siteMetadata.social.medium };
//         }
//
//         // Configure Blog (actually no real configuration is required yet)
//         if (sources.map((i) => i.toLowerCase()).includes(ArticleSource.Blog)) {
//             configuration[ArticleSource.Blog] = { valid: true };
//         }
//     } else {
//         throw new Error('No Source for Articles defined.');
//     }
//
//     return configuration;
// }
