declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" as "GET" };

handleRequest(req.url, req.method as "GET");

//

declare function handleRequest2(url: string, method: "GET" | "POST"): void;

const req2 = { url: "https://example.com", method: "GET" } as const;
handleRequest2(req2.url, req2.method);
