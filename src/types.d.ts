import { Reporter, Actions, Node } from '../../../gatsby-theme-portfolio-minimal/src/gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface AllSettingsQueryResult<T> {
    allSettingsJson: {
        settings: T[];
    };
}

interface ImageObject {
    alt: string | null;n
    src: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    } | null;
}

interface PageSection {
    sectionId: string;
    heading?: string;
}

interface GatsbyNodeHelpers {
    actions: Actions;
    createContentDigest: (input: unknown) => string;
    createNodeId: (input: string) => string;
    createResolvers: (resolvers: unknown) => void;
    getNode: (id: string) => Node;
    node: Node;
    reporter: Reporter;
}
