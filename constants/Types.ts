/**
 * This file contains all the data-types used in the application.
 * Change these types as needed -- but ensure that nothing breaks when you do
 */

import * as url from "url";

/**
 * User data
 */
export type User = {
    name: string,
    phoneNumber: string,
    password: string,
    styles: string[]
};
export function emptyUser(): User {
    return {name: "", phoneNumber: "", password: "", styles: []}
}

/**
 * Clothing data (which maps to a Image)
 */
export type Style = {
    articleType: string,
    baseColour: string,
    gender: string,
    masterCategory: string,
    productDisplayName: string,
    season: string,
    subcategory: string,
    usage: string,
    year: number
}
export function emptyStyle(): Style {
    return {articleType: "", baseColour: "", gender: "", masterCategory: "", productDisplayName: "", season: "", subcategory: "", usage: "", year: NaN}
}

export type Image = {
    link: string
}