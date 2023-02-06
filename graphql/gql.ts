/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n\t\tquery AdminEmail {\n\t\t\tallSettings {\n\t\t\t\tgeneralSettingsEmail\n\t\t\t}\n\t\t}\n\t": types.AdminEmailDocument,
    "\n\t\tmutation SendEmail($input: SendEmailInput!) {\n\t\t\tsendEmail(input: $input) {\n\t\t\t\tsent\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t": types.SendEmailDocument,
    "\n\t\t\tquery AllSettings {\n\t\t\t\tallSettings {\n\t\t\t\t\tgeneralSettingsTitle\n\t\t\t\t\tgeneralSettingsDescription\n\t\t\t\t}\n\t\t\t\tviewer {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\turl\n\t\t\t\t\tavatar(size: 360) {\n\t\t\t\t\t\turl\n\t\t\t\t\t\tfoundAvatar\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t": types.AllSettingsDocument,
    "\n\t\t\tquery SingleMenu($id: ID!) {\n\t\t\t\tmenu(id: $id, idType: ID) {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tmenuItems {\n\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tlabel\n\t\t\t\t\t\t\t\torder\n\t\t\t\t\t\t\t\turi\n\t\t\t\t\t\t\t\ttarget\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t": types.SingleMenuDocument,
    "\n\t\t\tquery ListPosts {\n\t\t\t\tposts(where: { status: PUBLISH }) {\n\t\t\t\t\tnodes {\n\t\t\t\t\t\tid\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\tdateGmt\n\t\t\t\t\t\turi\n\t\t\t\t\t\texcerpt(format: RAW)\n\t\t\t\t\t\tauthor {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tdatabaseId\n\t\t\t\t\t\t\t\tavatar(size: 360) {\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\tfoundAvatar\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tsourceUrl\n\t\t\t\t\t\t\t\taltText\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\ttags {\n\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t": types.ListPostsDocument,
    "\n\t\t\t\tquery MediaItems($inIds: [ID]!) {\n\t\t\t\t\tmediaItems(where: { in: $inIds }) {\n\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tdatabaseId\n\t\t\t\t\t\t\t\tsourceUrl\n\t\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\t\tcaption\n\t\t\t\t\t\t\t\tmediaDetails {\n\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t": types.MediaItemsDocument,
    "\n\t\t\t\tquery AuthorDetails($id: ID!) {\n\t\t\t\t\tuser(id: $id, idType: DATABASE_ID) {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdatabaseId\n\t\t\t\t\t\tavatar(size: 360) {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\tfoundAvatar\n\t\t\t\t\t\t}\n\t\t\t\t\t\troles {\n\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\tdisplayName\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t# Same as listPosts query\n\t\t\t\t\t\tposts {\n\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t\tdateGmt\n\t\t\t\t\t\t\t\t\turi\n\t\t\t\t\t\t\t\t\texcerpt(format: RAW)\n\t\t\t\t\t\t\t\t\tauthor {\n\t\t\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t\t\tdatabaseId\n\t\t\t\t\t\t\t\t\t\t\tavatar(size: 360) {\n\t\t\t\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\t\t\t\tfoundAvatar\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t\t\tsourceUrl\n\t\t\t\t\t\t\t\t\t\t\taltText\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\ttags {\n\t\t\t\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t": types.AuthorDetailsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery AdminEmail {\n\t\t\tallSettings {\n\t\t\t\tgeneralSettingsEmail\n\t\t\t}\n\t\t}\n\t"): (typeof documents)["\n\t\tquery AdminEmail {\n\t\t\tallSettings {\n\t\t\t\tgeneralSettingsEmail\n\t\t\t}\n\t\t}\n\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tmutation SendEmail($input: SendEmailInput!) {\n\t\t\tsendEmail(input: $input) {\n\t\t\t\tsent\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t"): (typeof documents)["\n\t\tmutation SendEmail($input: SendEmailInput!) {\n\t\t\tsendEmail(input: $input) {\n\t\t\t\tsent\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tquery AllSettings {\n\t\t\t\tallSettings {\n\t\t\t\t\tgeneralSettingsTitle\n\t\t\t\t\tgeneralSettingsDescription\n\t\t\t\t}\n\t\t\t\tviewer {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\turl\n\t\t\t\t\tavatar(size: 360) {\n\t\t\t\t\t\turl\n\t\t\t\t\t\tfoundAvatar\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tquery AllSettings {\n\t\t\t\tallSettings {\n\t\t\t\t\tgeneralSettingsTitle\n\t\t\t\t\tgeneralSettingsDescription\n\t\t\t\t}\n\t\t\t\tviewer {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\turl\n\t\t\t\t\tavatar(size: 360) {\n\t\t\t\t\t\turl\n\t\t\t\t\t\tfoundAvatar\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tquery SingleMenu($id: ID!) {\n\t\t\t\tmenu(id: $id, idType: ID) {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tmenuItems {\n\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tlabel\n\t\t\t\t\t\t\t\torder\n\t\t\t\t\t\t\t\turi\n\t\t\t\t\t\t\t\ttarget\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tquery SingleMenu($id: ID!) {\n\t\t\t\tmenu(id: $id, idType: ID) {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tmenuItems {\n\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tlabel\n\t\t\t\t\t\t\t\torder\n\t\t\t\t\t\t\t\turi\n\t\t\t\t\t\t\t\ttarget\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\tquery ListPosts {\n\t\t\t\tposts(where: { status: PUBLISH }) {\n\t\t\t\t\tnodes {\n\t\t\t\t\t\tid\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\tdateGmt\n\t\t\t\t\t\turi\n\t\t\t\t\t\texcerpt(format: RAW)\n\t\t\t\t\t\tauthor {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tdatabaseId\n\t\t\t\t\t\t\t\tavatar(size: 360) {\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\tfoundAvatar\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tsourceUrl\n\t\t\t\t\t\t\t\taltText\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\ttags {\n\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"): (typeof documents)["\n\t\t\tquery ListPosts {\n\t\t\t\tposts(where: { status: PUBLISH }) {\n\t\t\t\t\tnodes {\n\t\t\t\t\t\tid\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\tdateGmt\n\t\t\t\t\t\turi\n\t\t\t\t\t\texcerpt(format: RAW)\n\t\t\t\t\t\tauthor {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tdatabaseId\n\t\t\t\t\t\t\t\tavatar(size: 360) {\n\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\tfoundAvatar\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tsourceUrl\n\t\t\t\t\t\t\t\taltText\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\ttags {\n\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\t\tquery MediaItems($inIds: [ID]!) {\n\t\t\t\t\tmediaItems(where: { in: $inIds }) {\n\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tdatabaseId\n\t\t\t\t\t\t\t\tsourceUrl\n\t\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\t\tcaption\n\t\t\t\t\t\t\t\tmediaDetails {\n\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"): (typeof documents)["\n\t\t\t\tquery MediaItems($inIds: [ID]!) {\n\t\t\t\t\tmediaItems(where: { in: $inIds }) {\n\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\tdatabaseId\n\t\t\t\t\t\t\t\tsourceUrl\n\t\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\t\tcaption\n\t\t\t\t\t\t\t\tmediaDetails {\n\t\t\t\t\t\t\t\t\theight\n\t\t\t\t\t\t\t\t\twidth\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\t\t\tquery AuthorDetails($id: ID!) {\n\t\t\t\t\tuser(id: $id, idType: DATABASE_ID) {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdatabaseId\n\t\t\t\t\t\tavatar(size: 360) {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\tfoundAvatar\n\t\t\t\t\t\t}\n\t\t\t\t\t\troles {\n\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\tdisplayName\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t# Same as listPosts query\n\t\t\t\t\t\tposts {\n\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t\tdateGmt\n\t\t\t\t\t\t\t\t\turi\n\t\t\t\t\t\t\t\t\texcerpt(format: RAW)\n\t\t\t\t\t\t\t\t\tauthor {\n\t\t\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t\t\tdatabaseId\n\t\t\t\t\t\t\t\t\t\t\tavatar(size: 360) {\n\t\t\t\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\t\t\t\tfoundAvatar\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t\t\tsourceUrl\n\t\t\t\t\t\t\t\t\t\t\taltText\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\ttags {\n\t\t\t\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"): (typeof documents)["\n\t\t\t\tquery AuthorDetails($id: ID!) {\n\t\t\t\t\tuser(id: $id, idType: DATABASE_ID) {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdatabaseId\n\t\t\t\t\t\tavatar(size: 360) {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\tfoundAvatar\n\t\t\t\t\t\t}\n\t\t\t\t\t\troles {\n\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\tdisplayName\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t# Same as listPosts query\n\t\t\t\t\t\tposts {\n\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t\tdateGmt\n\t\t\t\t\t\t\t\t\turi\n\t\t\t\t\t\t\t\t\texcerpt(format: RAW)\n\t\t\t\t\t\t\t\t\tauthor {\n\t\t\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t\t\tdatabaseId\n\t\t\t\t\t\t\t\t\t\t\tavatar(size: 360) {\n\t\t\t\t\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t\t\t\t\t\tfoundAvatar\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tfeaturedImage {\n\t\t\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t\t\tsourceUrl\n\t\t\t\t\t\t\t\t\t\t\taltText\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\ttags {\n\t\t\t\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;