function parseURL(url) {
    const urlPattern = /^(https?:\/\/)?([^\/\s]+)(\/[^\s]*)?$/;
    const match = url.match(urlPattern);

    if (match) {
        return {
            protocol: match[1] ? match[1].slice(0, -3) : null, 
            host: match[2],
            path: match[3] || null
        };
    } else {
        return null; 
    }
}

const testURL = "https://www.example.com/path/to/resource";
const parsed = parseURL(testURL);
console.log(parsed);
