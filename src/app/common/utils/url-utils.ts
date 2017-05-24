export class UrlUtils{
    static getUrlParams = () => window.location.pathname.split("/").pop();
}